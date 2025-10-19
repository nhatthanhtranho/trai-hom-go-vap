// app/cam-nang/lan-su-rong/page.tsx
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Image from 'next/image';
import Link from 'next/link';
import type { GetStaticProps, Metadata } from 'next';

const slug = 'lan-su-rong-truyen-thong-viet-nam';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

export const metadata: Metadata = {
  alternates: {
    canonical: url,
  },
  title: 'Lân Sư Rồng – Nét Văn Hóa Truyền Thống Mang Lại May Mắn và Thịnh Vượng',
  description:
    'Khám phá nguồn gốc, ý nghĩa và giá trị tinh thần của Lân Sư Rồng trong văn hóa Việt Nam. Tìm hiểu nghệ thuật, phong tục và vai trò của Lân Sư Rồng trong đời sống tâm linh.',
  keywords: [
    'lân sư rồng',
    'múa lân',
    'múa rồng',
    'múa sư tử',
    'nghệ thuật dân gian',
    'lễ hội Việt Nam',
    'tín ngưỡng dân gian',
    'múa lân sư rồng Việt Nam'
  ],
  openGraph: {
    title: 'Lân Sư Rồng – Nét Văn Hóa Truyền Thống Mang Lại May Mắn và Thịnh Vượng',
    description:
      'Khám phá nguồn gốc, ý nghĩa và giá trị tinh thần của Lân Sư Rồng trong văn hóa Việt Nam. Một loại hình nghệ thuật dân gian gắn liền với lễ hội, Tết và tín ngưỡng tâm linh.',
    url: `https://sinhphuctho.com/cam-nang/${slug}.html`,
    type: 'article',
    images: [
      {
        url: `https://sinhphuctho.com/assets/images/cam-nang/${slug}/hinh-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Lân Sư Rồng – Nét Văn Hóa Truyền Thống'
      }
    ]
  }
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
    <CamNangLayout title="Lân Sư Rồng – Nét Văn Hóa Truyền Thống Mang Lại May Mắn và Thịnh Vượng">
        <h1>Lân Sư Rồng – Nét Văn Hóa Truyền Thống Mang Lại May Mắn và Thịnh Vượng</h1>
        <p>
          <strong>Lân Sư Rồng</strong> là một trong những loại hình nghệ thuật dân gian đặc sắc,
          thường xuất hiện trong các dịp Tết Nguyên Đán, lễ hội, khai trương hay những sự kiện mang
          tính tâm linh. Bộ môn này không chỉ mang giá trị giải trí mà còn chứa đựng ý nghĩa tâm
          linh sâu sắc, tượng trưng cho sự may mắn, thịnh vượng và bình an.
        </p>

        <figure>
          <Image
            src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
            alt="Múa Lân Sư Rồng trong lễ hội truyền thống"
            width={1200}
            height={630}
            className="rounded-lg shadow"
          />
        </figure>

        <h2>Nguồn gốc và ý nghĩa của Lân Sư Rồng</h2>
        <p>
          Múa Lân Sư Rồng xuất phát từ các nước Á Đông, sau đó hòa nhập vào văn hóa Việt Nam và
          mang đậm bản sắc dân tộc. Trong đó:
        </p>
        <ul>
          <li>
            <strong>Múa Lân</strong>: biểu tượng của niềm vui, sự hân hoan, mang lại may mắn.
          </li>
          <li>
            <strong>Múa Sư</strong>: thể hiện sự uy dũng, xua đuổi tà ma, bảo vệ sự bình an.
          </li>
          <li>
            <strong>Múa Rồng</strong>: biểu tượng cho quyền lực, tài lộc và sự phát triển thịnh
            vượng.
          </li>
        </ul>
        <p>
          Người xưa tin rằng, tiếng trống rộn ràng và những điệu múa mạnh mẽ sẽ giúp xua tan xui rủi,
          mở ra nhiều điều cát tường.
        </p>

        <h2>Đặc điểm nghệ thuật của Lân Sư Rồng</h2>
        <p>
          Nghệ thuật Lân Sư Rồng là sự kết hợp hoàn hảo giữa âm nhạc, vũ đạo và tinh thần đoàn kết.
        </p>
        <h3>1. Nhạc cụ đi kèm</h3>
        <p>
          Tiếng <strong>trống, chiêng, chập chõa</strong> tạo nên bầu không khí sôi động, lôi cuốn
          khán giả.
        </p>
        <h3>2. Động tác biểu diễn</h3>
        <ul>
          <li>Lân: linh hoạt, nhanh nhẹn, có thể leo cột, vượt chướng ngại vật.</li>
          <li>Sư tử: dũng mãnh, thường thể hiện động tác nhảy cao, đứng thẳng, vờn bóng.</li>
          <li>Rồng: dài và uyển chuyển, đòi hỏi sự phối hợp nhịp nhàng của nhiều người.</li>
        </ul>
        <h3>3. Tinh thần đồng đội</h3>
        <p>
          Một đội Lân Sư Rồng chuyên nghiệp cần sự ăn ý, kiên nhẫn và tập luyện bền bỉ để mang lại
          những màn trình diễn mãn nhãn.
        </p>

        <figure>
          <Image
            src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
            alt="Múa rồng truyền thống trong văn hóa Việt Nam"
            width={1200}
            height={630}
            className="rounded-lg shadow"
          />
        </figure>

        <h2>Lân Sư Rồng trong đời sống văn hóa Việt</h2>
        <p>
          Ở Việt Nam, Lân Sư Rồng xuất hiện trong nhiều dịp trọng đại, từ <strong>Tết Nguyên Đán</strong>,{' '}
          <strong>lễ hội dân gian</strong> đến <strong>khai trương – khánh thành</strong>. Đây không
          chỉ là màn trình diễn giải trí mà còn là hoạt động mang tính tâm linh, cầu chúc cho sự may
          mắn, phát đạt.
        </p>

        <h2>Giá trị tinh thần và tín ngưỡng</h2>
        <p>
          Lân Sư Rồng góp phần gắn kết cộng đồng, giữ gìn bản sắc văn hóa, đồng thời phản ánh niềm
          tin tâm linh của người Việt về sự che chở và may mắn cho cả người sống và người đã khuất.
        </p>
        <p>
          👉 Nếu bạn quan tâm đến <strong>nghi thức mai táng, tổ chức tang lễ</strong> trọn vẹn và
          trang nghiêm, có thể tham khảo dịch vụ tại{' '}
          <Link
            href="https://sinhphuctho.com"
            className="text-blue-600 font-medium underline"
          >
            Trại Hòm Sinh Phúc Thọ
          </Link>
          .
        </p>

        <h2>Bảo tồn và phát triển nghệ thuật Lân Sư Rồng</h2>
        <p>
          Ngày nay, nhiều câu lạc bộ, đội múa Lân Sư Rồng được thành lập nhằm truyền dạy kỹ năng cho
          thế hệ trẻ, tổ chức thi đấu chuyên nghiệp và đưa Lân Sư Rồng vào sản phẩm du lịch văn hóa.
        </p>
        <p>
          Tuy nhiên, để bảo tồn lâu dài, cần có sự hỗ trợ từ cộng đồng, doanh nghiệp và các cơ quan
          văn hóa để nghệ thuật này tiếp tục lan tỏa giá trị.
        </p>

        <figure>
          <Image
            src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
            alt="Đội múa Lân Sư Rồng biểu diễn trong khai trương"
            width={1200}
            height={630}
            className="rounded-lg shadow"
          />
        </figure>

        <h2>Kết luận</h2>
        <p>
          Lân Sư Rồng là loại hình nghệ thuật mang đậm giá trị văn hóa và tâm linh của người Việt.
          Đây vừa là biểu tượng của sự may mắn, thịnh vượng, vừa là nét đẹp truyền thống cần được gìn
          giữ và phát huy.
        </p>
        <p>
          👉 Để tìm hiểu thêm các bài viết về <strong>phong tục, tín ngưỡng và văn hóa Việt Nam</strong>, bạn có thể tham khảo tại{' '}
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
