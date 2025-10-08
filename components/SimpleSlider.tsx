'use client';

import React from 'react';
import Image from 'next/image';

interface BannerProps {
  backgroundUrl: string;
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; link: string };
  ctaSecondary?: { label: string; link: string };
}

const Banner: React.FC<BannerProps> = ({
  backgroundUrl,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}) => {
  return (
    <section className="relative w-full h-[30vh] md:h-[40vh] lg:h-[60vh] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundUrl}
          alt="Banner background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">{subtitle}</p>

        <div className="flex justify-center gap-4">
          {ctaSecondary && (
            <a
              href={ctaSecondary.link}
              className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              {ctaSecondary.label}
            </a>
          )}
          {ctaPrimary && (
            <a
              href={ctaPrimary.link}
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500 transition"
            >
              {ctaPrimary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
