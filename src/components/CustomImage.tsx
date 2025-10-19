'use client';

import { formatLink } from '@/utils/formatLink';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

interface EnhancedImageProps extends ImageProps {
  caption?: string;
  rounded?: boolean;
  shadow?: boolean;
  fallbackSrc?: string;
  classNameWrapper?: string;
}

const EnhancedImage: React.FC<EnhancedImageProps> = ({
  caption,
  rounded = true,
  shadow = true,
  fallbackSrc = '/images/fallback.jpg',
  classNameWrapper = '',
  className = '',
  alt,
  ...props
}) => {
  const [src, setSrc] = useState(props.src);

  return (
    <figure className={`flex flex-col items-center ${classNameWrapper}`}>
      <Image
        {...props}
        src={formatLink(src as string)}
        alt={alt}
        onError={() => setSrc(fallbackSrc)}
        className={`${rounded ? 'rounded-2xl' : ''} ${
          shadow ? 'shadow-md' : ''
        } object-cover ${className}`}
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 italic mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default EnhancedImage;
