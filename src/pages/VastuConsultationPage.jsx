import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Home, Compass, Sun, Wind, CheckSquare, Sparkles, Map } from "lucide-react";

export default function VastuConsultationPage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("वास्तु शास्त्र परामर्श | जय माता दी ज्योतिष", "वास्तु शास्त्र परामर्श | जय माता दी ज्योतिष", "Vastu Shastra Consultation | Jai Mata Di Astrology")}
        description={pick("घर आणि ऑफिससाठी सकारात्मक ऊर्जेचे नियोजन आचार्य रतिश कुमार यांच्या मार्गदर्शनाखाली।", "घर और ऑफिस के लिए सकारात्मक ऊर्जा का प्रबंधन आचार्य रतिश कुमार के मार्गदर्शन में।", "Positive energy management for home and office under Acharya Ratish Kumar's guidance.")}
      />

      <section className="service-hero vastu-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Harmonious Space</span>
            <h1>{pick("वास्तु शास्त्र परामर्श", "वास्तु शास्त्र परामर्श", "Vastu Shastra Consultation")}</h1>
            <p className="subtitle">{pick("तुमच्या राहत्या जागेत सकारात्मक उर्जेचा प्रवाह वाढवा आणि प्रगती साधा।", "अपनी जगह में सकारात्मक ऊर्जा का प्रवाह बढ़ाएं और उन्नति करें।", "Boost positive energy flow in your space and achieve growth.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("वास्तु शास्त्राचे महत्त्व", "वास्तु शास्त्र का महत्व", "Significance of Vastu Shastra")}</h2>
              <p>
                {pick(
                  "वास्तु शास्त्र हे दिशा आणि पंचमहाभूतांच्या (पृथ्वी, आप, तेज, वायू, आकाश) संतुलनाचे शास्त्र आहे. आपण ज्या ठिकाणी राहतो किंवा काम करतो, त्या ठिकाणच्या ऊर्जेचा आपल्या मानसिक आणि शारीरिक प्रगतीवर थेट परिणाम होतो. चुकीच्या दिशेला असलेल्या वस्तू किंवा चुकीचे बांधकाम वास्तुदोष निर्माण करते.",
                  "वास्तु शास्त्र दिशाओं और पंचमहाभूतों (पृथ्वी, जल, अग्नि, वायु, आकाश) के संतुलन का विज्ञान है। हम जिस स्थान पर रहते या काम करते हैं, वहां की ऊर्जा का हमारे मानसिक और शारीरिक स्वास्थ्य पर सीधा प्रभाव पड़ता है। गलत दिशा में रखी चीजें वास्तु दोष पैदा करती हैं।",
                  "Vastu Shastra is the ancient Indian science of balancing directions and the Five Elements (Earth, Water, Fire, Air, Space). The energy of the place where we live or work directly impacts our mental and physical well-being. Incorrect placements create Vastu defects."
                )}
              </p>

              <h3>{pick("आम्ही कोणत्या क्षेत्रात मदत करतो?", "हम किन क्षेत्रों में मदद करते हैं?", "Areas we cover?")}</h3>
              <div className="feature-list-modern">
                <div className="feature-box">
                  <Home className="icon" />
                  <h4>{pick("निवासी वास्तु", "आवासीय वास्तु", "Residential Vastu")}</h4>
                  <p>{pick("घरातील ईशान्य (ईशान्य) कोपरा, किचन आणि बेडरुमचे योग्य नियोजन।", "घर के ईशान कोण, रसोई और बेडरूम का सही प्रबंधन।", "Correct planning of Northeast corner, kitchen, and bedroom.")}</p>
                </div>
                <div className="feature-box">
                  <Map className="icon" />
                  <h4>{pick("व्यावसायिक वास्तु", "व्यावसायिक वास्तु", "Commercial Vastu")}</h4>
                  <p>{pick("ऑफिस, फॅक्टरी आणि व्यवसायातील प्रगतीसाठी दिशांचे संकलन।", "ऑफिस और फैक्ट्री में उन्नति के लिए दिशाओं का संकलन।", "Directional alignment for business and factory growth.")}</p>
                </div>
                <div className="feature-box">
                  <Sparkles className="icon" />
                  <h4>{pick("वास्तुदोष निवारण", "वास्तु दोष निवारण", "Vastu Dosha Remedies")}</h4>
                  <p>{pick("तोडफोड न करता सोप्या उपायांद्वारे वास्तुदोषांचे निराकरण।", "बिना तोड़-फोड़ के सरल उपायों से वास्तु दोष निवारण।", "Resolving Vastu defects without demolition through simple measures.")}</p>
                </div>
              </div>

              <h3>{pick("वास्तुदोषामुळे होणारे संभाव्य त्रास", "वास्तु दोष के संभावित प्रभाव", "Potential issues due to Vastu defects")}</h3>
              <p>
                {pick(
                  "वास्तुदोषामुळे घरात सतत आजारपण, आर्थिक चणचण, कौटुंबिक कलह किंवा व्यवसायात तोटा होऊ शकतो. विशेषतः दक्षिण किंवा नैऋत्य दिशेला असलेले दोष मानसिक तणाव वाढवतात. आचार्य रतिश कुमार यांचे मार्गदर्शन तुम्हाला या समस्यांमधून बाहेर काढण्यास मदत करते.",
                  "वास्तु दोष के कारण घर में बीमारी, धन की कमी, पारिवारिक कलह या व्यापार में हानि हो सकती है। विशेष रूप से दक्षिण या नैऋत्य दिशा के दोष मानसिक तनाव बढ़ाते हैं। आचार्य रतिश कुमार का मार्गदर्शन इन समस्याओं को दूर करने में सहायक है।",
                  "Vastu defects can cause persistent illness, financial crunch, family disputes, or business loss. Deficiencies in the South or Southwest directions increase stress. Acharya's guidance helps mitigate these issues."
                )}
              </p>

              <div className="detailed-explanation">
                <h4>{pick("वास्तु उपायांचे काही पैलू", "वास्तु उपायों के कुछ पहलू", "Key Aspects of Vastu Remedies")}</h4>
                <ul className="modern-check-list">
                  <li><Compass size={16} /> {pick("मुख्य प्रवेशद्वाराची दिशा आणि ऊर्जा।", "मुख्य द्वार की दिशा और ऊर्जा।", "Main entrance direction and energy.")}</li>
                  <li><Sun size={16} /> {pick("ईशान्येतील सकारात्मक लहरींचे संवर्धन।", "ईशान कोण की सकारात्मकता बढ़ाना।", "Boosting positivity in the Northeast.")}</li>
                  <li><Wind size={16} /> {pick("वायू आणि प्रकाशाचा योग्य संचार।", "वायु और प्रकाश का सही संचार।", "Ensuring proper ventilation and light.")}</li>
                </ul>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <Compass className="cta-icon primary-gold" />
                <h4>{pick("वास्तु सल्ला घ्या", "वास्तु सलाह लें", "Consult Vastu Expert")}</h4>
                <p>{pick("तुमच्या जागेत शांतता आणि प्रगती आणण्यासाठी आजच सल्ला घ्या।", "अपनी जगह में शांति और समृद्धि के लिए आज ही सलाह लें।", "Take a consultation today for peace and prosperity in your space.")}</p>
                <a href="https://wa.me/919801165965" className="btn-sidebar">Connect via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

