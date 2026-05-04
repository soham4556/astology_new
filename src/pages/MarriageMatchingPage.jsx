import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Heart, Users, ShieldAlert, Sparkles, BookOpen, CheckCircle } from "lucide-react";

export default function MarriageMatchingPage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("विवाह कुंडली जुळवणी | आचार्य रतिश कुमार ज्योतिष केन्द्र", "विवाह कुंडली मिलान | आचार्य रतिश कुमार ज्योतिष केन्द्र", "Marriage Compatibility Matching | Acharya Ratish Kumar Jyotish Kendra")}
        description={pick("अचूक गुणमिलान आणि मांगलिक दोषांचे सखोल विश्लेषण आचार्य रतिश कुमार यांच्याकडून।", "सटीक गुण मिलान और मांगलिक दोष का गहन विश्लेषण आचार्य रतिश कुमार से।", "In-depth Guna Milan and Manglik Dosha analysis by Acharya Ratish Kumar.")}
      />

      <section className="service-hero marriage-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Sacred Union</span>
            <h1>{pick("विवाह कुंडली जुळवणी", "विवाह कुंडली मिलान", "Marriage Kundali Matching")}</h1>
            <p className="subtitle">{pick("एक यशस्वी आणि आनंदी वैवाहिक जीवनासाठी ग्रहांची साथ आवश्यक असते।", "एक सफल और सुखी वैवाहिक जीवन के लिए ग्रहों का साथ आवश्यक है।", "Celestial alignment is key to a successful and happy married life.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("विवाह जुळवणीचे विज्ञान", "विवाह मिलान का विज्ञान", "The Science of Marriage Matching")}</h2>
              <p>
                {pick(
                  "वैदिक ज्योतिषात विवाहाला एक पवित्र संस्कार मानले जाते. जेव्हा दोन व्यक्ती एकत्र येतात, तेव्हा त्यांच्या उर्जेचे आणि कुंडलीचे मिलान होणे आवश्यक असते. यालाच 'अष्टकूट गुणमिलान' असे म्हणतात. यामध्ये ३६ गुणांपैकी किती गुण जुळतात यावर वैवाहिक जीवनाचे यश अवलंबून असते.",
                  "वैदिक ज्योतिष में विवाह को एक पवित्र संस्कार माना जाता है। जब दो व्यक्ति साथ आते हैं, तो उनकी ऊर्जा और कुंडली का मिलान होना आवश्यक है। इसे 'अष्टकूट गुण मिलान' कहा जाता है। इसमें ३६ गुणों में से कितने गुण मिलते हैं, इस पर वैवाहिक जीवन की सफलता निर्भर करती है।",
                  "In Vedic Astrology, marriage is a sacred union. When two people come together, their energies and charts must align. This is called 'Ashtakoot Guna Milan'. Success depends on how many out of 36 qualities match between them."
                )}
              </p>

              <h3>{pick("आम्ही काय तपासतो?", "हम क्या जांचते हैं?", "What do we check?") || "Key Checkpoints"}</h3>
              <div className="feature-list-modern grid-2">
                <div className="feature-box">
                  <Users className="icon red-glow" />
                  <h4>{pick("अष्टकूट गुणमिलान", "अष्टकूट गुण मिलान", "Ashtakoot Guna Milan")}</h4>
                  <p>{pick("वर्णापासून नाडीपर्यंत ३६ गुणांचे सखोल विश्लेषण।", "वर्ण से नाड़ी तक ३६ गुणों का गहन विश्लेषण।", "In-depth analysis of 36 qualities from Varna to Nadi.")}</p>
                </div>
                <div className="feature-box">
                  <ShieldAlert className="icon gold-glow" />
                  <h4>{pick("मांगलिक दोष विश्लेषण", "मांगलिक दोष विश्लेषण", "Manglik Dosha Analysis")}</h4>
                  <p>{pick("मंगळ ग्रहाचा प्रभाव आणि त्याचे संभाव्य धोके व उपाय।", "मंगल ग्रह का प्रभाव और उसके संभावित खतरे तथा उपाय।", "Mars influence, potential issues, and effective remedies.")}</p>
                </div>
                <div className="feature-box">
                  <Sparkles className="icon blue-glow" />
                  <h4>{pick("भकूट आणि गण दोष", "भकूट और गण दोष", "Bhakoot & Gana Dosha")}</h4>
                  <p>{pick("नातेसंबंधातील स्थिरता आणि मानसिक ताळमेळ तपासणी।", "रिश्तों में स्थिरता और मानसिक तालमेल की जांच।", "Stability in relationship and mental coordination check.")}</p>
                </div>
                <div className="feature-box">
                  <BookOpen className="icon green-glow" />
                  <h4>{pick("संतान आणि धन योग", "संतान और धन योग", "Children & Wealth Yoga")}</h4>
                  <p>{pick("दोघांच्या कुंडलीतील भविष्यातील वृद्धीचे योग।", "दोनों की कुंडली में भविष्य की वृद्धि के योग।", "Future growth prospects in both birth charts.")}</p>
                </div>
              </div>

              <h3>{pick("यशस्वी विवाहासाठी आचार्य रतिश कुमार यांचे महत्त्व", "सफल विवाह के लिए आचार्य रतिश कुमार का महत्व", "Acharya's Methodology for Success")}</h3>
              <p>
                {pick(
                  "केवळ गुण जुळणे म्हणजे लग्न यशस्वी होणे नव्हे. आचार्य रतिश कुमार हे ग्रहमैत्री, सप्तम स्थानाचा स्वामी आणि नजीकच्या दशांचे सखोल वाचन करतात. अनेकदा गुण कमी असूनही ग्रहांच्या स्थितीमुळे लग्न उत्तम चालू शकते, हे आचार्य त्यांच्या अनुभवातून सांगतात.",
                  "सिर्फ गुण मिलना ही सफल विवाह की गारंटी नहीं है। आचार्य रतिश कुमार ग्रहमैत्री, सप्तम भाव के स्वामी और आने वाली दशाओं का गहन अध्ययन करते हैं। कई बार कम गुण होने पर भी ग्रहों की स्थिति से विवाह सफल हो सकता है, यह आचार्य अपने अनुभव से बताते हैं।",
                  "Matching points isn't everything. Acharya Ratish Kumar studies planetary friendship, the 7th house lord, and upcoming Dashas. Based on his experience, even if points are fewer, positive planetary status can ensure marital success."
                )}
              </p>

              <div className="detailed-explanation">
                <h4>{pick("परामर्श प्रक्रियेचे फायदे", "परामर्श प्रक्रिया के लाभ", "Benefits of Consultation")}</h4>
                <ul className="modern-check-list">
                  <li><CheckCircle size={16} /> {pick("नातेसंबंधातील अडथळ्यांची आगाऊ माहिती।", "रिश्तों की बाधाओं की पहले से जानकारी।", "Identify relationship hurdles early.")}</li>
                  <li><CheckCircle size={16} /> {pick("मांगलिक किंवा इतर दोषांसाठी सोपे वैदिक उपाय।", "मांगलिक या अन्य दोषों के लिए सरल उपाय।", "Simple remedies for Manglik or other doshas.")}</li>
                  <li><CheckCircle size={16} /> {pick("आर्थिक आणि कौटुंबिक प्रगतीचा अंदाज।", "आर्थिक और पारिवारिक प्रगति का अनुमान।", "Estimation of financial and family progress.")}</li>
                </ul>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card highlight">
                <Heart className="cta-icon primary-red" />
                <h4>{pick("विवाह जुळवणी करा", "विवाह मिलान करें", "Get Matching Done")}</h4>
                <p>{pick("तुमच्या जोडीदारासोबतचे भविष्य जाणण्यासाठी संपर्क साधा।", "अपने साथी के साथ भविष्य जानने के लिए संपर्क करें।", "Contact for a consultation on your future with a partner.")}</p>
                <a href="https://wa.me/919801165965" className="btn-sidebar solid-primary">WhatsApp Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

