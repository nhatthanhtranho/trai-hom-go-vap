'use client';

import React from 'react';
import Image from 'next/image';

interface PropTypes {
  imgSrc?: string;
  title?: string;
  subTitle?: string;
}

const SimpleSlider: React.FC<PropTypes> = ({ imgSrc, title, subTitle }) => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Background image */}
      <Image
        fill
        src={imgSrc || '/assets/images/ve-chung-toi.jpg'}
        alt="Banner Image"
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Text content (left-aligned) */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 md:px-16 lg:px-24">
        <p className="text-white text-lg md:text-xl font-semibold tracking-wide">
          {subTitle || 'TRẠI HÒM'}
        </p>
        <h5 className="text-white text-3xl md:text-5xl font-bold mt-2 max-w-3xl">
          {title || 'SINH PHÚC THỌ'}
        </h5>
        <div className="mt-8">
          <a
            href="https://zalo.me/0913673661"
            className="bg-white text-lg font-semibold text-black px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
