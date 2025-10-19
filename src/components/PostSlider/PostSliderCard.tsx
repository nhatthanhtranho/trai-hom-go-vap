import Image from '@/components/CustomImage';
import { useRouter } from 'next/navigation';
import { formatLink } from '@/utils/formatLink';

export interface PropTypes {
  title: string;
  url: string;
}

const PostSliderCard: React.FC<PropTypes> = ({ title, url }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(formatLink(url));
  };
  const bannerURL = `/assets/images${url}/banner.webp`;

  return (
    <div className="" onClick={handleClick}>
      {/* Thumbnail */}
      <div className="relative w-full h-32 rounded-lg shadow overflow-hidden mb-2">
        <Image fill src={bannerURL} alt={title} loading="lazy" className="object-cover" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center flex-1">
        <p className="font-semibold text-sm leading-snug line-clamp-2">{title}</p>
      </div>
    </div>
  );
};

export default PostSliderCard;
