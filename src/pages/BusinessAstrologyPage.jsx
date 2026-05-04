import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Building2, BarChart4, Handshake, ShieldCheck, Factory } from "lucide-react";

export default function BusinessAstrologyPage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("व्यापार ज्योतिष मार्गदर्शन | आचार्य रतिश कुमार ज्योतिष केन्द्र", "व्यापार ज्योतिष मार्गदर्शन | आचार्य रतिश कुमार ज्योतिष केन्द्र", "Business Astrology | Acharya Ratish Kumar Jyotish Kendra")}
        description={pick("तुमच्या व्यवसायातील यश, भागीदारी आणि आर्थिक वृद्धीसाठी सखोल ज्योतिषीय विश्लेषण।", "आपके व्यवसाय की सफलता, साझेदारी और आर्थिक वृद्धि के लिए गहन ज्योतिषीय विश्लेषण।", "In-depth astrological analysis for your business success, partnership, and financial growth.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Business Growth</span>
            <h1>{pick("व्यापार आणि व्यावसायिक मार्गदर्शन", "व्यापार एवं व्यावसायिक मार्गदर्शन", "Business & Professional Guidance")}</h1>
            <p className="subtitle">{pick("ग्रहांच्या सहाय्याने तुमचा व्यवसाय शिखरावर न्या।", "ग्रहों की सहायता से अपने व्यवसाय को शिखर पर ले जाएं।", "Take your business to new heights with planetary support.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("व्यवसायात ग्रहांची भूमिका", "व्यवसाय में ग्रहों की भूमिका", "Role of Planets in Business")}</h2>
              <p>
                {pick(
                  "बुध हा व्यापाराचा मुख्य कारक ग्रह आहे. जर तुमच्या कुंडलीत बुध बलवान असेल, तर निर्णयक्षमता आणि संवाद कौशल्य उत्तम असते. तसेच सातवे स्थान भागीदारीचे आणि अकरावे स्थान लाभाचे प्रतिनिधित्व करते. आम्ही तुमच्या व्यवसायातील चढ-उतारांचे अचूक विश्लेषण करतो.",
                  "बुध व्यापार का मुख्य कारक ग्रह है। यदि आपकी कुंडली में बुध बलवान है, तो निर्णय लेने की क्षमता और संवाद कौशल बेहतर होता है। सातवां भाव साझेदारी और ग्यारहवां भाव लाभ का प्रतिनिधित्व करता है। हम आपके व्यापार के उतार-चढ़ाव का सटीक विश्लेषण करते हैं।",
                  "Mercury is the primary planet for trade and commerce. A strong Mercury in your chart enhances decision-making and communication. The 7th house represents partnerships and the 11th house signifies gains. We provide accurate analysis of your business trends."
                )}
              </p>

              <div className="feature-list-modern">
                <div className="feature-box">
                  <Building2 className="icon" />
                  <h4>{pick("नवीन व्यवसायाची सुरुवात", "नए व्यवसाय की शुरुआत", "Starting a New Venture")}</h4>
                  <p>{pick("व्यवसाय सुरू करण्यासाठी सर्वात शुभ मुहूर्त आणि योग्य दिशा।", "व्यवसाय शुरू करने के लिए सबसे शुभ मुहूर्त और सही दिशा।", "The most auspicious timing and direction to start a business.")}</p>
                </div>
                <div className="feature-box">
                  <Handshake className="icon" />
                  <h4>{pick("भागीदारी आणि विश्वास", "साझेदारी और विश्वास", "Partnership & Trust")}</h4>
                  <p>{pick("तुमच्या पार्टनरसोबत तुमचे पटणार का? भागीदारीत धोका तर नाही ना?।", "क्या आपके पार्टनर के साथ आपका तालमेल बैठेगा? क्या साझेदारी में कोई जोखिम है?।", "Will you vibe with your partner? Is there any risk in partnership?")}</p>
                </div>
                <div className="feature-box">
                  <BarChart4 className="icon" />
                  <h4>{pick("मार्केट आणि नफा", "मार्केट और लाभ", "Market & Profit")}</h4>
                  <p>{pick("गुंतवणुकीसाठी योग्य वेळ आणि मार्केटमधील तुमच्या ब्रँडचे मूल्य।", "निवेश के लिए सही समय और मार्केट में आपके ब्रांड की वैल्यू।", "The right time for investment and your brand's market value.")}</p>
                </div>
                <div className="feature-box">
                   <Factory className="icon" />
                  <h4>{pick("कारखाना आणि इंडस्ट्री", "कारखाना और इंडस्ट्री", "Industry & Factories")}</h4>
                  <p>{pick("औद्योगिक प्रगती आणि मशिनरीशी संबंधित समस्यांवर उपाय।", "औद्योगिक प्रगति और मशीनरी से संबंधित समस्याओं का समाधान।", "Solutions for industrial growth and machinery-related issues.")}</p>
                </div>
              </div>
              <div className="detailed-explanation">
                <h3>{pick("व्यावसायिक यशासाठी ज्योतिषीय रहस्ये", "व्यावसायिक सफलता के लिए ज्योतिषीय रहस्य", "Astrological Secrets for Business Success")}</h3>
                <p>
                  {pick(
                    "१. दुसऱ्या स्थानाची स्थिती: हे स्थान तुमच्या संपत्तीचे आणि साठवलेल्या पैशाचे आहे. २. सहावे स्थान: हे स्थान स्पर्धा आणि कर्जाचे आहे, जे व्यवसायात अत्यंत महत्वाचे असते. ३. नववे स्थान: भाग्योदय आणि लांब पल्ल्याचे सौदे.",
                    "१. दूसरे भाव की स्थिति: यह भाव आपकी संपत्ति और संचित धन का है। २. छठा भाव: यह भाव प्रतिस्पर्धा और कर्ज का है, जो व्यवसाय में अत्यंत महत्वपूर्ण होते हैं। ३. नौवां भाव: भाग्योदय और लंबी अवधि के सौदे।",
                    "1. The 2nd House: Represents your wealth and accumulated assets. 2. The 6th House: Represents competition and debts, factors crucial for any enterprise. 3. The 9th House: Luck and long-term business deals."
                  )}
                </p>
                
                <h4>{pick("आम्ही कोणत्या प्रश्नांची उत्तरे देतो?", "हम किन सवालों के जवाब देते हैं?", "What questions do we answer?") || "Our Expertise"}</h4>
                <ul className="rich-bullet-list">
                  <li>{pick("माझा स्वतःचा ब्रँड कधी प्रसिद्ध होईल?", "मेरा अपना ब्रांड कब प्रसिद्ध होगा?", "When will my own brand become famous?")}</li>
                  <li>{pick("व्यवसायात मंदी का येत आहे?", "व्यवसाय में मंदी क्यों आ रही है?", "Why is there a slowdown in my business?")}</li>
                  <li>{pick("कोर्ट-कचेरी आणि कायदेशीर अडथळे कधी दूर होतील?", "कोर्ट-कचहरी और कानूनी बाधाएं कब दूर होंगी?", "When will legal obstacles and court cases resolve?")}</li>
                  <li>{pick("नवीन गुंतवणूक (Investment) करण्याची योग्य वेळ कोणती?", "नया निवेश करने का सही समय कौन सा है?", "What is the best time for new investments?")}</li>
                </ul>

                <h4>{pick("यशस्वी व्यापाऱ्यांसाठी काही उपाय", "सफल व्यापारियों के लिए कुछ उपाय", "Remedies for Successful Business")}</h4>
                <p>
                  {pick(
                    "व्यवसायाच्या ठिकाणी रोज सकाळी 'श्री यंत्राची' पूजा करा. उत्तर दिशेला पाण्याचे कारंजे किंवा मत्स्यालय (Aquarium) ठेवल्याने धनाचा ओघ वाढतो. बुधवारी हिरव्या रंगाच्या वस्तू दान केल्याने व्यापारात स्थिरता येते.",
                    "व्यापार स्थल पर प्रतिदिन सुबह 'श्री यंत्र' की पूजा करें। उत्तर दिशा में फव्वारा या मछलीघर (Aquarium) रखने से धन का प्रवाह बढ़ता है। बुधवार को हरी वस्तुओं का दान करने से व्यापार में स्थिरता आती है।",
                    "Worship 'Shree Yantra' every morning at your workplace. Placing a water fountain or an aquarium in the North increases the flow of wealth. Donating green items on Wednesday brings stability to trade."
                  )}
                </p>
                <div className="quote-box">
                   {pick(
                    "''ग्रहांची चाल ही काळाची गती आहे, आणि व्यापार ही संघर्षाची कला आहे. ज्योतिषाने हा संघर्ष यशात बदलता येतो.'' - आचार्य रतिश कुमार",
                    "''ग्रहों की चाल काल की गति है, और व्यापार संघर्ष की कला है। ज्योतिष से इस संघर्ष को सफलता में बदला जा सकता है।'' - आचार्य रतिश कुमार",
                    "''The movement of planets is the speed of time, and business is the art of struggle. Astrology can transform this struggle into success.'' - Acharya Ratish Kumar"
                   )}
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <ShieldCheck className="cta-icon" />
                <h4>{pick("व्यापार सल्ला", "व्यापार परामर्श", "Business Consult")}</h4>
                <p>{pick("तुमच्या व्यवसायाला यशाच्या उंचीवर नेण्यासाठी आजच संपर्क करा।", "अपने व्यवसाय को सफलता की ऊंचाइयों पर ले जाने के लिए आज ही संपर्क करें।", "Contact today to take your business to the heights of success.")}</p>
                <a href="https://wa.me/919801165965" className="btn-sidebar">WhatsApp Chat</a>
                <Link to="/contact" className="btn-sidebar ghost">Contact Page</Link>
                
                <div className="sidebar-tips">
                   <h5>{pick("आजची टीप", "आज की टिप", "Today's Tip")}</h5>
                   <p>{pick("महत्वाच्या करारावर सही करण्यापूर्वी तुमचा 'होरा' तपासा।", "महत्वपूर्ण अनुबंध पर हस्ताक्षर करने से पहले अपना 'होरा' जांचें।", "Check your 'Hora' before signing important contracts.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

