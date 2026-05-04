import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Home,
  BookText,
  User,
  Star,
  Flame,
  Sun,
} from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { NAV_ITEMS, TICKER_ITEMS, TRANSLATIONS } from "../../utils/constants";

const FOOTER_COPY_BY_LANGUAGE = {
  mr: {
    description:
      "आचार्य रतिश कुमार ज्योतिष केन्द्र हे आचार्य रतिश कुमार यांचे एक व्यासपीठ आहे, जे पारंपारिक वैदिक ज्ञान आधुनिक मार्गदर्शनासह एकत्रित करते.",
    serviceTitle: "सेवा",
    infoTitle: "माहिती",
    contactTitle: "कार्यालय",
    phone: "फोन",
    email: "ईमेल",
    address: "पत्ता",
    addressValue: "भारत (India)",
    rights: "सर्वाधिकार सुरक्षित",
    global: "मोतिहारी आधारित ऑनलाइन ज्योतिष सेवा",
  },
  hi: {
    description:
      "आचार्य रतिश कुमार ज्योतिष केन्द्र आचार्य रतिश कुमार का एक मंच है, जो पारंपरिक वैदिक ज्ञान को आधुनिक मार्गदर्शन के साथ जोड़ता है।",
    serviceTitle: "सेवाएं",
    infoTitle: "जानकारी",
    contactTitle: "कार्यालय",
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    addressValue: "भारत (India)",
    rights: "सर्वाधिकार सुरक्षित",
    global: "मोतिहारी आधारित ऑनलाइन ज्योतिष सेवा",
  },
  en: {
    description:
      "Acharya Ratish Kumar Jyotish Kendra is a platform by Acharya Ratish Kumar, combining traditional Vedic wisdom with modern practical guidance.",
    serviceTitle: "Services",
    infoTitle: "Information",
    contactTitle: "Office",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressValue: "India",
    rights: "All rights reserved",
    global: "Motihari-based online astrology services worldwide",
  },
};

const ICON_MAP = {
  Home,
  BookText,
  Phone,
  User,
  Star,
  Flame,
  Sun,
};

function NavItem({ item, t, isMobile, closeMobileMenu }) {
  const IconComponent = ICON_MAP[item.icon] || Home;
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (item.children) {
    return (
      <div 
        className={`nav-item-wrapper dropdown ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div 
          className="nav-item-link dropdown-toggle" 
          onClick={(e) => {
            e.preventDefault();
            if (isMobile) setIsOpen(!isOpen);
          }}
          style={{ cursor: 'pointer' }}
        >
          <IconComponent size={18} className="nav-icon" />
          <span>{t(item.key, item.key)}</span>
        </div>
        <div className="dropdown-menu">
          {item.children.map(child => (
            <NavLink 
              key={child.key} 
              to={child.to} 
              className="dropdown-item"
              onClick={() => {
                setIsOpen(false);
                if (isMobile) closeMobileMenu();
              }}
            >
              {t(child.key, child.key)}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="nav-item-wrapper">
      <NavLink
        to={item.to}
        className="nav-item-link"
        onClick={() => isMobile && closeMobileMenu()}
      >
        <IconComponent size={18} className="nav-icon" />
        <span>{t(item.key, item.key)}</span>
      </NavLink>
    </div>
  );
}

function Footer({ language, t }) {
  const copy = FOOTER_COPY_BY_LANGUAGE[language] || FOOTER_COPY_BY_LANGUAGE.en;

  const serviceItems = [
    { label: t("nav-about", "About Acharya"), to: "/about" },
    { label: t("nav-contact", "Book Now"), to: "/book" },
  ];

  const infoItems = [
    { label: t("nav-home", "Home"), to: "/" },
    { label: t("nav-blog", "Blog"), to: "/blog" },
    { label: t("nav-contact", "Consult"), to: "/book" },
  ];

  const contactItems = [
    { label: copy.phone, value: "+91 98011 65965", to: "tel:+919801165965" },
    {
      label: copy.email,
      value: "acharyaratishk@gmail.com",
      to: "mailto:acharyaratishk@gmail.com",
    },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="foot-logo">ॐ Acharya Ratish Kumar Jyotish Kendra</div>
          <p className="footer-desc">{copy.description}</p>
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
                <a href={item.to}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Acharya Ratish Kumar Jyotish Kendra</span>
        <span>{copy.rights}</span>
        <span>{copy.global}</span>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  return (
    <>
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
        <div className="top-bar-meta">{t("header-hours")}</div>
      </div>

      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-main">
          <Link to="/" className="logo-wrap">
            <div className="logo-emblem">ॐ</div>
            <div className="logo-text">
              <div className="name-devanagari">
                {t("logo-name", "आचार्य रतिश कुमार ज्योतिष केन्द्र")}
              </div>
              <div className="name-english">
                {t("logo-tagline", "Acharya Ratish Kumar")}
              </div>
            </div>
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
          {TICKER_ITEMS.map((item, index) => (
            <span key={index} className="ticker-item">
              {item} <span className="ticker-dot"> ॐ </span>
            </span>
          ))}
        </div>
      </div>

      <main>
        <Outlet />
      </main>
      <Footer language={language} t={t} />

      <a className="whatsapp-fab" href="https://wa.me/919801165965" target="_blank" rel="noopener noreferrer">
        <div className="fab-pulse"></div>
        <Phone size={28} />
      </a>
    </>
  );
}

