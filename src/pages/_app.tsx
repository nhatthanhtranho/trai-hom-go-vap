import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { AppProps } from 'next/app';
import CustomMetadata from '@/components/CustomMetadata';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

const CONTACTS = [
  { href: 'https://zalo.me/0913673661', icon: '/assets/images/zalo.webp', name: 'Zalo' },
  { href: 'tel:0913673661', icon: '/assets/images/phone.webp', name: 'Điện Thoại' },
  {
    href: 'https://www.facebook.com/profile.php?id=61579044366898',
    icon: '/assets/images/facebook.webp',
    name: 'Facebook',
  },
  {
    href: 'https://www.youtube.com/@sinhphuctho/shorts',
    icon: '/assets/images/youtube.webp',
    name: 'Youtube',
  },
  {
    href: 'https://maps.app.goo.gl/itWuMg9QSfoCDVez9',
    icon: '/assets/images/google-map.webp',
    name: 'Chỉ Đường',
  },
];

export default function App({ Component, pageProps }: AppProps) {
  // Ẩn warning log (tùy chọn)
  // if (typeof console !== 'undefined') console.warn = () => {};

  const { metadata } = pageProps;

  return (
    <>
      <CustomMetadata {...metadata} />
      {/* Nút liên hệ nổi */}
      <div className="flex flex-col items-end gap-3 z-[100] fixed right-0 bottom-0 p-4 md:p-8">
        {CONTACTS.map(c => (
          <Contact key={c.name} href={c.href} icon={c.icon} name={c.name} />
        ))}
      </div>

      {/* Header cố định */}
      <div className="w-full z-[100] bg-white fixed">
        <Header />
      </div>

      {/* Nội dung trang */}
      <main className="pt-10">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V6FTNPPV36"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V6FTNPPV36');
        `}
      </Script>
    </>
  );
}
