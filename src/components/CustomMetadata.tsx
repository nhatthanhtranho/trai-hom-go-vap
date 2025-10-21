import { SEOMetadata } from '@/schema/seoMetadata.schema';
import Head from 'next/head';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function CustomMetadata({
  title = 'Sinh Phúc Thọ | Dịch Vụ Tang Lễ Trọn Gói Uy Tín Tại TP.HCM',
  description = 'Trại Hòm Sinh Phúc Thọ cung cấp dịch vụ tang lễ, hỏa táng, an táng trọn gói chuyên nghiệp. Hỗ trợ 24/7, phục vụ tận tâm, uy tín tại TP.HCM và các tỉnh lân cận.',
  keywords = 'dịch vụ tang lễ, trại hòm, hỏa táng, an táng, nhà tang lễ, Sinh Phúc Thọ, tang lễ Phật giáo',
  path,
  image = 'https://sinhphuctho.com/ve-chung-toi.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOMetadata) {
  let url = SITE_URL
  if (path) {
    url = `${SITE_URL}/${path}.html`
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Trại Hòm Sinh Phúc Thọ',
    image: image,
    '@id': url,
    url: url,
    telephone: '+84913673661',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '119 Nguyễn Du, Phường 1, Gò Vấp',
      addressLocality: 'TP.HCM',
      addressCountry: 'VN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    logo: {
      '@type': 'ImageObject',
      url: '/logo.png',
      width: 375,
      height: 375,
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61579044366898',
      'https://www.youtube.com/@sinhphuctho/shorts',
      'https://maps.app.goo.gl/itWuMg9QSfoCDVez9',
    ],
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Favicons */}
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sinh Phúc Thọ" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@sinhphuctho" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </Head>
  );
}
