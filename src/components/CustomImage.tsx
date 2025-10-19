'use client';

import Image from 'next/image';

interface PropTypes {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const CustomImage: React.FC<PropTypes> = ({
  src,
  alt = '',
  className,
  objectFit = 'contain',
  description,
}) => {
  return (
    <div className={`w-full h-full flex flex-col ${className || ''}`}

    >
      {/* Image wrapper takes full height */}
      <div className="relative w-full flex-1 bg-yellow-100"
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
        />
      </div>

      {/* Description footer */}
      {description && (
        <div className="text-center py-2 text-sm text-slate-500">
          {description}
        </div>
      )}
    </div>
  );
};


export default CustomImage;
