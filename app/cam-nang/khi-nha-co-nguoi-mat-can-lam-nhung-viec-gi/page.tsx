// app/cam-nang/quy-trinh-to-chuc-tang-le-tron-goi/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from '@/components/CustomImage';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import type { Metadata } from 'next';

const slug = 'khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi';
const title =
  'Khi nhà có người mất cần làm những việc gì?';
const description =
  'Hướng dẫn chi tiết các bước tổ chức tang lễ trọn gói từ khâm liệm, nhập quan, lễ viếng, truy điệu đến an táng hoặc hỏa táng. Giúp gia đình chuẩn bị chu toàn, trang nghiêm và ý nghĩa cho người đã khuất.';
const canonicalUrl = `https://sinhphuctho.com/cam-nang/${slug},html`;
const IMAGE_PATH = `/assets/images/cam-nang/${slug}`;

export const metadata: Metadata = {
  title: 'Khi Nhà Có Người Mất Cần Làm Những Việc Gì? | Hướng Dẫn Chuẩn Bị Tang Lễ Trọn Gói',
  description:
    'Khi có người thân qua đời, gia đình cần chuẩn bị những gì? Hướng dẫn chi tiết quy trình tổ chức tang lễ trọn gói – từ khâm liệm, nhập quan, lễ viếng, truy điệu đến an táng hoặc hỏa táng, giúp bạn chu toàn trong giây phút thiêng liêng nhất.',
  keywords: [
    'tổ chức tang lễ trọn gói',
    'khi nhà có người mất',
    'cần làm gì khi có người thân qua đời',
    'hướng dẫn tổ chức tang lễ',
    'dịch vụ tang lễ chuyên nghiệp',
    'nghi thức tang lễ Việt Nam',
    'an táng hỏa táng',
    'tang lễ trọn gói sinh phúc thọ'
  ],
  alternates: {
    canonical: 'https://sinhphuctho.com/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi.html'
  },
  openGraph: {
    title: 'Khi Nhà Có Người Mất Cần Làm Những Việc Gì? | Quy Trình Tang Lễ Trọn Gói 2025',
    description:
      'Bài viết hướng dẫn chi tiết quy trình tổ chức tang lễ trọn gói, từ khâm liệm, nhập quan đến lễ viếng, truy điệu và an táng. Giúp gia đình chuẩn bị chu toàn, trang nghiêm và ý nghĩa cho người đã khuất.',
    url: 'https://sinhphuctho.com/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi.html',
    type: 'article',
    images: [
      {
        url: '/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Khi Nhà Có Người Mất Cần Làm Những Việc Gì'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khi Nhà Có Người Mất Cần Làm Những Việc Gì?',
    description:
      'Hướng dẫn tổ chức tang lễ trọn gói, quy trình khâm liệm, nhập quan, lễ viếng và hỏa táng đầy đủ, giúp gia đình chuẩn bị chu đáo cho người đã khuất.',
    images: [
      '/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/banner.webp'
    ]
  }
};


export default function Page() {
  const faqs = [
    {
      question: 'Dịch vụ tang lễ trọn gói bao gồm những gì?',
      answer:
        'Một gói tang lễ trọn gói thường bao gồm khâm liệm, nhập quan, trang trí tang lễ, tổ chức lễ viếng, an táng hoặc hỏa táng, và các nghi thức hậu sự. Tùy từng đơn vị sẽ có gói dịch vụ phù hợp điều kiện gia đình.'
    },
    {
      question: 'Thời gian tổ chức tang lễ kéo dài bao lâu?',
      answer:
        'Thông thường tang lễ diễn ra từ 1 đến 3 ngày, tùy vào tín ngưỡng, phong tục địa phương và điều kiện thời gian của gia đình.'
    },
    {
      question: 'Khi nào nên chọn an táng hoặc hỏa táng?',
      answer:
        'Nếu gia đình có sẵn đất nghĩa trang hoặc muốn giữ truyền thống, nên chọn an táng. Nếu muốn tiết kiệm, gọn nhẹ và thân thiện môi trường, hỏa táng là lựa chọn phổ biến hiện nay.'
    },
    {
      question: 'Có cần mời thầy cúng hoặc sư thầy trong tang lễ không?',
      answer:
        'Tùy vào tôn giáo và tín ngưỡng của gia đình. Với tang lễ Phật giáo, thường mời sư thầy tụng kinh cầu siêu; với Công giáo, linh mục chủ lễ đọc kinh và làm phép tiễn biệt.'
    }
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Việc tổ chức một <strong>tang lễ trọn gói</strong> không chỉ là trách nhiệm mà còn là cách thể hiện lòng hiếu thảo, sự biết ơn của con cháu đối với người đã khuất. Trong văn hóa Việt, tang lễ mang ý nghĩa thiêng liêng, là dịp để tiễn đưa và cầu nguyện cho linh hồn sớm được siêu thoát. Bài viết này sẽ giúp bạn hiểu rõ toàn bộ quy trình – từ khâu chuẩn bị, nghi thức tôn giáo đến các lưu ý quan trọng.
      </p>

      <h2>1. Liên hệ đơn vị dịch vụ tang lễ</h2>
      <p>
        Khi trong nhà có người thân qua đời, cảm xúc đau buồn khiến nhiều người khó có thể tự mình chuẩn bị chu toàn. Việc đầu tiên cần làm là liên hệ với một đơn vị{' '}
        <strong>dịch vụ tang lễ trọn gói uy tín</strong> để được hỗ trợ ngay từ khâu đầu tiên.
      </p>
      <p>
        Đơn vị tổ chức sẽ giúp gia đình hướng dẫn thủ tục khai tử, chuẩn bị quan tài, xe tang, hoa, âm thanh, ánh sáng và sắp xếp các nghi lễ theo phong tục từng vùng miền. Đây là bước quan trọng giúp tang lễ diễn ra trọn vẹn, tránh sai sót trong thời khắc nhạy cảm.
      </p>

      <h2>2. Khâm liệm và nhập quan</h2>
      <p>
        <strong>Khâm liệm</strong> là nghi thức đầu tiên trong tang lễ, thể hiện lòng thành kính dành cho người đã mất. Thi hài sẽ được tắm rửa sạch sẽ, thay y phục chỉnh tề, thoa dầu thơm, và quấn vải trắng theo đúng nghi lễ truyền thống.
      </p>
      <p>
        Sau khi khâm liệm xong, lễ <strong>nhập quan</strong> được tiến hành – đặt thi hài vào quan tài và chọn giờ hoàng đạo để đóng nắp. Trong nghi thức này, con cháu thường quỳ lạy, đọc lời tiễn biệt, thể hiện lòng biết ơn sâu sắc đối với công sinh dưỡng của cha mẹ, ông bà.
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src="/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/dam-tang-5.png"
          alt="Khâm liệm và nhập quan"
          fill
          className="object-cover rounded-2xl"
        />
      </figure>

      <h2>3. Trang trí không gian tang lễ</h2>
      <p>
        Không gian tang lễ là nơi đón tiếp khách viếng và diễn ra các nghi thức quan trọng, vì vậy cần được sắp xếp trang nghiêm, thanh tịnh. Màu chủ đạo thường là trắng hoặc đen – biểu tượng cho tang tóc và sự tưởng niệm.
      </p>
      <p>
        Bàn thờ được đặt ở vị trí trung tâm với <strong>di ảnh, bát hương, nến, hoa tươi và khăn tang</strong>. Tùy theo tôn giáo, có thể trang trí thêm tượng Phật, thánh giá hoặc biểu tượng tín ngưỡng khác. Đơn vị tang lễ trọn gói sẽ hỗ trợ đầy đủ phông nền, cổng tang, xe rước, loa đài, giúp gia đình yên tâm lo chu toàn.
      </p>

      <h2>4. Thủ tục tôn giáo và nghi lễ cầu siêu</h2>
      <p>
        Tang lễ ở Việt Nam thường chịu ảnh hưởng sâu sắc của <strong>Phật giáo, Công giáo</strong> hoặc tín ngưỡng dân gian. Với người theo Phật, sư thầy sẽ tụng kinh cầu siêu trong suốt tang lễ để dẫn dắt linh hồn sang cảnh giới an lành. Với người theo Công giáo, linh mục chủ trì lễ an táng, đọc kinh và làm phép trước khi hạ huyệt hoặc hỏa táng.
      </p>
      <p>
        Ngoài ra, nhiều gia đình còn mời <strong>thầy cúng</strong> thực hiện các nghi thức dân gian như lễ “thỉnh hồn”, “khai huyệt”, “cúng cơm”, “phát dẫn linh”, thể hiện niềm tin rằng người mất vẫn còn linh thiêng, cần được tiễn biệt chu đáo.
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src="/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/dam-tang-4.webp"
          alt="Nghi lễ tôn giáo trong tang lễ"
          fill
          className="object-cover rounded-2xl"
        />
      </figure>

      <h2>5. Tổ chức lễ viếng, truy điệu và an táng</h2>
      <p>
        <strong>Lễ viếng</strong> là thời điểm để người thân, bạn bè, đồng nghiệp đến thắp hương, chia buồn và tiễn biệt. Thông thường, tang lễ diễn ra trong 1–3 ngày, tùy điều kiện của gia đình. Mỗi khách viếng đều thể hiện lòng thương tiếc qua nén hương, vòng hoa và lời an ủi.
      </p>
      <p>
        <strong>Lễ truy điệu</strong> diễn ra vào buổi sáng ngày đưa tang. Đại diện gia đình hoặc người chủ lễ đọc <em>điếu văn</em>, kể lại công đức và cuộc đời của người đã khuất. Đây là khoảnh khắc thiêng liêng, đánh dấu sự chia ly giữa hai cõi âm dương.
      </p>
      <p>
        Cuối cùng là <strong>lễ an táng hoặc hỏa táng</strong>. Tùy theo nguyện vọng, gia đình có thể chọn{' '}
        <Link href="/an-tang-tron-goi" className="text-blue-600 underline">
          an táng truyền thống
        </Link>{' '}
        tại nghĩa trang, hoặc lựa chọn{' '}
        <Link href="/hoa-tang-tron-goi" className="text-blue-600 underline">
          hỏa táng trọn gói
        </Link>{' '}
        tại các nhà tang lễ hiện đại như Bình Hưng Hòa, Phúc An Viên...
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src="/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/dam-tang-3.webp"
          alt="Lễ truy điệu và an táng"
          fill
          className="object-cover rounded-2xl"
        />
      </figure>

      <h2>6. Nghi thức hậu sự và giỗ chạp</h2>
      <p>
        Sau khi tang lễ kết thúc, gia đình tiếp tục tổ chức các lễ cúng như: 3 ngày (cúng mở cửa mả), 7 ngày, 49 ngày, 100 ngày và giỗ đầu. Mỗi nghi thức đều có ý nghĩa riêng, thể hiện lòng tưởng nhớ và cầu mong linh hồn người mất được siêu thoát.
      </p>
      <p>
        Việc duy trì giỗ chạp không chỉ là tín ngưỡng mà còn là nét văn hóa đẹp – giúp con cháu ghi nhớ cội nguồn, bồi dưỡng đạo hiếu, và gắn kết tình thân giữa các thế hệ trong dòng họ.
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src="/assets/images/cam-nang/khi-nha-co-nguoi-mat-can-lam-nhung-viec-gi/dam-tang-4.webp"
          alt="Nghi thức hậu sự và giỗ chạp"
          fill
          className="object-cover rounded-2xl"
        />
      </figure>

      <h2>Kết luận</h2>
      <p>
        Tổ chức tang lễ là công việc trọng đại, đòi hỏi sự chu toàn, tôn kính và hiểu biết về phong tục. Việc sử dụng <strong>dịch vụ tang lễ trọn gói</strong> giúp gia đình giảm bớt gánh nặng trong thời điểm đau buồn, đảm bảo tang lễ diễn ra trọn vẹn và trang nghiêm nhất.
      </p>
      <p>
        Để tìm hiểu thêm về phong tục, nghi thức và văn hóa tang lễ Việt Nam, mời bạn xem tại{' '}
        <a
          href="https://sinhphuctho.com/cam-nang.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          chuyên mục Cẩm Nang Tang Lễ Sinh Phúc Thọ
        </a>.
      </p>

      {/* Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            author: {
              '@type': 'Organization',
              name: 'Trại Hòm Sinh Phúc Thọ',
              url: 'https://sinhphuctho.com'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sinh Phúc Thọ',
              logo: {
                '@type': 'ImageObject',
                url: 'https://sinhphuctho.com/assets/images/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl
            },
            datePublished: '2025-10-07T00:00:00+07:00',
            dateModified: '2025-10-07T00:00:00+07:00',
            image: `${IMAGE_PATH}/cover.webp`,
            articleSection: 'Tang lễ trọn gói',
            keywords: [
              'tổ chức tang lễ',
              'dịch vụ tang lễ',
              'an táng hỏa táng',
              'nghi thức tang lễ'
            ],
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer
              }
            }))
          })
        }}
      />
    </CamNangLayout>
  );
}

export const revalidate = 3600;
