// app/cam-nang/cung-ong-cong-ong-tao-truyen-thong-va-luu-y/page.tsx
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from 'next/image';
import FaqSection from '@/components/FAQs/FAQs';
import { GetStaticProps } from 'next';

const title = 'Cúng Ông Công Ông Táo – Truyền Thống và Lưu Ý Quan Trọng';
const description =
  'Tìm hiểu ý nghĩa ngày cúng Ông Công Ông Táo 23 tháng Chạp, hướng dẫn chuẩn bị lễ vật, bài khấn và những lưu ý quan trọng để tiễn Táo Quân về trời trọn vẹn, may mắn.';
const path = 'cam-nang/cung-ong-cong-ong-tao-truyen-thong-va-luu-y';
const image = '/assets/images/cam-nang/cung-ong-cong-ong-tao-truyen-thong-va-luu-y/banner.webp';

export const metadata = {
  title,
  description,
  path,
  openGraph: {
    title,
    description,
    type: 'article',
    siteName: 'Sinh Phúc Thọ',
    locale: 'vi_VN',
    images: [{ url: image }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
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
  const slug = 'cung-ong-cong-ong-tao-truyen-thong-va-luu-y';
  const title = 'Cúng Ông Công Ông Táo – Truyền Thống và Lưu Ý Quan Trọng';

  const faqs = [
    {
      question: 'Ngày cúng Ông Công Ông Táo là ngày nào?',
      answer:
        'Theo truyền thống, lễ cúng Ông Công Ông Táo diễn ra vào ngày 23 tháng Chạp âm lịch hằng năm – thời điểm Táo Quân lên chầu trời để báo cáo việc tốt xấu của gia chủ trong năm.',
    },
    {
      question: 'Có cần cúng cá chép thật không?',
      answer:
        'Gia đình có thể cúng cá chép sống để phóng sinh, tượng trưng cho việc tiễn Táo Quân về trời. Tuy nhiên, hiện nay có thể thay thế bằng cá chép giấy tùy điều kiện mỗi nhà.',
    },
    {
      question: 'Cúng Ông Táo trong nhà hay ngoài sân?',
      answer:
        'Thông thường, lễ cúng được tiến hành trong bếp hoặc trước bàn thờ Táo Quân. Nếu nhà có bàn thờ riêng ngoài trời thì có thể kết hợp cúng Ông Công ngoài sân.',
    },
    {
      question: 'Giờ cúng Ông Công Ông Táo tốt nhất là khi nào?',
      answer:
        'Nên cúng vào buổi sáng hoặc trước 12 giờ trưa ngày 23 tháng Chạp để kịp lúc Táo Quân “lên chầu trời”. Tránh cúng quá trễ sau giờ Ngọ.',
    },
  ];

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Ngày 23 tháng Chạp âm lịch hằng năm là dịp đặc biệt trong đời sống tâm linh của người Việt –
        ngày lễ <strong>cúng Ông Công Ông Táo</strong>. Đây không chỉ là nghi lễ tiễn Táo Quân về
        trời, mà còn là dịp để mỗi gia đình nhìn lại một năm đã qua, gửi gắm ước nguyện cho năm mới
        bình an, thuận lợi.
      </p>

      <p>
        Trong bài viết này,{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        sẽ chia sẻ nguồn gốc, ý nghĩa, lễ vật và những lưu ý quan trọng khi cúng Ông Công Ông Táo
        sao cho đúng phong tục, giúp gia đình bạn thực hiện trọn vẹn nghi lễ truyền thống.
      </p>

      {/* 1. Nguồn gốc và ý nghĩa */}
      <h2>1. Nguồn gốc ngày cúng Ông Công Ông Táo</h2>
      <p>
        Tục cúng Ông Công Ông Táo có nguồn gốc từ tín ngưỡng dân gian Việt Nam, bắt nguồn từ câu
        chuyện về <strong>ba vị thần Táo Quân</strong> – Thổ Công, Thổ Địa, Thổ Kỳ – chuyên cai quản
        nhà cửa, bếp núc và ghi chép công đức, lỗi lầm của gia chủ trong suốt một năm.
      </p>
      <p>
        Vào ngày 23 tháng Chạp, Táo Quân cưỡi cá chép bay về trời để tâu Ngọc Hoàng những việc đã
        xảy ra dưới trần gian. Do đó, người dân làm lễ tiễn Ông Táo với mong muốn báo cáo điều tốt
        lành, cầu bình an, phúc đức cho năm mới.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Lễ cúng Ông Công Ông Táo 23 tháng Chạp"
          priority
        />
      </figure>

      {/* 2. Ý nghĩa tâm linh */}
      <h2>2. Ý nghĩa tâm linh của lễ cúng Ông Công Ông Táo</h2>
      <ul>
        <li>
          <strong>Tri ân các vị thần bếp:</strong> thể hiện lòng biết ơn đến các thần linh đã phù hộ
          cho gia đình suốt năm qua.
        </li>
        <li>
          <strong>Tịnh hóa không gian sống:</strong> dịp để dọn dẹp nhà cửa, thanh lọc năng lượng
          cũ, đón vận khí mới.
        </li>
        <li>
          <strong>Gắn kết gia đình:</strong> các thành viên cùng nhau chuẩn bị mâm lễ, thể hiện tinh
          thần đoàn viên.
        </li>
        <li>
          <strong>Khởi đầu năm mới thuận lợi:</strong> khi tiễn Táo Quân lên trời trong niềm tôn
          kính, gia chủ tin rằng sẽ được phù hộ bình an, hanh thông.
        </li>
      </ul>

      {/* 3. Lễ vật cúng ông Công ông Táo */}
      <h2>3. Lễ vật cúng Ông Công Ông Táo</h2>
      <p>Mâm cỗ cúng Ông Táo thường bao gồm:</p>
      <ul>
        <li>Bộ áo mũ, hia Táo Quân (2 ông, 1 bà) bằng giấy màu.</li>
        <li>Cá chép sống hoặc cá chép giấy để làm phương tiện đưa Táo Quân về trời.</li>
        <li>Mâm cỗ mặn gồm: gà luộc, xôi gấc, canh, chả giò, rượu, trầu cau…</li>
        <li>Hương, hoa, đèn, trà và trái cây ngũ quả.</li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Lễ vật cúng Ông Công Ông Táo"
          priority
        />
      </figure>

      {/* 4. Cách cúng và bài khấn */}
      <h2>4. Cách cúng và bài khấn Ông Công Ông Táo</h2>
      <p>
        Gia đình nên làm lễ vào buổi sáng ngày 23 tháng Chạp, đặt mâm cỗ trên bàn thờ hoặc trong
        bếp. Khi khấn, gia chủ thể hiện lòng thành kính, đọc lời cầu chúc bình an, cảm tạ Táo Quân.
      </p>
      <p>
        Sau lễ, cá chép sống được mang ra sông hồ phóng sinh, thể hiện lòng nhân ái và ước mong Táo
        Quân đi đường thuận lợi.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Cá chép tiễn Ông Táo về trời"
          priority
        />
      </figure>

      {/* 5. Những lưu ý quan trọng */}
      <h2>5. Những lưu ý quan trọng khi cúng Ông Công Ông Táo</h2>
      <ul>
        <li>Cúng trước 12h trưa ngày 23 tháng Chạp, tránh cúng muộn vì “cửa trời đã đóng”.</li>
        <li>Không đốt quá nhiều vàng mã, chỉ dùng lễ vật tượng trưng, tránh lãng phí.</li>
        <li>Cá chép phóng sinh nhẹ nhàng, không thả túi nilon xuống nước, bảo vệ môi trường.</li>
        <li>Dọn dẹp bàn thờ, bếp núc sạch sẽ trước khi cúng để thể hiện lòng tôn kính.</li>
        <li>Nên chuẩn bị lễ vật đủ đầy nhưng không phô trương – quan trọng là sự thành tâm.</li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
          alt="Lưu ý khi cúng Ông Táo"
          priority
        />
      </figure>

      {/* 6. Kết luận và CTA */}
      <h2>6. Kết luận</h2>
      <p>
        Lễ cúng Ông Công Ông Táo là một trong những nét đẹp văn hóa sâu sắc của người Việt, thể hiện
        lòng hiếu kính và tri ân đối với các vị thần linh. Việc chuẩn bị lễ vật chu đáo, cúng đúng
        thời điểm và giữ gìn phong tục truyền thống chính là cách để mỗi gia đình khởi đầu năm mới
        an lành, viên mãn.
      </p>

      <p>
        Nếu bạn quan tâm đến các nghi lễ truyền thống, dịch vụ{' '}
        <strong>tang lễ trọn gói, hỏa táng, an táng</strong> theo phong tục Việt, hãy liên hệ với{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        qua hotline <strong>0913 673 661</strong> để được tư vấn chu đáo, tận tâm và phù hợp với tín
        ngưỡng gia đình bạn.
      </p>

      <FaqSection faqs={faqs} title="CÂU HỎI THƯỜNG GẶP VỀ LỄ CÚNG ÔNG CÔNG ÔNG TÁO" align="left" />
    </CamNangLayout>
  );
}
