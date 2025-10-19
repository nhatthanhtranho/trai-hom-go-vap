'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { formatLink } from '@/utils/formatLink';

interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  /** Đường dẫn ảnh (có thể là local hoặc URL) */
  src: string;
  /** Mô tả thay thế ảnh (SEO-friendly) */
  alt?: string;
  /** Lớp Tailwind hoặc CSS bổ sung */
  className?: string;
  /** Kiểu hiển thị ảnh */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = '',
  className,
  objectFit = 'contain',
  ...rest
}) => {
  return (
    <Image
      src={formatLink(src)}
      alt={alt}
      fill
      className={className}
      style={{ objectFit }}
      sizes="100vw"
      {...rest}
    />
  );
};

export default CustomImage;
