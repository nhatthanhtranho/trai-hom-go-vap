'use client';
import { useState, useEffect, type ReactNode } from 'react';
import ContactSection from './ContactSection';
import RelativeListWrapper from './RelativeListWapper';
import SimpleSlider from '../SimpleSlider';
import BackToHomeButton from '../BackToHomeButton';

interface CamNangLayoutProps {
  children: ReactNode;
  title: string;
  tag?: string;
  bannerImageSrc?: string;
}

export default function CamNangLayout({ children, title, tag, bannerImageSrc }: CamNangLayoutProps) {
  const [expanded, setExpanded] = useState(false);

  // ✅ Mở layout khi có hash hoặc event từ TOC
  useEffect(() => {
    const handleExpand = () => setExpanded(true);
    window.addEventListener('expand-content', handleExpand);

    // Nếu có hash → mở sẵn
    if (window.location.hash) {
      setExpanded(true);
    }

    return () => window.removeEventListener('expand-content', handleExpand);
  }, []);

  return (
    <div>
      <SimpleSlider
        title={title}
        subtitle="Cẩm Nang"
        backgroundUrl={bannerImageSrc || '/assets/images/ve-chung-toi.webp'}
      />

      <div className="container mx-auto pt-4 px-4 lg:px-0">
        <BackToHomeButton />
      </div>

      <div className="container mx-auto px-4 lg:px-0 mt-5 md:pb-12 pt-4">
        <div className="grid grid-cols-12 md:gap-8 mb-4">
          <main className="col-span-12 lg:col-span-8 relative">
            <span className="inline-block bg-gray-700 text-white px-3 py-1 rounded mb-4">
              {tag || 'Cẩm Nang'}
            </span>

            {/* Wrapper cho children */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ${expanded ? 'max-h-none' : 'max-h-[2000px]'
                }`}
            >
              <div className="cam-nang-layout mb-6">{children}</div>

              {!expanded && (
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-6">
                  <button
                    onClick={() => setExpanded(true)}
                    className="relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-medium shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Xem thêm</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              )}
            </div>
          </main>

          <aside className="col-span-12 lg:col-span-4">
            <RelativeListWrapper tag={tag} />
          </aside>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
