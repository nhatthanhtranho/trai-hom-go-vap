import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import ResponsiveImage from '@/components/Image/ResponsiveImage';
import type { GetStaticProps } from 'next';

const slug = 'chi-phi-tang-le-gom-nhung-khoan-nao';
const title = 'Chi phí tang lễ gồm những khoản nào? Hướng dẫn chi tiết & minh bạch';
const description =
  'Tìm hiểu chi tiết các khoản chi phí tang lễ: từ quan tài, xe tang, hoa viếng, dịch vụ mai táng – hỏa táng đến lễ cúng. Hướng dẫn lập kế hoạch tài chính tang lễ minh bạch, tiết kiệm và trang trọng.';
const path = `cam-nang/${slug}`;

export const metadata = {
  title,
  description,
  path,
  openGraph: {
    title,
    description,
    url: `https://sinhphuctho.com/cam-nang/${slug}.html`,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.webp`],
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
    <CamNangLayout title={'Chi phí tang lễ gồm những khoản nào? Hướng dẫn chi tiết & minh bạch'}>
      <ResponsiveImage
        imageSource={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
        alt="Chi phí tang lễ gồm những khoản nào"
        className="rounded-xl shadow-sm my-6 h-64"
        priority
      />

      <blockquote className="italic border-l-4 border-yellow-600 pl-4 my-6 text-gray-700">
        Một tang lễ trang trọng không nhất thiết phải đắt đỏ – quan trọng là sự chuẩn bị chu đáo,
        minh bạch và phù hợp điều kiện gia đình.
      </blockquote>

      <p>
        Khi người thân qua đời, việc tổ chức tang lễ vừa là trách nhiệm vừa là cách bày tỏ lòng hiếu
        kính. Tuy nhiên, nhiều người gặp khó khăn trong việc ước tính chi phí tang lễ do có nhiều
        khoản mục nhỏ lẻ, phụ phí và lựa chọn khác nhau giữa mai táng và hỏa táng. Bài viết này sẽ
        hướng dẫn bạn chi tiết từng hạng mục chi phí, giúp bạn **dự trù ngân sách hợp lý** và
        **tránh bị phát sinh không cần thiết**.
      </p>

      {/* CTA 1 */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <a
          href="https://sinhphuctho.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md px-4 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700"
        >
          Về trang chủ Sinh Phúc Thọ
        </a>
      </div>

      <h2>I. Tổng quan chi phí tang lễ</h2>
      <p>
        Chi phí tang lễ tại Việt Nam phụ thuộc vào **hình thức (mai táng hoặc hỏa táng)**, **vị trí
        địa lý**, và **quy mô tổ chức**. Thông thường, chi phí dao động từ **10 – 60 triệu đồng**,
        tùy theo lựa chọn dịch vụ và điều kiện kinh tế gia đình.
      </p>

      <ResponsiveImage
        imageSource={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
        alt="Tổng quan chi phí tang lễ tại Việt Nam"
        className="rounded-xl shadow-sm my-6 h-64"
      />

      <p>
        Một số gia đình chọn **dịch vụ tang lễ trọn gói**, giúp đơn giản hóa quy trình và giảm rủi
        ro phát sinh. Dịch vụ này thường bao gồm từ việc khâm liệm, xe tang, trang trí, cho đến nghi
        thức lễ viếng và an táng hoặc hỏa táng.
      </p>

      <h2>II. Các khoản chi phí chính trong tang lễ</h2>

      <h3>1. Chi phí quan tài và khâm liệm</h3>
      <p>
        Quan tài là trung tâm của tang lễ. Mức giá dao động từ **3 – 30 triệu đồng**, tùy theo chất
        liệu (gỗ dầu, gỗ căm xe, gỗ gõ đỏ, gỗ lim), kích thước và độ tinh xảo. Ngoài ra, còn có phí
        khâm liệm (khoảng 1 – 3 triệu đồng) bao gồm vải liệm, gối, chăn, và nhân công thực hiện.
      </p>

      <ResponsiveImage
        imageSource={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
        alt="Chi phí quan tài và khâm liệm"
        className="rounded-xl shadow-sm my-6 h-64"
      />

      <h3>2. Chi phí xe tang và di chuyển</h3>
      <p>
        Xe tang dùng để đưa linh cữu từ nhà tang lễ hoặc nơi tổ chức đến nơi an táng hoặc hỏa táng.
        Giá thuê xe tang thường từ **2 – 8 triệu đồng**, tùy loại xe (xe 16 chỗ, xe hoa trang trí,
        xe rồng). Với các tỉnh xa, chi phí có thể tính theo km.
      </p>

      <h3>3. Chi phí hoa tang, bàn thờ và trang trí</h3>
      <p>
        Hoa tang lễ là phần quan trọng thể hiện sự tôn kính. Gồm hoa phủ quan tài, vòng hoa chia
        buồn, hoa bàn thờ và cổng tang. Chi phí thường từ **2 – 10 triệu đồng**, tùy vào quy mô và
        số lượng hoa sử dụng.
      </p>

      <ResponsiveImage
        imageSource={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
        alt="Trang trí hoa tang lễ trang trọng"
        className="rounded-xl shadow-sm my-6 h-64"
      />

      <h3>4. Chi phí địa điểm và nghi lễ</h3>
      <p>
        Nếu tổ chức tại nhà tang lễ, cần trả phí thuê địa điểm, phòng lạnh và nhân viên phục vụ (từ
        5 – 10 triệu đồng). Ngoài ra, còn có chi phí mời sư thầy, linh mục hoặc người chủ lễ thực
        hiện nghi thức cầu siêu.
      </p>

      <h3>5. Chi phí an táng hoặc hỏa táng</h3>
      <p>Đây là khoản chi phí chính, tùy vào hình thức:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Mai táng:</strong> Bao gồm đào huyệt, thuê đất hoặc mua mộ, xây phần mộ – tổng chi
          phí từ **15 – 50 triệu đồng**.
        </li>
        <li>
          <strong>Hỏa táng:</strong> Chi phí hỏa táng dao động **5 – 20 triệu đồng**, gồm quan tài,
          dịch vụ vận chuyển và lò hỏa táng.
        </li>
      </ul>

      {/* CTA 2 */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <a
          href="https://sinhphuctho.com/cac-goi-hoa-tang.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md px-4 py-2 bg-gray-800 text-white font-semibold hover:opacity-95"
        >
          Xem các gói Hỏa Táng trọn gói
        </a>
      </div>

      <h3>6. Chi phí phục vụ tang lễ</h3>
      <p>
        Bao gồm nhân công di quan, dàn nhạc, phát tang, trang trí rạp, âm thanh ánh sáng. Gói cơ bản
        dao động **3 – 8 triệu đồng**, gói cao cấp có thể tới 15 triệu đồng.
      </p>

      <ResponsiveImage
        imageSource={`/assets/images/cam-nang/${slug}/hinh-5.webp`}
        alt="Nhân công và phục vụ trong tang lễ"
        className="rounded-xl shadow-sm my-6 h-64"
      />

      <h2>III. Các khoản chi phí phát sinh thường gặp</h2>
      <p>Ngoài các chi phí chính, còn có nhiều khoản nhỏ nhưng cần thiết:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Chi phí in thiệp, bảng thông báo tang lễ</li>
        <li>Chi phí ăn uống cho khách viếng và người phục vụ</li>
        <li>Chi phí làm lễ cúng thất, cúng 49 ngày, 100 ngày</li>
        <li>Chi phí vận chuyển tro cốt hoặc linh cữu nếu khác địa phương</li>
      </ul>

      <p>
        Việc **dự trù trước 10–15% ngân sách dự phòng** là cần thiết để đảm bảo không bị động khi
        phát sinh chi phí ngoài dự tính.
      </p>

      <h2>IV. Cách lập kế hoạch chi phí tang lễ hợp lý</h2>
      <p>Để tránh áp lực tài chính, bạn nên:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Lên danh sách hạng mục cần thiết và dự toán chi tiết từng phần.</li>
        <li>Tham khảo báo giá từ 2–3 đơn vị dịch vụ uy tín.</li>
        <li>
          Ưu tiên chọn <strong>dịch vụ trọn gói</strong> có hợp đồng rõ ràng.
        </li>
        <li>Giữ khoản dự phòng cho các chi phí cúng sau tang lễ.</li>
      </ol>

      <blockquote className="italic border-l-4 border-gray-800 pl-4 my-6 text-gray-700">
        Lễ tang là dịp cuối cùng để con cháu báo hiếu – sự trang trọng và chỉn chu quan trọng hơn
        quy mô hay chi phí đắt đỏ.
      </blockquote>

      {/* CTA 3 */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <a
          href="https://sinhphuctho.com/cac-goi-an-tang.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md px-4 py-2 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50"
        >
          Xem các gói An Táng trọn gói
        </a>
      </div>

      <h2>V. Tổng kết: Làm sao để tổ chức tang lễ tiết kiệm và trọn vẹn</h2>
      <p>
        Tổ chức tang lễ là việc hệ trọng, cần sự chuẩn bị kỹ lưỡng và minh bạch. Việc hiểu rõ các
        khoản chi phí giúp bạn **chủ động tài chính** và **chọn dịch vụ uy tín**. Dù là an táng hay
        hỏa táng, điều quan trọng nhất vẫn là lòng hiếu thảo và cách thể hiện sự tôn trọng dành cho
        người đã khuất.
      </p>

      {/* CTA 4 */}
      <div className="flex flex-wrap justify-center gap-3 my-8">
        <a
          href="https://sinhphuctho.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md px-4 py-2 bg-yellow-600 text-white font-semibold hover:bg-yellow-700"
        >
          Quay lại Trang chủ Sinh Phúc Thọ
        </a>
      </div>
    </CamNangLayout>
  );
}
