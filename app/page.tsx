import { Metadata } from 'next';
import Script from 'next/script';

import { Article } from '@/schema/article.schema';
import PostCardWithDescription from '@/components/PostCardWithDescription';
import PostSlider from '@/components/PostSlider/PostSlider';
import SimpleSlider from '@/components/SimpleSlider';
import articles from '@/data/cam-nang.json';
import { CardVariant } from '@/enums/CardVariant';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title:
    'Cẩm Nang Tang Lễ | Kiến Thức & Hướng Dẫn Khi Nhà Có Đám Tang | Trại Hòm Sinh Phúc Thọ',
  description:
    'Tổng hợp các bài viết cẩm nang chi tiết về thủ tục, nghi thức và kinh nghiệm khi nhà có tang. Hướng dẫn tổ chức tang lễ chu đáo, đúng phong tục Việt Nam từ Trại Hòm Sinh Phúc Thọ Gò Vấp.',
  keywords:
    'cẩm nang tang lễ, thủ tục tang lễ, kinh nghiệm tổ chức tang lễ, hướng dẫn khi nhà có tang, nghi thức tang lễ, mai táng trọn gói, Trại Hòm Sinh Phúc Thọ',
  openGraph: {
    title: 'Cẩm Nang Tang Lễ | Trại Hòm Sinh Phúc Thọ Gò Vấp',
    description:
      'Trại Hòm Sinh Phúc Thọ chia sẻ cẩm nang tang lễ đầy đủ, từ thủ tục pháp lý, nghi thức tôn giáo đến các kinh nghiệm tổ chức tang lễ chu đáo và tiết kiệm.',
    url: 'https://sinhphuctho.com/cam-nang',
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
  alternates: {
    canonical: 'https://sinhphuctho.com/cam-nang',
  },
};

export default async function Page() {
  const centerPost = articles?.[0];
  const leftPosts = articles?.slice(1, 8);
  const rightPosts = articles?.slice(8, 10);
  const slidePosts = articles?.slice(10, 15);
  const remainPosts = articles?.slice(14, articles.length);

  const renderPosts = (posts: Article[], variant?: CardVariant) =>
    posts?.map((article: Article, index) => (
      <div className="mb-4" key={index}>
        <PostCard
          variant={variant}
          url={article.slug}
          content={article.content}
          title={article.title}
          date={article.createdAt}
        />
      </div>
    ));

  return (
    <>
      {/* ✅ Schema JSON-LD: CollectionPage + FAQ */}
      <Script
        id="schema-cam-nang"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Cẩm Nang Tang Lễ',
              url: 'https://sinhphuctho.com/cam-nang',
              description:
                'Tổng hợp các bài viết hướng dẫn chi tiết về phong tục, nghi lễ, thủ tục và kinh nghiệm tổ chức tang lễ đúng truyền thống Việt Nam.',
              about: {
                '@type': 'Thing',
                name: 'Tang lễ Việt Nam',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Trại Hòm Sinh Phúc Thọ Gò Vấp',
                url: 'https://sinhphuctho.com/',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://sinhphuctho.com/favico.ico',
                },
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Khi trong gia đình có người mất, cần làm gì đầu tiên?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Khi trong gia đình có người mất, việc đầu tiên là giữ bình tĩnh, báo với người thân và liên hệ dịch vụ tang lễ uy tín để được hỗ trợ về thủ tục pháp lý, vận chuyển và chuẩn bị nghi lễ chu đáo.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Tang lễ ở Việt Nam thường kéo dài bao lâu?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Thông thường, tang lễ ở Việt Nam diễn ra từ 2 đến 3 ngày, tùy theo phong tục vùng miền và tôn giáo. Một số gia đình có thể tổ chức trong ngày để thuận tiện cho người thân ở xa.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Cần chuẩn bị những gì để tổ chức lễ tang chu đáo?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gia đình cần chuẩn bị đầy đủ: liên hệ dịch vụ tang lễ, chuẩn bị quan tài, bàn thờ, trang trí hoa tang, lập bàn tiếp khách, thực hiện các nghi lễ cúng viếng, và sắp xếp hậu sự chu toàn.',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* Banner giới thiệu */}
      <SimpleSlider
        backgroundUrl="/assets/images/ve-chung-toi.jpg"
        title="CẨM NANG TANG LỄ"
        subtitle="Kiến thức – Hướng dẫn – Kinh nghiệm tổ chức tang lễ chu đáo và đúng phong tục Việt Nam."
        ctaSecondary={{ label: 'Tư Vấn Ngay', link: 'tel:0913673661' }}
        ctaPrimary={{ label: 'Xem Bài Viết', link: '#posts' }}
      />

      <div id="posts" className="container px-4 py-12 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left mt-6">
          Cẩm Nang Tang Lễ
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <strong>
            Hướng dẫn chi tiết từng bước để chuẩn bị và tổ chức lễ tang chu đáo, trang nghiêm
          </strong>
          .<br />
          Trong những thời khắc mất mát, việc chuẩn bị cho một lễ tang không chỉ là trách nhiệm mà
          còn là cách thể hiện lòng tri ân người đã khuất. Bộ cẩm nang này giúp bạn nắm rõ các bước
          tổ chức, thủ tục pháp lý, nghi thức và phong tục tang lễ truyền thống theo từng vùng miền.
        </p>

        <div className="grid grid-cols-12 gap-4 md:pb-4">
          <div className="order-3 lg:order-1 hidden lg:block lg:col-span-3">
            {renderPosts(leftPosts ?? [])}
          </div>

          <div className="order-1 md:order-2 mb-4 md:mb-0 col-span-12 md:col-span-8 lg:col-span-6 md:px-6 md:border-gray md:border-r">
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
