'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = '',
  className,
  objectFit = 'contain',
  description,
  ...rest
}) => {
  return (
    <div className={`w-full h-full flex flex-col ${className || ''}`}>
      <div
        className="relative w-full flex-1 bg-yellow-100"
        style={{
          backgroundImage: "url('/assets/images/circle-pattern.webp')",
          backgroundSize: '500px auto',
          backgroundPosition: 'center',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit }}
          sizes="100vw"
          {...rest} // ✅ truyền các props gốc như priority, quality, placeholder...
        />
      </div>

      {description && (
        <div className="text-center py-2 text-sm text-slate-500">
          {description}
        </div>
      )}
    </div>
  );
};

export default CustomImage;
