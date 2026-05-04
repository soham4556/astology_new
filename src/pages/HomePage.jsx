import SeoMeta from "../components/common/SeoMeta";
import HomeSections from "../components/layout/HomeSections";
import AstrologySeoContent from "../components/layout/AstrologySeoContent";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/Astrologer",
  "name": "Acharya Ratish Kumar Jyotish Kendra",
  "image": "https://jaimatadiastrology.in/logo-large.jpg",
  "@id": "https://jaimatadiastrology.in",
  "url": "https://jaimatadiastrology.in",
  "telephone": "+91 98011 65965",
  "priceRange": "$$",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "Behind Rajendra Hostel, Chandmari",
    "addressLocality": "Motihari",
    "addressRegion": "Bihar",
    "postalCode": "845401",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5204,
    "longitude": 73.8567
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/AcharyaRatishKumar",
    "https://www.instagram.com/jaimatadiastrology"
  ],
  "description": "Premium Vedic astrology services by Acharya Ratish Kumar. Services include Horoscope (Rashifal), Kundali Matching, Match & Panchang."
};

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="Acharya Ratish Kumar Jyotish Kendra | राशिफल, पंचांग, कुंडली मिलान"
        description="Acharya Ratish Kumar Jyotish Kendra presents premium Vedic astrology. Get accurate Daily Horoscope (Rashifal), Panchang, Kundali Matching, and Vedic guidance in Hindi, Marathi & English."
        path="/"
        schema={schema}
      />
      <HomeSections />
      <AstrologySeoContent pageType="home" />
    </>
  );
}

