import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Sun, Moon, Cloud, Zap, Wind, Compass, ShieldCheck } from "lucide-react";
import { DAILY_TIPS } from "../utils/constants";
import { PANCHANG_DATA_2026 } from "../utils/astrologyData";

export default function PanchangPage() {
  const { language } = useLanguage();
  const now = new Date();
  const dayOfMonth = now.getDate();
  const dateKey = now.toISOString().split('T')[0]; // '2026-04-21'
  
  const todayTip = DAILY_TIPS.find(t => t.day === dayOfMonth) || DAILY_TIPS[0];
  const properData = PANCHANG_DATA_2026[dateKey];

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
        title={pick("दैनिक पंचांग | जय माता दी ज्योतिष", "दैनिक पंचांग | जय माता दी ज्योतिष", "Daily Panchang | Jai Mata Di Astrology")}
        description={pick("आजची तिथी, नक्षत्र, योग आणि शुभ मुहूर्त जाणून घेण्यासाठी आमचे पंचांग तपासा।", "आज की तिथि, नक्षत्र, योग और शुभ मुहूर्त जानने के लिए हमारा पंचांग देखें।", "Check our Panchang to know today's Tithi, Nakshatra, Yoga, and auspicious timings.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Vedic Calendar</span>
            <h1>{pick("दैनिक पंचांग", "दैनिक पंचांग", "Daily Panchang")}</h1>
            <p className="subtitle">{pick("वेळेचे शास्त्र आणि शुभ कार्यासाठी अचूक मुहूर्त।", "समय का विज्ञान और शुभ कार्यों के लिए सटीक मुहूर्त।", "The science of time and accurate muhurta for auspicious tasks.")}</p>
          </div>
        </div>
      </section>

      <section className="daily-insights-banner">
        <div className="container">
          <div className="insights-card glass-card">
             <div className="date-info">
                <span className="label">{pick("आजची तारीख:", "आज की तारीख:", "Today's Date:")}</span>
                <span className="value">{todayDate}</span>
             </div>
             <div className="energy-info">
                <div className="energy-icon-wrap">
                   <Zap className="icon pulse" />
                   <span>{pick("आजची ऊर्जा:", "आज की ऊर्जा:", "Today's Energy:")}{" "}
                   <strong>{properData ? "High" : todayTip.energy + "%"}</strong></span>
                </div>
                <p className="daily-tip">"{todayTip.tip[language]}"</p>
             </div>
             
             <div className="panchang-today-stats">
                <div className="stat-item">
                  <Moon className="icon" />
                  <div className="stat-content">
                    <span className="stat-label">{pick("तिथी", "तिथि", "Tithi")}</span>
                    <span className="stat-val">{properData ? properData.tithi[language] : todayTip.tithi[language]}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Cloud className="icon" />
                  <div className="stat-content">
                    <span className="stat-label">{pick("नक्षत्र", "नक्षत्र", "Nakshatra")}</span>
                    <span className="stat-val">{properData ? properData.nakshatra[language] : todayTip.nakshatra[language]}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Sun className="icon" />
                  <div className="stat-content">
                    <span className="stat-label">{pick("सूर्योदय", "सूर्योदय", "Sunrise")}</span>
                    <span className="stat-val">{properData ? properData.sunrise : "06:12 AM"}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Zap className="icon" />
                  <div className="stat-content">
                    <span className="stat-label">{pick("योग", "योग", "Yoga")}</span>
                    <span className="stat-val">{properData ? properData.yoga[language] : "शोभन"}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("पंचांग: वेळेचे सूक्ष्म शास्त्र", "पंचांग: समय का सूक्ष्म विज्ञान", "Panchang: The Subtle Science of Time")}</h2>
              <p>
                {pick(
                  "पंचांग हे केवळ कॅलेंडर नाही, तर ते विश्वातील ऊर्जेचा समतोल राखणारे एक साधन आहे. जेव्हा आपण पंचांग पाहतो, तेव्हा आपण पृथ्वी, चंद्र आणि सूर्य यांच्यातील संबंधांचा अभ्यास करत असतो.",
                  "पंचांग केवल एक कैलेंडर नहीं है, बल्कि यह ब्रह्मांड में ऊर्जा के संतुलन को बनाए रखने का एक साधन है। जब हम पंचांग देखते हैं, तो हम पृथ्वी, चंद्रमा और सूर्य के बीच के संबंधों का अध्ययन कर रहे होते हैं।",
                  "Panchang is not just a calendar; it is a tool that maintains the balance of cosmic energy. When we check the Panchang, we study the intricate relationship between Earth, Moon, and Sun."
                )}
              </p>

              <div className="panchang-deep-dive">
                <h3>{pick("पंचांगाची पाच मुख्य अंगे", "पंचांग के पांच मुख्य अंग", "Five Main Elements of Panchang")}</h3>
                <div className="deep-item">
                  <strong>१. {pick("तिथी (Tithi):", "तिथि (Tithi):", "Tithi:")}</strong>
                  <p>{pick("चंद्राच्या कलांनुसार बदलणारी तिथी. एका पक्षात १५ तिथी असतात. तिथी ही आपल्या मनाच्या अवस्थेवर परिणाम करते.", "चंद्रमा की कलाओं के अनुसार बदलने वाली तिथि। एक पक्ष में १५ तिथियां होती हैं। तिथि हमारी मनःस्थिति पर प्रभाव डालती है।", "The date based on lunar phases. There are 15 Tithis in a fortnight. Tithi influences our mental state.")}</p>
                </div>
                <div className="deep-item">
                  <strong>२. {pick("वार (Vara):", "वार (Vara):", "Vara:")}</strong>
                  <p>{pick("सात दिवस आणि सात ग्रह. प्रत्येक वाराचा एक अधिष्ठाता देव असतो, जो त्या दिवसाची ऊर्जा नियंत्रित करतो.", "सात दिन और सात ग्रह। प्रत्येक वार का एक अधिष्ठाता देव होता है, जो उस दिन की ऊर्जा को नियंत्रित करता है।", "Seven days and seven planets. Each day has a presiding deity controlling its energy.")}</p>
                </div>
                <div className="deep-item">
                  <strong>३. {pick("नक्षत्र (Nakshatra):", "नक्षत्र (Nakshatra):", "Nakshatra:")}</strong>
                  <p>{pick("आकाशातील २७ नक्षत्रांपैकी ज्या नक्षत्रात चंद्र असतो, त्याला त्या दिवसाचे नक्षत्र म्हणतात. हे आपल्या भाग्यावर परिणाम करते.", "आकाश के २७ नक्षत्रों में से जिस नक्षत्र में चंद्रमा होता है, उसे उस दिन का नक्षत्र कहते हैं। यह हमारे भाग्य पर प्रभाव डालता है।", "The constellation in which the Moon resides. It significantly impacts our fortune.")}</p>
                </div>
                <div className="deep-item">
                  <strong>४. {pick("योग (Yoga):", "योग (Yoga):", "Yoga:")}</strong>
                  <p>{pick("सूर्य आणि चंद्राच्या अंशांच्या बेरजेवरून योग ठरवला जातो. हे आरोग्यासाठी महत्त्वाचे मानले जाते.", "सूर्य और चंद्रमा के अंशों के योग से योग निर्धारित होता है। यह स्वास्थ्य के लिए महत्वपूर्ण माना जाता है।", "Calculated from the sum of solar and lunar longitudes. Crucial for health considerations.")}</p>
                </div>
                <div className="deep-item">
                  <strong>५. {pick("करण (Karana):", "करण (Karana):", "Karana:")}</strong>
                  <p>{pick("तिथीच्या अर्ध्या भागाला करण म्हणतात. हे कामांमधील अडथळे दूर करण्यासाठी पाहिले जाते.", "तिथि के आधे हिस्से को करण कहते हैं। इसे कार्यों की बाधाओं को दूर करने के लिए देखा जाता है।", "Half of a Tithi. It is analyzed to ensure smooth execution of tasks.")}</p>
                </div>
              </div>

              <div className="detailed-explanation">
                <h3>{pick("राहू काळ, गुलिका काळ आणि यमगंड", "राहु काल, गुलिका काल और यमगंड", "Rahu Kaal, Gulika Kaal & Yamaganda")}</h3>
                <p>
                  {pick(
                    "१. राहू काळ: या काळात कोणतेही नवीन कार्य टाळावे. २. गुलिका काळ: हा काळ प्रलंबित कामे पूर्ण करण्यासाठी शुभ मानला जातो. ३. यमगंड: हा काळ मृत्यूसमान मानला गेल्यामुळे महत्त्वाचे निर्णय टाळावेत.",
                    "१. राहु काल: इस काल में कोई भी नया कार्य टालना चाहिए। २. गुलिका काल: यह काल लंबित कार्यों को पूरा करने के लिए शुभ माना जाता है। ३. यमगंड: इस काल को मृत्युतुल्य माना गया है, इसलिए महत्वपूर्ण निर्णय टालने चाहिए।",
                    "1. Rahu Kaal: Avoid starting new tasks. 2. Gulika Kaal: Auspicious for finishing pending business. 3. Yamaganda: Inauspicious period; avoid major decisions."
                  )}
                </p>

                <h4>{pick("महत्वाचे सण आणि उपासना", "महत्वपूर्ण त्यौहार और उपासना", "Important Festivals & Rituals")}</h4>
                <p>
                  {pick(
                    "पंचांगानुसार प्रत्येक महिन्यातील चतुर्थी, एकादशी आणि पौर्णिमा या तिथींना अनन्यसाधारण महत्त्व आहे. संकष्टी चतुर्थीला गणेशाची, तर एकादशीला विष्णूची उपासना केल्यास विशेष फळ मिळते.",
                    "पंचांग के अनुसार प्रत्येक महीने की चतुर्थी, एकादशी और पूर्णिमा तिथियों का विशेष महत्व है। संकष्टी चतुर्थी पर गणेश और एकादशी पर विष्णु की उपासना से विशेष फल मिलता है।",
                    "According to Panchang, Chaturthi, Ekadashi, and Purnima hold immense significance. Rituals for Ganesha on Chaturthi and Vishnu on Ekadashi bring special blessings."
                  )}
                </p>

                <div className="knowledge-box">
                   <h5>{pick("वैज्ञानिक बाजू", "वैज्ञानिक पहलू", "Scientific Aspect")}</h5>
                   <p>{pick("भरती-ओहोटी, वनस्पतींची वाढ आणि मानवी स्वभाव यांचा चंद्राच्या स्थितीशी थेट संबंध असतो. पंचांग हे या खगोलीय घटनांचे गणितीय स्वरूप आहे.", "ज्वार-भाटा, पौधों की वृद्धि और मानवीय स्वभाव का चंद्रमा की स्थिति से सीधा संबंध होता है। पंचांग इन खगोलीय घटनाओं का गणितीय रूप है।", "Tides, plant growth, and human emotions are directly linked to the Moon's position. Panchang is the mathematical representation of these celestial phenomena.")}</p>
                </div>

                <h3>{pick("नेहमी विचारले जाणारे प्रश्न (FAQ)", "अक्सर पूछे जाने वाले प्रश्न", "Frequently Asked Questions")}</h3>
                <div className="faq-grid">
                  <div className="faq-item">
                    <h5>{pick("अमावस्या अशुभ का मानली जाते?", "अमावस्या को अशुभ क्यों माना जाता है?", "Why is Amavasya considered inauspicious?")}</h5>
                    <p>{pick("अमावस्येला चंद्राचा प्रकाश नसल्यामुळे मानसिक ऊर्जा कमी असते, म्हणून महत्त्वाची कार्ये टाळली जातात.", "अमावस्या को चंद्रमा का प्रकाश न होने से मानसिक ऊर्जा कम होती है, इसलिए महत्वपूर्ण कार्य टाले जाते हैं।", "Lack of lunar light leads to low mental energy, hence avoid major tasks.")}</p>
                  </div>
                  <div className="faq-item">
                    <h5>{pick("अभिजीत मुहूर्त म्हणजे काय?", "अभिजीत मुहूर्त क्या है?", "What is Abhijit Muhurta?")}</h5>
                    <p>{pick("दिवसाचा सर्वात शुभ काळ, जो सर्व दोषांचा नाश करतो, त्याला अभिजीत मुहूर्त म्हणतात.", "दिन का सबसे शुभ समय, जो सभी दोषों का नाश करता है, उसे अभिजीत मुहूर्त कहते हैं।", "The most auspicious mid-day period that nullifies all doshas.")}</p>
                  </div>
                  <div className="faq-item">
                    <h5>{pick("पंचांग रोज पाहावे का?", "क्या पंचांग रोज देखना चाहिए?", "Should I check Panchang daily?")}</h5>
                    <p>{pick("हो, दिवसाची सुरुवात करताना ग्रहांची स्थिती जाणून घेतल्यास निर्णय घेणे सोपे जाते.", "हाँ, दिन की शुरुआत में ग्रहों की स्थिति जानने से निर्णय लेना आसान हो जाता है।", "Yes, knowing the daily planetary state helps in better decision making.")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <Sparkles className="cta-icon" />
                <h4 style={{ color: '#f0c040', marginBottom: '15px' }}>{pick("मुहूर्त विचारा", "मुहूर्त पूछें", "Ask for Muhurta")}</h4>
                <p style={{ color: '#f5eeff', opacity: 1, fontSize: '1.1rem' }}>{pick("लग्न, मुंज, गृहप्रवेश किंवा नवीन कार्यासाठी शुभ मुहूर्तासाठी संपर्क करा।", "शादी, मुंडन या गृह प्रवेश के मुहूर्त के लिए अभी संपर्क करें।", "Contact for marriage, thread ceremony, or housewarming auspicious timings.")}</p>
                <a href="https://wa.me/919801165965" className="btn-sidebar">WhatsApp Chat</a>
                
                <div className="sidebar-tips" style={{ marginTop: '20px' }}>
                   <h5>{pick("पंचांग मंत्र", "पंचांग मंत्र", "Panchang Mantra")}</h5>
                   <p><em>"गंगे च यमुने चैव गोदावरी सरस्वती..."</em></p>
                   <p>{pick("सकाळी अंघोळ करताना हा मंत्र म्हटल्यास दिवस मंगलमयी होतो.", "सुबह स्नान के समय इस मंत्र का जाप करने से दिन मंगलमय होता है।", "Chanting this mantra during morning bath makes the day auspicious.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

