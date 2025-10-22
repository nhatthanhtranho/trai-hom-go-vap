// app/cam-nang/y-nghia-chiec-khan-tang/page.tsx
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Script from 'next/script';
import Image from 'next/image';
import { GetStaticProps } from 'next';

const slug = 'y-nghia-chiec-khan-tang';
const title = 'Ý Nghĩa Chiếc Khăn Tang Trong Phong Tục Tang Lễ Việt Nam';
const IMAGE_PATH = `/assets/images/cam-nang/${slug}`;
const description =
  'Tìm hiểu ý nghĩa chiếc khăn tang trong phong tục tang lễ Việt Nam: nguồn gốc, biểu tượng, cách đeo và vai trò trong văn hóa tâm linh. Bài viết chuẩn SEO, sâu sắc và đầy đủ thông tin.';
const path = `cam-nang/${slug}`;

export const metadata = {
  title,
  description,
  path,
  openGraph: {
    title,
    description,
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
      question: 'Chiếc khăn tang có ý nghĩa gì trong tang lễ?',
      answer:
        'Chiếc khăn tang là biểu tượng của sự đau thương, tưởng nhớ và lòng hiếu kính của con cháu dành cho người đã khuất.',
    },
    {
      question: 'Ai là người phải đội khăn tang?',
      answer:
        'Tùy theo quan hệ huyết thống, những người thân trong gia đình như con, cháu, chắt, anh em ruột, dâu rể... đều đội khăn tang với hình thức khác nhau.',
    },
    {
      question: 'Màu khăn tang có ý nghĩa gì?',
      answer:
        'Khăn tang màu trắng tượng trưng cho tang tóc, sự thanh khiết, và tấm lòng thành thật của người ở lại dành cho người đã khuất.',
    },
    {
      question: 'Có sự khác nhau về cách đội khăn tang ở các vùng miền không?',
      answer:
        'Có. Ở miền Bắc thường dùng khăn trắng buộc đầu hoặc quấn chéo, trong khi miền Nam có thể dùng băng tang nhỏ hơn hoặc gắn trên áo.',
    },
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Trong văn hóa tang lễ Việt Nam, <strong>chiếc khăn tang</strong> là một trong những biểu
        tượng thiêng liêng và quen thuộc nhất. Hình ảnh người con, người cháu quấn khăn trắng bên
        linh cữu thể hiện nỗi đau mất mát và lòng biết ơn sâu sắc đối với người đã khuất. Dù thời
        gian trôi đi, ý nghĩa của chiếc khăn tang vẫn vẹn nguyên – như một sợi dây kết nối giữa quá
        khứ, hiện tại và niềm tin tâm linh của người Việt.
      </p>

      <h2>1. Nguồn gốc và ý nghĩa biểu tượng của chiếc khăn tang</h2>
      <p>
        Tang lễ là nghi thức quan trọng, phản ánh triết lý sống “uống nước nhớ nguồn” của người
        Việt. Từ xa xưa, người ta đã coi việc để tang là biểu hiện của đạo hiếu – lòng biết ơn với
        tổ tiên và người sinh thành. Trong đó, chiếc khăn tang là dấu hiệu cụ thể nhất để nhận biết
        thân nhân của người mất.
      </p>
      <p>
        Theo sử sách, phong tục đội khăn tang được du nhập từ Trung Hoa qua thời kỳ Nho giáo phát
        triển mạnh, nhưng đã được người Việt bản địa hóa, mang đậm bản sắc dân tộc. Màu trắng của
        khăn tượng trưng cho sự chia ly, thanh khiết và tấm lòng chân thật. Không giống màu đen –
        biểu tượng của tang tóc ở phương Tây – người Việt chọn màu trắng như một sự tiễn đưa nhẹ
        nhàng, thanh thản.
      </p>
      <p>
        Trong triết lý Phật giáo, chiếc khăn tang cũng là lời nhắc nhở con người về vô thường – rằng
        “sinh, lão, bệnh, tử” là quy luật tự nhiên. Khi đội khăn tang, người sống như đang cùng
        người mất trải qua chặng đường cuối, đồng thời học cách chấp nhận và buông bỏ khổ đau. Đây
        chính là ý nghĩa nhân văn sâu sắc mà chiếc khăn tang mang lại.
      </p>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/banner.webp`}
          alt="Chiếc khăn tang trong văn hóa tang lễ Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>2. Hình thức và cách đeo khăn tang trong tang lễ</h2>
      <p>
        Tùy theo từng vùng miền, chiếc khăn tang có hình thức và cách đeo khác nhau. Truyền thống
        nhất là khăn vải xô trắng, khổ rộng khoảng 20–30 cm, dài vừa đủ để quấn quanh đầu. Người con
        trai, con gái quấn kín đầu, buộc nút phía sau. Cháu, chắt hoặc dâu rể thì chỉ đeo băng tang
        nhỏ hơn để phân biệt thứ bậc trong gia đình.
      </p>
      <p>
        Trong tang lễ, việc đội khăn tang được thực hiện từ khi khâm liệm cho đến hết thời gian để
        tang. Khi tiễn đưa, khăn thường được tháo nhẹ trước khi hạ huyệt – như một cách buông bỏ,
        cầu chúc người mất ra đi thanh thản. Một số vùng còn có phong tục đốt khăn tang vào cuối lễ
        để tiễn biệt trọn vẹn.
      </p>
      <p>
        Dù hình thức thay đổi theo thời gian, nhưng giá trị cốt lõi vẫn là sự biểu lộ lòng kính
        trọng. Cách đeo khăn đúng quy cách không chỉ giúp tang lễ trang nghiêm mà còn phản ánh đạo
        đức và nền nếp gia phong của mỗi gia đình Việt.
      </p>
      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-2.webp`}
          alt="Chiếc khăn tang trong văn hóa tang lễ Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>3. Ý nghĩa tâm linh và nhân văn của chiếc khăn tang</h2>
      <p>
        Trong tâm thức người Việt, chiếc khăn tang không chỉ là vật dụng biểu trưng cho nỗi buồn mà
        còn mang giá trị tâm linh sâu sắc. Khi đội khăn tang, người thân như đang “đồng hành” cùng
        linh hồn người mất trên hành trình sang cõi vĩnh hằng. Hành động đó giúp con người gột rửa
        phiền muộn, hướng tâm về điều thiện lành.
      </p>
      <p>
        Bên cạnh đó, chiếc khăn tang còn thể hiện tình cảm gắn bó giữa các thành viên trong gia
        đình. Khi cả nhà cùng đội khăn trắng, không chỉ là nghi lễ, mà là biểu tượng của sự đồng
        lòng, của tình thân vượt qua đau thương. Đó cũng là giá trị nhân văn lớn nhất mà chiếc khăn
        tang để lại trong đời sống người Việt.
      </p>
      <p>
        Nhiều người cao tuổi cho rằng, “đội khăn tang là một lần sống chậm lại để cảm nhận sự mất
        mát và biết trân trọng những người đang còn bên cạnh.” Vì thế, chiếc khăn tang không chỉ
        dành cho người mất – mà còn là bài học sống dành cho người ở lại.
      </p>

      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-1.jpg`}
          alt="Tâm linh và nhân văn của chiếc khăn tang"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>4. Phân biệt các loại khăn tang theo vai vế trong gia đình</h2>
      <p>
        Trong nghi lễ truyền thống, mỗi vai vế trong gia đình sẽ đội khăn tang khác nhau. Sự khác
        biệt này thể hiện trật tự huyết thống và mức độ đau thương, đồng thời phản ánh tinh thần
        “tôn ti trật tự” của Nho giáo.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Cha/mẹ mất:</strong> Con cái quấn khăn trắng quanh đầu, mặc áo sô, đi dép rơm, thể
          hiện lòng hiếu thảo và nỗi đau tột cùng.
        </li>
        <li>
          <strong>Ông/bà mất:</strong> Cháu nội, cháu ngoại đội khăn nhỏ hơn, thường chỉ đeo băng
          trên áo hoặc trán.
        </li>
        <li>
          <strong>Anh/chị/em ruột mất:</strong> Đội khăn tang hẹp, không quấn kín đầu – biểu thị
          tình cảm thân thiết nhưng không trực hệ.
        </li>
        <li>
          <strong>Dâu/rể:</strong> Đội băng tang nhỏ lệch bên, thể hiện lòng kính trọng đối với cha
          mẹ chồng hoặc cha mẹ vợ.
        </li>
      </ul>
      <p>
        Việc phân chia này giúp tang lễ có quy củ, thể hiện rõ mối quan hệ huyết thống và trách
        nhiệm của từng thành viên trong gia đình. Đồng thời, cũng là dịp để con cháu bày tỏ lòng
        biết ơn và nhắc nhở về đạo hiếu.
      </p>

      <h2>5. Sự khác biệt vùng miền trong phong tục đội khăn tang</h2>
      <p>
        Việt Nam là quốc gia đa dạng văn hóa, vì vậy phong tục đội khăn tang cũng có sự khác biệt rõ
        rệt giữa các vùng miền. Ở miền Bắc, khăn tang thường làm từ vải xô trắng, quấn kín đầu và
        thả hai đầu khăn ra sau lưng. Đây là phong tục đậm chất truyền thống, mang tính biểu tượng
        mạnh về lòng hiếu đạo.
      </p>
      <p>
        Miền Trung, với tính cách kín đáo, thường dùng loại khăn nhỏ hơn, đôi khi chỉ đeo băng tang
        trắng trên trán hoặc vai. Còn miền Nam, do thời tiết nóng và phong tục nhẹ nhàng hơn, người
        ta chuộng dải tang nhỏ gắn trên áo tang phục. Dù khác nhau về hình thức, nhưng tất cả đều
        chung một tinh thần – bày tỏ nỗi thương tiếc và lòng thành kính.
      </p>
      <p>
        Những khác biệt ấy thể hiện sự phong phú trong văn hóa Việt Nam, nhưng tựu trung, chiếc khăn
        tang vẫn là biểu tượng thống nhất cho lòng biết ơn và sự tiếc thương.
      </p>
      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-3.jpg`}
          alt="Chiếc khăn tang trong văn hóa tang lễ Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>6. Ý nghĩa màu sắc và chất liệu khăn tang trong đời sống hiện đại</h2>
      <p>
        Ngày nay, xã hội hiện đại khiến nhiều nghi thức tang lễ trở nên giản lược, nhưng ý nghĩa của
        chiếc khăn tang vẫn được giữ nguyên. Màu trắng vẫn là màu chủ đạo, biểu tượng cho sự tinh
        khiết, lòng thành và sự tiễn biệt trang nghiêm.
      </p>
      <p>
        Chất liệu khăn cũng thay đổi: từ vải xô truyền thống sang vải cotton, voan hay lụa trắng –
        vừa gọn gàng, vừa trang trọng. Một số gia đình còn in thêm dòng chữ “Vô cùng thương tiếc”
        lên khăn để thể hiện sự thành tâm. Dù có sự cách tân, nhưng tất cả đều hướng về mục đích
        chung – bày tỏ lòng kính trọng đối với người đã khuất.
      </p>
      <p>
        Trong tang lễ hiện đại, việc sử dụng khăn tang cũng được các{' '}
        <strong>đơn vị dịch vụ mai táng chuyên nghiệp</strong> hướng dẫn để đảm bảo đúng phong tục
        và thẩm mỹ. Điều này vừa giúp gia đình bớt lúng túng, vừa giữ gìn nét đẹp văn hóa Việt.
      </p>

      <h2>7. Vai trò của dịch vụ tang lễ chuyên nghiệp trong việc giữ gìn phong tục</h2>
      <p>
        Các <strong>dịch vụ tang lễ trọn gói</strong> như <strong>Sinh Phúc Thọ</strong> đóng vai
        trò quan trọng trong việc bảo tồn giá trị truyền thống. Không chỉ hỗ trợ tổ chức tang lễ chu
        đáo, các đơn vị này còn tư vấn về cách đội khăn tang, lập bàn thờ vong, chọn trang phục phù
        hợp từng vùng miền.
      </p>
      <p>
        Nhiều gia đình chia sẻ rằng, nhờ có đội ngũ chuyên nghiệp, tang lễ của họ trở nên trang
        nghiêm, đầy đủ nghi thức mà không sai lệch với văn hóa địa phương. Đây là minh chứng rõ ràng
        cho sự giao thoa giữa truyền thống và hiện đại, giúp phong tục Việt được gìn giữ và lan tỏa.
      </p>
      <p>
        Việc duy trì nghi thức đội khăn tang không chỉ là tôn trọng người mất, mà còn là cách để thế
        hệ trẻ hiểu hơn về cội nguồn dân tộc. Sinh Phúc Thọ tự hào là người bạn đồng hành trong hành
        trình ấy – mang lại sự an tâm và ý nghĩa cho mỗi tang lễ.
      </p>
      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-4.jpg`}
          alt="Chiếc khăn tang trong văn hóa tang lễ Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>8. Kết luận</h2>
      <p>
        <strong>Chiếc khăn tang</strong> không chỉ là một vật phẩm trong nghi lễ tang lễ, mà còn là
        biểu tượng văn hóa, là lời nhắc về đạo hiếu, tình thân và lòng nhân ái. Trải qua bao thế hệ,
        chiếc khăn trắng ấy vẫn hiện hữu trong đời sống tinh thần của người Việt – giản dị nhưng
        chứa đựng bao giá trị thiêng liêng.
      </p>
      <p>
        Mỗi khi nhìn thấy chiếc khăn tang, ta như được nhắc nhở về chữ “Hiếu” – gốc rễ của đạo làm
        người. Và trong dòng chảy hiện đại, việc gìn giữ nghi thức này chính là cách để chúng ta
        trân trọng những giá trị truyền thống, hướng về nguồn cội trong tâm thế biết ơn và an lành.
      </p>
      <p>
        Để tìm hiểu thêm các bài viết liên quan đến phong tục tang lễ Việt Nam, bạn có thể xem thêm
        tại{' '}
        <a
          href="https://sinhphuctho.com/cam-nang.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          chuyên mục Cẩm Nang Tang Lễ Sinh Phúc Thọ
        </a>
        .
      </p>
      <figure className="relative aspect-video my-6">
        <Image
          fill
          src={`${IMAGE_PATH}/hinh-5.jpg`}
          alt="Chiếc khăn tang trong văn hóa tang lễ Việt Nam"
          priority
          className="object-cover rounded-xl"
        />
      </figure>

      <h2>Liên hệ dịch vụ hỗ trợ tang lễ</h2>
      <p>
        Nếu bạn cần tư vấn về cách tổ chức tang lễ, lựa chọn trang phục hoặc chuẩn bị nghi thức đúng
        phong tục, hãy liên hệ với{' '}
        <a
          href="https://sinhphuctho.com/lien-he.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Trại Hòm Sinh Phúc Thọ
        </a>{' '}
        – đơn vị chuyên nghiệp với nhiều năm kinh nghiệm, luôn tận tâm đồng hành cùng gia đình trong
        những thời khắc khó khăn nhất.
      </p>

      <h2>FAQ – Câu hỏi thường gặp về chiếc khăn tang</h2>
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
