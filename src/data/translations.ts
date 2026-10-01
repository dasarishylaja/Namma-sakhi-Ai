import { VERIFIED_SCHEMES, type Language, type SakhiAIResponse } from './schemes.ts';

export interface UITranslations {
  brandSubtitle: string;
  navAsk: string;
  navAnswer: string;
  navGuided: string;
  navSdg: string;
  navSchemes: string;
  navSafety: string;
  welcomeTag: string;
  welcomeHeading: string;
  welcomeSubtext: string;
  listenWelcomeBtn: string;
  stopAudioBtn: string;
  dontKnowBtn: string;
  safetyBannerText: string;
  safetyRulesLink: string;
  voiceTextSectionKicker: string;
  voiceTextSectionTitle: string;
  step1VoiceLabel: string;
  speakInSelectedLang: string;
  micTapToSpeak: string;
  micListeningTapToStop: string;
  micHintSubtext: string;
  step2TypeLabel: string;
  clearBtn: string;
  inputPlaceholder: string;
  askSakhiBtn: string;
  askingSakhiBtn: string;
  demoQuestionsKicker: string;
  demoQuestionsTitle: string;
  answerSectionKicker: string;
  answerSectionTitle: string;
  yourQuestionLabel: string;
  readAnswerBtn: string;
  readInEnglishBtn: string;
  loadingTitle: string;
  loadingSubtext: string;
  errorTitle: string;
  tryAgainBtn: string;
  schemeNameLabel: string;
  schemeBenefitLabel: string;
  eligibilityLabel: string;
  documentsLabel: string;
  howToApplyLabel: string;
  verificationNoteLabel: string;
  officialSourceLabel: string;
  visitMySchemeBtn: string;
  guidedKicker: string;
  guidedTitle: string;
  guidedSubtext: string;
  startOverBtn: string;
  listenQuestionBtn: string;
  prevQuestionBtn: string;
  nextQuestionBtn: string;
  showMySchemesBtn: string;
  selectedAnswersLabel: string;
  sdgKicker: string;
  sdgTitle: string;
  sdgSubtext: string;
  sdg5Title: string;
  sdg5Desc: string;
  sdg4Title: string;
  sdg4Desc: string;
  sdg10Title: string;
  sdg10Desc: string;
  schemesKicker: string;
  schemesTitle: string;
  schemesSubtext: string;
  officialSourceSectionKicker: string;
  officialSourceSectionTitle: string;
  officialSourceSectionDesc: string;
  center1Title: string;
  center1Desc: string;
  center2Title: string;
  center2Desc: string;
  center3Title: string;
  center3Desc: string;
  prototypeNote: string;
  safetySectionKicker: string;
  safetySectionSubtext: string;
  readWarningBtn: string;
  safetyItems: { title: string; subtitle: string; desc: string }[];
  footerDesc: string;
  welcomeVoiceScript: string;
  safetyVoiceScript: string;
  localizedDemoQuestions: { id: string; primaryText: string; secondaryText: string }[];
}

