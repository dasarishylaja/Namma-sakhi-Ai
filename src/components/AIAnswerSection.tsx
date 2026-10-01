import React, { useState } from 'react';
import {
  Volume2,
  Square,
  ExternalLink,
  CheckCircle2,
  FileText,
  ListChecks,
  AlertTriangle,
  ShieldAlert,
  Loader2,
} from 'lucide-react';
import { type Language, type SakhiAIResponse, SUPPORTED_LANGUAGES } from '../data/schemes';
import { UI_TRANSLATIONS } from '../data/translations';
import { speakText, stopSpeaking } from '../utils/speech';

interface AIAnswerSectionProps {
  language: Language;
  answer: SakhiAIResponse | null;
  lastQuestion: string;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export const AIAnswerSection: React.FC<AIAnswerSectionProps> = ({
  language,
  answer,
  lastQuestion,
  isLoading,
  error,
  onRetry,
}) => {
  const [isReading, setIsReading] = useState<boolean>(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const t = UI_TRANSLATIONS[language];
  const langConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleReadAnswer = (readLang: Language) => {
    if (!answer) return;
    setSpeechError(null);

    if (isReading) {
      stopSpeaking();
      setIsReading(false);
      return;
    }

    const targetConfig =
      SUPPORTED_LANGUAGES.find((l) => l.code === readLang) || langConfig;

    const scriptToRead =
      readLang === 'en'
        ? `${answer.greetingEn} ${answer.summaryEn} ${answer.spokenScriptEn} ${answer.safetyReminderEn}`
        : `${answer.greetingTa} ${answer.summaryTa} ${answer.spokenScriptTa} ${answer.safetyReminderTa}`;

    speakText(
      scriptToRead,
      targetConfig.speechLocale,
      () => setIsReading(true),
      () => setIsReading(false),
      (err) => {
        setIsReading(false);
        setSpeechError(err);
      }
    );
  };

  return (
    <section
      id="answer-section"
      aria-labelledby="answer-heading"
      className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E7E2DA]">
        <div>
          <p className="text-xs font-semibold text-[#9A3412] tracking-wide">
            {t.answerSectionKicker}
          </p>
          <h2 id="answer-heading" className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-0.5">
            {t.answerSectionTitle}
          </h2>
          {lastQuestion && (
            <p className="text-sm text-[#57534E] mt-1">
              <span className="font-semibold text-[#1C1917]">{t.yourQuestionLabel}</span>{' '}
              &ldquo;{lastQuestion}&rdquo;
            </p>
          )}
        </div>

        {/* Read Answer Button (Browser Text-to-Speech + Fallback) */}
        {answer && !isLoading && (
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleReadAnswer(language)}
              className={`min-h-[54px] px-5 py-3 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                isReading
                  ? 'bg-[#B91C1C] text-white hover:bg-[#991B1B]'
                  : 'bg-[#15803D] text-white hover:bg-[#166534]'
              }`}
            >
              {isReading ? (
                <>
                  <Square className="w-5 h-5 fill-current shrink-0" />
                  <span className="whitespace-nowrap">{t.stopAudioBtn}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-6 h-6 shrink-0" />
                  <span className="whitespace-nowrap">{t.readAnswerBtn}</span>
                </>
              )}
            </button>

            {!isReading && language !== 'en' && (
              <button
                type="button"
                onClick={() => handleReadAnswer('en')}
                className="min-h-[54px] px-4 py-3 rounded-2xl border border-[#D6D0C4] bg-[#FAF8F5] hover:bg-[#F3EFE6] text-[#1C1917] font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#9A3412] shrink-0" />
                <span className="whitespace-nowrap">{t.readInEnglishBtn}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {speechError && (
        <div className="mt-4 p-3.5 rounded-xl bg-[#FEF3C7] border border-[#F59E0B] text-sm text-[#92400E]">
          {speechError}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mx-auto">
            <Loader2 className="w-8 h-8 text-[#9A3412] animate-spin" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <p className="text-lg font-bold text-[#1C1917]">{t.loadingTitle}</p>
            <p className="text-base text-[#57534E]">{t.loadingSubtext}</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="mt-6 p-6 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] space-y-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-[#B91C1C] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-[#991B1B]">{t.errorTitle}</h3>
              <p className="text-sm text-[#7F1D1D] mt-1">{error}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onRetry}
            className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#B91C1C] text-white font-semibold text-sm hover:bg-[#991B1B] transition-colors cursor-pointer"
          >
            {t.tryAgainBtn}
          </button>
        </div>
      )}

      {/* AI Answer Content */}
      {answer && !isLoading && (
        <div className="mt-6 space-y-6">
          {/* Warm Greeting & Spoken Summary */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E7E2DA] space-y-3">
            <p className="text-lg sm:text-xl font-bold text-[#9A3412]">{answer.greetingTa}</p>
            <p className="text-base sm:text-lg text-[#1C1917] font-medium leading-relaxed">
              {answer.summaryTa}
            </p>
            <p className="text-base text-[#1C1917] leading-relaxed pt-2 border-t border-[#E7E2DA]">
              {answer.spokenScriptTa}
            </p>
            {language !== 'en' && (
              <div className="pt-3 border-t border-[#E7E2DA] text-sm sm:text-base text-[#57534E] space-y-1">
                <p className="font-semibold text-[#1C1917]">{answer.greetingEn}</p>
                <p>{answer.summaryEn}</p>
              </div>
            )}
          </div>

          {/* Detailed Structured Scheme Breakdowns */}
          <div className="space-y-6">
            {answer.schemes.map((scheme, index) => (
              <article
                key={`${scheme.schemeNameEn}-${index}`}
                className="rounded-2xl border border-[#D6D0C4] bg-white p-5 sm:p-6 space-y-5"
              >
                {/* 1. Scheme Name */}
                <div className="border-b border-[#E7E2DA] pb-4">
                  <p className="text-xs font-semibold text-[#9A3412]">
                    {t.schemeNameLabel} #{index + 1}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
                    {scheme.schemeNameTa}
                  </h3>
                  {scheme.schemeNameEn !== scheme.schemeNameTa && (
                    <p className="text-base font-medium text-[#57534E] mt-0.5">
                      {scheme.schemeNameEn}
                    </p>
                  )}
                </div>

                {/* 2. Scheme Benefit */}
                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]">
                  <p className="text-xs font-bold text-[#065F46]">{t.schemeBenefitLabel}</p>
                  <p className="text-base sm:text-lg font-bold text-[#064E3B] mt-1 leading-relaxed">
                    {scheme.benefitTa}
                  </p>
                  {scheme.benefitEn !== scheme.benefitTa && (
                    <p className="text-sm text-[#065F46] mt-1">{scheme.benefitEn}</p>
                  )}
                </div>

                {/* 3. Who May Be Eligible & 4. Required Documents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                  {/* Who may be eligible */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#1C1917] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" />
                      <h4>{t.eligibilityLabel}</h4>
                    </div>
                    <ul className="space-y-2 text-base text-[#1C1917] pl-1">
                      {scheme.eligibilityTa.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          • {item}
                          {scheme.eligibilityEn[i] &&
                            scheme.eligibilityEn[i] !== item && (
                              <span className="block text-sm text-[#57534E] ml-3">
                                ({scheme.eligibilityEn[i]})
                              </span>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Required documents */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#1C1917] font-bold text-base">
                      <FileText className="w-5 h-5 text-[#9A3412] shrink-0" />
                      <h4>{t.documentsLabel}</h4>
                    </div>
                    <ul className="space-y-2 text-base text-[#1C1917] pl-1">
                      {scheme.requiredDocumentsTa.map((doc, i) => (
                        <li key={i} className="leading-relaxed">
                          • {doc}
                          {scheme.requiredDocumentsEn[i] &&
                            scheme.requiredDocumentsEn[i] !== doc && (
                              <span className="block text-sm text-[#57534E] ml-3">
                                ({scheme.requiredDocumentsEn[i]})
                              </span>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 5. How to Apply */}
                <div className="pt-4 border-t border-[#E7E2DA] space-y-2.5">
                  <div className="flex items-center gap-2 text-[#1C1917] font-bold text-base">
                    <ListChecks className="w-5 h-5 text-[#9A3412] shrink-0" />
                    <h4>{t.howToApplyLabel}</h4>
                  </div>
                  <ol className="space-y-2 text-base text-[#1C1917] pl-1">
                    {scheme.howToApplyTa.map((stepText, i) => (
                      <li key={i} className="leading-relaxed">
                        <span className="font-bold text-[#9A3412] tabular-nums mr-1.5">
                          {i + 1}.
                        </span>
                        {stepText}
                        {scheme.howToApplyEn[i] &&
                          scheme.howToApplyEn[i] !== stepText && (
                            <span className="block text-sm text-[#57534E] ml-5">
                              ({scheme.howToApplyEn[i]})
                            </span>
                          )}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* 6. Official Government Source & 7. Important Verification Note */}
                <div className="pt-4 border-t border-[#E7E2DA] flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#FAF8F5] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 rounded-b-2xl">
                  <div className="space-y-1.5 max-w-2xl">
                    <p className="text-xs font-bold text-[#9A3412]">{t.verificationNoteLabel}</p>
                    <p className="text-sm font-medium text-[#1C1917] leading-relaxed">
                      {scheme.verificationNoteTa}
                    </p>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {scheme.verificationNoteEn} (Namma Sakhi guides you to government services and does NOT automatically submit applications.)
                    </p>
                    <p className="text-xs text-[#57534E] pt-1">
                      <strong className="text-[#1C1917]">{t.officialSourceLabel}</strong>{' '}
                      {scheme.officialSourceName}
                    </p>
                  </div>

                  <a
                    href={scheme.officialSourceUrl || 'https://www.myscheme.gov.in/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white font-semibold text-sm flex items-center justify-center gap-2 shrink-0 transition-colors"
                  >
                    <span className="whitespace-nowrap">{t.visitMySchemeBtn}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Safety Reminder Inside AI Answer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-[#F59E0B] flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-[#B45309] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-base text-[#78350F]">
                OTP, password, PIN and sensitive personal information-ai share panna vendam.
              </p>
              <p className="text-sm text-[#92400E]">{answer.safetyReminderTa}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
