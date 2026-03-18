import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  LogIn,
  LayoutDashboard,
  Home,
  Sparkles,
  ScrollText,
  BarChart4,
  Binary,
  CalendarDays,
  Link2,
  Gem,
  BookText,
  User,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useLanguage } from "../../hooks/useLanguage";
import { NAV_ITEMS, TICKER_ITEMS } from "../../utils/constants";

const TICKER_ITEMS_BY_LANGUAGE = {
  mr: TICKER_ITEMS,
  hi: [
    "✨ दैनिक राशिफल अब तुरंत उपलब्ध",
    "🪐 पर्सनल कुंडली रिपोर्ट तैयार करें",
    "🤝 अष्टकूट और मांगलिक मिलान सेवाएं",
    "📅 आज का पंचांग और शुभ मुहूर्त देखें",
    "📍 पुणे केंद्र से ऑनलाइन परामर्श बुक करें",
  ],
  en: [
    "✨ Daily horoscope updates available instantly",
    "🪐 Generate personalized kundali reports",
    "🤝 Kundali, Ashtakoot, and Manglik compatibility",
    "📅 Check today's Panchang and Muhurat",
    "📍 Book online consultation from Pune center",
  ],
  gu: [
    "✨ દૈનિક રાશિફળ હવે તરત ઉપલબ્ધ",
    "🪐 વ્યક્તિગત કુંડળી રિપોર્ટ તૈયાર કરો",
    "🤝 અષ્ટકૂટ અને માંગલિક મેળાપ સેવાઓ",
    "📅 આજનું પંચાંગ અને મુહૂર્ત જુઓ",
    "📍 પુણે કેન્દ્રથી ઓનલાઇન પરામર્શ બુક કરો",
  ],
  ta: [
    "✨ தினசரி ஜாதகம் உடனே கிடைக்கும்",
    "🪐 தனிப்பட்ட குண்டலி அறிக்கை உருவாக்குங்கள்",
    "🤝 அஷ்டகூட் மற்றும் மாங்கலிக் பொருத்த சேவைகள்",
    "📅 இன்றைய பஞ்சாங்கம் மற்றும் முகூர்த்தம் பார்க்கவும்",
    "📍 புனே மையத்தில் இருந்து ஆன்லைன் ஆலோசனை பதிவு செய்யுங்கள்",
  ],
  bn: [
    "✨ দৈনিক রাশিফল এখনই উপলব্ধ",
    "🪐 ব্যক্তিগত কুণ্ডলী রিপোর্ট তৈরি করুন",
    "🤝 অষ্টকূট ও মাঙ্গলিক ম্যাচিং পরিষেবা",
    "📅 আজকের পঞ্চাঙ্গ ও শুভ মুহূর্ত দেখুন",
    "📍 পুণে কেন্দ্র থেকে অনলাইন পরামর্শ বুক করুন",
  ],
  te: [
    "✨ రోజువారీ రాశిఫలం వెంటనే అందుబాటులో",
    "🪐 వ్యక్తిగత కుండలి నివేదికను సిద్ధం చేయండి",
    "🤝 అష్టకూట్ మరియు మాంగ్లిక్ మ్యాచింగ్ సేవలు",
    "📅 ఈ రోజు పంచాంగం మరియు ముహూర్తం చూడండి",
    "📍 పూణే కేంద్రం నుండి ఆన్‌లైన్ సంప్రదింపును బుక్ చేయండి",
  ],
};

const UI_TEXT_BY_LANGUAGE = {
  mr: {
    dashboard: "डॅशबोर्ड",
    login: "लॉगिन",
    toggleMenu: "मेनू उघडा किंवा बंद करा",
    whatsappTitle: "व्हॉट्सअॅप",
    whatsappContact: "व्हॉट्सअॅप संपर्क",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    login: "लॉगिन",
    toggleMenu: "मेनू खोलें या बंद करें",
    whatsappTitle: "व्हाट्सऐप",
    whatsappContact: "व्हाट्सऐप संपर्क",
  },
  en: {
    dashboard: "Dashboard",
    login: "Login",
    toggleMenu: "Toggle menu",
    whatsappTitle: "WhatsApp",
    whatsappContact: "WhatsApp contact",
  },
  gu: {
    dashboard: "ડેશબોર્ડ",
    login: "લોગિન",
    toggleMenu: "મેનુ ખોલો અથવા બંધ કરો",
    whatsappTitle: "વોટ્સએપ",
    whatsappContact: "વોટ્સએપ સંપર્ક",
  },
  ta: {
    dashboard: "டாஷ்போர்டு",
    login: "உள்நுழைவு",
    toggleMenu: "மெனுவை திறக்க அல்லது மூட",
    whatsappTitle: "வாட்ஸ்அப்",
    whatsappContact: "வாட்ஸ்அப் தொடர்பு",
  },
  bn: {
    dashboard: "ড্যাশবোর্ড",
    login: "লগইন",
    toggleMenu: "মেনু খুলুন বা বন্ধ করুন",
    whatsappTitle: "হোয়াটসঅ্যাপ",
    whatsappContact: "হোয়াটসঅ্যাপ যোগাযোগ",
  },
  te: {
    dashboard: "డాష్‌బోర్డ్",
    login: "లాగిన్",
    toggleMenu: "మెనూని తెరవండి లేదా మూసివేయండి",
    whatsappTitle: "వాట్సాప్",
    whatsappContact: "వాట్సాప్ సంప్రదింపు",
  },
};

