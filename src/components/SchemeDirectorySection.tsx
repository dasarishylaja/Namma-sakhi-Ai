import React, { useState } from 'react';
import {
  Volume2,
  Square,
  ExternalLink,
  MessageSquarePlus,
  CheckCircle2,
  FileText,
  ListChecks,
} from 'lucide-react';
import {
  type Language,
  type SchemeDetail,
  VERIFIED_SCHEMES,
  SUPPORTED_LANGUAGES,
} from '../data/schemes';
import { UI_TRANSLATIONS } from '../data/translations';
import { speakText, stopSpeaking } from '../utils/speech';

interface SchemeDirectorySectionProps {
  language: Language;
  onSelectSchemeQuestion: (questionText: string) => void;
}

type CategoryFilter = 'all' | SchemeDetail['category'];

const CATEGORY_TABS: {
  id: CategoryFilter;
  labels: Record<Language, string>;
}[] = [
  {
    id: 'all',
    labels: {
      ta: 'அனைத்து திட்டங்களும்',
      en: 'All Schemes',
      te: 'అన్ని పథకాలు',
      hi: 'सभी योजनाएं',
      kn: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು',
      ml: 'എല്ലാ പദ്ധതികളും',
    },
  },
  {
    id: 'financial',
    labels: {
      ta: 'மாத உதவி (ரூ.1,000)',
      en: 'Monthly Financial Help',
      te: 'నెలవారీ ఆర్థిక సహాయం',
      hi: 'मासिक आर्थिक सहायता',
      kn: 'ಮಾಸಿಕ ಆರ್ಥಿಕ ನೆರವು',
      ml: 'പ്രതിമാസ ധനസഹായം',
    },
  },
  {
    id: 'maternity',
    labels: {
      ta: 'மகப்பேறு உதவி',
      en: 'Maternity Benefit',
      te: 'ప్రసూతి సహాయం',
      hi: 'मातृत्व सहायता',
      kn: 'ಮಾತೃತ್ವ ಸಹಾಯಧನ',
      ml: 'മാതൃത്വ സഹായം',
    },
  },
  {
    id: 'education',
    labels: {
      ta: 'கல்வி & சேமிப்பு',
      en: 'Education & Girl Child',
      te: 'విద్య & బాలికల పొదుపు',
      hi: 'शिक्षा व बालिका बचत',
      kn: 'ಶಿಕ್ಷಣ ಮತ್ತು ಉಳಿತಾಯ',
      ml: 'വിദ്യാഭ്യാസവും സമ്പാദ്യവും',
    },
  },
  {
    id: 'business',
    labels: {
      ta: 'சுயதொழில் கடன்',
      en: 'Business Loans',
      te: 'స్వయం ఉపాధి రుణాలు',
      hi: 'स्वरोजगार ऋण',
      kn: 'ಸ್ವಉದ್ಯೋಗ ಸಾಲ',
      ml: 'സ്വയംതൊഴിൽ വായ്പ',
    },
  },
  {
    id: 'housing',
    labels: {
      ta: 'இலவச எரிவாயு (LPG)',
      en: 'Free Cooking Gas (LPG)',
      te: 'ఉచిత వంట గ్యాస్ (LPG)',
      hi: 'मुफ्त रसोई गैस (LPG)',
      kn: 'ಉಚಿತ ಅಡುಗೆ ಗ್ಯಾಸ್',
      ml: 'സൗജന്യ പാചകവാതകം',
    },
  },
  {
    id: 'farming',
    labels: {
      ta: 'விவசாய உதவி',
      en: 'Farming Support',
      te: 'రైతు సహాయం',
      hi: 'किसान सहायता',
      kn: 'ರೈತ ಸಹಾಯ',
      ml: 'കർഷക സഹായം',
    },
  },
  {
    id: 'pension',
    labels: {
      ta: 'ஓய்வூதியம்',
      en: 'Pension',
      te: 'పెన్షన్',
      hi: 'पेंशन योजना',
      kn: 'ಪಿಂಚಣಿ',
      ml: 'പെൻഷൻ',
    },
  },
];

