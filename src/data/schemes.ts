export type Language = 'ta' | 'en' | 'te' | 'hi' | 'kn' | 'ml';

export type SpeechLocale = 'ta-IN' | 'en-IN' | 'te-IN' | 'hi-IN' | 'kn-IN' | 'ml-IN';

export interface LanguageConfig {
  code: Language;
  nativeLabel: string;
  englishLabel: string;
  speechLocale: SpeechLocale;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'ta', nativeLabel: 'தமிழ்', englishLabel: 'Tamil', speechLocale: 'ta-IN' },
  { code: 'en', nativeLabel: 'English', englishLabel: 'English', speechLocale: 'en-IN' },
  { code: 'te', nativeLabel: 'తెలుగు', englishLabel: 'Telugu', speechLocale: 'te-IN' },
  { code: 'hi', nativeLabel: 'हिन्दी', englishLabel: 'Hindi', speechLocale: 'hi-IN' },
  { code: 'kn', nativeLabel: 'ಕನ್ನಡ', englishLabel: 'Kannada', speechLocale: 'kn-IN' },
  { code: 'ml', nativeLabel: 'മലയാളം', englishLabel: 'Malayalam', speechLocale: 'ml-IN' },
];

export interface SchemeDetail {
  id: string;
  category: 'financial' | 'education' | 'maternity' | 'business' | 'housing' | 'farming' | 'pension';
  level: 'Tamil Nadu State' | 'Central Government (India)';
  nameTa: string;
  nameEn: string;
  nameTanglish: string;
  benefitTa: string;
  benefitEn: string;
  eligibilityTa: string[];
  eligibilityEn: string[];
  documentsTa: string[];
  documentsEn: string[];
  howToApplyTa: string[];
  howToApplyEn: string[];
  officialSourceName: string;
  officialSourceUrl: string;
  verificationNoteTa: string;
  verificationNoteEn: string;
}

export interface SakhiSchemeResponseItem {
  schemeNameTa: string;
  schemeNameEn: string;
  benefitTa: string;
  benefitEn: string;
  eligibilityTa: string[];
  eligibilityEn: string[];
  requiredDocumentsTa: string[];
  requiredDocumentsEn: string[];
  howToApplyTa: string[];
  howToApplyEn: string[];
  officialSourceName: string;
  officialSourceUrl: string;
  verificationNoteTa: string;
  verificationNoteEn: string;
}

export interface SakhiAIResponse {
  greetingTa: string;
  greetingEn: string;
  summaryTa: string;
  summaryEn: string;
  spokenScriptTa: string;
  spokenScriptEn: string;
  schemes: SakhiSchemeResponseItem[];
  safetyReminderTa: string;
  safetyReminderEn: string;
}

export interface DemoQuestion {
  id: string;
  tanglish: string;
  tamil: string;
  english: string;
}

export const DEMO_QUESTIONS: DemoQuestion[] = [
  {
    id: 'q1',
    tanglish: 'Enakku government scheme pathi therinjukanum',
    tamil: 'எனக்கு அரசு திட்டம் பற்றி தெரிஞ்சுக்கணும்',
    english: 'I want to know about government schemes for me',
  },
  {
    id: 'q2',
    tanglish: 'Pengalukku enna government help irukku?',
    tamil: 'பெண்களுக்கு என்ன அரசு உதவி இருக்கு?',
    english: 'What government help is available for women?',
  },
  {
    id: 'q3',
    tanglish: 'Enna documents venum?',
    tamil: 'விண்ணப்பிக்க என்ன ஆவணங்கள் (Documents) வேணும்?',
    english: 'What documents are needed to apply?',
  },
  {
    id: 'q4',
    tanglish: 'How can I find government schemes?',
    tamil: 'அரசு திட்டங்களை நான் எப்படி கண்டறிவது?',
    english: 'How can I find government schemes?',
  },
  {
    id: 'q5',
    tanglish: 'Enakku government scheme venum',
    tamil: 'எனக்கு அரசு திட்டம் வேணும்',
    english: 'I need a government scheme',
  },
  {
    id: 'q6',
    tanglish: 'Pengalukku enna government scheme irukku?',
    tamil: 'பெண்களுக்கு என்ன அரசு திட்டம் இருக்கு?',
    english: 'What government schemes are there for women?',
  },
  {
    id: 'q7',
    tanglish: 'Indha scheme-ku naan eligible-aa?',
    tamil: 'இந்த திட்டத்திற்கு நான் தகுதியானவரா?',
    english: 'Am I eligible for this scheme?',
  },
  {
    id: 'q8',
    tanglish: 'Eppadi apply panradhu?',
    tamil: 'எப்படி விண்ணப்பிப்பது (Apply செய்வது)?',
    english: 'How do I apply for a scheme?',
  },
];

