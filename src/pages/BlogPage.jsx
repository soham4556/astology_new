import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SeoMeta from "../components/common/SeoMeta";
import { useLanguage } from "../hooks/useLanguage";

const BLOG_POSTS = [
  {
    id: 1,
    title: {
      en: "How to Read Your Birth Chart Without Overwhelm",
      hi: "बिना भ्रम के अपनी जन्मकुंडली कैसे पढ़ें",
    },
    excerpt: {
      en: "A practical first-step framework to understand houses, planets, and yogas in your chart.",
      hi: "हाउस, ग्रह और योग को आसान तरीके से समझने के लिए एक practical शुरुआती ढांचा।",
    },
    date: "March 15, 2026",
    category: "Basics",
    image:
      "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 2,
    title: {
      en: "Moon Sign vs Sun Sign: Which Matters More?",
      hi: "चंद्र राशि बनाम सूर्य राशि: किसे ज्यादा महत्व दें?",
    },
    excerpt: {
      en: "Understand when your emotional pattern matters more than your outer personality signature.",
      hi: "जानिए कब आपकी भावनात्मक प्रवृत्ति आपकी बाहरी व्यक्तित्व पहचान से ज्यादा महत्वपूर्ण होती है।",
    },
    date: "March 12, 2026",
    category: "Mindset",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 3,
    title: {
      en: "Mercury Retrograde: A Practical Survival Checklist",
      hi: "बुध वक्री: काम आने वाली survival checklist",
    },
    excerpt: {
      en: "Use this clear checklist for communication, travel, and signing decisions during retrograde windows.",
      hi: "वक्री अवधि में संचार, यात्रा और दस्तावेज़ निर्णयों के लिए यह साफ checklist अपनाएं।",
    },
    date: "March 10, 2026",
    category: "Planetary",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 4,
    title: {
      en: "Kundali Matching Beyond Guna Milan",
      hi: "गुण मिलान से आगे: गहरी कुंडली जुळवणी",
    },
    excerpt: {
      en: "See how temperament, timing, and family patterns complete the compatibility picture.",
      hi: "अनुकूलता का पूरा चित्र समझने के लिए स्वभाव, समय और पारिवारिक पैटर्न भी देखें।",
    },
    date: "March 08, 2026",
    category: "Match",
    image:
      "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 5,
    title: {
      en: "Saturn Transit 2026: Discipline and Growth",
      hi: "शनि गोचर 2026: अनुशासन और प्रगति",
    },
    excerpt: {
      en: "A grounded view on how Shani teaches consistency in finance, career, and long-term goals.",
      hi: "शनि किस तरह वित्त, करिअर और दीर्घकालीन लक्ष्यों में अनुशासन सिखाता है, इसे सरल रूप में समझें।",
    },
    date: "March 05, 2026",
    category: "Transits",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 6,
    title: {
      en: "Simple Daily Rituals for Better Planetary Balance",
      hi: "ग्रह संतुलन के लिए आसान दैनिक उपाय",
    },
    excerpt: {
      en: "Short morning and evening practices you can follow without changing your full routine.",
      hi: "अपनी दिनचर्या बदले बिना अपनाए जा सकने वाले छोटे सुबह-शाम अभ्यास।",
    },
    date: "March 02, 2026",
    category: "Remedies",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1400",
  },
];

export default function BlogPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <div className="page-shell blog-page-shell">
      <SeoMeta
        title={
          isHindi
            ? "ब्लॉग | Jai Mata Di Astrology"
            : "Blog | Jai Mata Di Astrology"
        }
        description={
          isHindi
            ? "Jai Mata Di Astrology ब्लॉग में वैदिक ज्योतिष पर सरल, आधुनिक और व्यावहारिक लेख पढ़ें।"
            : "Read practical and modern Vedic astrology articles on the Jai Mata Di Astrology blog."
        }
        path="/blog"
      />

      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="blog-hero-content">
          <span className="blog-hero-tag">Jai Mata Di Journal</span>
          <h1>{isHindi ? "ज्योतिष ब्लॉग" : "Astrology Insights"}</h1>
          <p>
            {isHindi
              ? "गहन ज्योतिष ज्ञान को सरल, उपयोगी और रोज़मर्रा के निर्णयों के लिए actionable तरीके में पढ़ें।"
              : "Explore deep astrology concepts in a practical format you can apply to everyday decisions."}
          </p>
        </div>
      </section>

      <section className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-media">
              <img
                src={post.image}
                alt={post.title[language] || post.title.en}
                loading="lazy"
              />
            </div>

            <div className="blog-card-body">
              <span className="blog-chip">{post.category}</span>
              <h2>{post.title[language] || post.title.en}</h2>
              <p>{post.excerpt[language] || post.excerpt.en}</p>

              <div className="blog-card-meta">
                <span>
                  <Calendar size={14} />
                  {post.date}
                </span>
                <button type="button" className="blog-read-btn">
                  {isHindi ? "और पढ़ें" : "Read More"}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="blog-cta" style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--surface-1)', borderRadius: 'var(--r-xl)', border: '1px solid var(--border-gold)', margin: '40px auto', maxWidth: '1000px' }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '15px', fontFamily: 'var(--font-deva)' }}>
          {language === 'mr' ? "वैयक्तिक सल्ला हवा आहे?" : isHindi ? "व्यक्तिगत परामर्श चाहिए?" : "Need Personalized Guidance?"}
        </h2>
        <p style={{ color: 'var(--text-silver)', fontSize: '1.2rem', marginBottom: '25px', fontFamily: 'var(--font-deva)' }}>
          {language === 'mr' ? "तुमच्या प्रश्नांसाठी वैयक्तिक कुंडलीवर आधारित मार्गदर्शन मिळवा।" : isHindi
            ? "अपने प्रश्नों के लिए व्यक्तिगत कुंडली आधारित मार्गदर्शन प्राप्त करें।"
            : "Get chart-based one-on-one guidance tailored to your exact questions."}
        </p>
        <Link to="/contact" className="btn-primary" style={{ padding: '12px 36px', fontSize: '1rem' }}>
          {language === 'mr' ? "आताच संपर्क करा" : isHindi ? "अभी परामर्श लें" : "Consult Now"}
        </Link>
      </section>
    </div>
  );
}
