import SeoMeta from "../components/common/SeoMeta";
import HomeSections from "../components/layout/HomeSections";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NakshatraPath Astrology",
  url: "https://nakshatrapath.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nakshatrapath.in/horoscope?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "NakshatraPath Astrology",
    url: "https://nakshatrapath.in",
  },
};

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="NakshatraPath Astrology | Horoscope, Kundali, Match & Panchang"
        description="Premium Vedic astrology services with daily horoscope, kundali generation, kundali matching, and panchang insights."
        path="/"
        schema={schema}
      />
      <HomeSections />
    </>
  );
}

