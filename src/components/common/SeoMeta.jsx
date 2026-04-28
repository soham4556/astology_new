import { Helmet } from 'react-helmet-async';

export default function SeoMeta({ title, description, path = '/', schema, image }) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://jaimatadiastrology.in';
  const canonicalUrl = new URL(path, siteUrl).toString();
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  const brandTitle = 'जय माता दी ज्योतिष';

  return (
    <Helmet>
      <title>{brandTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={brandTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brandTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  );
}