export const UI_TRANSLATIONS: Record<Language, UITranslations> = {
  ta: {
    brandSubtitle: 'பெண்களுக்கான அரசுத் திட்ட உதவியாளர்',
    navAsk: 'கேள்வி கேட்க',
    navAnswer: 'சகியின் பதில்',
    navGuided: 'வழிகாட்டி',
    navSdg: 'SDG இலக்குகள்',
    navSchemes: 'அரசு திட்டங்கள்',
    navSafety: 'பாதுகாப்பு',
    welcomeTag: 'பெண்களுக்கான அரசுத் திட்ட உதவியாளர் · AI Scheme Assistant',
    welcomeHeading:
      'வணக்கம் சகோதரி! அரசுத் திட்டங்களை எளிய தமிழில் தெரிந்துகொள்ள நம்ம சகி உங்களுக்கு உதவும்.',
    welcomeSubtext:
      'உங்களுக்கு ஆங்கிலம் அல்லது கணினி அறிவு இல்லையென்றாலும் பரவாயில்லை. கீழே உள்ள பெரிய மைக் பட்டனை அழுத்தி உங்கள் குரலில் பேசலாம் அல்லது மாதிரி கேள்விகளைத் தொடலாம்.',
    listenWelcomeBtn: 'வரவேற்பை ஒலிக்கவும் · Listen',
    stopAudioBtn: 'நிறுத்து · Stop',
    dontKnowBtn: "என்ன கேட்பது என்று தெரியவில்லை (I don't know what to ask)",
    safetyBannerText:
      'உங்கள் OTP, பாஸ்வேர்ட், ATM PIN, வங்கி பின் எண் அல்லது முழு ஆதார் எண்ணை யாரிடமும் பகிர வேண்டாம்.',
    safetyRulesLink: 'பாதுகாப்பு விதிகள் · Safety Rules',
    voiceTextSectionKicker: 'குரல் அல்லது எழுத்து மூலம் கேளுங்கள் · Voice & Text Question',
    voiceTextSectionTitle: 'சகியிடம் உங்கள் கேள்வியைக் கேளுங்கள் (Ask Sakhi)',
    step1VoiceLabel: '1. மைக்கை அழுத்திப் பேசுங்கள் (Voice Input):',
    speakInSelectedLang: 'தமிழில் பேச (Tamil)',
    micTapToSpeak: 'மைக்கை அழுத்தி தமிழில் பேசுங்கள்',
    micListeningTapToStop: 'பேசிக்கொண்டிருக்கிறீர்கள்... நிறுத்த இங்கே தொடவும்',
    micHintSubtext: 'Tap Microphone & Speak ("Enakku government scheme venum")',
    step2TypeLabel: '2. அல்லது இங்கே உங்கள் கேள்வியை எழுதுங்கள் (Type Question):',
    clearBtn: 'அழிக்க (Clear)',
    inputPlaceholder:
      'உதாரணம்: Enakku government scheme venum / பெண்களுக்கு என்ன அரசு திட்டம் இருக்கு?',
    askSakhiBtn: 'சகியிடம் கேளுங்கள் · Ask Sakhi',
    askingSakhiBtn: 'சகி தேடுகிறார்... · Asking Sakhi...',
    demoQuestionsKicker: 'மாதிரி கேள்விகள் · Clickable Demo Questions',
    demoQuestionsTitle: 'கீழே உள்ள எந்தக் கேள்வியையும் தொட்டு உடனே பதில் பெறலாம்:',
    answerSectionKicker: 'சகியின் பதில் · Sakhi AI Answer',
    answerSectionTitle: 'உங்களுக்கான அரசுத் திட்ட வழிகாட்டுதல்',
    yourQuestionLabel: 'கேட்ட கேள்வி:',
    readAnswerBtn: 'பதிலை வாசிக்கவும் · Read Answer',
    readInEnglishBtn: 'Read in English',
    loadingTitle: 'சகி உங்களுக்கான அரசுத் திட்ட விவரங்களைத் தேடுகிறார்...',
    loadingSubtext: 'myScheme.gov.in அதிகாரப்பூர்வ ஆதாரங்களில் இருந்து எளிய தமிழில் பதில் தயாராகிறது...',
    errorTitle: 'பதில் பெறுவதில் சிறிய சிக்கல் ஏற்பட்டது / Could not fetch AI response',
    tryAgainBtn: 'மீண்டும் முயற்சி செய் · Try Again',
    schemeNameLabel: 'திட்டத்தின் பெயர் · Scheme Name',
    schemeBenefitLabel: 'திட்டத்தின் பயன் · Scheme Benefit',
    eligibilityLabel: 'யாரெல்லாம் தகுதியானவர்கள் · Who May Be Eligible',
    documentsLabel: 'தேவையான ஆவணங்கள் · Required Documents',
    howToApplyLabel: 'எப்படி விண்ணப்பிப்பது · How to Apply',
    verificationNoteLabel: 'முக்கிய சரிபார்ப்புக் குறிப்பு · Important Verification Note',
    officialSourceLabel: 'அதிகாரப்பூர்வ அரசு இணையதளம் · Official Source:',
    visitMySchemeBtn: 'myScheme.gov.in தளத்தில் பார்க்க',
    guidedKicker: 'வழிகாட்டி முறை · Guided Discovery Mode',
    guidedTitle: 'என்ன கேட்பது என்று தெரியவில்லையா? (I don’t know what to ask)',
    guidedSubtext:
      'கவலை வேண்டாம்! கீழே உள்ள 4 எளிய கேள்விகளுக்கு மட்டும் பட்டனைத் தொட்டு பதில் சொல்லுங்கள். சகி உங்களுக்கான திட்டத்தைக் கண்டுபிடிப்பார்.',
    startOverBtn: 'முதலில் இருந்து',
    listenQuestionBtn: 'கேள்வியைக் கேட்க',
    prevQuestionBtn: 'முந்தைய கேள்வி (Back)',
    nextQuestionBtn: 'அடுத்த கேள்வி (Next)',
    showMySchemesBtn: 'எனக்கான திட்டங்களைக் காட்டு · Show My Schemes',
    selectedAnswersLabel: 'தேர்ந்தெடுத்தவை:',
    sdgKicker: 'ஐ.நா. நிலையான வளர்ச்சி இலக்குகள் · UN Sustainable Development Goals',
    sdgTitle: 'கிராமப்புற பெண்கள் முன்னேற்றம் மற்றும் சமூக தாக்கம் (SDG Impact)',
    sdgSubtext:
      'நம்ம சகி செயலி ஐக்கிய நாடுகள் சபையின் முக்கிய நிலையான வளர்ச்சி இலக்குகளை (SDG 5, SDG 4, SDG 10) நேரடியாக முன்னெடுக்கிறது.',
    sdg5Title: 'பாலின சமத்துவம் (Gender Equality)',
    sdg5Desc:
      'கிராமப்புற பெண்களுக்கு அரசின் நிதி உரிமைகள், மகப்பேறு உதவி மற்றும் சுயதொழில் கடன்களை நேரடியாக அறியச் செய்து பொருளாதார சுதந்திரத்தை வழங்குகிறது.',
    sdg4Title: 'தரமான கல்வி மற்றும் விழிப்புணர்வு (Quality Education)',
    sdg4Desc:
      'எழுத்தறிவு அல்லது ஆங்கில அறிவு இல்லாத பெண்களும் குரல் வழி தொழில்நுட்பம் (Voice AI) மூலம் அரசுத் திட்டங்கள் மற்றும் கல்வி உதவித்தொகைகளை அறிய உதவுகிறது.',
    sdg10Title: 'சமத்துவமின்மையைக் குறைத்தல் (Reduced Inequalities)',
    sdg10Desc:
      '6 இந்திய மொழிகளில் இடைத்தரகர்கள் இன்றி அரசு நலத்திட்ட தகவல்களைக் கடைக்கோடி கிராமப்புற பெண்களுக்கும் சமமாகக் கொண்டு சேர்க்கிறது.',
    schemesKicker: 'அரசுத் திட்டங்களின் விவரம் · Government Scheme Directory',
    schemesTitle: 'பெண்களுக்கான முக்கிய அரசுத் திட்டங்கள் (myScheme.gov.in ஆதாரம்)',
    schemesSubtext:
      'எந்தத் திட்டத்தைப் பற்றியும் ஒலிபெருக்கி பட்டனை அழுத்தி கேட்கலாம் அல்லது சகியிடம் கூடுதல் சந்தேகம் கேட்கலாம்.',
    officialSourceSectionKicker: 'அதிகாரப்பூர்வ அரசு இணையதளம் · Official Government Source Reference',
    officialSourceSectionTitle: 'இந்திய அரசின் அதிகாரப்பூர்வ myScheme இணையதளம் (myScheme.gov.in)',
    officialSourceSectionDesc:
      'நம்ம சகி வழங்கும் அனைத்து திட்ட விவரங்களும் இந்திய அரசின் https://www.myscheme.gov.in/ தளத்தை அடிப்படையாகக் கொண்டவை. திட்டத்தின் சமீபத்திய விதிகள் மற்றும் தகுதிகளை அதிகாரப்பூர்வ அரசு இணையதளத்தில் அல்லது உங்கள் ஊர் அரசு இ-சேவை மையத்தில் நேரில் சரிபார்க்கவும்.',
    center1Title: '1. இ-சேவை மையம் (e-Sevai / CSC)',
    center1Desc:
      'உங்கள் கிராமம் அல்லது தாலுகா அலுவலகத்தில் உள்ள அரசு இ-சேவை மையத்தில் பாதுகாப்பாக விண்ணப்பிக்கலாம்.',
    center2Title: '2. அங்கன்வாடி / சுகாதார நிலையம்',
    center2Desc:
      'கர்ப்பிணிப் பெண்கள் மற்றும் குழந்தைகள் நலத் திட்டங்களுக்கு கிராம செவிலியர் (VHN) உதவுவார்.',
    center3Title: '3. அஞ்சலகம் & அரசு வங்கி',
    center3Desc:
      'செல்வமகள் சேமிப்பு மற்றும் முத்ரா தொழில் கடன்களுக்கு அரசு வங்கி அல்லது தபால் நிலையத்தை அணுகவும்.',
    prototypeNote:
      'முக்கிய குறிப்பு: நம்ம சகி ஒரு வழிகாட்டி செயலி (Prototype) மட்டுமே. இது தன்னிச்சையாக அரசு விண்ணப்பங்களை சமர்ப்பிக்காது.',
    safetySectionKicker: 'பாதுகாப்பு எச்சரிக்கை · Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'அரசுத் திட்டங்களில் சேர யாராவது தொலைபேசியில் அழைத்து கீழே உள்ள ரகசிய தகவல்களைக் கேட்டால் ஒருபோதும் சொல்லாதீர்கள்:',
    readWarningBtn: 'பாதுகாப்பு விதியை வாசிக்க · Read Warning',
    safetyItems: [
      {
        title: '1. OTP எண் (ஒருமுறை கடவுச்சொல்)',
        subtitle: 'Never share OTP',
        desc: 'உங்கள் கைபேசிக்கு SMS மூலம் வரும் 4 அல்லது 6 இலக்க OTP எண்ணை யாரிடமும் சொல்ல வேண்டாம்.',
      },
      {
        title: '2. பாஸ்வேர்ட் (Password)',
        subtitle: 'Never share Password',
        desc: 'வங்கி அல்லது இணையதள பாஸ்வேர்டை யாருக்கும் பகிர வேண்டாம்.',
      },
      {
        title: '3. ஏடிஎம் பின் எண் (ATM PIN)',
        subtitle: 'Never share ATM PIN',
        desc: 'உங்கள் ATM கார்டு எண் அல்லது 4 இலக்க ரகசிய PIN எண்ணை யாரிடமும் கூற வேண்டாம்.',
      },
      {
        title: '4. வங்கி பின் எண் (Bank / UPI PIN)',
        subtitle: 'Never share Bank PIN',
        desc: 'பணம் அனுப்பப் பயன்படும் வங்கி ரகசிய எண்ணை (UPI PIN) அரசு அதிகாரிகள் கேட்க மாட்டார்கள்.',
      },
      {
        title: '5. முழு ஆதார் எண் (Full Aadhaar Number)',
        subtitle: 'Do not type Full Aadhaar here',
        desc: 'இந்த செயலியில் உங்கள் 12 இலக்க முழு ஆதார் எண்ணை உள்ளிட வேண்டாம்.',
      },
      {
        title: '6. தனிப்பட்ட வங்கி ரகசியங்கள்',
        subtitle: 'No Unnecessary Sensitive Info',
        desc: 'அரசுத் திட்டங்களுக்கு லஞ்சம் அல்லது முன்பணம் கேட்டு வரும் போலி அழைப்புகளை நம்ப வேண்டாம்.',
      },
    ],
    footerDesc:
      'இது கிராமப்புற பெண்களுக்கு அரசுத் திட்டங்களை எளிய மொழியில் புரிய வைப்பதற்கான வழிகாட்டி மாதிரி (Hackathon Prototype). இந்த செயலி அரசு விண்ணப்பங்களை தானாக சமர்ப்பிக்காது.',
    welcomeVoiceScript:
      'வணக்கம் சகோதரி! நம்ம சகி செயலிற்கு உங்களை அன்புடன் வரவேற்கிறோம். கீழே உள்ள பெரிய மைக் பட்டனை அழுத்தி தமிழில் உங்கள் கேள்வியைக் கேட்கலாம். என்ன கேட்பது என்று தெரியாவிட்டால் வழிகாட்டி பட்டனைத் தொடவும். முக்கிய எச்சரிக்கை: ஓடிபி, பாஸ்வேர்ட், பின் எண் அல்லது முழு ஆதார் எண்ணை யாரிடமும் பகிர வேண்டாம்.',
    safetyVoiceScript:
      'பாதுகாப்பு எச்சரிக்கை: உங்கள் கைபேசிக்கு வரும் ஓடிபி எண், பாஸ்வேர்ட், ஏடிஎம் பின் எண், வங்கி கணக்கு பின் எண் அல்லது முழு ஆதார் எண்ணை யாரிடமும் எப்போதும் பகிர வேண்டாம்.',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'Enakku government scheme pathi therinjukanum',
        secondaryText: 'எனக்கு அரசு திட்டம் பற்றி தெரிஞ்சுக்கணும் · I want to know about schemes',
      },
      {
        id: 'q2',
        primaryText: 'Pengalukku enna government help irukku?',
        secondaryText: 'பெண்களுக்கு என்ன அரசு உதவி இருக்கு? · What government help is there for women?',
      },
      {
        id: 'q3',
        primaryText: 'Enna documents venum?',
        secondaryText: 'விண்ணப்பிக்க என்ன ஆவணங்கள் வேணும்? · What documents are needed?',
      },
      {
        id: 'q4',
        primaryText: 'How can I find government schemes?',
        secondaryText: 'அரசு திட்டங்களை நான் எப்படி கண்டறிவது?',
      },
      {
        id: 'q5',
        primaryText: 'Enakku government scheme venum',
        secondaryText: 'எனக்கு அரசு திட்டம் வேணும் · I need a government scheme',
      },
      {
        id: 'q6',
        primaryText: 'Pengalukku enna government scheme irukku?',
        secondaryText: 'பெண்களுக்கு என்ன அரசு திட்டம் இருக்கு?',
      },
      {
        id: 'q7',
        primaryText: 'Indha scheme-ku naan eligible-aa?',
        secondaryText: 'இந்த திட்டத்திற்கு நான் தகுதியானவரா? · Am I eligible?',
      },
      {
        id: 'q8',
        primaryText: 'Eppadi apply panradhu?',
        secondaryText: 'எப்படி விண்ணப்பிப்பது? · How to apply?',
      },
    ],
  },

  en: {
    brandSubtitle: 'AI Government Scheme Assistant for Women',
    navAsk: 'Ask Sakhi',
    navAnswer: 'AI Answer',
    navGuided: 'Guided Help',
    navSdg: 'SDG Impact',
    navSchemes: 'Schemes',
    navSafety: 'Safety',
    welcomeTag: 'Empowering Rural Women · Digital Welfare Access',
    welcomeHeading:
      'Welcome Sister! Namma Sakhi helps you easily discover and understand government schemes.',
    welcomeSubtext:
      'No technical knowledge needed. Tap the large microphone button below to speak your question, type in the box, or use the step-by-step Guided Mode.',
    listenWelcomeBtn: 'Listen to Welcome',
    stopAudioBtn: 'Stop Audio',
    dontKnowBtn: "I don't know what to ask",
    safetyBannerText:
      'Never share your OTP, Password, ATM PIN, Bank PIN, or Full Aadhaar number with anyone.',
    safetyRulesLink: 'View Safety Rules',
    voiceTextSectionKicker: 'Voice & Text Assistant',
    voiceTextSectionTitle: 'Ask Sakhi Your Question',
    step1VoiceLabel: '1. Tap Microphone & Speak Your Question:',
    speakInSelectedLang: 'Speak in English',
    micTapToSpeak: 'Tap Microphone to Speak Your Question',
    micListeningTapToStop: 'Listening now... Tap Here to Stop',
    micHintSubtext: 'Speak in English, Tamil, or Tanglish ("Enakku government scheme venum")',
    step2TypeLabel: '2. Or Type Your Question Below:',
    clearBtn: 'Clear',
    inputPlaceholder:
      'Example: What government schemes are available for women? / What documents are needed?',
    askSakhiBtn: 'Ask Sakhi',
    askingSakhiBtn: 'Asking Sakhi...',
    demoQuestionsKicker: 'Clickable Sample Questions',
    demoQuestionsTitle: 'Tap any sample question below to get an instant answer:',
    answerSectionKicker: 'Sakhi AI Guidance',
    answerSectionTitle: 'Your Government Scheme Information',
    yourQuestionLabel: 'Your Question:',
    readAnswerBtn: 'Read Answer Aloud',
    readInEnglishBtn: 'Listen in Tamil (தமிழில்)',
    loadingTitle: 'Sakhi is finding verified government schemes for you...',
    loadingSubtext: 'Checking official myScheme.gov.in references...',
    errorTitle: 'Could not fetch AI response',
    tryAgainBtn: 'Try Again',
    schemeNameLabel: 'Scheme Name',
    schemeBenefitLabel: 'Scheme Benefit',
    eligibilityLabel: 'Who May Be Eligible',
    documentsLabel: 'Required Documents',
    howToApplyLabel: 'How to Apply',
    verificationNoteLabel: 'Important Verification Note',
    officialSourceLabel: 'Official Government Source:',
    visitMySchemeBtn: 'Verify on myScheme.gov.in',
    guidedKicker: 'Step-by-Step Guided Discovery',
    guidedTitle: "I don't know what to ask — Guided Mode",
    guidedSubtext:
      'Answer 4 simple questions one by one by tapping the options below, and Sakhi will find relevant schemes for you.',
    startOverBtn: 'Start Over',
    listenQuestionBtn: 'Listen to Question',
    prevQuestionBtn: 'Previous Question',
    nextQuestionBtn: 'Next Question',
    showMySchemesBtn: 'Show My Government Schemes',
    selectedAnswersLabel: 'Selected Profile:',
    sdgKicker: 'United Nations Sustainable Development Goals',
    sdgTitle: 'Driving Rural Women Empowerment & SDG Impact',
    sdgSubtext:
      'Namma Sakhi directly advances three core UN Sustainable Development Goals through voice-first multilingual access to public welfare.',
    sdg5Title: 'Gender Equality (SDG 5)',
    sdg5Desc:
      'Empowers rural women with direct access to monthly financial assistance, maternity benefits, and collateral-free enterprise loans.',
    sdg4Title: 'Quality Education & Digital Literacy (SDG 4)',
    sdg4Desc:
      'Removes literacy barriers through voice-first guidance and connects girl students with scholarships and higher-education support.',
    sdg10Title: 'Reduced Inequalities (SDG 10)',
    sdg10Desc:
      'Bridges the rural-urban digital divide across 6 Indian languages so marginalized women can access government entitlements without middlemen.',
    schemesKicker: 'Verified Scheme Information Directory',
    schemesTitle: 'Key Government Schemes for Women (myScheme.gov.in)',
    schemesSubtext:
      'Tap “Read Answer” on any card to hear the full details aloud, or click “Ask Sakhi” for personalized eligibility advice.',
    officialSourceSectionKicker: 'Official Government Source Reference',
    officialSourceSectionTitle: 'Official Government of India Portal: myScheme.gov.in',
    officialSourceSectionDesc:
      'All scheme guidance in Namma Sakhi is referenced from the official Government of India portal https://www.myscheme.gov.in/. Please verify the latest rules on the official portal or at your nearest Common Service Centre (CSC) / e-Sevai centre.',
    center1Title: '1. Common Service Centre (CSC / e-Sevai)',
    center1Desc:
      'Visit your village or block government service center for safe, assisted online application filing.',
    center2Title: '2. Anganwadi & Primary Health Centre',
    center2Desc:
      'Meet your local Anganwadi worker or Village Health Nurse (VHN) for maternity and child welfare schemes.',
    center3Title: '3. Post Office & Public Sector Banks',
    center3Desc:
      'Open Sukanya Samriddhi accounts or apply for PM Mudra business loans directly at your local branch.',
    prototypeNote:
      'Important Note: Namma Sakhi is a guidance prototype. It does NOT automatically submit government applications.',
    safetySectionKicker: 'Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'Never share any of the following confidential details with anyone claiming to register you for a government scheme:',
    readWarningBtn: 'Read Safety Warning',
    safetyItems: [
      {
        title: '1. Never Share OTP',
        subtitle: 'One-Time Password',
        desc: 'Never share the 4 or 6 digit OTP sent to your mobile phone with any caller or agent.',
      },
      {
        title: '2. Never Share Passwords',
        subtitle: 'Account Passwords',
        desc: 'Keep your banking and portal passwords completely private.',
      },
      {
        title: '3. Never Share ATM PIN',
        subtitle: 'Debit Card PIN',
        desc: 'No government scheme ever requires your ATM card number, CVV, or 4-digit ATM PIN.',
      },
      {
        title: '4. Never Share Bank / UPI PIN',
        subtitle: 'Mobile Banking PIN',
        desc: 'You never need to enter a UPI PIN to receive government welfare money.',
      },
      {
        title: '5. Do Not Share Full Aadhaar Online',
        subtitle: 'Protect Your Identity',
        desc: 'Do not enter your full 12-digit Aadhaar number in chat boxes or share it with unknown callers.',
      },
      {
        title: '6. No Unnecessary Sensitive Info',
        subtitle: 'Beware of Fraud Calls',
        desc: 'Government schemes do not ask for bribes or advance registration fees over phone calls.',
      },
    ],
    footerDesc:
      'Namma Sakhi is a hackathon prototype guiding rural women to official government services. It does NOT automatically submit applications.',
    welcomeVoiceScript:
      'Welcome Sister to Namma Sakhi! Even if you have no technical knowledge, you can press the large microphone button to ask about government schemes in your own voice, or tap the I do not know what to ask button. Never share your OTP, password, or PIN with anyone.',
    safetyVoiceScript:
      'Safety Warning: OTP, password, PIN and sensitive personal information-ai share panna vendam. Never share your OTP, password, ATM PIN, Bank PIN, or full Aadhaar number with anyone.',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'Enakku government scheme pathi therinjukanum',
        secondaryText: 'I want to know about government schemes for me',
      },
      {
        id: 'q2',
        primaryText: 'Pengalukku enna government help irukku?',
        secondaryText: 'What government help is available for women?',
      },
      {
        id: 'q3',
        primaryText: 'Enna documents venum?',
        secondaryText: 'What documents are needed to apply?',
      },
      {
        id: 'q4',
        primaryText: 'How can I find government schemes?',
        secondaryText: 'Guide me on finding eligible schemes on myScheme.gov.in',
      },
      {
        id: 'q5',
        primaryText: 'Enakku government scheme venum',
        secondaryText: 'I need a government welfare scheme',
      },
      {
        id: 'q6',
        primaryText: 'Pengalukku enna government scheme irukku?',
        secondaryText: 'What government schemes are there for women?',
      },
      {
        id: 'q7',
        primaryText: 'Indha scheme-ku naan eligible-aa?',
        secondaryText: 'Am I eligible for this scheme?',
      },
      {
        id: 'q8',
        primaryText: 'Eppadi apply panradhu?',
        secondaryText: 'How do I apply for a scheme?',
      },
    ],
  },

  te: {
    brandSubtitle: 'మహిళల కోసం ప్రభుత్వ పథకాల AI సహాయకురాలు',
    navAsk: 'ప్రశ్న అడగండి',
    navAnswer: 'సఖి సమాధానం',
    navGuided: 'మార్గదర్శిని',
    navSdg: 'SDG లక్ష్యాలు',
    navSchemes: 'ప్రభుత్వ పథకాలు',
    navSafety: 'భద్రత',
    welcomeTag: 'గ్రామీణ మహిళా సాధికారత · AI Government Scheme Assistant',
    welcomeHeading:
      'నమస్కారం సోదరీ! ప్రభుత్వ సంక్షేమ పథకాలను సులభమైన తెలుగులో తెలుసుకోవడానికి నమ్మ సఖి మీకు సహాయం చేస్తుంది.',
    welcomeSubtext:
      'మీకు ఇంగ్లీష్ లేదా కంప్యూటర్ పరిజ్ఞానం లేకపోయినా పర్వాలేదు. క్రింద ఉన్న పెద్ద మైక్ బటన్‌ను నొక్కి తెలుగులో మాట్లాడండి లేదా మాదిరి ప్రశ్నలను తాకండి.',
    listenWelcomeBtn: 'ఆహ్వానాన్ని వినండి · Listen',
    stopAudioBtn: 'ఆపండి · Stop',
    dontKnowBtn: "ఏమి అడగాలో తెలియడం లేదు (I don't know what to ask)",
    safetyBannerText:
      'మీ OTP, పాస్‌వర్డ్, ATM PIN, బ్యాంక్ PIN లేదా పూర్తి ఆధార్ నంబర్‌ను ఎవరితోనూ పంచుకోవద్దు.',
    safetyRulesLink: 'భద్రతా నియమాలు · Safety Rules',
    voiceTextSectionKicker: 'వాయిస్ లేదా టెక్స్ట్ ద్వారా అడగండి · Voice & Text Question',
    voiceTextSectionTitle: 'సఖిని మీ ప్రశ్న అడగండి (Ask Sakhi)',
    step1VoiceLabel: '1. మైక్ నొక్కి తెలుగులో మాట్లాడండి (Voice Input):',
    speakInSelectedLang: 'తెలుగులో మాట్లాడండి (Telugu)',
    micTapToSpeak: 'మైక్ నొక్కి తెలుగులో మాట్లాడండి',
    micListeningTapToStop: 'వింటోంది... ఆపడానికి ఇక్కడ తాకండి',
    micHintSubtext: 'తెలుగు లేదా ఇంగ్లీష్‌లో మాట్లాడండి ("మహిళలకు ఏ ప్రభుత్వ పథకాలు ఉన్నాయి?")',
    step2TypeLabel: '2. లేదా మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి (Type Question):',
    clearBtn: 'తుడిచివేయి (Clear)',
    inputPlaceholder:
      'ఉదాహరణ: మహిళలకు ఏ ప్రభుత్వ పథకాలు ఉన్నాయి? / దరఖాస్తు చేయడానికి ఏ పత్రాలు కావాలి?',
    askSakhiBtn: 'సఖిని అడగండి · Ask Sakhi',
    askingSakhiBtn: 'సఖి వెతుకుతోంది... · Asking Sakhi...',
    demoQuestionsKicker: 'మాదిరి ప్రశ్నలు · Clickable Demo Questions',
    demoQuestionsTitle: 'వెంటనే సమాధానం పొందడానికి క్రింది ఏదైనా ప్రశ్నను తాకండి:',
    answerSectionKicker: 'సఖి AI సమాధానం · Sakhi AI Answer',
    answerSectionTitle: 'మీ కోసం ప్రభుత్వ పథకాల మార్గదర్శకత్వం',
    yourQuestionLabel: 'మీ ప్రశ్న:',
    readAnswerBtn: 'సమాధానం చదివి వినిపించు · Read Answer',
    readInEnglishBtn: 'Read in English',
    loadingTitle: 'సఖి మీ కోసం ప్రభుత్వ పథకాల వివరాలను వెతుకుతోంది...',
    loadingSubtext: 'అధికారిక myScheme.gov.in నుండి సులభమైన తెలుగులో సమాధానం సిద్ధమవుతోంది...',
    errorTitle: 'సమాధానం పొందడంలో చిన్న సమస్య ఏర్పడింది',
    tryAgainBtn: 'మళ్ళీ ప్రయత్నించండి · Try Again',
    schemeNameLabel: 'పథకం పేరు · Scheme Name',
    schemeBenefitLabel: 'పథకం ప్రయోజనం · Scheme Benefit',
    eligibilityLabel: 'ఎవరు అర్హులు · Who May Be Eligible',
    documentsLabel: 'కావలసిన పత్రాలు · Required Documents',
    howToApplyLabel: 'ఎలా దరఖాస్తు చేయాలి · How to Apply',
    verificationNoteLabel: 'ముఖ్యమైన గమనిక · Important Verification Note',
    officialSourceLabel: 'అధికారిక ప్రభుత్వ వెబ్‌సైట్ · Official Source:',
    visitMySchemeBtn: 'myScheme.gov.in లో చూడండి',
    guidedKicker: 'దశలవారీ మార్గదర్శిని · Guided Mode',
    guidedTitle: 'ఏమి అడగాలో తెలియడం లేదా? (I don’t know what to ask)',
    guidedSubtext:
      'చింతించకండి! క్రింది 4 సులభమైన ప్రశ్నలకు బటన్లను తాకి సమాధానం ఇవ్వండి. సఖి మీకు తగిన పథకాలను చూపుతుంది.',
    startOverBtn: 'మొదటి నుండి',
    listenQuestionBtn: 'ప్రశ్నను వినండి',
    prevQuestionBtn: 'మునుపటి ప్రశ్న (Back)',
    nextQuestionBtn: 'తదుపరి ప్రశ్న (Next)',
    showMySchemesBtn: 'నాకు తగిన పథకాలను చూపించు · Show My Schemes',
    selectedAnswersLabel: 'ఎంచుకున్న వివరాలు:',
    sdgKicker: 'ఐక్యరాజ్యసమితి సుస్థిర అభివృద్ధి లక్ష్యాలు · UN SDGs',
    sdgTitle: 'గ్రామీణ మహిళా సాధికారత & SDG ప్రభావం',
    sdgSubtext:
      'నమ్మ సఖి ఐక్యరాజ్యసమితి యొక్క మూడు కీలక సుస్థిర అభివృద్ధి లక్ష్యాలకు (SDG 5, SDG 4, SDG 10) మద్దతు ఇస్తుంది.',
    sdg5Title: 'లింగ సమానత్వం (SDG 5: Gender Equality)',
    sdg5Desc:
      'గ్రామీణ మహిళలకు ఆర్థిక సహాయం, ప్రసూతి ప్రయోజనాలు మరియు స్వయం ఉపాధి రుణాల సమాచారాన్ని అందించి ఆర్థిక స్వావలంబన కల్పిస్తుంది.',
    sdg4Title: 'నాణ్యమైన విద్య & అవగాహన (SDG 4: Quality Education)',
    sdg4Desc:
      'చదువు లేదా సాంకేతిక పరిజ్ఞానం లేని మహిళలు కూడా వాయిస్ సహాయంతో ప్రభుత్వ పథకాలు మరియు బాలికల విద్యా స్కాలర్‌షిప్‌లను తెలుసుకునేలా చేస్తుంది.',
    sdg10Title: 'అసమానతల తగ్గింపు (SDG 10: Reduced Inequalities)',
    sdg10Desc:
      '6 భారతీయ భాషలలో గ్రామీణ మహిళలకు దళారుల ప్రమేయం లేకుండా ప్రభుత్వ సంక్షేమ సమాచారాన్ని సమానంగా చేరవేస్తుంది.',
    schemesKicker: 'ప్రభుత్వ పథకాల జాబితా · Verified Scheme Directory',
    schemesTitle: 'మహిళల కోసం ముఖ్యమైన ప్రభుత్వ పథకాలు (myScheme.gov.in)',
    schemesSubtext:
      'ఏదైనా పథకం గురించి వినడానికి "Read Answer" నొక్కండి లేదా సఖిని అడగండి.',
    officialSourceSectionKicker: 'అధికారిక ప్రభుత్వ వెబ్‌సైట్ · Official Reference',
    officialSourceSectionTitle: 'భారత ప్రభుత్వ అధికారిక పోర్టల్: myScheme.gov.in',
    officialSourceSectionDesc:
      'నమ్మ సఖిలోని అన్ని పథకాల వివరాలు భారత ప్రభుత్వ https://www.myscheme.gov.in/ పోర్టల్ ఆధారంగా అందించబడ్డాయి. దయచేసి తాజా నియమాలను అధికారిక వెబ్‌సైట్ లేదా మీ సమీప మీ-సేవ / CSC కేంద్రంలో సరిచూసుకోండి.',
    center1Title: '1. మీ-సేవ / CSC కేంద్రం (Common Service Centre)',
    center1Desc:
      'మీ గ్రామంలోని ప్రభుత్వ సేవా కేంద్రంలో సురక్షితంగా దరఖాస్తు చేసుకోవచ్చు.',
    center2Title: '2. అంగన్‌వాడీ / ప్రాథమిక ఆరోగ్య కేంద్రం',
    center2Desc:
      'గర్భిణీ స్త్రీలు మరియు శిశు సంక్షేమ పథకాల కోసం అంగన్‌వాడీ కార్యకర్త లేదా ANM నర్సును సంప్రదించండి.',
    center3Title: '3. పోస్టాఫీసు & ప్రభుత్వ బ్యాంకు',
    center3Desc:
      'సుకన్య సమృద్ధి ఖాతా మరియు ముద్ర రుణాల కోసం సమీప పోస్టాఫీసు లేదా బ్యాంకును సంప్రదించండి.',
    prototypeNote:
      'ముఖ్య గమనిక: నమ్మ సఖి ఒక మార్గదర్శక నమూనా (Prototype) మాత్రమే. ఇది ప్రభుత్వ దరఖాస్తులను స్వయంచాలకంగా సమర్పించదు.',
    safetySectionKicker: 'భద్రతా హెచ్చరిక · Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'ప్రభుత్వ పథకాల పేరుతో ఎవరైనా ఫోన్ చేసి క్రింది రహస్య వివరాలను అడిగితే ఎప్పుడూ చెప్పకండి:',
    readWarningBtn: 'భద్రతా హెచ్చరికను వినండి · Read Warning',
    safetyItems: [
      {
        title: '1. OTP నంబర్ చెప్పకండి',
        subtitle: 'Never share OTP',
        desc: 'మీ ఫోన్‌కు SMS ద్వారా వచ్చే 4 లేదా 6 అంకెల OTPని ఎవరితోనూ పంచుకోవద్దు.',
      },
      {
        title: '2. పాస్‌వర్డ్ (Password)',
        subtitle: 'Never share Password',
        desc: 'మీ బ్యాంక్ లేదా ఖాతా పాస్‌వర్డ్‌లను ఎవరికీ చెప్పకండి.',
      },
      {
        title: '3. ఏటీఎం పిన్ (ATM PIN)',
        subtitle: 'Never share ATM PIN',
        desc: 'మీ ATM కార్డు నంబర్ లేదా 4 అంకెల రహస్య PIN నంబర్‌ను ఎవరికీ ఇవ్వకండి.',
      },
      {
        title: '4. బ్యాంక్ / UPI PIN',
        subtitle: 'Never share Bank PIN',
        desc: 'ప్రభుత్వ పథకం డబ్బు రావడానికి UPI PIN నొక్కాల్సిన అవసరం ఉండదు.',
      },
      {
        title: '5. పూర్తి ఆధార్ నంబర్ (Full Aadhaar)',
        subtitle: 'Do not type Full Aadhaar here',
        desc: 'ఈ యాప్‌లో మీ 12 అంకెల పూర్తి ఆధార్ నంబర్‌ను టైప్ చేయవద్దు.',
      },
      {
        title: '6. వ్యక్తిగత బ్యాంక్ రహస్యాలు',
        subtitle: 'No Unnecessary Sensitive Info',
        desc: 'ప్రభుత్వ పథకాల కోసం లంచం లేదా ముందస్తు రుసుము అడిగే నకిలీ కాల్స్ నమ్మవద్దు.',
      },
    ],
    footerDesc:
      'నమ్మ సఖి గ్రామీణ మహిళలకు ప్రభుత్వ పథకాలను సులభంగా వివరించే ప్రోటోటైప్. ఇది దరఖాస్తులను స్వయంచాలకంగా సమర్పించదు.',
    welcomeVoiceScript:
      'నమస్కారం సోదరీ! నమ్మ సఖి యాప్‌కు స్వాగతం. క్రింద ఉన్న పెద్ద మైక్ బటన్‌ను నొక్కి తెలుగులో మీ ప్రశ్నను అడగవచ్చు. ఏమి అడగాలో తెలియకపోతే మార్గదర్శిని బటన్‌ను తాకండి. ముఖ్య గమనిక: ఓటీపీ, పాస్‌వర్డ్ లేదా పిన్ నంబర్‌ను ఎవరితోనూ పంచుకోవద్దు.',
    safetyVoiceScript:
      'భద్రతా హెచ్చరిక: మీ మొబైల్‌కు వచ్చే ఓటీపీ, పాస్‌వర్డ్, ఏటీఎం పిన్, బ్యాంక్ పిన్ లేదా పూర్తి ఆధార్ నంబర్‌ను ఎవరితోనూ పంచుకోవద్దు.',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'మహిళలకు ఏ ప్రభుత్వ పథకాలు ఉన్నాయి? (Pengalukku enna government help irukku?)',
        secondaryText: 'Enakku government scheme pathi therinjukanum · Women welfare schemes',
      },
      {
        id: 'q2',
        primaryText: 'దరఖాస్తు చేయడానికి ఏ పత్రాలు కావాలి? (Enna documents venum?)',
        secondaryText: 'What documents are required to apply?',
      },
      {
        id: 'q3',
        primaryText: 'ఈ పథకానికి నేను అర్హురాలినా? (Indha scheme-ku naan eligible-aa?)',
        secondaryText: 'Am I eligible for this government scheme?',
      },
      {
        id: 'q4',
        primaryText: 'ఎలా దరఖాస్తు చేయాలి? (Eppadi apply panradhu?)',
        secondaryText: 'How can I apply for government schemes?',
      },
    ],
  },

  hi: {
    brandSubtitle: 'महिलाओं के लिए सरकारी योजना AI सहायिका',
    navAsk: 'सवाल पूछें',
    navAnswer: 'सखी का उत्तर',
    navGuided: 'मार्गदर्शन',
    navSdg: 'SDG लक्ष्य',
    navSchemes: 'सरकारी योजनाएं',
    navSafety: 'सुरक्षा',
    welcomeTag: 'ग्रामीण महिला सशक्तिकरण · AI Government Scheme Assistant',
    welcomeHeading:
      'नमस्ते बहन! सरकारी योजनाओं को सरल भाषा में समझने के लिए नम्मा सखी आपकी मदद करेगी।',
    welcomeSubtext:
      'यदि आपको अंग्रेजी या कंप्यूटर का ज्ञान नहीं है तो भी चिंता न करें। नीचे दिए गए बड़े माइक बटन को दबाकर अपनी आवाज में पूछें या उदाहरण प्रश्नों को छुएं।',
    listenWelcomeBtn: 'स्वागत संदेश सुनें · Listen',
    stopAudioBtn: 'रोकें · Stop',
    dontKnowBtn: "मुझे नहीं पता क्या पूछना है (I don't know what to ask)",
    safetyBannerText:
      'अपना OTP, पासवर्ड, ATM PIN, बैंक PIN या पूरा आधार नंबर किसी के साथ साझा न करें।',
    safetyRulesLink: 'सुरक्षा नियम · Safety Rules',
    voiceTextSectionKicker: 'आवाज या टेक्स्ट से पूछें · Voice & Text Question',
    voiceTextSectionTitle: 'सखी से अपना सवाल पूछें (Ask Sakhi)',
    step1VoiceLabel: '1. माइक दबाकर हिंदी में बोलें (Voice Input):',
    speakInSelectedLang: 'हिन्दी में बोलें (Hindi)',
    micTapToSpeak: 'माइक दबाकर अपना सवाल बोलें',
    micListeningTapToStop: 'सुन रही हूँ... रोकने के लिए यहाँ छुएं',
    micHintSubtext: 'हिंदी, तमिल या अंग्रेजी में बोलें ("महिलाओं के लिए कौन सी सरकारी योजना है?")',
    step2TypeLabel: '2. या यहाँ अपना सवाल लिखें (Type Question):',
    clearBtn: 'मिटाएं (Clear)',
    inputPlaceholder:
      'उदाहरण: महिलाओं के लिए कौन सी सरकारी योजना है? / आवेदन के लिए क्या दस्तावेज चाहिए?',
    askSakhiBtn: 'सखी से पूछें · Ask Sakhi',
    askingSakhiBtn: 'सखी खोज रही है... · Asking Sakhi...',
    demoQuestionsKicker: 'उदाहरण प्रश्न · Clickable Demo Questions',
    demoQuestionsTitle: 'तुरंत उत्तर पाने के लिए नीचे दिए गए किसी भी प्रश्न को छुएं:',
    answerSectionKicker: 'सखी AI का उत्तर · Sakhi AI Answer',
    answerSectionTitle: 'आपके लिए सरकारी योजना मार्गदर्शन',
    yourQuestionLabel: 'आपका सवाल:',
    readAnswerBtn: 'उत्तर सुनें · Read Answer',
    readInEnglishBtn: 'Read in English',
    loadingTitle: 'सखी आपके लिए सरकारी योजनाओं की जानकारी खोज रही है...',
    loadingSubtext: 'आधिकारिक myScheme.gov.in से सरल भाषा में उत्तर तैयार हो रहा है...',
    errorTitle: 'उत्तर प्राप्त करने में समस्या हुई',
    tryAgainBtn: 'पुनः प्रयास करें · Try Again',
    schemeNameLabel: 'योजना का नाम · Scheme Name',
    schemeBenefitLabel: 'योजना का लाभ · Scheme Benefit',
    eligibilityLabel: 'कौन पात्र हो सकता है · Who May Be Eligible',
    documentsLabel: 'आवश्यक दस्तावेज · Required Documents',
    howToApplyLabel: 'आवेदन कैसे करें · How to Apply',
    verificationNoteLabel: 'महत्वपूर्ण सत्यापन सूचना · Important Verification Note',
    officialSourceLabel: 'आधिकारिक सरकारी वेबसाइट · Official Source:',
    visitMySchemeBtn: 'myScheme.gov.in पर देखें',
    guidedKicker: 'चरण-दर-चरण मार्गदर्शन · Guided Mode',
    guidedTitle: 'क्या पूछना है समझ नहीं आ रहा? (I don’t know what to ask)',
    guidedSubtext:
      'चिंता न करें! नीचे दिए गए 4 आसान सवालों के जवाब बटन छूकर दें, और सखी आपके लिए सही योजना ढूंढेगी।',
    startOverBtn: 'फिर से शुरू करें',
    listenQuestionBtn: 'सवाल सुनें',
    prevQuestionBtn: 'पिछला सवाल (Back)',
    nextQuestionBtn: 'अगला सवाल (Next)',
    showMySchemesBtn: 'मेरी योजनाएं दिखाएं · Show My Schemes',
    selectedAnswersLabel: 'चुनी गई जानकारी:',
    sdgKicker: 'संयुक्त राष्ट्र सतत विकास लक्ष्य · UN SDGs',
    sdgTitle: 'ग्रामीण महिला सशक्तिकरण और SDG प्रभाव',
    sdgSubtext:
      'नम्मा सखी संयुक्त राष्ट्र के तीन प्रमुख सतत विकास लक्ष्यों (SDG 5, SDG 4, SDG 10) को आगे बढ़ाती है।',
    sdg5Title: 'लैंगिक समानता (SDG 5: Gender Equality)',
    sdg5Desc:
      'ग्रामीण महिलाओं को मासिक वित्तीय सहायता, मातृत्व लाभ और स्वरोजगार ऋण की जानकारी देकर आर्थिक रूप से आत्मनिर्भर बनाती है।',
    sdg4Title: 'गुणवत्तापूर्ण शिक्षा और डिजिटल साक्षरता (SDG 4)',
    sdg4Desc:
      'आवाज-आधारित (Voice AI) मार्गदर्शन से कम पढ़ी-लिखी महिलाओं और छात्राओं को छात्रवृत्ति व सरकारी योजनाओं से जोड़ती है।',
    sdg10Title: 'असमानताओं में कमी (SDG 10: Reduced Inequalities)',
    sdg10Desc:
      '6 भारतीय भाषाओं में बिना किसी बिचौलिए के ग्रामीण महिलाओं तक सरकारी योजनाओं की सही जानकारी पहुँचाती है।',
    schemesKicker: 'सत्यापित सरकारी योजनाएं · Scheme Directory',
    schemesTitle: 'महिलाओं के लिए प्रमुख सरकारी योजनाएं (myScheme.gov.in)',
    schemesSubtext:
      'किसी भी योजना को सुनने के लिए "Read Answer" दबाएं या सखी से अधिक जानकारी पूछें।',
    officialSourceSectionKicker: 'आधिकारिक सरकारी स्रोत · Official Reference',
    officialSourceSectionTitle: 'भारत सरकार का आधिकारिक पोर्टल: myScheme.gov.in',
    officialSourceSectionDesc:
      'नम्मा सखी में दी गई सभी जानकारी भारत सरकार के https://www.myscheme.gov.in/ पोर्टल पर आधारित है। कृपया नवीनतम नियमों की जांच आधिकारिक वेबसाइट या अपने नजदीकी जन सेवा केंद्र (CSC / e-Sevai) पर करें।',
    center1Title: '1. जन सेवा केंद्र (CSC / e-Sevai)',
    center1Desc:
      'अपने गाँव के सरकारी जन सेवा केंद्र पर जाकर सुरक्षित रूप से आवेदन करें।',
    center2Title: '2. आंगनवाड़ी / प्राथमिक स्वास्थ्य केंद्र',
    center2Desc:
      'गर्भवती महिलाओं और मातृत्व योजनाओं के लिए आंगनवाड़ी कार्यकर्ता या स्वास्थ्य नर्स से मिलें।',
    center3Title: '3. डाकघर और सरकारी बैंक',
    center3Desc:
      'सुकन्या समृद्धि खाता और मुद्रा लोन के लिए नजदीकी डाकघर या सरकारी बैंक शाखा में जाएं।',
    prototypeNote:
      'महत्वपूर्ण सूचना: नम्मा सखी एक मार्गदर्शन प्रोटोटाइप है। यह अपने आप सरकारी आवेदन जमा नहीं करता है।',
    safetySectionKicker: 'सुरक्षा चेतावनी · Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'सरकारी योजना के नाम पर यदि कोई फोन करके नीचे दी गई गोपनीय जानकारी मांगे तो कभी न बताएं:',
    readWarningBtn: 'सुरक्षा चेतावनी सुनें · Read Warning',
    safetyItems: [
      {
        title: '1. OTP कभी साझा न करें',
        subtitle: 'Never share OTP',
        desc: 'मोबाइल पर SMS से आने वाला 4 या 6 अंकों का OTP किसी को न बताएं।',
      },
      {
        title: '2. पासवर्ड (Password)',
        subtitle: 'Never share Password',
        desc: 'अपना बैंक या पोर्टल पासवर्ड किसी के साथ साझा न करें।',
      },
      {
        title: '3. एटीएम पिन (ATM PIN)',
        subtitle: 'Never share ATM PIN',
        desc: 'अपना ATM कार्ड नंबर या 4 अंकों का गुप्त PIN किसी को न बताएं।',
      },
      {
        title: '4. बैंक / UPI PIN',
        subtitle: 'Never share Bank PIN',
        desc: 'सरकारी योजना का पैसा प्राप्त करने के लिए कभी भी UPI PIN डालने की जरूरत नहीं होती।',
      },
      {
        title: '5. पूरा आधार नंबर (Full Aadhaar)',
        subtitle: 'Do not type Full Aadhaar here',
        desc: 'इस ऐप में अपना 12 अंकों का पूरा आधार नंबर टाइप न करें।',
      },
      {
        title: '6. संवेदनशील निजी जानकारी',
        subtitle: 'No Unnecessary Sensitive Info',
        desc: 'सरकारी योजनाओं के लिए फोन पर पैसे या रिश्वत मांगने वालों से सावधान रहें।',
      },
    ],
    footerDesc:
      'नम्मा सखी ग्रामीण महिलाओं को सरकारी योजनाओं की जानकारी देने वाला प्रोटोटाइप है। यह स्वतः आवेदन जमा नहीं करता है।',
    welcomeVoiceScript:
      'नमस्ते बहन! नम्मा सखी में आपका स्वागत है। आप नीचे दिए गए बड़े माइक बटन को दबाकर अपनी आवाज में सरकारी योजनाओं के बारे में पूछ सकती हैं। ध्यान रखें: अपना ओटीपी, पासवर्ड या पिन किसी के साथ साझा न करें।',
    safetyVoiceScript:
      'सुरक्षा चेतावनी: अपना ओटीपी, पासवर्ड, एटीएम पिन, बैंक पिन या पूरा आधार नंबर किसी के साथ साझा न करें।',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'महिलाओं के लिए कौन सी सरकारी योजना है? (Pengalukku enna government help irukku?)',
        secondaryText: 'Enakku government scheme pathi therinjukanum · Women welfare schemes',
      },
      {
        id: 'q2',
        primaryText: 'आवेदन के लिए क्या दस्तावेज (Documents) चाहिए? (Enna documents venum?)',
        secondaryText: 'What documents are needed to apply?',
      },
      {
        id: 'q3',
        primaryText: 'क्या मैं इस योजना के लिए पात्र हूँ? (Indha scheme-ku naan eligible-aa?)',
        secondaryText: 'Am I eligible for this scheme?',
      },
      {
        id: 'q4',
        primaryText: 'आवेदन कैसे करें? (Eppadi apply panradhu?)',
        secondaryText: 'How can I find and apply for government schemes?',
      },
    ],
  },

  kn: {
    brandSubtitle: 'ಮಹಿಳೆಯರಿಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಯ AI ಸಹಾಯಕಿ',
    navAsk: 'ಪ್ರಶ್ನೆ ಕೇಳಿ',
    navAnswer: 'ಸಖಿಯ ಉತ್ತರ',
    navGuided: 'ಮಾರ್ಗದರ್ಶಿ',
    navSdg: 'SDG ಗುರಿಗಳು',
    navSchemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    navSafety: 'ಸುರಕ್ಷತೆ',
    welcomeTag: 'ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಸಬಲೀಕರಣ · AI Government Scheme Assistant',
    welcomeHeading:
      'ನಮಸ್ಕಾರ ಸಹೋದರಿ! ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ತಿಳಿದುಕೊಳ್ಳಲು ನಮ್ಮ ಸಖಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    welcomeSubtext:
      'ನಿಮಗೆ ಇಂಗ್ಲಿಷ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ಜ್ಞಾನ ಇಲ್ಲದಿದ್ದರೂ ಪರವಾಗಿಲ್ಲ. ಕೆಳಗಿನ ದೊಡ್ಡ ಮೈಕ್ ಬಟನ್ ಒತ್ತಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ ಅಥವಾ ಮಾದರಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
    listenWelcomeBtn: 'ಸ್ವಾಗತ ಸಂದೇಶ ಕೇಳಿ · Listen',
    stopAudioBtn: 'ನಿಲ್ಲಿಸಿ · Stop',
    dontKnowBtn: "ಏನು ಕೇಳಬೇಕೆಂದು ತಿಳಿಯುತ್ತಿಲ್ಲ (I don't know what to ask)",
    safetyBannerText:
      'ನಿಮ್ಮ OTP, ಪಾಸ್‌ವರ್ಡ್, ATM PIN, ಬ್ಯಾಂಕ್ PIN ಅಥವಾ ಪೂರ್ಣ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
    safetyRulesLink: 'ಸುರಕ್ಷತಾ ನಿಯಮಗಳು · Safety Rules',
    voiceTextSectionKicker: 'ಧ್ವನಿ ಅಥವಾ ಪಠ್ಯದ ಮೂಲಕ ಕೇಳಿ · Voice & Text Question',
    voiceTextSectionTitle: 'ಸಖಿಯೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ (Ask Sakhi)',
    step1VoiceLabel: '1. ಮೈಕ್ ಒತ್ತಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ (Voice Input):',
    speakInSelectedLang: 'ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ (Kannada)',
    micTapToSpeak: 'ಮೈಕ್ ಒತ್ತಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ',
    micListeningTapToStop: 'ಆಲಿಸಲಾಗುತ್ತಿದೆ... ನಿಲ್ಲಿಸಲು ಇಲ್ಲಿ ಸ್ಪರ್ಶಿಸಿ',
    micHintSubtext: 'ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ ("ಮಹಿಳೆಯರಿಗೆ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿವೆ?")',
    step2TypeLabel: '2. ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ (Type Question):',
    clearBtn: 'ಅಳಿಸಿ (Clear)',
    inputPlaceholder:
      'ಉದಾಹರಣೆ: ಮಹಿಳೆಯರಿಗೆ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿವೆ? / ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?',
    askSakhiBtn: 'ಸಖಿಯನ್ನು ಕೇಳಿ · Ask Sakhi',
    askingSakhiBtn: 'ಸಖಿ ಹುಡುಕುತ್ತಿದ್ದಾಳೆ... · Asking Sakhi...',
    demoQuestionsKicker: 'ಮಾದರಿ ಪ್ರಶ್ನೆಗಳು · Clickable Demo Questions',
    demoQuestionsTitle: 'ತಕ್ಷಣ ಉತ್ತರ ಪಡೆಯಲು ಕೆಳಗಿನ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಸ್ಪರ್ಶಿಸಿ:',
    answerSectionKicker: 'ಸಖಿ AI ಉತ್ತರ · Sakhi AI Answer',
    answerSectionTitle: 'ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಮಾರ್ಗದರ್ಶನ',
    yourQuestionLabel: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ:',
    readAnswerBtn: 'ಉತ್ತರವನ್ನು ಓದಿ ಹೇಳು · Read Answer',
    readInEnglishBtn: 'Read in English',
    loadingTitle: 'ಸಖಿ ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕುತ್ತಿದ್ದಾಳೆ...',
    loadingSubtext: 'ಅಧಿಕೃತ myScheme.gov.in ನಿಂದ ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರ ಸಿದ್ಧವಾಗುತ್ತಿದೆ...',
    errorTitle: 'ಉತ್ತರ ಪಡೆಯುವಲ್ಲಿ ಸಣ್ಣ ಸಮಸ್ಯೆ ಉಂಟಾಗಿದೆ',
    tryAgainBtn: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ · Try Again',
    schemeNameLabel: 'ಯೋಜನೆಯ ಹೆಸರು · Scheme Name',
    schemeBenefitLabel: 'ಯೋಜನೆಯ ಪ್ರಯೋಜನ · Scheme Benefit',
    eligibilityLabel: 'ಯಾರು ಅರ್ಹರು · Who May Be Eligible',
    documentsLabel: 'ಬೇಕಾಗುವ ದಾಖಲೆಗಳು · Required Documents',
    howToApplyLabel: 'ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ · How to Apply',
    verificationNoteLabel: 'ಮುಖ್ಯ ಪರಿಶೀಲನಾ ಸೂಚನೆ · Important Verification Note',
    officialSourceLabel: 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ · Official Source:',
    visitMySchemeBtn: 'myScheme.gov.in ನಲ್ಲಿ ನೋಡಿ',
    guidedKicker: 'ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ · Guided Mode',
    guidedTitle: 'ಏನು ಕೇಳಬೇಕೆಂದು ತಿಳಿಯುತ್ತಿಲ್ಲವೇ? (I don’t know what to ask)',
    guidedSubtext:
      'ಚಿಂತಿಸಬೇಡಿ! ಕೆಳಗಿನ 4 ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ಬಟನ್ ಸ್ಪರ್ಶಿಸಿ ಉತ್ತರಿಸಿ. ಸಖಿ ನಿಮಗೆ ಸೂಕ್ತವಾದ ಯೋಜನೆಯನ್ನು ತೋರಿಸುತ್ತಾಳೆ.',
    startOverBtn: 'మొದಲಿನಿಂದ ಪ್ರಾರಂಭಿಸಿ',
    listenQuestionBtn: 'ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ',
    prevQuestionBtn: 'ಹಿಂದಿನ ಪ್ರಶ್ನೆ (Back)',
    nextQuestionBtn: 'ಮುಂದಿನ ಪ್ರಶ್ನೆ (Next)',
    showMySchemesBtn: 'ನನ್ನ ಯೋಜನೆಗಳನ್ನು ತೋರಿಸಿ · Show My Schemes',
    selectedAnswersLabel: 'ಆಯ್ಕೆ ಮಾಡಿದ ವಿವರ:',
    sdgKicker: 'ವಿಶ್ವಸಂಸ್ಥೆಯ ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳು · UN SDGs',
    sdgTitle: 'ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಸಬಲೀಕರಣ ಮತ್ತು SDG ಪ್ರಭಾವ',
    sdgSubtext:
      'ನಮ್ಮ ಸಖಿ ವಿಶ್ವಸಂಸ್ಥೆಯ ಮೂರು ಪ್ರಮುಖ ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳನ್ನು (SDG 5, SDG 4, SDG 10) ಬೆಂಬಲಿಸುತ್ತದೆ.',
    sdg5Title: 'ಲಿಂಗ ಸಮಾನತೆ (SDG 5: Gender Equality)',
    sdg5Desc:
      'ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಮಾಸಿಕ ಆರ್ಥಿಕ ನೆರವು, ಮಾತೃತ್ವ ಸೌಲಭ್ಯ ಮತ್ತು ಸ್ವಉದ್ಯೋಗ ಸಾಲಗಳ ಮಾಹಿತಿ ನೀಡಿ ಆರ್ಥಿಕ ಸ್ವಾವಲಂಬನೆ ನೀಡುತ್ತದೆ.',
    sdg4Title: 'ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ (SDG 4)',
    sdg4Desc:
      'ಧ್ವನಿ ಆಧಾರಿತ (Voice AI) ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಅನಕ್ಷರಸ್ಥ ಮಹಿಳೆಯರಿಗೂ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನಗಳ ಅರಿವು ಮೂಡಿಸುತ್ತದೆ.',
    sdg10Title: 'ಅಸಮಾನತೆಗಳ ನಿವಾರಣೆ (SDG 10: Reduced Inequalities)',
    sdg10Desc:
      '6 ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳ ಮಾಹಿತಿಯನ್ನು ತಲುಪಿಸುತ್ತದೆ.',
    schemesKicker: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ವಿವರ · Verified Scheme Directory',
    schemesTitle: 'ಮಹಿಳೆಯರಿಗಾಗಿ ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು (myScheme.gov.in)',
    schemesSubtext:
      'ಯಾವುದೇ ಯೋಜನೆಯ ವಿವರ ಕೇಳಲು "Read Answer" ಒತ್ತಿರಿ ಅಥವಾ ಸಖಿಯನ್ನು ಕೇಳಿ.',
    officialSourceSectionKicker: 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ · Official Reference',
    officialSourceSectionTitle: 'ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್: myScheme.gov.in',
    officialSourceSectionDesc:
      'ನಮ್ಮ ಸಖಿಯಲ್ಲಿನ ಎಲ್ಲಾ ಮಾಹಿತಿಯು ಭಾರತ ಸರ್ಕಾರದ https://www.myscheme.gov.in/ ಪೋರ್ಟಲ್ ಆಧಾರಿತವಾಗಿದೆ. ದಯವಿಟ್ಟು ಇತ್ತೀಚಿನ ನಿಯಮಗಳನ್ನು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಅಥವಾ ನಿಮ್ಮ ಹತ್ತಿರದ ಸೇವಾ ಕೇಂದ್ರದಲ್ಲಿ (CSC / Grama One) ಪರಿಶೀಲಿಸಿ.',
    center1Title: '1. ಗ್ರಾಮ ಒನ್ / CSC ಸೇವಾ ಕೇಂದ್ರ',
    center1Desc:
      'ನಿಮ್ಮ ಗ್ರಾಮದ ಸರ್ಕಾರಿ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಸುರಕ್ಷಿತವಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.',
    center2Title: '2. ಅಂಗನವಾಡಿ / ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ',
    center2Desc:
      'ಗರ್ಭಿಣಿಯರು ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳಿಗಾಗಿ ಅಂಗನವಾಡಿ ಕಾರ್ಯಕರ್ತೆ ಅಥವಾ ಆರೋಗ್ಯ ಶುಶ್ರೂಷಕಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    center3Title: '3. ಅಂಚೆ ಕಚೇರಿ ಮತ್ತು ಸರ್ಕಾರಿ ಬ್ಯಾಂಕ್',
    center3Desc:
      'ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ ಖಾತೆ ಮತ್ತು ಮುದ್ರಾ ಸಾಲಕ್ಕಾಗಿ ಹತ್ತಿರದ ಅಂಚೆ ಕಚೇರಿ ಅಥವಾ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.',
    prototypeNote:
      'ಮುಖ್ಯ ಸೂಚನೆ: ನಮ್ಮ ಸಖಿ ಒಂದು ಮಾರ್ಗದರ್ಶಿ ಮಾದರಿ (Prototype) ಮಾತ್ರ. ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರ್ಕಾರಿ ಅರ್ಜಿಗಳನ್ನು ಸಲ್ಲಿಸುವುದಿಲ್ಲ.',
    safetySectionKicker: 'ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆ · Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಹೆಸರಿನಲ್ಲಿ ಯಾರಾದರೂ ಕರೆ ಮಾಡಿ ಕೆಳಗಿನ ರಹಸ್ಯ ಮಾಹಿತಿ ಕೇಳಿದರೆ ಎಂದಿಗೂ ನೀಡಬೇಡಿ:',
    readWarningBtn: 'ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆ ಕೇಳಿ · Read Warning',
    safetyItems: [
      {
        title: '1. OTP ಹಂಚಿಕೊಳ್ಳಬೇಡಿ',
        subtitle: 'Never share OTP',
        desc: 'ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ಬರುವ 4 ಅಥವಾ 6 ಅಂಕಿಯ OTP ಸಂಖ್ಯೆಯನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.',
      },
      {
        title: '2. ಪಾಸ್‌ವರ್ಡ್ (Password)',
        subtitle: 'Never share Password',
        desc: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅಥವಾ ಖಾತೆಯ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
      },
      {
        title: '3. ಎಟಿಎಂ ಪಿನ್ (ATM PIN)',
        subtitle: 'Never share ATM PIN',
        desc: 'ನಿಮ್ಮ ATM ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ಅಥವಾ 4 ಅಂಕಿಯ ರಹಸ್ಯ PIN ಅನ್ನು ಯಾರಿಗೂ ನೀಡಬೇಡಿ.',
      },
      {
        title: '4. ಬ್ಯಾಂಕ್ / UPI PIN',
        subtitle: 'Never share Bank PIN',
        desc: 'ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಹಣ ಪಡೆಯಲು UPI PIN ನಮೂದಿಸುವ ಅಗತ್ಯವಿರುವುದಿಲ್ಲ.',
      },
      {
        title: '5. ಪೂರ್ಣ ಆಧಾರ್ ಸಂಖ್ಯೆ (Full Aadhaar)',
        subtitle: 'Do not type Full Aadhaar here',
        desc: 'ಈ ಆಪ್‌ನಲ್ಲಿ ನಿಮ್ಮ 12 ಅಂಕಿಯ ಪೂರ್ಣ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಬೇಡಿ.',
      },
      {
        title: '6. ವೈಯಕ್ತಿಕ ಬ್ಯಾಂಕ್ ರಹಸ್ಯಗಳು',
        subtitle: 'No Unnecessary Sensitive Info',
        desc: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗಾಗಿ ಹಣ ಅಥವಾ ಲಂಚ ಕೇಳುವ ನಕಲಿ ಕರೆಗಳನ್ನು ನಂಬಬೇಡಿ.',
      },
    ],
    footerDesc:
      'ನಮ್ಮ ಸಖಿ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮಾಹಿತಿ ನೀಡುವ ಪ್ರೊಟೊಟೈಪ್ ಆಗಿದೆ. ಇದು ಅರ್ಜಿಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಲ್ಲಿಸುವುದಿಲ್ಲ.',
    welcomeVoiceScript:
      'ನಮಸ್ಕಾರ ಸಹೋದರಿ! ನಮ್ಮ ಸಖಿ ಆಪ್‌ಗೆ ಸ್ವಾಗತ. ಕೆಳಗಿನ ದೊಡ್ಡ ಮೈಕ್ ಬಟನ್ ಒತ್ತಿ ಕನ್ನಡದಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಬಹುದು. ನಿಮ್ಮ ಓಟಿಪಿ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಪಿನ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
    safetyVoiceScript:
      'ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆ: ನಿಮ್ಮ ಓಟಿಪಿ, ಪಾಸ್‌ವರ್ಡ್, ಎಟಿಎಂ ಪಿನ್, ಬ್ಯಾಂಕ್ ಪಿನ್ ಅಥವಾ ಪೂರ್ಣ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'ಮಹಿಳೆಯರಿಗೆ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿವೆ? (Pengalukku enna government help irukku?)',
        secondaryText: 'Enakku government scheme pathi therinjukanum · Women welfare schemes',
      },
      {
        id: 'q2',
        primaryText: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು? (Enna documents venum?)',
        secondaryText: 'What documents are required to apply?',
      },
      {
        id: 'q3',
        primaryText: 'ಈ ಯೋಜನೆಗೆ ನಾನು ಅರ್ಹಳೇ? (Indha scheme-ku naan eligible-aa?)',
        secondaryText: 'Am I eligible for this scheme?',
      },
      {
        id: 'q4',
        primaryText: 'ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ? (Eppadi apply panradhu?)',
        secondaryText: 'How can I apply for government schemes?',
      },
    ],
  },

  ml: {
    brandSubtitle: 'സ്ത്രീകൾക്കായുള്ള സർക്കാർ പദ്ധതി AI സഹായി',
    navAsk: 'ചോദ്യം ചോദിക്കുക',
    navAnswer: 'സഖിയുടെ മറുപടി',
    navGuided: 'വഴികാട്ടി',
    navSdg: 'SDG ലക്ഷ്യങ്ങൾ',
    navSchemes: 'പദ്ധതികൾ',
    navSafety: 'സുരക്ഷ',
    welcomeTag: 'ഗ്രാമീണ സ്ത്രീ ശാക്തീകരണം · AI Government Scheme Assistant',
    welcomeHeading:
      'നമസ്കാരം സഹോദരീ! സർക്കാർ പദ്ധതികളെക്കുറിച്ച് ലളിതമായ മലയാളത്തിൽ അറിയാൻ നമ്മ സഖി നിങ്ങളെ സഹായിക്കും.',
    welcomeSubtext:
      'നിങ്ങൾക്ക് ഇംഗ്ലീഷോ കമ്പ്യൂട്ടർ പരിജ്ഞാനമോ ഇല്ലെങ്കിലും കുഴപ്പമില്ല. താഴെയുള്ള വലിയ മൈക്ക് ബട്ടൺ അമർത്തി മലയാളത്തിൽ സംസാരിക്കാം അല്ലെങ്കിൽ മാതൃകാ ചോദ്യങ്ങളിൽ തൊടാം.',
    listenWelcomeBtn: 'സ്വാഗത സന്ദേശം കേൾക്കുക · Listen',
    stopAudioBtn: 'നിർത്തുക · Stop',
    dontKnowBtn: "എന്താണ് ചോദിക്കേണ്ടതെന്ന് അറിയില്ല (I don't know what to ask)",
    safetyBannerText:
      'നിങ്ങളുടെ OTP, പാസ്‌വേഡ്, ATM PIN, ബാങ്ക് PIN അല്ലെങ്കിൽ പൂർണ്ണ ആധാർ നമ്പർ ആരുമായും പങ്കിടരുത്.',
    safetyRulesLink: 'സുരക്ഷാ നിയമങ്ങൾ · Safety Rules',
    voiceTextSectionKicker: 'ശബ്ദത്തിലൂടെയോ എഴുത്തിലൂടെയോ ചോദിക്കാം · Voice & Text',
    voiceTextSectionTitle: 'സഖിയോട് നിങ്ങളുടെ ചോദ്യം ചോദിക്കുക (Ask Sakhi)',
    step1VoiceLabel: '1. മൈക്ക് അമർത്തി മലയാളത്തിൽ സംസാരിക്കുക (Voice Input):',
    speakInSelectedLang: 'മലയാളത്തിൽ സംസാരിക്കാം (Malayalam)',
    micTapToSpeak: 'മൈക്ക് അമർത്തി മലയാളത്തിൽ സംസാരിക്കുക',
    micListeningTapToStop: 'കേൾക്കുന്നു... നിർത്താൻ ഇവിടെ തൊടുക',
    micHintSubtext: 'മലയാളത്തിലോ ഇംഗ്ലീഷിലോ സംസാരിക്കുക ("സ്ത്രീകൾക്ക് എന്തൊക്കെ സർക്കാർ പദ്ധതികളുണ്ട്?")',
    step2TypeLabel: '2. അല്ലെങ്കിൽ നിങ്ങളുടെ ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യുക:',
    clearBtn: 'മായ്ക്കുക (Clear)',
    inputPlaceholder:
      'ഉദാഹരണം: സ്ത്രീകൾക്ക് എന്തൊക്കെ സർക്കാർ പദ്ധതികളുണ്ട്? / അപേക്ഷിക്കാൻ എന്തൊക്കെ രേഖകൾ വേണം?',
    askSakhiBtn: 'സഖിയോട് ചോദിക്കുക · Ask Sakhi',
    askingSakhiBtn: 'സഖി തിരയുന്നു... · Asking Sakhi...',
    demoQuestionsKicker: 'മാതൃകാ ചോദ്യങ്ങൾ · Clickable Demo Questions',
    demoQuestionsTitle: 'ഉടൻ മറുപടി ലഭിക്കാൻ താഴെയുള്ള ഏതെങ്കിലും ചോദ്യത്തിൽ തൊടുക:',
    answerSectionKicker: 'സഖി AI മറുപടി · Sakhi AI Answer',
    answerSectionTitle: 'നിങ്ങൾക്കായുള്ള സർക്കാർ പദ്ധതി മാർഗ്ഗനിർദ്ദേശം',
    yourQuestionLabel: 'നിങ്ങളുടെ ചോദ്യം:',
    readAnswerBtn: 'മറുപടി വായിച്ചു കേൾപ്പിക്കുക · Read Answer',
    readInEnglishBtn: 'Read in English',
    loadingTitle: 'സഖി നിങ്ങൾക്കായി സർക്കാർ പദ്ധതി വിവരങ്ങൾ തിരയുന്നു...',
    loadingSubtext: 'ഔദ്യോഗിക myScheme.gov.in-ൽ നിന്ന് ലളിതമായ മലയാളത്തിൽ മറുപടി തയ്യാറാക്കുന്നു...',
    errorTitle: 'മറുപടി ലഭിക്കുന്നതിൽ ചെറിയ തടസ്സം നേരിട്ടു',
    tryAgainBtn: 'വീണ്ടും ശ്രമിക്കുക · Try Again',
    schemeNameLabel: 'പദ്ധതിയുടെ പേര് · Scheme Name',
    schemeBenefitLabel: 'പദ്ധതിയുടെ ആനുകൂല്യം · Scheme Benefit',
    eligibilityLabel: 'ആർക്കൊക്കെ അർഹതയുണ്ട് · Who May Be Eligible',
    documentsLabel: 'ആവശ്യമായ രേഖകൾ · Required Documents',
    howToApplyLabel: 'എങ്ങനെ അപേക്ഷിക്കാം · How to Apply',
    verificationNoteLabel: 'പ്രധാന കുറിപ്പ് · Important Verification Note',
    officialSourceLabel: 'ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ് · Official Source:',
    visitMySchemeBtn: 'myScheme.gov.in സന്ദർശിക്കുക',
    guidedKicker: 'ഘട്ടം ഘട്ടമായുള്ള വഴികാട്ടി · Guided Mode',
    guidedTitle: 'എന്താണ് ചോദിക്കേണ്ടതെന്ന് അറിയില്ലേ? (I don’t know what to ask)',
    guidedSubtext:
      'വിഷമിക്കേണ്ട! താഴെയുള്ള 4 ലളിതമായ ചോദ്യങ്ങൾക്ക് ബട്ടണിൽ തൊട്ട് ഉത്തരം നൽകുക. സഖി നിങ്ങൾക്ക് അനുയോജ്യമായ പദ്ധതികൾ കണ്ടെത്തും.',
    startOverBtn: 'ആദ്യം മുതൽ',
    listenQuestionBtn: 'ചോദ്യം കേൾക്കുക',
    prevQuestionBtn: 'മുമ്പത്തെ ചോദ്യം (Back)',
    nextQuestionBtn: 'അടുത്ത ചോദ്യം (Next)',
    showMySchemesBtn: 'എനിക്കുള്ള പദ്ധതികൾ കാണിക്കുക · Show My Schemes',
    selectedAnswersLabel: 'തിരഞ്ഞെടുത്ത വിവരങ്ങൾ:',
    sdgKicker: 'യു.എൻ. സുസ്ഥിര വികസന ലക്ഷ്യങ്ങൾ · UN SDGs',
    sdgTitle: 'ഗ്രാമീണ സ്ത്രീ ശാക്തീകരണവും SDG സ്വാധീനവും',
    sdgSubtext:
      'ഐക്യരാഷ്ട്രസഭയുടെ മൂന്ന് പ്രധാന സുസ്ഥിര വികസന ലക്ഷ്യങ്ങളെ (SDG 5, SDG 4, SDG 10) നമ്മ സഖി നേരിട്ട് പിന്തുണയ്ക്കുന്നു.',
    sdg5Title: 'ലിംഗസമത്വം (SDG 5: Gender Equality)',
    sdg5Desc:
      'ഗ്രാമീണ സ്ത്രീകൾക്ക് സാമ്പത്തിക സഹായം, മാതൃത്വ ആനുകൂല്യങ്ങൾ, സ്വയംതൊഴിൽ വായ്പകൾ എന്നിവയെക്കുറിച്ച് അറിവ് നൽകി സാമ്പത്തിക സ്വാതന്ത്ര്യം ഉറപ്പാക്കുന്നു.',
    sdg4Title: 'ഗുണമേന്മയുള്ള വിദ്യാഭ്യാസവും സാക്ഷരതയും (SDG 4)',
    sdg4Desc:
      'ശബ്ദ സഹായത്തോടെ (Voice AI) സാധാരണക്കാരായ സ്ത്രീകൾക്കും പെൺകുട്ടികൾക്കും സ്കോളർഷിപ്പുകളും സർക്കാർ ആനുകൂല്യങ്ങളും മനസ്സിലാക്കാൻ അവസരമൊരുക്കുന്നു.',
    sdg10Title: 'അസമത്വങ്ങൾ കുറയ്ക്കൽ (SDG 10: Reduced Inequalities)',
    sdg10Desc:
      '6 ഇന്ത്യൻ ഭാഷകളിൽ ഇടനിലക്കാരില്ലാതെ സർക്കാർ ക്ഷേമ പദ്ധതികളുടെ വിവരങ്ങൾ ഗ്രാമീണ സ്ത്രീകളിലേക്ക് നേരിട്ട് എത്തിക്കുന്നു.',
    schemesKicker: 'സർക്കാർ പദ്ധതികളുടെ വിവരങ്ങൾ · Scheme Directory',
    schemesTitle: 'സ്ത്രീകൾക്കായുള്ള പ്രധാന സർക്കാർ പദ്ധതികൾ (myScheme.gov.in)',
    schemesSubtext:
      'ഏത് പദ്ധതിയെക്കുറിച്ചും കേൾക്കാൻ "Read Answer" അമർത്തുക അല്ലെങ്കിൽ സഖിയോട് ചോദിക്കുക.',
    officialSourceSectionKicker: 'ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ് · Official Reference',
    officialSourceSectionTitle: 'ഭാരത സർക്കാരിന്റെ ഔദ്യോഗിക പോർട്ടൽ: myScheme.gov.in',
    officialSourceSectionDesc:
      'നമ്മ സഖിയിലെ എല്ലാ വിവരങ്ങളും ഭാരത സർക്കാരിന്റെ https://www.myscheme.gov.in/ പോർട്ടലിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്. ഏറ്റവും പുതിയ നിബന്ധനകൾ ഔദ്യോഗിക വെബ്സൈറ്റിലോ അടുത്തുള്ള അക്ഷയ / CSC / ഇ-സേവ കേന്ദ്രത്തിലോ പരിശോധിക്കുക.',
    center1Title: '1. അക്ഷയ / CSC / ഇ-സേവ കേന്ദ്രം',
    center1Desc:
      'നിങ്ങളുടെ ഗ്രാമത്തിലെ സർക്കാർ സേവന കേന്ദ്രം വഴി സുരക്ഷിതമായി അപേക്ഷ സമർപ്പിക്കാം.',
    center2Title: '2. അംഗൻവാടി / പ്രാഥമിക ആരോഗ്യ കേന്ദ്രം',
    center2Desc:
      'ഗർഭിണികൾക്കും കുട്ടികൾക്കുമുള്ള പദ്ധതികൾക്കായി അംഗൻവാടി വർക്കറെയോ ഹെൽത്ത് നഴ്സിനെയോ സമീപിക്കുക.',
    center3Title: '3. പോസ്റ്റ് ഓഫീസ് & സർക്കാർ ബാങ്ക്',
    center3Desc:
      'സുകന്യ സമൃദ്ധി അക്കൗണ്ടിനും മുദ്ര വായ്പകൾക്കുമായി അടുത്തുള്ള പോസ്റ്റ് ഓഫീസിലോ ബാങ്കിലോ ബന്ധപ്പെടുക.',
    prototypeNote:
      'പ്രധാന കുറിപ്പ്: നമ്മ സഖി ഒരു മാർഗ്ഗനിർദ്ദേശ പ്രോട്ടോടൈപ്പ് മാത്രമാണ്. ഇത് സർക്കാർ അപേക്ഷകൾ സ്വയം സമർപ്പിക്കില്ല.',
    safetySectionKicker: 'സുരക്ഷാ മുന്നറിയിപ്പ് · Mandatory Digital Safety Warning',
    safetySectionSubtext:
      'സർക്കാർ പദ്ധതികളുടെ പേരിൽ ആരെങ്കിലും ഫോണിൽ വിളിച്ച് താഴെ പറയുന്ന രഹസ്യ വിവരങ്ങൾ ചോദിച്ചാൽ ഒരിക്കലും നൽകരുത്:',
    readWarningBtn: 'സുരക്ഷാ മുന്നറിയിപ്പ് കേൾക്കുക · Read Warning',
    safetyItems: [
      {
        title: '1. OTP പങ്കിടരുത്',
        subtitle: 'Never share OTP',
        desc: 'നിങ്ങളുടെ ഫോണിൽ SMS ആയി വരുന്ന 4 അല്ലെങ്കിൽ 6 അക്ക OTP ആരോടും പറയരുത്.',
      },
      {
        title: '2. പാസ്‌വേഡ് (Password)',
        subtitle: 'Never share Password',
        desc: 'ബാങ്ക് അല്ലെങ്കിൽ പോർട്ടൽ പാസ്‌വേഡുകൾ ആരുമായും പങ്കിടരുത്.',
      },
      {
        title: '3. എടിഎം പിൻ (ATM PIN)',
        subtitle: 'Never share ATM PIN',
        desc: 'നിങ്ങളുടെ ATM കാർഡ് നമ്പറോ 4 അക്ക രഹസ്യ പിൻ നമ്പറോ ആർക്കും നൽകരുത്.',
      },
      {
        title: '4. ബാങ്ക് / UPI PIN',
        subtitle: 'Never share Bank PIN',
        desc: 'സർക്കാർ ആനുകൂല്യം ലഭിക്കാൻ ഒരിക്കലും UPI PIN നൽകേണ്ടതില്ല.',
      },
      {
        title: '5. പൂർണ്ണ ആധാർ നമ്പർ (Full Aadhaar)',
        subtitle: 'Do not type Full Aadhaar here',
        desc: 'ഈ ആപ്പിൽ നിങ്ങളുടെ 12 അക്ക പൂർണ്ണ ആധാർ നമ്പർ ടൈപ്പ് ചെയ്യരുത്.',
      },
      {
        title: '6. വ്യക്തിഗത ബാങ്ക് രഹസ്യങ്ങൾ',
        subtitle: 'No Unnecessary Sensitive Info',
        desc: 'സർക്കാർ പദ്ധതികൾക്കായി പണമോ കൈക്കൂലിയോ ആവശ്യപ്പെടുന്ന വ്യാജ കോളുകളിൽ വഞ്ചിതരാകരുത്.',
      },
    ],
    footerDesc:
      'ഗ്രാമീണ സ്ത്രീകൾക്ക് സർക്കാർ പദ്ധതികൾ ലളിതമായി പരിചയപ്പെടുത്തുന്ന പ്രോട്ടോടൈപ്പാണ് നമ്മ സഖി. ഇത് അപേക്ഷകൾ സ്വയം സമർപ്പിക്കില്ല.',
    welcomeVoiceScript:
      'നമസ്കാരം സഹോദരീ! നമ്മ സഖിയിലേക്ക് സ്വാഗതം. താഴെയുള്ള വലിയ മൈക്ക് ബട്ടൺ അമർത്തി മലയാളത്തിൽ നിങ്ങളുടെ ചോദ്യം ചോദിക്കാം. നിങ്ങളുടെ ഒടിപി, പാസ്‌വേഡ്, പിൻ നമ്പർ എന്നിവ ആരുമായും പങ്കിടരുത്.',
    safetyVoiceScript:
      'സുരക്ഷാ മുന്നറിയിപ്പ്: നിങ്ങളുടെ ഒടിപി, പാസ്‌വേഡ്, എടിഎം പിൻ, ബാങ്ക് പിൻ അല്ലെങ്കിൽ പൂർണ്ണ ആധാർ നമ്പർ ആരുമായും പങ്കിടരുത്.',
    localizedDemoQuestions: [
      {
        id: 'q1',
        primaryText: 'സ്ത്രീകൾക്ക് എന്തൊക്കെ സർക്കാർ പദ്ധതികളുണ്ട്? (Pengalukku enna government help irukku?)',
        secondaryText: 'Enakku government scheme pathi therinjukanum · Women welfare schemes',
      },
      {
        id: 'q2',
        primaryText: 'അപേക്ഷിക്കാൻ എന്തൊക്കെ രേഖകൾ (Documents) വേണം? (Enna documents venum?)',
        secondaryText: 'What documents are needed to apply?',
      },
      {
        id: 'q3',
        primaryText: 'ഈ പദ്ധതിക്ക് എനിക്ക് അർഹതയുണ്ടോ? (Indha scheme-ku naan eligible-aa?)',
        secondaryText: 'Am I eligible for this scheme?',
      },
      {
        id: 'q4',
        primaryText: 'എങ്ങനെ അപേക്ഷിക്കാം? (Eppadi apply panradhu?)',
        secondaryText: 'How can I apply for government schemes?',
      },
    ],
  },
};

