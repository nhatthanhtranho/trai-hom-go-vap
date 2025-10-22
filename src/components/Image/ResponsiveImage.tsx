'use client';

type ResponsiveImageProps = {
  /** Đường dẫn gốc không có phần mở rộng */
  imageSource: string;
  /** Alt text */
  alt?: string;
  /** CSS class */
  className?: string;
  /** Ưu tiên preload ảnh */
  priority?: boolean;
  pictureClassName?: string;
};

/**
 * Component hiển thị ảnh responsive:
 * - Tự động chọn ảnh mobile nếu viewport ≤ 768px
 * - Chỉ tải đúng 1 hình (mobile hoặc desktop)
 */
export default function ResponsiveImage({
  imageSource,
  alt = '',
  className = 'object-cover object-center',
  pictureClassName = '',
  priority = false,
}: ResponsiveImageProps) {
  return (
    <picture className={pictureClassName || ''}>
      <source media="(max-width: 768px)" srcSet={`/mobile${imageSource}`} />
      <img
        src={imageSource}
        alt={alt}
        className={`w-full h-full ${className || ''}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