const FOOTER_COPY_BY_LANGUAGE = {
  mr: {
    description:
      "NakshatraPath Astrology हे पुणे-आधारित आधुनिक वैदिक ज्योतिष प्लॅटफॉर्म आहे. पारंपरिक ज्ञान आणि आधुनिक साधनांचा वापर करून व्यावहारिक मार्गदर्शन दिले जाते.",
    serviceTitle: "सेवा",
    remediesTitle: "उपाय",
    infoTitle: "माहिती",
    contactTitle: "ऑफिस",
    phone: "फोन",
    email: "ईमेल",
    address: "पत्ता",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "लॉगिन",
    signup: "साइन अप",
    dashboard: "डॅशबोर्ड",
    rights: "सर्व हक्क राखीव",
    global: "Pune-based online astrology services worldwide",
  },
  hi: {
    description:
      "NakshatraPath Astrology पुणे आधारित आधुनिक वैदिक ज्योतिष मंच है, जहां तकनीक और पारंपरिक ज्ञान को मिलाकर व्यावहारिक मार्गदर्शन दिया जाता है।",
    serviceTitle: "सेवाएं",
    remediesTitle: "उपाय",
    infoTitle: "जानकारी",
    contactTitle: "कार्यालय",
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    addressValue: "बाणेर, पुणे, महाराष्ट्र - 411045",
    login: "लॉगिन",
    signup: "साइन अप",
    dashboard: "डैशबोर्ड",
    rights: "सभी अधिकार सुरक्षित",
    global: "पुणे से वैश्विक ऑनलाइन ज्योतिष सेवाएं",
  },
  en: {
    description:
      "NakshatraPath Astrology is a Pune-based modern Vedic astrology platform combining traditional wisdom with practical guidance.",
    serviceTitle: "Services",
    remediesTitle: "Remedies",
    infoTitle: "Information",
    contactTitle: "Office",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "Login",
    signup: "Sign Up",
    dashboard: "Dashboard",
    rights: "All rights reserved",
    global: "Pune-based online astrology services worldwide",
  },
  gu: {
    description:
      "NakshatraPath Astrology પુણે આધારિત આધુનિક વૈદિક જ્યોતિષ પ્લેટફોર્મ છે, જ્યાં પરંપરા અને ટેકનોલોજી સાથે માર્ગદર્શન મળે છે.",
    serviceTitle: "સેવાઓ",
    remediesTitle: "ઉપાય",
    infoTitle: "માહિતી",
    contactTitle: "ઓફિસ",
    phone: "ફોન",
    email: "ઈમેલ",
    address: "સરનામું",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "લોગિન",
    signup: "સાઇન અપ",
    dashboard: "ડેશબોર્ડ",
    rights: "બધા હક્ક સુરક્ષિત",
    global: "પુણે આધારિત ઑનલાઇન જ્યોતિષ સેવાઓ",
  },
  ta: {
    description:
      "NakshatraPath Astrology புனேவை மையமாகக் கொண்ட நவீன வேத ஜோதிட தளம்; பாரம்பரியம் மற்றும் தொழில்நுட்பத்தை இணைத்து வழிகாட்டுகிறது.",
    serviceTitle: "சேவைகள்",
    remediesTitle: "பரிகாரங்கள்",
    infoTitle: "தகவல்",
    contactTitle: "அலுவலகம்",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    address: "முகவரி",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "உள்நுழைவு",
    signup: "பதிவு செய்யவும்",
    dashboard: "டாஷ்போர்டு",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    global: "புனே மையம் கொண்ட ஆன்லைன் ஜோதிட சேவைகள்",
  },
  bn: {
    description:
      "NakshatraPath Astrology পুণে-ভিত্তিক আধুনিক বৈদিক জ্যোতিষ প্ল্যাটফর্ম, যেখানে ঐতিহ্য ও প্রযুক্তির সমন্বয়ে কার্যকর দিকনির্দেশ দেওয়া হয়।",
    serviceTitle: "পরিষেবা",
    remediesTitle: "প্রতিকার",
    infoTitle: "তথ্য",
    contactTitle: "অফিস",
    phone: "ফোন",
    email: "ইমেল",
    address: "ঠিকানা",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "লগইন",
    signup: "সাইন আপ",
    dashboard: "ড্যাশবোর্ড",
    rights: "সমস্ত অধিকার সংরক্ষিত",
    global: "পুণে-ভিত্তিক অনলাইন জ্যোতিষ পরিষেবা",
  },
  te: {
    description:
      "NakshatraPath Astrology పూణే కేంద్రంగా పనిచేసే ఆధునిక వేద జ్యోతిష్య వేదిక. సంప్రదాయం మరియు సాంకేతికతతో ప్రాయోగిక మార్గదర్శకత్వం అందిస్తుంది.",
    serviceTitle: "సేవలు",
    remediesTitle: "పరిహారాలు",
    infoTitle: "సమాచారం",
    contactTitle: "ఆఫీస్",
    phone: "ఫోన్",
    email: "ఇమెయిల్",
    address: "చిరునామా",
    addressValue: "Baner, Pune, Maharashtra - 411045",
    login: "లాగిన్",
    signup: "సైన్ అప్",
    dashboard: "డాష్‌బోర్డ్",
    rights: "అన్ని హక్కులు పరిరక్షించబడ్డాయి",
    global: "పూణే ఆధారిత ఆన్‌లైన్ జ్యోతిష్య సేవలు",
  },
};

