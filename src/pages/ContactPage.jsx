import { useState } from "react";
import {
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import SeoMeta from "../components/common/SeoMeta";
import { useLanguage } from "../hooks/useLanguage";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const channels = [
    {
      icon: Phone,
      title: isHindi ? "कॉल करें" : "Call Support",
      line1: "+91 89562 44120",
      line2: isHindi ? "सोम-शनि, 10am - 8pm" : "Mon-Sat, 10am-8pm",
    },
    {
      icon: Mail,
      title: isHindi ? "ईमेल" : "Email",
      line1: "hello@nakshatrapath.in",
      line2: isHindi ? "24 घंटे में उत्तर" : "Response within 24 hours",
    },
    {
      icon: MessageCircle,
      title: isHindi ? "व्हाट्सएप" : "WhatsApp",
      line1: "+91 89562 44120",
      line2: isHindi ? "त्वरित सहायता" : "Quick assistance",
    },
  ];

  const officePoints = [
    {
      icon: MapPin,
      text: isHindi
        ? "Baner, Pune, Maharashtra - 411045"
        : "Baner, Pune, Maharashtra - 411045",
    },
    {
      icon: Clock,
      text: isHindi
        ? "उपलब्धता: सुबह 10:00 से रात 8:00 तक"
        : "Availability: 10:00 AM to 8:00 PM",
    },
    {
      icon: Globe,
      text: "www.nakshatrapath.in",
    },
  ];

  const updateField = (field) => (event) => {
    setFormState((previous) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  return (
    <div className="page-shell contact-page-shell">
      <SeoMeta
        title={
          isHindi
            ? "संपर्क | NakshatraPath Astrology"
            : "Contact | NakshatraPath Astrology"
        }
        description={
          isHindi
            ? "NakshatraPath Astrology की पुणे टीम से सीधे संपर्क करें और ज्योतिष परामर्श प्राप्त करें।"
            : "Connect with the Pune team at NakshatraPath Astrology for astrology consultation."
        }
        path="/contact"
      />

      <div className="page-header contact-hero-header">
        <h1>{isHindi ? "हमसे संपर्क करें" : "Connect with Our Pune Team"}</h1>
        <p>
          {isHindi
            ? "कुंडली, मिलान या व्यक्तिगत मार्गदर्शन के लिए हमारा विशेषज्ञ दल आपकी सहायता के लिए तैयार है।"
            : "For kundali, matching, or personal guidance, our team is ready to assist you."}
        </p>
      </div>

      <div className="contact-cards-grid">
        {channels.map((channel) => {
          const IconComponent = channel.icon;

          return (
            <article key={channel.title} className="contact-channel-card">
              <div className="channel-icon-wrap">
                <IconComponent size={24} />
              </div>
              <h3>{channel.title}</h3>
              <p>{channel.line1}</p>
              <span>{channel.line2}</span>
            </article>
          );
        })}
      </div>

      <section className="contact-hub">
        <aside className="contact-hub-aside">
          <h2>{isHindi ? "कार्यालय जानकारी" : "Office Information"}</h2>
          <p>
            {isHindi
              ? "हम पुणे से संचालित होते हैं और भारत सहित वैश्विक क्लाइंट्स को ऑनलाइन परामर्श देते हैं।"
              : "We operate from Pune and provide online consultation to clients across India and worldwide."}
          </p>

          <div className="contact-point-list">
            {officePoints.map((point) => {
              const IconComponent = point.icon;

              return (
                <div className="contact-point" key={point.text}>
                  <IconComponent size={18} />
                  <span>{point.text}</span>
                </div>
              );
            })}
          </div>
        </aside>

        <form
          className="contact-form contact-form-alt"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-title">
            {isHindi ? "परामर्श का अनुरोध करें" : "Request Consultation"}
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">{isHindi ? "नाम" : "Name"}</label>
            <input
              id="contact-name"
              value={formState.name}
              onChange={updateField("name")}
              placeholder={isHindi ? "आपका नाम" : "Your name"}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">{isHindi ? "ईमेल" : "Email"}</label>
            <input
              id="contact-email"
              type="email"
              value={formState.email}
              onChange={updateField("email")}
              placeholder={isHindi ? "ईमेल पता" : "Email address"}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">
              {isHindi ? "विषय" : "Subject"}
            </label>
            <input
              id="contact-subject"
              value={formState.subject}
              onChange={updateField("subject")}
              placeholder={isHindi ? "किस सेवा के लिए?" : "Which service?"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              {isHindi ? "संदेश" : "Message"}
            </label>
            <textarea
              id="contact-message"
              value={formState.message}
              onChange={updateField("message")}
              placeholder={isHindi ? "अपना संदेश लिखें" : "Write your message"}
            />
          </div>

          <button type="submit" className="btn-primary contact-submit-btn">
            {isHindi ? "संदेश भेजें" : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </section>
    </div>
  );
}
