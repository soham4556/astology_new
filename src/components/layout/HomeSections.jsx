import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { RASHI_DATA } from "../../utils/constants";
import AstrologySeoContent from "./AstrologySeoContent";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  X,
  MessageSquare,
  Star as StarIcon
} from "lucide-react";

const TESTIMONIALS = [
  { name: { mr: "राहुल कुलकर्णी", hi: "राहुल कुलकर्णी", en: "Rahul Kulkarni" }, text: { mr: "आचार्यजींनी दिलेली माहिती एकदम अचूक निघाली. माझ्या करिअरमधील अडथळे आता दूर झाले आहेत.", hi: "आचार्य जी की भविष्यवाणियां एकदम सटीक थीं। मेरे करियर की बाधाएं अब दूर हो गई हैं।", en: "Acharya ji's predictions were spot on. My career hurdles have finally been resolved." }, rating: 5 },
  { name: { mr: "प्रिया शर्मा", hi: "प्रिया शर्मा", en: "Priya Sharma" }, text: { mr: "विवाह कुंडली मिलानसाठी आचार्य रतिश कुमार उत्तम आहेत. त्यांचे साधे उपाय खूप गुणकारी ठरले.", hi: "विवाह कुंडली मिलान के लिए आचार्य रतिश कुमार सर्वश्रेष्ठ हैं। उनके साधारण उपाय बहुत प्रभावी रहे।", en: "Acharya Ratish Kumar is the best for marriage matching. His simple remedies worked wonders." }, rating: 5 },
  { name: { mr: "अमित पाटील", hi: "अमित पाटील", en: "Amit Patil" }, text: { mr: "वास्तू सल्ल्यामुळे माझ्या घरामध्ये आता सकारात्मक ऊर्जा जाणवते. खूप खूप धन्यवाद!", hi: "वास्तु परामर्श के बाद मेरे घर में सकारात्मक ऊर्जा का संचार हुआ है। बहुत-बहुत धन्यवाद!", en: "After the Vastu consultation, I can feel the positive energy in my home. Thank you so much!" }, rating: 5 }
];

const FAQS = [
  { q: { mr: "परामर्श घेण्यासाठी काय माहिती द्यावी लागते?", hi: "परामर्श के लिए क्या जानकारी देनी होती है?", en: "What information is needed for a consultation?" }, a: { mr: "आम्हाला तुमची अचूक जन्म तारीख, जन्म वेळ आणि जन्म ठिकाण आवश्यक असते.", hi: "हमें आपकी सटीक जन्म तिथि, जन्म का समय और जन्म स्थान की आवश्यकता होती है।", en: "We need your exact date of birth, time of birth, and place of birth." } },
  { q: { mr: "तुमचे उपाय खूप महाग असतात का?", hi: "क्या आपके उपाय बहुत महंगे होते हैं?", en: "Are the remedies expensive?" }, a: { mr: "नाही! आम्ही अतिशय साधे, नैसर्गिक आणि घरच्या घरी करता येण्यासारखे प्रभावी उपाय सुचवतो.", hi: "नहीं! हम बहुत ही सरल और प्राकृतिक उपाय सुझाते हैं जो आप स्वयं कर सकते हैं।", en: "No! We suggest very simple, natural, and effective remedies that you can do yourself." } },
  { q: { mr: "ऑनलाईन कन्सल्टेशन शक्य आहे का?", hi: "क्या ऑनलाइन परामर्श संभव है?", en: "Is online consultation possible?" }, a: { mr: "हो, आचार्य रतिश कुमार व्हिडिओ कॉल किंवा फोनद्वारे जगभरात मार्गदर्शन करतात.", hi: "हाँ, आचार्य रतिश कुमार वीडियो कॉल या फोन के माध्यम से दुनिया भर में मार्गदर्शन करते हैं।", en: "Yes, Acharya Ratish Kumar provides guidance worldwide via video call or phone." } }
];

