import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from 'next/image';
import Script from 'next/script';
import type { GetStaticProps, Metadata } from 'next';

const slug = 'so-sanh-mai-tang-va-hoa-tang';
const basePath = `/assets/images/cam-nang/${slug}`;
const images = [
  {
    src: `${basePath}/hinh-1.webp`,
    alt: 'Gia đình họp bàn quyết định hình thức tang lễ',
    caption: 'Hình 1: Gia đình thảo luận chọn mai táng hoặc hỏa táng',
  },
  {
    src: `${basePath}/hinh-2.webp`,
    alt: 'Lò hỏa táng và quy trình xử lý tro cốt',
    caption: 'Hình 2: Quy trình hỏa táng và thu tro cốt',
  },
  {
    src: `${basePath}/hinh-3.webp`,
    alt: 'So sánh chi phí và thời gian mai táng vs hỏa táng',
    caption: 'Hình 3: Bảng so sánh chi phí, thời gian, phong tục',
  },
  {
    src: `${basePath}/hinh-4.webp`,
    alt: 'Checklist quyết định hỏa táng hoặc mai táng',
    caption: 'Hình 4: Checklist giúp quyết định hình thức tang lễ',
  },
  {
    src: `${basePath}/hinh-5.webp`,
    alt: 'Tro cốt lưu giữ và đặt tại bàn thờ',
    caption: 'Hình 5: Ví dụ cách lưu giữ tro cốt sau hỏa táng',
  },
];

const title = 'So sánh mai táng và hỏa táng — Nên chọn hình thức nào?';
const description =
  'So sánh chi tiết mai táng và hỏa táng: quy trình, chi phí, phong tục, tác động môi trường và hướng dẫn chọn hình thức phù hợp. Bài viết giúp gia đình hiểu rõ giá trị văn hóa – tâm linh để lựa chọn nhân văn và tiết kiệm.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
const publishedDate = '2025-10-14';
const modifiedDate = '2025-10-14';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  keywords:
    'mai táng, hỏa táng, so sánh mai táng và hỏa táng, nên chọn hỏa táng hay mai táng, chi phí tang lễ, phong tục mai táng, xử lý tro cốt, lựa chọn hình thức tang lễ, sinh phúc thọ, dịch vụ tang lễ trọn gói, tư vấn tang lễ',
  openGraph: {
    title,
    description,
    url,
    siteName: 'Sinh Phúc Thọ',
    type: 'article',
    images: [{ url: images[0].src, width: 1200, height: 630, alt: images[0].alt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [images[0].src] },
  robots: { index: true, follow: true },
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata, // 👈 truyền thủ công
    },
  };
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  headline: title,
  description,
  image: images.map(i => i.src),
  author: { '@type': 'Organization', name: 'Sinh Phúc Thọ', url: 'https://sinhphuctho.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Sinh Phúc Thọ',
    logo: { '@type': 'ImageObject', url: 'https://sinhphuctho.com/favicon.ico' },
  },
  datePublished: publishedDate,
  dateModified: modifiedDate,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://sinhphuctho.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Cẩm nang',
      item: 'https://sinhphuctho.com/cam-nang.html',
    },
    { '@type': 'ListItem', position: 3, name: title, item: url },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mai táng và hỏa táng khác nhau như thế nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mai táng là chôn cất thi hài trong đất, còn hỏa táng là thiêu đốt và xử lý tro cốt. Mỗi hình thức có giá trị tâm linh và ưu điểm riêng, tùy theo hoàn cảnh, tín ngưỡng và điều kiện của mỗi gia đình.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chi phí mai táng và hỏa táng khác nhau ra sao?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mai táng thường tốn kém hơn vì bao gồm đất nghĩa trang, xây mộ, duy trì lâu dài; hỏa táng chi phí ban đầu thấp hơn và phù hợp không gian đô thị hạn chế.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nên chọn hình thức nào trong năm 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nếu gia đình muốn tiết kiệm, hiện đại, bảo vệ môi trường thì hỏa táng là lựa chọn phù hợp. Nếu có đất riêng, muốn giữ truyền thống và nơi thờ cúng lâu dài thì nên chọn mai táng.',
      },
    },
  ],
};

