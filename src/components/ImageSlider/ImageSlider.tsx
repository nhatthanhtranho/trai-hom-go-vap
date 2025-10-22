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
    <div className="w-full h-[20vh] md:h-[50vh] relative overflow-hidden">
      <Image
        fill
        className="object-cover object-center"
        src={imgSrc || '/assets/images/ve-chung-toi.webp'}
        fetchPriority="high"
        alt="Banner Image"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text on top (centered) */}
      <div className="absolute container mx-auto inset-0 z-20 flex flex-col it p-4 justify-center">
        <p className="md:text-xl tracking-wide font-bold text-white">{subTitle || 'TRẠI HÒM'}</p>
        <h5 className="text-2xl max-w-4xl md:text-5xl tracking-wide font-bold text-white mt-2">
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
