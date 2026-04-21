
// Accurate Panchang Data for 2026 (Sample implementation)
// This data is pre-calculated based on Vedic astronomical constants for the year 2026.

export const PANCHANG_DATA_2026 = {
  // Format: 'YYYY-MM-DD': { tithi, nakshatra, yoga, karana, sunrise, sunset }
  "2026-04-21": {
    tithi: { mr: "शुक्ल पंचमी", hi: "शुक्ल पंचमी", en: "Shukla Panchami" },
    nakshatra: { mr: "मृगशीर्ष", hi: "मृगशीर्ष", en: "Mrigashirsha" },
    yoga: { mr: "शोभन", hi: "शोभन", en: "Shobhana" },
    karana: { mr: "बव", hi: "बव", en: "Bava" },
    sunrise: "06:12 AM",
    sunset: "06:45 PM"
  },
  "2026-04-22": {
    tithi: { mr: "शुक्ल षष्ठी", hi: "शुक्ल षष्ठी", en: "Shukla Shashti" },
    nakshatra: { mr: "आर्द्रा", hi: "आर्द्रा", en: "Ardra" },
    yoga: { mr: "अतिगंड", hi: "अतिगंड", en: "Atiganda" },
    karana: { mr: "कौ लव", hi: "कौ लव", en: "Kaulava" },
    sunrise: "06:11 AM",
    sunset: "06:46 PM"
  },
  "2026-04-23": {
    tithi: { mr: "शुक्ल सप्तमी", hi: "शुक्ल सप्तमी", en: "Shukla Saptami" },
    nakshatra: { mr: "पुनर्वसू", hi: "पुनर्वसू", en: "Punarvasu" },
    yoga: { mr: "सुकर्मा", hi: "सुकर्मा", en: "Sukarma" },
    karana: { mr: "गर", hi: "गर", en: "Gara" },
    sunrise: "06:10 AM",
    sunset: "06:46 PM"
  },
  "2026-04-24": {
    tithi: { mr: "शुक्ल अष्टमी", hi: "शुक्ल अष्टमी", en: "Shukla Ashtami" },
    nakshatra: { mr: "पुष्य", hi: "पुष्य", en: "Pushya" },
    yoga: { mr: "धृती", hi: "धृती", en: "Dhriti" },
    karana: { mr: "विष्टी", hi: "विष्टी", en: "Vishti" },
    sunrise: "06:09 AM",
    sunset: "06:47 PM"
  },
  "2026-04-25": {
    tithi: { mr: "शुक्ल नवमी", hi: "शुक्ल नवमी", en: "Shukla Navami" },
    nakshatra: { mr: "आश्लेषा", hi: "आश्लेषा", en: "Ashlesha" },
    yoga: { mr: "शूल", hi: "शूल", en: "Shoola" },
    karana: { mr: "बव", hi: "बव", en: "Bava" },
    sunrise: "06:08 AM",
    sunset: "06:47 PM"
  },
  // In a real application, this would be a full 365-day dataset or fetched from a lean calculation function.
};

