import React, { useState, useRef } from 'react';
import {
  Mic,
  MicOff,
  Send,
  Volume2,
  Square,
  Compass,
  ShieldAlert,
  ExternalLink,
  RotateCcw,
  Lock,
  Building2,
  Globe,
  Share2,
  Check,
} from 'lucide-react';
import {
  Language,
  SpeechLocale,
  SUPPORTED_LANGUAGES,
  SakhiAIResponse,
} from './data/schemes';
import {
  UI_TRANSLATIONS,
  getInitialAIResponseForLanguage,
} from './data/translations';
import { AIAnswerSection } from './components/AIAnswerSection';
import { GuidedModeSection, GuidedProfile } from './components/GuidedModeSection';
import { SchemeDirectorySection } from './components/SchemeDirectorySection';
import { SDGGoalsSection } from './components/SDGGoalsSection';
import { speakText, stopSpeaking } from './utils/speech';

interface SpeechRecognitionAlternative {
  transcript: string;
}
interface SpeechRecognitionResult {
  0: SpeechRecognitionAlternative;
  isFinal: boolean;
}
interface SpeechRecognitionEvent {
  results: {
    length: number;
    [index: number]: SpeechRecognitionResult;
  };
}
interface BrowserSpeechRecognition {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('ta');
  const [voiceInputLang, setVoiceInputLang] = useState<SpeechLocale>('ta-IN');
  const [question, setQuestion] = useState<string>('');
  const [hasCustomQuery, setHasCustomQuery] = useState<boolean>(false);
  const [lastQuestion, setLastQuestion] = useState<string>(
    'பெண்களுக்கு என்ன அரசு உதவி இருக்கு? (Pengalukku enna government help irukku?)'
  );
  const [answer, setAnswer] = useState<SakhiAIResponse | null>(() =>
    getInitialAIResponseForLanguage('ta')
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Voice recording state
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceStatus, setVoiceStatus] = useState<string | null>(null);
  const [isSpeakingWelcome, setIsSpeakingWelcome] = useState<boolean>(false);
  const [isSpeakingSafety, setIsSpeakingSafety] = useState<boolean>(false);
  const [copiedPublicLink, setCopiedPublicLink] = useState<boolean>(false);

  const PUBLIC_SHARE_URL =
    'https://ais-pre-z5enbsuovphct2u32vwygl-835355648793.asia-southeast1.run.app';

