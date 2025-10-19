import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import type { GetStaticProps, Metadata } from 'next';
import Image from '@/components/CustomImage'

const slug = 'kinh-nghiem-chon-dich-vu-tang-le-tron-goi-uy-tin';
const basePath = `/assets/images/cam-nang/${slug}`;
const image1 = `${basePath}/hinh-1.webp`;
const image2 = `${basePath}/hinh-2.webp`;
const image3 = `${basePath}/hinh-3.webp`;
const image4 = `${basePath}/hinh-4.webp`;
const image5 = `${basePath}/hinh-5.webp`;

const title = 'Kinh nghiệm chọn dịch vụ tang lễ trọn gói uy tín — Hỏa táng & An táng';
const description =
  'Hướng dẫn đầy đủ, thực tế để chọn dịch vụ tang lễ trọn gói uy tín: so sánh hỏa táng và an táng, checklist hỏi nhà cung cấp, hợp đồng, chi phí, thủ tục, phong tục, an toàn và bảo vệ môi trường.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
const publishedDate = '2025-10-13';
const modifiedDate = '2025-10-13';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  keywords:
    'dịch vụ tang lễ, tang lễ trọn gói, chọn dịch vụ tang lễ, hỏa táng, an táng, chi phí tang lễ, checklist tang lễ, Sinh Phúc Thọ',
  openGraph: {
    title,
    description,
    url,
    siteName: 'Sinh Phúc Thọ',
    type: 'article',
    images: [
      {
        url: image1,
        width: 1200,
        height: 630,
        alt: 'Kinh nghiệm chọn dịch vụ tang lễ trọn gói uy tín - Sinh Phúc Thọ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image1],
  },
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
  image: [image1, image2, image3, image4, image5],
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Kinh nghiệm chọn dịch vụ tang lễ trọn gói',
      item: url,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dịch vụ tang lễ trọn gói gồm những gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dịch vụ tang lễ trọn gói thường bao gồm tư vấn, cung cấp linh kiện (quàn, linh đài, vòng hoa), vận chuyển, cung cấp nhân sự tổ chức, thủ tục pháp lý, hỗ trợ tôn giáo, lắp đặt tại lễ, và thu dọn sau lễ. Tùy gói có thể kèm thêm phục vụ hậu sự, xe tang và lo hậu sự.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nên chọn hỏa táng hay an táng?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lựa chọn hỏa táng hay an táng phụ thuộc vào mong muốn gia đình, tôn giáo, chi phí và quy định địa phương. Hỏa táng thường giúp tiết kiệm diện tích, chi phí dài hạn và thân thiện môi trường khi thực hiện đúng quy trình; an táng phù hợp với phong tục truyền thống, cần đất mộ và chi phí chăm sóc mộ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Những câu hỏi quan trọng cần hỏi nhà cung cấp dịch vụ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hỏi về giấy phép hoạt động, quy trình xử lý thi thể, hợp đồng chi tiết, thời gian giao hàng, phí ẩn, chính sách hủy/sửa, bảo hiểm & trách nhiệm, nhân sự thực hiện, và tham khảo phản hồi/đánh giá khách hàng trước.',
      },
    },
  ],
};

