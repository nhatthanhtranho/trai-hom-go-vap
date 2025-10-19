import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Image from '@/src/components/CustomImage';
import Link from 'next/link';
import type { GetStaticProps, Metadata } from 'next';

const slug = 'le-vu-lan-va-y-nghia-bong-hong-cai-ao';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
export const metadata: Metadata = {
  alternates: {
    canonical: url,
  },
  title: 'Lễ Vu Lan và ý nghĩa Bông hồng cài áo – Văn hóa báo hiếu Việt Nam',
  description:
    'Khám phá nguồn gốc, ý nghĩa và phong tục lễ Vu Lan cùng nghi thức Bông hồng cài áo trong văn hóa Việt Nam. Ngày Vu Lan báo hiếu là dịp tri ân cha mẹ, tổ tiên và lan tỏa lòng hiếu nghĩa.',
  keywords: [
    'lễ Vu Lan',
    'Vu Lan báo hiếu',
    'Bông hồng cài áo',
    'ngày Vu Lan',
    'ý nghĩa Vu Lan',
    'ngày báo hiếu',
    'lễ Phật giáo tháng 7',
    'xá tội vong nhân',
  ],
  openGraph: {
    title: 'Lễ Vu Lan và ý nghĩa Bông hồng cài áo – Văn hóa báo hiếu Việt Nam',
    description:
      'Tìm hiểu lễ Vu Lan và nghi thức Bông hồng cài áo – phong tục giàu ý nghĩa trong văn hóa Việt Nam, gắn liền với tinh thần hiếu thảo và lòng biết ơn cha mẹ, tổ tiên.',
    url: `https://sinhphuctho.com/cam-nang/${slug}.html`,
    type: 'article',
    images: [
      {
        url: `https://sinhphuctho.com/assets/images/cam-nang/${slug}/hinh-1.webp`,
        width: 1200,
        height: 630,
        alt: 'Lễ Vu Lan và ý nghĩa Bông hồng cài áo',
      },
    ],
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
  return (
    <CamNangLayout title="Lễ Vu Lan và ý nghĩa Bông hồng cài áo trong văn hóa Việt Nam">
      <h1>Lễ Vu Lan và ý nghĩa Bông hồng cài áo trong văn hóa Việt Nam</h1>
      <p>
        Lễ Vu Lan báo hiếu, diễn ra vào ngày rằm tháng 7 âm lịch hằng năm, là một trong những ngày
        lễ quan trọng của Phật giáo và của đời sống tâm linh người Việt. Đây không chỉ là dịp để mỗi
        người bày tỏ lòng biết ơn với cha mẹ, ông bà tổ tiên mà còn là thời khắc để khơi dậy tình
        yêu thương, nhắc nhở con cháu về đạo lý uống nước nhớ nguồn. Bên cạnh đó, nghi thức{' '}
        <strong>“Bông hồng cài áo”</strong> trở thành một phong tục ý nghĩa, gắn liền với lễ Vu Lan,
        giúp chúng ta thêm trân trọng những người thân còn hiện diện trong cuộc đời.
      </p>
      <p>
        Trong chuyên mục{' '}
        <Link
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-blue-600 font-medium underline"
        >
          Cẩm nang tang lễ Sinh Phúc Thọ
        </Link>
        , bạn có thể tìm thấy nhiều thông tin hữu ích về phong tục, nghi lễ và ý nghĩa của ngày Vu
        Lan để áp dụng trong đời sống tâm linh và gia đình.
      </p>

      {/* Lễ Vu Lan là gì */}
      <h2>Lễ Vu Lan là gì?</h2>
      <p>
        Lễ Vu Lan, còn gọi là lễ báo hiếu, bắt nguồn từ câu chuyện Bồ Tát Mục Kiền Liên cứu mẹ. Đây
        là dịp quan trọng để tưởng nhớ công ơn sinh thành, khơi dậy lòng hiếu thảo và tinh thần
        hướng thiện trong cộng đồng.
      </p>
      <p>
        Sau khi chứng quả A La Hán, Mục Kiền Liên nhìn thấy mẹ mình bị đọa làm ngạ quỷ đói khát.
        Thương mẹ, ông dùng phép thần thông dâng cơm nhưng cơm hóa thành lửa. Không còn cách nào,
        ông cầu xin Đức Phật chỉ dạy. Phật khuyên ông lập đàn chay, thỉnh chư tăng khắp mười phương
        cùng cầu nguyện. Nhờ vậy, mẹ ông mới được siêu thoát.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Nguồn gốc lễ Vu Lan báo hiếu từ câu chuyện Mục Kiền Liên"
          priority
        />
      </figure>

      <h2>Nguồn gốc và lịch sử lễ Vu Lan</h2>
      <p>
        Ngày lễ Vu Lan có nguồn gốc từ kinh điển Phật giáo, cụ thể là Kinh Vu Lan Bồn. Từ Ấn Độ, lễ
        này được truyền sang nhiều quốc gia châu Á như Trung Quốc, Việt Nam, Nhật Bản... Mỗi nơi có
        một cách tổ chức khác nhau nhưng tinh thần hiếu nghĩa vẫn được giữ nguyên.
      </p>
      <p>
        Tại Việt Nam, Vu Lan gắn liền với đạo lý truyền thống của dân tộc, hòa quyện cùng tín ngưỡng
        thờ cúng tổ tiên, tạo nên một ngày lễ giàu ý nghĩa nhân văn.
      </p>

      <h2>Bông hồng cài trên ngực áo</h2>
      <p>
        Năm 1962, thiền sư Thích Nhất Hạnh đã khởi xướng nghi thức “Bông hồng cài áo” trong một buổi
        giảng pháp tại Nhật Bản. Ý tưởng này nhanh chóng lan tỏa và trở thành một phong tục đẹp
        trong mùa Vu Lan.
      </p>

      <ul>
        <li>
          <strong>Hoa hồng đỏ:</strong> dành cho người còn cả cha và mẹ.
        </li>
        <li>
          <strong>Hoa hồng nhạt:</strong> dành cho người đã mất cha hoặc mẹ.
        </li>
        <li>
          <strong>Hoa hồng trắng:</strong> dành cho người mồ côi cả cha lẫn mẹ.
        </li>
      </ul>

      <figure>
        <Image
          className="object-contain object-left"
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Bông hồng cài áo - Biểu tượng trong lễ Vu Lan"
          priority
        />
      </figure>

      <p>
        Nghi thức này không chỉ thể hiện tình cảm gia đình mà còn nhắc nhở mỗi người hãy biết trân
        trọng hiện tại, yêu thương và hiếu thuận với cha mẹ khi còn có thể.
      </p>

      {/* Ý nghĩa */}
      <h2>Ý nghĩa của lễ Vu Lan</h2>
      <h3>1. Tôn vinh công ơn cha mẹ</h3>
      <p>
        Vu Lan là dịp để con cháu báo đáp công ơn sinh thành, dưỡng dục của cha mẹ. Đây cũng là cơ
        hội để bày tỏ tình cảm, thể hiện sự quan tâm và chia sẻ với các bậc sinh thành.
      </p>

      <h3>2. Lan tỏa tinh thần hiếu nghĩa</h3>
      <p>
        Ngày lễ này khuyến khích mọi người sống hiếu thảo, giữ gìn truyền thống gia đình và phát huy
        những giá trị đạo đức tốt đẹp trong xã hội.
      </p>

      <h3>3. Khuyến khích làm việc thiện</h3>
      <p>
        Lễ Vu Lan cũng là dịp để làm việc thiện, cúng dường, phóng sinh, chia sẻ với những người có
        hoàn cảnh khó khăn, qua đó tích lũy công đức và lan tỏa yêu thương.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Ý nghĩa nhân văn sâu sắc của lễ Vu Lan báo hiếu"
          priority
        />
      </figure>

      <h2>Câu hỏi thường gặp về Lễ Vu Lan và Bông hồng cài áo</h2>

      <h3>Lễ Vu Lan có phải là ngày xá tội vong nhân không?</h3>
      <p>
        Nhiều người thường nhầm lẫn Vu Lan với ngày xá tội vong nhân. Thực tế, hai ngày này diễn ra
        cùng thời điểm (rằm tháng 7 âm lịch) nhưng khác nhau về ý nghĩa. Vu Lan là lễ báo hiếu trong
        Phật giáo, còn xá tội vong nhân là tín ngưỡng dân gian thờ cúng cô hồn.
      </p>

      <h3>Nghi thức bông hồng cài áo có bắt buộc không?</h3>
      <p>
        Đây là một nghi thức mang tính biểu tượng, không bắt buộc. Tuy nhiên, việc tham gia giúp mỗi
        người ý thức rõ hơn về tình cảm gia đình, từ đó sống trọn vẹn hơn với cha mẹ.
      </p>

      <h3>Trong ngày Vu Lan nên làm gì để báo hiếu cha mẹ?</h3>
      <p>
        Ngoài việc đi chùa, cúng dường, tụng kinh cầu siêu, bạn có thể thể hiện lòng hiếu thảo bằng
        những hành động nhỏ: chăm sóc cha mẹ, dành thời gian bên gia đình, làm việc thiện và hồi
        hướng công đức cho cha mẹ đã khuất.
      </p>

      <h2>Kết luận</h2>
      <p>
        Lễ Vu Lan và phong tục Bông hồng cài áo là minh chứng rõ nét cho giá trị đạo hiếu trong văn
        hóa Việt Nam. Đây là dịp không chỉ để con cháu tri ân cha mẹ, tổ tiên mà còn để cộng đồng
        cùng nhau lan tỏa yêu thương, xây dựng một xã hội nhân văn hơn.
      </p>
      <p>
        Để tìm hiểu thêm về các nghi thức tâm linh, phong tục tang lễ và kiến thức văn hóa dân gian,
        bạn có thể tham khảo tại{' '}
        <Link
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-blue-600 font-medium underline"
        >
          Cẩm nang tang lễ Sinh Phúc Thọ
        </Link>
        .
      </p>
    </CamNangLayout>
  );
}
