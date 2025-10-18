// app/cam-nang/[slug]/page.tsx

import Image from '@/components/CustomImage';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'bi-quyet-chon-hoa-trang-tri-ban-tho-tang-le-trong-van-hoa-viet';
const title = 'Bí quyết chọn hoa trang trí bàn thờ tang lễ trong văn hóa Việt';
const description =
  'Hướng dẫn cách chọn hoa trang trí bàn thờ tang lễ chuẩn phong tục Việt: ý nghĩa từng loài hoa, nguyên tắc chọn màu sắc, số lượng và cách phối hợp để không gian tang lễ trang nghiêm, thanh tịnh.';

export async function generateMetadata(): Promise<Metadata> {
  const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

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
  const slug = 'bi-quyet-chon-hoa-trang-tri-ban-tho-tang-le-trong-van-hoa-viet';
  const title = 'Bí quyết chọn hoa trang trí bàn thờ tang lễ trong văn hóa Việt';

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Trong văn hóa Việt Nam, tang lễ không chỉ là nghi thức tiễn biệt người đã khuất mà còn thể
        hiện đạo hiếu, sự kính trọng và lòng thương nhớ của con cháu, bạn bè. Một trong những yếu tố
        quan trọng tạo nên sự trang nghiêm cho không gian tang lễ chính là hoa trang trí bàn thờ.
        Việc chọn hoa phù hợp không chỉ mang ý nghĩa thẩm mỹ mà còn gắn liền với quan niệm tâm linh,
        phong tục tập quán của người Việt.
      </p>

      <h2>1. Ý nghĩa của hoa trên bàn thờ tang lễ</h2>
      <p>
        Hoa tươi trong tang lễ là biểu tượng của sự vô thường, nhắc nhở con người về quy luật sinh –
        lão – bệnh – tử. Đồng thời, hoa còn thể hiện lòng tiếc thương, sự thanh khiết và cầu mong
        cho linh hồn người đã mất sớm được siêu thoát.
      </p>
      <p>
        Việc chọn loại hoa, màu sắc và cách cắm hoa đều mang ý nghĩa riêng, góp phần tạo nên sự
        trang trọng, ấm cúng trong không gian tưởng nhớ.
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
      <ul>
        <li>Biểu tượng của sự vĩnh hằng, tinh khiết và lòng hiếu thảo.</li>
        <li>
          Được dùng nhiều trong tang lễ người Việt vì mang lại cảm giác bình yên, trang nghiêm.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.png`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>

      <h3>Hoa ly</h3>

      <ul>
        <li>Thể hiện sự cao quý, thanh thoát.</li>
        <li>
          Hoa ly trắng đặc biệt được ưa chuộng để cắm trên bàn thờ tang lễ, mang thông điệp thanh
          sạch và tiễn biệt.
        </li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>

      <h3>Hoa huệ</h3>
      <ul>
        <li>Gắn liền với sự thành kính và trang nghiêm.</li>
        <li>
          Mùi hương dịu nhẹ, lâu tàn, rất phù hợp để cắm bàn thờ trong suốt thời gian tang lễ.
        </li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>
      <h3>Hoa lan trắng</h3>
      <ul>
        <li>Biểu tượng của tình yêu vĩnh cửu, sự tưởng nhớ sâu sắc.</li>
        <li>Thường được phối hợp cùng hoa cúc và hoa ly. </li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-5.jpg`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>
      <h3>Các loại khác</h3>
      <p>
        Một số gia đình cũng dùng hoa hồng trắng, hoa đồng tiền trắng hoặc hoa sen (trong bối cảnh
        Phật giáo) để thể hiện sự thanh cao và tinh khiết.
      </p>

      <h2>3. Nguyên tắc chọn hoa trang trí bàn thờ tang lễ</h2>
      <ul>
        <li>
          <strong>Màu sắc:</strong> Ưu tiên màu trắng, vàng nhạt, tím nhạt — những màu mang tính
          trang nghiêm và nhã nhặn. Tránh dùng màu đỏ, hồng tươi.
        </li>
        <li>
          <strong>Số lượng:</strong> Chọn số lượng hoa cân đối, vừa đủ; không quá nhiều khiến bàn
          thờ rườm rà.
        </li>
        <li>
          <strong>Kiểu dáng:</strong> Ưu tiên lọ cao, cắm gọn gàng hoặc vòng hoa đặt hai bên để giữ
          sự cân đối.
        </li>
        <li>
          <strong>Chất lượng hoa:</strong> Hoa phải tươi, không dập nát. Thay hoa héo kịp thời để
          giữ vẻ trang nghiêm.
        </li>
        <li>
          <strong>Tương thích với tôn giáo/địa phương:</strong> Một số gia đình theo Phật giáo hay
          Công giáo có phong tục, biểu tượng hoa khác nhau — cân nhắc khi chọn.
        </li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-6.jpg`}
          alt="Hoa trang trí bàn thờ tang lễ"
          priority
        />
      </figure>

      <h2>4. Cách phối hợp hoa trên bàn thờ</h2>
      <p>Một vài gợi ý phối hoa phổ biến và dễ thực hiện:</p>
      <ol>
        <li>
          <strong>Kết hợp cổ điển:</strong> Cúc trắng + ly + huệ — tổng thể trang nghiêm, mùi hương
          dịu, phù hợp đa số đám tang.
        </li>
        <li>
          <strong>Thêm điểm nhấn:</strong> Xen kẽ lan trắng để tạo sự mềm mại, thanh lịch.
        </li>
        <li>
          <strong>Bố trí:</strong> Sắp xếp cân đối hai bên bàn thờ; nếu dùng 1 bình lớn, đặt chính
          giữa phía sau tượng/ảnh người đã mất.
        </li>
        <li>
          <strong>Vòng hoa ngoài:</strong> Vòng hoa tưởng niệm đặt phía trước bàn thờ hoặc cạnh linh
          đường, tránh đặt lên trực tiếp trên bát hương.
        </li>
      </ol>
      <h2>5. Lời kết & hỗ trợ chuẩn bị</h2>
      <p>
        Chọn hoa trang trí bàn thờ tang lễ không chỉ là công việc chuẩn bị đơn thuần mà còn là cách
        thể hiện tấm lòng hiếu kính, niềm thương tiếc đối với người đã khuất. Một không gian tưởng
        nhớ được chăm chút bằng hoa tươi trang nhã sẽ mang lại sự an ủi cho gia quyến và thể hiện
        trọn vẹn nét đẹp văn hóa tâm linh của người Việt.
      </p>
      <p>
        Nếu gia đình cần hỗ trợ trong việc chuẩn bị tang lễ hoặc tư vấn chọn hoa, bạn có thể liên hệ
        dịch vụ chuyên nghiệp để được phục vụ tận tâm. Tham khảo thêm tại{' '}
        <a
          href="https://sinhphuctho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          sinhphuctho.com
        </a>
        .
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
