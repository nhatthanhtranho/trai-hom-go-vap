// app/cam-nang/[slug]/page.tsx

import Image from 'next/image';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'bi-quyet-chon-hoa-trang-tri-ban-tho-tang-le-trong-van-hoa-viet';
const title = 'Bí quyết chọn hoa trang trí bàn thờ tang lễ trong văn hóa Việt';
const description =
  'Hướng dẫn chi tiết cách chọn hoa trang trí bàn thờ tang lễ chuẩn phong tục Việt: ý nghĩa từng loài hoa, nguyên tắc chọn màu sắc, số lượng, cách phối hợp và lưu ý quan trọng để không gian tang lễ trang nghiêm, thanh tịnh.';

export async function generateMetadata(): Promise<Metadata> {
  const url = `https://sinhphuctho.com/cam-nang/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
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
}

export default function Article() {
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Trong văn hóa Việt Nam, tang lễ không chỉ là nghi thức tiễn biệt người đã khuất mà còn là
        dịp để con cháu bày tỏ đạo hiếu và lòng tưởng nhớ. Một trong những yếu tố tạo nên sự trang
        nghiêm, thanh tịnh cho không gian tang lễ chính là <strong>hoa trang trí bàn thờ</strong>.
        Việc lựa chọn hoa phù hợp không chỉ mang giá trị thẩm mỹ mà còn gắn liền với quan niệm tâm
        linh, phong tục và truyền thống lâu đời của dân tộc.
      </p>

      <h2>1. Ý nghĩa của hoa trên bàn thờ tang lễ</h2>
      <p>
        Hoa trong tang lễ là biểu tượng của sự vô thường, nhắc nhở con người về quy luật sinh – lão
        – bệnh – tử. Không giống như hoa trang trí trong ngày vui, hoa tang mang đến cảm xúc lắng
        đọng, thể hiện sự thương tiếc và cầu nguyện cho linh hồn người đã khuất. Mỗi loài hoa, màu
        sắc đều có một tầng ý nghĩa riêng, được chọn lọc kỹ lưỡng để vừa hợp phong tục vừa truyền tải
        được thông điệp tâm linh.
      </p>
      <p>
        Theo quan niệm Phật giáo, hoa tươi tượng trưng cho sự giác ngộ và vô thường, nhắc nhở con
        người trân quý cuộc sống hiện tại. Trong Nho giáo và tín ngưỡng dân gian, dâng hoa là hành
        động thể hiện tấm lòng hiếu kính, là sự dâng hiến những gì tinh khiết nhất cho tổ tiên. Bởi
        vậy, hoa trên bàn thờ tang lễ không đơn thuần là vật trang trí mà còn là ngôn ngữ của lòng
        thành kính.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>

      <h2>2. Những loại hoa thường dùng trong tang lễ</h2>

      <h3>Hoa cúc trắng</h3>
      <p>
        Hoa cúc trắng là loài hoa xuất hiện phổ biến nhất trong các tang lễ của người Việt. Cúc trắng
        gắn liền với hình ảnh thanh cao, thuần khiết và bền bỉ, được xem là biểu tượng của sự vĩnh
        hằng. Khi đặt trên bàn thờ tang lễ, hoa cúc trắng như một lời cầu nguyện bình an cho người đã
        khuất, đồng thời xoa dịu nỗi đau mất mát của người còn sống.
      </p>
      <p>
        Ngoài ý nghĩa tâm linh, hoa cúc trắng còn mang tính thẩm mỹ cao. Với cánh hoa nhỏ gọn, xếp
        đều đặn, chúng tạo nên sự hài hòa và cân đối cho không gian thờ cúng. Các gia đình thường
        chọn những bình hoa cúc trắng lớn đặt hai bên bàn thờ hoặc kết hợp cùng hoa ly, hoa huệ để
        tạo nên sự trang trọng. Đây cũng là lựa chọn được nhiều chuyên gia trong lĩnh vực dịch vụ
        tang lễ khuyên dùng bởi sự giản dị nhưng giàu ý nghĩa.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.png`}
          alt="Hoa cúc trắng trong tang lễ"
          priority
        />
      </figure>

      <h3>Hoa ly</h3>
      <p>
        Hoa ly, đặc biệt là hoa ly trắng, mang thông điệp về sự thanh khiết và cao quý. Trong văn hóa
        phương Đông, hoa ly được xem là biểu tượng của sự tiễn biệt nhẹ nhàng, thanh thản. Người ta
        tin rằng khi dâng hoa ly lên bàn thờ, linh hồn người đã khuất sẽ cảm nhận được sự thanh thoát,
        an yên trong hành trình sang thế giới bên kia.
      </p>
      <p>
        Ngoài ra, hương thơm đặc trưng của hoa ly cũng góp phần tạo nên không gian trang nghiêm,
        giúp mọi người khi bước vào tang lễ cảm thấy tĩnh lặng và thành kính hơn. Tuy nhiên, gia
        đình cũng nên lưu ý chọn hoa ly có hương vừa phải, tránh quá nồng để không gây khó chịu cho
        người tham dự.
      </p>

      <h3>Hoa huệ</h3>
      <p>
        Hoa huệ trắng là loài hoa được dùng nhiều trong các buổi lễ mang tính chất tôn nghiêm. Với
        dáng hoa thẳng đứng, mùi hương dịu nhẹ, hoa huệ tượng trưng cho sự trong sáng và lòng thành
        kính. Trong tang lễ, hoa huệ thường được cắm thành bình cao, đặt ở vị trí trung tâm bàn thờ,
        tạo điểm nhấn trang trọng.
      </p>
      <p>
        Người Việt còn quan niệm rằng hoa huệ giúp thanh lọc không gian, mang lại sự an lành. Đặc
        biệt, nhờ đặc tính bền và lâu tàn, hoa huệ phù hợp để giữ được vẻ đẹp suốt nhiều ngày tang,
        tránh tình trạng hoa nhanh héo làm mất đi sự trang nghiêm.
      </p>

      <h3>Hoa lan trắng</h3>
      <p>
        Hoa lan trắng mang trong mình vẻ đẹp thanh thoát, biểu trưng cho tình yêu vĩnh cửu và sự tưởng
        nhớ sâu sắc. Trong nhiều đám tang hiện đại, lan trắng thường được phối hợp với hoa cúc và hoa
        ly để tạo nên sự mềm mại, trang nhã. Đây cũng là loài hoa thể hiện sự sang trọng, được nhiều
        gia đình lựa chọn cho các tang lễ lớn.
      </p>
      <p>
        Về mặt thẩm mỹ, hoa lan có hình dáng độc đáo, dễ dàng phối hợp trong nhiều kiểu cắm khác nhau.
        Ý nghĩa sâu xa của hoa lan trắng còn nằm ở sự tưởng niệm dài lâu – một thông điệp rằng tình
        thương và sự gắn bó vẫn tồn tại ngay cả khi người thân đã rời xa.
      </p>

      <h3>Các loại khác</h3>
      <p>
        Ngoài những loài hoa chính kể trên, một số gia đình còn sử dụng hoa hồng trắng, hoa đồng tiền
        trắng hoặc hoa sen. Hoa hồng trắng thể hiện sự thuần khiết, đồng tiền trắng mang đến sự bình
        an, còn hoa sen – đặc biệt trong bối cảnh Phật giáo – biểu trưng cho sự giác ngộ và giải
        thoát. Tùy vào phong tục địa phương và tôn giáo, gia đình có thể linh hoạt lựa chọn sao cho
        phù hợp.
      </p>

      <h2>3. Nguyên tắc chọn hoa trang trí bàn thờ tang lễ</h2>
      <p>
        Việc chọn hoa tang lễ không chỉ dựa trên sở thích cá nhân mà cần tuân theo những nguyên tắc
        chung để đảm bảo tính trang nghiêm và đúng chuẩn mực văn hóa. Một vài điểm quan trọng cần
        lưu ý bao gồm:
      </p>
      <ul>
        <li>
          <strong>Màu sắc:</strong> Ưu tiên màu trắng, vàng nhạt, tím nhạt – những màu mang tính
          trang trọng. Tránh màu đỏ, hồng đậm vì không phù hợp không khí tang lễ.
        </li>
        <li>
          <strong>Số lượng:</strong> Chọn số lượng hoa vừa đủ, cân đối hai bên bàn thờ. Không nên cắm
          quá nhiều gây rườm rà.
        </li>
        <li>
          <strong>Kiểu dáng:</strong> Ưu tiên lọ hoa cao, dáng thẳng hoặc vòng hoa đặt hai bên.
        </li>
        <li>
          <strong>Chất lượng hoa:</strong> Phải tươi, không dập nát. Thay hoa khi héo để giữ vẻ
          trang nghiêm.
        </li>
        <li>
          <strong>Tôn giáo & địa phương:</strong> Phật giáo thường chuộng sen, huệ; Công giáo dùng
          lan, ly. Gia đình nên tham khảo ý kiến của người lớn tuổi và thầy cúng trước khi chọn.
        </li>
      </ul>

      <h2>4. Cách phối hợp hoa trên bàn thờ</h2>
      <p>
        Để không gian thờ cúng thêm hài hòa, gia đình có thể tham khảo một số cách phối hợp phổ biến:
      </p>
      <ol>
        <li>
          <strong>Kết hợp cổ điển:</strong> Cúc trắng + ly + huệ → tổng thể trang nghiêm, mùi hương
          dịu nhẹ, phù hợp hầu hết tang lễ.
        </li>
        <li>
          <strong>Kết hợp hiện đại:</strong> Cúc trắng + lan trắng → tạo sự thanh lịch, mềm mại, phù
          hợp không gian tang lễ quy mô nhỏ.
        </li>
        <li>
          <strong>Đặt vị trí:</strong> Bình hoa lớn chính giữa bàn thờ hoặc đặt cân đối hai bên. Vòng
          hoa tưởng niệm đặt ngoài, không đặt trực tiếp lên bàn thờ.
        </li>
      </ol>

      <h2>5. Lời kết & Hỗ trợ chuẩn bị</h2>
      <p>
        Việc chọn hoa trang trí bàn thờ tang lễ không chỉ là công việc chuẩn bị hình thức mà còn là
        cách để con cháu thể hiện đạo hiếu và lòng kính trọng. Một bàn thờ với hoa tươi thanh nhã sẽ
        giúp không gian tưởng niệm thêm trang nghiêm, đồng thời mang đến sự an ủi cho gia quyến.
      </p>
      <p>
        Nếu gia đình cần được hỗ trợ trong việc chuẩn bị tang lễ, từ chọn hoa, bài trí bàn thờ đến tổ
        chức toàn bộ nghi thức, hãy liên hệ ngay với{' '}
        <a
          href="https://sinhphuctho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Trại Hòm Sinh Phúc Thọ
        </a>{' '}
        để nhận tư vấn tận tâm và chuyên nghiệp.
      </p>

      <h2>Câu hỏi thường gặp (FAQ)</h2>
      <h3>Hoa nào phù hợp nhất để đặt trên bàn thờ tang lễ?</h3>
      <p>
        Thông thường, hoa cúc trắng, hoa huệ và hoa ly trắng là ba loại hoa được sử dụng phổ biến
        nhất, mang ý nghĩa trang nghiêm và thanh khiết.
      </p>

      <h3>Có nên dùng hoa màu đỏ trong tang lễ không?</h3>
      <p>
        Không. Hoa màu đỏ, hồng thường gắn liền với sự vui vẻ, hạnh phúc, nên tránh sử dụng trong
        không gian tang lễ.
      </p>

      <h3>Nên thay hoa trên bàn thờ tang lễ bao lâu một lần?</h3>
      <p>
        Tốt nhất nên thay hoa 1–2 ngày một lần, hoặc khi hoa có dấu hiệu héo để đảm bảo bàn thờ luôn
        sạch sẽ, trang nghiêm.
      </p>

      <h3>Có thể phối nhiều loại hoa trên bàn thờ không?</h3>
      <p>
        Có. Gia đình có thể kết hợp cúc trắng với lan, huệ hoặc ly, miễn sao tổng thể vẫn hài hòa và
        giữ được sự trang trọng.
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
