import React, { useState } from 'react';
import { Volume2, Square } from 'lucide-react';
import { type Language, SUPPORTED_LANGUAGES } from '../data/schemes';
import { UI_TRANSLATIONS } from '../data/translations';
import { speakText, stopSpeaking } from '../utils/speech';

interface SDGGoalsSectionProps {
  language: Language;
}

export const SDGGoalsSection: React.FC<SDGGoalsSectionProps> = ({ language }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = UI_TRANSLATIONS[language];
  const langConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleReadSdg = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    const script = `${t.sdgTitle}. ${t.sdg5Title}: ${t.sdg5Desc} ${t.sdg4Title}: ${t.sdg4Desc} ${t.sdg10Title}: ${t.sdg10Desc}`;
    speakText(
      script,
      langConfig.speechLocale,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );
  };

  return (
    <section
      id="sdg-section"
      aria-labelledby="sdg-heading"
      className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E2DA]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#9A3412] tracking-wide">{t.sdgKicker}</p>
          <h2 id="sdg-heading" className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
            {t.sdgTitle}
          </h2>
          <p className="text-base text-[#57534E] mt-1">{t.sdgSubtext}</p>
        </div>

        <button
          type="button"
          onClick={handleReadSdg}
          className={`min-h-[48px] px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shrink-0 transition-colors cursor-pointer ${
            isSpeaking
              ? 'bg-[#B91C1C] text-white'
              : 'bg-[#FAF8F5] hover:bg-[#F3EFE6] border border-[#D6D0C4] text-[#1C1917]'
          }`}
        >
          {isSpeaking ? (
            <>
              <Square className="w-4 h-4 fill-current shrink-0" />
              <span className="whitespace-nowrap">{t.stopAudioBtn}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-[#9A3412] shrink-0" />
              <span className="whitespace-nowrap">SDG விவரம் கேட்க · Listen</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SDG 5: GENDER EQUALITY */}
        <article className="rounded-2xl border border-[#E7E2DA] bg-[#FAF8F5] p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Official UN SDG 5 Icon Tile (#FF3A21) */}
            <div
              className="w-24 h-24 rounded-2xl bg-[#FF3A21] text-white p-2.5 flex flex-col justify-between shrink-0 shadow-xs"
              aria-label="UN SDG 5 Gender Equality Official Emblem"
            >
              <div className="flex items-start justify-between leading-none">
                <span className="text-xl font-extrabold tabular-nums">5</span>
                <span className="text-[8px] font-bold uppercase tracking-tight text-right leading-tight">
                  GENDER
                  <br />
                  EQUALITY
                </span>
              </div>
              <svg
                viewBox="0 0 64 64"
                className="w-11 h-11 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="29" cy="27" r="13" />
                <path d="M38.5 17.5L49 7M49 7H40M49 7V16" />
                <path d="M29 40V56M22 49H36" />
                <path d="M24 24.5H34M24 29.5H34" strokeWidth="4" />
              </svg>
            </div>

            <div>
              <span className="text-xs font-bold text-[#FF3A21] tabular-nums">
                UN SDG GOAL 05
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] leading-snug mt-0.5">
                {t.sdg5Title}
              </h3>
              <p className="text-xs text-[#57534E] mt-0.5">
                Women&apos;s Financial Rights &amp; Autonomy
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">{t.sdg5Desc}</p>
        </article>

        {/* SDG 4: QUALITY EDUCATION */}
        <article className="rounded-2xl border border-[#E7E2DA] bg-[#FAF8F5] p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Official UN SDG 4 Icon Tile (#C5192D) */}
            <div
              className="w-24 h-24 rounded-2xl bg-[#C5192D] text-white p-2.5 flex flex-col justify-between shrink-0 shadow-xs"
              aria-label="UN SDG 4 Quality Education Official Emblem"
            >
              <div className="flex items-start justify-between leading-none">
                <span className="text-xl font-extrabold tabular-nums">4</span>
                <span className="text-[8px] font-bold uppercase tracking-tight text-right leading-tight">
                  QUALITY
                  <br />
                  EDUCATION
                </span>
              </div>
              <svg
                viewBox="0 0 64 64"
                className="w-11 h-11 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Open book */}
                <path d="M8 20C16 17 24 19 28 23V49C24 45 16 43 8 46V20Z" />
                <path d="M48 20C40 17 32 19 28 23V49C32 45 40 43 48 46V20Z" />
                {/* Vertical pencil on right */}
                <path d="M56 16V44L54 49L52 44V16H56Z" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div>
              <span className="text-xs font-bold text-[#C5192D] tabular-nums">
                UN SDG GOAL 04
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] leading-snug mt-0.5">
                {t.sdg4Title}
              </h3>
              <p className="text-xs text-[#57534E] mt-0.5">
                Voice Literacy &amp; Girl Child Scholarships
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">{t.sdg4Desc}</p>
        </article>

        {/* SDG 10: REDUCED INEQUALITIES */}
        <article className="rounded-2xl border border-[#E7E2DA] bg-[#FAF8F5] p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Official UN SDG 10 Icon Tile (#DD1367) */}
            <div
              className="w-24 h-24 rounded-2xl bg-[#DD1367] text-white p-2.5 flex flex-col justify-between shrink-0 shadow-xs"
              aria-label="UN SDG 10 Reduced Inequalities Official Emblem"
            >
              <div className="flex items-start justify-between leading-none">
                <span className="text-xl font-extrabold tabular-nums">10</span>
                <span className="text-[7.5px] font-bold uppercase tracking-tight text-right leading-tight">
                  REDUCED
                  <br />
                  INEQUALITIES
                </span>
              </div>
              <svg
                viewBox="0 0 64 64"
                className="w-11 h-11 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="32" cy="32" r="16" strokeDasharray="6 4" />
                <path d="M23 28H41M23 36H41" strokeWidth="5" />
                <path d="M32 8V14M32 50V56M8 32H14M50 32H56" strokeWidth="3.5" />
              </svg>
            </div>

            <div>
              <span className="text-xs font-bold text-[#DD1367] tabular-nums">
                UN SDG GOAL 10
              </span>
              <h3 className="text-lg font-bold text-[#1C1917] leading-snug mt-0.5">
                {t.sdg10Title}
              </h3>
              <p className="text-xs text-[#57534E] mt-0.5">
                6-Language Rural Digital Inclusion
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#1C1917] leading-relaxed">{t.sdg10Desc}</p>
        </article>
      </div>
    </section>
  );
};
