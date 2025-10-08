import { Metadata } from 'next';

import BackToHomeButton from '@/components/BackToHome/BackToHome';
import SimpleSlider from '@/components/ImageSlider/ImageSlider';
import articles from '@/data/articles/cam-nang.json';
import { Article } from '@/schema/article.schema';
import { CardVariant } from '@/components/PostCard/type';
import PostCard from '@/components/PostCard/PostCard';
import PostSlider from '@/components/ImageSlider/PostSlider';
import PostCardWithDescription from '@/components/PostCard/PostCardWithDescription';

export const metadata: Metadata = {
  title: 'Cẩm Nang Tang Lễ | Kiến Thức & Hướng Dẫn Khi Nhà Có Đám Tang | Trại Hòm Sinh Phúc Thọ',
  description:
    'Tổng hợp các bài viết cẩm nang chi tiết về thủ tục, nghi thức và kinh nghiệm khi nhà có tang. Hướng dẫn tổ chức tang lễ chu đáo, đúng phong tục Việt Nam từ Trại Hòm Sinh Phúc Thọ Gò Vấp.',
  keywords:
    'cẩm nang tang lễ, thủ tục tang lễ, kinh nghiệm tổ chức tang lễ, hướng dẫn khi nhà có tang, nghi thức tang lễ, mai táng trọn gói, Trại Hòm Sinh Phúc Thọ',
  openGraph: {
    title: 'Cẩm Nang Tang Lễ | Trại Hòm Sinh Phúc Thọ Gò Vấp',
    description:
      'Trại Hòm Sinh Phúc Thọ chia sẻ cẩm nang tang lễ đầy đủ, từ thủ tục pháp lý, nghi thức tôn giáo đến các kinh nghiệm tổ chức tang lễ chu đáo và tiết kiệm.',
    url: 'https://sinhphuctho.com/cam-nang.html',
    type: 'website',
    images: [
      {
        url: '/assets/images/cam-nang/cam-nang-banner.webp',
        width: 1600,
        height: 1030,
        alt: 'Cẩm nang tang lễ từ Trại Hòm Sinh Phúc Thọ',
        type: 'image/webp',
      },
    ],
    locale: 'vi_VN',
    siteName: 'Trại Hòm Sinh Phúc Thọ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cẩm Nang Tang Lễ | Trại Hòm Sinh Phúc Thọ',
    description:
      'Kiến thức và hướng dẫn chi tiết khi nhà có tang từ Trại Hòm Sinh Phúc Thọ. Tang lễ chu đáo, đúng phong tục, trọn gói tại TP.HCM.',
    images: ['/assets/images/cam-nang/cam-nang-banner.webp'],
  },
};

export default async function Page() {
  const centerPost = articles?.[0];

  const leftPosts = articles?.slice(1, 8);

  const rightPosts = articles?.slice(8, 10);
  const slidePosts = articles?.slice(10, 15);

  const remainPosts = articles?.slice(14, articles.length);
  const renderPosts = (posts: Article[], variant?: CardVariant) =>
    posts?.map((article: Article, index) => {
      const key = index; // Generate a unique key for each item
      return (
        <div className="mb-4" key={key}>
          <PostCard
            variant={variant}
            url={article.slug}
            content={article.content}
            title={article.title}
            date={article.createdAt}
          />
        </div>
      );
    });
  return (
    <>
      <SimpleSlider />
      <div className="container px-4 py-12 mx-auto">
        <BackToHomeButton />
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left mt-6">
          Cẩm Nang Tang Lễ
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          <strong>
            Hướng dẫn chi tiết từng bước để chuẩn bị và tổ chức lễ tang chu đáo, trang nghiêm
          </strong>
          .<br /> Trong những thời khắc mất mát, việc chuẩn bị cho một lễ tang không chỉ là trách
          nhiệm mà còn là cách để thể hiện lòng thành kính, tri ân người đã khuất. Cẩm nang tang lễ
          cung cấp thông tin thiết thực về các thủ tục, nghi lễ, giấy tờ pháp lý, phong tục tập quán
          theo vùng miền, cũng như những điều cần lưu ý khi tổ chức tang lễ. Chúng tôi mong muốn
          giúp gia đình vượt qua giai đoạn khó khăn này một cách nhẹ nhàng và trang trọng nhất.
        </p>{' '}
        <div className="grid grid-cols-12 gap-4 lg:border-b md:pb-4">
          <div className="order-3 lg:order-1 hidden lg:block lg:col-span-3">
            {renderPosts(leftPosts ?? [])}
          </div>
          <div className="order-1 md:order-2 mb-4 md:mb-0 col-span-12 md:col-span-8 lg:col-span-6 md:px-6 md:border-l md:border-r">
            <PostCard
              variant={CardVariant.Center}
              key={999}
              url={`${centerPost?.slug}`}
              title={centerPost?.title || ''}
              content={centerPost?.content || ''}
            />
          </div>
          <div className="col-span-12 order-2 md:col-span-4 lg:col-span-3">
            {renderPosts(rightPosts ?? [], CardVariant.Right)}
          </div>
        </div>
        <div className="md:mt-8">
          <PostSlider articles={slidePosts} />
        </div>
        <div className="mt-8">
          <h2 className="uppercase text-3xl">Tin mới</h2>
          <div className="border-2 border-red-700 w-12 mt-2 mb-6" />
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              {remainPosts.map((article: Article) => (
                <div className="mb-6" key={article.slug}>
                  <PostCardWithDescription
                    title={article.title}
                    url={article.slug}
                    content={article.content}
                    date={article.createdAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
