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
import { motion } from "framer-motion";
import SeoMeta from "../components/common/SeoMeta";
import AstrologySeoContent from "../components/layout/AstrologySeoContent";
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const channels = [
    {
      icon: Phone,
      title: isHindi ? "कॉल करें" : "Call Support",
      line1: "+91 70308 06080",
      line2: isHindi ? "सोम-शनि, 10am - 8pm" : "Mon-Sat, 10am-8pm",
    },
    {
      icon: Mail,
      title: isHindi ? "ईमेल" : "Email",
      line1: "contact@jaimatadiastrology.in",
      line2: isHindi ? "24 घंटे में उत्तर" : "Response within 24 hours",
    },
    {
      icon: MessageCircle,
      title: isHindi ? "व्हाट्सएप" : "WhatsApp",
      line1: "+91 70308 06080",
      line2: isHindi ? "त्वरित सहायता" : "Quick assistance",
    },
  ];

  const officePoints = [
    { icon: MapPin, text: "Pune, Maharashtra, India" },
    { icon: Clock, text: isHindi ? "सुबह 10:00 से रात 8:00" : "10:00 AM to 8:00 PM" },
    { icon: Globe, text: "www.jaimatadiastrology.in" },
  ];

  const updateField = (field) => (event) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        setFormState(INITIAL_FORM_STATE);
    }, 5000);
  };

  return (
    <div className="page-shell contact-page-shell">
      <SeoMeta
        title={isHindi ? "संपर्क | Jai Mata Di Astrology" : "Contact | Jai Mata Di Astrology"}
        description={isHindi ? "आचार्य रतिश कुमार यांच्याशी संपर्क साधा." : "Connect with Acharya Ratish Kumar."}
        path="/contact"
      />

      <div className="page-header contact-hero-header">
        <h1>{isHindi ? "हमसे संपर्क करें" : "Connect with Us"}</h1>
        <p>{isHindi ? "तुमच्या प्रश्नांसाठी आम्ही सदैव तत्पर आहोत." : "We are here to help you with your queries."}</p>
      </div>

      <div className="contact-cards-grid">
        {channels.map((channel) => (
          <article key={channel.title} className="contact-channel-card">
            <div className="channel-icon-wrap"><channel.icon size={24} /></div>
            <h3>{channel.title}</h3>
            <p>{channel.line1}</p>
            <span>{channel.line2}</span>
          </article>
        ))}
      </div>

      <section className="contact-hub">
        <aside className="contact-hub-aside">
          <h2>{isHindi ? "कार्यालय माहिती" : "Office Info"}</h2>
          <div className="contact-point-list">
            {officePoints.map((point, i) => (
              <div className="contact-point" key={i}>
                <point.icon size={18} />
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </aside>

        {isSubmitted ? (
            <motion.div className="contact-success-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="success-icon">✓</div>
                <h3>{isHindi ? "संदेश पाठवला!" : "Message Sent!"}</h3>
                <p>{isHindi ? "आम्ही लवकरच संपर्क करू." : "We will get back to you soon."}</p>
            </motion.div>
        ) : (
            <form className="contact-form contact-form-alt" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{isHindi ? "पूर्ण नाव" : "Full Name"}</label>
                <input value={formState.name} onChange={updateField("name")} required />
              </div>
              <div className="form-group">
                <label>{isHindi ? "ईमेल" : "Email"}</label>
                <input type="email" value={formState.email} onChange={updateField("email")} required />
              </div>
              <div className="form-group">
                <label>{isHindi ? "विषय" : "Subject"}</label>
                <input value={formState.subject} onChange={updateField("subject")} />
              </div>
              <div className="form-group">
                <label>{isHindi ? "संदेश" : "Message"}</label>
                <textarea value={formState.message} onChange={updateField("message")} />
              </div>
              <button type="submit" className="btn-primary contact-submit-btn">
                {isHindi ? "संदेश पाठवा" : "Send Message"} <Send size={16} />
              </button>
            </form>
        )}
      </section>
      <AstrologySeoContent pageType="contact" />
    </div>
  );
}
