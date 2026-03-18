import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { RASHI_DATA } from "../../utils/constants";

const SERVICE_ITEMS = [
  {
    icon: "🧿",
    titleMr: "जन्मकुंडली डीप डाइव्ह",
    titleHi: "जन्मकुंडली डीप डाइव",
    titleEn: "Birth Chart Deep Dive",
    subtitle: "BIRTH CHART",
    descMr:
      "तुमच्या ग्रहस्थितीवर आधारित करिअर, आरोग्य, नाते आणि आर्थिक निर्णयांसाठी तपशीलवार मार्गदर्शन.",
    descHi:
      "आपकी कुंडली के आधार पर करियर, स्वास्थ्य, रिश्ते और वित्त के लिए स्पष्ट मार्गदर्शन.",
    descEn:
      "Detailed chart-based guidance for career, health, relationships, and financial decisions.",
    priceMr: "₹599 पासून",
    priceHi: "₹599 से",
    priceEn: "From ₹599",
  },
  {
    icon: "🫱🏼‍🫲🏽",
    titleMr: "कुंडली जुळवणी",
    titleHi: "कुंडली मिलान",
    titleEn: "Kundali Compatibility",
    subtitle: "COMPATIBILITY",
    descMr:
      "अष्टकूट, मंगळ आणि व्यवहारिक पैलूंसह relationship compatibility report मिळवा.",
    descHi:
      "अष्टकूट, मांगलिक और व्यवहारिक पहलुओं के साथ relationship compatibility report पाएँ.",
    descEn:
      "Get a compatibility report combining Ashtakoot, Manglik, and practical relationship factors.",
    priceMr: "₹899 पासून",
    priceHi: "₹899 से",
    priceEn: "From ₹899",
  },
  {
    icon: "📊",
    titleMr: "करिअर टाइमिंग मॅप",
    titleHi: "कैरियर टाइमिंग मैप",
    titleEn: "Career Timing Map",
    subtitle: "CAREER TIMING",
    descMr:
      "जॉब switch, promotion किंवा business launch साठी योग्य कालावधी शोधा.",
    descHi: "जॉब switch, promotion या business launch के लिए सही समय पहचानें.",
    descEn:
      "Identify the right windows for job change, promotions, or a business launch.",
    priceMr: "₹1099 पासून",
    priceHi: "₹1099 से",
    priceEn: "From ₹1099",
  },
  {
    icon: "🪔",
    titleMr: "उपाय आणि पूजा योजना",
    titleHi: "उपाय और पूजा योजना",
    titleEn: "Remedies and Puja Plan",
    subtitle: "REMEDIES",
    descMr:
      "साडेसाती, कालसर्प व इतर दोषांसाठी practical, साधे आणि वैदिक उपाय मिळवा.",
    descHi:
      "साढ़ेसाती, कालसर्प और अन्य दोषों के लिए practical और वैदिक उपाय पाएँ.",
    descEn:
      "Get practical Vedic remedies and puja guidance for Sade Sati, Kaal Sarp, and related doshas.",
    priceMr: "₹699 पासून",
    priceHi: "₹699 से",
    priceEn: "From ₹699",
  },
];

const TESTIMONIALS = [
  {
    name: "साक्षी देशमुख",
    city: "पुणे",
    lang: "मराठी",
    textMr:
      "रिपोर्ट खूप structured होता. काय करायचे आणि कधी करायचे हे स्पष्ट समजले.",
    textHi:
      "रिपोर्ट बहुत structured था. क्या करना है और कब करना है, बिल्कुल clear हुआ.",
    textEn:
      "The report was highly structured. It clearly explained what to do and when to do it.",
  },
  {
    name: "काव्या त्रिपाठी",
    city: "पुणे",
    lang: "हिंदी",
    textMr:
      "Consultation practical होता आणि unnecessary भीती न दाखवता मार्गदर्शन मिळाले.",
    textHi: "Consultation practical था और डराने के बजाय साफ guidance मिला.",
    textEn:
      "The consultation was practical and gave clear guidance without unnecessary fear.",
  },
  {
    name: "Rhea Naik",
    city: "Pune",
    lang: "English",
    textMr:
      "Timing recommendations were precise and easy to apply in real life.",
    textHi:
      "Timing recommendations precise थे और real-life decisions में काम आए.",
    textEn:
      "Timing recommendations were precise and easy to apply in real life.",
  },
];

