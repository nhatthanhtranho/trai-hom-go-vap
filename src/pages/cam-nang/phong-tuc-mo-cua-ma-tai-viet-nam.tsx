// app/cam-nang/phong-tuc-mo-cua-ma/page.tsx

import Image from '@/src/components/CustomImage';
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import { GetStaticProps } from 'next';

const slug = 'phong-tuc-mo-cua-ma-tai-viet-nam';
const IMAGE_PATH = '/assets/images/cam-nang/' + slug;
const title = 'Phong Tục Mở Cửa Mả – Nghi Lễ và Ý Nghĩa Trong Văn Hóa Việt';
const description =
  'Tìm hiểu phong tục mở cửa mả trong văn hóa Việt: nguồn gốc, ý nghĩa, cách cúng mở cửa mả, thời điểm phù hợp, các lưu ý và giá trị tâm linh sâu sắc. Bài viết chuẩn SEO, đầy đủ và chi tiết.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Sinh Phúc Thọ',
    images: [
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: 'article',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.jpg`],
  },
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata, // 👈 truyền thủ công
    },
  };
};

export default function Article() {
  const faqs = [
    {
      question: 'Phong tục mở cửa mả là gì?',
      answer:
        'Phong tục mở cửa mả là nghi lễ truyền thống trong văn hóa Việt Nam, nhằm thăm viếng, tu sửa mộ phần và cầu bình an cho người đã khuất cũng như cho con cháu trong gia đình.',
    },
    {
      question: 'Khi nào nên thực hiện lễ mở cửa mả?',
      answer:
        'Nghi lễ thường được thực hiện vào các dịp như Tết Thanh Minh, ngày giỗ lớn, hoặc khi gia đình muốn tảo mộ, cầu an, chọn ngày hoàng đạo hợp tuổi người mất.',
    },
    {
      question: 'Lễ vật cần chuẩn bị khi mở cửa mả gồm những gì?',
      answer:
        'Thông thường gồm hương, hoa, rượu nếp, giấy cúng, đèn nến, trầu cau, bánh trái và một mâm cơm cúng giản dị thể hiện lòng thành kính.',
    },
    {
      question: 'Ý nghĩa tâm linh của nghi lễ mở cửa mả là gì?',
      answer:
        'Mở cửa mả thể hiện lòng hiếu kính, giúp duy trì kết nối giữa người sống và người đã khuất, đồng thời cầu bình an, giải trừ vận hạn, mang lại phúc lộc cho con cháu.',
    },
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>

      <p>
        Trong kho tàng phong tục Việt Nam, <strong>nghi lễ mở cửa mả</strong> là một nghi thức quan
        trọng mang đậm tính nhân văn và tâm linh. Đây là dịp để con cháu tưởng nhớ người đã khuất,
        đồng thời chăm sóc, tu sửa mộ phần để thể hiện lòng hiếu kính và sự biết ơn đối với tổ tiên.
      </p>
      <p>
        Mỗi vùng miền có cách thực hiện nghi lễ khác nhau, nhưng tựu chung đều hướng đến sự thanh
        tịnh, trang nghiêm và lòng thành. Hãy cùng Sinh Phúc Thọ tìm hiểu chi tiết về nguồn gốc, ý
        nghĩa, cách cúng và những điều cần lưu ý khi thực hiện nghi thức mở cửa mả.
      </p>

      <figure>
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-1.jpg`}
          alt="Phong tục mở cửa mả trong văn hóa Việt"
          priority
        />
      </figure>

      <h2>1. Nguồn gốc của phong tục mở cửa mả</h2>
      <p>
        Phong tục mở cửa mả đã tồn tại từ lâu đời trong đời sống tâm linh người Việt, bắt nguồn từ
        tín ngưỡng thờ cúng tổ tiên và quan niệm “nghĩa tử là nghĩa tận”. Theo quan niệm dân gian,
        phần mộ là nơi an nghỉ của linh hồn, đồng thời là sợi dây kết nối giữa người sống và người
        đã khuất.
      </p>
      <p>
        Sau khi người thân qua đời, con cháu thường làm lễ mở cửa mả vào những dịp đặc biệt như Tết
        Thanh Minh, ngày giỗ đầu, hoặc sau khi an táng để “mở đường” cho vong linh được siêu thoát,
        an yên nơi chín suối. Việc thực hiện nghi lễ này không chỉ mang ý nghĩa tâm linh mà còn là
        cách bày tỏ lòng biết ơn, duy trì sợi dây gắn kết gia tộc.
      </p>

      <h2>2. Ý nghĩa của nghi lễ mở cửa mả trong văn hóa Việt</h2>
      <p>
        Lễ mở cửa mả không chỉ là hành động tưởng nhớ, mà còn ẩn chứa nhiều giá trị tinh thần sâu
        sắc. Đây là dịp để gia đình tụ họp, cùng nhau chăm sóc mộ phần và hướng về cội nguồn.
      </p>
      <p>
        Trên phương diện tâm linh, việc “mở cửa” mộ phần được cho là giúp khai thông sinh khí, hóa
        giải tà khí, đem lại may mắn, sức khỏe và tài lộc cho con cháu. Bên cạnh đó, nghi lễ còn
        giúp nhắc nhở mỗi người về đạo hiếu, về sự gắn bó giữa các thế hệ.
      </p>
      <ul>
        <li>
          <strong>Biểu hiện của lòng hiếu kính:</strong> Con cháu thể hiện sự quan tâm và kính trọng
          đối với người đã khuất thông qua việc thăm viếng, dọn dẹp, thắp hương.
        </li>
        <li>
          <strong>Bảo tồn giá trị truyền thống:</strong> Duy trì tập tục đẹp trong văn hóa Việt,
          giáo dục thế hệ trẻ biết hướng về cội nguồn.
        </li>
        <li>
          <strong>Cầu phúc – giải hạn:</strong> Theo dân gian, việc mở cửa mả đúng nghi thức giúp
          đem lại bình an và hóa giải điều không may.
        </li>
      </ul>
      <figure>
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-2.jpg`}
          alt="Phong tục mở cửa mả trong văn hóa Việt"
          priority
        />
      </figure>

      <h2>3. Thời điểm thích hợp để mở cửa mả</h2>
      <p>
        Thời gian tiến hành lễ mở cửa mả thường tùy thuộc vào vùng miền, điều kiện gia đình và phong
        tục địa phương. Thông thường, nghi thức này được thực hiện vào buổi sáng sớm, khi khí trời
        trong lành, thuận lợi cho việc cúng bái.
      </p>
      <p>
        Gia chủ nên chọn ngày hoàng đạo, tránh các ngày xung khắc với tuổi của người đã khuất hoặc
        trưởng tộc. Ngoài ra, nhiều gia đình chọn dịp Tết Thanh Minh – thời điểm tiết trời ấm áp,
        cây cối sinh sôi, rất thích hợp cho việc tảo mộ, dọn dẹp và thực hiện nghi thức mở cửa mả.
      </p>

      <h2>4. Các bước tiến hành lễ mở cửa mả</h2>

      <h3>Bước 1: Chuẩn bị lễ vật và không gian</h3>
      <p>
        Trước khi bắt đầu, gia đình cần chuẩn bị đầy đủ lễ vật: hương, đèn, hoa quả, bánh kẹo, trầu
        cau, rượu nếp, giấy tiền vàng bạc và một mâm cơm cúng đơn giản. Bàn cúng được bày trước mộ,
        hướng ra ngoài, thể hiện sự cung kính. Mọi người cần ăn mặc chỉnh tề, nghiêm túc.
      </p>

      <h3>Bước 2: Thắp hương và đọc văn khấn mở cửa mả</h3>
      <p>
        Gia chủ hoặc người lớn tuổi trong nhà sẽ thắp hương, chắp tay khấn vái và đọc bài văn khấn
        mở cửa mả. Nội dung văn khấn thường cầu mong người đã khuất an nghỉ, phù hộ độ trì cho con
        cháu, đồng thời xin phép được “mở cửa” mộ để tu sửa, chăm sóc.
      </p>
      <p>
        Lời khấn cần thể hiện sự thành tâm, tránh đọc qua loa. Đây là thời khắc linh thiêng, thể
        hiện lòng kính trọng và gắn bó của người sống với người mất.
      </p>

      <h3>Bước 3: Mở cửa và tu sửa mộ phần</h3>
      <p>
        Sau khi khấn xong, gia đình tiến hành mở cửa mả, thường là gỡ nhẹ phần đất hoặc tấm bia bị
        che phủ, lau chùi sạch sẽ khu mộ. Nếu thấy mộ sụt lún, rêu bám hay cỏ mọc um tùm, cần dọn
        dẹp và tu sửa ngay.
      </p>
      <p>
        Trong quá trình này, tuyệt đối tránh làm xáo trộn phần đất bên dưới hoặc di dời vật linh,
        nhằm đảm bảo sự yên ổn cho linh hồn người đã khuất.
      </p>

      <h3>Bước 4: Bày lễ, thắp hương và tạ lễ</h3>
      <p>
        Sau khi hoàn tất việc dọn dẹp, gia đình bày lễ vật, thắp thêm hương, rượu và đọc lời tạ. Đây
        là lúc con cháu gửi gắm tình cảm, bày tỏ lòng hiếu thảo và mong muốn tổ tiên phù hộ độ trì.
      </p>
      <figure>
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-3.jpg`}
          alt="Phong tục mở cửa mả trong văn hóa Việt"
          priority
        />
      </figure>

      <h3>Bước 5: Đóng cửa mả và hoàn tất nghi lễ</h3>
      <p>
        Cuối cùng, gia chủ đóng cửa mả, dán bùa hoặc phủ vải đỏ lên mộ (nếu có tục lệ địa phương).
        Sau đó, mọi người chắp tay vái lạy ba lạy, kết thúc nghi thức trong không khí trang nghiêm.
      </p>

      <h2>5. Những lưu ý quan trọng khi thực hiện mở cửa mả</h2>
      <p>
        Dù mang ý nghĩa tốt đẹp, nhưng khi thực hiện nghi lễ mở cửa mả, gia đình cần chú ý một số
        nguyên tắc để đảm bảo sự trang nghiêm và đúng phong tục:
      </p>
      <ul>
        <li>Chọn ngày giờ hoàng đạo phù hợp, tránh ngày xung khắc hoặc tiết trời xấu.</li>
        <li>Không đùa giỡn, cười nói lớn tiếng tại khu vực mộ phần.</li>
        <li>Trang phục cần gọn gàng, lịch sự, thể hiện lòng thành kính.</li>
        <li>Không xáo trộn xương cốt, không tự ý sửa mộ nếu không có người am hiểu hướng dẫn.</li>
        <li>Nên mời người lớn tuổi, hoặc thầy cúng uy tín hướng dẫn nghi lễ.</li>
      </ul>

      <h2>6. Giá trị văn hóa và tâm linh của phong tục mở cửa mả</h2>
      <p>
        Lễ mở cửa mả không chỉ mang ý nghĩa cầu bình an mà còn phản ánh tinh thần hiếu nghĩa, đoàn
        kết gia đình và đạo lý “uống nước nhớ nguồn” của người Việt. Mỗi lần thực hiện nghi lễ là
        một dịp để con cháu cùng nhau tưởng nhớ, củng cố sợi dây liên kết giữa các thế hệ.
      </p>
      <p>
        Trong xã hội hiện đại, dù nhiều tập tục đã giản lược, nhưng giá trị tâm linh và văn hóa của
        nghi lễ mở cửa mả vẫn được gìn giữ. Đó là biểu tượng của lòng biết ơn, của niềm tin vào sự
        tiếp nối giữa dương thế và âm giới.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
          alt="Nghi lễ mở cửa mả tại Việt Nam"
          priority
        />
      </figure>

      <h2>7. Kết luận</h2>
      <p>
        <strong>Phong tục mở cửa mả</strong> là một trong những nghi lễ truyền thống giàu ý nghĩa
        nhất trong văn hóa tâm linh Việt Nam. Việc thực hiện đúng nghi thức không chỉ giúp duy trì
        truyền thống hiếu đạo mà còn mang lại sự an lành, may mắn cho gia đình.
      </p>
      <p>
        Mỗi hành động chăm sóc mộ phần đều là lời nhắn gửi yêu thương từ người sống đến người đã
        khuất – một giá trị nhân văn sâu sắc mà thế hệ sau cần gìn giữ và trân trọng.
      </p>

      {/* ✅ CTA */}
      <h2>Khám phá thêm dịch vụ và kiến thức phong tục Việt</h2>
      <p>
        Nếu bạn đang tìm kiếm dịch vụ tang lễ trọn gói, tư vấn phong tục, hoặc muốn hiểu rõ hơn về
        nghi thức cúng kính theo đúng truyền thống, hãy ghé thăm{' '}
        <a
          href="https://sinhphuctho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Sinh Phúc Thọ
        </a>
        . Chúng tôi đồng hành cùng bạn trong mọi nghi lễ – từ chuẩn bị tang lễ, an táng, hỏa táng
        đến chăm sóc mộ phần với sự tận tâm và trân trọng.
      </p>
      <p>
        Bạn cũng có thể xem thêm các bài viết hữu ích khác trong chuyên mục{' '}
        <a href="/cam-nang.html" className="text-blue-600 underline">
          Cẩm Nang Tang Lễ
        </a>{' '}
        để hiểu sâu hơn về các nghi thức, phong tục và giá trị tâm linh truyền thống.
      </p>

      {/* ✅ FAQ */}
      <figure>
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-5.jpg`}
          alt="Phong tục mở cửa mả trong văn hóa Việt"
          priority
        />
      </figure>
      <h2>FAQ – Các câu hỏi thường gặp về phong tục mở cửa mả</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md p-3">
            <p className="font-medium">{faq.question}</p>
            <p className="mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* ✅ Schema JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </CamNangLayout>
  );
}
