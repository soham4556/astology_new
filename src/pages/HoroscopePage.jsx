import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Star, Zap, Heart, Shield, HelpCircle, Lightbulb } from "lucide-react";
import { RASHI_DATA, DAILY_TIPS } from "../utils/constants";
import { HOROSCOPE_SYSTEM_2026 } from "../utils/astrologyData";

export default function HoroscopePage() {
  const { language } = useLanguage();
  const dayOfMonth = new Date().getDate();
  const todayTip = DAILY_TIPS.find(t => t.day === dayOfMonth) || DAILY_TIPS[0];

  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  const todayDate = new Date().toLocaleDateString(language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("दैनिक राशीभविष्य | जय माता दी ज्योतिष", "दैनिक राशिफल | जय माता दी ज्योतिष", "Daily Horoscope | Jai Mata Di Astrology")}
        description={pick("तुमच्या राशीनुसार आजचे भविष्य जाणून घ्या आणि दिवसाचे नियोजन करा।", "अपनी राशि के अनुसार आज का भविष्य जानें और दिन की योजना बनाएं।", "Know today's forecast according to your zodiac and plan your day.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Zodiac Forecast</span>
            <h1>{pick("दैनिक राशीभविष्य", "दैनिक राशिफल", "Daily Horoscope")}</h1>
            <p className="subtitle">{pick("तुमच्या राशीतील ग्रहांची स्थिती आज काय सांगते?।", "आपकी राशि के ग्रहों की स्थिति आज क्या कहती है?।", "What do the planets in your zodiac say today?")}</p>
          </div>
        </div>
      </section>

      <section className="daily-insights-banner">
        <div className="container">
          <div className="insights-card glass-card">
             <div className="date-info">
                <span className="label">{pick("आजचे राशी-ऊर्जा:", "आज की राशि-ऊर्जा:", "Today's Zodiac Energy:")}</span>
                <span className="value">{todayDate}</span>
             </div>
             <div className="energy-info">
                <div className="energy-icon-wrap">
                   <Sparkles className="icon pulse" />
                   <span>{pick("ग्रहांची स्थिती:", "ग्रहों की स्थिति:", "Planetary State:")} <strong>{todayTip.energy}</strong></span>
                </div>
                <p className="daily-tip">"{todayTip.tip[language]}"</p>
             </div>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="rashi-selection-grid">
             {RASHI_DATA.map((rashi) => {
                const transit = HOROSCOPE_SYSTEM_2026[rashi.key] || { focus: { mr: "प्रगती", hi: "प्रगति", en: "Progress" } };
                return (
                  <div key={rashi.key} className="rashi-mini-card">
                     <span className="rashi-symbol">{rashi.symbol}</span>
                     <h3>{rashi.name[language]}</h3>
                     <p className="rashi-transit-focus"><strong>Focus:</strong> {transit.focus[language]}</p>
                     <p className="rashi-element">{rashi.traits[language].split(',')[0]} ...</p>
                     <Link to="/contact" className="btn-rashi-check">Check Detailed View</Link>
                  </div>
                );
             })}
          </div>

          <div className="info-main-grid" style={{ marginTop: '50px' }}>
            <div className="info-content-rich">
              <h2>{pick("राशीभविष्य: नक्षत्रांचे गुपित", "राशिफल: नक्षत्रों का रहस्य", "Horoscope: Secrets of the Stars")}</h2>
              <p>
                {pick(
                  "प्रत्येक मनुष्याचा जन्म एका विशिष्ट नक्षत्रात आणि राशीत होतो. ही रास म्हणजे केवळ एक चिन्ह नसून ती आपल्या व्यक्तिमत्वाचा, स्वभावाचा आणि भविष्याचा आरसा असते. भारतीय ज्योतिषशास्त्रात चंद्राच्या राशीला (Moon Sign) अत्यंत महत्त्व दिले जाते.",
                  "प्रत्येक मनुष्य का जन्म एक विशिष्ट नक्षत्र और राशि में होता है। यह राशि केवल एक चिन्ह नहीं है, बल्कि यह हमारे व्यक्तित्व, स्वभाव और भविष्य का दर्पण है। भारतीय ज्योतिष में चंद्र राशि (Moon Sign) को अत्यंत महत्व दिया जाता है।",
                  "Every human is born under a specific constellation and zodiac sign. This sign is not just a symbol; it is a mirror of our personality, nature, and future. In Indian astrology, the Moon Sign is given paramount importance."
                )}
              </p>

              <div className="zodiac-deep-dive">
                <h3>{pick("राशींचे वर्गीकरण आणि प्रभाव", "राशियों का वर्गीकरण और प्रभाव", "Classification and Influence of Signs")}</h3>
                <div className="zodiac-elements-grid">
                  <div className="element-card fire">
                    <h4>{pick("अग्नी तत्व (Fire)", "अग्नि तत्व (Fire)", "Fire Element")}</h4>
                    <p><strong>{pick("राशी:", "राशियाँ:", "Signs:")}</strong> {pick("मेष, सिंह, धनु", "मेष, सिंह, धनु", "Aries, Leo, Sagittarius")}</p>
                    <p>{pick("हे जातक उत्साही, साहसी आणि नेतृत्वात निपुण असतात.", "ये जातक उत्साही, साहसी और नेतृत्व में निपुण होते हैं।", "Enthusiastic, bold, and natural leaders.")}</p>
                  </div>
                  <div className="element-card earth">
                    <h4>{pick("पृथ्वी तत्व (Earth)", "पृथ्वी तत्व (Earth)", "Earth Element")}</h4>
                    <p><strong>{pick("राशी:", "राशियाँ:", "Signs:")}</strong> {pick("वृषभ, कन्या, मकर", "वृषभ, कन्या, मकर", "Taurus, Virgo, Capricorn")}</p>
                    <p>{pick("हे जातक व्यावहारिक, संयमी आणि कष्टाळू असतात.", "ये जातक व्यावहारिक, संयमी और मेहनती होते हैं।", "Practical, patient, and hardworking.")}</p>
                  </div>
                  <div className="element-card air">
                    <h4>{pick("वायू तत्व (Air)", "वायु तत्व (Air)", "Air Element")}</h4>
                    <p><strong>{pick("राशी:", "राशियाँ:", "Signs:")}</strong> {pick("मिथुन, तुला, कुंभ", "मिथुन, तुला, कुंभ", "Gemini, Libra, Aquarius")}</p>
                    <p>{pick("हे जातक बुद्धिमान, संवादकुशल आणि कल्पक असतात.", "ये जातक बुद्धिमान, संवादकुशल और कल्पनाशील होते हैं।", "Intellectual, communicative, and creative.")}</p>
                  </div>
                  <div className="element-card water">
                    <h4>{pick("जल तत्व (Water)", "जल तत्व (Water)", "Water Element")}</h4>
                    <p><strong>{pick("राशी:", "राशियाँ:", "Signs:")}</strong> {pick("कर्क, वृश्चिक, मीन", "कर्क, वृश्चिक, मीन", "Cancer, Scorpio, Pisces")}</p>
                    <p>{pick("हे जातक हळवे, अंतर्ज्ञानी आणि काळजीवाहू असतात.", "ये जातक भावुक, अंतर्ज्ञानी और देखभाल करने वाले होते हैं।", "Sensitive, intuitive, and nurturing.")}</p>
                  </div>
                </div>
              </div>

              <div className="detailed-explanation">
                <h3>{pick("ग्रह आणि राशींचा संबंध", "ग्रह और राशियों का संबंध", "Relationship between Planets & Zodiacs")}</h3>
                <p>
                  {pick(
                    "प्रत्येक राशीचा एक मालक ग्रह (Ruling Planet) असतो. उदाहरणार्थ, मंगळ हा मेष राशीचा स्वामी आहे, तर शुक्र हा वृषभ आणि तुला राशीचा स्वामी आहे. ग्रहांच्या गोचरामुळे (Transit) आपल्या राशीवर शुभ किंवा अशुभ परिणाम होतात.",
                    "प्रत्येक राशि का एक स्वामी ग्रह (Ruling Planet) होता है। उदाहरण के लिए, मंगल मेष राशि का स्वामी है, जबकि शुक्र वृषभ और तुला राशि का स्वामी है। ग्रहों के गोचर (Transit) के कारण हमारी राशि पर शुभ या अशुभ प्रभाव पड़ते हैं।",
                    "Each zodiac sign has a ruling planet. For instance, Mars rules Aries, while Venus rules Taurus and Libra. The transit of these planets brings auspicious or inauspicious effects on our lives."
                  )}
                </p>

                <h4>{pick("भविष्य कसे पाहावे?", "भविष्य कैसे देखें?", "How to check your future?")}</h4>
                <ul className="rich-bullet-list">
                  <li>{pick("आपली जन्म रास (Moon Sign) काय आहे हे जाणून घ्या.", "अपनी जन्म राशि (Moon Sign) क्या है, यह जानें।", "Know your birth sign (Moon Sign).")}</li>
                  <li>{pick("दैनंदिन ग्रहांच्या भ्रमणाची स्थिती तपासा.", "दैनिक ग्रहों के भ्रमण की स्थिति की जांच करें।", "Check the daily transit of planets.")}</li>
                  <li>{pick("अष्टकवर्ग आणि विंशोत्तरी दशा यांचे महत्त्व लक्षात घ्या.", "अष्टकवर्ग और विंशोत्तरी दशा के महत्व को समझें।", "Understand the importance of Ashtakvarga and Vimshottari Dasha.")}</li>
                </ul>

                <div className="highlight-box">
                   <h5>{pick("महत्वाची टीप", "महत्वपूर्ण नोट", "Important Note")}</h5>
                   <p>{pick("राशीभविष्य हे सामान्य मार्गदर्शनासाठी असते. पूर्णतः खात्रीशीर उत्तरासाठी स्वतःच्या वैयक्तिक जन्मकुंडलीचे विश्लेषण करणे आवश्यक आहे.", "राशिफल सामान्य मार्गदर्शन के लिए होता है। पूरी तरह से सटीक उत्तर के लिए अपनी व्यक्तिगत जन्म कुंडली का विश्लेषण करना आवश्यक है।", "Horoscope is for general guidance. For precise answers, analyzing your individual birth chart is essential.")}</p>
                </div>

                <h3>{pick("नेहमी विचारले जाणारे प्रश्न (FAQ)", "अक्सर पूछे जाने वाले प्रश्न", "Frequently Asked Questions")}</h3>
                <div className="faq-grid">
                  <div className="faq-item">
                    <h5>{pick("सूर्य रास आणि चंद्र रास यात काय फरक आहे?", "सूर्य राशि और चंद्र राशि में क्या अंतर है?", "Difference between Sun Sign and Moon Sign?")}</h5>
                    <p>{pick("सूर्य रास आत्म्याचे प्रतीक आहे, तर चंद्र रास मनाचे आणि भावनांचे प्रतीक आहे. भारतीय ज्योतिषशास्त्रात चंद्र राशीला प्राधान्य दिले जाते.", "सूर्य राशि आत्मा का प्रतीक है, जबकि चंद्र राशि मन और भावनाओं का प्रतीक है। भारतीय ज्योतिष में चंद्र राशि को प्राथमिकता दी जाती है।", "Sun Sign represents the soul, while Moon Sign represents the mind and emotions. Indian astrology prioritizes the Moon Sign.")}</p>
                  </div>
                  <div className="faq-item">
                    <h5>{pick("दैनिक राशीभविष्य रोज पाहावे का?", "क्या दैनिक राशिफल रोज देखना चाहिए?", "Should I check daily horoscope?")}</h5>
                    <p>{pick("हो, यामुळे तुम्हाला तुमच्या दिवसाचे अचूक नियोजन करण्यास मदत मिळते.", "हाँ, इससे आपको अपने दिन की सटीक योजना बनाने में मदद मिलती है।", "Yes, it helps you plan your day more effectively.")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="info-sidebar">
               <div className="sticky-cta-card">
                  <h4 style={{ color: '#f0c040', marginBottom: '15px' }}>{pick("वैयक्तिक भविष्य", "व्यक्तिगत भविष्य", "Personal Forecast")}</h4>
                  <p style={{ color: '#f5eeff', opacity: 1 }}>{pick("सामान्य राशीभविष्यापेक्षा तुमच्या स्वतःच्या कुंडलीनुसार अधिक अचूक भविष्य जाणून घ्या।", "सामान्य राशिफल से अधिक सटीक अपनी कुंडली के अनुसार भविष्य जानें।", "Get more accurate insights based on your own birth chart than general horoscopes.")}</p>
                  <Link to="/contact" className="btn-sidebar">Get Detailed Analysis</Link>

                  <div className="sidebar-tips" style={{ marginTop: '20px' }}>
                     <h5>{pick("आजचा मंत्र", "आज का मंत्र", "Today's Mantra")}</h5>
                     <p><em>"ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः"</em></p>
                     <p>{pick("हा मंत्र म्हटल्याने मन शांत राहते आणि कामात यश मिळते.", "इस मंत्र का जाप करने से मन शांत रहता है और कार्यों में सफलता मिलती है।", "Chanting this mantra keeps the mind calm and brings success in work.")}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

