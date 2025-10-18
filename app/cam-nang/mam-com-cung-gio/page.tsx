// app/cam-nang/mam-com-cung-gio/page.tsx
import Image from '@/components/CustomImage';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import { Metadata } from 'next/types';

const slug = 'mam-com-cung-gio';
const title = 'Làm Sao Để Chuẩn Bị Mâm Cơm Cúng Giỗ Đúng Phong Tục?';
const description =
  'Hướng dẫn chi tiết cách chuẩn bị mâm cơm cúng giỗ theo phong tục truyền thống Việt Nam: ý nghĩa, món cần có, cách bày trí, lưu ý phong tục và FAQ. Bài viết chuẩn SEO & EEAT.';
const canonicalUrl = `https://sinhphuctho.com/cam-nang/${slug}.html`;
const IMAGE_PATH = `/assets/images/cam-nang/${slug}`;

export async function generateMetadata(): Promise<Metadata> {
  const url = canonicalUrl;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      'mâm cơm cúng giỗ',
      'cách chuẩn bị mâm cúng giỗ',
      'mâm cúng giỗ miền Bắc',
      'mâm cúng giỗ miền Trung',
      'mâm cúng giỗ miền Nam',
      'phong tục giỗ chạp',
      'hướng dẫn cúng giỗ',
      'Sinh Phúc Thọ'
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Sinh Phúc Thọ',
      type: 'article',
      locale: 'vi_VN',
      publishedTime: '2025-10-07T00:00:00+07:00',
      modifiedTime: '2025-10-07T00:00:00+07:00',
      images: [
        {
          url: `${IMAGE_PATH}/banner.webp`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${IMAGE_PATH}/banner.webp`]
    },
    robots: { index: true, follow: true }
  };
}

export default function Article() {
  const faqs = [
    {
      question: 'Mâm cơm cúng giỗ thường gồm những món gì?',
      answer:
        'Mâm cúng giỗ cơ bản bao gồm: món mặn (gà luộc, thịt heo, cá kho), món xào, canh, tinh bột (cơm/xôi/bánh), món ngọt (chè/bánh), hoa quả, trà và rượu. Tùy vùng miền, gia đình có thể thêm đặc sản địa phương.'
    },
    {
      question: 'Có cần chuẩn bị mâm cỗ chay khi cúng giỗ không?',
      answer:
        'Tùy theo tín ngưỡng gia đình. Nếu gia đình theo Phật giáo hoặc muốn giữ lễ nghi thanh tịnh, có thể bố trí mâm chay hoặc một mâm chay bổ sung bên cạnh mâm mặn.'
    },
    {
      question: 'Có thể giản lược mâm cúng khi kinh tế hạn hẹp không?',
      answer:
        'Hoàn toàn được — điều quan trọng là sự thành tâm. Gia đình có thể chuẩn bị một mâm đơn giản nhưng gọn gàng, giữ đủ các nhóm món cơ bản và tránh việc phô trương.'
    },
    {
      question: 'Lưu ý nào khi bày mâm cúng để đúng phong tục?',
      answer:
        'Không nếm đồ trước khi dâng cúng, đặt bát cơm úp ở vị trí trung tâm khi dâng, giữ không gian sạch sẽ, và tuân thủ tục tôn giáo của gia đình (chay/mặn, thắp nhang đúng số lượng, vị trí hoa quả).'
    }
  ];

  return (
    <CamNangLayout title={title}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="mb-4">
        <strong>Mâm cơm cúng giỗ</strong> là biểu tượng kết nối giữa thế hệ đang sống và tổ tiên. Ngoài ý nghĩa
        tâm linh, mâm cúng còn là dịp để gia đình tụ họp, truyền dạy giá trị văn hóa cho thế hệ trẻ.
        Bài viết này hướng dẫn từng bước chuẩn bị mâm cơm cúng giỗ theo phong tục Việt Nam, mở rộng
        theo vùng miền và lưu ý thực hành để đảm bảo nghi lễ trang nghiêm, ý nghĩa và phù hợp tiêu
        chí EEAT.
      </p>

      <figure className="relative w-full h-72 mb-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-1.jpg`}
          alt="Mâm cơm cúng giỗ truyền thống"
          priority
          className="object-cover rounded-lg"
        />
      </figure>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Ý nghĩa của mâm cơm cúng giỗ</h2>
      <p>
        Mâm cơm cúng giỗ biểu hiện tinh thần <em>uống nước nhớ nguồn</em> — một giá trị cốt lõi trong văn hóa
        Việt. Mỗi món ăn trên mâm đều mang thông điệp: tưởng nhớ, biết ơn và cầu chúc cho người đã
        khuất an nghỉ. Hành vi dâng cúng là một hành động tập thể, giúp cộng đồng và gia đình cùng
        ôn lại ký ức, giáo dục thế hệ trẻ về đạo hiếu.
      </p>
      <p>
        Về mặt xã hội học, mâm cơm giỗ còn củng cố mối liên kết dòng họ: việc chuẩn bị, dọn dẹp, chia
        phần thức ăn sau lễ là cơ hội để gia đình sống lại truyền thống chung, giữ gìn văn hóa và
        khẳng định vai trò của từng thế hệ trong việc duy trì nghi lễ.
      </p>
      <figure className="relative w-full h-72 mb-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-2.png`}
          alt="Mâm cơm cúng giỗ truyền thống"
          priority
          className="object-cover rounded-lg"
        />
      </figure>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Các loại mâm cơm cúng giỗ theo vùng miền</h2>

      <h3 className="text-xl font-medium mt-4">2.1 Mâm cỗ miền Bắc</h3>
      <p>
        Ở miền Bắc, mâm cúng thường chú trọng cân đối âm dương và biểu tượng: xôi gấc đỏ tượng trưng
        may mắn, gà luộc tượng trưng cho sự trọn vẹn, nem rán thể hiện truyền thống. Mâm thường được
        bày gọn, hướng tới sự trang nhã, thanh lịch.
      </p>
      <ul className="list-disc ml-6 my-2">
        <li>Xôi gấc, gà luộc, nem rán, canh măng, giò chả, chè kho, hoa quả.</li>
      </ul>

      <h3 className="text-xl font-medium mt-4">2.2 Mâm cỗ miền Trung</h3>
      <p>
        Miền Trung nổi tiếng về độ cầu kỳ trong ẩm thực: mâm cỗ có nhiều món nhỏ, chế biến công phu và
        bày biện tinh xảo. Các gia đình miền Trung thường chú trọng đến tính thẩm mỹ và văn hóa truyền
        thống địa phương.
      </p>
      <ul className="list-disc ml-6 my-2">
        <li>Bánh bèo, bánh nậm, nem lụi, thịt kho, các món rim, chè truyền thống, hoa quả mùa.</li>
      </ul>

      <figure className="relative w-full h-72 mb-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-3.jpg`}
          alt="Mâm cơm cúng giỗ truyền thống"
          priority
          className="object-cover rounded-lg"
        />
      </figure>
      <h3 className="text-xl font-medium mt-4">2.3 Mâm cỗ miền Nam</h3>
      <p>
        Ở miền Nam, mâm cúng thường phong phú, đậm vị, sử dụng nhiều nguyên liệu nhiệt đới như dừa, cá
        đồng và các loại rau củ địa phương. Không khí giỗ ở Nam Bộ thường sôi nổi và mang tính cộng đồng.
      </p>
      <ul className="list-disc ml-6 my-2">
        <li>Thịt kho tàu, cá kho tộ, canh chua, gỏi, bánh tét hoặc bánh ú, chè dừa.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Những món căn bản cần có trên mâm cúng</h2>
      <p>
        Dù vùng miền khác nhau, một mâm cơm cúng chuẩn vẫn cần đảm bảo các nhóm món chính: món mặn,
        món canh, món tinh bột, món ngọt và hoa quả. Dưới đây là giải thích công dụng văn hóa của một
        vài món điển hình:
      </p>
      <ul className="list-disc ml-6 my-2">
        <li>
          <strong>Gà luộc:</strong> biểu tượng của sự đầy đủ, thường để nguyên con, đầu và chân gà được
          giữ nguyên để thể hiện sự trọn vẹn.
        </li>
        <li>
          <strong>Xôi/ bánh chưng/ bánh tét:</strong> biểu tượng đất trời, bánh thường là vật phẩm dâng lên
          tổ tiên thể hiện lòng biết ơn.
        </li>
        <li>
          <strong>Chè/ bánh ngọt:</strong> kết thúc mâm cúng bằng vị ngọt như lời chúc may mắn cho hậu thế.
        </li>
      </ul>
      <figure className="relative w-full h-72 mb-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-4.jpg`}
          alt="Mâm cơm cúng giỗ truyền thống"
          priority
          className="object-cover rounded-lg"
        />
      </figure>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Chuẩn bị trước ngày giỗ — checklist chi tiết</h2>
      <p>
        Lập kế hoạch sớm giúp mâm cúng hoàn hảo và gia đình bớt áp lực. Dưới đây là checklist tham
        khảo:
      </p>
      <ol className="list-decimal ml-6 my-2">
        <li>Một tuần trước: xác định số lượng khách, chọn món chủ đạo, đặt bánh chưng/xôi nếu cần.</li>
        <li>3 ngày trước: mua sắm nguyên liệu tươi (thịt, rau, gạo), đặt hoa tươi, chuẩn bị di ảnh, bài vị.</li>
        <li>Ngày trước: chuẩn bị món có thể làm sẵn (chả, bánh), làm sạch không gian, kiểm tra bàn thờ.</li>
        <li>Sáng hôm giỗ: nấu xong các món tươi, bày mâm, nhờ người chuẩn bị hương, nến và đồ cúng.</li>
      </ol>
      <p>
        Một mẹo thực tế: nếu phải giữ món qua đêm, tránh để thực phẩm chín trực tiếp ngoài trời — dùng
        ngăn mát, lớp màng bọc thực phẩm và bọc bằng lá chuối để giữ mùi truyền thống.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Cách bày trí mâm cúng đúng phong tục</h2>
      <p>
        Bày trí mâm cúng có quy tắc nhất định: đặt bát cơm úp chính giữa (biểu tượng tạm thời cho người mất),
        hoa quả xếp phía trước, rượu/ trà hai bên, các món mặn sắp xung quanh. Giữ mâm cân đối và sạch sẽ —
        đó là biểu hiện của lòng thành.
      </p>
      <p>
        Nếu có nhiều mâm (ví dụ mâm chay và mâm mặn), đặt mâm chay bên trái (theo hướng nhìn từ ngoài vào)
        để phù hợp với nhiều nghi thức Phật giáo. Khi dâng, thắp nhang theo số lượng truyền thống của địa phương.
      </p>
      <figure className="relative w-full h-72 mb-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-5.jpg`}
          alt="Mâm cơm cúng giỗ truyền thống"
          priority
          className="object-cover rounded-lg"
        />
      </figure>
      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Lưu ý phong tục, văn hóa và mê tín</h2>
      <p>
        Một số lưu ý thực tế:
      </p>
      <ul className="list-disc ml-6 my-2">
        <li>Không nếm đồ ăn trước khi đặt lên mâm cúng.</li>
        <li>Tôn trọng lựa chọn tôn giáo của dòng họ (nên hỏi ý kiến trưởng họ nếu cần thay đổi nghi lễ).</li>
        <li>Tránh những hành vi gây ồn ào, thiếu trang nghiêm trong lúc cúng.</li>
        <li>Đối với những gia đình theo Phật, nên chuẩn bị mâm chay hoặc đồ ăn không xộc mùi mạnh.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Giá trị giáo dục và truyền thống</h2>
      <p>
        Tham gia chuẩn bị mâm cơm cúng giỗ là cách trực tiếp truyền dạy cho thế hệ trẻ về đạo hiếu, về
        nghề bếp truyền thống và những câu chuyện gia đình. Việc này tạo nên ký ức văn hóa song song với
        giáo dục đạo đức — giúp trẻ hiểu trách nhiệm đối với tổ tiên và cộng đồng.
      </p>

      <figure className="relative w-full h-72 my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-2.png`}
          alt="Cách bày mâm cơm cúng giỗ"
          priority
          className="object-cover rounded-lg"
        />
      </figure>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Kết luận & liên hệ</h2>
      <p>
        Chuẩn bị mâm cơm cúng giỗ đúng phong tục là biểu hiện của lòng thành và trách nhiệm gia đình. Dù
        giản đơn hay trang trọng, yếu tố then chốt là <em>tấm lòng thành kính</em> và việc giữ gìn truyền thống.
      </p>
      <p>
        Nếu bạn cần mẫu mâm, dịch vụ nấu cỗ hoặc tư vấn phong tục, Trại Hòm Sinh Phúc Thọ sẵn sàng hỗ trợ —
        vui lòng liên hệ qua trang{' '}
        <a href="https://sinhphuctho.com/lien-he" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Liên Hệ
        </a>
        . Đọc thêm các bài viết liên quan tại {' '}
        <a href="/cam-nang.html" className="text-blue-600 underline">
          chuyên mục Cẩm Nang
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ – Các câu hỏi thường gặp về mâm cơm cúng giỗ</h2>
      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div key={idx} className="border rounded-md p-4 bg-gray-50">
            <p className="font-medium">{f.question}</p>
            <p className="mt-2 text-gray-700">{f.answer}</p>
          </div>
        ))}
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            author: { '@type': 'Organization', name: 'Trại Hòm Sinh Phúc Thọ', url: 'https://sinhphuctho.com' },
            publisher: {
              '@type': 'Organization',
              name: 'Sinh Phúc Thọ',
              logo: { '@type': 'ImageObject', url: 'https://sinhphuctho.com/assets/images/logo.png' }
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
            datePublished: '2025-10-07T00:00:00+07:00',
            dateModified: '2025-10-07T00:00:00+07:00',
            image: `${IMAGE_PATH}/hinh-1.jpg`,
            articleSection: 'Phong tục thờ cúng',
            keywords: ['mâm cơm cúng giỗ', 'cách bày mâm cúng', 'phong tục giỗ chạp'],
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
          })
        }}
      />
    </CamNangLayout>
  );
}

export const revalidate = 3600;
