// app/cam-nang/[slug]/page.tsx

import Image from 'next/image';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'nhung-con-ho-keo-dai-nguyen-do-tu-dau';
const title = 'Những cơn ho kéo dài: Nguyên do từ đâu?';
const description =
  'Ho là một trong những phản xạ tự nhiên có thể xuất hiện đột ngột hoặc kéo dài. Trong đó, ho không ngừng và mạn tính là dấu hiệu của nhiều vấn đề sức khỏe đáng chú ý.';

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
          url: `/assets/images/cam-nang/${slug}/banner.webp`,
          width: 960,
          height: 597,
          alt: 'Những cơn ho không ngừng và mạn tính',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
          width: 735,
          height: 412,
          alt: 'Ô nhiễm không khí',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-2.webp`,
          width: 600,
          height: 397,
          alt: 'Nguy hiểm từ khói thuốc lá',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-3.webp`,
          width: 735,
          height: 509,
          alt: 'Ho gà và những điều cần biết',
        },
      ],
      type: 'article',
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/assets/images/cam-nang/${slug}/banner.webp`],
    },
  };
}

export default function Article() {
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Ho là một trong những phản xạ tự nhiên có thể xuất hiện đột ngột hoặc kéo dài. Trong đó, ho
        không ngừng và mạn tính là dấu hiệu của nhiều vấn đề sức khỏe đáng chú ý.
      </p>
      <p>
        Ho là phản xạ của cơ thể nhằm bảo vệ khỏi vi trùng hoặc tác nhân gây kích ứng. Ho có thể gây
        lo ngại khi trầm trọng, quá nhiều, đặc biệt là nếu ho kéo dài.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/banner.webp`}
          alt="Những cơn ho không ngừng và mạn tính"
          priority
        />
      </figure>

      <h2>Ô nhiễm không khí</h2>
      <p>
        Theo tạp chí Health, nhiều chất ô nhiễm và tác nhân kích thích trong không khí — như bụi
        mịn, khói xe, hóa chất công nghiệp hay khói thuốc lá — có thể gây ra tình trạng ho dai dẳng
        kéo dài. Khi hít phải những hạt bụi và khí độc này, đường hô hấp bị kích ứng, khiến cơ thể
        phản xạ bằng cách ho liên tục để loại bỏ chất lạ ra ngoài.
      </p>
      <p>
        Ngay cả khi chỉ tiếp xúc trong thời gian ngắn, người khỏe mạnh cũng có thể gặp phải các
        triệu chứng như ho khan, ho có đờm, đau rát cổ họng, hoặc cảm giác tức ngực, khó thở. Với
        những người có bệnh nền về phổi như viêm phế quản, hen suyễn hay bệnh phổi tắc nghẽn mãn
        tính (COPD), tình trạng này càng dễ trở nên nghiêm trọng hơn.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Ô nhiễm không khí"
          priority
        />
      </figure>
      <p>
        Các chuyên gia khuyến cáo nên hạn chế ra ngoài vào những ngày chất lượng không khí kém, đeo
        khẩu trang lọc bụi mịn (N95 hoặc tương đương) khi cần di chuyển ngoài trời, và giữ không
        gian sống thông thoáng, trong lành để bảo vệ hệ hô hấp.
      </p>
      <p>
        Khói cũng có thể làm trầm trọng thêm các triệu chứng dị ứng hoặc hen suyễn. Các bào tử nấm
        mốc tìm thấy trong và xung quanh nhà cũng gây ra chứng thở khò khè và ho nếu bạn hít phải.
      </p>
      <h2>Hút thuốc</h2>
      <p>
        Người hút thuốc lá thường xuyên bị ho kéo dài do sự tích tụ của hàng nghìn hóa chất độc hại
        trong khói thuốc. Khi hút thuốc, các chất như nicotine, hắc ín, carbon monoxide và nhiều hợp
        chất độc khác sẽ xâm nhập trực tiếp vào đường thở và phổi, gây kích ứng niêm mạc và làm tổn
        thương các tế bào lông mao – những tế bào có nhiệm vụ lọc bụi và chất nhầy ra khỏi phổi.
      </p>
      <p>
        Khi các tế bào lông mao bị tê liệt hoặc phá hủy, phổi không còn khả năng tự làm sạch, khiến
        chất nhầy và độc tố tích tụ lại. Cơ thể phải phản ứng bằng cách ho liên tục để tống chúng ra
        ngoài, tạo nên “ho của người hút thuốc” – một dạng ho mạn tính đặc trưng ở người hút thuốc
        lâu năm.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Nguy hiểm từ khói thuốc lá"
          priority
        />
      </figure>
      <p>
        Ban đầu, cơn ho có thể chỉ là ho khan nhẹ vào buổi sáng, nhưng theo thời gian, khi tổn
        thương phổi tiến triển, cơn ho thường trở nên nặng hơn, kèm đờm đặc, có màu vàng hoặc xanh,
        thậm chí đôi khi lẫn máu. Người hút thuốc lâu năm cũng có nguy cơ cao mắc các bệnh viêm phế
        quản mạn tính, khí phế thũng và ung thư phổi.
      </p>

      <p>
        Các chuyên gia y tế nhấn mạnh rằng cách duy nhất để giảm và chấm dứt ho của người hút thuốc
        là ngừng hút hoàn toàn. Sau khi bỏ thuốc, chức năng của phổi và lông mao dần được phục hồi,
        lượng đờm giảm, và cơn ho sẽ thuyên giảm rõ rệt chỉ sau vài tuần đến vài tháng, tùy theo
        thời gian hút thuốc trước đó.
      </p>
      <h2>Nhiễm trùng đường hô hấp</h2>
      <p>
        Ho là một trong những triệu chứng phổ biến nhất của cảm lạnh, cúm và các bệnh nhiễm trùng
        đường hô hấp khác. Những bệnh nhiễm trùng này gây cản trở quá trình hô hấp bình thường.
      </p>
      <p>
        Các triệu chứng khác, chẳng hạn nghẹt mũi và sốt, là dấu hiệu rõ ràng cho thấy ho do nhiễm
        virus. Ho có thể kéo dài hơn tất cả triệu chứng khác nếu đường dẫn khí trong phổi vẫn nhạy
        cảm và bị viêm.
      </p>
      <h2>Bệnh phổi tắc nghẽn mạn tính (COPD)</h2>
      <p>
        Các vấn đề về phổi, chẳng hạn COPD, có thể dẫn đến ho kéo dài. COPD là thuật ngữ bao gồm hai
        tình trạng chính: khí phế thũng và viêm phế quản mạn tính.
      </p>
      <p>
        Khí phế thũng làm tổn thương thành giữa nhiều túi khí. Tổn thương này khiến các túi khí mất
        hình dạng và trở nên mềm nhũn. Thành túi khí cũng có thể bị phá hủy. Các túi khí có kích
        thước lớn hơn và ít hơn thay vì nhiều túi khí nhỏ, và lượng khí trao đổi giảm.
      </p>
      <p>
        Hầu hết người mắc COPD đều bị cả khí phế thũng và viêm phế quản mạn tính. Mức độ nghiêm
        trọng của mỗi bệnh khác nhau tùy từng người. Các triệu chứng khác ngoài ho bao gồm thở khò
        khè, khó thở và tức ngực.
      </p>
      <h2>Bệnh ho gà</h2>
      <p>
        Thuốc ức chế men chuyển angiotensin (ACE inhibitors) là nhóm thuốc thường được bác sĩ kê để
        điều trị suy tim, tăng huyết áp và bảo vệ chức năng thận ở bệnh nhân tiểu đường. Tuy mang
        lại nhiều lợi ích trong việc kiểm soát huyết áp và giảm nguy cơ biến chứng tim mạch, nhưng
        loại thuốc này lại có một tác dụng phụ phổ biến là gây ho khan kéo dài.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Ho gà và những điều cần biết"
          priority
        />
      </figure>
      <p>
        Theo các nghiên cứu y học, khoảng 20% người dùng thuốc ACE (tức là 1 trong 5 người) có thể
        gặp phải triệu chứng ho dai dẳng, thường xuất hiện vài ngày đến vài tuần sau khi bắt đầu
        dùng thuốc, và có thể kéo dài trong suốt quá trình điều trị. Cơn ho này thường không kèm
        theo đờm, không gây khó thở nghiêm trọng, nhưng lại gây khó chịu, mất ngủ và ảnh hưởng đến
        chất lượng cuộc sống của người bệnh.
      </p>
      <p>
        Mặc dù đã có nhiều nghiên cứu, cơ chế chính xác gây ra ho do thuốc ACE vẫn chưa được hiểu rõ
        hoàn toàn. Tuy nhiên, các nhà khoa học cho rằng nguyên nhân có thể liên quan đến sự tích tụ
        của bradykinin và chất P (Substance P) trong đường hô hấp — những chất này kích thích các
        thụ thể cảm giác trong niêm mạc phổi và cổ họng, dẫn đến phản xạ ho.
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