const ICON_MAP = {
  Home,
  Sparkles,
  ScrollText,
  BarChart4,
  Binary,
  CalendarDays,
  Link2,
  Gem,
  BookText,
  Phone,
  User,
};

function NavItem({ item, t, isMobile, closeMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = ICON_MAP[item.icon] || Sparkles;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className={`nav-item-wrapper ${hasChildren ? "has-dropdown" : ""} ${isOpen ? "dropdown-open" : ""}`}
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <NavLink
        to={item.to}
        className="nav-item-link"
        onClick={(event) => {
          if (hasChildren && isMobile) {
            event.preventDefault();
            setIsOpen(!isOpen);
          } else if (isMobile) {
            closeMobileMenu();
          }
        }}
      >
        <IconComponent size={18} className="nav-icon" />
        <span>{t(item.key, item.key)}</span>
        {hasChildren && (
          <ChevronDown size={14} className={`chevron ${isOpen ? "up" : ""}`} />
        )}
      </NavLink>

      {hasChildren && (
        <div className="dropdown-menu">
          {item.children.map((child) => (
            <NavLink
              key={child.key}
              to={child.to}
              className="dropdown-item"
              onClick={() => isMobile && closeMobileMenu()}
            >
              {t(child.key, child.key)}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function AmbientBackdrop() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <span className="ambient-orb orb-one" />
      <span className="ambient-orb orb-two" />
      <span className="ambient-orb orb-three" />
      <span className="ambient-orb orb-four" />
      <span className="ambient-ribbon ribbon-one" />
      <span className="ambient-ribbon ribbon-two" />
      <span className="ambient-grid" />
      <span className="ambient-grain" />
    </div>
  );
}

function Footer({ language, t }) {
  const copy = FOOTER_COPY_BY_LANGUAGE[language] || FOOTER_COPY_BY_LANGUAGE.en;

  const serviceItems = [
    {
      label: t("nav-kundali-birth", "Birth Chart"),
      to: "/kundali/birth-chart",
    },
    { label: t("nav-horoscope", "Horoscope"), to: "/horoscope" },
    { label: t("nav-match-kundali", "Kundali Matching"), to: "/match/kundali" },
    {
      label: t("nav-match-ashtakoot", "Ashtakoot Matching"),
      to: "/match/ashtakoot",
    },
    { label: t("nav-match-manglik", "Manglik Report"), to: "/match/manglik" },
    { label: t("nav-numerology", "Numerology"), to: "/numerology" },
  ];

  const remediesItems = [
    {
      label: t("nav-remedies-dosha", "Sade Sati Status"),
      to: "/remedies/sadesati",
    },
    {
      label: t("nav-remedies-kaalsarp", "Kaal Sarp Report"),
      to: "/remedies/kaalsarp",
    },
    {
      label: t("nav-panchang-today", "Today's Panchang"),
      to: "/panchang/today",
    },
    { label: t("nav-panchang-muhurat", "Muhurat"), to: "/panchang/muhurat" },
    { label: t("nav-kundali-dasha", "Dasha Period"), to: "/kundali/dasha" },
    {
      label: t("nav-kundali-lagna-table", "Lagna Table"),
      to: "/kundali/lagna-intervals",
    },
  ];

  const infoItems = [
    { label: t("nav-home", "Home"), to: "/" },
    { label: t("nav-blog", "Blog"), to: "/blog" },
    { label: t("nav-contact", "Contact"), to: "/contact" },
    { label: copy.login ?? "Login", to: "/login" },
    { label: copy.signup ?? "Sign Up", to: "/signup" },
    { label: copy.dashboard ?? "Dashboard", to: "/dashboard" },
  ];

  const contactItems = [
    {
      label: copy.phone,
      value: "+91 70308 06080",
      to: "tel:+917030806080",
    },
    {
      label: copy.email,
      value: "hello@nakshatrapath.in",
      to: "mailto:hello@nakshatrapath.in",
    },
    {
      label: copy.address,
      value: copy.addressValue,
      to: null,
    },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="foot-logo">✦ NakshatraPath Astrology</div>
          <p className="footer-desc">{copy.description}</p>
          <div className="social-links">
            <a
              className="social-link"
              href="https://wa.me/917030806080"
              aria-label="WhatsApp"
            >
              wa
            </a>
            <a
              className="social-link"
              href="mailto:hello@nakshatrapath.in"
              aria-label="Email"
            >
              @
            </a>
            <a
              className="social-link"
              href="tel:+917030806080"
              aria-label="Call"
            >
              ph
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{copy.serviceTitle}</h4>
          <ul>
            {serviceItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{copy.remediesTitle}</h4>
          <ul>
            {remediesItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{copy.infoTitle}</h4>
          <ul>
            {infoItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{copy.contactTitle}</h4>
          <ul>
            {contactItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <a href={item.to}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NakshatraPath Astrology</span>
        <span>{copy.rights}</span>
        <span>{copy.global}</span>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const tickerItems =
    TICKER_ITEMS_BY_LANGUAGE[language] || TICKER_ITEMS_BY_LANGUAGE.en;
  const uiText = UI_TEXT_BY_LANGUAGE[language] || UI_TEXT_BY_LANGUAGE.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <AmbientBackdrop />

      <div className="top-bar">
        <div className="lang-bar">
          {availableLanguages.map((item, index) => (
            <span
              key={item.code}
              role="button"
              tabIndex={0}
              className={language === item.code ? "active" : ""}
              onClick={() => setLanguage(item.code)}
            >
              {item.label}
              {index !== availableLanguages.length - 1 ? (
                <span className="divider"> ✦ </span>
              ) : null}
            </span>
          ))}
        </div>

        <div className="top-bar-meta hide-mobile">{t("header-hours")}</div>

        <div className="contact-bar">
          <a href="tel:+917030806080" className="contact-item">
            <Phone size={14} /> +91 70308 06080
          </a>
          <a
            href="mailto:hello@nakshatrapath.in"
            className="contact-item hide-mobile"
          >
            <Mail size={14} /> hello@nakshatrapath.in
          </a>
        </div>
      </div>

      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-main">
          <Link to="/" className="logo-wrap">
            <div className="logo-emblem">✦</div>
            <div className="logo-text">
              <div className="name-devanagari">
                {t("logo-name", "NakshatraPath Astrology")}
              </div>
              <div className="name-english">
                {t("logo-tagline", "Modern Guidance Rooted in Vedic Wisdom")}
              </div>
            </div>
          </Link>

          <div className="header-actions">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-auth">
                <LayoutDashboard size={18} />
                <span>{uiText.dashboard}</span>
              </Link>
            ) : (
              <Link to="/login" className="btn-auth">
                <LogIn size={18} />
                <span>{uiText.login}</span>
              </Link>
            )}

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={uiText.toggleMenu}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <nav className={`main-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="nav-container">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.key}
                item={item}
                t={t}
                isMobile={isMobileMenuOpen}
                closeMobileMenu={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        </nav>
      </header>

      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={item === "✦" ? "ticker-dot" : "ticker-item"}
            >
              {item}
              <span className="ticker-dot"> ✦ </span>
            </span>
          ))}
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer language={language} t={t} />

      <a
        className="whatsapp-float"
        href="https://wa.me/917030806080"
        title={uiText.whatsappTitle}
        aria-label={uiText.whatsappContact}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