const SERVICE_ITEMS = [
  {
    icon: "🧿",
    titleMr: "जन्मकुंडली सखोल विश्लेषण",
    titleHi: "जन्मकुंडली गहन विश्लेषण",
    titleEn: "Birth Chart In-depth Analysis",
    descMr: "तुमच्या ग्रहस्थितीवर आधारित करिअर, आरोग्य आणि जीवनातील महत्त्वाच्या निर्णयांसाठी मार्गदर्शन.",
    descHi: "आपकी कुंडली के आधार पर जीवन के महत्वपूर्ण निर्णयों के लिए मार्गदर्शन।",
    descEn: "Detailed guidance for life's important decisions based on your planetary positions.",
    link: "/services/kundali-analysis",
  },
  {
    icon: "🫱🏼‍🫲🏽",
    titleMr: "विवाह कुंडली जुळवणी",
    titleHi: "विवाह कुंडली मिलान",
    titleEn: "Marriage Compatibility",
    descMr: "अष्टकूट गुणमिलान आणि मांगलिक दोषांचे सखोल विश्लेषण.",
    descHi: "अष्टकूट गुण मिलान और मांगलिक दोष का गहन विश्लेषण।",
    descEn: "Detailed analysis of Ashtakoot Guna Milan and Manglik Dosha.",
    link: "/services/marriage-matching",
  },
  {
    icon: "🏠",
    titleMr: "वास्तु शास्त्र सल्ला",
    titleHi: "वास्तु शास्त्र परामर्श",
    titleEn: "Vastu Shastra Consultation",
    descMr: "घर आणि कामाच्या ठिकाणी सकारात्मक ऊर्जा वाढवण्यासाठी उपाय.",
    descHi: "घर और कार्यस्थल पर सकारात्मक ऊर्जा के लिए सरल वास्तु उपाय।",
    descEn: "Vastu remedies to enhance positive energy at your home and workplace.",
    link: "/services/vastu-consultation",
  },
];