export default function Page() {
  return (
    <CamNangLayout title={title} tag="Cẩm nang">
      {/* JSON-LD */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      {/* Header */}
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="mt-6 border-l-4 border-yellow-300 bg-yellow-50/40 p-4 rounded-md">
          <blockquote className="italic text-gray-700">
            “Lựa chọn dịch vụ tang lễ trọn gói uy tín không chỉ là quyết định về chi phí — đó là cam
            kết đảm bảo người thân được tiễn biệt trang nghiêm, đúng phong tục và an toàn.”
          </blockquote>
          <div className="mt-2 text-xs text-gray-500">— Sinh Phúc Thọ</div>
        </div>

        {/* CTA to homepage (natural placement after intro) */}
        <div className="mt-6">
          <a
            href="https://sinhphuctho.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md px-4 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700"
          >
            Xem dịch vụ trọn gói tại Sinh Phúc Thọ
          </a>
        </div>

        {/* Table of Contents */}
        <nav className="mt-8 p-4 bg-gray-50 rounded-md border">
          <h2 className="font-semibold mb-2">Mục lục</h2>
          <ul className="list-decimal ml-6 space-y-1 text-sm">
            <li>
              <a href="#gioi-thieu">Giới thiệu ngắn</a>
            </li>
            <li>
              <a href="#vi-sao-chon-tron-goi">Vì sao nên chọn dịch vụ tang lễ trọn gói</a>
            </li>
            <li>
              <a href="#so-sanh-hoa-tang-an-tang">So sánh: Hỏa táng và An táng</a>
            </li>
            <li>
              <a href="#tieu-chi-chon-nha-cung-cap">Tiêu chí chọn nhà cung cấp uy tín</a>
            </li>
            <li>
              <a href="#danh-sach-cau-hoi">Danh sách câu hỏi bắt buộc khi khảo sát</a>
            </li>
            <li>
              <a href="#hop-dong-chi-phi">Hợp đồng, phí và những điều cần lưu ý</a>
            </li>
            <li>
              <a href="#thuc-te-to-chuc">Thực tế tổ chức & checklist 48/24/6 giờ</a>
            </li>
            <li>
              <a href="#phap-ly-phong-tuc">Thủ tục pháp lý & phong tục vùng miền</a>
            </li>
            <li>
              <a href="#bao-ve-moi-truong">An toàn & bảo vệ môi trường</a>
            </li>
            <li>
              <a href="#kinh-nghiem-thuc-te">Kinh nghiệm thực tế & lời khuyên</a>
            </li>
            <li>
              <a href="#faqs">FAQ</a>
            </li>
            <li>
              <a href="#ket-luan">Kết luận & CTA</a>
            </li>
          </ul>
        </nav>

        {/* CONTENT: GIỚI THIỆU */}
        <section id="gioi-thieu" className="mt-8">
          <h2>Giới thiệu ngắn</h2>

          <p>
            Khi buộc phải chuẩn bị một tang lễ cho người thân, nhiều gia đình chọn dịch vụ tang lễ
            trọn gói để giảm gánh nặng tổ chức — từ khâu pháp lý, vận chuyển, trang trí linh đài,
            đến lễ tôn giáo và thu dọn sau lễ. Tuy nhiên, việc chọn nhà cung cấp uy tín cần cân nhắc
            nhiều yếu tố: nhân sự, giấy phép, quy trình xử lý thi thể, minh bạch chi phí và tôn
            trọng phong tục gia đình.
          </p>

          <p>
            Bài viết này tổng hợp kinh nghiệm thực tế, checklist, và câu hỏi bạn cần đặt ra khi tìm
            dịch vụ tang lễ trọn gói — nhằm giúp bạn đưa ra quyết định nhanh, chính xác và an tâm.
          </p>
        </section>

        {/* WHY CHOOSE TRON GOI */}
        <section id="vi-sao-chon-tron-goi" className="mt-8">
          <h2>Vì sao nên chọn dịch vụ tang lễ trọn gói?</h2>

          <p>
            Dịch vụ trọn gói giúp giảm áp lực tổ chức cho gia đình, đặc biệt khi thời gian gấp rút
            hoặc gia đình ở xa. Nhà cung cấp có kinh nghiệm sẽ:
          </p>
          <ul>
            <li>Hỗ trợ giấy tờ, thủ tục hành chính, làm việc với bệnh viện và nhà tang lễ.</li>
            <li>Bố trí nhân sự, xe đưa tang, âm thanh, ánh sáng và thiết bị cần thiết.</li>
            <li>Tư vấn lựa chọn hỏa táng/an táng phù hợp với phong tục gia đình.</li>
            <li>Chuẩn bị hoa, khung ảnh, lễ vật, và hỗ trợ nghi lễ tôn giáo (nếu yêu cầu).</li>
          </ul>

          <p>
            Tuy nhiên, lợi ích chỉ thực sự đạt nếu bạn chọn nhà cung cấp uy tín — bởi dịch vụ tang
            lễ là lĩnh vực nhạy cảm, đòi hỏi trách nhiệm cao và minh bạch.
          </p>

          <Image
            src={image1}
            alt="Nhân sự tổ chức tang lễ chuyên nghiệp"
            className="my-6 rounded overflow-hidden h-64"
          />
        </section>

        {/* SO SANH HOA TANG VS AN TANG */}
        <section id="so-sanh-hoa-tang-an-tang" className="mt-8">
          <h2>So sánh: Hỏa táng và An táng — ưu & nhược điểm</h2>

          <h3>Hỏa táng (Cremation)</h3>
          <p>
            Hỏa táng đang dần phổ biến nhờ tính gọn nhẹ, chi phí có thể thấp hơn tổng chi phí an
            táng trong dài hạn, và giảm nhu cầu đất mộ. Hỏa táng phù hợp với gia đình mong muốn tiết
            kiệm không gian hoặc theo quan niệm tôn giáo cho phép.
          </p>

          <h3>An táng (Burial)</h3>
          <p>
            An táng là phương án truyền thống, phù hợp với nhiều tín ngưỡng và phong tục cần mộ
            phần. Ưu điểm là giữ được phần mộ là nơi viếng thăm, lưu giữ ký ức; nhược điểm là tốn
            đất (chi phí mộ, trông nom) và có thể phát sinh chi phí dài hạn.
          </p>

          <p>
            Khi cân nhắc, hỏi nhà cung cấp về: chi phí thực tế từng bước, quy trình thực hiện, giấy
            tờ môi trường (nếu hỏa táng), và các tùy chọn như rải tro, gửi tro lưu giữ hay đặt tro
            tại nhà thờ/địa điểm tâm linh.
          </p>

          <Image
            src={image2}
            alt="So sánh hỏa táng và an táng"
            className="my-6 rounded overflow-hidden h-64"
          />
        </section>

        {/* TIEU CHI CHON NHA CUNG CAP */}
        <section id="tieu-chi-chon-nha-cung-cap" className="mt-8">
          <h2>Tiêu chí chọn nhà cung cấp dịch vụ tang lễ trọn gói uy tín</h2>

          <p>Dưới đây là những tiêu chí quan trọng bạn nên dùng để đánh giá nhà cung cấp:</p>

          <h3>1. Giấy phép & pháp lý</h3>
          <p>
            Kiểm tra giấy phép kinh doanh, giấy phép hoạt động trong lĩnh vực dịch vụ tang lễ (nếu
            có quy định địa phương), các chứng nhận liên quan. Nhà cung cấp uy tín sẵn sàng cung cấp
            bản sao để bạn đối chiếu.
          </p>

          <h3>2. Minh bạch chi phí</h3>
          <p>
            Yêu cầu báo giá chi tiết, tách rõ phí cơ bản và phí phát sinh. Tránh các hợp đồng mơ hồ
            — mọi khoản phát sinh cần được liệt kê hoặc có cơ chế thỏa thuận trước khi thực hiện.
          </p>

          <h3>3. Quy trình & tiêu chuẩn xử lý thi thể</h3>
          <p>
            Hỏi rõ quy trình tiếp nhận, bảo quản và xử lý thi thể (đặc biệt quan trọng nếu có di
            chuyển liên tỉnh), phương pháp vệ sinh, khử trùng, và nhân sự thực hiện có đào tạo y tế
            hay không.
          </p>

          <h3>4. Nhân sự & nhân phẩm</h3>
          <p>
            Nhân viên tổ chức tang lễ cần chuyên nghiệp, lịch sự và tôn trọng gia đình. Tránh nhà
            cung cấp có phản hồi tiêu cực về thái độ từ khách hàng trước.
          </p>

          <h3>5. Tham khảo đánh giá & phản hồi</h3>
          <p>
            Tìm ý kiến từ cộng đồng, nhóm mạng xã hội, review Google, hoặc hỏi trực tiếp những gia
            đình đã dùng dịch vụ. Khách hàng cũ thường chia sẻ kinh nghiệm thực tế về thời gian, chi
            phí và thái độ phục vụ.
          </p>

          <h3>6. Dịch vụ bổ sung</h3>
          <p>
            Kiểm tra nhà cung cấp có hỗ trợ: tư vấn phong tục, hỗ trợ tôn giáo, dịch vụ chụp ảnh,
            live stream tang lễ (nếu cần), hỗ trợ giấy tờ, và chính sách thu dọn sau lễ.
          </p>

          <h3>7. Bảo hiểm & trách nhiệm</h3>
          <p>
            Một dịch vụ chuyên nghiệp sẽ có chính sách bảo hiểm hoặc cam kết trách nhiệm khi có sự
            cố (hư hỏng tài sản, sai sót trong thủ tục), và có quy định bồi hoàn rõ ràng.
          </p>

          <Image
            src={image3}
            alt="Kiểm tra giấy phép và hợp đồng dịch vụ tang lễ"
            className="my-6 rounded overflow-hidden h-64"
          />
        </section>

        {/* DANH SACH CAU HOI */}
        <section id="danh-sach-cau-hoi" className="mt-8">
          <h2>Danh sách câu hỏi bắt buộc khi khảo sát nhà cung cấp</h2>

          <p>
            Khi gọi/đi gặp nhà cung cấp, mang theo danh sách câu hỏi sau — ghi chú lại câu trả lời
            để so sánh:
          </p>

          <ol className="list-decimal ml-6 space-y-2">
            <li>
              Quy trình nhận thi hài và bảo quản trước lễ? (nhiệt độ, thời hạn, giấy tờ kèm theo)
            </li>
            <li>Nhà cung cấp có giấy phép, bảo hiểm và nhân sự chuyên nghiệp không?</li>
            <li>Các dịch vụ trong gói trọn gói gồm những gì? (chi tiết vật phẩm & nhân lực)</li>
            <li>Phí dịch vụ là cố định hay có phụ phí? Các khoản phụ phí thường gặp là gì?</li>
            <li>Hợp đồng có điều khoản hủy/hoãn không? Phí phạt ra sao?</li>
            <li>Nhà cung cấp có hỗ trợ thủ tục pháp lý với bệnh viện/UBND không?</li>
            <li>
              Thiết bị, xe tang và đội ngũ có đáp ứng yêu cầu tôn giáo/phong tục địa phương không?
            </li>
            <li>Chính sách bảo mật & tôn trọng gia đình trong quá trình tổ chức?</li>
            <li>Có thể cung cấp tham khảo khách hàng hoặc đánh giá thực tế không?</li>
            <li>
              Quy trình xử lý tro cốt (nếu hỏa táng): lưu giữ, rải, gửi tro, hay giao tro cho gia
              đình?
            </li>
          </ol>
        </section>

        {/* HOP DONG */}
        <section id="hop-dong-chi-phi" className="mt-8">
          <h2>Hợp đồng, chi phí và những điều cần lưu ý</h2>

          <p>Hợp đồng phải chi tiết và ràng buộc rõ trách nhiệm hai bên. Một số điểm quan trọng:</p>

          <h3>Chi tiết vật phẩm & nhân sự</h3>
          <p>
            Hợp đồng cần liệt kê các vật phẩm (quan, linh đài, vòng hoa, bảng tên, nến, trụ đèn...),
            số lượng, chất liệu và chất lượng. Nhân sự cần ghi rõ số lượng nhân lực, nhiệm vụ và giờ
            làm việc.
          </p>

          <h3>Thanh toán & điều kiện</h3>
          <p>
            Ghi rõ cách thanh toán, tiến độ (ví dụ đặt cọc, thanh toán khi hoàn thành), điều kiện
            thay đổi gói, và chính sách hoàn tiền khi hủy.
          </p>

          <h3>Phí phát sinh</h3>
          <p>
            Thông thường phí phát sinh gồm: phí đi lại liên tỉnh, phí xử lý môi trường, phí phát
            sinh do yêu cầu thêm vật phẩm, hoặc phí làm ngoài giờ. Yêu cầu liệt kê các mục có thể
            phát sinh và mức phí tham khảo.
          </p>

          <h3>Ràng buộc pháp lý & cam kết</h3>
          <p>
            Đảm bảo nhà cung cấp chịu trách nhiệm nếu có sai sót do họ gây ra (ví dụ giao nhầm đồ,
            xử lý không đúng quy trình). Lưu giữ biên bản nghiệm thu khi hoàn thành dịch vụ để làm
            cơ sở nếu phát sinh tranh chấp.
          </p>
        </section>

        {/* THUC TE TO CHUC */}
        <section id="thuc-te-to-chuc" className="mt-8">
          <h2>Thực tế tổ chức & checklist 48 giờ / 24 giờ / 6 giờ trước lễ</h2>

          <p>Dưới đây là checklist thực tế để đảm bảo buổi tang lễ diễn ra suôn sẻ.</p>

          <h3>48 giờ trước lễ</h3>
          <ul>
            <li>Xác nhận danh sách khách mời và thông báo thời gian địa điểm.</li>
            <li>Xác nhận gói dịch vụ, vật phẩm, hoa và bảng tên với nhà cung cấp.</li>
            <li>Kiểm tra thủ tục pháp lý (giấy xác nhận tử vong, giấy chuyển thi hài nếu cần).</li>
          </ul>

          <h3>24 giờ trước lễ</h3>
          <ul>
            <li>Kiểm tra vị trí đặt quan, linh đài, khung ảnh và bố trí ghế cho khách.</li>
            <li>Xác nhận đội ngũ thực hiện (MC, thầy cúng/nhà sư/linh mục nếu có).</li>
            <li>
              Chuẩn bị giấy tờ, tang lễ, đồ dùng cá nhân kèm theo quan tài (nếu có phong tục).
            </li>
          </ul>

          <h3>6 giờ trước lễ</h3>
          <ul>
            <li>Kiểm tra âm thanh, ánh sáng, micro, và sự chuẩn bị của đội ngũ đón tiếp.</li>
            <li>Xác nhận thời gian kéo quan và lộ trình vận chuyển (nếu có đi đưa).</li>
            <li>Bảo đảm có người giám sát nến, thiết bị điện để tránh cháy nổ.</li>
          </ul>

          <Image
            src={image4}
            alt="Checklist chuẩn bị tang lễ trước giờ diễn ra"
            className="my-6 rounded overflow-hidden h-64"
          />
        </section>

        {/* PHAP LY & PHONG TUC */}
        <section id="phap-ly-phong-tuc" className="mt-8">
          <h2>Thủ tục pháp lý & phong tục vùng miền</h2>

          <p>
            Mỗi tỉnh/thành có thể có quy định về thủ tục giấy tờ và nhà cung cấp dịch vụ tang lễ.
            Một số lưu ý:
          </p>

          <ul>
            <li>
              Luôn giữ bản chính giấy xác nhận tử vong và các giấy tờ liên quan để làm thủ tục khai
              tử.
            </li>
            <li>
              Hỏi nhà cung cấp về kinh nghiệm làm thủ tục với bệnh viện, công an, UBND địa phương.
            </li>
            <li>
              Tôn trọng phong tục tôn giáo: một số nghi lễ cần thời gian, vật phẩm hoặc nhân sự đặc
              thù.
            </li>
          </ul>
        </section>

        {/* BAO VE MOI TRUONG */}
        <section id="bao-ve-moi-truong" className="mt-8">
          <h2>An toàn & bảo vệ môi trường</h2>

          <p>
            Trong lựa chọn hỏa táng, quan tâm tới nhà máy hỏa táng tuân thủ tiêu chuẩn khí thải và
            xử lý tro cốt. Với an táng, cân nhắc vật liệu quan tài (vật liệu thân thiện môi trường
            nếu muốn giảm tác động).
          </p>

          <p>
            Những hành động nhỏ như dùng vật liệu không chứa nhựa một lần, thu gom rác sau lễ và xử
            lý vàng mã ở khu vực an toàn sẽ giúp tang lễ thân thiện hơn với môi trường.
          </p>
        </section>

        {/* KINH NGHIEM THUC TE */}
        <section id="kinh-nghiem-thuc-te" className="mt-8">
          <h2>Kinh nghiệm thực tế & lời khuyên từ gia đình đã tổ chức</h2>

          <p>
            Dưới đây là tổng hợp kinh nghiệm thực tế từ các gia đình đã tổ chức tang lễ trọn gói:
          </p>

          <ul>
            <li>Luôn giữ 2–3 nhà cung cấp làm phương án dự phòng nếu lịch quá dày.</li>
            <li>Yêu cầu hợp đồng chi tiết về chi phí và các điều khoản hủy/đổi.</li>
            <li>
              Tham khảo ý kiến người lớn tuổi trong gia đình về phong tục và tôn giáo để tránh sai
              sót.
            </li>
            <li>
              Ưu tiên chọn dịch vụ có kinh nghiệm tổ chức tang lễ cùng tôn giáo (Phật giáo / Công
              giáo / Thần đạo / Dân gian...)
            </li>
            <li>Ghi lại mọi trao đổi (tin nhắn/email) để làm bằng chứng khi cần.</li>
          </ul>

          <Image
            src={image5}
            alt="Gia đình tham khảo dịch vụ tang lễ"
            className="my-6 rounded overflow-hidden h-64"
          />
        </section>

        {/* CTA natural links to packages */}
        <section id="chuyen-doi" className="mt-8">
          <h2>Tham khảo gói dịch vụ</h2>

          <p>Nếu bạn cần tham khảo gói dịch vụ có sẵn:</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="https://sinhphuctho.com/cac-goi-hoa-tang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 bg-gray-800 text-white font-semibold hover:opacity-95"
            >
              Xem Gói Hỏa Táng
            </a>

            <a
              href="https://sinhphuctho.com/cac-goi-an-tang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 border border-gray-800 text-gray-800 font-semibold hover:bg-gray-50"
            >
              Xem Gói An Táng
            </a>

            <a
              href="https://sinhphuctho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700"
            >
              Xem dịch vụ trọn gói tại Sinh Phúc Thọ
            </a>
          </div>
        </section>

        {/* FAQs visible */}
        <section id="faqs" className="mt-10">
          <h2>FAQ — Những câu hỏi thường gặp</h2>

          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold">1. Dịch vụ trọn gói có bao gồm thủ tục khai tử?</h3>
              <p>
                Thông thường có — nhiều nhà cung cấp hỗ trợ thủ tục khai tử, giấy xác nhận tử vong
                và liên hệ với bệnh viện/UBND. Tuy nhiên, bạn nên xác nhận rõ trong hợp đồng để
                tránh hiểu nhầm.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                2. Nếu tang lễ cần di chuyển liên tỉnh, chi phí sẽ thế nào?
              </h3>
              <p>
                Di chuyển liên tỉnh thường phát sinh phí vận chuyển và chi phí liên quan (hộp đựng,
                giấy tờ, phí bến bãi). Nhà cung cấp có trách nhiệm báo trước các khoản này trong báo
                giá chi tiết.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Có thể thay đổi gói sau khi đã đặt không?</h3>
              <p>
                Thay đổi gói có thể thực hiện, nhưng cần kiểm tra điều khoản hợp đồng về phí bổ sung
                hoặc thời hạn thay đổi.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">4. Nhà cung cấp có hỗ trợ livestream tang lễ không?</h3>
              <p>
                Một số nhà cung cấp có hỗ trợ livestream, quay video, chụp ảnh tang lễ. Nếu cần, yêu
                cầu bao gồm trong hợp đồng.
              </p>
            </div>
          </div>
        </section>

        {/* KET LUAN */}
        <section id="ket-luan" className="mt-10 mb-12">
          <h2>Kết luận</h2>

          <p>
            Chọn dịch vụ tang lễ trọn gói uy tín là quyết định quan trọng — nó ảnh hưởng trực tiếp
            đến cách gia đình tiễn biệt người thân. Hãy ưu tiên nhà cung cấp minh bạch về pháp lý,
            chi phí, có quy trình rõ ràng và nhân sự tôn trọng phong tục. Dùng checklist và bộ câu
            hỏi trong bài để so sánh và quyết định nhanh chóng khi thời gian gấp rút.
          </p>

          <p className="mt-4">
            Nếu bạn cần tư vấn, <strong>tư vấn mẫu tổ chức</strong> hoặc{' '}
            <strong>đặt dịch vụ trọn gói</strong>, Sinh Phúc Thọ sẵn sàng hỗ trợ từ A → Z:{' '}
            <a className="text-yellow-700 underline" href="https://sinhphuctho.com">
              https://sinhphuctho.com
            </a>
            .
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://sinhphuctho.com/cac-goi-hoa-tang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 bg-gray-800 text-white font-semibold hover:opacity-95"
            >
              Xem Gói Hỏa Táng
            </a>
            <a
              href="https://sinhphuctho.com/cac-goi-an-tang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 border border-gray-800 text-gray-800 font-semibold hover:bg-gray-50"
            >
              Xem Gói An Táng
            </a>
            <a
              href="https://sinhphuctho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md px-4 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700"
            >
              Liên hệ Sinh Phúc Thọ
            </a>
          </div>
        </section>
      </article>
    </CamNangLayout>
  );
}