export default function Page() {
  return (
    <CamNangLayout title={title} tag="Cẩm nang">
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <article className="prose prose-lg dark:prose-invert mx-auto w-full px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-2">Mục lục</h2>
          <ul className="space-y-1 list-decimal ml-4 text-sm">
            <li><a href="#gioi-thieu">Giới thiệu</a></li>
            <li><a href="#mai-tang-la-gi">Mai táng là gì</a></li>
            <li><a href="#hoa-tang-la-gi">Hỏa táng là gì</a></li>
            <li><a href="#so-sanh-chung">So sánh chi tiết</a></li>
            <li><a href="#yeu-to-quy-dinh">Yếu tố pháp lý</a></li>
            <li><a href="#tac-dong-mt">Tác động môi trường</a></li>
            <li><a href="#chon-hinh-thuc">Khi nào nên chọn hình thức nào</a></li>
            <li><a href="#checklist">Checklist</a></li>
            <li><a href="#faq">Câu hỏi thường gặp</a></li>
          </ul>
        </nav>

        {/* === GIỚI THIỆU === */}
        <section id="gioi-thieu">
          <h2>Giới thiệu</h2>
          <p>
            Trong văn hóa Việt Nam, tang lễ không chỉ là nghi thức tiễn đưa người đã khuất mà còn là biểu hiện của lòng hiếu thảo, tri ân tổ tiên và sự gắn bó tâm linh giữa các thế hệ. Hai hình thức phổ biến nhất hiện nay là <strong>mai táng</strong> (chôn cất) và <strong>hỏa táng</strong> (thiêu hủy thi hài, thu tro cốt). 
          </p>
          <p>
            Khi xã hội ngày càng hiện đại, việc lựa chọn giữa hai hình thức không còn chỉ phụ thuộc vào phong tục, mà còn cần xem xét yếu tố pháp lý, môi trường và điều kiện thực tế. Bài viết này giúp bạn hiểu rõ hơn về từng hình thức để đưa ra quyết định phù hợp và nhân văn.
          </p>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">
            “Một tang lễ trọn vẹn là sự kết hợp giữa lòng kính trọng người đã khuất và sự bình an của người ở lại.” — Sinh Phúc Thọ
          </blockquote>
        </section>

        {/* === MAI TÁNG === */}
        <section id="mai-tang-la-gi">
          <h2>Mai táng là gì — Quy trình & phong tục</h2>
          <p>
            Mai táng là hình thức chôn cất thi hài trong lòng đất – biểu tượng cho sự “trở về với cội nguồn”. Từ hàng nghìn năm nay, người Việt coi đất là nơi khởi sinh và cũng là nơi con người quay lại sau khi qua đời. Tang lễ được tiến hành cẩn trọng, thể hiện sự biết ơn, hiếu kính và lòng nhân hậu.
          </p>
          <p>
            Quy trình mai táng thường gồm các bước: chuẩn bị tang phục, nhập quan, phát tang, di quan, chôn cất, xây mộ và cúng giỗ. Mỗi giai đoạn là một nghi lễ mang tính tâm linh sâu sắc.
          </p>
          <p>
            Trong đời sống hiện đại, nhiều gia đình kết hợp mai táng truyền thống với dịch vụ mai táng sinh thái, vừa giữ được nghi thức cổ truyền, vừa đảm bảo vệ sinh môi trường.
          </p>
          <p>
            So với hỏa táng, mai táng mang tính truyền thống cao hơn, gắn liền với tín ngưỡng “mồ yên mả đẹp” và sự trường tồn. Tuy nhiên, chi phí và quỹ đất ngày càng trở thành vấn đề lớn, đặc biệt ở đô thị. Chính vì thế, nhiều gia đình ngày nay chuyển sang mô hình <strong>mai táng sinh thái</strong> — chôn cất bằng quan tài phân hủy tự nhiên, vừa giữ phong tục, vừa giảm tác động môi trường.
          </p>
          <figure className="relative my-6 h-64 rounded overflow-hidden">
            <Image fill src={images[0].src} alt={images[0].alt} className="object-cover" />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{images[0].caption}</figcaption>
          </figure>
        </section>

        {/* === HỎA TÁNG === */}
        <section id="hoa-tang-la-gi">
          <h2>Hỏa táng là gì — Quy trình & lựa chọn</h2>
          <p>
            Hỏa táng là quá trình thiêu đốt thi hài bằng lò hiện đại, sau đó thu tro cốt để lưu giữ, rải hoặc gửi vào tháp tro. Hình thức này phổ biến trong Phật giáo, thể hiện sự thanh tịnh, buông xả, giải thoát khỏi luân hồi vật chất.
          </p>
          <p>
            Quy trình hỏa táng gồm: nhận thi hài – lễ cầu siêu – chuyển vào lò thiêu – thu tro cốt – bàn giao hũ tro cho gia đình. Các trung tâm hỏa táng hiện nay đều áp dụng công nghệ hiện đại, không khói bụi, thân thiện môi trường.
          </p>
          <p>
            So với mai táng, hỏa táng giúp tiết kiệm diện tích đất và chi phí xây mộ, đồng thời giảm ô nhiễm nguồn nước và đất. Quy trình hiện đại cho phép gia đình tổ chức tang lễ trang trọng, nhanh gọn và phù hợp điều kiện đô thị. Tro cốt sau hỏa táng có thể được lưu tại chùa, gửi vào tháp tro, hoặc đặt tại nhà riêng.
          </p>
          <p>
            Tuy nhiên, hỏa táng cũng có nhược điểm: cảm giác “thiêu đốt” có thể khiến một số người lớn tuổi e ngại, và việc lưu giữ tro cốt cần được chuẩn bị chu đáo để đảm bảo tâm linh. Dù vậy, đây đang là xu hướng chính tại Việt Nam — nhân văn, tiết kiệm, và bảo vệ môi trường.
          </p>
          <figure className="relative my-6 h-64 rounded overflow-hidden">
            <Image fill src={images[1].src} alt={images[1].alt} className="object-cover" />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{images[1].caption}</figcaption>
          </figure>
        </section>

        {/* === SO SÁNH === */}
        <section id="so-sanh-chung">
          <h2>So sánh chi tiết giữa mai táng và hỏa táng</h2>
          <p>
            Bảng dưới đây tổng hợp những khác biệt chính giữa hai hình thức để bạn dễ dàng đánh giá theo nhu cầu và điều kiện của gia đình.
          </p>
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm my-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Tiêu chí</th>
                <th className="border px-3 py-2">Mai táng</th>
                <th className="border px-3 py-2">Hỏa táng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Bản chất</td>
                <td className="border px-3 py-2">Chôn cất thi hài trong lòng đất</td>
                <td className="border px-3 py-2">Thiêu thi hài, thu tro cốt</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Chi phí</td>
                <td className="border px-3 py-2">Cao (đất nghĩa trang, xây mộ, bảo dưỡng)</td>
                <td className="border px-3 py-2">Thấp hơn, không cần đất lâu dài</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Thời gian tổ chức</td>
                <td className="border px-3 py-2">Kéo dài 2–3 ngày, nhiều nghi lễ</td>
                <td className="border px-3 py-2">Gọn nhẹ, hoàn thành trong 1 ngày</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Phong tục & tín ngưỡng</td>
                <td className="border px-3 py-2">Truyền thống dân gian, Công giáo</td>
                <td className="border px-3 py-2">Phật giáo, xu hướng đô thị</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Tác động môi trường</td>
                <td className="border px-3 py-2">Tốn đất, nguy cơ ô nhiễm nguồn nước</td>
                <td className="border px-3 py-2">Ít ô nhiễm, tiết kiệm quỹ đất</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Không gian tưởng niệm</td>
                <td className="border px-3 py-2">Mộ phần, thăm viếng trực tiếp</td>
                <td className="border px-3 py-2">Tháp tro hoặc bàn thờ tại gia</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 italic text-gray-600">
            👉 Mỗi hình thức đều mang giá trị riêng — quan trọng nhất là sự kính trọng và bình an của người ở lại.
          </p>
        </section>

        {/* === PHÁP LÝ === */}
        <section id="yeu-to-quy-dinh">
          <h2>Yếu tố pháp lý và quy định hiện hành</h2>
          <p>
            Khi tổ chức tang lễ, gia đình cần tuân thủ quy định địa phương về vệ sinh môi trường, khu vực nghĩa trang và đăng ký hỏa táng. Một số thành phố lớn như Hà Nội, TP.HCM đã có quy hoạch cụ thể cho nghĩa trang tập trung và trung tâm hỏa táng hiện đại.
          </p>
          <p>
            Với mai táng, việc chọn đất nghĩa trang cần được cấp phép rõ ràng, tránh khu dân cư, nguồn nước. Còn hỏa táng cần có giấy chứng tử và giấy đăng ký hỏa táng tại cơ sở được cấp phép. 
          </p>
          <p>
            Quy định mới khuyến khích hình thức hỏa táng hoặc mai táng sinh thái để đảm bảo tính bền vững và vệ sinh môi trường.
          </p>
        </section>

        {/* === MÔI TRƯỜNG === */}
        <section id="tac-dong-mt">
          <h2>Tác động môi trường của hai hình thức</h2>
          <p>
            Mai táng truyền thống nếu không xử lý đúng cách có thể gây ô nhiễm đất, nước ngầm, đặc biệt ở khu vực đông dân cư. Việc xây mộ kiên cố bằng xi măng và đá cũng làm giảm diện tích canh tác.
          </p>
          <p>
            Hỏa táng hiện đại sử dụng lò đốt khép kín, công nghệ xử lý khí thải, giúp giảm phát thải và tiết kiệm quỹ đất. Tuy nhiên, nếu không được kiểm soát, việc tiêu thụ năng lượng và khí CO₂ vẫn là vấn đề đáng chú ý.
          </p>
          <p>
            Do đó, các mô hình <strong>tang lễ xanh</strong> đang được khuyến khích – như hỏa táng sinh thái, sử dụng hũ tro phân hủy sinh học hoặc mai táng bằng quan tài tự nhiên.
          </p>
        </section>

        {/* === CHỌN HÌNH THỨC === */}
        <section id="chon-hinh-thuc">
          <h2>Khi nào nên chọn mai táng, khi nào nên chọn hỏa táng?</h2>
          <p>
            Việc lựa chọn hình thức tang lễ phụ thuộc vào mong muốn của người mất, điều kiện gia đình và hoàn cảnh thực tế. 
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Chọn mai táng</strong> nếu gia đình có đất riêng, muốn giữ truyền thống, tạo nơi thăm viếng lâu dài.</li>
            <li><strong>Chọn hỏa táng</strong> nếu sống tại đô thị, muốn tang lễ nhanh gọn, tiết kiệm và thân thiện môi trường.</li>
          </ul>
          <p className="mt-3">
            Dù chọn hình thức nào, điều quan trọng là sự chuẩn bị chu đáo, lòng thành kính và sự hòa thuận giữa các thành viên trong gia đình.
          </p>
        </section>

        {/* === CHECKLIST === */}
        <section id="checklist">
          <h2>Checklist chuẩn bị tang lễ</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Xác định ý nguyện của người mất hoặc mong muốn của gia đình</li>
            <li>Liên hệ dịch vụ tang lễ uy tín (ví dụ: Sinh Phúc Thọ)</li>
            <li>Chuẩn bị giấy tờ cần thiết: giấy chứng tử, đăng ký mai táng/hỏa táng</li>
            <li>Chọn địa điểm và thời gian tổ chức</li>
            <li>Chuẩn bị lễ vật, xe tang, bàn thờ, phục trang</li>
            <li>Thông báo họ hàng, hàng xóm, phường/xã</li>
            <li>Chuẩn bị nghi thức cầu siêu, di quan, an táng hoặc hỏa táng</li>
          </ul>
        </section>

        {/* === FAQ === */}
        <section id="faq">
          <h2>Câu hỏi thường gặp</h2>
          <h3>Mai táng có phải là hình thức bắt buộc ở nông thôn không?</h3>
          <p>
            Không bắt buộc. Nhiều địa phương đã cho phép và khuyến khích hỏa táng để tiết kiệm đất và đảm bảo vệ sinh. Tuy nhiên, ở vùng quê, mai táng vẫn được duy trì như một nét văn hóa lâu đời.
          </p>
          <h3>Tro cốt sau hỏa táng nên lưu ở đâu?</h3>
          <p>
            Tro cốt có thể được lưu tại chùa, đặt trong tháp tro hoặc mang về thờ tại nhà. Nhiều gia đình hiện chọn <em>hũ tro sinh học</em> để rải xuống sông hoặc dưới gốc cây – vừa ý nghĩa vừa thân thiện môi trường.
          </p>
          <h3>Có thể kết hợp hai hình thức không?</h3>
          <p>
            Có. Một số gia đình chọn hỏa táng trước, sau đó chôn hũ tro vào phần mộ nhỏ, vừa thể hiện lòng thành, vừa tiết kiệm diện tích.
          </p>
        </section>

        <hr className="my-10" />
        <p className="text-center text-sm text-gray-500">
          © 2025 Sinh Phúc Thọ — Dịch vụ tang lễ trọn gói, nhân văn và tận tâm.
        </p>
      </article>
    </CamNangLayout>
  );
}
