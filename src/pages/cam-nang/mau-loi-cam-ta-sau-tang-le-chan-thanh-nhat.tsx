// app/cam-nang/mau-loi-cam-on-sau-tang-le/page.tsx

import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from '@/components/CustomImage';
import Script from 'next/script';
import type { GetStaticProps, Metadata } from 'next';

const slug = 'mau-loi-cam-ta-sau-tang-le-chan-thanh-nhat';
const title = 'Mẫu Lời Cảm Ơn Sau Tang Lễ Chân Thành Nhất';
const description =
  'Tham khảo những mẫu lời cảm ơn sau tang lễ chân thành và ý nghĩa nhất. Hướng dẫn cách viết, thời điểm, mẫu đăng Facebook/Zalo, và mẹo để lời cảm ơn vừa trang trọng vừa phù hợp phong tục Việt.';
const url = `https://sinhphuctho.com/cam-nang/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'mẫu lời cảm ơn sau tang lễ',
    'lời cảm tạ sau đám tang',
    'cảm ơn sau tang lễ',
    'bài phát biểu cảm tạ tang lễ',
    'văn mẫu lời cảm ơn đám tang',
    'viết lời cảm ơn sau tang lễ',
  ],
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    siteName: 'Sinh Phúc Thọ',
    images: [
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.webp`],
  },
  alternates: {
    canonical: url,
  },
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata, // 👈 truyền thủ công
    },
  };
};

