// app/cam-nang/[slug]/page.tsx
/* eslint-disable react/no-unescaped-entities */

import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Image from '@/src/components/CustomImage';
import { GetStaticProps } from 'next/types';

const slug = '6-vitamin-va-khoang-chat-quan-trong-cho-su-phat-trien-cua-tre';
const title = '6 vitamin và khoáng chất quan trọng cho sự phát triển của trẻ';
const description =
  'Việc bổ sung vitamin và khoáng chất cho trẻ không còn là điều mới mẻ. Cha mẹ cần hiểu rõ đâu là những dưỡng chất thiết yếu nhất giúp trẻ phát triển toàn diện cả về thể chất và trí tuệ.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

export const metadata = {
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
        url: `/assets/images/cam-nang/${slug}/banner.webp`,
        width: 960,
        height: 640,
        alt: title,
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
        width: 660,
        height: 371,
        alt: 'Vitamin nhóm B',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-2.webp`,
        width: 735,
        height: 490,
        alt: 'Vitamin nhóm D',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-3.webp`,
        width: 735,
        height: 490,
        alt: 'Sữa trong vai trò sức khỏe',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-4.webp`,
        width: 626,
        height: 470,
        alt: 'Lưu ý khi bổ sung vitamin cho trẻ',
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
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Việc bổ sung vitamin và khoáng chất cho trẻ không còn là điều mới mẻ. Cha mẹ cần hiểu rõ đâu
        là những dưỡng chất thiết yếu nhất giúp trẻ phát triển toàn diện cả về thể chất và trí tuệ.
      </p>
      <figure>
        <Image fill src={`/assets/images/cam-nang/${slug}/banner.webp`} alt={title} priority />
      </figure>
      <p>
        Vitamin và khoáng chất là những vi chất dinh dưỡng thiết yếu, giữ vai trò quan trọng trong
        quá trình tăng trưởng, phát triển của trẻ. Chúng tham gia vào quá trình chuyển hóa năng
        lượng, tổng hợp protein, hình thành tế bào máu, phát triển xương, răng, hệ thần kinh và củng
        cố hệ miễn dịch.
      </p>
      <p>
        Ở trẻ em, giai đoạn tăng trưởng diễn ra mạnh mẽ nên nhu cầu vi chất tính theo trọng lượng cơ
        thể cao hơn so với người trưởng thành. Thiếu hụt các vitamin và khoáng chất có thể dẫn đến
        chậm lớn, biếng ăn, giảm khả năng tập trung, dễ mắc bệnh nhiễm khuẩn, thiếu máu hoặc rối
        loạn phát triển thần kinh.
      </p>
      <p>
        Việc bổ sung đầy đủ và hợp lý các vi chất này giúp duy trì quá trình tạo tế bào, ổn định
        chuyển hóa, hỗ trợ phát triển thể chất, trí tuệ và tăng cường sức đề kháng, nền tảng để trẻ
        đạt được chiều cao, cân nặng và khả năng học tập tối ưu.
      </p>
      <h2>Bổ sung các loại vitamin và khoáng chất qua thực phẩm</h2>
      <h3>Vitamin A</h3>
      <p>
        Trẻ em cần được bổ sung vitamin A vì đây là vi chất thiết yếu cho sự phát triển toàn diện
        của cơ thể, đặc biệt trong giai đoạn tăng trưởng nhanh. Vitamin A giúp duy trì sự toàn vẹn
        của biểu mô da và niêm mạc, tăng cường hàng rào miễn dịch, bảo vệ cơ thể khỏi vi khuẩn và
        virus. Ngoài ra, vitamin A tham gia hình thành sắc tố thị giác rhodopsin, giúp trẻ nhìn rõ
        trong điều kiện ánh sáng yếu và phòng ngừa quáng gà.
      </p>
      <p>
        Nguồn cung cấp tự nhiên phong phú gồm gan, sữa, phô mai, trứng, cùng các loại rau củ quả màu
        vàng - cam như cà rốt, bí đỏ, khoai lang và xoài chín.
      </p>
      <h3>Vitamin nhóm B</h3>
      <p>
        Các vitamin B1, B2, B3, B6, B9 và B12 là coenzym tham gia vào quá trình chuyển hóa glucid,
        protid và lipid, giúp cơ thể tạo năng lượng cho tăng trưởng và hoạt động. Vitamin nhóm B còn
        cần thiết cho quá trình tạo máu, duy trì chức năng hệ thần kinh trung ương, thúc đẩy cảm
        giác ngon miệng và hỗ trợ tiêu hóa. Thiếu hụt vitamin nhóm B có thể khiến trẻ mệt mỏi, chậm
        tăng cân, giảm khả năng tập trung, dễ cáu gắt hoặc gặp các rối loạn thần kinh - cơ.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Vitamin nhóm B"
          priority
        />
      </figure>
      <p>
        Nguồn thực phẩm giàu vitamin nhóm B gồm thịt nạc, cá, trứng, sữa, ngũ cốc nguyên hạt, đậu
        nành và các loại hạt.
      </p>
      <h2>Vitamin C</h2>
      <p>
        Vitamin C là vi chất thiết yếu tham gia vào nhiều quá trình sinh học quan trọng của cơ thể.
        Vitamin C giúp tổng hợp collagen, thành phần cấu trúc chính của da, mạch máu, xương và mô
        liên kết, nhờ đó hỗ trợ quá trình phát triển và lành vết thương ở trẻ.
      </p>
      <p>
        Ngoài ra, vitamin C còn là chất chống oxy hóa mạnh, giúp bảo vệ tế bào khỏi tổn thương do
        gốc tự do, đồng thời tăng cường hoạt động của bạch cầu, nâng cao sức đề kháng và giảm nguy
        cơ mắc các bệnh nhiễm trùng hô hấp. Vi chất này cũng giúp tăng hấp thu sắt từ thực phẩm,
        phòng ngừa thiếu máu do thiếu sắt. Thiếu vitamin C có thể khiến trẻ mệt mỏi, chậm lành vết
        thương, chảy máu lợi hoặc mắc bệnh scorbut.
      </p>
      <p>Nguồn cung cấp vitamin C tự nhiên: Cam, chanh, dâu tây, kiwi, cà chua, bông cải xanh…</p>
      <h2>Vitamin D</h2>
      <p>
        Vitamin D là vi chất tan trong chất béo đóng vai trò quan trọng trong quá trình chuyển hóa
        canxi và phospho, giúp hình thành và duy trì hệ xương, răng chắc khỏe. Vitamin D thúc đẩy
        hấp thu canxi ở ruột non, tăng tái hấp thu canxi tại thận và điều hòa nồng độ canxi -
        phospho trong máu, đảm bảo quá trình khoáng hóa xương diễn ra bình thường.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Vitamin D giúp phát triển xương và răng chắc khỏe"
          priority
        />
      </figure>
      <p>
        Ngoài ra, vitamin D còn tham gia điều hòa hoạt động của hệ miễn dịch và giảm nguy cơ mắc một
        số bệnh lý mạn tính sau này. Thiếu vitamin D ở trẻ có thể dẫn đến còi xương, chậm mọc răng,
        biến dạng xương và giảm sức đề kháng.
      </p>
      <p>
        Nguồn vitamin D tự nhiên gồm: Ánh nắng mặt trời, cá béo (cá hồi, cá thu), lòng đỏ trứng,
        sữa...
      </p>
      <h2>Canxi</h2>
      <p>
        Canxi là khoáng chất thiết yếu chiếm khoảng 99% trong xương và răng, đóng vai trò quyết định
        trong việc hình thành và duy trì hệ xương chắc khỏe. Canxi không chỉ giúp xương phát triển
        về chiều dài và mật độ khoáng mà còn tham gia vào nhiều quá trình sinh lý quan trọng khác
        như dẫn truyền thần kinh, co cơ và đông máu.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Canxi trong phát triển của trẻ"
          priority
        />
      </figure>
      <p>
        Trong giai đoạn tăng trưởng nhanh, đặc biệt ở tuổi dậy thì, nhu cầu canxi của trẻ tăng cao
        để đáp ứng tốc độ phát triển của xương. Thiếu canxi có thể dẫn đến chậm lớn, thấp còi, răng
        yếu, co giật do hạ canxi máu hoặc còi xương khi thiếu đồng thời vitamin D.
      </p>
      <p>
        Thực phẩm giàu canxi gồm sữa, phô mai, sữa chua, đậu phụ, rau xanh đậm, cá nhỏ ăn cả xương
        và nước cam bổ sung canxi.
      </p>
      <h3>Sắt </h3>
      <p>
        Sắt là khoáng chất vi lượng thiết yếu tham gia vào quá trình tạo hemoglobin - protein vận
        chuyển oxy trong hồng cầu, giúp cung cấp năng lượng cho các tế bào và duy trì hoạt động sống
        của cơ thể. Sắt còn là thành phần của myoglobin trong cơ, nhiều enzym hô hấp và hệ miễn
        dịch, góp phần quan trọng vào phát triển trí não và khả năng nhận thức ở trẻ.
      </p>
      <p>
        Trẻ sơ sinh, trẻ nhỏ và tuổi dậy thì, nhu cầu sắt tăng cao để đáp ứng quá trình tạo máu.
        Thiếu sắt có thể gây thiếu máu dinh dưỡng, khiến trẻ xanh xao, mệt mỏi, giảm tập trung, chậm
        phát triển thể chất và trí tuệ, đồng thời dễ mắc bệnh nhiễm trùng.
      </p>
      <p>Nguồn sắt tự nhiên bao gồm: Thịt đỏ, gan, thịt gia cầm, trứng, rau bina, đậu, mận khô.</p>
      <h2>Khi nào cho trẻ dùng thực phẩm bổ sung?</h2>
      <p>Thực phẩm bổ sung có thể cần thiết trong các trường hợp sau:</p>
      <ul>
        <li>Trẻ kén ăn, ăn uống không đa dạng hoặc ăn nhiều thực phẩm chế biến sẵn.</li>
        <li>Trẻ mắc bệnh mạn tính (hen, rối loạn tiêu hóa…) hoặc đang dùng thuốc dài ngày.</li>
        <li>Trẻ ăn chay trường hoặc kiêng sữa (dễ thiếu sắt và canxi).</li>
        <li>Trẻ tiêu thụ nhiều nước ngọt có ga, ảnh hưởng hấp thu vi chất.</li>
        <li>Trẻ sinh non, nhẹ cân hoặc có rối loạn hấp thu.</li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
          alt="Lưu ý khi bổ sung vitamin và khoáng chất"
          priority
        />
      </figure>
      <h3>Lưu ý khi bổ sung vitamin và khoáng chất</h3>
      <p>
        Cách sử dụng đúng giúp hấp thu tối ưu, hạn chế nguy cơ ngộ độc hoặc tương tác thuốc - thực
        phẩm. Để đảm bảo việc bổ sung vitamin và khoáng chất cho trẻ an toàn, hiệu quả, cần lưu ý:
      </p>
      <ul>
        <li>Cất vitamin xa tầm tay trẻ để tránh trẻ tưởng là kẹo.</li>
        <li>Cho trẻ dùng vitamin sau bữa ăn, đặc biệt với vitamin tan trong dầu (A, D, E, K).</li>
        <li>Tham khảo ý kiến bác sĩ nếu trẻ đang dùng thuốc, tránh tương tác.</li>
        <li>Trẻ dưới 4 tuổi chỉ nên dùng thực phẩm bổ sung khi có chỉ định.</li>
        <li>Ưu tiên vitamin dạng nhai hoặc siro nếu trẻ khó uống viên.</li>
        <li>Không ép ăn hay dùng đồ ngọt làm "phần thưởng" cho việc ăn hết bữa.</li>
        <li>
          Không nên cho trẻ dùng liều quá cao. Các vitamin tan trong chất béo như A, D, E, K và
          khoáng chất như sắt có thể gây ngộ độc nếu dùng quá liều, việc bổ sung cần theo khuyến cáo
          của bác sĩ.
        </li>
      </ul>
    </CamNangLayout>
  );
}
