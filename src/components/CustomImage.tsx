"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

function formatLinkImage(url: string) {
  if (url === "/" || url === "") {
    return "/";
  }

  return `${url}`;
}
interface CustomImageProps
  extends Omit<ImageProps, "src" | "alt" | "fill" | "width" | "height"> {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  fill?: boolean;
  width?: number;
  height?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "",
  className = "",
  objectFit = "cover",
  fill = false,
  width,
  height,
  ...rest
}) => {
  // ✅ Tự động chọn giữa fill và width/height
  const imageProps = fill
    ? { fill: true }
    : { width: width || 800, height: height || 600 };

  return (
    <Image
      src={formatLinkImage(src)}
      className={className}
      alt={alt}
      {...imageProps}
      style={{ objectFit }}
      sizes="100vw"
      {...rest}
    />
  );
};

export default CustomImage;