export default function Page() {
  return (
    <CamNangLayout title={title}>
      {/* JSON-LD: Article + Breadcrumb + FAQ */}
      <Script
        id="ld-json-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: url,
            headline: title,
            description,
            image: [`/assets/images/cam-nang/${slug}/hinh-1.webp`],
            author: {
              '@type': 'Organization',
              name: 'Sinh Phúc Thọ',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sinh Phúc Thọ',
              logo: {
                '@type': 'ImageObject',
                url: 'https://sinhphuctho.com/favicon.ico',
              },
            },
            datePublished: '2025-10-10',
            dateModified: '2025-10-14',
          }),
        }}
      />

      <Script
        id="ld-json-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://sinhphuctho.com' },
              { '@type': 'ListItem', position: 2, name: 'Cẩm Nang', item: 'https://sinhphuctho.com/cam-nang' },
              { '@type': 'ListItem', position: 3, name: title, item: url },
            ],
          }),
        }}
      />

      <Script
        id="ld-json-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Có bắt buộc phải viết lời cảm ơn sau tang lễ không?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Không bắt buộc, nhưng lời cảm ơn là cách thể hiện lòng biết ơn và giữ phong tục, giúp gia đình ghi nhận những đóng góp của cộng đồng.',
                },
              },
              {
                '@type': 'Question',
                name: 'Nên đăng lời cảm ơn lên mạng xã hội như thế nào?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nên viết ngắn gọn, trang trọng, ghi tên người mất, thời gian, cảm ơn và lời nhắc về các sai sót nếu có; kèm ảnh đại diện tang lễ hoặc ảnh bát hương nếu phù hợp.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ai nên đọc lời cảm ơn trong lễ tang?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Người đại diện gia đình (thường là con trưởng, con cả) hoặc người thân lớn tuổi, người có uy tín trong gia đình; nếu cần có thể nhờ thầy, sư hoặc MC lễ tang hỗ trợ.',
                },
              },
            ],
          }),
        }}
      />

      {/* Header: Title, Intro, Quote, TOC */}
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>
        <p className="mt-3 text-sm text-gray-600 max-w-3xl">{description}</p>

        <div className="mt-5 border-l-4 border-yellow-300 bg-yellow-50/40 p-3 rounded-md max-w-3xl">
          <blockquote className="italic text-gray-700 text-sm leading-relaxed">
            “Lời cảm ơn chân thành là lời nối kết giữa quá khứ và hiện tại — vừa tôn kính người đã khuất, vừa an ủi người ở lại.”
          </blockquote>
          <div className="mt-2 text-xs text-gray-500">— Sinh Phúc Thọ</div>
        </div>

        {/* Table of Contents */}
        <nav className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-100 shadow-sm max-w-3xl">
          <h2 className="font-semibold mb-2 text-gray-800">Mục lục</h2>
          <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
            <li><a href="#gioi-thieu" className="hover:text-yellow-700">Giới thiệu & tầm quan trọng</a></li>
            <li><a href="#loi-la-gi" className="hover:text-yellow-700">Lời cảm ơn sau tang lễ là gì?</a></li>
            <li><a href="#nghi-thuc" className="hover:text-yellow-700">Nghi thức và thời điểm thích hợp</a></li>
            <li><a href="#cach-viet" className="hover:text-yellow-700">Cách viết lời cảm ơn (mẫu & công thức)</a></li>
            <li><a href="#mau-thuc-te" className="hover:text-yellow-700">Mẫu thực tế — ngắn, dài, mạng xã hội</a></li>
            <li><a href="#meo" className="hover:text-yellow-700">Mẹo, lưu ý & kiêng kỵ</a></li>
            <li><a href="#eeat" className="hover:text-yellow-700">EEAT & cách chứng minh tính xác thực</a></li>
            <li><a href="#faq" className="hover:text-yellow-700">FAQ — Câu hỏi thường gặp</a></li>
            <li><a href="#ket-luan" className="hover:text-yellow-700">Kết luận & liên hệ hỗ trợ</a></li>
          </ol>
        </nav>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* Section 1 */}
        <section id="gioi-thieu">
          <h2>Giới thiệu — Tại sao lời cảm ơn sau tang lễ quan trọng?</h2>
          <p>
            Sau khi hoàn tất lễ tang, gia đình thường có nhu cầu gửi lời cảm ơn đến những người đã đến viếng, gửi vòng hoa, phúng điếu, hay trực tiếp giúp đỡ trong công việc hậu sự. Lời cảm ơn không chỉ là nghi thức xã giao — nó còn là biểu hiện của lòng biết ơn, giúp khép lại một chuỗi công việc cảm xúc, đồng thời giữ gìn truyền thống và mối quan hệ cộng đồng.
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
              alt="Gia đình gửi lời cảm ơn sau tang lễ — thể hiện lòng biết ơn"
              className="object-cover"
              priority
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 1: Lời cảm ơn giúp gia đình kết thúc nghi lễ một cách trang trọng
            </figcaption>
          </figure>

          <p>
            Về mặt tâm lý, việc đọc hoặc đăng lời cảm ơn giúp gia đình có cơ hội nói lời tri ân, giảm bớt cảm giác cô đơn hoặc bị bỏ rơi sau tang lễ. Về mặt xã hội, lời cảm ơn công khai giúp ghi nhận sự hỗ trợ của cộng đồng, tạo tiền đề cho mối quan hệ trong tương lai.
          </p>
        </section>

        {/* Section 2 */}
        <section id="loi-la-gi" className="mt-8">
          <h2>Lời cảm ơn sau tang lễ là gì? (Định nghĩa và mục đích)</h2>
          <p>
            <strong>Lời cảm ơn sau tang lễ</strong> là tuyên bố hoặc thông điệp mà gia đình gửi đến những người đã tham dự, phúng điếu, hoặc giúp đỡ trong thời gian tang gia. Hình thức có thể là phát biểu trực tiếp tại lễ, thư cảm ơn gửi qua bưu điện, hoặc bài đăng trên mạng xã hội.
          </p>
          <p>
            Mục đích chính gồm: <strong>tri ân</strong>, <strong>thông báo</strong> (kết thúc lễ, cảm ơn những ai đã tham gia), và <strong>xin lỗi</strong> (nếu trong quá trình tổ chức có sơ suất).
          </p>

          <figure className="relative my-6 h-56 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
              alt="Mẫu lời cảm ơn — biểu tượng lời tri ân"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 2: Lời cảm ơn thường ngắn gọn, trang trọng và đầy cảm xúc
            </figcaption>
          </figure>
        </section>

        {/* Section 3 */}
        <section id="nghi-thuc" className="mt-8">
          <h2>Nghi thức và thời điểm phù hợp để gửi lời cảm ơn</h2>
          <p>
            Thông thường lời cảm ơn được thực hiện ngay khi tang lễ kết thúc — người đại diện gia đình đứng lên phát biểu, mời mọi người nhận lời tri ân. Nếu gia đình muốn gửi lời cảm ơn rộng rãi (không chỉ những người có mặt), có thể đăng thông báo trên Facebook, Zalo hoặc báo địa phương trong vòng 1–3 ngày sau tang lễ.
          </p>
          <p>
            Những lưu ý về thời điểm: không nên quá nhanh (vì mất mát vừa xảy ra), cũng không nên quá trễ (vì người đã giúp đỡ cần được công nhận kịp thời). Thời gian hợp lý là trong vòng 48–72 giờ sau khi lễ chính kết thúc.
          </p>

          <h3>Hình thức phổ biến</h3>
          <ul>
            <li>Phát biểu trực tiếp tại lễ (ngắn, trang trọng).</li>
            <li>Thông báo công khai (mạng xã hội, báo địa phương).</li>
            <li>Thư cảm ơn hoặc tin nhắn cá nhân cho người hỗ trợ nhiều.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="cach-viet" className="mt-8">
          <h2>Cách viết lời cảm ơn — công thức để lời vừa xúc động vừa trang nghiêm</h2>
          <p>
            Để lời cảm ơn đạt hiệu quả, bạn có thể áp dụng công thức 4 phần đơn giản: <strong>Mở đầu — Nhắc tên người mất & thời gian — Bày tỏ lòng biết ơn cụ thể — Lời kết</strong>.
          </p>

          <h3>Công thức chi tiết</h3>
          <ol>
            <li>
              <strong>Mở đầu:</strong> Xưng tên gia đình, nêu mục đích (ví dụ: “Thay mặt gia đình chúng tôi…”).
            </li>
            <li>
              <strong>Nhắc người mất & thời gian:</strong> Ghi tên, ngày mất, tuổi thọ (rút gọn).
            </li>
            <li>
              <strong>Tri ân cụ thể:</strong> Cảm ơn người đến viếng, phúng điếu, gửi vòng hoa, hỗ trợ vật chất hoặc tinh thần.
            </li>
            <li>
              <strong>Lời xin lỗi / Kết:</strong> Xin lỗi nếu có sơ suất, kết bằng lời cảm tạ trang trọng.
            </li>
          </ol>

          <p>
            Công thức này giúp lời cảm ơn có cấu trúc rõ ràng, dễ theo dõi và phù hợp với cả phát biểu lẫn bài đăng trên mạng xã hội.
          </p>
        </section>

        {/* Section 5 - Mẫu thực tế */}
        <section id="mau-thuc-te" className="mt-8">
          <h2>Mẫu thực tế — ngắn, dài, và mẫu đăng Facebook/Zalo</h2>

          <h3 className="mt-6">Mẫu ngắn (phát biểu tại lễ)</h3>
          <p><em>“Kính thưa quý vị, thay mặt gia đình, chúng tôi xin chân thành cảm ơn quý bà con cô bác, đồng nghiệp và bạn bè đã đến viếng và chia buồn. Trong lúc tang gia có điều gì sơ suất xin quý vị niệm tình tha thứ. Xin chân thành cảm ơn.”</em></p>

          <h3 className="mt-6">Mẫu dài (phát biểu trang trọng)</h3>
          <p>
            <em>
              “Kính thưa quý đại biểu, quý thân bằng quyến thuộc và bạn bè gần xa. Hôm nay, đại diện gia đình chúng tôi xin gửi lời tri ân sâu sắc đến tất cả quý vị đã đến thắp hương, tiễn đưa và an ủi gia đình trong thời gian qua. Sự hiện diện và những tấm lòng của quý vị đã tiếp thêm sức mạnh cho gia đình trong lúc mất mát. Trong lúc tang gia có những sơ suất nào, mong quý vị cảm thông bỏ qua. Xin chân thành cảm ơn và chúc quý vị an lành.”
            </em>
          </p>

          <h3 className="mt-6">Mẫu đăng Facebook/Zalo</h3>
          <p>
            <em>
              “Gia đình chúng tôi xin chân thành cảm ơn tất cả bà con, bạn bè và đồng nghiệp đã gửi lời chia buồn, phúng điếu và giúp đỡ trong thời gian tang gia. Sự động viên của mọi người là niềm an ủi lớn lao. Nếu trong quá trình tổ chức có gì sơ suất, mong nhận được sự cảm thông. Xin cảm ơn!”
            </em>
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-5.webp`}
              alt="Mẫu lời cảm ơn đăng mạng xã hội — ví dụ minh hoạ"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 5: Mẫu đăng Facebook/Zalo — ngắn gọn, xúc tích và trang trọng
            </figcaption>
          </figure>
        </section>

        {/* Section 6 - Mẹo & Kiêng kỵ */}
        <section id="meo" className="mt-8">
          <h2>Mẹo, lưu ý và những điều kiêng kỵ khi gửi lời cảm ơn</h2>
          <p>
            Để tránh hiểu lầm hoặc thiếu trang trọng, lưu ý một số điểm sau khi soạn/đọc lời cảm ơn:
          </p>

          <ul>
            <li>Giữ giọng điệu trang trọng, tránh sử dụng biệt ngữ, tiếng lóng trong văn bản chính thức.</li>
            <li>Ghi chính xác họ tên, ngày tháng nếu đề cập; tránh sai sót gây hiểu nhầm.</li>
            <li>Nếu gửi trên mạng xã hội, cân nhắc quyền riêng tư — không public thông tin quá chi tiết về tang lễ nếu gia đình muốn kín đáo.</li>
            <li>Tránh dùng hình ảnh quá nặng nề hoặc phản cảm; nên dùng ảnh trang nghiêm, tĩnh lặng.</li>
            <li>Xin lỗi nếu có sơ suất — một câu xin lỗi khiêm tốn thường được đánh giá cao hơn là biện hộ.</li>
          </ul>

          <h3>Kiêng kỵ thường gặp</h3>
          <p>
            Không nếm đồ trên mâm cúng trước khi làm lễ xong; tránh cười đùa, nói đùa trên nền tang; không đăng những bài quá giật gân liên quan đến nguyên nhân tử vong.
          </p>
        </section>

        {/* Section 7 - EEAT */}
        <section id="xac-thuc-thong-diep" className="mt-8">
          <h2>Cách thể hiện sự chân thành và xác thực trong lời cảm tạ</h2>
          <p>
            Một lời cảm tạ sau tang lễ không chỉ để bày tỏ lòng biết ơn, mà còn là cách để người đọc cảm nhận được sự chân thành và tấm lòng của gia quyến. Vì vậy, khi viết, bạn nên thể hiện rõ những yếu tố sau:
          </p>
          <ul>
            <li>
              <strong>Viết bằng cảm xúc thật:</strong> Dùng ngôn từ mộc mạc, gần gũi. Tránh dùng những câu văn quá khuôn mẫu hoặc sáo rỗng.
            </li>
            <li>
              <strong>Nhắc đến những người, tập thể đã hỗ trợ:</strong> Ghi rõ tên cá nhân, đơn vị, hoặc cộng đồng đã giúp đỡ trong quá trình tổ chức tang lễ để thể hiện sự trân trọng.
            </li>
            <li>
              <strong>Xác định người đại diện phát biểu:</strong> Cuối thư nên ghi rõ họ tên, vai trò (ví dụ: “Con trưởng”, “Đại diện gia đình”), để người đọc biết ai là người gửi lời cảm tạ.
            </li>
            <li>
              <strong>Giữ lời văn trung thực, rõ ràng:</strong> Tránh phóng đại hoặc dùng những từ gây hiểu lầm. Một lời cảm ơn giản dị, thật lòng luôn chạm tới người đọc sâu sắc nhất.
            </li>
          </ul>
          <p>
            Khi viết với sự chân thành, mỗi câu chữ đều mang giá trị tình cảm và lan tỏa lòng biết ơn — đó chính là cách khiến thông điệp của gia đình trở nên ý nghĩa và đáng tin tưởng hơn.
          </p>
        </section>
        {/* Section 9 - FAQ rendered for users */}
        <section id="faq" className="mt-8">
          <h2>FAQ — Các câu hỏi thường gặp</h2>

          <h3 className="font-semibold mt-4">1. Có cần gửi lời cảm ơn đến từng người không?</h3>
          <p>Trong thực tế, nếu số lượng người hỗ trợ lớn, gia đình có thể gửi thông báo công khai; với những người hỗ trợ đặc biệt, nên nhắn tin hoặc gọi điện cảm ơn riêng.</p>

          <h3 className="font-semibold mt-4">2. Nên đăng lời cảm ơn lên Facebook vào thời điểm nào?</h3>
          <p>Nên đăng trong vòng 1–3 ngày sau khi lễ chính kết thúc; tránh đăng quá sớm hoặc quá muộn để thông điệp được đón nhận tốt nhất.</p>

          <h3 className="font-semibold mt-4">3. Nếu muốn rút gọn, cần giữ những phần nào?</h3>
          <p>Giữ 3 phần chính: xưng danh, bày tỏ tri ân cụ thể, và kết lời xin lỗi/tri ân chung — đó là đủ cho một thông điệp ngắn nhưng đầy đủ.</p>
        </section>

        {/* Conclusion & CTA */}
        <section id="ket-luan" className="mt-10">
          <h2>Kết luận & liên hệ hỗ trợ</h2>
          <p>
            Lời cảm ơn sau tang lễ là hành động nhỏ nhưng đầy ý nghĩa. Việc soạn một lời cảm ơn trang trọng, chân thành và đúng thời điểm giúp gia đình khép lại một chương buồn bã bằng sự tri ân và trân trọng. Nếu bạn cần hỗ trợ soạn thảo lời cảm ơn hoặc tổ chức các thủ tục hậu tang (từ lập bảng danh sách, chuẩn bị lễ vật đến hỗ trợ đăng thông báo), <strong>Sinh Phúc Thọ</strong> sẵn sàng đồng hành cùng bạn.
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://sinhphuctho.com/lien-he"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-4 py-2 bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700"
            >
              Liên hệ hỗ trợ
            </a>
            <a
              href="https://sinhphuctho.com/cam-nang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-4 py-2 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50"
            >
              Xem thêm cẩm nang
            </a>
          </div>
        </section>

      </article>
    </CamNangLayout>
  );
}
