'use client';
import Image from 'next/image';
import React from 'react';

interface FigureImageProps {
  src: string;
  alt: string;
  caption?: string;
  height?: number;
  className?: string;
  variant?: 'overlay' | 'below'; // vị trí caption
}

export default function FigureImage({
  src,
  alt,
  caption,
  height = 400,
  className = '',
  variant = 'overlay',
}: FigureImageProps) {
  const isOverlay = variant === 'overlay';

  return (
    <div className='mb-[80px]'>
      <figure
        className={`my-8 rounded-xl shadow-sm bg-gray-100 ${className}`}
      >
        {/* Khung hình */}
        <div
          className={`relative w-full overflow-hidden rounded-t-xl`}
          // style={{ minHeight: height }}
        >
          {/* Nền mờ fill khung */}
          <div className="absolute inset-0">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover blur-sm opacity-30"
              priority
            />
          </div>

          {/* Ảnh chính */}
          <div className="relative flex items-center justify-center w-full h-full">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={height}
              className="object-contain max-h-full w-auto"
              priority
            />
          </div>

          {/* Caption đè lên ảnh */}
          {caption && isOverlay && (
            <figcaption className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-xs md:text-sm px-3 py-1 rounded-md backdrop-blur-sm">
              {caption}
            </figcaption>
          )}
        </div>

        {/* Caption dưới hình */}
        {caption && !isOverlay && (
          <figcaption className="text-center text-amber-900 text-sm md:text-base bg-gradient-to-b from-amber-50 to-amber-100 py-2 px-4 rounded-b-xl border-t border-amber-200 italic font-medium tracking-wide shadow-inner">
            <span className="block max-w-3xl mx-auto leading-relaxed">
              {caption}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