export function getInitialAIResponseForLanguage(lang: Language): SakhiAIResponse {
  const s0 = VERIFIED_SCHEMES[0];
  const s1 = VERIFIED_SCHEMES[1];

  const greetings: Record<Language, { g: string; sum: string; spoken: string; safe: string }> = {
    ta: {
      g: 'வணக்கம் சகோதரி! நான் உங்கள் நம்ம சகி (Namma Sakhi).',
      sum: 'தமிழ்நாடு மற்றும் மத்திய அரசின் பெண்களுக்கான முக்கிய நலத்திட்டங்கள் கீழே கொடுக்கப்பட்டுள்ளன. நீங்கள் மைக்கை அழுத்திப் பேசியோ அல்லது மாதிரி கேள்விகளைத் தொட்டோ எந்தத் திட்டத்தைப் பற்றியும் எளிதாகக் கேட்கலாம்.',
      spoken:
        'வணக்கம் சகோதரி! நான் உங்கள் நம்ம சகி. பெண்களுக்கு உதவும் கலைஞர் மகளிர் உரிமைத் தொகை திட்டம் மூலம் தகுதியுள்ள குடும்பத் தலைவிகளுக்கு மாதம் ஆயிரம் ரூபாய் வங்கி கணக்கில் வழங்கப்படுகிறது. மேலும் கர்ப்பிணிப் பெண்களுக்கு பிரதான் மந்திரி மாத்ரு வந்தனா திட்டம் மற்றும் இலவச சமையல் எரிவாயு பெற உஜ்வாலா திட்டம் உள்ளன. விண்ணப்பிக்க குடும்ப அட்டை, ஆதார் அட்டை மற்றும் வங்கி பாஸ்புக் எடுத்துக்கொண்டு அருகிலுள்ள இ-சேவை மையத்திற்கு செல்லவும். முக்கிய குறிப்பு: உங்கள் ஓடிபி, பாஸ்வேர்ட், ஏடிஎம் பின் எண் அல்லது முழு ஆதார் எண்ணை யாரிடமும் பகிர வேண்டாம்.',
      safe: 'உங்கள் OTP, பாஸ்வேர்ட் (Password), ATM PIN, வங்கி கணக்கு PIN அல்லது முழு ஆதார் எண்ணை யாரிடமும் பகிர வேண்டாம்.',
    },
    en: {
      g: 'Vanakkam Sister! I am Namma Sakhi, your AI Government Scheme Assistant.',
      sum: 'Below are key verified government welfare schemes for women from myScheme.gov.in. You can press the large microphone button to speak or tap any sample question above.',
      spoken:
        'Welcome Sister! Through Kalaignar Magalir Urimai Thittam, eligible women heads of households receive Rs. 1,000 every month directly in their bank account. Other key schemes include Pradhan Mantri Matru Vandana Yojana for pregnant mothers and PM Ujjwala Yojana for free LPG gas connections. You can apply at your nearest government e-Sevai or Common Service Centre with your Ration Card, Aadhaar, and Bank Passbook. Always verify the latest rules on myScheme.gov.in and never share your OTP, password, or PIN.',
      safe: 'OTP, password, PIN and sensitive personal information-ai share panna vendam.',
    },
    te: {
      g: 'నమస్కారం సోదరీ! నేను మీ నమ్మ సఖిని (Namma Sakhi).',
      sum: 'మహిళల కోసం కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాల ముఖ్య సంక్షేమ పథకాలు క్రింద ఇవ్వబడ్డాయి. మీరు మైక్ బటన్ నొక్కి తెలుగులో మాట్లాడవచ్చు లేదా మాదిరి ప్రశ్నలను తాకవచ్చు.',
      spoken:
        'నమస్కారం సోదరీ! అర్హులైన మహిళా కుటుంబ పెద్దలకు నెలకు వెయ్యి రూపాయల ఆర్థిక సహాయం మరియు గర్భిణీ స్త్రీలకు ప్రధానమంత్రి మాతృ వందన యోజన ద్వారా ఐదు వేల రూపాయల నుండి ఆరు వేల రూపాయల వరకు సహాయం అందుతుంది. అలాగే ఉజ్వల యోజన ద్వారా ఉచిత వంట గ్యాస్ కనెక్షన్ పొందవచ్చు. రేషన్ కార్డు, ఆధార్ కార్డు మరియు బ్యాంక్ పాస్‌బుక్‌తో మీ సమీప సేవా కేంద్రాన్ని సంప్రదించండి. మీ ఓటీపీ, పాస్‌వర్డ్ లేదా పిన్ నంబర్‌ను ఎవరితోనూ పంచుకోవద్దు.',
      safe: 'మీ OTP, పాస్‌వర్డ్, ATM PIN, బ్యాంక్ PIN లేదా పూర్తి ఆధార్ నంబర్‌ను ఎవరితోనూ పంచుకోవద్దు.',
    },
    hi: {
      g: 'नमस्ते बहन! मैं आपकी नम्मा सखी (Namma Sakhi) हूँ।',
      sum: 'महिलाओं के लिए प्रमुख सरकारी कल्याणकारी योजनाएं नीचे दी गई हैं। आप माइक बटन दबाकर हिंदी में बोल सकती हैं या ऊपर दिए गए उदाहरण प्रश्नों को छू सकती हैं।',
      spoken:
        'नमस्ते बहन! पात्र महिला परिवार प्रमुखों के लिए मासिक एक हजार रुपये की आर्थिक सहायता योजना और गर्भवती महिलाओं के लिए प्रधानमंत्री मातृ वंदना योजना के तहत पाँच हजार से छह हजार रुपये तक की सहायता उपलब्ध है। साथ ही प्रधानमंत्री उज्ज्वला योजना से मुफ्त रसोई गैस कनेक्शन मिलता है। राशन कार्ड, आधार कार्ड और बैंक पासबुक लेकर अपने नजदीकी जन सेवा केंद्र पर जाएं। ध्यान रखें: अपना ओटीपी, पासवर्ड या पिन किसी के साथ साझा न करें।',
      safe: 'अपना OTP, पासवर्ड, ATM PIN, बैंक PIN या पूरा आधार नंबर किसी के साथ साझा न करें।',
    },
    kn: {
      g: 'ನಮಸ್ಕಾರ ಸಹೋದರಿ! ನಾನು ನಿಮ್ಮ ನಮ್ಮ ಸಖಿ (Namma Sakhi).',
      sum: 'ಮಹಿಳೆಯರಿಗಾಗಿ ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳನ್ನು ಕೆಳಗೆ ನೀಡಲಾಗಿದೆ. ನೀವು ಮೈಕ್ ಬಟನ್ ಒತ್ತಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಬಹುದು ಅಥವಾ ಮಾದರಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಸ್ಪರ್ಶಿಸಬಹುದು.',
      spoken:
        'ನಮಸ್ಕಾರ ಸಹೋದರಿ! ಮಹಿಳಾ ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥರಿಗೆ ಮಾಸಿಕ ಸಾವಿರ ರೂಪಾಯಿ ಆರ್ಥಿಕ ನೆರವು ಯೋಜನೆ ಮತ್ತು ಗರ್ಭಿಣಿಯರಿಗೆ ಪ್ರಧಾನ ಮಂತ್ರಿ ಮಾತೃ ವಂದನಾ ಯೋಜನೆಯಡಿ ಐದು ಸಾವಿರದಿಂದ ಆರು ಸಾವಿರ ರೂಪಾಯಿಗಳ ಸಹಾಯಧನ ಲಭ್ಯವಿದೆ. ಜೊತೆಗೆ ಉಜ್ವಲ ಯೋಜನೆಯಡಿ ಉಚಿತ ಅಡುಗೆ ಗ್ಯಾಸ್ ಸಂಪರ್ಕ ಪಡೆಯಬಹುದು. ರೇಷನ್ ಕಾರ್ಡ್, ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ತೆಗೆದುಕೊಂಡು ಹತ್ತಿರದ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ. ನಿಮ್ಮ ಓಟಿಪಿ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಪಿನ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
      safe: 'ನಿಮ್ಮ OTP, ಪಾಸ್‌ವರ್ಡ್, ATM PIN, ಬ್ಯಾಂಕ್ PIN ಅಥವಾ ಪೂರ್ಣ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.',
    },
    ml: {
      g: 'നമസ്കാരം സഹോദരീ! ഞാൻ നിങ്ങളുടെ നമ്മ സഖി (Namma Sakhi) ആണ്.',
      sum: 'സ്ത്രീകൾക്കായുള്ള പ്രധാന സർക്കാർ ക്ഷേമ പദ്ധതികൾ താഴെ നൽകുന്നു. നിങ്ങൾക്ക് മൈക്ക് അമർത്തി മലയാളത്തിൽ സംസാരിക്കാം അല്ലെങ്കിൽ മാതൃകാ ചോദ്യങ്ങളിൽ തൊടാം.',
      spoken:
        'നമസ്കാരം സഹോദരീ! കുടുംബനാഥകളായ സ്ത്രീകൾക്ക് പ്രതിമാസം ആയിരം രൂപ ധനസഹായം നൽകുന്ന പദ്ധതിയും ഗർഭിണികൾക്ക് പ്രധാനമന്ത്രി മാതൃ വന്ദന യോജന വഴി അയ്യായിരം മുതൽ ആറായിരം രൂപ വരെ സഹായവും ലഭ്യമാണ്. കൂടാതെ ഉജ്ജ്വല യോജനയിലൂടെ സൗജന്യ പാചകവാതക കണക്ഷനും ലഭിക്കും. റേഷൻ കാർഡ്, ആധാർ കാർഡ്, ബാങ്ക് പാസ്ബുക്ക് എന്നിവയുമായി അടുത്തുള്ള സേവന കേന്ദ്രത്തെ സമീപിക്കുക. നിങ്ങളുടെ ഒടിപി, പാസ്‌വേഡ്, പിൻ നമ്പർ എന്നിവ ആരുമായും പങ്കിടരുത്.',
      safe: 'നിങ്ങളുടെ OTP, പാസ്‌വേഡ്, ATM PIN, ബാങ്ക് PIN അല്ലെങ്കിൽ പൂർണ്ണ ആധാർ നമ്പർ ആരുമായും പങ്കിടരുത്.',
    },
  };

  const gInfo = greetings[lang];
  const useEnglishPrimary = lang === 'en';

  return {
    greetingTa: gInfo.g,
    greetingEn: 'Vanakkam Sister! I am Namma Sakhi, your Government Scheme Assistant.',
    summaryTa: gInfo.sum,
    summaryEn:
      'Below are key verified government welfare schemes for women from myScheme.gov.in. You can press the large microphone button to speak or tap any sample question above.',
    spokenScriptTa: gInfo.spoken,
    spokenScriptEn: greetings.en.spoken,
    schemes: [
      {
        schemeNameTa: useEnglishPrimary ? s0.nameEn : s0.nameTa,
        schemeNameEn: s0.nameEn,
        benefitTa: useEnglishPrimary ? s0.benefitEn : s0.benefitTa,
        benefitEn: s0.benefitEn,
        eligibilityTa: useEnglishPrimary ? s0.eligibilityEn : s0.eligibilityTa,
        eligibilityEn: s0.eligibilityEn,
        requiredDocumentsTa: useEnglishPrimary ? s0.documentsEn : s0.documentsTa,
        requiredDocumentsEn: s0.documentsEn,
        howToApplyTa: useEnglishPrimary ? s0.howToApplyEn : s0.howToApplyTa,
        howToApplyEn: s0.howToApplyEn,
        officialSourceName: s0.officialSourceName,
        officialSourceUrl: s0.officialSourceUrl,
        verificationNoteTa: useEnglishPrimary ? s0.verificationNoteEn : s0.verificationNoteTa,
        verificationNoteEn: s0.verificationNoteEn,
      },
      {
        schemeNameTa: useEnglishPrimary ? s1.nameEn : s1.nameTa,
        schemeNameEn: s1.nameEn,
        benefitTa: useEnglishPrimary ? s1.benefitEn : s1.benefitTa,
        benefitEn: s1.benefitEn,
        eligibilityTa: useEnglishPrimary ? s1.eligibilityEn : s1.eligibilityTa,
        eligibilityEn: s1.eligibilityEn,
        requiredDocumentsTa: useEnglishPrimary ? s1.documentsEn : s1.documentsTa,
        requiredDocumentsEn: s1.documentsEn,
        howToApplyTa: useEnglishPrimary ? s1.howToApplyEn : s1.howToApplyTa,
        howToApplyEn: s1.howToApplyEn,
        officialSourceName: s1.officialSourceName,
        officialSourceUrl: s1.officialSourceUrl,
        verificationNoteTa: useEnglishPrimary ? s1.verificationNoteEn : s1.verificationNoteTa,
        verificationNoteEn: s1.verificationNoteEn,
      },
    ],
    safetyReminderTa: gInfo.safe,
    safetyReminderEn: 'OTP, password, PIN and sensitive personal information-ai share panna vendam.',
  };
}
