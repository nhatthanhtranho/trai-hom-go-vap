import Image from '@/src/components/CustomImage';
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import { GetStaticProps } from 'next';

const slug = 'dat-ban-tho-vong-tang-le';
const title = 'Phong Tục Đặt Bàn Thờ Vong Trong Tang Lễ – Điều Nên và Không Nên';
const description =
  'Tìm hiểu phong tục đặt bàn thờ vong trong tang lễ: ý nghĩa, cách thực hiện, điều nên và không nên theo quan niệm dân gian và Phật giáo. Bài viết chuẩn SEO chi tiết, đầy đủ thông tin, giúp gia đình tổ chức tang lễ trang nghiêm và đúng phong tục.';
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
      question: 'Bàn thờ vong là gì?',
      answer:
        'Bàn thờ vong là nơi thờ tạm người đã khuất trong thời gian diễn ra tang lễ, thường đặt tại nhà tang chủ hoặc nhà tang lễ để con cháu và khách viếng thắp nhang tưởng nhớ.',
    },
    {
      question: 'Đặt bàn thờ vong trong bao lâu?',
      answer:
        'Thông thường bàn thờ vong được duy trì từ khi phát tang đến khi hoàn tất các nghi thức chôn cất hoặc hỏa táng. Sau đó di ảnh và bát hương sẽ được chuyển về bàn thờ gia tiên.',
    },
    {
      question: 'Có những lưu ý gì khi lập bàn thờ vong?',
      answer:
        'Cần đặt bàn thờ ở nơi trang trọng, sạch sẽ, tránh gần nhà vệ sinh, phòng ngủ hoặc nơi ô uế. Không tự ý di chuyển bàn thờ khi chưa hoàn tất tang lễ.',
    },
    {
      question: 'Bàn thờ vong gồm những gì?',
      answer:
        'Bàn thờ vong thường có di ảnh, bát hương, nến, hoa tươi, nước sạch, cơm cúng và các lễ vật khác tùy theo vùng miền và tôn giáo.',
    },
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Trong văn hóa tang lễ Việt Nam, <strong>phong tục đặt bàn thờ vong</strong> là một trong
        những nghi thức không thể thiếu. Đây là nơi linh hồn người đã khuất được thờ tạm trong những
        ngày tang, nơi con cháu và người thân có thể bày tỏ lòng thương tiếc, tưởng nhớ và cầu
        nguyện cho hành trình siêu thoát được bình an.
      </p>
      <p>
        Bàn thờ vong không chỉ mang giá trị tâm linh mà còn thể hiện nét đẹp đạo hiếu – một truyền
        thống tốt đẹp của dân tộc Việt. Việc sắp xếp, bài trí và duy trì bàn thờ vong đúng cách thể
        hiện sự chu đáo, kính trọng và lòng thành tâm của gia đình đối với người đã khuất.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Phong tục đặt bàn thờ vong trong tang lễ"
          priority
        />
      </figure>

      <h2>1. Ý nghĩa của việc đặt bàn thờ vong trong tang lễ</h2>
      <p>
        Bàn thờ vong được xem là nơi linh hồn người mất tạm trú trước khi sang thế giới bên kia.
        Theo quan niệm dân gian, sau khi lìa đời, linh hồn người chết chưa rời khỏi trần gian ngay
        mà vẫn quanh quẩn bên gia đình trong vài ngày đầu. Vì vậy, việc lập bàn thờ vong là cách để
        gia đình thể hiện sự quan tâm, đồng hành cùng người mất trên chặng đường cuối cùng.
      </p>
      <p>
        Ngoài ý nghĩa tâm linh, bàn thờ vong còn là nơi kết nối cảm xúc, giúp những người ở lại có
        không gian để chia sẻ nỗi đau, tưởng nhớ người thân. Đây cũng là nơi khách đến viếng thắp
        nén nhang chia buồn, tạo nên không khí trang nghiêm và đầy tình người trong những ngày tang
        lễ.
      </p>
      <p>
        Trong Phật giáo, bàn thờ vong còn mang ý nghĩa trợ duyên cho linh hồn người mất sớm được
        siêu sinh, nhờ vào năng lượng của lời cầu nguyện, kinh kệ và tâm thành của người thân. Do
        đó, nghi thức này mang giá trị nhân văn sâu sắc và là biểu tượng của lòng hiếu kính.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Phong tục đặt bàn thờ vong trong tang lễ"
          priority
        />
      </figure>
      <h2>2. Cách lập bàn thờ vong đúng phong tục</h2>
      <p>
        Việc lập bàn thờ vong cần tuân thủ các quy tắc nghi lễ truyền thống. Gia đình nên chọn vị
        trí trang trọng, thường là gian giữa hoặc nơi dễ quan sát khi khách đến viếng. Bàn thờ nên
        quay ra cửa chính hoặc hướng hợp phong thủy với tuổi của người mất, tránh đặt đối diện cửa
        nhà vệ sinh, phòng ngủ hay nơi nhiều người qua lại.
      </p>
      <p>Trên bàn thờ vong, các vật phẩm thường được sắp xếp gồm:</p>
      <ul>
        <li>Di ảnh người mất được đặt ở vị trí trung tâm, cao nhất.</li>
        <li>Bát nhang đặt ngay phía trước di ảnh, dùng để thắp hương hàng ngày.</li>
        <li>Hai cây nến hoặc đèn dầu đặt hai bên bát nhang tượng trưng cho ánh sáng soi đường.</li>
        <li>
          Bình hoa, chén nước, mâm cơm cúng và trái cây tươi được sắp gọn gàng, thể hiện sự thành
          tâm.
        </li>
      </ul>
      <p>
        Tùy từng vùng miền, bàn thờ có thể được phủ vải trắng (phía Bắc) hoặc vải vàng (phía Nam) và
        trang trí thêm khăn tang, linh vị hoặc câu đối tưởng niệm. Một số gia đình theo đạo Phật còn
        đặt thêm tượng Phật A Di Đà hoặc Quan Âm để cầu nguyện cho linh hồn người mất được sớm siêu
        thoát.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Phong tục đặt bàn thờ vong trong tang lễ"
          priority
        />
      </figure>

      <h2>3. Điều nên làm khi đặt bàn thờ vong</h2>
      <p>
        Để giữ cho không gian tang lễ trang nghiêm, thanh tịnh, gia chủ cần lưu ý thực hiện một số
        việc sau:
      </p>
      <ul>
        <li>Giữ bàn thờ sạch sẽ, thay nước và thắp hương mỗi ngày.</li>
        <li>Chọn hoa tươi, tránh hoa héo hoặc có mùi mạnh.</li>
        <li>Ăn mặc chỉnh tề, thái độ nghiêm trang khi thắp nhang trước bàn thờ.</li>
        <li>
          Thường xuyên khấn nguyện, đọc kinh cầu siêu hoặc mời sư thầy tụng kinh để tăng phước lành.
        </li>
      </ul>
      <p>
        Ngoài ra, gia đình nên mời người có kinh nghiệm hoặc thầy cúng uy tín hướng dẫn cách lập và
        chăm sóc bàn thờ vong đúng nghi thức để tránh sai sót trong quá trình tổ chức tang lễ.
      </p>

      <h2>4. Điều không nên làm khi đặt bàn thờ vong</h2>
      <p>
        Cũng như các nghi thức thờ cúng khác, việc đặt bàn thờ vong cần tuyệt đối tránh những điều
        kiêng kỵ sau:
      </p>
      <ul>
        <li>Không đặt bàn thờ ở vị trí thấp hơn đầu người hoặc nơi ẩm thấp, tối tăm.</li>
        <li>Không để trẻ nhỏ hoặc thú cưng đến gần bàn thờ.</li>
        <li>Không cười đùa, nói chuyện ồn ào, ăn uống gần khu vực thờ cúng.</li>
        <li>Không tự ý di chuyển bàn thờ khi chưa kết thúc tang lễ.</li>
        <li>Không để đồ linh tinh, giấy rác hoặc vật dụng cá nhân trên bàn thờ.</li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
          alt="Phong tục đặt bàn thờ vong trong tang lễ"
          priority
        />
      </figure>

      <h2>5. Phong tục đặt bàn thờ vong theo từng vùng miền</h2>
      <p>
        Mặc dù cùng mang ý nghĩa tưởng nhớ người đã khuất, nhưng cách bài trí bàn thờ vong ở từng
        vùng miền lại có những nét đặc trưng riêng. Ở miền Bắc, bàn thờ thường được đặt trong gian
        giữa, dùng vải trắng làm nền và trang trí thêm câu đối điếu tang. Trong khi đó, ở miền Trung
        và miền Nam, bàn thờ thường đơn giản hơn, chú trọng vào sự thanh tịnh, nhẹ nhàng và ấm cúng.
      </p>
      <p>
        Ngoài ra, thời gian duy trì bàn thờ vong cũng có sự khác biệt. Một số địa phương giữ bàn thờ
        đến hết lễ chung thất (49 ngày), trong khi nơi khác chỉ đến sau lễ an táng. Điều quan trọng
        là giữ lòng thành và sự kính trọng, hơn là hình thức cứng nhắc.
      </p>

      <h2>6. Vai trò của dịch vụ mai táng trọn gói trong việc lập bàn thờ vong</h2>
      <p>
        Hiện nay, nhiều gia đình lựa chọn <strong>dịch vụ mai táng trọn gói</strong> để được hỗ trợ
        toàn diện trong quá trình tang lễ. Các đơn vị chuyên nghiệp như{' '}
        <a
          href="https://sinhphuctho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Trại Hòm Sinh Phúc Thọ
        </a>{' '}
        sẽ giúp gia đình chuẩn bị bàn thờ vong đầy đủ, đúng phong tục, tiết kiệm thời gian và đảm
        bảo tính trang nghiêm.
      </p>
      <p>
        Việc sử dụng dịch vụ uy tín không chỉ giúp giảm áp lực tinh thần cho tang chủ mà còn đảm bảo
        mọi nghi lễ được tiến hành theo đúng chuẩn mực. Đây cũng là cách để thể hiện sự trân trọng
        và chu toàn dành cho người đã khuất.
      </p>

      <h2>7. Những sai lầm thường gặp khi đặt bàn thờ vong</h2>
      <p>
        Nhiều gia đình vì thiếu hiểu biết hoặc quá đau buồn mà mắc phải một số sai sót khi lập bàn
        thờ vong. Các lỗi phổ biến bao gồm đặt bàn thờ ở nơi quá thấp, thiếu ánh sáng, sử dụng đồ
        vật không phù hợp hoặc để bàn thờ bám bụi, thiếu nhang khói. Những điều này làm giảm sự
        trang nghiêm và có thể bị xem là thiếu tôn kính.
      </p>
      <p>
        Ngoài ra, cũng không nên nhờ những người không có kinh nghiệm trong tang lễ giúp lập bàn
        thờ, vì dễ dẫn đến sai sót về hướng đặt, cách bài trí hoặc thứ tự lễ vật. Gia đình nên tìm
        hiểu kỹ hoặc nhờ đến sự tư vấn của chuyên gia tang lễ hoặc sư thầy có hiểu biết về nghi lễ
        Phật giáo.
      </p>

      <h2>8. Bàn thờ vong theo quan niệm Phật giáo</h2>
      <p>
        Theo đạo Phật, bàn thờ vong không chỉ là nơi tưởng niệm mà còn là phương tiện giúp người mất
        sớm được giải thoát khỏi cõi u mê. Trong thời gian tang lễ, việc tụng kinh, niệm Phật tại
        bàn thờ vong giúp tạo năng lượng an lành, hỗ trợ linh hồn siêu sinh về cảnh giới tốt đẹp.
        Gia đình có thể mời chư tăng đến tụng kinh, cầu siêu và hồi hướng công đức cho người đã
        khuất.
      </p>
      <p>
        Việc duy trì bàn thờ vong trong bảy tuần thất (49 ngày) cũng dựa trên giáo lý Phật giáo, cho
        rằng sau 49 ngày linh hồn sẽ tái sinh tùy theo nghiệp lực. Do đó, việc cúng thất, cầu siêu
        trong thời gian này rất quan trọng để giúp linh hồn an vui, con cháu được bình an.
      </p>

      <h2>Kết luận</h2>
      <p>
        <strong>Phong tục đặt bàn thờ vong trong tang lễ</strong> là một truyền thống lâu đời của
        người Việt, chứa đựng nhiều giá trị nhân văn và tâm linh sâu sắc. Thực hiện đúng nghi lễ
        không chỉ thể hiện lòng hiếu kính mà còn giúp gia đình gìn giữ nếp sống văn hóa, duy trì kết
        nối giữa các thế hệ. Dù theo tôn giáo nào, điều cốt lõi vẫn là sự thành tâm, kính trọng và
        lòng yêu thương đối với người đã khuất.
      </p>

      {/* ✅ CTA */}
      <h2>Liên hệ dịch vụ hỗ trợ tang lễ chuyên nghiệp</h2>
      <p>
        Nếu bạn cần được tư vấn về <strong>tổ chức tang lễ</strong> hoặc{' '}
        <strong>dịch vụ mai táng trọn gói</strong>, hãy liên hệ với{' '}
        <a
          href="https://sinhphuctho.com/lien-he.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Trại Hòm Sinh Phúc Thọ
        </a>{' '}
        – đơn vị uy tín hàng đầu trong lĩnh vực tổ chức tang lễ, với đội ngũ chuyên viên tận tâm, hỗ
        trợ 24/7 và đảm bảo mọi nghi lễ được tiến hành trang nghiêm, đúng phong tục.
      </p>

      {/* ✅ FAQ */}
      <h2>FAQ – Câu hỏi thường gặp về bàn thờ vong</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md p-3">
            <p className="font-medium">{faq.question}</p>
            <p className="mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* ✅ FAQ Schema JSON-LD */}
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
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />
    </CamNangLayout>
  );
}
