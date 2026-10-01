import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';
import { VERIFIED_SCHEMES, type Language } from './src/data/schemes.ts';
import { getInitialAIResponseForLanguage } from './src/data/translations.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getGenAIClient() {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const LANGUAGE_NAMES: Record<Language, string> = {
  ta: 'Simple Tamil (எளிய தமிழ்)',
  en: 'Simple English',
  te: 'Simple Telugu (సులభమైన తెలుగు)',
  hi: 'Simple Hindi (सरल हिन्दी)',
  kn: 'Simple Kannada (ಸರಳ ಕನ್ನಡ)',
  ml: 'Simple Malayalam (ലളിതമായ മലയാളം)',
};

// Mask any accidental Aadhaar (12 digits) or PIN/OTP numbers for user safety
function maskSensitiveDigits(input: string): { sanitized: string; hadSensitive: boolean } {
  let hadSensitive = false;
  const aadhaarRegex = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;
  let sanitized = input.replace(aadhaarRegex, () => {
    hadSensitive = true;
    return '[REDACTED_ID]';
  });
  const otpPinRegex = /\b(?:otp|pin|password|passcode)\s*[:=-]?\s*\d{4,8}\b/gi;
  sanitized = sanitized.replace(otpPinRegex, () => {
    hadSensitive = true;
    return '[REDACTED_SECRET]';
  });
  return { sanitized, hadSensitive };
}

const COMPACT_SCHEMES_SUMMARY = VERIFIED_SCHEMES.map((s) => ({
  id: s.id,
  category: s.category,
  level: s.level,
  nameTa: s.nameTa,
  nameEn: s.nameEn,
  benefitTa: s.benefitTa,
  benefitEn: s.benefitEn,
  eligibilityEn: s.eligibilityEn,
  documentsEn: s.documentsEn,
  howToApplyEn: s.howToApplyEn,
  officialSourceName: s.officialSourceName,
  officialSourceUrl: s.officialSourceUrl,
}));

function buildSystemInstruction(targetLang: Language): string {
  const langName = LANGUAGE_NAMES[targetLang] || LANGUAGE_NAMES.ta;
  return `You are "Namma Sakhi" (நம்ம சகி), a warm, respectful, and trustworthy AI Government Scheme Assistant for first-time rural women smartphone users in India.

LANGUAGE RULE:
- Selected language: **${langName}** (code: "${targetLang}").
- Write all primary fields ("greetingTa", "summaryTa", "spokenScriptTa", "schemeNameTa", "benefitTa", "eligibilityTa", "requiredDocumentsTa", "howToApplyTa", "verificationNoteTa", "safetyReminderTa") in **${langName}** using simple everyday spoken words.
- Write all secondary "*En" fields in clear, simple English.

CONTENT & SAFETY RULES:
1. Understand ANY user input: Tamil, Telugu, Hindi, Kannada, Malayalam, Tanglish, or English.
2. DO NOT INVENT GOVERNMENT SCHEMES. Only use real, verified schemes from https://www.myscheme.gov.in/.
3. Always use https://www.myscheme.gov.in/ as officialSourceUrl.
4. Clearly remind the user to verify latest rules on https://www.myscheme.gov.in/ or at their local Government e-Sevai / Common Service Centre (CSC).
5. Never claim that this app submits applications automatically.
6. SAFETY: Never ask for OTP, Password, ATM PIN, Bank PIN, or Full Aadhaar number. Remind: "OTP, password, PIN and sensitive personal information-ai share panna vendam."

Verified reference schemes from https://www.myscheme.gov.in/:
${JSON.stringify(COMPACT_SCHEMES_SUMMARY)}

Include 1 to 2 most relevant schemes matching the user's question.`;
}

const RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    greetingTa: { type: Type.STRING },
    greetingEn: { type: Type.STRING },
    summaryTa: { type: Type.STRING },
    summaryEn: { type: Type.STRING },
    spokenScriptTa: { type: Type.STRING },
    spokenScriptEn: { type: Type.STRING },
    schemes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          schemeNameTa: { type: Type.STRING },
          schemeNameEn: { type: Type.STRING },
          benefitTa: { type: Type.STRING },
          benefitEn: { type: Type.STRING },
          eligibilityTa: { type: Type.ARRAY, items: { type: Type.STRING } },
          eligibilityEn: { type: Type.ARRAY, items: { type: Type.STRING } },
          requiredDocumentsTa: { type: Type.ARRAY, items: { type: Type.STRING } },
          requiredDocumentsEn: { type: Type.ARRAY, items: { type: Type.STRING } },
          howToApplyTa: { type: Type.ARRAY, items: { type: Type.STRING } },
          howToApplyEn: { type: Type.ARRAY, items: { type: Type.STRING } },
          officialSourceName: { type: Type.STRING },
          officialSourceUrl: { type: Type.STRING },
          verificationNoteTa: { type: Type.STRING },
          verificationNoteEn: { type: Type.STRING },
        },
        required: [
          'schemeNameTa',
          'schemeNameEn',
          'benefitTa',
          'benefitEn',
          'eligibilityTa',
          'eligibilityEn',
          'requiredDocumentsTa',
          'requiredDocumentsEn',
          'howToApplyTa',
          'howToApplyEn',
          'officialSourceName',
          'officialSourceUrl',
          'verificationNoteTa',
          'verificationNoteEn',
        ],
      },
    },
    safetyReminderTa: { type: Type.STRING },
    safetyReminderEn: { type: Type.STRING },
  },
  required: [
    'greetingTa',
    'greetingEn',
    'summaryTa',
    'summaryEn',
    'spokenScriptTa',
    'spokenScriptEn',
    'schemes',
    'safetyReminderTa',
    'safetyReminderEn',
  ],
};

