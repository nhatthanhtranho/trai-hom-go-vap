import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from 'next/image';
import { Metadata } from 'next/types';

const slug = 'cung-co-hon-thang-7';
const title = 'Cúng Cô Hồn Tháng 7 – Nghi Lễ, Ý Nghĩa và Những Lưu Ý Quan Trọng';

const description =
  'Hướng dẫn chi tiết về lễ cúng Cô Hồn tháng 7: nguồn gốc, ý nghĩa, thời gian, mâm lễ, bài văn khấn và những lưu ý quan trọng để gia đình bạn chuẩn bị đầy đủ, đúng phong tục.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

export const metadata: Metadata = {
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
    type: 'article',
    images: [
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cúng Cô Hồn tháng 7 – Nghi Lễ, Ý Nghĩa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.jpg`],
  },
};

export default function Page() {
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>

      <p>
        Tháng 7 âm lịch hằng năm trong văn hóa Việt Nam thường gắn liền với lễ Vu Lan báo hiếu và
        nghi lễ cúng Cô Hồn. Đây là phong tục dân gian quan trọng, thể hiện lòng từ bi, tưởng nhớ
        đến tổ tiên và cầu siêu cho những vong linh lang thang chưa được siêu thoát. Bài viết này
        được{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        biên soạn nhằm giúp bạn hiểu rõ nguồn gốc, ý nghĩa, cách chuẩn bị mâm lễ và những lưu ý khi
        cúng Cô Hồn tháng 7.
      </p>

      {/* I. Nguồn gốc */}
      <h2>1. Nguồn gốc của tục cúng Cô Hồn tháng 7</h2>
      <p>
        Tục cúng Cô Hồn xuất phát từ quan niệm dân gian và ảnh hưởng của Phật giáo. Theo kinh điển
        Phật giáo, ngày Rằm tháng 7 âm lịch là lễ Vu Lan – dịp con cháu báo hiếu cha mẹ, đồng thời
        cũng là ngày “xá tội vong nhân”. Vào ngày này, cửa ngục mở ra, các vong linh được trở về
        dương gian, vì vậy người dân thường bày lễ vật để cúng tế, bố thí thức ăn, áo quần cho những
        linh hồn lang thang.
      </p>
      <p>
        Theo quan niệm dân gian, cô hồn là những vong linh không nơi nương tựa, chết đường, chết
        chợ, chưa được siêu thoát. Nếu không được cúng bái, họ có thể quấy nhiễu cuộc sống con
        người. Do đó, cúng Cô Hồn là cách để an ủi, cầu nguyện cho họ, đồng thời giữ gìn sự bình an
        cho gia đình.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Nguồn gốc tục cúng Cô Hồn tháng 7"
          priority
        />
      </figure>

      <h2>2. Ý nghĩa của việc cúng Cô Hồn tháng 7</h2>
      <ul>
        <li>
          <strong>Từ bi và bố thí:</strong> Thể hiện lòng thương xót đối với những vong linh khốn
          khổ, giúp họ cảm thấy được chia sẻ, an ủi.
        </li>
        <li>
          <strong>Giữ gìn bình an:</strong> Người Việt tin rằng nếu cúng đầy đủ, các cô hồn sẽ không
          quấy phá, mang lại sự bình an cho gia đình.
        </li>
        <li>
          <strong>Báo hiếu tổ tiên:</strong> Song song với lễ Vu Lan, việc cúng cô hồn còn thể hiện
          đạo hiếu và truyền thống uống nước nhớ nguồn.
        </li>
        <li>
          <strong>Duy trì phong tục:</strong> Đây là nét đẹp văn hóa tâm linh, được lưu truyền từ
          thế hệ này sang thế hệ khác.
        </li>
      </ul>

      {/* III. Thời gian */}
      <h2>3. Thời gian thích hợp để cúng Cô Hồn tháng 7</h2>
      <p>
        Theo truyền thống, lễ cúng Cô Hồn thường được thực hiện từ ngày mùng 2 đến ngày 14 âm lịch,
        cao điểm là ngày Rằm tháng 7. Nhiều gia đình chọn ngày 14 vì tin rằng hôm sau (15) là lúc
        cửa ngục đóng lại, nên cần cúng trước để cô hồn nhận được lễ vật. Thời gian cúng tốt nhất
        thường vào buổi chiều tối, vì theo quan niệm dân gian đây là lúc các vong linh mạnh nhất, dễ
        tiếp nhận đồ cúng.
      </p>

      {/* IV. Lễ vật */}
      <h2>4. Mâm lễ cúng Cô Hồn tháng 7 gồm những gì?</h2>
      <p>
        Lễ vật cúng Cô Hồn có thể tùy thuộc vào phong tục từng vùng miền và điều kiện gia đình,
        nhưng nhìn chung thường bao gồm:
      </p>
      <ul>
        <li>
          <strong>Lễ chay:</strong> Gạo, muối, cháo loãng, bánh kẹo, khoai, ngô luộc.
        </li>
        <li>
          <strong>Lễ mặn:</strong> Gà luộc, thịt, cá, trứng.
        </li>
        <li>
          <strong>Hoa quả và hương hoa:</strong> Hoa tươi, trái cây, nước sạch.
        </li>
        <li>
          <strong>Vàng mã:</strong> Quần áo giấy, tiền âm phủ, ngựa giấy, nhà cửa bằng giấy.
        </li>
        <li>
          <strong>Nước uống:</strong> Nước lọc, trà, rượu.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Mâm cúng Cô Hồn tháng 7"
          priority
        />
      </figure>

      {/* V. Văn khấn */}
      <h2>5. Bài văn khấn cúng Cô Hồn tháng 7</h2>
      <blockquote>
        Nam mô A Di Đà Phật! <br />
        Hôm nay là ngày... tháng... năm... <br />
        Chúng con thành tâm sắm sửa hương hoa, lễ vật, cơm canh dâng trước án. Kính mời các vong hồn
        không nơi nương tựa, các hương linh lang thang vất vưởng, về đây thụ hưởng lễ vật. <br />
        Cúi xin chư vị chứng giám lòng thành, phù hộ độ trì cho gia đình chúng con được bình an, may
        mắn, vạn sự hanh thông. <br />
        Nam mô A Di Đà Phật! (3 lần)
      </blockquote>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Mâm cúng Cô Hồn tháng 7"
          priority
        />
      </figure>

      {/* VI. Lưu ý */}
      <h2>6. Những điều cần lưu ý khi cúng Cô Hồn</h2>
      <ul>
        <li>Mâm cúng nên đặt ngoài trời, trước cửa nhà.</li>
        <li>Không nên đặt mâm cúng ở nơi ô uế, gần thùng rác hay nhà vệ sinh.</li>
        <li>Sau khi cúng xong, nên rải gạo và muối ra đường để bố thí cho cô hồn.</li>
        <li>Đồ cúng (bánh kẹo, hoa quả) có thể chia cho trẻ nhỏ, tránh lãng phí.</li>
        <li>Khi cúng, gia chủ phải ăn mặc chỉnh tề, giữ thái độ thành kính, không cười đùa.</li>
      </ul>

      {/* VII. Kết luận */}
      <h2>7. Kết luận</h2>
      <p>
        Cúng Cô Hồn tháng 7 là nghi thức truyền thống quan trọng, không chỉ mang ý nghĩa tâm linh mà
        còn thể hiện đạo hiếu và tinh thần nhân ái của dân tộc Việt Nam. Thực hiện nghi lễ đúng cách
        sẽ giúp gia đình an tâm, cuộc sống thuận hòa, đồng thời góp phần gìn giữ những giá trị văn
        hóa lâu đời.
      </p>
      <p>
        Nếu bạn đang chuẩn bị tang lễ hoặc cần hỗ trợ trong các nghi thức truyền thống, hãy liên hệ
        với{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>
        . Với dịch vụ <strong>mai táng trọn gói, hỏa táng, an táng</strong> uy tín, Sinh Phúc Thọ sẽ
        đồng hành cùng gia đình bạn trong những thời khắc quan trọng nhất.
      </p>
    </CamNangLayout>
  );
}