const LANGUAGE_CARDS = [
  { code: "MR", line1: "ताऱ्यांमधून दिशा", line2: "जीवनात स्पष्ट कृती" },
  { code: "HI", line1: "सितारों से संकेत", line2: "फैसले आपके" },
  { code: "EN", line1: "Read the Sky", line2: "Plan the Next Move" },
  { code: "GU", line1: "જ્યોતિષ માર્ગ", line2: "તમારા નિર્ણય" },
  { code: "TA", line1: "ஜோதிடம் வழிகாட்டும்", line2: "உங்கள் முடிவு" },
  { code: "BN", line1: "তারার পাঠ", line2: "আপনার সিদ্ধান্ত" },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="nova-section-heading">
      <p className="nova-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default function HomeSections() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [selectedRashi, setSelectedRashi] = useState("");
  const contentLanguage = ["mr", "hi", "en"].includes(language)
    ? language
    : "en";

  const pickText = (mrText, hiText, enText) => {
    if (contentLanguage === "mr") {
      return mrText;
    }
    if (contentLanguage === "hi") {
      return hiText;
    }
    return enText;
  };

  const quickInsights = pickText(
    [
      "15 मिनिटांत प्रीव्यू रिपोर्ट",
      "AI + Expert Review Model",
      "Pune-based team, global support",
    ],
    [
      "15 मिनट में प्रीव्यू रिपोर्ट",
      "AI + Expert Review Model",
      "Pune-based team, global support",
    ],
    [
      "Preview report in 15 minutes",
      "AI + Expert Review Model",
      "Pune-based team, global support",
    ],
  );

  const serviceOptions = pickText(
    ["जन्मकुंडली विश्लेषण", "कुंडली जुळवणी", "करिअर टाइमिंग", "उपाय आणि पूजा"],
    ["जन्मकुंडली विश्लेषण", "कुंडली मिलान", "कैरियर टाइमिंग", "उपाय और पूजा"],
    [
      "Birth Chart Analysis",
      "Kundali Matching",
      "Career Timing",
      "Remedies & Puja",
    ],
  );

  return (
    <div className="nova-home">
      <section className="nova-hero">
        <div className="nova-hero-grid">
          <div>
            <span
              className="nova-chip"
              dangerouslySetInnerHTML={{ __html: t("hero-badge") }}
            />

            <h1 dangerouslySetInnerHTML={{ __html: t("hero-title") }} />

            <p
              className="nova-hero-sub"
              dangerouslySetInnerHTML={{ __html: t("hero-subtitle") }}
            />

            <div className="nova-quick-tags">
              {quickInsights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="nova-cta-row">
              <Link className="nova-btn-solid" to="/dashboard">
                {t("hero-btn1")}
              </Link>
              <Link className="nova-btn-ghost" to="/kundali">
                {t("hero-btn2")}
              </Link>
            </div>
          </div>

          <aside className="nova-hero-panel">
            <h3>{pickText("आजचा फोकस", "आज का फोकस", "Today's Focus")}</h3>
            <ul>
              <li>
                {pickText(
                  "वैयक्तिक ग्रहस्थिती",
                  "व्यक्तिगत ग्रह स्थिति",
                  "Personal planetary snapshot",
                )}
              </li>
              <li>
                {pickText(
                  "नातेसंबंध आणि अनुकूलता",
                  "रिश्ते और अनुकूलता",
                  "Relationships and compatibility",
                )}
              </li>
              <li>
                {pickText(
                  "करिअर निर्णय विंडो",
                  "कैरियर निर्णय विंडो",
                  "Career decision windows",
                )}
              </li>
              <li>
                {pickText(
                  "पूजा आणि उपाय सुचना",
                  "पूजा और उपाय सुझाव",
                  "Puja and remedies guidance",
                )}
              </li>
            </ul>

            <div className="nova-panel-cta">
              <p>
                {pickText(
                  "आजचे पंचांग पहा",
                  "आज का पंचांग देखें",
                  "Check today's Panchang",
                )}
              </p>
              <Link to="/panchang/today">
                {pickText("आता पहा", "अब देखें", "View now")}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="nova-stats-strip">
        {[
          { value: "25+", label: t("stat1") },
          { value: "5L+", label: t("stat2") },
          { value: "50+", label: t("stat3") },
          { value: "12", label: t("stat4") },
          { value: "4.9", label: t("stat5") },
        ].map((item) => (
          <article key={item.value} className="nova-stat">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="nova-section nova-zodiac">
        <SectionHeading
          eyebrow={pickText("राशी निवड", "राशि चयन", "Zodiac Selection")}
          title={t("rashi-title")}
          subtitle={pickText(
            "तुमचा आजचा संकेत पहा",
            "अपना दैनिक संकेत देखें",
            "Check your daily sign guidance",
          )}
        />

        <div className="nova-zodiac-grid">
          {RASHI_DATA.map((rashi) => (
            <button
              key={rashi.key}
              type="button"
              className="nova-zodiac-card"
              onClick={() => {
                setSelectedRashi(rashi.key);
                navigate(`/horoscope?sign=${encodeURIComponent(rashi.key)}`);
              }}
            >
              <span className="nova-zodiac-symbol">{rashi.symbol}</span>
              <span className="nova-zodiac-hi">{rashi.hi}</span>
              <span className="nova-zodiac-en">{rashi.en}</span>
            </button>
          ))}
        </div>

        {selectedRashi ? (
          <p className="nova-selection-note">
            {pickText("निवडलेली राशी:", "चुनी हुई राशि:", "Selected sign:")}{" "}
            {selectedRashi}
          </p>
        ) : null}
      </section>

      <section id="services" className="nova-section nova-services">
        <SectionHeading
          eyebrow={pickText("विशेष सेवा", "विशेष सेवाएं", "Special Services")}
          title={t("services-title")}
          subtitle={pickText(
            "ज्योतिष + स्पष्ट action plan",
            "ज्योतिष + स्पष्ट एक्शन प्लान",
            "Astrology + clear action plan",
          )}
        />

        <div className="nova-service-grid">
          {SERVICE_ITEMS.map((service) => (
            <article key={service.subtitle} className="nova-service-card">
              <div className="nova-service-head">
                <span className="nova-service-icon">{service.icon}</span>
                <div>
                  <h3>
                    {pickText(
                      service.titleMr,
                      service.titleHi,
                      service.titleEn,
                    )}
                  </h3>
                  <p>{service.subtitle}</p>
                </div>
              </div>

              <p className="nova-service-desc">
                {pickText(service.descMr, service.descHi, service.descEn)}
              </p>

              <div className="nova-service-foot">
                <span>
                  {pickText(service.priceMr, service.priceHi, service.priceEn)}
                </span>
                <button type="button" onClick={() => navigate("/dashboard")}>
                  {pickText("बुक करा", "बुक करें", "Book now")}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="nova-section nova-languages">
        <SectionHeading
          eyebrow={pickText(
            "बहुभाषिक सपोर्ट",
            "बहुभाषी सपोर्ट",
            "Multilingual Support",
          )}
          title={pickText(
            "तुमच्या भाषेत मार्गदर्शन",
            "आपकी भाषा में मार्गदर्शन",
            "Guidance in your language",
          )}
          subtitle={pickText(
            "पारंपरिक ज्ञान, आधुनिक सादरीकरण",
            "पारंपरिक ज्ञान, आधुनिक प्रस्तुति",
            "Traditional knowledge, modern presentation",
          )}
        />

        <div className="nova-language-grid">
          {LANGUAGE_CARDS.map((card) => (
            <article key={card.code} className="nova-language-card">
              <span>{card.code}</span>
              <h3>{card.line1}</h3>
              <p>{card.line2}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nova-section nova-testimonials">
        <SectionHeading
          eyebrow={pickText(
            "क्लायंट अनुभव",
            "क्लाइंट अनुभव",
            "Client Experience",
          )}
          title={t("reviews-title")}
          subtitle={pickText(
            "विश्वासार्ह सल्ला, स्पष्ट परिणाम",
            "विश्वसनीय सलाह, स्पष्ट परिणाम",
            "Reliable advice, clear outcomes",
          )}
        />

        <div className="nova-testimonial-grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="nova-testimonial-card">
              <p>{pickText(item.textMr, item.textHi, item.textEn)}</p>
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.city} · {item.lang}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="nova-section nova-contact">
        <SectionHeading
          eyebrow={pickText("थेट संपर्क", "सीधा संपर्क", "Direct Contact")}
          title={t("contact-title")}
          subtitle={pickText(
            "आम्ही 24 तासांत प्रतिसाद देतो",
            "हम 24 घंटे में जवाब देते हैं",
            "We respond within 24 hours",
          )}
        />

        <div className="nova-contact-grid">
          <div className="nova-contact-info">
            <h3>{t("contact-info-title")}</h3>

            <article>
              <span>📞</span>
              <div>
                <p>+91 7030806080</p>
                <small>
                  {pickText(
                    "सोम-शनि 10am - 8pm",
                    "सोम-शनि 10am - 8pm",
                    "Mon-Sat 10am - 8pm",
                  )}
                </small>
              </div>
            </article>

            <article>
              <span>✉</span>
              <div>
                <p>hello@nakshatrapath.in</p>
                <small>
                  {pickText(
                    "24 तासांत उत्तर",
                    "24 घंटे में उत्तर",
                    "Reply within 24 hours",
                  )}
                </small>
              </div>
            </article>

            <article>
              <span>📍</span>
              <div>
                <p>Baner, Pune, Maharashtra - 411045</p>
                <small>
                  {pickText("भारत कार्यालय", "भारत कार्यालय", "India office")}
                </small>
              </div>
            </article>
          </div>

          <form
            className="nova-contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/signup");
            }}
          >
            <h3>{t("form-title")}</h3>

            <label htmlFor="nova-name">{t("form-name-label")}</label>
            <input id="nova-name" type="text" required />

            <label htmlFor="nova-phone">{t("form-phone-label")}</label>
            <input id="nova-phone" type="tel" required />

            <label htmlFor="nova-service">{t("form-service-label")}</label>
            <select id="nova-service" defaultValue={serviceOptions[0]}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <label htmlFor="nova-message">{t("form-msg-label")}</label>
            <textarea id="nova-message" rows={4} />

            <button type="submit">{t("form-btn")}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
