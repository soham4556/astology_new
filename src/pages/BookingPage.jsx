import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  FileText, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";

const INITIAL_BOOKING = {
  fullName: "",
  dob: "",
  tob: "",
  pob: "",
  whatsapp: "",
  service: "",
  message: ""
};

export default function BookingPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState(INITIAL_BOOKING);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  const services = [
    { value: "kundali", label: pick("कुंडली विश्लेषण", "कुंडली विश्लेषण", "Kundali Analysis") },
    { value: "marriage", label: pick("विवाह जुळवणी", "विवाह मिलान", "Marriage Matching") },
    { value: "vastu", label: pick("वास्तु शास्त्र", "वास्तु शास्त्र", "Vastu Consultation") },
    { value: "career", label: pick("करिअर मार्गदर्शन", "करियर मार्गदर्शन", "Career Guidance") },
    { value: "health", label: pick("आरोग्य ज्योतिष", "स्वास्थ्य ज्योतिष", "Health Astrology") },
    { value: "other", label: pick("इतर", "अन्य", "Other") },
  ];

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In real app, send to backend or email
    console.log("Booking Data:", formData);
  };

  if (isSubmitted) {
    return (
      <div className="booking-success-container">
        <motion.div 
          className="success-card-ultra"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="confetti-icon"><CheckCircle size={80} color="var(--gold)" /></div>
          <h2>{pick("तुमची विनंती प्राप्त झाली!", "आपकी विनती प्राप्त हुई!", "Request Received!")}</h2>
          <p>{pick(
            "आचार्य रतिश कुमार लवकरच तुमच्याशी व्हॉट्सअॅपद्वारे संपर्क साधतील.",
            "आचार्य रतिश कुमार जल्द ही आपसे व्हाट्सएप के माध्यम से संपर्क करेंगे।",
            "Acharya Ratish Kumar will contact you shortly via WhatsApp."
          )}</p>
          <button className="btn-modern-gold" onClick={() => window.location.href = "/"}>
            {pick("होमपेजवर जा", "होमपेज पर जाएं", "Back to Home")}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="booking-page-v2">
      <SeoMeta 
        title={pick("अपॉइंटमेंट बुक करा | आचार्य रतिश कुमार ज्योतिष केन्द्र", "अपॉइंटमेंट बुक करें | आचार्य रतिश कुमार ज्योतिष केन्द्र", "Book Appointment | Acharya Ratish Kumar Jyotish Kendra")}
        description={pick("आचार्य रतिश कुमार यांच्याशी वैयक्तिक चर्चेसाठी आपली माहिती भरा।", "आचार्य रतिश कुमार से व्यक्तिगत चर्चा के लिए अपनी जानकारी भरें।", "Fill your details for a personal consultation with Acharya Ratish Kumar.")}
      />

      <div className="container">
        <div className="booking-layout-grid">
          {/* Left Side: Info */}
          <div className="booking-info-panel">
            <motion.span 
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Sparkles size={16} /> {pick("वैयक्तिक मार्गदर्शन", "व्यक्तिगत मार्गदर्शन", "Personal Guidance")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {pick("परामर्श घेण्यासाठी नोंदणी करा", "परामर्श के लिए पंजीकरण करें", "Book Your Consultation")}
            </motion.h1>
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {pick(
                "अचूक भविष्यवाण्यांसाठी तुमची जन्म वेळ आणि ठिकाण महत्त्वाचे आहे. खालील फॉर्म काळजीपूर्वक भरा.",
                "सटीक भविष्यवाणियों के लिए आपके जन्म का समय और स्थान महत्वपूर्ण है। कृपया नीचे दिया गया फॉर्म ध्यान से भरें।",
                "Your birth time and place are crucial for accurate predictions. Please fill the form carefully."
              )}
            </motion.p>

            <div className="booking-features">
              <div className="b-feat">
                <div className="b-icon"><Clock size={20} /></div>
                <div className="b-text">
                  <h4>{pick("कमी वेळात उत्तर", "कम समय में उत्तर", "Quick Response")}</h4>
                  <p>{pick("२४ तासांच्या आत संपर्क।", "२४ घंटे के भीतर संपर्क।", "Contact within 24 hours.")}</p>
                </div>
              </div>
              <div className="b-feat">
                <div className="b-icon"><Phone size={20} /></div>
                <div className="b-text">
                  <h4>{pick("व्हॉट्सअॅप सपोर्ट", "व्हाट्सएप सपोर्ट", "WhatsApp Support")}</h4>
                  <p>{pick("थेट आचार्यांशी चर्चा।", "सीधे आचार्य जी से चर्चा।", "Direct talk with Acharya.")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="booking-form-panel">
            <form onSubmit={handleSubmit} className="ultra-booking-form">
              <div className="form-steps-indicator">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className="step-line"></div>
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
              </div>

              {step === 1 ? (
                <motion.div 
                  className="form-step-content"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <h3 className="step-title">{pick("वैयक्तिक माहिती", "व्यक्तिगत जानकारी", "Personal Details")}</h3>
                  
                  <div className="input-group-modern">
                    <label><User size={16} /> {pick("पूर्ण नाव", "पूरा नाम", "Full Name")}</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      placeholder={pick("उदा. राहुल पाटील", "उदा. राहुल पाटिल", "e.g. Rahul Patil")}
                      value={formData.fullName}
                      onChange={handleUpdate}
                      required 
                    />
                  </div>

                  <div className="input-row-modern">
                    <div className="input-group-modern">
                      <label><Calendar size={16} /> {pick("जन्म तारीख", "जन्म तिथि", "Date of Birth")}</label>
                      <input 
                        type="date" 
                        name="dob" 
                        value={formData.dob}
                        onChange={handleUpdate}
                        required 
                      />
                    </div>
                    <div className="input-group-modern">
                      <label><Clock size={16} /> {pick("जन्म वेळ", "जन्म समय", "Time of Birth")}</label>
                      <input 
                        type="time" 
                        name="tob" 
                        value={formData.tob}
                        onChange={handleUpdate}
                        required 
                      />
                    </div>
                  </div>

                  <div className="input-group-modern">
                    <label><MapPin size={16} /> {pick("जन्म ठिकाण", "जन्म स्थान", "Place of Birth")}</label>
                    <input 
                      type="text" 
                      name="pob" 
                      placeholder={pick("शहर किंवा गाव", "शहर या गांव", "City or Village")}
                      value={formData.pob}
                      onChange={handleUpdate}
                      required 
                    />
                  </div>

                  <button 
                    type="button" 
                    className="btn-modern-gold w-full" 
                    onClick={() => setStep(2)}
                    disabled={!formData.fullName || !formData.dob || !formData.pob}
                  >
                    {pick("पुढील पायरी", "अगला कदम", "Next Step")} <ArrowRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  className="form-step-content"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <h3 className="step-title">{pick("संपर्क आणि सेवा", "संपर्क और सेवा", "Contact & Service")}</h3>

                  <div className="input-group-modern">
                    <label><Phone size={16} /> {pick("व्हॉट्सअॅप नंबर", "व्हाट्सएप नंबर", "WhatsApp Number")}</label>
                    <input 
                      type="tel" 
                      name="whatsapp" 
                      placeholder="+91"
                      value={formData.whatsapp}
                      onChange={handleUpdate}
                      required 
                    />
                  </div>

                  <div className="input-group-modern">
                    <label><Sparkles size={16} /> {pick("सेवेचा प्रकार", "सेवा का प्रकार", "Service Type")}</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleUpdate}
                      required
                    >
                      <option value="">{pick("निवडा...", "चुनें...", "Select...")}</option>
                      {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>

                  <div className="input-group-modern">
                    <label><FileText size={16} /> {pick("तुमचा प्रश्न / संदेश", "आपका प्रश्न / संदेश", "Your Question / Message")}</label>
                    <textarea 
                      name="message" 
                      rows="3"
                      placeholder={pick("तुमच्या समस्येबद्दल थोडक्यात सांगा...", "अपनी समस्या के बारे में संक्षेप में बताएं...", "Briefly describe your issue...")}
                      value={formData.message}
                      onChange={handleUpdate}
                    ></textarea>
                  </div>

                  <div className="btn-row-modern">
                    <button type="button" className="btn-modern-outline" onClick={() => setStep(1)}>
                      {pick("मागे", "पीछे", "Back")}
                    </button>
                    <button type="submit" className="btn-modern-gold flex-1">
                      {pick("नोंदणी पूर्ण करा", "पंजीकरण पूरा करें", "Complete Booking")}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
