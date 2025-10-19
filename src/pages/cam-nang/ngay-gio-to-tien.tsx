// app/cam-nang/ngay-gio-to-tien/page.tsx
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import Image from 'next/image';
import { GetStaticProps } from 'next';

const slug = 'ngay-gio-to-tien';
const title = 'Ngày Giỗ Tổ Tiên – Nghi Lễ, Ý Nghĩa Và Cách Chuẩn Bị';
const IMAGE_PATH = `/assets/images/cam-nang/${slug}`;
const description =
  'Tìm hiểu ý nghĩa ngày giỗ tổ tiên trong văn hóa Việt Nam: nguồn gốc, nghi lễ cúng giỗ, cách chuẩn bị mâm cúng và giá trị đạo hiếu trong đời sống hiện đại. Bài viết chuẩn SEO, sâu sắc và đầy đủ thông tin.';
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
    type: 'article',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
      question: 'Ngày giỗ tổ tiên có ý nghĩa gì?',
      answer:
        'Ngày giỗ là dịp con cháu tưởng nhớ, tri ân công ơn sinh thành, dưỡng dục của tổ tiên và người đã khuất, thể hiện đạo lý “uống nước nhớ nguồn”.',
    },
    {
      question: 'Cúng giỗ tổ tiên cần chuẩn bị những gì?',
      answer:
        'Gia chủ chuẩn bị bàn thờ sạch sẽ, hương hoa, đèn nến, lễ vật, mâm cỗ và văn khấn phù hợp với phong tục địa phương.',
    },
    {
      question: 'Có cần cúng giỗ đúng ngày âm lịch không?',
      answer:
        'Thông thường, người Việt cúng giỗ theo ngày âm lịch – chính ngày mất của người đã khuất, gọi là “ngày kỵ”.',
    },
    {
      question: 'Giỗ đầu, giỗ hết và giỗ thường khác nhau thế nào?',
      answer:
        'Giỗ đầu là lễ giỗ năm đầu tiên sau khi mất, giỗ hết là năm thứ hai, còn giỗ thường là các năm sau đó, mang tính tưởng niệm nhẹ nhàng hơn.',
    },
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Trong đời sống tinh thần của người Việt, <strong>ngày giỗ tổ tiên</strong> là một nghi lễ
        thiêng liêng, thể hiện lòng hiếu kính và tưởng nhớ những người đã khuất. Không chỉ là dịp
        cúng bái, đây còn là ngày đoàn tụ gia đình, gắn kết các thế hệ trong cùng một cội nguồn. Từ
        xưa đến nay, giỗ tổ tiên vẫn là nét đẹp truyền thống bền vững trong văn hóa dân tộc Việt
        Nam.
      </p>

      <h2>1. Nguồn gốc của tục cúng giỗ tổ tiên</h2>
      <p>
        Tục cúng giỗ tổ tiên có nguồn gốc từ quan niệm “sống gửi, thác về” và đạo lý{' '}
        <em>“uống nước nhớ nguồn”</em> của người Á Đông. Người Việt tin rằng linh hồn người mất vẫn
        dõi theo con cháu, phù hộ cho gia đình. Vì thế, vào ngày giỗ – ngày người thân rời cõi trần
        – con cháu lại tụ họp để tưởng niệm, dâng hương bày tỏ lòng biết ơn.
      </p>
      <p>
        Từ thời phong kiến, việc cúng giỗ không chỉ mang tính cá nhân mà còn là nghi thức gắn với
        gia phong và dòng họ. Mỗi năm, giỗ tổ được tổ chức long trọng tại nhà thờ họ, vừa là dịp tri
        ân tổ tiên, vừa là dịp họp mặt, kết nối tình thân.
      </p>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/banner.webp`}
          alt="Nghi lễ ngày giỗ tổ tiên của người Việt"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>2. Ý nghĩa của ngày giỗ trong văn hóa Việt</h2>
      <p>
        Ngày giỗ tổ tiên không chỉ là dịp để tưởng nhớ người đã khuất, mà còn là lời nhắc nhở con
        cháu về đạo hiếu, về cội nguồn sinh dưỡng. Trong khói hương trầm mặc, mỗi người như được trở
        lại với gốc rễ của mình – nơi bắt đầu của sự sống và truyền thống.
      </p>
      <p>
        Ngoài giá trị tâm linh, ngày giỗ còn mang ý nghĩa xã hội sâu sắc: gắn kết tình thân, củng cố
        gia đình và dòng họ. Bữa cơm giỗ là biểu tượng của sự sum họp, là nơi thế hệ trẻ học cách
        biết ơn, hiếu kính và gìn giữ phong tục cha ông.
      </p>

      <h2>3. Phân loại các ngày giỗ trong phong tục Việt</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Giỗ đầu (Tiểu tường):</strong> Diễn ra sau một năm kể từ ngày mất. Đây là lễ giỗ
          trọng, con cháu thường tổ chức chu đáo, có mời họ hàng, làng xóm.
        </li>
        <li>
          <strong>Giỗ hết (Đại tường):</strong> Là lễ giỗ năm thứ hai, đánh dấu việc “hết tang”. Sau
          lễ này, gia đình có thể bỏ tang phục, sinh hoạt bình thường trở lại.
        </li>
        <li>
          <strong>Giỗ thường:</strong> Từ năm thứ ba trở đi, được tổ chức đơn giản hơn nhưng vẫn giữ
          tinh thần tưởng nhớ và tri ân.
        </li>
      </ul>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-1.webp`}
          alt="Mâm cúng giỗ tổ tiên truyền thống"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>4. Cách chuẩn bị lễ cúng giỗ tổ tiên</h2>
      <p>
        Trước ngày giỗ, gia chủ cần lau dọn bàn thờ sạch sẽ, thay nước, châm đèn, thay hoa tươi và
        chuẩn bị mâm cúng chu đáo. Tùy phong tục từng vùng mà mâm cỗ có thể khác nhau, nhưng thường
        gồm:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Hương, hoa, đèn, nến, trầu cau, rượu, trà.</li>
        <li>Mâm cỗ mặn: gà luộc, xôi, canh, thịt kho, nem, bánh chưng hoặc bánh tét.</li>
        <li>Mâm cỗ chay (nếu theo Phật): cơm trắng, đậu phụ, rau củ, canh nấm, chè trôi nước.</li>
        <li>Giấy tiền, vàng mã tượng trưng (tùy phong tục gia đình).</li>
      </ul>
      <p>
        Khi cúng, gia chủ khấn vái trang nghiêm, mời tổ tiên về hưởng lễ vật và phù hộ độ trì. Sau
        lễ cúng, con cháu cùng thụ lộc, thể hiện sự gắn kết và niềm vui đoàn tụ.
      </p>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-2.webp`}
          alt="Bàn thờ gia tiên trong ngày giỗ"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>5. Nghi thức cúng giỗ tổ tiên đúng chuẩn</h2>
      <p>Mỗi vùng miền có nghi thức riêng, song về cơ bản lễ giỗ gồm các bước:</p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Dọn dẹp, trang hoàng bàn thờ.</li>
        <li>Bày mâm cúng và thắp hương.</li>
        <li>Đọc văn khấn tổ tiên.</li>
        <li>Vái lạy theo thứ tự: trưởng tộc, cha mẹ, con cháu.</li>
        <li>Hóa vàng và chia lộc cho con cháu.</li>
      </ol>
      <p>
        Trong suốt buổi lễ, sự thành tâm là yếu tố quan trọng nhất. Không cần quá cầu kỳ, chỉ cần
        lòng hiếu kính và sự trang nghiêm là đủ để thể hiện tấm lòng với tổ tiên.
      </p>

      <h2>6. Giá trị đạo hiếu trong thời hiện đại</h2>
      <p>
        Dù cuộc sống hiện đại bận rộn, nhưng phong tục cúng giỗ vẫn được duy trì như một phần không
        thể thiếu trong đời sống tinh thần người Việt. Ngày giỗ không chỉ để nhớ người mất mà còn là
        dịp nhắc nhở chúng ta sống tốt hơn, biết ơn và hướng thiện.
      </p>
      <p>
        Ngày nay, nhiều <strong>dịch vụ tang lễ trọn gói</strong> như <strong>Sinh Phúc Thọ</strong>{' '}
        hỗ trợ các gia đình tổ chức lễ giỗ chu đáo, đúng nghi thức truyền thống. Nhờ đó, các thế hệ
        trẻ vẫn có thể tiếp nối văn hóa gia đình một cách trọn vẹn, dù sinh sống xa quê.
      </p>

      <h2>7. Kết luận</h2>
      <p>
        <strong>Ngày giỗ tổ tiên</strong> là biểu tượng của đạo hiếu và tình thân – nơi con cháu bày
        tỏ lòng biết ơn với cội nguồn. Dù nghi lễ có thay đổi theo thời gian, giá trị tinh thần ấy
        vẫn vẹn nguyên trong mỗi gia đình Việt.
      </p>
      <p>
        Mỗi nén hương, mỗi chén cơm cúng dâng lên tổ tiên đều chứa đựng lòng thành và đạo lý sâu
        sắc: “Sống có tổ có tông, như sông có nguồn, như cây có cội.” Đó chính là nét đẹp truyền
        thống mà người Việt mãi trân trọng và gìn giữ.
      </p>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-3.webp`}
          alt="Ngày giỗ tổ tiên trong văn hóa Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>FAQ – Câu hỏi thường gặp về ngày giỗ tổ tiên</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md p-3 bg-gray-50">
            <p className="font-medium">{faq.question}</p>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

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