export default function HomeSections() {
  const { t, language } = useLanguage();
  const [selectedRashi, setSelectedRashi] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const pickText = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="nova-home">
      {/* Rashi Detail Modal */}
      <AnimatePresence>
        {selectedRashi && (
          <div className="rashi-overlay" onClick={() => setSelectedRashi(null)}>
            <motion.div 
              className="rashi-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="rashi-close" onClick={() => setSelectedRashi(null)}><X /></button>
              <div className="rashi-modal-head">
                <span className="rashi-sym">{selectedRashi.symbol}</span>
                <h2>{pickText(selectedRashi.name.mr, selectedRashi.name.hi, selectedRashi.name.en)}</h2>
              </div>
              <div className="rashi-modal-body">
                <p><strong>{pickText("स्वभाव:", "स्वभाव:", "Traits:")}</strong> {pickText(selectedRashi.traits.mr, selectedRashi.traits.hi, selectedRashi.traits.en)}</p>
                <div className="rashi-stats-small">
                    <div><span>{pickText("शुभ अंक:", "शुभ अंक:", "Lucky Number:")}</span> <strong>{selectedRashi.luckyNumber}</strong></div>
                    <div><span>{pickText("शुभ रंग:", "शुभ रंग:", "Lucky Color:")}</span> <strong>{pickText(selectedRashi.luckyColor.mr, selectedRashi.luckyColor.hi, selectedRashi.luckyColor.en)}</strong></div>
                </div>
              </div>
              <Link to="/contact" className="btn-modern-gold" onClick={() => setSelectedRashi(null)}>
                {pickText("तुमचे भविष्य जाणून घ्या", "अपना भविष्य जानें", "Get Free Advice")}
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section className="nova-hero">
        <div className="nova-hero-grid single-col">
          <motion.div className="hero-main-info" initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="nova-chip" dangerouslySetInnerHTML={{ __html: t("hero-badge") }} />
            <h1 dangerouslySetInnerHTML={{ __html: t("hero-title") }} />
            <p className="nova-hero-sub" dangerouslySetInnerHTML={{ __html: t("hero-subtitle") }} />
            <div className="nova-cta-row">
              <Link className="nova-btn-solid" to="/contact">{t("hero-btn1")}</Link>
              <Link className="nova-btn-ghost" to="/about">{t("hero-btn2")}</Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Rashi Selector Section */}
      <section className="rashi-selector-section">
        <div className="container">
          <SectionHeading eyebrow="Zodiac" title={pickText("तुमची रास निवडा", "अपनी राशि चुनें", "Select Your Rashi")} />
          <div className="rashi-circle-grid">
            {RASHI_DATA.map((rashi) => (
              <motion.div 
                key={rashi.key}
                className="rashi-item-modern"
                whileHover={{ scale: 1.1, backgroundColor: "var(--gold-trace)" }}
                onClick={() => setSelectedRashi(rashi)}
              >
                <span className="rashi-icon-main">{rashi.symbol}</span>
                <span className="rashi-name-main">{pickText(rashi.hi, rashi.hi, rashi.en)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="nova-about-teaser">
        <div className="teaser-container">
          <div className="teaser-grid">
            <div className="teaser-image">
              <div className="img-holder">
                <img src="/acharya-ratish.jpg" alt="Acharya Ratish" />
              </div>
            </div>
            <div className="teaser-text">
              <span className="teaser-badge">{pickText("मुख्य ज्योतिषी", "मुख्य ज्योतिषी", "Head Astrologer")}</span>
              <h2>{pickText("आचार्य रतिश कुमार", "आचार्य रतिश कुमार", "Acharya Ratish Kumar")}</h2>
              <p>{pickText("१५+ वर्षांचा अनुभव आणि हजारो समाधानी कुटुंबे. वैदिक ज्योतिषाचा वारसा आणि आधुनिक दृष्टिकोन.", "१५+ वर्षों का अनुभव और हजारों संतुष्ट परिवार। वैदिक ज्योतिष की विरासत और आधुनिक दृष्टिकोण।", "15+ years of experience and thousands of happy families. A blend of Vedic legacy and modern perspective.")}</p>
              <Link to="/about" className="teaser-link">{pickText("सविस्तर वाचा ➜", "विस्तार से पढ़ें ➜", "Read More ➜")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="nova-services" id="services">
        <div className="container">
          <SectionHeading eyebrow="Expertise" title={pickText("आमच्या मुख्य सेवा", "हमारी मुख्य सेवाएं", "Our Core Services")} />
          <div className="nova-service-grid">
            {SERVICE_ITEMS.map((service, i) => (
              <motion.article key={i} className="nova-service-card" whileHover={{ y: -10 }}>
                <span className="nova-service-icon">{service.icon}</span>
                <h3>{pickText(service.titleMr, service.titleHi, service.titleEn)}</h3>
                <p className="nova-service-desc">{pickText(service.descMr, service.descHi, service.descEn)}</p>
                <Link to={service.link} className="nova-service-link">{pickText("अधिक माहिती ➜", "अधिक जानकारी ➜", "Learn More ➜")}</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-modern">
        <div className="container">
          <SectionHeading eyebrow="Reviews" title={pickText("ग्राहकांचे अनुभव", "ग्राहकों के अनुभव", "Success Stories")} />
          <div className="testimonial-slider-wrap">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testimonialIdx}
                className="testimonial-card-active"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <MessageSquare className="quote-icon-alt" size={40} />
                <p className="testimonial-quote">"{pickText(TESTIMONIALS[testimonialIdx].text.mr, TESTIMONIALS[testimonialIdx].text.hi, TESTIMONIALS[testimonialIdx].text.en)}"</p>
                <div className="testimonial-author">
                  <h4>- {pickText(TESTIMONIALS[testimonialIdx].name.mr, TESTIMONIALS[testimonialIdx].name.hi, TESTIMONIALS[testimonialIdx].name.en)}</h4>
                  <div className="stars">{"★".repeat(5)}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="slider-dots">
              {TESTIMONIALS.map((_, i) => (
                <span key={i} className={`dot ${i === testimonialIdx ? 'active' : ''}`} onClick={() => setTestimonialIdx(i)}></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-modern">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title={pickText("वारंवार विचारले जाणारे प्रश्न", "अक्सर पूछे जाने वाले प्रश्न", "Common Questions")} />
          <div className="faq-accordion">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item-modern ${activeFaq === i ? 'open' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="faq-q-modern">
                  <span>{pickText(faq.q.mr, faq.q.hi, faq.q.en)}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      className="faq-a-modern"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{pickText(faq.a.mr, faq.a.hi, faq.a.en)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <div className="container">
        <AstrologySeoContent pageType="home" />
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, light }) {
  return (
    <div className={`nova-section-heading ${light ? "light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className="heading-line"></div>
    </div>
  );
}