// Multi-model resilient caller to handle 503 high-demand spikes automatically
async function generateSchemeGuidanceWithFallbackModels(
  sanitizedPrompt: string,
  validLang: Language
): Promise<string> {
  const ai = getGenAIClient();
  const sysInstruction = buildSystemInstruction(validLang);

  const candidateModels = [
    { name: 'gemini-3.8-flash', useThinkingLow: true },
    { name: 'gemini-flash-latest', useThinkingLow: false },
    { name: 'gemini-3.1-flash-lite', useThinkingLow: false },
  ];

  let lastErr: unknown = null;
  for (const candidate of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        model: candidate.name,
        contents: sanitizedPrompt,
        config: {
          systemInstruction: sysInstruction,
          responseMimeType: 'application/json',
          responseSchema: RESPONSE_SCHEMA,
          ...(candidate.useThinkingLow
            ? { thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } }
            : {}),
          temperature: 0.3,
        },
      });
      if (response.text) {
        return response.text;
      }
    } catch (err) {
      lastErr = err;
      console.warn(`Model ${candidate.name} encountered transient error, trying next fallback...`);
    }
  }
  throw lastErr || new Error('All Gemini models temporarily unavailable');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'Namma Sakhi AI Assistant' });
  });

  // 1. Ask Sakhi endpoint (supports Tamil, English, Telugu, Hindi, Kannada, Malayalam)
  app.post('/api/ask', async (req, res) => {
    const { question, guidedProfile, language = 'ta' } = req.body || {};
    const validLang: Language = ['ta', 'en', 'te', 'hi', 'kn', 'ml'].includes(language)
      ? (language as Language)
      : 'ta';
    const targetLangName = LANGUAGE_NAMES[validLang];

    if (!question && !guidedProfile) {
      res.status(400).json({ error: 'Please enter a question.' });
      return;
    }

    const rawPrompt = guidedProfile
      ? `User Guided Profile:
1. Age: ${guidedProfile.age}
2. State: ${guidedProfile.state}
3. Occupation: ${guidedProfile.occupation}
4. Help needed: ${guidedProfile.helpType}
Output Language: ${targetLangName} (${validLang}).`
      : `User Question: "${question}"
Output Language: ${targetLangName} (${validLang}).`;

    const { sanitized, hadSensitive } = maskSensitiveDigits(rawPrompt);

    try {
      const textOutput = await generateSchemeGuidanceWithFallbackModels(sanitized, validLang);
      const parsed = JSON.parse(textOutput.trim());
      if (hadSensitive) {
        parsed.safetyReminderEn =
          'Notice: Sensitive numbers in your message were masked for your protection. OTP, password, PIN and sensitive personal information-ai share panna vendam.';
      }
      res.json(parsed);
    } catch (error: unknown) {
      console.error('Error in /api/ask, returning verified fallback:', error);
      const fallback = getInitialAIResponseForLanguage(validLang);
      res.json(fallback);
    }
  });

  // 2. Audio Transcription endpoint
  app.post('/api/transcribe', async (req, res) => {
    try {
      const { audioBase64, mimeType, language = 'ta' } = req.body || {};
      if (!audioBase64) {
        res.status(400).json({ error: 'Audio data is required' });
        return;
      }

      const ai = getGenAIClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-transcribe',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: mimeType || 'audio/webm',
                data: audioBase64,
              },
            },
            {
              text: `Transcribe this spoken question from a rural Indian woman accurately. She may be speaking in ${
                LANGUAGE_NAMES[language as Language] || 'Tamil'
              }, Tanglish, or English. Return ONLY the transcribed text without extra commentary.`,
            },
          ],
        },
      });

      res.json({ text: (response.text || '').trim() });
    } catch (error: unknown) {
      console.error('Error in /api/transcribe:', error);
      const message = error instanceof Error ? error.message : 'Audio transcription failed';
      res.status(500).json({ error: message });
    }
  });

  // 3. Gemini Text-to-Speech endpoint
  app.post('/api/tts', async (req, res) => {
    try {
      const { text } = req.body || {};
      if (!text) {
        res.status(400).json({ error: 'Text is required for speech generation' });
        return;
      }

      const ai = getGenAIClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: text.slice(0, 1800),
              },
            ],
          },
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) {
        throw new Error('No audio generated');
      }

      res.json({ audioBase64: base64Audio, mimeType: 'audio/wav' });
    } catch (error: unknown) {
      console.error('Error in /api/tts:', error);
      const message = error instanceof Error ? error.message : 'Speech synthesis failed';
      res.status(500).json({ error: message });
    }
  });

  let viteMiddleware: express.RequestHandler | null = null;

  app.use((req, res, next) => {
    if (viteMiddleware) {
      viteMiddleware(req, res, next);
    } else {
      next();
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Namma Sakhi server running on http://0.0.0.0:${PORT}`);
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    viteMiddleware = vite.middlewares;
    // Pre-warm key entry files so the browser opens the app instantaneously
    Promise.all([
      vite.transformRequest('/src/index.css'),
      vite.transformRequest('/src/main.tsx'),
      vite.transformRequest('/src/App.tsx'),
    ]).catch(() => {
      // ignore warmup errors
    });
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

startServer();
