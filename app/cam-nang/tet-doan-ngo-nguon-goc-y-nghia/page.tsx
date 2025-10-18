// app/cam-nang/tet-doan-ngo-y-nghia-phong-tuc-mon-an-truyen-thong/page.tsx

import Image from '@/components/CustomImage';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'tet-doan-ngo-nguon-goc-y-nghia';
const title = 'Tết Đoan Ngọ – Ý nghĩa, phong tục và món ăn truyền thống của người Việt';
const description =
  'Khám phá Tết Đoan Ngọ mùng 5 tháng 5: nguồn gốc, ý nghĩa, phong tục diệt sâu bọ, cúng lễ và các món ăn truyền thống như rượu nếp, hoa quả, bánh tro. Bài viết chuẩn SEO giúp bạn hiểu rõ ngày Tết đặc sắc trong văn hóa Việt.';

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
        <strong>Tết Đoan Ngọ</strong>, còn gọi là Tết diệt sâu bọ, diễn ra vào ngày mùng 5 tháng 5
        âm lịch hằng năm. Đây là một trong những ngày lễ quan trọng của người Việt, gắn liền với
        nhiều phong tục, tập quán độc đáo. Bên cạnh đó, ngày lễ còn chứa đựng giá trị văn hóa tinh
        thần sâu sắc, thể hiện lòng tri ân tổ tiên và mong cầu sức khỏe, bình an cho cả gia đình.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Tết Đoan Ngọ của người Việt"
          priority
        />
      </figure>

      <h2>1. Nguồn gốc của Tết Đoan Ngọ</h2>
      <p>
        Tết Đoan Ngọ bắt nguồn từ văn hóa Trung Hoa, sau đó du nhập và được Việt hóa. Ở Việt Nam,
        ngày này còn gọi là <strong>Tết diệt sâu bọ</strong>, gắn liền với tập tục ăn rượu nếp và
        trái cây để thanh lọc cơ thể, tiêu diệt ký sinh trùng và bảo vệ sức khỏe.
      </p>
      <p>
        Ngoài ra, Tết Đoan Ngọ còn là dịp con cháu bày tỏ lòng hiếu kính với tổ tiên và cầu
        mong mùa màng bội thu.
      </p>

      <h2>2. Ý nghĩa của Tết Đoan Ngọ</h2>
      <ul>
        <li>
          <strong>Sức khỏe:</strong> Ăn rượu nếp, trái cây giúp tiêu diệt sâu bọ, thanh lọc cơ thể.
        </li>
        <li>
          <strong>Nông nghiệp:</strong> Cầu mùa màng tươi tốt, tránh dịch hại và sâu bệnh.
        </li>
        <li>
          <strong>Tâm linh:</strong> Bày tỏ lòng tri ân tổ tiên, cầu mong bình an, may mắn.
        </li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Tết Đoan Ngọ của người Việt"
          priority
        />
      </figure>

      <h2>3. Phong tục Tết Đoan Ngọ của người Việt</h2>
      <h3>Cúng tổ tiên</h3>
      <p>
        Vào sáng mùng 5 tháng 5, gia đình chuẩn bị mâm cỗ cúng tổ tiên với rượu nếp, bánh tro,
        trái cây theo mùa và các món ăn truyền thống. Sau lễ cúng, con cháu sẽ cùng nhau thụ lộc.
      </p>
      <h3>Tục diệt sâu bọ</h3>
      <p>
        Người dân tin rằng ăn rượu nếp, trái cây chua ngọt sáng sớm sẽ giúp diệt ký sinh, bảo vệ
        sức khỏe. Đây là phong tục đặc trưng nhất của Tết Đoan Ngọ.
      </p>
      <h3>Tắm lá mùi, xông nhà</h3>
      <p>
        Một số vùng quê còn giữ tục tắm lá mùi, xông nhà bằng thảo dược để trừ tà, mang lại may
        mắn và sức khỏe.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Mâm cúng Tết Đoan Ngọ"
          priority
        />
      </figure>

      <h2>4. Các món ăn truyền thống trong Tết Đoan Ngọ</h2>
      <h3>Rượu nếp cái</h3>
      <p>
        Rượu nếp cái là món không thể thiếu, tượng trưng cho việc diệt sâu bọ. Làm từ gạo nếp
        cái hoa vàng, lên men tự nhiên, có vị cay nồng và thơm dịu.
      </p>
      <h3>Bánh tro (bánh ú)</h3>
      <p>
        Bánh gói lá dong hoặc lá chuối, nhân đậu xanh hoặc không nhân, chấm mật mía. Biểu tượng
        thanh lọc và giải nhiệt ngày hè.
      </p>
      <h3>Hoa quả mùa hè</h3>
      <p>
        Mận, vải, xoài, dưa hấu… ăn để diệt trừ ký sinh, bảo vệ sức khỏe và mang lại sự thanh
        khiết.
      </p>
      <h3>Các món dân gian khác</h3>
      <p>
        Miền Bắc: cơm rượu nếp; Miền Trung: chè kê, bánh ít lá gai; Miền Nam: chè trôi nước,
        cơm rượu, trái cây miệt vườn.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
          alt="Bánh tro ngày Tết Đoan Ngọ"
          priority
        />
      </figure>

      <h2>5. Tết Đoan Ngọ ở các vùng miền</h2>
      <ul>
        <li>
          <strong>Miền Bắc:</strong> Lễ cúng đơn giản, rượu nếp, bánh tro, hoa quả theo mùa.
        </li>
        <li>
          <strong>Miền Trung:</strong> Rượu nếp, chè kê, bánh ít lá gai, hoa quả nhiệt đới.
        </li>
        <li>
          <strong>Miền Nam:</strong> Mâm cúng phong phú: chè trôi nước, cơm rượu, trái cây miệt vườn.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-5.webp`}
          alt="Tết Đoan Ngọ của người Việt"
          priority
        />
      </figure>
      <h2>6. Giá trị văn hóa – tâm linh</h2>
      <p>
        Tết Đoan Ngọ gắn kết con người với thiên nhiên, thể hiện tinh thần hiếu nghĩa, biết ơn tổ
        tiên, đồng thời giúp thanh lọc cơ thể và xua đuổi những điều xấu.
      </p>

      <h2>7. Cách chuẩn bị mâm cúng Tết Đoan Ngọ</h2>
      <p>
        Mâm cúng gồm: hương hoa, rượu nếp, bánh tro, hoa quả, xôi chè. Bày gọn gàng, sạch sẽ, đặt
        trên bàn thờ gia tiên. Thời gian cúng tốt nhất: sáng từ 5 – 7 giờ.
      </p>

      <h2>8. Lời kết</h2>
      <p>
        <strong>Tết Đoan Ngọ</strong> là một phần quan trọng trong văn hóa Việt, vừa mang ý nghĩa
        tâm linh, vừa gắn với đời sống thực tế. Ngày lễ giúp con người trân trọng sức khỏe, hiếu
        kính tổ tiên và duy trì truyền thống dân tộc.
      </p>

      {/* ✅ CTA */}
      <h2>Khám phá thêm</h2>
      <p>
        Bạn có thể trở về{' '}
        <a
          href="https://sinhphuctho.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          trang chủ Sinh Phúc Thọ
        </a>{' '}
        để tìm hiểu các dịch vụ, bài viết và thông tin hữu ích khác.
      </p>
      <p>
        Hoặc tham khảo thêm các bài viết khác trong{' '}
        <a href="https://sinhphuctho.com/cam-nang.html" className="text-blue-600 underline">
          Cẩm Nang
        </a>{' '}
        để khám phá nhiều kiến thức văn hóa, phong tục và mẹo tổ chức lễ nghi truyền thống.
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
