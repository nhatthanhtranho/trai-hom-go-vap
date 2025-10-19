// app/cam-nang/phong-tuc-tet-nguyen-dan/page.tsx
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Link from 'next/link';
import Image from '@/src/components/CustomImage';
import { GetStaticProps } from 'next';
const title = 'Phong Tục Tết Nguyên Đán Của Người Việt – Nét Đẹp Văn Hóa Ngàn Đời';
const description =
  'Khám phá phong tục Tết Nguyên Đán của người Việt: nguồn gốc, ý nghĩa, các nghi lễ truyền thống như gói bánh chưng, cúng ông Công ông Táo, chúc Tết và giá trị văn hóa tinh thần ngàn đời.';
const url = 'https://sinhphuctho.com/cam-nang/phong-tuc-tet-nguyen-dan';
const image = '/assets/images/cam-nang/phong-tuc-tet-nguyen-dan/hinh-1.jpg';
// ✅ SEO metadata
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
  const slug = 'phong-tuc-tet-nguyen-dan';

  return (
    <CamNangLayout title="Phong Tục Tết Nguyên Đán Của Người Việt – Nét Đẹp Văn Hóa Ngàn Đời">
      <h1>Phong Tục Tết Nguyên Đán Của Người Việt – Nét Đẹp Văn Hóa Ngàn Đời</h1>

      <h2>1. Giới thiệu về phong tục Việt Nam và Tết Nguyên Đán</h2>
      <p>
        Việt Nam là một quốc gia giàu truyền thống, nơi mà các <strong>phong tục tập quán</strong>{' '}
        được gìn giữ qua hàng ngàn năm. Trong số đó, <strong>Tết Nguyên Đán</strong> chính là dịp lễ
        quan trọng nhất, mang đậm nét đẹp văn hóa và tinh thần của dân tộc. Đây không chỉ là khoảnh
        khắc chuyển giao giữa năm cũ và năm mới, mà còn là dịp để mỗi gia đình sum vầy, tưởng nhớ tổ
        tiên và cầu mong một năm mới an lành.
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Nguồn gốc Tết Nguyên Đán"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </figure>

      <h2>2. Nguồn gốc và ý nghĩa của Tết Nguyên Đán</h2>
      <p>
        Tết Nguyên Đán có nguồn gốc từ văn hóa nông nghiệp lúa nước, gắn liền với chu kỳ sản xuất và
        mùa màng. Đây là dịp lễ đánh dấu sự khởi đầu của một năm mới, mang theo hy vọng về sự sinh
        sôi, no đủ, hạnh phúc và an khang. Người Việt xem Tết như một cách để gắn kết gia đình, duy
        trì đạo lý “uống nước nhớ nguồn” và thể hiện lòng thành kính với tổ tiên.
      </p>
      <figure className="relative w-full h-80 my-6">
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Ý nghĩa Tết Nguyên Đán"
          fill
          className="object-cover rounded-lg"
        />
      </figure>

      <h2>3. Các phong tục truyền thống trong dịp Tết Nguyên Đán</h2>

      <h3>3.1. Cúng ông Công ông Táo</h3>
      <p>
        Ngày 23 tháng Chạp hàng năm, người Việt làm lễ tiễn ông Công ông Táo về trời. Đây là nghi lễ
        mở đầu cho chuỗi hoạt động chuẩn bị Tết, mang ý nghĩa thanh lọc, tổng kết một năm đã qua và
        đón chào năm mới.
      </p>

      <h3>3.2. Gói bánh chưng, bánh tét</h3>
      <p>
        Bánh chưng, bánh tét là biểu tượng cho lòng biết ơn trời đất và tổ tiên, tượng trưng cho đất
        trời và sự no đủ. Việc cả gia đình quây quần gói bánh, canh nồi bánh suốt đêm đã trở thành
        kỷ niệm đáng nhớ mỗi dịp Tết đến.
      </p>

      <h3>3.3. Dọn dẹp, trang trí nhà cửa</h3>
      <p>
        Trước Tết, các gia đình đều dọn dẹp, quét tước nhà cửa với mong muốn xua đi điều xui rủi,
        đón vận may và tài lộc. Hoa đào, hoa mai, cây quất là những biểu tượng quen thuộc trong ngày
        Tết.
      </p>

      <h3>3.4. Chúc Tết và mừng tuổi</h3>
      <p>
        Chúc Tết, mừng tuổi đầu năm là nét đẹp thể hiện sự kính trọng đối với bề trên, sự yêu thương
        dành cho con cháu. Những phong bao lì xì đỏ thắm gửi gắm lời chúc an khang, thịnh vượng cho
        cả năm.
      </p>

      <h3>3.5. Đi lễ chùa, xin lộc đầu năm</h3>
      <p>
        Nhiều gia đình chọn đi lễ chùa trong những ngày đầu năm để cầu bình an, hạnh phúc. Đây là
        phong tục vừa mang giá trị tâm linh, vừa giúp con người cảm thấy an yên và hướng thiện.
      </p>

      <figure className="relative w-full h-80 my-6">
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Phong tục Tết truyền thống của người Việt"
          fill
          className="object-cover rounded-lg"
        />
      </figure>

      <h2>4. Giá trị văn hóa và tinh thần</h2>
      <p>
        Tết Nguyên Đán không chỉ là dịp lễ hội, mà còn là một phần quan trọng của bản sắc văn hóa
        dân tộc. Tết gắn kết các thế hệ trong gia đình, duy trì những chuẩn mực đạo đức, đồng thời
        nuôi dưỡng tinh thần cộng đồng và lòng yêu nước.
      </p>

      <h2>5. Kết luận</h2>
      <p>
        Trải qua hàng nghìn năm, Tết Nguyên Đán vẫn giữ được những giá trị văn hóa tinh thần đặc
        biệt. Đây là dịp để người Việt trên khắp thế giới nhớ về cội nguồn, gìn giữ phong tục tập
        quán, và truyền lại cho thế hệ mai sau.
      </p>

      {/* CTA */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8 text-center">
        <p className="text-lg font-semibold mb-3">
          👉 Nếu bạn muốn khám phá thêm các phong tục truyền thống khác của người Việt
        </p>
        <p>
          Hãy ghé thăm{' '}
          <Link href="/cam-nang.html" className="text-red-600 underline hover:text-red-800">
            chuyên mục Cẩm Nang
          </Link>{' '}
          hoặc quay lại{' '}
          <Link href="/" className="text-red-600 underline hover:text-red-800">
            Trang chủ Sinh Phúc Thọ
          </Link>{' '}
          để tìm hiểu thêm nhiều bài viết bổ ích về văn hóa và tâm linh.
        </p>
      </div>

      {/* FAQ */}
      <section className="my-12">
        <h2>❓ Câu hỏi thường gặp về Tết Nguyên Đán</h2>
        <div className="space-y-4 mt-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Vì sao Tết Nguyên Đán lại quan trọng đối với người Việt?
            </summary>
            <p className="mt-2">
              Vì Tết là dịp đoàn tụ gia đình, tưởng nhớ tổ tiên và mở ra một năm mới với nhiều hy
              vọng. Đây cũng là lễ hội văn hóa lớn nhất trong năm.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Bánh chưng và bánh tét có ý nghĩa gì?
            </summary>
            <p className="mt-2">
              Bánh chưng tượng trưng cho đất, bánh tét tượng trưng cho trời. Cả hai đều thể hiện sự
              tri ân trời đất và cầu mong một năm mới đủ đầy, sung túc.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Người Việt thường kiêng làm gì trong ngày Tết?
            </summary>
            <p className="mt-2">
              Một số điều kiêng kỵ như: không quét nhà ngày mồng 1, tránh cãi vã, không làm vỡ bát
              đĩa, không cho vay tiền… vì quan niệm rằng sẽ mang lại xui xẻo cho cả năm.
            </p>
          </details>
        </div>
      </section>
    </CamNangLayout>
  );
}
