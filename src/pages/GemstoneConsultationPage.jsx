import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Gem, Zap, Heart, Shield, Layers } from "lucide-react";

export default function GemstoneConsultationPage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("रत्न सल्ला आणि शिफारसी | जय माता दी ज्योतिष", "रत्न परामर्श और सिफारिशें | जय माता दी ज्योतिष", "Gemstone Consultation | Jai Mata Di Astrology")}
        description={pick("तुमच्या राशी आणि ग्रहांनुसार योग्य रत्न निवडा आणि जीवनात सकारात्मक ऊर्जा मिळवा।", "अपनी राशि और ग्रहों के अनुसार सही रत्न चुनें और सकारात्मक ऊर्जा प्राप्त करें।", "Choose the right gemstone for your zodiac and planets to gain positive energy.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Celestial Radiance</span>
            <h1>{pick("रत्न सल्ला आणि शिफारसी", "रत्न परामर्श और सिफारिशें", "Gemstone Consultation")}</h1>
            <p className="subtitle">{pick("रत्नांच्या ऊर्जेने तुमचे भाग्य उजळवा।", "रत्नों की ऊर्जा से अपना भाग्य संवारें।", "Brighten your destiny with the energy of gemstones.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("रत्नांचे सामर्थ्य", "रत्नों की शक्ति", "The Power of Gemstones")}</h2>
              <p>
                {pick(
                  "प्रत्येक रत्नाचा एका विशिष्ट ग्रहाशी संबंध असतो. जेव्हा आपण योग्य रत्न धारण करतो, तेव्हा त्या ग्रहाची सकारात्मक किरणे आपल्या शरीरात शोषली जातात, ज्यामुळे मानसिक आणि शारीरिक प्रगती होते. चुकीचे रत्न धारण करणे हानिकारक ठरू शकते, म्हणून तज्ञांचा सल्ला महत्त्वाचा आहे.",
                  "प्रत्येक रत्न का संबंध किसी विशेष ग्रह से होता है। जब हम सही रत्न धारण करते हैं, तो उस ग्रह की सकारात्मक तरंगें हमारे शरीर में समाहित होती हैं, जिससे मानसिक और शारीरिक उन्नति होती है। गलत रत्न पहनना हानिकारक हो सकता है।",
                  "Every gemstone is linked to a specific planet. Wearing the right stone allows the planet's positive vibrations to be absorbed by your body, leading to mental and physical growth. Wearing the wrong gem can be harmful, so expert advice is crucial."
                )}
              </p>

              <div className="feature-list-modern">
                <div className="feature-box">
                  <Gem className="icon" />
                  <h4>{pick("राशी रत्न", "राशि रत्न", "Zodiac Gems")}</h4>
                  <p>{pick("तुमच्या राशीनुसार कोणते रत्न तुमच्यासाठी सर्वात शुभ आहे हे जाणून घ्या।", "अपनी राशि के अनुसार जानें कौन सा रत्न आपके लिए सबसे शुभ है।", "Find out which gem is most auspicious according to your zodiac.")}</p>
                </div>
                <div className="feature-box">
                  <Zap className="icon" />
                  <h4>{pick("ग्रहांची शांती", "ग्रह शांति", "Planetary Balance")}</h4>
                  <p>{pick("कमकुवत ग्रहांचे बळ वाढवण्यासाठी रत्नांचा उपयोग।", "कमजोर ग्रहों की शक्ति बढ़ाने के लिए रत्नों का उचित उपयोग।", "Using gemstones to strengthen weak planets in your chart.")}</p>
                </div>
                <div className="feature-box">
                  <Heart className="icon" />
                  <h4>{pick("स्वास्थ्य आणि शांती", "स्वास्थ्य और शांति", "Health & Peace")}</h4>
                  <p>{pick("मानसिक ताण आणि शारीरिक व्याधींसाठी रत्न उपचार।", "मानसिक तनाव और शारीरिक रोगों के लिए रत्न उपचार।", "Gemstone remedies for mental stress and physical ailments.")}</p>
                </div>
                <div className="feature-box">
                  <Layers className="icon" />
                  <h4>{pick("अष्टपैलू प्रगती", "बहुमुखी प्रगति", "All-round Success")}</h4>
                  <p>{pick("भाग्योदय, यश आणि कीर्ती मिळवण्यासाठी रत्नांची मदत।", "भाग्योदय, सफलता और ख्याति प्राप्त करने में रत्नों की सहायता।", "Leveraging gemstones for luck, success, and fame.")}</p>
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <Sparkles className="cta-icon" />
                <h4>{pick("रत्न शिफारस", "रत्न सिफारिश", "Gem Recommendation")}</h4>
                <p>{pick("तुमच्या अचूक कुंडलीनुसार रत्नाचा सल्ला मिळवण्यासाठी संपर्क करा।", "अपनी सटीक कुंडली के अनुसार रत्न का परामर्श प्राप्त करें।", "Contact for gemstone advice based on your accurate birth chart.")}</p>
                <a href="https://wa.me/917030806080" className="btn-sidebar">WhatsApp Chat</a>
                <Link to="/contact" className="btn-sidebar ghost">Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
