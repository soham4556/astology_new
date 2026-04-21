import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, Star, ShieldCheck, Sun, Moon, Compass, BookOpen } from "lucide-react";

export default function KundaliAnalysisPage() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const isMr = language === "mr";

  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("जन्मकुंडली सखोल विश्लेषण | जय माता दी ज्योतिष", "जन्मकुंडली गहन विश्लेषण | जय माता दी ज्योतिष", "In-depth Kundali Analysis | Jai Mata Di Astrology")}
        description={pick("आचार्य रतिश कुमार यांच्याकडून तुमची अचूक जन्मकुंडली विश्लेषण करून घ्या।", "आचार्य रतिश कुमार से अपनी सटीक जन्म कुंडली का विश्लेषण करवाएं।", "Get your accurate birth chart analysis by Acharya Ratish Kumar.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Vedic Wisdom</span>
            <h1>{pick("जन्मकुंडली सखोल विश्लेषण", "जन्मकुंडली गहन विश्लेषण", "In-depth Birth Chart (Kundali) Analysis")}</h1>
            <p className="subtitle">{pick("तुमच्या नशिबाचा नकाशा शोधा आणि जीवनातील प्रश्नांची उत्तरे मिळवा।", "अपने भाग्य का नक्शा खोजें और जीवन के सवालों के जवाब पाएं।", "Discover your destiny map and find answers to life's questions.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("ज्योतिष म्हणजे काय?", "ज्योतिष क्या है?", "What is Vedic Astrology?") || "Vedic Astrology"}</h2>
              <p>
                {pick(
                  "वैदिक ज्योतिष हे आकाशस्थ ग्रहांच्या स्थितीवरून मानवी जीवनावर होणाऱ्या परिणामांचे शास्त्र आहे. तुमची जन्मकुंडली म्हणजे तुमच्या जन्माच्या वेळी असलेल्या अवकाशाचा एक 'फोटो' आहे. यामध्ये तुमचे भविष्य, स्वभाव, करिअर, आरोग्य आणि नातेसंबंधांचे सर्व पैलू दडलेले असतात.",
                  "वैदिक ज्योतिष आकाशीय पिंडों की स्थिति के आधार पर मानव जीवन पर होने वाले प्रभावों का विज्ञान है। आपकी जन्म कुंडली आपके जन्म के समय आकाश का एक 'फोटो' है। इसमें आपके भविष्य, स्वभाव, करियर, स्वास्थ्य और रिश्तों के सभी पहलू छिपे होते हैं।",
                  "Vedic Astrology is the science of planetary influences on human life based on celestial positions. Your Kundali is essentially a 'snapshot' of the sky at the exact moment of your birth. It contains hidden details about your future, personality, career, health, and relationships."
                )}
              </p>

              <h3>{pick("आम्ही विश्लेषणात काय समाविष्ट करतो?", "हम विश्लेषण में क्या शामिल करते हैं?", "What's included in our Analysis?")}</h3>
              <div className="feature-list-modern">
                <div className="feature-box">
                  <Star className="icon" />
                  <h4>{pick("ग्रह स्थितीचा प्रभाव", "ग्रहों की स्थिति का प्रभाव", "Planetary Position Impacts")}</h4>
                  <p>{pick("तुमच्या कुंडलीतील शुभ आणि अशुभ ग्रहांची सखोल मांडणी।", "आपकी कुंडली में शुभ और अशुभ ग्रहों का गहन विवरण।", "Detailed mapping of auspicious and inauspicious planets.")}</p>
                </div>
                <div className="feature-box">
                  <Sun className="icon" />
                  <h4>{pick("करिअर आणि धनयोग", "करियर और धनयोग", "Career & Wealth Prospects")}</h4>
                  <p>{pick("नोकरी, व्यवसाय आणि आर्थिक प्रगतीसाठी अनुकूल काळ।", "नौकरी, व्यवसाय और आर्थिक प्रगति के लिए अनुकूल समय।", "Favorable periods for job, business, and financial growth.")}</p>
                </div>
                <div className="feature-box">
                  <Moon className="icon" />
                  <h4>{pick("मानसिक आणि शारीरिक आरोग्य", "मानसिक और शारीरिक स्वास्थ्य", "Mental & Physical Health")}</h4>
                  <p>{pick("आरोग्याच्या दृष्टीने घ्यायची दक्षता आणि उपाय।", "स्वास्थ्य के प्रति सावधानी और ज्योतिषीय उपाय।", "Precautions and astrological measures for health.")}</p>
                </div>
                <div className="feature-box">
                  <Compass className="icon" />
                  <h4>{pick("दशा आणि गोचर फल", "दशा और गोचर फल", "Dasha & Transit Reading")}</h4>
                  <p>{pick("तुमच्या वर्तमान दशा आणि ग्रहांच्या भ्रमणाचे परिणाम।", "आपकी वर्तमान दशा और ग्रहों के गोचर का प्रभाव।", "Impact of current Dasha and transit movements.")}</p>
                </div>
              </div>

              <h3>{pick("आचार्य रतिश कुमार यांचे मार्गदर्शन का निवडावे?", "आचार्य रतिश कुमार का मार्गदर्शन क्यों चुनें?", "Why choose Acharya Ratish Kumar?")}</h3>
              <p>
                {pick(
                  "आचार्य रतिश कुमार यांना १५ वर्षांहून अधिक काळ वैदिक ज्योतिषाचा अनुभव आहे. त्यांचे विश्लेषण केवळ ग्रहांच्या स्थितीपुरते मर्यादित नसून, ते व्यक्तीला व्यावहारिक उपाय देखील सुचवतात. त्यांनी आतापर्यंत ५००० पेक्षा जास्त व्यक्तींना त्यांच्या जीवनातील कठीण प्रसंगात मार्ग दाखवला आहे.",
                  "आचार्य रतिश कुमार को वैदिक ज्योतिष में १५ वर्षों से अधिक का अनुभव है। उनका विश्लेषण केवल ग्रहों की स्थिति तक सीमित नहीं है, बल्कि वे व्यावहारिक उपाय भी सुझाते हैं। उन्होंने अब तक ५००० से अधिक व्यक्तियों को उनके जीवन के कठिन समय में सही रास्ता दिखाया है।",
                  "Acharya Ratish Kumar has over 15 years of experience in Vedic Astrology. His analysis goes beyond planetary positions; he provides practical remedies. So far, he has shown the right path to more than 5000 individuals during their difficult times."
                )}
              </p>

              <div className="detailed-explanation">
                <h4>{pick("कुंडलीचे महत्त्व", "कुंडली का महत्व", "Importance of Kundali")}</h4>
                <p>
                  {pick(
                    "१. आत्म-जाणीव: स्वतःच्या बलस्थानांची आणि त्रुटींची ओळख होते. २. योग्य वेळ: कामाची सुरुवात कधी करावी हे समजते. ३. दगाफटका निवारण: संभाव्य धोक्यांची पूर्वसूचना मिळते.",
                    "१. आत्म-जागरूकता: अपनी शक्तियों और कमजोरियों की पहचान। २. सही समय: कार्य कब शुरू करें यह समझना। ३. बाधाओं का निवारण: संभावित खतरों की पूर्व सूचना।",
                    "1. Self-Awareness: Identify strengths and weaknesses. 2. Timing: Understand the right time for decisions. 3. Risk Mitigation: Pre-warnings of potential obstacles."
                  )}
                </p>
                <p>
                  {pick(
                    "आमच्या प्रगत कुंडली विश्लेषणाद्वारे आम्ही कालसर्प दोष, मांगलिक दोष आणि पितृदोष यांसारख्या महत्त्वाच्या पैलूंची तपासणी करतो आणि त्यावर प्रभावी वैदिक उपाय सुचवतो.",
                    "हमारे उन्नत कुंडली विश्लेषण से हम कालसर्प दोष, मांगलिक दोष और पितृ दोष जैसे महत्वपूर्ण पहलुओं की जांच करते हैं और प्रभावी समाधान सुझाते हैं।",
                    "Through our advanced analysis, we check factors like Kaal Sarp Dosha, Manglik Dosha, and Pitra Dosha, providing effective Vedic remedies."
                  )}
                </p>

                <div className="advanced-astrology-info">
                  <h3>{pick("सखोल कुंडली ज्ञानाचे दर्शन", "गहन कुंडली ज्ञान का दर्शन", "Profound Astrology Insights")}</h3>
                  <p>
                    {pick(
                      "ज्योतिष हे केवळ भाकीत नसून एका मोठ्या ऊर्जेचे संकेत आहेत. तुमच्या कुंडलीतील १२ स्थाने तुमच्या आयुष्यातील १२ भिन्न पैलूंचे नियंत्रण करतात. उदाहरणार्थ, लग्न स्थान तुमचे व्यक्तिमत्व ठरवते, तर व्यय स्थान तुमच्या आध्यात्मिक प्रगतीचे प्रतीक असते.",
                      "ज्योतिष केवल भविष्यवाणी नहीं बल्कि एक बड़ी ऊर्जा का संकेत है। आपकी कुंडली के १२ भाव आपके जीवन के १२ विभिन्न पहलुओं को नियंत्रित करते हैं। उदाहरण के लिए, लग्न भाव आपका व्यक्तित्व निर्धारित करता है, जबकि व्यय भाव आपकी आध्यात्मिक प्रगति का प्रतीक होता है।",
                      "Astrology is not just prediction; it is an indication of cosmic energy. The 12 houses in your chart control 12 different aspects of your life. For instance, the 1st house defines your personality, while the 12th house symbolizes your spiritual progress."
                    )}
                  </p>

                  <h4>{pick("सामान्यतः विचारले जाणारे प्रश्न (FAQ)", "अक्सर पूछे जाने वाले प्रश्न", "Frequently Asked Questions")}</h4>
                  <div className="faq-mini-list">
                    <div className="faq-item">
                      <strong>{pick("कुंडलीतील ग्रहांचे दोष कसे कमी करावेत?", "कुंडली के दोषों को कैसे कम करें?", "How to reduce planetary flaws?")}</strong>
                      <p>{pick("मंत्र जप, दान आणि रत्नांच्या योग्य वापराने ग्रहांची नकारात्मकता कमी करता येते.", "मंत्र जाप, दान और रत्नों के सही उपयोग से ग्रहों की नकारात्मकता कम की जा सकती है।", "Negative planetary effects can be mitigated through mantra chanting, donations, and correct gemstone usage.")}</p>
                    </div>
                    <div className="faq-item">
                      <strong>{pick("भाग्य कधी उजळेल हे समजू शकते का?", "क्या पता चल सकता है कि भाग्य कब चमकेगा?", "Can I know when my luck will shine?")}</strong>
                      <p>{pick("हो, महादशा आणि अंतर्दशा यांच्या विश्लेषणावरून तुमच्या आयुष्यातील सुवर्णकाळ ओळखता येतो.", "हाँ, महादशा और अंतर्दशा के विश्लेषण से आपके जीवन का स्वर्ण काल पहचाना जा सकता है।", "Yes, by analyzing Mahadasha and Antardasha, the golden periods of your life can be identified.")}</p>
                    </div>
                  </div>

                  <h4>{pick("आचार्यांचे विशेष मार्गदर्शन", "आचार्य का विशेष मार्गदर्शन", "Acharya's Special Guidance")}</h4>
                  <p>
                    {pick(
                      "आचार्य रतिश कुमार प्रत्येक जातकाच्या कुंडलीचा स्वतः अभ्यास करतात. त्यांच्याकडे कोणतीही सॉफ्टवेअर जनरेटेड उत्तरे नसून, ते पराशर आणि भृगु संहिता यांसारख्या प्राचीन ग्रंथांच्या आधारावर मार्गदर्शन करतात. यामुळे त्यांच्या मार्गदर्शनाची अचूकता ९५% पेक्षा जास्त असते.",
                      "आचार्य रतिश कुमार प्रत्येक जातक की कुंडली का स्वयं अध्ययन करते हैं। उनके पास कोई सॉफ्टवेयर जनरेटेड उत्तर नहीं होते, बल्कि वे पाराशर और भृगु संहिता जैसे प्राचीन ग्रंथों के आधार पर मार्गदर्शन करते हैं। इससे उनके मार्गदर्शन की सटीकता ९५% से अधिक होती है।",
                      "Acharya Ratish Kumar personally studies each individual's chart. He doesn't rely on software-generated reports; instead, he provides guidance based on ancient texts like Parashara and Bhrigu Samhita. This ensures over 95% accuracy in his insights."
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <Sparkles className="cta-icon" />
                <h4>{pick("सल्ला बुक करा", "परामर्श बुक करें", "Book Appointment")}</h4>
                <p>{pick("तुमच्या जीवनातील समस्यांवर तोडगा मिळवण्यासाठी आजच संपर्क करा।", "जीवन की समस्याओं के समाधान के लिए आज ही संपर्क करें।", "Contact today for solutions to your life's challenges.")}</p>
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
