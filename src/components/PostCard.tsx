"use client";

import Image from "@/components/CustomImage";
import { useRouter } from "next/navigation";
import { formatLink } from "@/utils/formatLink";
import { CardVariant } from "@/types/cardVariant";

export interface PropTypes {
  title: string;
  url: string;
  variant?: CardVariant;
  showContent?: boolean;
  content?: string;
  date?: string;
}

const PostCard: React.FC<PropTypes> = ({
  title,
  url,
  variant,
  content,
  date,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(formatLink(url));
  };
  const bannerURL = `/assets/images${url}/banner.webp`;

  if (variant === CardVariant.Left) {
    return (
      <div onClick={handleClick} className="cursor-pointer">
        <div className="relative w-full h-32 rounded shadow overflow-hidden">
          <Image
            loading="lazy"
            className="rounded w-full h-32 object-cover"
            src={bannerURL}
            alt={title}
            fill
          />
        </div>
        <h3 className="text-base mt-2">{title}</h3>
      </div>
    );
  }

  if (variant === CardVariant.Center) {
    return (
      <div className="flex flex-col pb-2 cursor-pointer" onClick={handleClick}>
        <div className="relative w-full h-64 md:h-96 rounded overflow-hidden shadow">
          <Image className="object-cover" src={bannerURL} fill alt={title} />
        </div>
        <h3 className="text-center text-xl md:text-3xl font-bold mt-4 lg:max-w-[80%] mx-auto">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-600 mt-2 px-4 line-clamp-4">
          {content}
        </p>
      </div>
    );
  }

  if (variant === CardVariant.Right) {
    return (
      <div
        className="grid grid-cols-12 gap-x-4 mb-3 pb-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="col-span-5 md:col-span-full rounded shadow overflow-hidden relative h-24 md:h-44">
          <Image fill className="object-cover" src={bannerURL} alt={title} />
        </div>
        <h3 className="col-span-7 md:col-span-12">
          {title}
        </h3>
        <p className="col-span-12 mt-2 text-base line-clamp-3">{content}</p>
      </div>
    );
  }

  // Default card
  return (
    <div
      className="flex flex-row cursor-pointer hover:bg-gray-50 transition"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0 w-[100px] h-[70px] rounded-lg shadow overflow-hidden">
        <Image
          fill
          src={bannerURL}
          alt={title}
          loading="lazy"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center ml-3 flex-1">
        <p className="text-xs text-gray-600">{date}</p>
        <p className="font-semibold text-sm leading-snug line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
