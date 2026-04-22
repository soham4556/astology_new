import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, User, Heart, Shield, HelpCircle, Lightbulb } from "lucide-react";

export default function PersonalGuidancePage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("व्यक्तिगत मार्गदर्शन | जय माता दी ज्योतिष", "व्यक्तिगत मार्गदर्शन | जय माता दी ज्योतिष", "Personal Guidance | Jai Mata Di Astrology")}
        description={pick("तुमच्या खासगी समस्या आणि आध्यात्मिक शंकांसाठी आचार्य रतिश कुमार यांचे मार्गदर्शन।", "आपकी व्यक्तिगत समस्याओं और आध्यात्मिक शंकाओं के लिए आचार्य रतिश कुमार का मार्गदर्शन।", "Guidance for your personal problems and spiritual queries by Acharya Ratish Kumar.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Inner Peace</span>
            <h1>{pick("व्यक्तिगत मार्गदर्शन", "व्यक्तिगत मार्गदर्शन", "Personal Guidance")}</h1>
            <p className="subtitle">{pick("जीवनातील कठीण प्रसंगात साहाय्य आणि योग्य दिशा।", "जीवन के कठिन समय में सहायता और सही दिशा।", "Help and right direction during difficult times in life.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("व्यक्तिगत मार्गदर्शनाची गरज", "व्यक्तिगत मार्गदर्शन की आवश्यकता", "Why Personal Guidance?")}</h2>
              <p>
                {pick(
                  "कधीकधी आपण जीवनात अशा वळणावर असतो जिथे आपल्याला काय करावे हे समजत नाही. याला 'द्वंद्व' म्हणतात. वैयक्तिक ज्योतिष मार्गदर्शन तुम्हाला तुमच्या अंतर्मनाची जाणीव करून देते आणि ग्रहांच्या सहाय्याने योग्य निर्णयापर्यंत पोहोचण्यास मदत करते.",
                  "कभी-कभी हम जीवन में ऐसे मोड़ पर होते हैं जहाँ हमें समझ नहीं आता कि क्या करें। व्यक्तिगत ज्योतिषीय मार्गदर्शन आपको अपने अंतर्मन से जोड़ता है और ग्रहों की सहायता से सही निर्णय लेने में मदद करता है।",
                  "Sometimes we find ourselves at points in life where we don't know what to do. Personal astrological guidance helps you connect with your inner self and leads you to the right decisions using planetary insights."
                )}
              </p>

              <div className="feature-list-modern">
                <div className="feature-box">
                  <Heart className="icon" />
                  <h4>{pick("कौटुंबिक समस्या", "पारिवारिक समस्या", "Family Issues")}</h4>
                  <p>{pick("नातेसंबंधातील तणाव आणि वाद दूर करण्यासाठी आध्यात्मिक उपाय।", "रिश्तों के तनाव और विवादों को दूर करने के लिए आध्यात्मिक उपाय।", "Spiritual remedies to resolve tension and disputes in relationships.")}</p>
                </div>
                <div className="feature-box">
                  <HelpCircle className="icon" />
                  <h4>{pick("महत्वाचे निर्णय", "महत्वपूर्ण निर्णय", "Critical Decisions")}</h4>
                  <p>{pick("जीवन बदलणाऱ्या निर्णयांसाठी जोखीम आणि संधींचे विश्लेषण।", "जीवन बदलने वाले निर्णयों के लिए जोखिम और अवसरों का विश्लेषण।", "Risk and opportunity analysis for life-changing decisions.")}</p>
                </div>
                <div className="feature-box">
                  <Lightbulb className="icon" />
                  <h4>{pick("मानसिक शांती", "मानसिक शांति", "Mental Peace")}</h4>
                  <p>{pick("नैराश्य आणि नकारात्मक उर्जेतून बाहेर पडण्यासाठी मार्गदर्शन।", "अवसाद और नकारात्मक ऊर्जा से बाहर निकलने के लिए ज्योतिषीय मार्गदर्शन।", "Guidance to emerge from depression and negative energies.")}</p>
                </div>
                <div className="feature-box">
                  <Shield className="icon" />
                  <h4>{pick("सुरक्षा आणि भवितव्य", "सुरक्षा और भविष्य", "Security & Future")}</h4>
                  <p>{pick("पुढील काळातील संकटांपासून वाचण्यासाठी सावधगिरीचे उपाय।", "आने वाले समय के संकटों से बचने के लिए एहतियाती उपाय।", "Precautionary measures to avoid future crises.")}</p>
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <User className="cta-icon" />
                <h4>{pick("खासगी सल्ला", "निजी परामर्श", "Private Consult")}</h4>
                <p>{pick("तुमची माहिती पूर्णपणे गोपनीय ठेवून आम्ही तुम्हाला मार्गदर्शन देतो।", "आपकी जानकारी पूरी तरह गोपनीय रखकर हम आपको सही दिशा दिखाते हैं।", "We provide guidance while keeping your information strictly confidential.")}</p>
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

