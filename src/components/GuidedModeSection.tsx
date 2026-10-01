import React, { useState } from 'react';
import {
  Compass,
  Volume2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { type Language, SUPPORTED_LANGUAGES } from '../data/schemes';
import { UI_TRANSLATIONS } from '../data/translations';
import { speakText } from '../utils/speech';

export interface GuidedProfile {
  age: string;
  state: string;
  occupation: string;
  helpType: string;
}

interface GuidedModeSectionProps {
  language: Language;
  onCompleteGuided: (profile: GuidedProfile) => void;
  isLoading: boolean;
}

interface MultilingualOption {
  value: string;
  labels: Record<Language, string>;
  subLabelEn: string;
}

const AGE_OPTIONS: MultilingualOption[] = [
  {
    value: 'Under 18 years (Girl child / School student)',
    labels: {
      ta: '18 வயதுக்கு கீழ் (பெண் குழந்தை / பள்ளி மாணவி)',
      en: 'Under 18 years (Girl child / School student)',
      te: '18 సంవత్సరాల లోపు (బాలిక / పాఠశాల విద్యార్థిని)',
      hi: '18 वर्ष से कम (बालिका / स्कूल छात्रा)',
      kn: '18 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ (ಹೆಣ್ಣು ಮಗು / ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿನಿ)',
      ml: '18 വയസ്സിൽ താഴെ (പെൺകുട്ടി / സ്കൂൾ വിദ്യാർത്ഥിനി)',
    },
    subLabelEn: 'Under 18 years (Girl child / School student)',
  },
  {
    value: '18 to 35 years (College, Young Mother, or Working)',
    labels: {
      ta: '18 முதல் 35 வயது வரை (கல்லூரி / இளம் தாய் / பணி)',
      en: '18 to 35 years (College, Young Mother, or Working)',
      te: '18 నుండి 35 సంవత్సరాలు (కళాశాల / తల్లి / ఉద్యోగిని)',
      hi: '18 से 35 वर्ष (कॉलेज छात्रा / युवा माँ / कामकाजी)',
      kn: '18 ರಿಂದ 35 ವರ್ಷಗಳು (ಕಾಲೇಜು / ತಾಯಿ / ಉದ್ಯೋಗಿ)',
      ml: '18 മുതൽ 35 വയസ്സ് വരെ (കോളേജ് / അമ്മ / തൊഴിൽ)',
    },
    subLabelEn: '18 to 35 years (College, Young Mother, or Working)',
  },
  {
    value: '36 to 59 years (Homemaker, Worker, or Business)',
    labels: {
      ta: '36 முதல் 59 வயது வரை (குடும்பத் தலைவி / உழைப்பாளி)',
      en: '36 to 59 years (Homemaker, Worker, or Business)',
      te: '36 నుండి 59 సంవత్సరాలు (గృహిణి / శ్రామికురాలు / వ్యాపారం)',
      hi: '36 से 59 वर्ष (गृहिणी / श्रमिक / स्वरोजगार)',
      kn: '36 ರಿಂದ 59 ವರ್ಷಗಳು (ಗೃಹಿಣಿ / ಕಾರ್ಮಿಕರು / ಸ್ವಉದ್ಯೋಗ)',
      ml: '36 മുതൽ 59 വയസ്സ് വരെ (വീട്ടമ്മ / തൊഴിലാളി / സ്വയംതൊഴിൽ)',
    },
    subLabelEn: '36 to 59 years (Homemaker, Worker, or Business)',
  },
  {
    value: '60 years and above (Senior Citizen)',
    labels: {
      ta: '60 வயது மற்றும் அதற்கு மேல் (மூத்த குடிமகள்)',
      en: '60 years and above (Senior Citizen)',
      te: '60 సంవత్సరాలు మరియు ఆపై (వయోవృద్ధులు)',
      hi: '60 वर्ष और उससे अधिक (वरिष्ठ नागरिक)',
      kn: '60 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟವರು (ಹಿರಿಯ ನಾಗರಿಕರು)',
      ml: '60 വയസ്സിന് മുകളിൽ (മുതിർന്ന പൗരന്മാർ)',
    },
    subLabelEn: '60 years and above (Senior Citizen)',
  },
];

const STATE_OPTIONS: MultilingualOption[] = [
  {
    value: 'Tamil Nadu (தமிழ்நாடு)',
    labels: {
      ta: 'தமிழ்நாடு (Tamil Nadu)',
      en: 'Tamil Nadu (தமிழ்நாடு)',
      te: 'తమిళనాడు (Tamil Nadu)',
      hi: 'तमिलनाडु (Tamil Nadu)',
      kn: 'ತಮಿಳುನಾಡು (Tamil Nadu)',
      ml: 'തമിഴ്നാട് (Tamil Nadu)',
    },
    subLabelEn: 'Tamil Nadu State & Central Schemes',
  },
  {
    value: 'Andhra Pradesh / Telangana (ఆంధ్రప్రదేశ్ / తెలంగాణ)',
    labels: {
      ta: 'ஆந்திரா / தெலுங்கானா (AP / Telangana)',
      en: 'Andhra Pradesh / Telangana',
      te: 'ఆంధ్రప్రదేశ్ / తెలంగాణ (AP / Telangana)',
      hi: 'आंध्र प्रदेश / तेलंगाना',
      kn: 'ಆಂಧ್ರಪ್ರದೇಶ / ತೆಲಂಗಾಣ',
      ml: 'ആന്ധ്രാപ്രദേശ് / തെലങ്കാന',
    },
    subLabelEn: 'Andhra Pradesh & Telangana',
  },
  {
    value: 'Karnataka (ಕರ್ನಾಟಕ)',
    labels: {
      ta: 'கர்நாடகா (Karnataka)',
      en: 'Karnataka (ಕರ್ನಾಟಕ)',
      te: 'కర్ణాటక (Karnataka)',
      hi: 'कर्नाटक (Karnataka)',
      kn: 'ಕರ್ನಾಟಕ (Karnataka)',
      ml: 'കർണാടക (Karnataka)',
    },
    subLabelEn: 'Karnataka State & Central Schemes',
  },
  {
    value: 'Kerala (കേരളം)',
    labels: {
      ta: 'கேரளா (Kerala)',
      en: 'Kerala (കേരളം)',
      te: 'కేరళ (Kerala)',
      hi: 'केरल (Kerala)',
      kn: 'ಕೇರಳ (Kerala)',
      ml: 'കേരളം (Kerala)',
    },
    subLabelEn: 'Kerala State & Central Schemes',
  },
  {
    value: 'Puducherry (புதுச்சேரி)',
    labels: {
      ta: 'புதுச்சேரி (Puducherry)',
      en: 'Puducherry (புதுச்சேரி)',
      te: 'పుదుచ్చేరి (Puducherry)',
      hi: 'पुदुच्चेरी (Puducherry)',
      kn: 'ಪುದುಚೇರಿ (Puducherry)',
      ml: 'പുതുച്ചേരി (Puducherry)',
    },
    subLabelEn: 'Puducherry UT & Central Schemes',
  },
  {
    value: 'Other State in India (All-India Central Schemes)',
    labels: {
      ta: 'இந்தியாவின் பிற மாநிலம் (All-India Central Schemes)',
      en: 'Other State in India (Central Govt Schemes)',
      te: 'భారతదేశంలోని ఇతర రాష్ట్రాలు (Central Schemes)',
      hi: 'भारत के अन्य राज्य (केंद्र सरकार की योजनाएं)',
      kn: 'ಭಾರತದ ಇತರ ರಾಜ್ಯಗಳು (ಕೇಂದ್ರ ಸರ್ಕಾರದ ಯೋಜನೆಗಳು)',
      ml: 'ഇന്ത്യയിലെ മറ്റ് സംസ്ഥാനങ്ങൾ (കേന്ദ്ര പദ്ധതികൾ)',
    },
    subLabelEn: 'All-India Central Government Schemes',
  },
];

const OCCUPATION_OPTIONS: MultilingualOption[] = [
  {
    value: 'Homemaker (இல்லத்தரசி / குடும்பத் தலைவி)',
    labels: {
      ta: 'இல்லத்தரசி / குடும்பத் தலைவி (Homemaker)',
      en: 'Homemaker',
      te: 'గృహిణి / కుటుంబ పెద్ద (Homemaker)',
      hi: 'गृहिणी / परिवार प्रमुख (Homemaker)',
      kn: 'ಗೃಹಿಣಿ / ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥೆ (Homemaker)',
      ml: 'വീട്ടമ്മ / കുടുംബനാഥ (Homemaker)',
    },
    subLabelEn: 'Homemaker / Head of Household',
  },
  {
    value: 'Student (மாணவி - பள்ளி அல்லது கல்லூரி)',
    labels: {
      ta: 'மாணவி (Student - பள்ளி / கல்லூரி)',
      en: 'Student (School / College)',
      te: 'విద్యార్థిని (Student - పాఠశాల / కళాశాల)',
      hi: 'छात्रा (Student - स्कूल / कॉलेज)',
      kn: 'ವಿದ್ಯಾರ್ಥಿನಿ (Student - ಶಾಲೆ / ಕಾಲೇಜು)',
      ml: 'വിദ്യാർത്ഥിനി (Student - സ്കൂൾ / കോളേജ്)',
    },
    subLabelEn: 'School or College Girl Student',
  },
  {
    value: 'Worker (கூலித் தொழிலாளி / அமைப்புசாரா தொழிலாளி)',
    labels: {
      ta: 'கூலித் தொழிலாளி / பணியாளர் (Worker)',
      en: 'Worker / Daily Wage Earner',
      te: 'రోజువారీ కూలీ / కార్మికురాలు (Worker)',
      hi: 'श्रमिक / कामकाजी महिला (Worker)',
      kn: 'ಕೂಲಿ ಕಾರ್ಮಿಕರು / ಕೆಲಸಗಾರರು (Worker)',
      ml: 'തൊഴിലാളി / ദിവസവേതനക്കാർ (Worker)',
    },
    subLabelEn: 'Daily Wage or Unorganized Sector Worker',
  },
  {
    value: 'Farmer (விவசாயி / வேளாண் பெண்)',
    labels: {
      ta: 'விவசாயி (Farmer / வேளாண்மை)',
      en: 'Farmer / Agriculture',
      te: 'రైతు / వ్యవసాయం (Farmer)',
      hi: 'किसान / कृषि महिला (Farmer)',
      kn: 'ರೈತ ಮಹಿಳೆ / ಕೃಷಿ (Farmer)',
      ml: 'കർഷക / കൃഷി (Farmer)',
    },
    subLabelEn: 'Woman Farmer / Agricultural Family',
  },
  {
    value: 'Entrepreneur (சுயதொழில் செய்பவர் / சுயஉதவிக் குழு)',
    labels: {
      ta: 'சுயதொழில் செய்பவர் / சுயஉதவிக் குழு (Entrepreneur)',
      en: 'Entrepreneur / Self-Help Group (SHG)',
      te: 'స్వయం ఉపాధి / డ్వాక్రా సంఘం (Entrepreneur)',
      hi: 'स्वरोजगार / स्वयं सहायता समूह (Entrepreneur)',
      kn: 'ಸ್ವಉದ್ಯೋಗಿ / ಸ್ತ್ರೀಶಕ್ತಿ ಸಂಘ (Entrepreneur)',
      ml: 'സ്വയംതൊഴിൽ / കുടുംബശ്രീ അംഗം (Entrepreneur)',
    },
    subLabelEn: 'Small Business, Tailoring, or SHG Member',
  },
];

const HELP_TYPE_OPTIONS: MultilingualOption[] = [
  {
    value: 'Monthly Financial Assistance for Women (Rs. 1,000 Monthly Scheme)',
    labels: {
      ta: 'மாதாந்திர பண உதவி (மகளிர் உரிமைத் தொகை ரூ.1,000)',
      en: 'Monthly Financial Help (Magalir Urimai Rs. 1,000)',
      te: 'నెలవారీ ఆర్థిక సహాయం (మహిళా ఆర్థిక సహాయ పథకం)',
      hi: 'मासिक आर्थिक सहायता (महिला सम्मान / ₹1,000 योजना)',
      kn: 'ಮಾಸಿಕ ಆರ್ಥಿಕ ನೆರವು (ಮಹಿಳಾ ಸಹಾಯಧನ ಯೋಜನೆ)',
      ml: 'പ്രതിമാസ സാമ്പത്തിക സഹായം (മഹിളാ ധനസഹായ പദ്ധതി)',
    },
    subLabelEn: 'Direct Monthly Bank Transfer for Women',
  },
  {
    value: 'Education & Girl Child Scholarship / Savings (Pudhumai Penn / Sukanya Samriddhi)',
    labels: {
      ta: 'கல்வி உதவித்தொகை & பெண் குழந்தை சேமிப்பு',
      en: 'Education Scholarship & Girl Child Savings',
      te: 'విద్యా స్కాలర్‌షిప్ & సుకన్య సమృద్ధి పొదుపు',
      hi: 'शिक्षा छात्रवृत्ति और सुकन्या समृद्धि बचत योजना',
      kn: 'ಶಿಕ್ಷಣ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ ಉಳಿತಾಯ',
      ml: 'വിദ്യാഭ്യാസ സ്കോളർഷിപ്പും സുകന്യ സമൃദ്ധി സമ്പാദ്യവും',
    },
    subLabelEn: 'College Stipend & Girl Child High-Interest Savings',
  },
  {
    value: 'Small Business / Tailoring / Shop Loan (PM Mudra / Lakhpati Didi SHG)',
    labels: {
      ta: 'சுயதொழில் / தையல் / கடை வைக்க கடன் உதவி (Mudra Loan)',
      en: 'Business / Tailoring / Shop Loan (PM Mudra / SHG)',
      te: 'స్వయం ఉపాధి / కుట్టు మిషన్ / వ్యాపార రుణం (Mudra Loan)',
      hi: 'स्वरोजगार / सिलाई / दुकान के लिए मुद्रा लोन (Mudra Loan)',
      kn: 'ಸ್ವಉದ್ಯೋಗ / ಹೊಲಿಗೆ / ಅಂಗಡಿ ಸಾಲ (Mudra Loan)',
      ml: 'സ്വയംതൊഴിൽ / തയ്യൽ / മുദ്ര ബാങ്ക് വായ്പ (Mudra Loan)',
    },
    subLabelEn: 'Collateral-Free Micro Enterprise Loan',
  },
  {
    value: 'Pregnancy & Maternity Financial Help (PM Matru Vandana Yojana)',
    labels: {
      ta: 'கர்ப்பிணிப் பெண்கள் மகப்பேறு நிதியுதவி (ரூ.5,000+)',
      en: 'Pregnancy & Maternity Cash Benefit (PMMVY)',
      te: 'గర్భిణీ స్త్రీల ప్రసూతి ఆర్థిక సహాయం (PMMVY ₹5,000+)',
      hi: 'गर्भवती महिला मातृत्व सहायता राशि (PMMVY ₹5,000+)',
      kn: 'ಗರ್ಭಿಣಿಯರಿಗೆ ಮಾತೃತ್ವ ಸಹಾಯಧನ (PMMVY ₹5,000+)',
      ml: 'ഗർഭിണികൾക്കുള്ള മാതൃത്വ ധനസഹായം (PMMVY ₹5,000+)',
    },
    subLabelEn: 'Maternity Nutrition & Cash Incentive',
  },
  {
    value: 'Free Cooking Gas (PM Ujjwala LPG) & Household Support',
    labels: {
      ta: 'இலவச சமையல் எரிவாயு (LPG Gas) & வீட்டு உதவி',
      en: 'Free Cooking Gas (PM Ujjwala LPG) & Household Support',
      te: 'ఉచిత వంట గ్యాస్ కనెక్షన్ (PM Ujjwala LPG)',
      hi: 'मुफ्त रसोई गैस सिलेंडर कनेक्शन (PM Ujjwala LPG)',
      kn: 'ಉಚಿತ ಅಡುಗೆ ಗ್ಯಾಸ್ ಸಂಪರ್ಕ (PM Ujjwala LPG)',
      ml: 'സൗജന്യ പാചകവാതക കണക്ഷൻ (PM Ujjwala LPG)',
    },
    subLabelEn: 'Free LPG Cylinder, Stove & Subsidy',
  },
  {
    value: 'Farming & Agriculture Support (PM-KISAN Rs. 6,000 Yearly)',
    labels: {
      ta: 'விவசாயக் குடும்ப நிதியுதவி (பி.எம். கிசான் ரூ.6,000)',
      en: 'Agriculture & Farmer Support (PM-KISAN Rs. 6,000)',
      te: 'రైతు కుటుంబ ఆర్థిక సహాయం (PM-KISAN ఏడాదికి ₹6,000)',
      hi: 'किसान परिवार आर्थिक सहायता (PM-KISAN ₹6,000 वार्षिक)',
      kn: 'ರೈತ ಕುಟುಂಬದ ಆರ್ಥಿಕ ನೆರವು (PM-KISAN ವಾರ್ಷಿಕ ₹6,000)',
      ml: 'കർഷക കുടുംബ ധനസഹായം (PM-KISAN പ്രതിവർഷം ₹6,000)',
    },
    subLabelEn: 'Rs. 6,000 Annual Direct Benefit for Farmers',
  },
  {
    value: 'Widow or Senior Citizen Monthly Pension (IGNOAPS / IGNWPS)',
    labels: {
      ta: 'விதவை அல்லது முதியோர் மாதாந்திர ஓய்வூதியம் (Pension)',
      en: 'Widow or Senior Citizen Monthly Pension',
      te: 'వితంతు లేదా వృద్ధాప్య నెలవారీ పెన్షన్ (Pension)',
      hi: 'विधवा या वृद्धावस्था मासिक पेंशन योजना (Pension)',
      kn: 'ವಿಧವಾ ಅಥವಾ ವೃದ್ಧಾಪ್ಯ ಮಾಸಿಕ ಪಿಂಚಣಿ (Pension)',
      ml: 'വിധവ / വാർദ്ധക്യകാല പ്രതിമാസ പെൻഷൻ (Pension)',
    },
    subLabelEn: 'Monthly Social Security Pension',
  },
];

const STEP_QUESTIONS: Record<
  number,
  {
    title: Record<Language, string>;
    voice: Record<Language, string>;
    enSubtitle: string;
  }
> = {
  1: {
    title: {
      ta: '1. உங்கள் வயது என்ன?',
      en: '1. What is your age?',
      te: '1. మీ వయస్సు ఎంత?',
      hi: '1. आपकी उम्र क्या है?',
      kn: '1. ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?',
      ml: '1. നിങ്ങളുടെ പ്രായം എത്രയാണ്?',
    },
    voice: {
      ta: 'முதல் கேள்வி: உங்கள் வயது என்ன? கீழே உள்ள பட்டன்களில் உங்கள் வயதைத் தொடவும்.',
      en: 'Question 1: What is your age? Please tap your age group below.',
      te: 'మొదటి ప్రశ్న: మీ వయస్సు ఎంత? క్రింది బటన్లలో మీ వయస్సును ఎంచుకోండి.',
      hi: 'पहला सवाल: आपकी उम्र क्या है? कृपया नीचे अपनी आयु चुनें।',
      kn: 'ಮೊದಲ ಪ್ರಶ್ನೆ: ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು? ಕೆಳಗಿನ ಬಟನ್‌ಗಳಲ್ಲಿ ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ಆರಿಸಿ.',
      ml: 'ആദ്യ ചോദ്യം: നിങ്ങളുടെ പ്രായം എത്രയാണ്? താഴെയുള്ള ബട്ടണുകളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക.',
    },
    enSubtitle: '1. What is your age?',
  },
  2: {
    title: {
      ta: '2. நீங்கள் எந்த மாநிலத்தில் வசிக்கிறீர்கள்?',
      en: '2. Which state do you live in?',
      te: '2. మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?',
      hi: '2. आप किस राज्य में रहती हैं?',
      kn: '2. ನೀವು ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದೀರಿ?',
      ml: '2. നിങ്ങൾ ഏത് സംസ്ഥാനത്താണ് താമസിക്കുന്നത്?',
    },
    voice: {
      ta: 'இரண்டாவது கேள்வி: நீங்கள் எந்த மாநிலத்தில் வசிக்கிறீர்கள்?',
      en: 'Question 2: Which state do you live in? Please select your state.',
      te: 'రెండవ ప్రశ్న: మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?',
      hi: 'दूसरा सवाल: आप किस राज्य में रहती हैं?',
      kn: 'ಎರಡನೇ ಪ್ರಶ್ನೆ: ನೀವು ಯಾವ ರಾಜ್ಯದಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದೀರಿ?',
      ml: 'രണ്ടാമത്തെ ചോദ്യം: നിങ്ങൾ ഏത് സംസ്ഥാനത്താണ് താമസിക്കുന്നത്?',
    },
    enSubtitle: '2. Which state do you live in?',
  },
  3: {
    title: {
      ta: '3. நீங்கள் மாணவியா, தொழிலாளியா, விவசாயியா, இல்லத்தரசியா அல்லது சுயதொழில் செய்பவரா?',
      en: '3. Are you a student, worker, farmer, homemaker or entrepreneur?',
      te: '3. మీరు విద్యార్థినినా, కార్మికురాలా, రైతా, గృహిణినా లేక స్వయం ఉపాధి చేసేవారా?',
      hi: '3. क्या आप छात्रा, श्रमिक, किसान, गृहिणी या उद्यमी हैं?',
      kn: '3. ನೀವು ವಿದ್ಯಾರ್ಥಿನಿ, ಕಾರ್ಮಿಕರು, ರೈತರು, ಗೃಹಿಣಿ ಅಥವಾ ಸ್ವಉದ್ಯೋಗಿಯೇ?',
      ml: '3. നിങ്ങൾ വിദ്യാർത്ഥിനിയോ, തൊഴിലാളിയോ, കർഷകയോ, വീട്ടമ്മയോ അതോ സ്വയംതൊഴിൽ ചെയ്യുന്നയാളോ?',
    },
    voice: {
      ta: 'மூன்றாவது கேள்வி: நீங்கள் மாணவியா, கூலித் தொழிலாளியா, விவசாயியா, இல்லத்தரசியா அல்லது சுயதொழில் செய்பவரா?',
      en: 'Question 3: Are you a student, worker, farmer, homemaker, or entrepreneur?',
      te: 'మూడవ ప్రశ్న: మీరు విద్యార్థినినా, కార్మికురాలా, రైతా, గృహిణినా లేక స్వయం ఉపాధి చేసేవారా?',
      hi: 'तीसरा सवाल: क्या आप छात्रा, श्रमिक, किसान, गृहिणी या स्वरोजगार करने वाली महिला हैं?',
      kn: 'ಮೂರನೇ ಪ್ರಶ್ನೆ: ನೀವು ವಿದ್ಯಾರ್ಥಿನಿ, ಕಾರ್ಮಿಕರು, ರೈತರು, ಗೃಹಿಣಿ ಅಥವಾ ಸ್ವಉದ್ಯೋಗಿಯೇ?',
      ml: 'മൂന്നാമത്തെ ചോദ്യം: നിങ്ങൾ വിദ്യാർത്ഥിനിയോ, തൊഴിലാളിയോ, കർഷകയോ, വീട്ടമ്മയോ അതോ സ്വയംതൊഴിൽ ചെയ്യുന്നയാളോ?',
    },
    enSubtitle: '3. Are you a student, worker, farmer, homemaker or entrepreneur?',
  },
  4: {
    title: {
      ta: '4. உங்களுக்கு என்ன வகையான அரசு உதவி தேவை?',
      en: '4. What type of government help do you need?',
      te: '4. మీకు ఏ రకమైన ప్రభుత్వ సహాయం కావాలి?',
      hi: '4. आपको किस प्रकार की सरकारी सहायता चाहिए?',
      kn: '4. ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಸರ್ಕಾರಿ ಸಹಾಯ ಬೇಕು?',
      ml: '4. നിങ്ങൾക്ക് ഏത് തരത്തിലുള്ള സർക്കാർ സഹായമാണ് വേണ്ടത്?',
    },
    voice: {
      ta: 'நான்காவது கேள்வி: உங்களுக்கு என்ன வகையான அரசு உதவி தேவை? கீழே உள்ளவற்றில் ஒன்றைத் தொடவும்.',
      en: 'Question 4: What type of government help do you need? Tap one option below.',
      te: 'నాలుగవ ప్రశ్న: మీకు ఏ రకమైన ప్రభుత్వ సహాయం కావాలి? క్రింది వాటిలో ఒకదాన్ని ఎంచుకోండి.',
      hi: 'चौथा सवाल: आपको किस प्रकार की सरकारी सहायता चाहिए? नीचे दिए गए विकल्पों में से एक चुनें।',
      kn: 'ನಾಲ್ಕನೇ ಪ್ರಶ್ನೆ: ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಸರ್ಕಾರಿ ಸಹಾಯ ಬೇಕು? ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಸ್ಪರ್ಶಿಸಿ.',
      ml: 'നാലാമത്തെ ചോദ്യം: നിങ്ങൾക്ക് ഏത് തരത്തിലുള്ള സർക്കാർ സഹായമാണ് വേണ്ടത്?',
    },
    enSubtitle: '4. What type of government help do you need?',
  },
};

export const GuidedModeSection: React.FC<GuidedModeSectionProps> = ({
  language,
  onCompleteGuided,
  isLoading,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [step, setStep] = useState<number>(1);
  const [age, setAge] = useState<string>('');
  const [stateName, setStateName] = useState<string>('Tamil Nadu (தமிழ்நாடு)');
  const [occupation, setOccupation] = useState<string>('');
  const [helpType, setHelpType] = useState<string>('');
  const [speakingStep, setSpeakingStep] = useState<boolean>(false);

  const t = UI_TRANSLATIONS[language];
  const langConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const currentQ = STEP_QUESTIONS[step];

  const handleReadStepQuestion = () => {
    const textToSpeak = currentQ.voice[language] || currentQ.voice.ta;
    speakText(
      textToSpeak,
      langConfig.speechLocale,
      () => setSpeakingStep(true),
      () => setSpeakingStep(false),
      () => setSpeakingStep(false)
    );
  };

  const handleReset = () => {
    setStep(1);
    setAge('');
    setStateName('Tamil Nadu (தமிழ்நாடு)');
    setOccupation('');
    setHelpType('');
  };

  const renderOptionGrid = (
    options: MultilingualOption[],
    selectedVal: string,
    onSelect: (val: string) => void,
    isFinalStep = false
  ) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => {
        const selected = selectedVal === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={`min-h-[68px] p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
              selected
                ? 'bg-[#FFF7ED] border-2 border-[#9A3412] text-[#1C1917]'
                : 'bg-white border-[#E7E2DA] hover:border-[#9A3412]/50 text-[#1C1917]'
            }`}
          >
            <div>
              <p className="font-bold text-base sm:text-lg leading-snug">
                {opt.labels[language]}
              </p>
              {language !== 'en' && (
                <p className="text-sm text-[#57534E] mt-0.5">{opt.subLabelEn}</p>
              )}
            </div>
            {isFinalStep && selected ? (
              <CheckCircle2 className="w-6 h-6 text-[#9A3412] shrink-0" />
            ) : (
              <ArrowRight className="w-5 h-5 text-[#9A3412] shrink-0" />
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      id="guided-section"
      aria-labelledby="guided-heading"
      className="bg-white/95 backdrop-blur-xs rounded-3xl border border-[#E7E2DA] p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E2DA]">
        <div>
          <p className="text-xs font-semibold text-[#9A3412] tracking-wide">{t.guidedKicker}</p>
          <h2 id="guided-heading" className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-1">
            {t.guidedTitle}
          </h2>
          <p className="text-base text-[#57534E] mt-1">{t.guidedSubtext}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setStep(1);
          }}
          className="min-h-[52px] px-5 py-3 rounded-2xl bg-[#9A3412] text-white font-semibold text-base flex items-center justify-center gap-2.5 hover:bg-[#7C2D12] active:scale-[0.99] transition-all shrink-0 cursor-pointer"
        >
          <Compass className="w-5 h-5 shrink-0" />
          <span className="whitespace-nowrap">I don&apos;t know what to ask</span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-6">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2 flex-1">
              {[1, 2, 3, 4].map((idx) => {
                const isCompleted =
                  (idx === 1 && Boolean(age)) ||
                  (idx === 2 && Boolean(stateName) && step > 2) ||
                  (idx === 3 && Boolean(occupation)) ||
                  (idx === 4 && Boolean(helpType));
                const isCurrent = step === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setStep(idx)}
                    className={`flex-1 min-h-[44px] rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 border transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-[#9A3412] text-white border-[#9A3412]'
                        : isCompleted
                        ? 'bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]'
                        : 'bg-[#FAF8F5] text-[#57534E] border-[#E7E2DA]'
                    }`}
                  >
                    <span className="tabular-nums">#{idx}</span>
                    {isCompleted && !isCurrent && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleReset}
              title="Reset answers"
              className="min-h-[44px] px-3 rounded-xl border border-[#E7E2DA] text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5] text-sm font-medium flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline whitespace-nowrap">{t.startOverBtn}</span>
            </button>
          </div>

          {/* Current Question Box */}
          <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#E7E2DA]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-semibold text-[#9A3412] tabular-nums">
                  Step {step} / 4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] mt-0.5">
                  {currentQ.title[language]}
                </h3>
                {language !== 'en' && (
                  <p className="text-sm font-medium text-[#57534E]">{currentQ.enSubtitle}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleReadStepQuestion}
                className="min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-[#D6D0C4] text-[#1C1917] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#F3EFE6] transition-colors shrink-0 cursor-pointer"
              >
                <Volume2
                  className={`w-5 h-5 text-[#9A3412] ${speakingStep ? 'animate-pulse' : ''}`}
                />
                <span className="whitespace-nowrap">{t.listenQuestionBtn}</span>
              </button>
            </div>

            {/* Step 1: Age */}
            {step === 1 &&
              renderOptionGrid(AGE_OPTIONS, age, (val) => {
                setAge(val);
                setStep(2);
              })}

            {/* Step 2: State */}
            {step === 2 &&
              renderOptionGrid(STATE_OPTIONS, stateName, (val) => {
                setStateName(val);
                setStep(3);
              })}

            {/* Step 3: Occupation */}
            {step === 3 &&
              renderOptionGrid(OCCUPATION_OPTIONS, occupation, (val) => {
                setOccupation(val);
                setStep(4);
              })}

            {/* Step 4: Type of Government Help Needed */}
            {step === 4 && (
              <div className="space-y-4">
                {renderOptionGrid(
                  HELP_TYPE_OPTIONS,
                  helpType,
                  (val) => setHelpType(val),
                  true
                )}

                <div className="pt-4 border-t border-[#E7E2DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm text-[#57534E] space-y-0.5">
                    <p>
                      <strong className="text-[#1C1917]">{t.selectedAnswersLabel}</strong>{' '}
                      {age ? age.split('(')[0] : '18–35 yrs'} · {stateName.split('(')[0]} ·{' '}
                      {occupation ? occupation.split('(')[0] : 'Woman'}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={!helpType || isLoading}
                    onClick={() => {
                      onCompleteGuided({
                        age: age || AGE_OPTIONS[1].value,
                        state: stateName || STATE_OPTIONS[0].value,
                        occupation: occupation || OCCUPATION_OPTIONS[0].value,
                        helpType,
                      });
                    }}
                    className="min-h-[56px] px-6 py-3.5 rounded-2xl bg-[#15803D] hover:bg-[#166534] disabled:bg-[#D6D0C4] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:cursor-not-allowed"
                  >
                    <Sparkles className="w-5 h-5 shrink-0" />
                    <span className="whitespace-nowrap">
                      {isLoading ? t.askingSakhiBtn : t.showMySchemesBtn}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Step Navigation Footer */}
            <div className="mt-5 pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
              <button
                type="button"
                disabled={step === 1}
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-white border border-[#E7E2DA] text-[#1C1917] disabled:opacity-40 font-semibold text-sm flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.prevQuestionBtn}</span>
              </button>

              {step < 4 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-[#9A3412] text-white font-semibold text-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.nextQuestionBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