export const SchemeDirectorySection: React.FC<SchemeDirectorySectionProps> = ({
  language,
  onSelectSchemeQuestion,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [readingSchemeId, setReadingSchemeId] = useState<string | null>(null);

  const t = UI_TRANSLATIONS[language];
  const langConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const filteredSchemes =
    selectedCategory === 'all'
      ? VERIFIED_SCHEMES
      : VERIFIED_SCHEMES.filter((s) => s.category === selectedCategory);

  const handleReadScheme = (scheme: SchemeDetail) => {
    if (readingSchemeId === scheme.id) {
      stopSpeaking();
      setReadingSchemeId(null);
      return;
    }

    const text =
      language === 'ta'
        ? `${scheme.nameTa}. திட்டத்தின் பயன்: ${scheme.benefitTa}. தகுதிகள்: ${scheme.eligibilityTa.join(', ')}. தேவையான ஆவணங்கள்: ${scheme.documentsTa.join(', ')}. விண்ணப்பிக்கும் முறை: ${scheme.howToApplyTa.join(' ')}. ${scheme.verificationNoteTa}`
        : `${scheme.nameEn}. Benefit: ${scheme.benefitEn}. Eligibility: ${scheme.eligibilityEn.join(', ')}. Documents required: ${scheme.documentsEn.join(', ')}. How to apply: ${scheme.howToApplyEn.join(' ')}. ${scheme.verificationNoteEn}`;

    speakText(
      text,
      language === 'ta' ? 'ta-IN' : langConfig.speechLocale,
      () => setReadingSchemeId(scheme.id),
      () => setReadingSchemeId(null),
      () => setReadingSchemeId(null)
    );
  };

  return (
    <section
      id="schemes-section"
      aria-labelledby="schemes-heading"
      className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
    >
      <div className="pb-6 border-b border-[#E7E2DA]">
        <p className="text-xs font-semibold text-[#9A3412] tracking-wide">{t.schemesKicker}</p>
        <h2 id="schemes-heading" className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
          {t.schemesTitle}
        </h2>
        <p className="text-base text-[#57534E] mt-1">{t.schemesSubtext}</p>

        {/* Interactive Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-5 p-1.5 bg-[#FAF8F5] rounded-2xl border border-[#E7E2DA]">
          {CATEGORY_TABS.map((tab) => {
            const active = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-[#9A3412] text-white shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white'
                }`}
              >
                {tab.labels[language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => {
          const isReadingThis = readingSchemeId === scheme.id;
          const showEnglishPrimary = language !== 'ta';
          return (
            <article
              key={scheme.id}
              className="rounded-2xl border border-[#D6D0C4] bg-[#FAF8F5] p-5 sm:p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#57534E]">
                  <span>{scheme.level}</span>
                  <span aria-hidden="true">·</span>
                  <span>{scheme.nameTanglish}</span>
                </div>

                {/* Scheme Name */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] leading-snug">
                    {showEnglishPrimary ? scheme.nameEn : scheme.nameTa}
                  </h3>
                  <p className="text-sm font-medium text-[#57534E] mt-0.5">
                    {showEnglishPrimary ? scheme.nameTa : scheme.nameEn}
                  </p>
                </div>

                {/* Benefit */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E7E2DA]">
                  <p className="text-xs font-bold text-[#15803D]">{t.schemeBenefitLabel}</p>
                  <p className="text-base font-bold text-[#1C1917] mt-0.5 leading-relaxed">
                    {showEnglishPrimary ? scheme.benefitEn : scheme.benefitTa}
                  </p>
                  <p className="text-xs text-[#57534E] mt-1">
                    {showEnglishPrimary ? scheme.benefitTa : scheme.benefitEn}
                  </p>
                </div>

                {/* Eligibility */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                    <span>{t.eligibilityLabel}</span>
                  </h4>
                  <ul className="text-sm text-[#1C1917] space-y-1 pl-1">
                    {(showEnglishPrimary ? scheme.eligibilityEn : scheme.eligibilityTa).map(
                      (el, i) => (
                        <li key={i} className="leading-relaxed">
                          • {el}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Documents */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#9A3412] shrink-0" />
                    <span>{t.documentsLabel}</span>
                  </h4>
                  <ul className="text-sm text-[#1C1917] space-y-1 pl-1">
                    {(showEnglishPrimary ? scheme.documentsEn : scheme.documentsTa).map(
                      (doc, i) => (
                        <li key={i} className="leading-relaxed">
                          • {doc}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* How to apply */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                    <ListChecks className="w-4 h-4 text-[#9A3412] shrink-0" />
                    <span>{t.howToApplyLabel}</span>
                  </h4>
                  <ul className="text-sm text-[#1C1917] space-y-1 pl-1">
                    {(showEnglishPrimary ? scheme.howToApplyEn : scheme.howToApplyTa).map(
                      (stepStr, i) => (
                        <li key={i} className="leading-relaxed">
                          <span className="font-semibold text-[#9A3412] tabular-nums mr-1">
                            {i + 1}.
                          </span>
                          {stepStr}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Verification Note & Official Source */}
                <div className="pt-3 border-t border-[#E7E2DA] text-xs text-[#57534E] space-y-1">
                  <p>
                    <strong className="text-[#1C1917]">{t.officialSourceLabel}</strong>{' '}
                    {scheme.officialSourceName}
                  </p>
                  <p>{showEnglishPrimary ? scheme.verificationNoteEn : scheme.verificationNoteTa}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E7E2DA] flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleReadScheme(scheme)}
                  className={`flex-1 min-h-[48px] px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    isReadingThis
                      ? 'bg-[#B91C1C] text-white'
                      : 'bg-[#15803D] hover:bg-[#166534] text-white'
                  }`}
                >
                  {isReadingThis ? (
                    <>
                      <Square className="w-4 h-4 fill-current shrink-0" />
                      <span className="whitespace-nowrap">{t.stopAudioBtn}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 shrink-0" />
                      <span className="whitespace-nowrap">{t.readAnswerBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onSelectSchemeQuestion(
                      `Please explain ${scheme.nameEn} (${scheme.nameTa}) eligibility, required documents, and how to apply in ${langConfig.englishLabel} (${langConfig.nativeLabel}).`
                    )
                  }
                  className="flex-1 min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-[#9A3412] text-[#9A3412] hover:bg-[#FFF7ED] font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquarePlus className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">{t.askSakhiBtn}</span>
                </button>

                <a
                  href={scheme.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-3.5 py-2.5 rounded-xl bg-white border border-[#D6D0C4] text-[#1C1917] hover:bg-[#F3EFE6] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="whitespace-nowrap">myScheme.gov.in</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
