'use client';
import Image from 'next/image';
import { formatLink } from '@/utils/formatLink';

export interface PropTypes {
  title: string;
  url: string;
  content?: string;
  date?: string;
}

const PostCardWithDescription: React.FC<PropTypes> = ({ title, url, content, date }) => {
  const handleClick = () => {
    window.location.href = formatLink(url);
  };
  const bannerURL = `/assets/images${url}/banner.webp`;

  return (
    <div className="flex items-start gap-3 cursor-pointer" onClick={handleClick}>
      {/* Hình */}
      <div className="relative w-52 h-44 flex-shrink-0 rounded-lg shadow overflow-hidden">
        <Image fill src={bannerURL} alt={title} loading="lazy" className="object-cover" />
      </div>

      {/* Chữ */}
      <div className="flex flex-col justify-start flex-1 text-gray-700">
        <h3 className="font-semibold text-lg leading-snug line-clamp-2">{title}</h3>
        <p className="text-xs mt-1 mb-2 text-gray-500">{date}</p>
        <p className="text-base line-clamp-4">{content}</p>
      </div>
    </div>
  );
};

export default PostCardWithDescription;
