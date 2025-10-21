/* eslint-disable react/no-unescaped-entities */
// app/cam-nang/[slug]/page.tsx

import Image from 'next/image';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { GetStaticProps } from 'next';

const slug = 'cach-viet-dieu-van-tang-le-ngan-gon-xuc-dong';
const title = 'Cách viết điếu văn tang lễ ngắn gọn và xúc động';
const description =
  'Hướng dẫn chi tiết cách viết điếu văn tang lễ ngắn gọn, xúc động và trang nghiêm: cấu trúc, ngôn ngữ, ví dụ mẫu, mẹo viết và FAQs — giúp con cháu, bạn bè gửi lời tiễn biệt trọn vẹn và ý nghĩa.';
const path = `cam-nang/${slug}.html`;

export const metadata = {
  title,
  path,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Sinh Phúc Thọ',
    images: [
      {
        url: `/assets/images/cam-nang/${slug}/banner.webp`,
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

export default function Article() {
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>

      <p>
        Viết một điếu văn tang lễ — dù ngắn — là trách nhiệm và tấm lòng của người ở lại. Điếu văn
        không nhất thiết phải dài, nhưng cần chân thành, rõ ràng và tôn kính. Bài viết này hướng dẫn
        bạn từng bước cách nghĩ, cách cấu trúc và cách diễn đạt một điếu văn ngắn gọn nhưng vẫn đủ
        xúc động để tiễn biệt người đã khuất.
      </p>

      <p>
        Nội dung trình bày phù hợp cho người thân, bạn bè, đại diện cơ quan đoàn thể, hoặc người
        được giao phát biểu tại lễ tang. Bên cạnh hướng dẫn viết, bài có ví dụ mẫu, mẫu điếu văn
        ngắn, mẹo chỉnh sửa ngôn từ, lưu ý phong tục tôn giáo và phần FAQ để bạn thực hành nhanh
        chóng.
      </p>

      <h2>Ai nên đọc bài này?</h2>
      <p>
        Bài viết dành cho những ai được giao viết hoặc đọc điếu văn: con cháu, cháu chắt, đồng
        nghiệp, cán bộ tổ chức tang lễ, hoặc người đứng ra nói vài lời thay mặt gia đình. Nếu bạn
        muốn lời nói ngắn, súc tích và có chiều sâu tình cảm — đây là hướng dẫn thực tế để làm được
        điều đó.
      </p>

      <h2>Trước khi viết: Chuẩn bị tư tưởng và thông tin</h2>
      <p>
        Trước khi bắt tay vào viết, hãy dành vài phút để chuẩn bị. Điếu văn hay bắt nguồn từ thông
        tin chính xác và cảm xúc thật. Việc chuẩn bị giúp bạn tránh nói lộn, giữ giọng trấn tĩnh,
        truyền đạt được trọng tâm.
      </p>

      <p>Những việc cần làm trước khi viết:</p>
      <ul>
        <li>Thu thập thông tin cơ bản: họ tên đầy đủ, năm sinh — năm mất, quan hệ gia đình.</li>
        <li>Ghi lại 2–3 kỷ niệm tiêu biểu hoặc phẩm chất nổi bật của người đã mất.</li>
        <li>
          Tìm hiểu ngắn về phong tục tôn giáo/gia đình (ví dụ: cần tránh câu chữ nào, có câu kính
          cẩn nào đặc biệt).
        </li>
        <li>
          Xác định người nghe: gia đình thân quyến, bạn bè, đồng nghiệp hay công chúng — để chọn
          ngôn ngữ phù hợp.
        </li>
      </ul>

      <h2>Cấu trúc điếu văn ngắn gọn (mẫu 3 phần)</h2>
      <p>
        Một điếu văn ngắn thường có 3 phần rõ ràng: Mở đầu — Kể chuyện/nhấn mạnh — Lời tiễn biệt /
        Lời cảm ơn. Mỗi phần chỉ cần 2–4 câu nếu bạn muốn giữ độ ngắn.
      </p>

      <h3>1. Mở đầu (1–3 câu)</h3>
      <p>
        Mở đầu nêu tên người mất, quan hệ của người nói với người mất và mục đích phát biểu. Mở đầu
        cần trang nghiêm, rõ ràng, tránh dài dòng.
      </p>
      <p>
        Ví dụ: “Kính thưa toàn thể, tôi là A — con/cháu/bạn của cụ B. Hôm nay thay mặt gia đình, tôi
        xin gửi đôi lời tiễn biệt...”
      </p>

      <h3>2. Thân bài — Kể chuyện, nhấn mạnh phẩm chất (3–6 câu)</h3>
      <p>
        Chọn 1–2 mảng kỷ niệm hoặc 1–2 phẩm chất nổi bật (nhân từ, cần cù, khiêm nhường, tâm
        linh...) để kể ngắn. Đi sâu vào chi tiết cụ thể (một hành động, một thói quen) giúp cảm xúc
        chân thực.
      </p>

      <h3>3. Kết — Lời tiễn biệt và lời cảm ơn (2–4 câu)</h3>
      <p>
        Phần kết ghi lời tiễn biệt, lời cầu nguyện (nếu có), và lời cảm ơn tới khách viếng, đội ngũ
        tổ chức, hoặc y bác sĩ. Kết thúc bằng câu ngắn gọn, trang trọng.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Viết điếu văn tang lễ - hình minh họa 1"
          priority
        />
      </figure>

      <h2>Ngôn ngữ và giọng điệu: Lời khuyên thực tiễn</h2>
      <p>
        Giọng điệu của điếu văn nên trang nghiêm, lịch sự, tránh dùng từ quá xu nịnh hoặc quá hài
        hước. Tuy nhiên, chân thành và ấm áp thường chạm tới trái tim hơn lời sáo rỗng.
      </p>

      <ul>
        <li>Ưu tiên câu ngắn, rõ ràng; tránh câu quá dài dễ làm người đọc mất hơi.</li>
        <li>Không kể lại những chuyện gây tranh cãi hay làm mất thể diện người đã khuất.</li>
        <li>
          Trong văn hóa tôn giáo riêng (Phật giáo, Công giáo, v.v.), sử dụng cụm từ phù hợp như
          “nguyện cầu”, “xin cho linh hồn...”, “an nghỉ trong Chúa”.
        </li>
      </ul>

      <h2>Mẹo để điếu văn xúc động nhưng không quá dài</h2>
      <ul>
        <li>
          <strong>Chọn chi tiết gây ấn tượng:</strong> một hành động nhỏ nhưng lặp đi lặp lại (ví
          dụ: thói quen pha trà, nụ cười khi gặp hàng xóm) thường gây xúc động hơn danh sách thành
          tích.
        </li>
        <li>
          <strong>Dùng hình ảnh đơn giản:</strong> so sánh nhẹ nhàng, ví dụ “ông như bóng tre trong
          vườn, vững vàng và che chở”.
        </li>
        <li>
          <strong>Đọc to và chỉnh nhịp:</strong> viết xong, đọc thử để biết chỗ cần ngắt nghỉ; điếu
          văn tốt khi người đọc có thể điều tiết hơi thở.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Viết điếu văn tang lễ - hình minh họa 2"
          priority
        />
      </figure>

      <h2>Ví dụ — Một số mẫu điếu văn ngắn</h2>
      <p>
        Dưới đây là 5 mẫu điếu văn ngắn, từ trang trọng, xúc động đến thân mật — bạn có thể chỉnh
        lại cho phù hợp với hoàn cảnh riêng.
      </p>

      <h3>Mẫu 1 — Trang trọng, đại diện gia đình</h3>
      <p>
        “Kính thưa toàn thể quan khách, tôi là [Họ tên], đại diện gia đình xin gửi lời cảm ơn sâu
        sắc vì sự hiện diện của quý vị. Người quá cố — [Họ tên người mất] — là tấm gương cần cù,
        sống vì gia đình và cộng đồng. Hôm nay thay mặt gia đình, chúng tôi kính xin quý vị cùng cầu
        nguyện để linh hồn [ông/bà] được yên nghỉ. Xin trân trọng cảm ơn.”
      </p>

      <h3>Mẫu 2 — Gần gũi, cho bạn bè</h3>
      <p>
        “Xin phép được nói vài lời tiễn biệt người bạn thân — [tên]. [Tên] luôn là người biết lắng
        nghe, một nụ cười ấm áp trong những ngày khó khăn. Chúc bạn ra đi thanh thản, nơi ấy không
        còn đau buồn. Xin cảm ơn mọi người đã đến hôm nay.”
      </p>

      <h3>Mẫu 3 — Phật giáo</h3>
      <p>
        “Kính bạch Chư Tôn Thiền Đức, kính thưa toàn thể quan khách — tôi là [Họ tên], thay mặt gia
        đình, xin kính trình đôi lời tiễn biệt. Chúng ta kính nguyện cho hương linh [Họ tên] thăng
        hoa nơi cõi lành, sớm siêu sinh Tịnh Độ. Xin cảm ơn quý vị đã về chia sẻ nỗi buồn cùng gia
        quyến.”
      </p>

      <h3>Mẫu 4 — Công sở / đồng nghiệp</h3>
      <p>
        “Kính thưa đồng nghiệp và khách viếng, tôi là [Họ tên], đồng nghiệp của [Họ tên người mất].
        [Anh/Chị] luôn tận tâm và trách nhiệm trong công việc. Sự ra đi của [anh/chị] là mất mát lớn
        cho tập thể chúng tôi. Xin gửi lời chia buồn sâu sắc đến gia đình.”
      </p>

      <h3>Mẫu 5 — Lễ cấp tốc</h3>
      <p>
        “Thay mặt gia đình, tôi xin cảm ơn quý vị đã có mặt. Kính xin mọi người một phút mặc niệm để
        tiễn đưa [Họ tên] về nơi an nghỉ. Xin cảm ơn.”
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-5.webp`}
          alt="Viết điếu văn tang lễ - hình minh họa 5"
          priority
        />
      </figure>

      <h2>Vì sao bạn có thể tin tưởng hướng dẫn này</h2>
      <p>
        Toàn bộ nội dung được biên soạn bởi đội ngũ tư vấn tang lễ Sinh Phúc Thọ — những người có
        nhiều năm kinh nghiệm tổ chức và điều phối tang lễ ở TP.HCM và các tỉnh lân cận. Chúng tôi
        hiểu rõ phong tục, tôn giáo và tâm lý của gia đình trong giờ phút chia ly.
      </p>
      <p>
        Mục tiêu của bài viết là cung cấp kiến thức thực tế, gần gũi, giúp bạn tự tin chuẩn bị lời
        tiễn biệt đúng lễ nghi, trọn tình.
      </p>

      <h2>Tư vấn dịch vụ tang lễ trọn gói</h2>
      <p>
        Nếu bạn đang cần hỗ trợ chuẩn bị tang lễ, hậu sự hoặc dịch vụ mai táng trọn gói, Sinh Phúc
        Thọ cung cấp giải pháp toàn diện — từ khâu chuẩn bị, lễ nghi, xe tang, hoa tang đến hỏa táng
        và an táng. Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng tư vấn tận tâm, giúp gia đình
        giảm bớt lo toan trong thời điểm khó khăn.
      </p>
      <p>
        <a
          href="https://sinhphuctho.com/lien-he.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 text-white px-4 py-2 mt-2"
        >
          Liên hệ tư vấn dịch vụ tang lễ trọn gói
        </a>
      </p>

      <p className="mt-8">
        Bạn có thể đọc thêm các bài hướng dẫn khác về nghi thức tang lễ tại{' '}
        <a
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-blue-600 underline hover:text-blue-700"
        >
          chuyên mục Cẩm Nang Tang Lễ
        </a>{' '}
        để hiểu thêm về phong tục, nghi lễ và cách tổ chức tang lễ trang nghiêm.
      </p>

      <p className="mt-6 italic">
        Trại Hòm Sinh Phúc Thọ — Gìn giữ giá trị truyền thống, đồng hành trong từng nghi lễ tiễn
        biệt.
      </p>
    </CamNangLayout>
  );
}
