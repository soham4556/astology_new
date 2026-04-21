import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  Star, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles,
  Quote,
  Heart,
  Calendar,
  CheckCircle2
} from "lucide-react";
import AstrologySeoContent from "../components/layout/AstrologySeoContent";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="about-page">
      <SeoMeta
        title={pick(
          "आचार्य रतिश कुमार | जय माता दी ज्योतिष",
          "आचार्य रतिश कुमार | जय माता दी ज्योतिष",
          "About Acharya Ratish Kumar | Jai Mata Di Astrology",
        )}
        description={pick(
          "आचार्य रतिश कुमार - १५ वर्षांचा अनुभव असलेले प्रख्यात वैदिक ज्योतिषी आणि आध्यात्मिक मार्गदर्शक।",
          "आचार्य रतिश कुमार - १५ वर्षों के अनुभव के साथ प्रसिद्ध वैदिक ज्योतिषी और आध्यात्मिक मार्गदर्शक।",
          "Acharya Ratish Kumar - Renowned Vedic Astrologer and spiritual guide with 15+ years of experience.",
        )}
      />

      {/* Hero Section - The Legend */}
      <section className="about-hero-ultra">
        <div className="container">
          <div className="ultra-grid">
            <motion.div 
              className="ultra-image-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="portrait-frame">
                <img 
                  src="/acharya-ratish.jpg" 
                  alt="Acharya Ratish Kumar"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1544717297-fa15739a5445?q=80&w=800"; }}
                />
                <div className="frame-border"></div>
                <div className="experience-badge-3d">
                  <span className="num">15+</span>
                  <span className="txt">{pick("वर्षांचा वारसा", "वर्षों का विरासत", "Years Legacy")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="ultra-text-col"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="top-eyebrow" variants={fadeInUp}>
                <Sparkles size={14} /> {pick("प्रख्यात वैदिक ज्योतिषी", "प्रसिद्ध वैदिक ज्योतिषी", "Renowned Vedic Astrologer")}
              </motion.span>
              <motion.h1 variants={fadeInUp}>
                {pick("आचार्य रतिश कुमार", "आचार्य रतिश कुमार", "Acharya Ratish Kumar")}
              </motion.h1>
              <motion.p className="mantra-text" variants={fadeInUp}>
                {pick(
                  "ज्योतिष हे केवळ भविष्य सांगणे नसून, जीवनाचा मार्ग सुकर करण्याचे एक दिव्य साधन आहे।",
                  "ज्योतिष केवल भविष्य बताना नहीं है, बल्कि जीवन के मार्ग को सुगम बनाने का एक दिव्य साधन है।",
                  "Astrology is not just about predicting the future; it is a divine tool to simplify the journey of life."
                )}
              </motion.p>
              
              <motion.div className="stats-pills" variants={fadeInUp}>
                <div className="pill">
                  <strong>5000+</strong>
                  <span>{pick("परामर्श", "परामर्श", "Consultations")}</span>
                </div>
                <div className="pill">
                  <strong>100%</strong>
                  <span>{pick("गोपनीयता", "गोपनीयता", "Privacy")}</span>
                </div>
                <div className="pill">
                  <strong>24/7</strong>
                  <span>{pick("सपोर्ट", "सपोर्ट", "Support")}</span>
                </div>
              </motion.div>

              <motion.div className="action-row" variants={fadeInUp}>
                <a href="#biography" className="btn-modern-gold">{pick("माहिती वाचा", "जानकारी पढ़ें", "Read Biography")}</a>
                <a href="https://wa.me/917030806080" className="whatsapp-ring">
                  <div className="pulse"></div>
                  <Phone size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section id="biography" className="journey-section">
        <div className="container">
          <div className="section-head-center">
            <h2>{pick("प्रवास आणि अनुभव", "यात्रा और अनुभव", "Journey & Experience")}</h2>
            <div className="divider-line"></div>
          </div>

          <div className="journey-content-grid">
            <motion.div 
              className="journey-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                {pick(
                  "आचार्य रतिश कुमार यांचा जन्म एका आध्यात्मिक कुटुंबात झाला, जिथे त्यांना लहानपणापासूनच प्राचीन वैदिक ग्रंथांचे ज्ञान मिळाले. त्यांनी बनारस हिंदू विद्यापीठातून ज्योतिषशास्त्रात विशेष पदवी मिळवली आणि १५ वर्षांपासून या क्षेत्रात कार्यरत आहेत.",
                  "आचार्य रतिश कुमार का जन्म एक आध्यात्मिक परिवार में हुआ था, जहाँ उन्हें बचपन से ही प्राचीन वैदिक ग्रंथों का ज्ञान मिला। उन्होंने बनारस हिंदू विश्वविद्यालय से ज्योतिष में विशेष डिग्री प्राप्त की और १५ वर्षों से इस क्षेत्र में सक्रिय हैं।",
                  "Acharya Ratish Kumar was born into a spiritual family where he received the knowledge of ancient Vedic scriptures from childhood. He holds a special degree in Astrology from Banaras Hindu University and has been active in this field for 15 years."
                )}
              </p>
              <p>
                {pick(
                  "त्यांचे वैशिष्ट्य म्हणजे ते विज्ञानाला परंपरेची जोड देतात. कुंडलीतील दोष केवळ भीती घालण्यासाठी नसून, त्यावर साध्या उपायांनी मात करता येते, हा त्यांचा ठाम विश्वास आहे.",
                  "उनकी विशेषता यह है कि वे विज्ञान को परंपरा से जोड़ते हैं। उनका दृढ़ विश्वास है कि कुंडली के दोष केवल डराने के लिए नहीं हैं, बल्कि सरल उपायों से उन पर विजय प्राप्त की जा सकती है।",
                  "His specialty lies in bridging science with tradition. He firmly believes that defects in a birth chart are not meant to frighten, but can be overcome with simple remedies."
                )}
              </p>
              
              <div className="expertise-list">
                <div className="ex-item">
                  <CheckCircle2 color="var(--gold)" size={18} />
                  <span>{pick("पराशर ज्योतिष तज्ञ", "पराशर ज्योतिष विशेषज्ञ", "Parashar Jyotish Expert")}</span>
                </div>
                <div className="ex-item">
                  <CheckCircle2 color="var(--gold)" size={18} />
                  <span>{pick("लाल किताब उपाय", "लाल किताब उपाय", "Lal Kitab Remedies")}</span>
                </div>
                <div className="ex-item">
                  <CheckCircle2 color="var(--gold)" size={18} />
                  <span>{pick("रत्न शास्त्र मार्गदर्शक", "रत्न शास्त्र मार्गदर्शक", "Gemstone Consultant")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="philosophy-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="quote-badge" />
              <h3>{pick("माझे तत्वज्ञान", "मेरा दर्शन", "My Philosophy")}</h3>
              <p>
                {pick(
                  "देवावर विश्वास ठेवा, पण कर्माची साथ सोडा नका. ज्योतिष तुम्हाला फक्त पाऊस कधी पडणार ते सांगू शकते, पण छत्री तुम्हालाच धरावी लागेल.",
                  "भगवान पर विश्वास रखें, लेकिन कर्म का साथ न छोड़ें। ज्योतिष आपको केवल यह बता सकता है कि बारिश कब होगी, लेकिन छाता आपको ही पकड़ना होगा।",
                  "Believe in God, but never give up on Karma. Astrology can only tell you when it's going to rain, but you are the one who has to hold the umbrella."
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="expertise-modern">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">{pick("कौशल्य", "कौशल", "Specialization")}</span>
            <h2>{pick("आमची मुख्य कौशल्ये", "हमारी मुख्य विशेषताएं", "Key Specializations")}</h2>
          </div>

          <div className="expertise-grid-alt">
            {[
              { 
                icon: <BookOpen />, 
                title: pick("वैदिक ज्ञान", "वैदिक ज्ञान", "Vedic Wisdom"),
                desc: pick("प्राचीन ग्रंथांचा सखोल अभ्यास।", "प्राचीन ग्रंथों का गहन अध्ययन।", "Deep study of ancient scriptures.")
              },
              { 
                icon: <Award />, 
                title: pick("अचूक विश्लेषण", "सटीक विश्लेषण", "Accurate Analysis"),
                desc: pick("१००% अचूक भविष्यवाणी।", "१००% सटीक भविष्यवाणी।", "100% accurate predictions.")
              },
              { 
                icon: <ShieldCheck />, 
                title: pick("दोषांवरील उपाय", "दोषों का समाधान", "Dosha Remedies"),
                desc: pick("साधे आणि प्रभावी तोडगे।", "सरल और प्रभावी समाधान।", "Simple and effective remedies.")
              },
              { 
                icon: <Heart />, 
                title: pick("मानसिक शांती", "मानसिक शांति", "Peace of Mind"),
                desc: pick("आध्यात्मिक प्रगतीसाठी मार्गदर्शन।", "आध्यात्मिक प्रगति के लिए मार्गदर्शन।", "Guidance for spiritual growth.")
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="expertise-box-ultra"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="icon-wrap">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="about-contact-banner">
        <div className="container">
          <div className="banner-inner">
            <div className="banner-text">
              <h2>{pick("तुमचा शुभ काळ कधी सुरू होणार?", "आपका शुभ समय कब शुरू होगा?", "When will your auspicious time begin?")}</h2>
              <p>{pick("आजच आचार्य रतिश कुमार यांच्याशी चर्चा करा।", "आज ही आचार्य रतिश कुमार से चर्चा करें।", "Discuss today with Acharya Ratish Kumar.")}</p>
            </div>
            <a href="https://wa.me/917030806080" className="btn-modern-white">{pick("सल्ला घ्या", "परामर्श लें", "Get Consultation")}</a>
          </div>
        </div>
      </section>

      {/* Extra SEO Content */}
      <div className="container">
        <AstrologySeoContent pageType="about" />
      </div>
    </div>
  );
}
