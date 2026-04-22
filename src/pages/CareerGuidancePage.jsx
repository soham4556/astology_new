import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Briefcase, TrendingUp, DollarSign, Target, ShieldCheck } from "lucide-react";

export default function CareerGuidancePage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("करियर आणि वित्त मार्गदर्शन | जय माता दी ज्योतिष", "करियर एवं वित्त मार्गदर्शन | जय माता दी ज्योतिष", "Career & Finance Guidance | Jai Mata Di Astrology")}
        description={pick("तुमच्या करिअरमधील प्रगती आणि आर्थिक समृद्धीसाठी ज्योतिषी मार्गदर्शन।", "आपके करियर की प्रगति और आर्थिक समृद्धि के लिए ज्योतिषीय मार्गदर्शन।", "Astrological guidance for your career growth and financial prosperity.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Professional Success</span>
            <h1>{pick("करियर आणि वित्त मार्गदर्शन", "करियर एवं वित्त मार्गदर्शन", "Career & Finance Guidance")}</h1>
            <p className="subtitle">{pick("कामाच्या ठिकाणी यश मिळवा आणि तुमचे आर्थिक जीवन सुरक्षित करा।", "कार्यस्थल पर सफलता प्राप्त करें और अपना वित्तीय जीवन सुरक्षित करें।", "Achieve success at work and secure your financial future.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("करियरमध्ये ग्रहांचे महत्त्व", "करियर में ग्रहों का महत्व", "Significance of Planets in Career")}</h2>
              <p>
                {pick(
                  "दहावे स्थान हे तुमच्या व्यवसायाचे प्रतिनिधित्व करते. सूर्य यश देतो, तर शनि कठोर परिश्रमाचे फळ देतो. तुमच्या कुंडलीतील ग्रहांच्या स्थितीनुसार तुम्हाला नोकरी करावी की व्यवसाय, हे अचूकपणे सांगता येते.",
                  "कुंडली का दसवां भाव आपके व्यवसाय का प्रतिनिधित्व करता है। सूर्य सफलता देता है, जबकि शनि कड़ी मेहनत का फल देता है। आपके ग्रहों की स्थिति के अनुसार यह बताया जा सकता है कि आपको नौकरी करनी चाहिए या व्यवसाय।",
                  "The 10th house in your chart represents your profession. Sun brings success, while Saturn rewards hard work. Based on your planetary alignment, we can accurately predict if you should pursue a job or business."
                )}
              </p>

              <div className="feature-list-modern">
                <div className="feature-box">
                  <Briefcase className="icon" />
                  <h4>{pick("नोकरी की व्यवसाय?", "नौकरी या व्यवसाय?", "Job or Business?")}</h4>
                  <p>{pick("तुमच्यासाठी कोणता मार्ग अधिक फायदेशीर ठरेल याची खात्रीशीर माहिती।", "आपके लिए कौन सा रास्ता अधिक फायदेमंद होगा इसकी सटीक जानकारी।", "Clear insights on which path will be more profitable for you.")}</p>
                </div>
                <div className="feature-box">
                  <TrendingUp className="icon" />
                  <h4>{pick("प्रमोशन आणि प्रगती", "पदोन्नति और प्रगति", "Promotion & Growth")}</h4>
                  <p>{pick("तुमच्या करिअरमध्ये कधी मोठी प्रगती होईल याचा अंदाज।", "आपके करियर में कब बड़ी प्रगति होगी इसका ज्योतिषीय पूर्वानुमान।", "Predicting when you will see major growth in your career.")}</p>
                </div>
                <div className="feature-box">
                  <DollarSign className="icon" />
                  <h4>{pick("आर्थिक समृद्धी", "आर्थिक समृद्धि", "Financial Prosperity")}</h4>
                  <p>{pick("धनयोग आणि पैशाच्या गुंतवणुकीसाठी सर्वोत्तम मार्ग।", "धन योग और निवेश के लिए सर्वोत्तम ज्योतिषीय सलाह।", "Best astrological advice for wealth and investments.")}</p>
                </div>
                <div className="feature-box">
                  <Target className="icon" />
                  <h4>{pick("परदेशात संधी", "विदेश में अवसर", "Foreign Opportunities")}</h4>
                  <p>{pick("तुमच्या कुंडलीत परदेश प्रवासाचे आणि तिथे काम करण्याचे भाग्य आहे का?।", "क्या आपकी कुंडली में विदेश यात्रा और वहां काम करने का योग है?।", "Does your chart indicate travel and working abroad?")}</p>
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <ShieldCheck className="cta-icon" />
                <h4>{pick("सल्ला मिळवा", "परामर्श प्राप्त करें", "Get Guidance")}</h4>
                <p>{pick("करियरमधील अडथळे दूर करण्यासाठी संपर्क साधा।", "करियर की बाधाएं दूर करने के लिए आज ही संपर्क करें।", "Contact us today to clear obstacles in your career.")}</p>
                <a href="https://wa.me/919801165965" className="btn-sidebar">WhatsApp Chat</a>
                <Link to="/contact" className="btn-sidebar ghost">Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