  const handleSharePublicLink = async () => {
    const shareUrl = PUBLIC_SHARE_URL || window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Namma Sakhi – AI Government Scheme Assistant',
          text: 'Namma Sakhi – Voice-first multilingual AI assistant for rural women to discover government schemes.',
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedPublicLink(true);
      setTimeout(() => setCopiedPublicLink(false), 3000);
    } catch {
      // ignore
    }
  };

  const recognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const t = UI_TRANSLATIONS[language];
  const currentLangConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Switch language and update both UI text and AI response
  const handleSelectLanguage = (newLang: Language) => {
    stopSpeaking();
    setIsSpeakingWelcome(false);
    setIsSpeakingSafety(false);
    setLanguage(newLang);

    const cfg = SUPPORTED_LANGUAGES.find((l) => l.code === newLang);
    if (cfg) {
      setVoiceInputLang(cfg.speechLocale);
    }

    if (!hasCustomQuery) {
      setAnswer(getInitialAIResponseForLanguage(newLang));
      const firstDemo = UI_TRANSLATIONS[newLang].localizedDemoQuestions[0];
      if (firstDemo) {
        setLastQuestion(firstDemo.primaryText);
      }
    } else if (lastQuestion) {
      // Automatically translate/re-fetch the current AI answer in the newly selected language
      handleAskSakhi(lastQuestion, newLang);
    }
  };

  // Send question to Gemini backend
  const handleAskSakhi = async (customQuestion?: string, targetLang?: Language) => {
    const activeLang = targetLang || language;
    const qText = (customQuestion !== undefined ? customQuestion : question).trim();
    if (!qText) {
      setError(
        activeLang === 'ta'
          ? 'தயவுசெய்து உங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது மைக்கை அழுத்திப் பேசவும்.'
          : 'Please type your question or press the microphone button to speak.'
      );
      return;
    }

    stopSpeaking();
    setHasCustomQuery(true);
    setIsLoading(true);
    setError(null);
    setLastQuestion(qText);

    if (!targetLang) {
      setTimeout(() => scrollToElement('answer-section'), 100);
    }

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: qText, language: activeLang }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response from Sakhi AI');
      }

      setAnswer(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error occurred';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Guided Mode completion handler
  const handleCompleteGuided = async (profile: GuidedProfile) => {
    stopSpeaking();
    setHasCustomQuery(true);
    setIsLoading(true);
    setError(null);
    const summaryLabel = `${profile.age.split('(')[0].trim()} · ${profile.state.split('(')[0].trim()} · ${profile.occupation.split('(')[0].trim()} · ${profile.helpType.split('(')[0].trim()}`;
    setLastQuestion(summaryLabel);
    scrollToElement('answer-section');

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guidedProfile: profile, language }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get guided scheme recommendations');
      }

      setAnswer(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch guided schemes';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Voice Input: Uses Browser SpeechRecognition (with MediaRecorder -> Gemini /api/transcribe fallback)
  const toggleMicrophone = async () => {
    setError(null);

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      setIsListening(false);
      setVoiceStatus(null);
      return;
    }

    stopSpeaking();

    const win = window as unknown as {
      SpeechRecognition?: new () => BrowserSpeechRecognition;
      webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
    };
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (SpeechRecognitionClass) {
      try {
        const recognition = new SpeechRecognitionClass();
        recognition.lang = voiceInputLang;
        recognition.interimResults = true;
        recognition.continuous = false;

        let finalTranscript = '';

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let interim = '';
          for (let i = 0; i < event.results.length; i++) {
            const res = event.results[i];
            if (res.isFinal) {
              finalTranscript += res[0].transcript;
            } else {
              interim += res[0].transcript;
            }
          }
          const combined = (finalTranscript || interim).trim();
          if (combined) {
            setQuestion(combined);
          }
        };

        recognition.onerror = () => {
          setIsListening(false);
          setVoiceStatus(null);
        };

        recognition.onend = () => {
          setIsListening(false);
          setVoiceStatus(null);
          if (finalTranscript.trim()) {
            setQuestion(finalTranscript.trim());
            handleAskSakhi(finalTranscript.trim());
          }
        };

        recognitionRef.current = recognition;
        setIsListening(true);
        setVoiceStatus(t.micListeningTapToStop);
        recognition.start();
        return;
      } catch {
        // Fall through to MediaRecorder fallback
      }
    }

    // Fallback: MediaRecorder + Server Gemini Transcription
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = async () => {
          stream.getTracks().forEach((track) => track.stop());
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          setVoiceStatus('Converting your voice to text...');

          const reader = new FileReader();
          reader.onloadend = async () => {
            const base64data = (reader.result as string)?.split(',')[1];
            if (!base64data) {
              setVoiceStatus(null);
              return;
            }
            try {
              const res = await fetch('/api/transcribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  audioBase64: base64data,
                  mimeType: 'audio/webm',
                  language,
                }),
              });
              const data = await res.json();
              setVoiceStatus(null);
              if (data.text) {
                setQuestion(data.text);
                handleAskSakhi(data.text);
              }
            } catch {
              setVoiceStatus(null);
              setError('Could not transcribe voice. Please try again or tap a sample question.');
            }
          };
          reader.readAsDataURL(audioBlob);
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setIsListening(true);
        setVoiceStatus(t.micListeningTapToStop);
      } catch {
        setError(
          'Microphone permission was not granted. Please allow microphone access or tap a sample question below.'
        );
      }
    } else {
      setError('Voice input is not supported in this browser. Please type your question below.');
    }
  };

  // Welcome Voice Helper
  const handleReadWelcome = () => {
    if (isSpeakingWelcome) {
      stopSpeaking();
      setIsSpeakingWelcome(false);
      return;
    }

    speakText(
      t.welcomeVoiceScript,
      currentLangConfig.speechLocale,
      () => setIsSpeakingWelcome(true),
      () => setIsSpeakingWelcome(false),
      () => setIsSpeakingWelcome(false)
    );
  };

  // Safety Voice Helper
  const handleReadSafety = () => {
    if (isSpeakingSafety) {
      stopSpeaking();
      setIsSpeakingSafety(false);
      return;
    }

    speakText(
      t.safetyVoiceScript,
      currentLangConfig.speechLocale,
      () => setIsSpeakingSafety(true),
      () => setIsSpeakingSafety(false),
      () => setIsSpeakingSafety(false)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] relative overflow-x-hidden">
      {/* ATTRACTIVE MODERN BACKGROUND WITH SUBTLE WOMEN, DIGITAL ACCESS & RURAL EMPOWERMENT VISUALS */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Warm radial ambient washes */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#FED7AA]/35 via-[#FDE68A]/20 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[560px] h-[560px] rounded-full bg-gradient-to-bl from-[#A7F3D0]/30 via-[#FDE68A]/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[420px] rounded-full bg-gradient-to-tr from-[#FFEDD5]/40 via-[#E7E2DA]/25 to-transparent blur-3xl" />

        {/* Subtle SVG Pattern of Rural Women Empowerment, Digital Voice Waves, Kolam Motifs & Village Connectivity */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.055] text-[#9A3412]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="kolam-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="60" cy="60" r="3" fill="currentColor" />
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              <circle cx="100" cy="20" r="1.5" fill="currentColor" />
              <circle cx="20" cy="100" r="1.5" fill="currentColor" />
              <circle cx="100" cy="100" r="1.5" fill="currentColor" />
              <path
                d="M60 32 C76 32 88 44 88 60 C88 76 76 88 60 88 C44 88 32 76 32 60 C32 44 44 32 60 32 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="1440" height="900" fill="url(#kolam-grid)" />

          {/* Left Visual Motif: Rural Woman with Smartphone & Digital Soundwaves */}
          <g transform="translate(70, 160)" stroke="currentColor" fill="none" strokeWidth="3">
            {/* Bindi & Saree Silhouette */}
            <circle cx="90" cy="70" r="32" />
            <circle cx="90" cy="60" r="3" fill="currentColor" />
            <path d="M40 175 C40 125 65 108 90 108 C115 108 140 125 140 175" />
            <path d="M55 115 L125 165" />
            {/* Smartphone in hand with voice waves */}
            <rect x="155" y="95" width="28" height="48" rx="5" />
            <path d="M195 105 C205 112 205 126 195 133" />
            <path d="M208 95 C224 108 224 130 208 143" />
          </g>

          {/* Right Visual Motif: Digital Connectivity Tower, Rising Sun, Agriculture & Books */}
          <g transform="translate(1130, 140)" stroke="currentColor" fill="none" strokeWidth="2.5">
            <circle cx="140" cy="80" r="45" />
            <path d="M60 220 L110 130 L160 220" />
            <path d="M80 185 H140" />
            {/* Wireless Connectivity Waves */}
            <path d="M90 110 C110 90 110 90 130 110" />
            <path d="M75 95 C110 65 110 65 145 95" />
            {/* Wheat / Paddy Harvest Stalk */}
            <path d="M210 220 V120" />
            <path d="M210 140 C195 130 195 120 210 125" />
            <path d="M210 160 C225 150 225 140 210 145" />
            <path d="M210 180 C195 170 195 160 210 165" />
          </g>
        </svg>
      </div>

      {/* 1. HEADER SECTION (Strict 3-Zone Top Bar Contract) */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Title (Single text element wordmark) */}
          <a
            href="#welcome-section"
            className="text-lg sm:text-xl font-bold tracking-tight text-[#9A3412] whitespace-nowrap shrink-0"
          >
            நம்ம சகி · Namma Sakhi
          </a>

          {/* Zone 2: 5 Clean Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6 text-sm font-semibold text-[#57534E]"
          >
            <a
              href="#question-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navAsk}
            </a>
            <a
              href="#answer-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navAnswer}
            </a>
            <a
              href="#guided-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navGuided}
            </a>
            <a
              href="#sdg-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navSdg}
            </a>
            <a
              href="#schemes-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navSchemes}
            </a>
            <a
              href="#safety-section"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              {t.navSafety}
            </a>
          </nav>

          {/* Zone 3: Primary Language Action (6 Languages Selector) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="hidden md:flex items-center gap-1 p-1 bg-[#EDE8DF] rounded-xl">
              {SUPPORTED_LANGUAGES.map((langItem) => {
                const active = language === langItem.code;
                return (
                  <button
                    key={langItem.code}
                    type="button"
                    onClick={() => handleSelectLanguage(langItem.code)}
                    className={`min-h-[38px] px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#9A3412] text-white shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {langItem.nativeLabel}
                  </button>
                );
              })}
            </div>

            {/* Compact Mobile Language Selector Dropdown */}
            <div className="flex md:hidden items-center gap-1.5 bg-[#EDE8DF] px-3 py-1.5 rounded-xl">
              <Globe className="w-4 h-4 text-[#9A3412] shrink-0" />
              <select
                aria-label="Select Language"
                value={language}
                onChange={(e) => handleSelectLanguage(e.target.value as Language)}
                className="bg-transparent font-bold text-sm text-[#1C1917] focus:outline-none cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map((langItem) => (
                  <option key={langItem.code} value={langItem.code}>
                    {langItem.nativeLabel} ({langItem.englishLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Public Share Link Button */}
            <button
              type="button"
              onClick={handleSharePublicLink}
              title="Copy or Share Public App Link"
              className="min-h-[38px] px-3 py-1.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              {copiedPublicLink ? (
                <>
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 shrink-0" />
                  <span>Share Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-10">
        {/* 2. WELCOME SECTION WITH RURAL WOMEN & DIGITAL EMPOWERMENT ILLUSTRATION */}
        <section
          id="welcome-section"
          aria-labelledby="welcome-heading"
          className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF7ED] rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs overflow-hidden relative"
        >
          {/* Prominent 6-Language Touch Bar for First-Time Smartphone Users */}
          <div className="mb-6 pb-5 border-b border-[#E7E2DA]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-bold text-[#9A3412] flex items-center gap-1.5">
                <Globe className="w-4 h-4 shrink-0" />
                <span>
                  உங்கள் மொழியைத் தேர்ந்தெடுக்கவும் · Choose Your Language (6 Languages):
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SUPPORTED_LANGUAGES.map((langItem) => {
                const active = language === langItem.code;
                return (
                  <button
                    key={langItem.code}
                    type="button"
                    onClick={() => handleSelectLanguage(langItem.code)}
                    className={`min-h-[48px] px-3 py-2 rounded-2xl border font-bold text-sm flex flex-col items-center justify-center transition-all cursor-pointer ${
                      active
                        ? 'bg-[#9A3412] text-white border-[#9A3412] shadow-xs'
                        : 'bg-white hover:bg-[#FFF7ED] text-[#1C1917] border-[#D6D0C4]'
                    }`}
                  >
                    <span className="text-base leading-tight whitespace-nowrap">
                      {langItem.nativeLabel}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        active ? 'text-white/85' : 'text-[#57534E]'
                      }`}
                    >
                      {langItem.englishLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A3412]">
                <span>{t.welcomeTag}</span>
              </div>

              <h1
                id="welcome-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] leading-tight"
              >
                {t.welcomeHeading}
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
                {t.welcomeSubtext}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleReadWelcome}
                  className={`min-h-[54px] px-5 py-3 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-colors cursor-pointer ${
                    isSpeakingWelcome
                      ? 'bg-[#B91C1C] text-white'
                      : 'bg-[#15803D] hover:bg-[#166534] text-white'
                  }`}
                >
                  {isSpeakingWelcome ? (
                    <>
                      <Square className="w-5 h-5 fill-current shrink-0" />
                      <span className="whitespace-nowrap">{t.stopAudioBtn}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-6 h-6 shrink-0" />
                      <span className="whitespace-nowrap">{t.listenWelcomeBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => scrollToElement('guided-section')}
                  className="min-h-[54px] px-5 py-3 rounded-2xl bg-white hover:bg-[#F3EFE6] border border-[#D6D0C4] text-[#1C1917] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Compass className="w-5 h-5 text-[#9A3412] shrink-0" />
                  <span className="whitespace-nowrap">{t.dontKnowBtn}</span>
                </button>
              </div>
            </div>

            {/* Subtle Cultural & Digital Empowerment Visual Emblem */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-[320px] rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] p-4 flex flex-col items-center text-center space-y-2">
                <svg
                  viewBox="0 0 240 150"
                  className="w-full h-36"
                  role="img"
                  aria-label="Rural women using voice technology to access government welfare schemes"
                >
                  {/* Warm Sun & Village Horizon */}
                  <circle cx="120" cy="75" r="56" fill="#FFEDD5" />
                  <path
                    d="M20 132 Q70 112 120 128 T220 126"
                    fill="none"
                    stroke="#15803D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Woman Silhouette with Traditional Bindi */}
                  <circle cx="95" cy="64" r="20" fill="#9A3412" />
                  <circle cx="95" cy="58" r="2.5" fill="#FEF3C7" />
                  <path
                    d="M62 126 C62 94 78 86 95 86 C112 86 128 94 128 126 Z"
                    fill="#9A3412"
                  />
                  {/* Saree Pallu Accent */}
                  <path
                    d="M74 92 L116 124"
                    stroke="#FDE68A"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Smartphone & Voice Waves */}
                  <rect
                    x="138"
                    y="62"
                    width="24"
                    height="40"
                    rx="5"
                    fill="#1C1917"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <circle cx="150" cy="82" r="5" fill="#15803D" />
                  <path
                    d="M170 72 C178 77 178 87 170 92"
                    fill="none"
                    stroke="#15803D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M180 64 C192 73 192 91 180 100"
                    fill="none"
                    stroke="#9A3412"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-xs font-bold text-[#9A3412]">
                  குரல் வழி அரசுத் திட்ட வழிகாட்டி · Voice-First Rural Access
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Safety Warning Callout Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[#FFFBEB] border border-[#F59E0B] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-[#B45309] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="font-bold text-sm sm:text-base text-[#78350F]">
                  OTP, password, PIN and sensitive personal information-ai share panna vendam.
                </p>
                <p className="text-xs sm:text-sm text-[#92400E]">{t.safetyBannerText}</p>
              </div>
            </div>
            <a
              href="#safety-section"
              className="text-xs font-bold text-[#9A3412] underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              {t.safetyRulesLink}
            </a>
          </div>
        </section>

        {/* 3. VOICE / TEXT QUESTION SECTION */}
        <section
          id="question-section"
          aria-labelledby="question-heading"
          className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Large Microphone & Text Input Box */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#9A3412] tracking-wide">
                  {t.voiceTextSectionKicker}
                </p>
                <h2
                  id="question-heading"
                  className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1"
                >
                  {t.voiceTextSectionTitle}
                </h2>
              </div>

              {/* Voice Language Toggle + Large Tactile Microphone Button */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#1C1917]">{t.step1VoiceLabel}</span>

                  <div className="flex flex-wrap items-center gap-1 bg-white p-1 rounded-xl border border-[#E7E2DA]">
                    {SUPPORTED_LANGUAGES.map((langOpt) => (
                      <button
                        key={langOpt.code}
                        type="button"
                        onClick={() => setVoiceInputLang(langOpt.speechLocale)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          voiceInputLang === langOpt.speechLocale
                            ? 'bg-[#9A3412] text-white'
                            : 'text-[#57534E] hover:text-[#1C1917]'
                        }`}
                      >
                        {langOpt.nativeLabel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* LARGE MICROPHONE BUTTON */}
                <button
                  type="button"
                  onClick={toggleMicrophone}
                  className={`w-full min-h-[96px] p-5 rounded-2xl font-bold text-lg sm:text-xl flex flex-col sm:flex-row items-center justify-center gap-4 transition-all cursor-pointer shadow-sm ${
                    isListening
                      ? 'bg-[#B91C1C] text-white ring-4 ring-[#FECACA]'
                      : 'bg-[#9A3412] hover:bg-[#7C2D12] text-white'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                      isListening ? 'bg-white/20 animate-pulse' : 'bg-white/15'
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-8 h-8 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="block">
                      {isListening ? t.micListeningTapToStop : t.micTapToSpeak}
                    </span>
                    <span className="block text-sm font-normal text-white/90 mt-0.5">
                      {isListening ? voiceStatus || t.micListeningTapToStop : t.micHintSubtext}
                    </span>
                  </div>
                </button>
              </div>

              {/* Text Input Box & "Ask Sakhi" Button */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="sakhi-question-input"
                    className="text-sm font-bold text-[#1C1917]"
                  >
                    {t.step2TypeLabel}
                  </label>
                  {question && (
                    <button
                      type="button"
                      onClick={() => setQuestion('')}
                      className="text-xs font-semibold text-[#57534E] hover:text-[#1C1917] flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.clearBtn}</span>
                    </button>
                  )}
                </div>

                <textarea
                  id="sakhi-question-input"
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  className="w-full rounded-2xl border-2 border-[#D6D0C4] focus:border-[#9A3412] focus:outline-none bg-[#FAF8F5] p-4 text-lg text-[#1C1917] placeholder:text-[#78716C]"
                />

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  {/* ASK SAKHI BUTTON */}
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleAskSakhi()}
                    className="flex-1 min-h-[60px] px-6 py-4 rounded-2xl bg-[#15803D] hover:bg-[#166534] disabled:bg-[#D6D0C4] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    <Send className="w-5 h-5 shrink-0" />
                    <span className="whitespace-nowrap">
                      {isLoading ? t.askingSakhiBtn : t.askSakhiBtn}
                    </span>
                  </button>

                  {/* GUIDED MODE TRIGGER BUTTON */}
                  <button
                    type="button"
                    onClick={() => scrollToElement('guided-section')}
                    className="min-h-[60px] px-5 py-4 rounded-2xl bg-[#FFF7ED] hover:bg-[#FFEDD5] border-2 border-[#9A3412] text-[#9A3412] font-bold text-base flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <Compass className="w-5 h-5 shrink-0" />
                    <span className="whitespace-nowrap">I don&apos;t know what to ask</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Clickable Sample / Demo Questions */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl border border-[#E7E2DA] p-5 sm:p-6 space-y-4">
              <div>
                <p className="text-xs font-bold text-[#9A3412]">{t.demoQuestionsKicker}</p>
                <h3 className="text-lg font-bold text-[#1C1917] mt-0.5">
                  {t.demoQuestionsTitle}
                </h3>
              </div>

              <div className="space-y-2.5">
                {t.localizedDemoQuestions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      const qString = `${item.primaryText} (${item.secondaryText})`;
                      setQuestion(item.primaryText);
                      handleAskSakhi(qString);
                    }}
                    className="w-full min-h-[58px] p-3.5 rounded-xl bg-white hover:bg-[#FFF7ED] border border-[#D6D0C4] hover:border-[#9A3412] text-left transition-all flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div>
                      <p className="font-bold text-base text-[#1C1917] group-hover:text-[#9A3412]">
                        &ldquo;{item.primaryText}&rdquo;
                      </p>
                      <p className="text-sm text-[#57534E] mt-0.5">{item.secondaryText}</p>
                    </div>
                    <Send className="w-4 h-4 text-[#9A3412] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. AI ANSWER SECTION */}
        <AIAnswerSection
          language={language}
          answer={answer}
          lastQuestion={lastQuestion}
          isLoading={isLoading}
          error={error}
          onRetry={() => handleAskSakhi(lastQuestion)}
        />

        {/* 5. GUIDED HELP SECTION ("I don't know what to ask") */}
        <GuidedModeSection
          language={language}
          onCompleteGuided={handleCompleteGuided}
          isLoading={isLoading}
        />

        {/* NEW: SDG GOALS SECTION (Official SDG 5, SDG 4, SDG 10 Icons) */}
        <SDGGoalsSection language={language} />

        {/* 6. GOVERNMENT SCHEME INFORMATION SECTION */}
        <SchemeDirectorySection
          language={language}
          onSelectSchemeQuestion={(qText) => {
            setQuestion(qText);
            handleAskSakhi(qText);
          }}
        />

        {/* 7. OFFICIAL SOURCE SECTION */}
        <section
          id="official-source-section"
          aria-labelledby="official-source-heading"
          className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs font-semibold text-[#15803D] tracking-wide">
                {t.officialSourceSectionKicker}
              </p>
              <h2
                id="official-source-heading"
                className="text-xl sm:text-2xl font-bold text-[#1C1917]"
              >
                {t.officialSourceSectionTitle}
              </h2>
              <p className="text-base text-[#57534E] leading-relaxed">
                {t.officialSourceSectionDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA]">
                  <p className="font-bold text-sm text-[#1C1917]">{t.center1Title}</p>
                  <p className="text-xs text-[#57534E] mt-0.5">{t.center1Desc}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA]">
                  <p className="font-bold text-sm text-[#1C1917]">{t.center2Title}</p>
                  <p className="text-xs text-[#57534E] mt-0.5">{t.center2Desc}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2DA]">
                  <p className="font-bold text-sm text-[#1C1917]">{t.center3Title}</p>
                  <p className="text-xs text-[#57534E] mt-0.5">{t.center3Desc}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border border-[#D6D0C4] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#15803D]" />
                </div>
                <div>
                  <p className="font-bold text-base text-[#1C1917]">myScheme.gov.in</p>
                  <p className="text-xs text-[#57534E]">National Platform for Government Schemes</p>
                </div>
              </div>

              <p className="text-sm text-[#1C1917] leading-relaxed">{t.prototypeNote}</p>

              <a
                href="https://www.myscheme.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-base flex items-center justify-center gap-2 transition-colors"
              >
                <span className="whitespace-nowrap">Visit myScheme.gov.in</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* 8. SAFETY SECTION */}
        <section
          id="safety-section"
          aria-labelledby="safety-heading"
          className="bg-[#FFFBEB] rounded-3xl border-2 border-[#F59E0B] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FCD34D]">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-[#B45309]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#92400E]">{t.safetySectionKicker}</p>
                <h2
                  id="safety-heading"
                  className="text-xl sm:text-2xl font-bold text-[#78350F] mt-0.5"
                >
                  &ldquo;OTP, password, PIN and sensitive personal information-ai share panna vendam.&rdquo;
                </h2>
                <p className="text-base text-[#92400E] mt-1">{t.safetySectionSubtext}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReadSafety}
              className={`min-h-[52px] px-5 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shrink-0 transition-colors cursor-pointer ${
                isSpeakingSafety
                  ? 'bg-[#B91C1C] text-white'
                  : 'bg-[#B45309] hover:bg-[#92400E] text-white'
              }`}
            >
              {isSpeakingSafety ? (
                <>
                  <Square className="w-4 h-4 fill-current shrink-0" />
                  <span className="whitespace-nowrap">{t.stopAudioBtn}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 shrink-0" />
                  <span className="whitespace-nowrap">{t.readWarningBtn}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.safetyItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-[#FCD34D] space-y-1"
              >
                <p className="font-bold text-base text-[#78350F]">{item.title}</p>
                <p className="text-xs font-semibold text-[#B45309]">{item.subtitle}</p>
                <p className="text-sm text-[#1C1917] pt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 9. FOOTER SECTION */}
      <footer className="relative z-10 bg-white border-t border-[#E7E2DA] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <p className="font-bold text-base text-[#1C1917]">
              நம்ம சகி · Namma Sakhi – AI Government Scheme Assistant
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {t.footerDesc}{' '}
              <a
                href="https://www.myscheme.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#9A3412] underline underline-offset-2"
              >
                https://www.myscheme.gov.in/
              </a>
            </p>
            <p className="text-xs text-[#57534E]">
              Prototype Disclaimer: This application guides users to official government services and does NOT claim to automatically submit government applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#57534E]">
            <a href="#welcome-section" className="hover:text-[#9A3412]">
              Home
            </a>
            <a href="#question-section" className="hover:text-[#9A3412]">
              {t.navAsk}
            </a>
            <a href="#guided-section" className="hover:text-[#9A3412]">
              {t.navGuided}
            </a>
            <a href="#sdg-section" className="hover:text-[#9A3412]">
              {t.navSdg}
            </a>
            <a
              href="https://www.myscheme.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9A3412] hover:underline flex items-center gap-1"
            >
              <span>myScheme.gov.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
