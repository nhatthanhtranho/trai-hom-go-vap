// app/cam-nang/[slug]/page.tsx
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'nhung-thuc-pham-la-kho-canxi-quen-thuoc-trong-cho-viet';
const title = 'Những thực phẩm là "kho canxi" quen thuộc trong chợ Việt';
const description =
  'Canxi là khoáng chất thiết yếu, không chỉ giúp xương và răng chắc khỏe mà còn tham gia vào nhiều chức năng quan trọng của cơ thể như co cơ, dẫn truyền thần kinh và điều hòa nhịp tim. Việc bổ sung đủ canxi mỗi ngày là nền tảng để duy trì sức khỏe hệ xương, phòng ngừa loãng xương và hỗ trợ hoạt động ổn định của toàn cơ thể.';

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
          height: 641,
          alt: 'Những thực phẩm giàu canxi',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
          width: 700,
          height: 469,
          alt: 'Các loại hạt',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-2.webp`,
          width: 452,
          height: 301,
          alt: 'Canxi từ sữa',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-3.webp`,
          width: 735,
          height: 490,
          alt: 'Đậu hũ giàu canxi',
        },
        {
          url: `/assets/images/cam-nang/${slug}/hinh-4.webp`,
          width: 626,
          height: 313,
          alt: 'Phô mai',
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
        Ngoài sữa và chế phẩm từ sữa, nhiều thực phẩm quen thuộc như cá nhỏ ăn cả xương, đậu phụ
        cũng chứa lượng canxi dồi dào.
      </p>
      <p>
        Canxi là khoáng chất thiết yếu, không chỉ giúp xương và răng chắc khỏe mà còn tham gia vào
        nhiều chức năng quan trọng của cơ thể như co cơ, dẫn truyền thần kinh và điều hòa nhịp tim.
        Việc bổ sung đủ canxi mỗi ngày là nền tảng để duy trì sức khỏe hệ xương, phòng ngừa loãng
        xương và hỗ trợ hoạt động ổn định của toàn cơ thể.
      </p>
      <p>Dưới đây là những thực phẩm giàu canxi mà bạn nên bổ sung vào chế độ ăn hàng ngày.</p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/banner.webp`}
          alt="Những thực phẩm giàu canxi"
          priority
        />
      </figure>

      <h2>Các loại hạt</h2>
      <p>
        Theo Times of India, hạt mè đã được sử dụng trong ẩm thực từ hàng nghìn năm trước, và đến
        nay khoa học tiếp tục chứng minh giá trị của chúng. Mè là nguồn canxi dồi dào, giúp xương
        chắc khỏe, đồng thời cung cấp chất béo lành mạnh hỗ trợ tim mạch. Không chỉ vậy, mè còn chứa
        lignan - hợp chất có tác dụng cân bằng hormone, mang lại lợi ích lâu dài cho sức khỏe.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Các loại hạt"
          priority
        />
      </figure>
      <p>
        Bên cạnh đó, hạt chia cũng nổi bật không kém nhờ hàm lượng canxi cao. Chỉ 100 g hạt chia có
        thể cung cấp hơn 600 mg canxi. Bên cạnh đó, theo Runner's World, chúng cung cấp protein thực
        vật chất lượng cao giúp phục hồi cơ, cùng chất xơ hòa tan và không hòa tan giúp duy trì năng
        lượng bền bỉ và ổn định đường huyết.
      </p>
      <h2>Sữa</h2>
      <p>
        Theo Healthline, sữa là nguồn cung cấp protein chất lượng cao vì chứa đủ 9 axit amin thiết
        yếu mà cơ thể không thể tự tổng hợp. Trong sữa, hai loại protein chính là casein (chiếm phần
        lớn) và whey (khoảng một phần năm).
      </p>
      <p>
        Không chỉ tốt cho phát triển cơ, sữa còn được xem là thực phẩm quan trọng giúp duy trì hệ
        xương chắc khỏe. Nhờ chứa canxi, phốt pho, kali, protein, vitamin D và vitamin K2, sữa góp
        phần ổn định mật độ xương và ngăn ngừa loãng xương.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Canxi từ sữa"
          priority
        />
      </figure>
      <p>
        Nhiều nghiên cứu cho thấy những người duy trì thói quen uống sữa hoặc sử dụng sản phẩm từ
        sữa có nguy cơ loãng xương, gãy xương thấp hơn, đặc biệt ở người lớn tuổi. Protein trong sữa
        còn chiếm khoảng một phần ba khối lượng xương, giúp giảm tình trạng mất xương - nhất là ở
        phụ nữ có chế độ ăn thiếu canxi.
      </p>
      <h2>Đậu hũ</h2>
      <p>
        Theo WebMD, đậu hũ là thực phẩm giàu dinh dưỡng mang lại nhiều lợi ích cho sức khỏe. Với tim
        mạch, những người thường xuyên ăn đậu hũ và các sản phẩm từ đậu nành được ghi nhận có nguy
        cơ mắc bệnh tim thấp hơn nhờ hàm lượng chất béo lành mạnh và rất ít chất béo bão hòa.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Đậu hũ giàu canxi"
          priority
        />
      </figure>
      <p>
        Một số nghiên cứu còn cho thấy việc bổ sung đậu hũ vào chế độ ăn có thể giúp hạ mức LDL -
        loại cholesterol “xấu” liên quan đến xơ vữa động mạch. Đậu hũ cũng hỗ trợ sức khỏe xương nhờ
        chứa nhiều canxi, magie và protein, giúp duy trì mật độ xương ổn định, giảm nguy cơ loãng
        xương và gãy xương ở người cao tuổi.
      </p>
      <h2>Phô mai</h2>
      <p>
        Nhiều nghiên cứu cho thấy những người thường xuyên ăn phô mai có mật độ khoáng xương cao hơn
        và nguy cơ gãy xương thấp hơn, nhờ hàm lượng protein, canxi và vitamin D dồi dào trong thực
        phẩm này. Đặc biệt, các loại phô mai lên men như cheddar hay parmesan được xem là mang lại
        hiệu quả ổn định và rõ rệt nhất đối với sức khỏe xương.
      </p>
      <figure>
        <Image fill src={`/assets/images/cam-nang/${slug}/hinh-4.webp`} alt="Phô mai" priority />
      </figure>
      <p>
        Theo Medical News Today, dù chứa nhiều chất béo bão hòa, việc ăn phô mai với lượng vừa phải
        lại liên quan đến nguy cơ tăng huyết áp thấp hơn. Một nghiên cứu công bố năm 2024 cũng chỉ
        ra rằng phô mai có thể cải thiện chuyển hoá chất béo, giúp giảm nồng độ triglyceride và hỗ
        trợ kiểm soát huyết áp.
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
