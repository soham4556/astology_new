import { useState } from "react";
import { Link } from "react-router-dom";
import SeoMeta from "../components/common/SeoMeta";
import { useLanguage } from "../hooks/useLanguage";

const dashboardCards = [
  {
    title: "Horoscope Generator",
    titleHi: "राशिफल जनरेटर",
    description: "Generate your personalized horoscope predictions.",
    descriptionHi: "अपनी व्यक्तिगत राशिफल भविष्यवाणी तैयार करें।",
    to: "/horoscope",
  },
  {
    title: "Kundali Generator",
    titleHi: "कुंडली जनरेटर",
    description: "Create a complete birth chart from birth details.",
    descriptionHi: "जन्म विवरण के आधार पर संपूर्ण जन्मकुंडली बनाएं।",
    to: "/kundali",
  },
  {
    title: "Panchang Insights",
    titleHi: "पंचांग जानकारी",
    description: "Get daily panchang details for your location.",
    descriptionHi: "अपने स्थान के अनुसार दैनिक पंचांग विवरण प्राप्त करें।",
    to: "/panchang",
  },
  {
    title: "Kundali Matching",
    titleHi: "कुंडली मिलान",
    description: "Check compatibility between two kundalis.",
    descriptionHi: "दो कुंडलियों के बीच अनुकूलता जांचें।",
    to: "/match",
  },
];

export default function DashboardPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section className="page-shell">
      <SeoMeta
        title="Dashboard | Jai Mata Di Astrology"
        description="Manage your astrology activity, generate reports, and review recent horoscope, kundali, panchang, and match outputs."
        path="/dashboard"
      />

      <div className="page-header">
        <h1>
          {isHindi ? "स्वागत है" : "Welcome"}
        </h1>
        <p>
          {isHindi
             ? "अपनी राशिफल भविष्यवाणी, कुंडली और पंचांग जांचें।"
             : "Explore your horoscope predictions, kundali birth charts, and daily panchang."}
        </p>
      </div>

      <div className="dashboard-grid">
        {dashboardCards.map((card) => (
          <article key={card.to} className="dashboard-card">
            <h3>{isHindi ? card.titleHi : card.title}</h3>
            <p>{isHindi ? card.descriptionHi : card.description}</p>
            <Link className="btn-primary" to={card.to}>
              {isHindi ? "खोलें" : "Open"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