export const VERIFIED_SCHEMES: SchemeDetail[] = [
  {
    id: 'magalir-urimai',
    category: 'financial',
    level: 'Tamil Nadu State',
    nameTa: 'கலைஞர் மகளிர் உரிமைத் தொகை திட்டம்',
    nameEn: 'Kalaignar Magalir Urimai Thittam',
    nameTanglish: 'Kalaignar Magalir Urimai Thogai Thittam (Rs. 1,000 Monthly)',
    benefitTa: 'குடும்பத் தலைவிகளுக்கு மாதம் ரூ.1,000 வங்கி கணக்கில் நேரடியாக வழங்கப்படும் (ஆண்டுக்கு ரூ.12,000).',
    benefitEn: 'Rs. 1,000 per month deposited directly into the bank account of eligible women family heads (Rs. 12,000 per year).',
    eligibilityTa: [
      'தமிழ்நாட்டில் வசிக்கும் 21 வயது நிரம்பிய பெண்கள் (குடும்பத் தலைவிகள்).',
      'குடும்ப ஆண்டு வருமானம் ரூ.2.5 லட்சத்திற்கு கீழ் இருக்க வேண்டும்.',
      'நன்செய் நிலம் 5 ஏக்கருக்கு குறைவாக அல்லது புன்செய் நிலம் 10 ஏக்கருக்கு குறைவாக இருக்க வேண்டும்.',
      'ஆண்டுக்கு வீட்டு உபயோக மின்சாரம் 3,600 யூனிட்டுக்கு குறைவாக பயன்படுத்தும் குடும்பங்கள்.',
    ],
    eligibilityEn: [
      'Women aged 21 years and above residing in Tamil Nadu (listed as woman head of household in ration card).',
      'Annual household income must be below Rs. 2.5 Lakh.',
      'Household owns less than 5 acres of wetland or less than 10 acres of dryland.',
      'Domestic electricity consumption is under 3,600 units per year.',
    ],
    documentsTa: [
      'குடும்ப அட்டை (Ration Card / Smart Card)',
      'ஆதார் அட்டை (Aadhaar Card - சரிபார்ப்புக்கு மட்டும்)',
      'ஆதார் எண்ணுடன் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம் (Bank Passbook)',
      'கைபேசி எண் (Mobile Number)',
    ],
    documentsEn: [
      'Family Ration Card / Smart Card',
      'Aadhaar Card (for identity verification only)',
      'Aadhaar-seeded Bank Passbook',
      'Active Mobile Number',
    ],
    howToApplyTa: [
      'உங்கள் பகுதி இ-சேவை மையம் (e-Sevai Centre) அல்லது அரசு சிறப்பு முகாமிற்கு நேரில் செல்லவும்.',
      'உங்கள் குடும்ப அட்டை மற்றும் ஆதார் விவரங்களைக் காட்டி விண்ணப்பப் படிவத்தை பதிவு செய்யவும்.',
      'பதிவு செய்தவுடன் உங்கள் கைபேசிக்கு குறுஞ்செய்தி (SMS) ஒப்புகை ரசீது வரும்.',
    ],
    howToApplyEn: [
      'Visit your nearest government e-Sevai Centre or special camp organized in your village/ward.',
      'Present your Ration Card, Aadhaar, and Bank Passbook to the official operator.',
      'Collect your acknowledgement receipt and SMS confirmation after biometric verification.',
    ],
    officialSourceName: 'myScheme.gov.in & Tamil Nadu KMUT Official Portal',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'தற்போதைய தகுதி விதிகள் மற்றும் முகாம் தேதிகளை https://www.myscheme.gov.in/ அல்லது அருகிலுள்ள இ-சேவை மையத்தில் சரிபார்க்கவும்.',
    verificationNoteEn: 'Please verify the latest eligibility rules and application windows on https://www.myscheme.gov.in/ or at your local e-Sevai centre.',
  },
  {
    id: 'pmmvy',
    category: 'maternity',
    level: 'Central Government (India)',
    nameTa: 'பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா (கர்ப்பிணிப் பெண்கள் உதவித் திட்டம்)',
    nameEn: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    nameTanglish: 'PM Matru Vandana Yojana (Maternity Benefit Scheme)',
    benefitTa: 'முதல் குழந்தைக்கு ரூ.5,000 (இரண்டு தவணைகளில்) மற்றும் இரண்டாவது குழந்தை பெண் குழந்தையாக இருந்தால் ரூ.6,000 வங்கி கணக்கில் வழங்கப்படும். (தமிழ்நாட்டில் டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு நிதியுதவி திட்டத்துடன் இணைந்து கூடுதல் உதவி கிடைக்கும்).',
    benefitEn: 'Cash incentive of Rs. 5,000 in two installments for the first living child, and Rs. 6,000 if the second child is a girl, credited directly to the mother’s bank account.',
    eligibilityTa: [
      '19 வயது மற்றும் அதற்கு மேற்பட்ட கர்ப்பிணிப் பெண்கள் மற்றும் பாலூட்டும் தாய்மார்கள்.',
      'அரசு அல்லது பொதுத்துறை நிறுவனத்தில் நிரந்தர ஊதியம் பெறாத பெண்கள்.',
    ],
    eligibilityEn: [
      'Pregnant women and lactating mothers aged 19 years and above.',
      'Women from economically weaker sections not in regular government employment.',
    ],
    documentsTa: [
      'தாய் சேய் நல அட்டை (MCP Card / PICME எண்)',
      'ஆதார் அட்டை (Aadhaar Card)',
      'ஆதார் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம் (Bank Passbook)',
      'குழந்தை பிறப்பு சான்றிதழ் (இரண்டாம் தவணைக்கு)',
    ],
    documentsEn: [
      'Mother and Child Protection (MCP) Card / PICME Registration Number',
      'Aadhaar Card',
      'Aadhaar-linked Bank Account Passbook',
      'Child Birth Certificate & Immunization Record (for final installment)',
    ],
    howToApplyTa: [
      'உங்கள் கிராம அங்கன்வாடி மையம் (Anganwadi) அல்லது ஆரம்ப சுகாதார நிலையத்தில் (PHC) கிராம சுகாதார செவிலியரை (VHN) அணுகவும்.',
      'PICME எண் பதிவு செய்து மாத்ரு வந்தனா திட்டப் படிவத்தை அளிக்கவும்.',
    ],
    howToApplyEn: [
      'Visit your local Anganwadi Centre or Primary Health Centre (PHC) and meet the Village Health Nurse (VHN).',
      'Register your pregnancy (PICME in Tamil Nadu) and submit the PMMVY form with MCP card copies.',
    ],
    officialSourceName: 'myScheme.gov.in – Ministry of Women & Child Development',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'மகப்பேறு நிதியுதவி தொகை மற்றும் தவணை விவரங்களை https://www.myscheme.gov.in/ அல்லது உங்கள் ஆரம்ப சுகாதார நிலையத்தில் உறுதிப்படுத்தவும்.',
    verificationNoteEn: 'Verify the latest maternity installment criteria at https://www.myscheme.gov.in/ or your local Primary Health Centre.',
  },
  {
    id: 'ujjwala',
    category: 'housing',
    level: 'Central Government (India)',
    nameTa: 'பிரதான் மந்திரி உஜ்வாலா யோஜனா (இலவச சமையல் எரிவாயு இணைப்புத் திட்டம்)',
    nameEn: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
    nameTanglish: 'PM Ujjwala Yojana (Free LPG Gas Connection)',
    benefitTa: 'ஏழை குடும்பத்துப் பெண்களுக்கு முன்பணம் இல்லாமல் இலவச சமையல் எரிவாயு (LPG Gas) இணைப்பு, முதல் சிலிண்டர் ரீஃபில் மற்றும் அடுப்பு வழங்கப்படும். மேலும் சிலிண்டருக்கு மானியம் வழங்கப்படுகிறது.',
    benefitEn: 'Deposit-free LPG gas connection for women from BPL/eligible households, including free first cylinder refill, pressure regulator, and stove, plus targeted cylinder subsidy.',
    eligibilityTa: [
      '18 வயது நிரம்பிய ஏழை எளிய குடும்பத்தைச் சேர்ந்த பெண்கள்.',
      'அந்த வீட்டில் ஏற்கனவே வேறு எந்த சமையல் எரிவாயு (LPG) இணைப்பும் இருக்கக் கூடாது.',
    ],
    eligibilityEn: [
      'Adult woman (18+ years) belonging to an eligible poor/SC/ST/Antyodaya/rural household.',
      'No existing LPG connection in the same household.',
    ],
    documentsTa: [
      'குடும்ப அட்டை (Ration Card)',
      'ஆதார் அட்டை (Aadhaar Card)',
      'வங்கி கணக்கு புத்தகம் (Bank Passbook)',
      'பாஸ்போர்ட் அளவு புகைப்படம் (Passport Photo)',
    ],
    documentsEn: [
      'Ration Card showing family composition and address',
      'Aadhaar Card of applicant and adult family members',
      'Bank Account Passbook',
      'Passport-size Photograph',
    ],
    howToApplyTa: [
      'அருகிலுள்ள இந்தியன் (Indane), பாரத் (Bharat Gas) அல்லது ஹெச்பி (HP Gas) எரிவாயு முகமைக்கு (Gas Agency) நேரில் செல்லவும் அல்லது இ-சேவை மையத்தை அணுகவும்.',
      'உஜ்வாலா KYC விண்ணப்பப் படிவத்தை பூர்த்தி செய்து ஆவணங்களின் நகல்களை வழங்கவும்.',
    ],
    howToApplyEn: [
      'Visit your nearest Indane, Bharat Gas, or HP Gas distributor or a Common Service Centre (CSC).',
      'Submit the Ujjwala KYC application form along with Ration Card and Aadhaar copies.',
    ],
    officialSourceName: 'myScheme.gov.in – Ministry of Petroleum and Natural Gas',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'புதிய உஜ்வாலா இணைப்பு விண்ணப்ப நிலையை https://www.myscheme.gov.in/ இணையதளத்தில் சரிபார்க்கவும்.',
    verificationNoteEn: 'Please check current connection availability and subsidy rules on https://www.myscheme.gov.in/.',
  },
  {
    id: 'pudhumai-penn',
    category: 'education',
    level: 'Tamil Nadu State',
    nameTa: 'மூவலூர் இராமாமிர்தம் அம்மையார் புதுமைப் பெண் திட்டம்',
    nameEn: 'Moovalur Ramamirtham Ammaiyar Pudhumai Penn Scheme',
    nameTanglish: 'Pudhumai Penn Thittam (Rs. 1,000 Monthly for College Girls)',
    benefitTa: 'அரசுப் பள்ளிகளில் படித்து கல்லூரியில் சேரும் மாணவிகளுக்கு உயர்கல்வி முடியும் வரை மாதம் ரூ.1,000 வங்கி கணக்கில் நேரடியாக வழங்கப்படும்.',
    benefitEn: 'Rs. 1,000 per month paid directly into the student’s bank account until completion of their undergraduate degree, diploma, or ITI course.',
    eligibilityTa: [
      '6-ஆம் வகுப்பு முதல் 12-ஆம் வகுப்பு வரை அரசுப் பள்ளிகளில் (அல்லது அரசு உதவி பெறும் பள்ளிகளில் தமிழ் வழியில்) படித்த மாணவிகள்.',
      'கல்லூரி, பாலிடெக்னிக் அல்லது ஐடிஐ (ITI) உயர்கல்வியில் சேர்ந்திருக்க வேண்டும்.',
    ],
    eligibilityEn: [
      'Girl students who studied from Class 6 to Class 12 in Government schools (or Tamil medium in Government-aided schools in Tamil Nadu).',
      'Enrolled in an undergraduate degree, diploma, or ITI course at a recognized institution.',
    ],
    documentsTa: [
      'பள்ளி மாற்றுச் சான்றிதழ் (TC) மற்றும் மதிப்பெண் சான்றிதழ்',
      'கல்லூரி சேர்க்கை சான்று / அடையாள அட்டை (College Bonafide / ID Card)',
      'மாணவியின் எமிஸ் (EMIS) எண்',
      'ஆதார் மற்றும் வங்கி கணக்கு புத்தகம்',
    ],
    documentsEn: [
      'School Transfer Certificate (TC) & Marksheets (Class 6–12 verification)',
      'College Admission Bonafide Certificate / ID Card',
      'Student EMIS Number',
      'Aadhaar Card & Student Bank Passbook',
    ],
    howToApplyTa: [
      'நீங்கள் படிக்கும் கல்லூரியில் உள்ள புதுமைப் பெண் திட்ட ஒருங்கிணைப்பாளர் (Nodal Officer) மூலம் இணையத்தில் விண்ணப்பிக்கலாம்.',
      'கல்லூரி நிர்வாகமே உங்கள் EMIS எண்ணை சரிபார்த்து பதிவேற்றம் செய்ய உதவும்.',
    ],
    howToApplyEn: [
      'Contact the Pudhumai Penn Nodal Officer at your college or polytechnic institution.',
      'Submit your EMIS number, Aadhaar, and bank details through the college portal.',
    ],
    officialSourceName: 'myScheme.gov.in & Tamil Nadu Social Welfare Department',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'கல்லூரி சேர்க்கை மற்றும் விண்ணப்பக் காலக்கெடுவை https://www.myscheme.gov.in/ அல்லது உங்கள் கல்லூரி அலுவலகத்தில் சரிபார்க்கவும்.',
    verificationNoteEn: 'Verify application dates with your college Nodal Officer or on https://www.myscheme.gov.in/.',
  },
  {
    id: 'mudra-lakhpati',
    category: 'business',
    level: 'Central Government (India)',
    nameTa: 'பிரதான் மந்திரி முத்ரா யோஜனா & மகளிர் சுயஉதவிக் குழு தொழில் கடன்',
    nameEn: 'Pradhan Mantri MUDRA Yojana (PMMY) & Lakhpati Didi SHG Support',
    nameTanglish: 'PM Mudra Loan & Magalir Suya Udhavi Kuzhu Kadan',
    benefitTa: 'சிறிய கடை, தையல், பால் பண்ணை, கைவினைப் பொருட்கள் போன்ற சுயதொழில் தொடங்க சொத்து பிணையம் (Collateral) இல்லாமல் ரூ.50,000 முதல் ரூ.10 லட்சம் வரை வங்கிக் கடன் உதவி.',
    benefitEn: 'Collateral-free micro enterprise loans starting from Rs. 50,000 (Shishu) up to Rs. 10 Lakh (Kishore/Tarun) for women starting tailoring, dairy, petty shops, food processing, or small businesses.',
    eligibilityTa: [
      '18 வயது நிரம்பிய சுயதொழில் தொடங்க விரும்பும் பெண்கள் அல்லது மகளிர் சுயஉதவிக் குழு (SHG) உறுப்பினர்கள்.',
      'வங்கியில் கடன் நிலுவை மோசடி இல்லாதவர்கள்.',
    ],
    eligibilityEn: [
      'Women aged 18+ starting or expanding a small non-farm business, tailoring unit, shop, or cottage industry.',
      'Members of Women Self-Help Groups (SHGs) or individual women micro-entrepreneurs.',
    ],
    documentsTa: [
      'ஆதார் அட்டை மற்றும் வாக்காளர் அடையாள அட்டை / பான் அட்டை',
      'முகவரி சான்று (குடும்ப அட்டை)',
      'தொழில் பற்றிய சிறிய விவரக்குறிப்பு (என்ன தொழில், எவ்வளவு செலவாகும்)',
      'வங்கி கணக்கு புத்தகம் மற்றும் 2 புகைப்படங்கள்',
    ],
    documentsEn: [
      'Aadhaar Card & Voter ID / PAN Card',
      'Address Proof (Ration Card)',
      'Simple Business Plan or quotation for equipment (e.g., sewing machine, grinder)',
      'Bank Passbook & 2 Passport Photos',
    ],
    howToApplyTa: [
      'உங்கள் பகுதி தேசியமயமாக்கப்பட்ட வங்கி (Bank) கிளை மேலாளரை நேரில் சந்தித்து முத்ரா (Shishu) கடன் படிவம் கேட்கவும்.',
      'மகளிர் சுயஉதவிக் குழு உறுப்பினராக இருந்தால் ஊராட்சி அளவிலான கூட்டமைப்பு (PLF) மூலம் விண்ணப்பிக்கலாம்.',
    ],
    howToApplyEn: [
      'Visit your nearest public sector or rural bank branch and ask for the PM MUDRA (Shishu) loan form.',
      'If you belong to a Self-Help Group (SHG), apply through your Panchayat Level Federation (PLF) or JanSamarth portal.',
    ],
    officialSourceName: 'myScheme.gov.in – Ministry of Finance / Ministry of Rural Development',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'வட்டி விகிதம் மற்றும் மானிய விவரங்களை https://www.myscheme.gov.in/ அல்லது உங்கள் வங்கி கிளையில் நேரில் கேட்டுத் தெரிந்து கொள்ளவும்.',
    verificationNoteEn: 'Confirm interest rates, repayment terms, and SHG subsidies directly at your bank branch or on https://www.myscheme.gov.in/.',
  },
  {
    id: 'sukanya-samriddhi',
    category: 'education',
    level: 'Central Government (India)',
    nameTa: 'சுகன்யா சம்ரித்தி யோஜனா (செல்வமகள் சேமிப்புத் திட்டம்)',
    nameEn: 'Sukanya Samriddhi Yojana (Girl Child Savings Scheme)',
    nameTanglish: 'Selvamagal Semippu Thittam (Sukanya Samriddhi)',
    benefitTa: 'பெண் குழந்தையின் கல்வி மற்றும் திருமணத்திற்காக அஞ்சலகம் (Post Office) அல்லது வங்கியில் குறைந்தபட்சம் ஆண்டுக்கு ரூ.250 முதல் சேமிக்கலாம். அரசு அதிக வட்டி (சுமார் 8.2%) மற்றும் முழு வரி விலக்கு அளிக்கிறது.',
    benefitEn: 'High-interest government-backed savings account (around 8.2% p.a.) for a girl child’s higher education and future, starting with as little as Rs. 250 per year at any Post Office or bank.',
    eligibilityTa: [
      '10 வயதுக்குட்பட்ட பெண் குழந்தையின் பெற்றோர் அல்லது பாதுகாவலர் கணக்கு தொடங்கலாம்.',
      'ஒரு குடும்பத்தில் அதிகபட்சம் இரண்டு பெண் குழந்தைகளுக்கு தொடங்கலாம்.',
    ],
    eligibilityEn: [
      'Parents or legal guardians of a girl child below 10 years of age.',
      'Up to two accounts allowed per family (one for each girl child).',
    ],
    documentsTa: [
      'பெண் குழந்தையின் பிறப்புச் சான்றிதழ் (Birth Certificate)',
      'பெற்றோர் (தாய் அல்லது தந்தை) ஆதார் அட்டை மற்றும் முகவரி சான்று',
      'குழந்தை மற்றும் பெற்றோரின் புகைப்படம்',
    ],
    documentsEn: [
      'Birth Certificate of the girl child',
      'Parent/Guardian Aadhaar Card and Address Proof',
      'Passport-size photographs of parent and child',
    ],
    howToApplyTa: [
      'உங்கள் ஊரில் உள்ள அஞ்சலகம் (Post Office) அல்லது அரசு வங்கிக்கு நேரில் செல்லவும்.',
      'செல்வமகள் சேமிப்புத் திட்டப் படிவத்தை பூர்த்தி செய்து ரூ.250 செலுத்தி கணக்குப் புத்தகம் பெற்றுக்கொள்ளலாம்.',
    ],
    howToApplyEn: [
      'Visit your local Post Office or authorized bank branch.',
      'Fill out the Sukanya Samriddhi Account opening form with the child’s birth certificate and initial deposit of Rs. 250.',
    ],
    officialSourceName: 'myScheme.gov.in – Ministry of Finance / India Post',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'தற்போதைய வட்டி விகிதத்தை அருகிலுள்ள அஞ்சலகம் அல்லது https://www.myscheme.gov.in/ தளத்தில் சரிபார்க்கவும்.',
    verificationNoteEn: 'Verify the current quarterly interest rate at your nearest Post Office or on https://www.myscheme.gov.in/.',
  },
  {
    id: 'pm-kisan-mahila',
    category: 'farming',
    level: 'Central Government (India)',
    nameTa: 'பி.எம். கிசான் சம்மான் நிதி (விவசாய குடும்ப நிதியுதவி)',
    nameEn: 'PM-KISAN Samman Nidhi & Mahila Kisan Support',
    nameTanglish: 'PM Kisan Vivasayi Udhavi Thogai (Rs. 6,000 Yearly)',
    benefitTa: 'விவசாய நிலம் வைத்துள்ள குடும்பங்களுக்கு ஆண்டுக்கு ரூ.6,000 (நான்கு மாதங்களுக்கு ஒருமுறை ரூ.2,000 வீதம் மூன்று தவணைகளில்) வங்கி கணக்கில் வழங்கப்படும்.',
    benefitEn: 'Rs. 6,000 per year in three equal installments of Rs. 2,000 every four months directly into the bank account of landholding farmer families.',
    eligibilityTa: [
      'சொந்தமாக சாகுபடி நிலம் (பட்டா / சிட்டா) வைத்துள்ள சிறிய மற்றும் குறு விவசாய குடும்பங்கள்.',
    ],
    eligibilityEn: [
      'Small and marginal farmer families owning cultivable land in their name as per land records (Patta / Chitta).',
    ],
    documentsTa: [
      'நிலப் பட்டா மற்றும் சிட்டா / அடங்கல் (Land Patta / Chitta)',
      'ஆதார் அட்டை (Aadhaar Card)',
      'ஆதார் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்',
    ],
    documentsEn: [
      'Land Ownership Records (Patta / Chitta)',
      'Aadhaar Card',
      'Aadhaar-seeded Bank Account Passbook',
    ],
    howToApplyTa: [
      'அருகிலுள்ள இ-சேவை மையம் (CSC / e-Sevai) அல்லது வட்டார வேளாண்மை விரிவாக்க மையத்தை (Agriculture Office) அணுகவும்.',
    ],
    howToApplyEn: [
      'Visit your nearest e-Sevai Centre, Common Service Centre (CSC), or Block Agriculture Extension Office with your Patta and Aadhaar.',
    ],
    officialSourceName: 'myScheme.gov.in – Ministry of Agriculture & Farmers Welfare',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'e-KYC மற்றும் தகுதி விவரங்களை https://www.myscheme.gov.in/ தளத்தில் சரிபார்க்கவும்.',
    verificationNoteEn: 'Check e-KYC and land seeding requirements on https://www.myscheme.gov.in/.',
  },
  {
    id: 'widow-oldage-pension',
    category: 'pension',
    level: 'Central Government (India)',
    nameTa: 'ஆதரவற்ற விதவைகள் மற்றும் முதியோர் ஓய்வூதியத் திட்டம் (IGNOAPS / IGNWPS)',
    nameEn: 'Indira Gandhi National Widow & Old Age Pension Scheme (Tamil Nadu OAP)',
    nameTanglish: 'Vidhavai matrum Mudhiyor Oivoodhiya Thittam (Monthly Pension)',
    benefitTa: 'ஆதரவற்ற விதவைகள் மற்றும் முதியோர்களுக்கு மாதம் ரூ.1,200 ஓய்வூதியம் மற்றும் இலவச அரிசி, வேட்டி/சேலை சலுகைகள் வழங்கப்படும்.',
    benefitEn: 'Monthly social security pension (Rs. 1,200/month in Tamil Nadu) along with free ration rice and festival clothing support.',
    eligibilityTa: [
      'ஆதரவற்ற விதவைப் பெண்கள் (18 வயதுக்கு மேல்) அல்லது 60 வயது நிரம்பிய ஆதரவற்ற முதியோர்கள்.',
      'வறுமைக் கோட்டிற்கு கீழ் உள்ள குடும்பத்தினர்.',
    ],
    eligibilityEn: [
      'Destitute widows aged 18+ or senior citizens aged 60+ belonging to Below Poverty Line (BPL) households without regular income support.',
    ],
    documentsTa: [
      'ஆதார் அட்டை மற்றும் குடும்ப அட்டை (Ration Card)',
      'வயது சான்று',
      'கணவர் இறப்புச் சான்றிதழ் மற்றும் விதவை சான்றிதழ் (விதவை ஓய்வூதியத்திற்கு)',
      'வங்கி கணக்கு புத்தகம்',
    ],
    documentsEn: [
      'Aadhaar Card & Family Ration Card',
      'Age Proof',
      'Husband’s Death Certificate & Widow Certificate (for Widow Pension)',
      'Bank Passbook',
    ],
    howToApplyTa: [
      'அருகிலுள்ள இ-சேவை மையத்திற்கு (e-Sevai Centre) சென்று வருவாய்த்துறை ஓய்வூதிய விண்ணப்பத்தை பதிவு செய்யவும்.',
      'கிராம நிர்வாக அலுவலர் (VAO) மற்றும் வட்டாட்சியர் (Tahsildar) சரிபார்ப்புக்குப் பின் ஓய்வூதியம் வழங்கப்படும்.',
    ],
    howToApplyEn: [
      'Visit your nearest government e-Sevai Centre to file an online Revenue Department pension application.',
      'Verification is conducted by the Village Administrative Officer (VAO) and Tahsildar.',
    ],
    officialSourceName: 'myScheme.gov.in & Tamil Nadu e-Sevai Portal',
    officialSourceUrl: 'https://www.myscheme.gov.in/',
    verificationNoteTa: 'ஓய்வூதிய தகுதி மற்றும் ஆவணங்களை https://www.myscheme.gov.in/ அல்லது கிராம நிர்வாக அலுவலரிடம் (VAO) சரிபார்க்கவும்.',
    verificationNoteEn: 'Verify pension eligibility rules on https://www.myscheme.gov.in/ or with your local Village Administrative Officer (VAO).',
  },
];
