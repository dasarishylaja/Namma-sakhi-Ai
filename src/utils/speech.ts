import { type SpeechLocale } from '../data/schemes';

let currentAudio: HTMLAudioElement | null = null;

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

export async function speakText(
  text: string,
  lang: SpeechLocale,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: string) => void
): Promise<void> {
  stopSpeaking();

  if (!text.trim()) {
    onEnd?.();
    return;
  }

  // Try Browser SpeechSynthesis first ("using browser text-to-speech")
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    const langPrefix = lang.split('-')[0].toLowerCase();
    const matchingVoice =
      voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));

    if (matchingVoice || langPrefix === 'en') {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
        utterance.rate = 0.92;
        utterance.pitch = 1.0;

        utterance.onstart = () => onStart?.();
        utterance.onend = () => onEnd?.();
        utterance.onerror = () => {
          playServerTtsFallback(text, lang, onStart, onEnd, onError);
        };

        synth.speak(utterance);
        return;
      } catch {
        // Fall through to server TTS fallback
      }
    }
  }

  // Fallback: if browser lacks a local voice for Tamil/Telugu/Hindi/Kannada/Malayalam, use Gemini TTS endpoint
  await playServerTtsFallback(text, lang, onStart, onEnd, onError);
}

async function playServerTtsFallback(
  text: string,
  lang: SpeechLocale,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: string) => void
): Promise<void> {
  try {
    onStart?.();
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang }),
    });

    if (!res.ok) {
      throw new Error('Speech synthesis unavailable');
    }

    const data = await res.json();
    if (!data.audioBase64) {
      throw new Error('No audio data returned');
    }

    const audio = new Audio(`data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`);
    currentAudio = audio;
    audio.onended = () => {
      currentAudio = null;
      onEnd?.();
    };
    audio.onerror = () => {
      currentAudio = null;
      onEnd?.();
      onError?.('ஆடியோவை இயக்க முடியவில்லை / Could not play audio.');
    };
    await audio.play();
  } catch {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        utterance.onend = () => onEnd?.();
        utterance.onerror = () => {
          onEnd?.();
          onError?.('உங்கள் உலாவியில் குரல் வசதி இல்லை / Voice output is not supported on this device.');
        };
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        // ignore
      }
    }
    onEnd?.();
    onError?.('உங்கள் உலாவியில் குரல் வாசிப்பு வசதி இல்லை / Audio readout unavailable.');
  }
}