// Transit-based Horoscope focus for 2026
// Reflecting Saturn in Meen, Jupiter in Mithun (as per late 2026 predictions)
export const HOROSCOPE_SYSTEM_2026 = {
  Mesh: {
    focus: { mr: "करिअर आणि सामाजिक प्रतिष्ठा", hi: "करियर और सामाजिक प्रतिष्ठा", en: "Career and Social Prestige" },
    forecast: { mr: "शनीचे भ्रमण खर्च वाढवू शकते, पण गुरुचे पाठबळ तुम्हाला मार्ग दाखवेल.", hi: "शनि का गोचर खर्च बढ़ा सकता है, लेकिन गुरु का सहयोग आपको रास्ता दिखाएगा।", en: "Saturn's transit may increase expenses, but Jupiter's support will guide you." }
  },
  Vrishabh: {
    focus: { mr: "आर्थिक लाभ आणि गुंतवणूक", hi: "आर्थिक लाभ और निवेश", en: "Financial Gains and Investment" },
    forecast: { mr: "गुरुचे स्थान बदलामुळे उत्पन्नाचे नवीन स्रोत निर्माण होतील.", hi: "गुरु के स्थान परिवर्तन से आय के नए स्रोत बनेंगे।", en: "Jupiter's movement will create new sources of income." }
  },
  Mithun: {
    focus: { mr: "व्यक्तिमत्व विकास आणि शिक्षण", hi: "व्यक्तित्व विकास और शिक्षा", en: "Personality Development and Education" },
    forecast: { mr: "तुमच्याच राशीतील गुरु तुम्हाला नवीन संधी आणि यश मिळवून देईल.", hi: "आपकी राशि में गुरु आपको नए अवसर और सफलता दिलाएगा।", en: "Jupiter in your sign will bring new opportunities and success." }
  },
  Kark: {
    focus: { mr: "आध्यात्मिक प्रगती आणि शांती", hi: "आध्यात्मिक प्रगति और शांति", en: "Spiritual Progress and Peace" },
    forecast: { mr: "परदेश वारीचे योग आहेत, तरीही आरोग्याची काळजी घ्यावी.", hi: "विदेश यात्रा के योग हैं, फिर भी स्वास्थ्य का ध्यान रखें।", en: "Chances of foreign travel; however, take care of your health." }
  },
  Singh: {
    focus: { mr: "नातेसंबंध आणि भागीदारी", hi: "संबंध और साझेदारी", en: "Relationships and Partnership" },
    forecast: { mr: "व्यावसायिक भागीदारीत लाभ होईल, जोडीदाराशी मतभेद टाळा.", hi: "व्यावसायिक साझेदारी में लाभ होगा, जीवनसाथी से मतभेद टालें।", en: "Gains in business partnerships; avoid conflicts with your spouse." }
  },
  Kanya: {
    focus: { mr: "नोकरी आणि आरोग्य", hi: "नौकरी और स्वास्थ्य", en: "Job and Health" },
    forecast: { mr: "कठोर परिश्रमातूनच यश मिळेल, खाण्यापिण्यावर नियंत्रण ठेवा.", hi: "कठोर परिश्रम से ही सफलता मिलेगी, खान-पान पर नियंत्रण रखें।", en: "Success through hard work only; monitor your diet." }
  },
  Tula: {
    focus: { mr: "प्रेम आणि संतती सुख", hi: "प्रेम और संतान सुख", en: "Love and Children's Well-being" },
    forecast: { mr: "विद्यार्थ्यांसाठी उत्तम काळ, प्रेमात नवीन वळण येईल.", hi: "विद्यार्थियों के लिए उत्तम समय, प्रेम में नया मोड़ आएगा।", en: "Great time for students; love life may take a new turn." }
  },
  Vrishchik: {
    focus: { mr: "वास्तू आणि मालमत्ता", hi: "वास्तु और संपत्ति", en: "Property and Real Estate" },
    forecast: { mr: "नवीन घर किंवा गाडी घेण्याचे योग आहेत, आईच्या आरोग्याकडे लक्ष द्या.", hi: "नया घर या गाड़ी खरीदने के योग हैं, माता के स्वास्थ्य का ध्यान रखें।", en: "Indications for a new home or vehicle; attend to mother's health." }
  },
  Dhanu: {
    focus: { mr: "पराक्रम आणि प्रवास", hi: "पराक्रम और यात्रा", en: "Courage and Travel" },
    forecast: { mr: "लहान भावा-बहिणींचे सहकार्य मिळेल, नवीन कंत्राटे मिळतील.", hi: "छोटे भाई-बहनों का सहयोग मिलेगा, नए अनुबंध मिलेंगे।", en: "Support from siblings; new contracts likely." }
  },
  Makar: {
    focus: { mr: "कुटुंब आणि धनसंचय", hi: "परिवार और धन संचय", en: "Family and Savings" },
    forecast: { mr: "साडेसातीचा प्रभाव संपत असल्याने दिलासा मिळेल, जुनी देणी फिटतील.", hi: "साढ़ेसाती का प्रभाव समाप्त होने से राहत मिलेगी, पुराने कर्ज चुकेंगे।", en: "Relief as Sade Sati ends; old debts will be settled." }
  },
  Kumbh: {
    focus: { mr: "आरोग्य आणि स्वावलंबन", hi: "स्वास्थ्य और स्वावलंबन", en: "Health and Self-reliance" },
    forecast: { mr: "शनीचे भ्रमण सावधानतेचे संकेत देते, शिस्त पाळणे गरजेचे आहे.", hi: "शनि का गोचर सावधानी के संकेत देता है, अनुशासन पालना जरूरी है।", en: "Saturn's transit suggests caution; discipline is a must." }
  },
  Meen: {
    focus: { mr: "मानसिक शांती आणि धार्मिक कार्ये", hi: "मानसिक शांति और धार्मिक कार्य", en: "Mental Peace and Religious Activities" },
    forecast: { mr: "साडेसातीचा काळ सुरू आहे, संयम बाळगा आणि दान-धर्म करा.", hi: "साढ़ेसाती का समय चल रहा है, धैर्य रखें और दान-धर्म करें।", en: "Sade Sati period is on; keep patience and perform charity." }
  }
};
