import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Detail Service Pages
import KundaliAnalysisPage from "./pages/KundaliAnalysisPage";
import MarriageMatchingPage from "./pages/MarriageMatchingPage";
import VastuConsultationPage from "./pages/VastuConsultationPage";
import CareerGuidancePage from "./pages/CareerGuidancePage";
import GemstoneConsultationPage from "./pages/GemstoneConsultationPage";
import PersonalGuidancePage from "./pages/PersonalGuidancePage";
import BusinessAstrologyPage from "./pages/BusinessAstrologyPage";
import EducationAstrologyPage from "./pages/EducationAstrologyPage";
import HoroscopePage from "./pages/HoroscopePage";
import PanchangPage from "./pages/PanchangPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="horoscope" element={<HoroscopePage />} />
        <Route path="panchang" element={<PanchangPage />} />
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Detailed Informative Routes */}
        <Route path="services/kundali-analysis" element={<KundaliAnalysisPage />} />
        <Route path="services/marriage-matching" element={<MarriageMatchingPage />} />
        <Route path="services/vastu-consultation" element={<VastuConsultationPage />} />
        <Route path="services/career-guidance" element={<CareerGuidancePage />} />
        <Route path="services/gemstone-consultation" element={<GemstoneConsultationPage />} />
        <Route path="services/personal-guidance" element={<PersonalGuidancePage />} />
        <Route path="services/business-astrology" element={<BusinessAstrologyPage />} />
        <Route path="services/education-astrology" element={<EducationAstrologyPage />} />

        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

