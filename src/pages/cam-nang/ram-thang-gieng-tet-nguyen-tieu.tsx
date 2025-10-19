import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { GetStaticProps } from 'next';
import Image from '@/components/CustomImage';

const title = 'Nguồn gốc và ý nghĩa ngày Rằm tháng Giêng (Tết Nguyên Tiêu)';
const description =
  'Khám phá Rằm tháng Giêng – Tết Nguyên Tiêu: nguồn gốc, ý nghĩa, nghi lễ cúng dâng sao giải hạn, cùng những điều nên làm để khởi đầu năm mới an lành, may mắn.';
const url = 'https://sinhphuctho.com/cam-nang/ram-thang-gieng-tet-nguyen-tieu.html';
const image = '/assets/images/cam-nang/ram-thang-gieng-tet-nguyen-tieu/hinh-1.webp';
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    images: [{ url: image }],
  },
  alternates: {
    canonical: url,
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
  const slug = 'ram-thang-gieng-tet-nguyen-tieu';
  const title = 'Nguồn gốc và ý nghĩa ngày Rằm tháng Giêng (Tết Nguyên Tiêu)';
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Rằm tháng Giêng, hay còn gọi là <strong>Tết Nguyên Tiêu</strong>, là một trong những ngày lễ
        lớn và quan trọng nhất trong năm theo văn hóa tâm linh của người Việt. Đây là dịp đầu tiên
        trong năm mà người dân bày tỏ lòng thành kính với thần Phật, tổ tiên và cầu mong một năm mới
        bình an, may mắn, hanh thông.
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
        sẽ cùng bạn tìm hiểu <strong>nguồn gốc, ý nghĩa và các nghi lễ truyền thống</strong> trong
        ngày Rằm tháng Giêng, giúp bạn chuẩn bị chu đáo và đúng phong tục nhất.
      </p>

      {/* I. Nguồn gốc */}
      <h2>1. Nguồn gốc của Rằm tháng Giêng (Tết Nguyên Tiêu)</h2>
      <p>
        Theo Phật giáo, Rằm tháng Giêng là ngày Đức Phật Thích Ca Mâu Ni mở hội thuyết pháp, được
        gọi là <em>“Thượng Nguyên”</em> – ngày rằm đầu tiên của năm mới. Người tu hành coi đây là
        thời điểm thích hợp để sám hối, tích đức và hướng thiện.
      </p>
      <p>
        Theo dân gian, ngày Rằm tháng Giêng bắt nguồn từ Trung Hoa cổ đại, khi vua Hán Vũ Đế tổ chức
        lễ cầu an, cúng dâng sao giải hạn vào ngày trăng tròn đầu tiên của năm. Về sau, phong tục
        này được du nhập và hòa quyện với tín ngưỡng dân gian Việt Nam, trở thành ngày lễ quan trọng
        trong đời sống tâm linh của người Việt.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Nguồn gốc Rằm tháng Giêng – Tết Nguyên Tiêu"
          priority
        />
      </figure>

      {/* II. Ý nghĩa */}
      <h2>2. Ý nghĩa của ngày Rằm tháng Giêng</h2>
      <ul>
        <li>
          <strong>Ngày lễ cầu an đầu năm:</strong> Người dân tin rằng cúng Rằm tháng Giêng giúp giải
          trừ vận hạn, mang lại bình an, tài lộc và thuận lợi suốt năm.
        </li>
        <li>
          <strong>Ngày thể hiện lòng hiếu kính tổ tiên:</strong> Các gia đình dâng hương, dâng lễ
          vật tưởng nhớ công đức ông bà, tổ tiên.
        </li>
        <li>
          <strong>Ngày hướng thiện, tu tâm:</strong> Theo đạo Phật, làm việc thiện, ăn chay, phóng
          sinh trong ngày này sẽ được tích đức, tạo phước cho bản thân và gia đình.
        </li>
        <li>
          <strong>Ngày sum họp, đoàn viên:</strong> Rằm tháng Giêng là dịp đầu năm để con cháu tề
          tựu, cùng dâng lễ và chúc tụng nhau những điều tốt đẹp.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Ý nghĩa Rằm tháng Giêng"
          priority
        />
      </figure>

      {/* III. Cách cúng */}
      <h2>3. Cách chuẩn bị lễ cúng Rằm tháng Giêng đúng chuẩn</h2>
      <p>
        Theo phong tục Việt Nam, ngày này thường có hai lễ chính: <strong>cúng Phật</strong> và{' '}
        <strong>cúng gia tiên</strong>.
      </p>

      <h3>3.1. Lễ cúng Phật</h3>
      <ul>
        <li>Chuẩn bị mâm cỗ chay: xôi, chè, hoa quả, hương đèn, nước sạch.</li>
        <li>
          Dâng lễ với lòng thành, không cần cầu kỳ, chủ yếu thể hiện tâm hướng thiện, tri ân Tam
          Bảo.
        </li>
      </ul>

      <h3>3.2. Lễ cúng gia tiên</h3>
      <ul>
        <li>
          Có thể dùng <strong>mâm cỗ mặn</strong> gồm: gà luộc, xôi gấc, giò chả, canh măng, rượu,
          hoa quả.
        </li>
        <li>
          Nếu cúng ngoài trời, nên có thêm vàng mã, hương đèn, trầu cau và giấy khấn riêng cho thần
          linh.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Mâm cúng Rằm tháng Giêng"
          priority
        />
      </figure>

      {/* IV. Lưu ý */}
      <h2>4. Những điều nên và không nên làm trong ngày Rằm tháng Giêng</h2>
      <ul>
        <li>Nên ăn chay, làm việc thiện, nói lời hay để khởi đầu năm mới thuận lợi.</li>
        <li>Không nên sát sinh, nói lời ác hoặc tranh cãi, gây mất hòa khí trong gia đình.</li>
        <li>Giữ tâm thanh tịnh, tránh xa các hành vi tiêu cực, mê tín thái quá.</li>
        <li>Không đốt quá nhiều vàng mã, tránh lãng phí và ô nhiễm môi trường.</li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
          alt="Những điều nên làm ngày Rằm tháng Giêng"
          priority
        />
      </figure>

      {/* V. FAQ */}
      <h2>5. Câu hỏi thường gặp về Rằm tháng Giêng</h2>
      <h3>5.1. Rằm tháng Giêng nên cúng ngày nào?</h3>
      <p>
        Có thể cúng vào ngày 14 hoặc 15 tháng Giêng âm lịch, tùy điều kiện gia đình. Tuy nhiên, tốt
        nhất nên cúng vào chính Rằm (15) để thể hiện lòng thành trọn vẹn.
      </p>

      <h3>5.2. Rằm tháng Giêng có cần cúng sao giải hạn không?</h3>
      <p>
        Việc dâng sao giải hạn là phong tục dân gian phổ biến, giúp cầu an và hóa giải vận xấu. Tuy
        nhiên, quan trọng nhất vẫn là tâm hướng thiện và làm việc tốt trong suốt năm.
      </p>

      <h3>5.3. Có nên đi chùa Rằm tháng Giêng không?</h3>
      <p>
        Rất nên. Người Việt thường đi chùa để cầu bình an, sức khỏe và may mắn. Đây cũng là dịp để
        thanh lọc tâm hồn, bắt đầu năm mới an lạc.
      </p>

      {/* VI. CTA */}
      <h2>6. Kết luận và liên hệ hỗ trợ</h2>
      <p>
        Ngày Rằm tháng Giêng không chỉ là lễ hội truyền thống mang đậm bản sắc văn hóa dân tộc mà
        còn là dịp nhắc nhở mỗi người sống hướng thiện, báo hiếu và vun đắp những điều tốt lành. Dù
        cúng đơn giản hay cầu kỳ, điều quan trọng nhất vẫn là <strong>tấm lòng thành kính</strong>.
      </p>
      <p>
        Nếu bạn cần tìm hiểu thêm về{' '}
        <strong>nghi lễ tâm linh, dịch vụ mai táng, hỏa táng hoặc an táng trọn gói</strong>, hãy
        truy cập{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>
        . Chúng tôi luôn đồng hành cùng bạn, mang đến sự chu toàn và bình an trong từng nghi lễ của
        gia đình Việt.
      </p>
    </CamNangLayout>
  );
}
