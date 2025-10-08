/* eslint-disable react/no-unescaped-entities */
// app/cam-nang/[slug]/page.tsx

import Image from 'next/image';
import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import { Metadata } from 'next/types';

const slug = 'su-khac-biet-giua-tang-le-phat-giao-va-cong-giao-o-viet-nam';
const title = 'Sự khác biệt giữa tang lễ Phật giáo và Công giáo ở Việt Nam';
const description =
  'So sánh chi tiết tang lễ Phật giáo và Công giáo tại Việt Nam: nghi thức, trang phục, bài kinh, lễ an táng/hỏa táng, biểu tượng, vai trò người chủ lễ và những lưu ý phong tục. Hướng dẫn dành cho gia đình cần tổ chức tang lễ đúng nghi thức, trang nghiêm và tôn trọng tín ngưỡng.';

export async function generateMetadata(): Promise<Metadata> {
  const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Sinh Phúc Thọ',
      images: [
        { url: `/assets/images/cam-nang/${slug}/hinh-1.jpg`, width: 1200, height: 630, alt: title },
        { url: `/assets/images/cam-nang/${slug}/hinh-2.jpg`, width: 1200, height: 630, alt: title },
        { url: `/assets/images/cam-nang/${slug}/hinh-3.jpg`, width: 1200, height: 630, alt: title },
        { url: `/assets/images/cam-nang/${slug}/hinh-4.jpg`, width: 1200, height: 630, alt: title },
        { url: `/assets/images/cam-nang/${slug}/hinh-5.jpg`, width: 1200, height: 630, alt: title },
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
        Tang lễ không chỉ là nghi thức tiễn biệt mà còn là sự thể hiện niềm tin và đạo hiếu của con người Việt Nam.
        Trong đời sống tinh thần, Phật giáo và Công giáo là hai tôn giáo có ảnh hưởng sâu rộng, mỗi tôn giáo đều có
        cách thức tổ chức tang lễ riêng – trang nghiêm, ý nghĩa và mang đặc trưng tín ngưỡng riêng biệt. Bài viết này
        giúp bạn hiểu rõ những điểm khác biệt giữa hai hình thức tang lễ, từ nghi thức, trang phục đến âm nhạc và lễ an táng.
      </p>

      <p>
        Việc nắm rõ những khác biệt này sẽ giúp gia đình tổ chức tang lễ phù hợp với tín ngưỡng của người quá cố,
        thể hiện sự tôn trọng, lòng thành kính và niềm an ủi đối với người thân đang chịu tang.
      </p>

      <h2>1. Nền tảng tín ngưỡng và mục đích nghi lễ</h2>
      <p>
        Trong Phật giáo, tang lễ mang ý nghĩa cầu siêu và hướng đến sự siêu thoát cho người đã khuất. Các nghi thức tụng
        kinh, niệm Phật hay cúng dường thể hiện lòng thành tâm, mong hương linh sớm về cõi an lành.
      </p>
      <p>
        Với Công giáo, tang lễ là dịp cộng đoàn hiệp thông cầu nguyện cho linh hồn người quá cố được Chúa đón nhận
        vào Nước Trời. Các nghi thức phụng vụ, Thánh Lễ và lời cầu nguyện đều hướng tới niềm tin vào sự sống vĩnh cửu.
      </p>

      <figure className="relative w-full aspect-[16/9] my-6">
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Tang lễ Phật giáo và Công giáo - minh họa"
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </figure>

      <h2>2. Vai trò của người chủ lễ</h2>
      <p>
        Tang lễ Phật giáo do các vị sư thầy hoặc tăng ni chủ trì, hướng dẫn tụng kinh và cử hành lễ cầu siêu. Họ giúp
        gia chủ sắp xếp lễ vật, hướng dẫn cách hành lễ đúng nghi thức chùa.
      </p>
      <p>
        Trong tang lễ Công giáo, linh mục là người chủ lễ chính, thực hiện Thánh Lễ, ban phép lành và chủ trì nghi thức
        an táng. Linh mục cũng là người chia sẻ lời cầu nguyện, mang lại niềm an ủi cho gia quyến.
      </p>

      <h2>3. Trình tự nghi lễ trong hai tôn giáo</h2>
      <h3>Phật giáo</h3>
      <ul className="list-decimal pl-6">
        <li>Nhập quan và thiết lập bàn thờ, tụng kinh cầu siêu.</li>
        <li>Tụng kinh A Di Đà, Địa Tạng, niệm Phật cầu nguyện cho người mất.</li>
        <li>Đón khách viếng và thực hiện lễ phúng điếu trang nghiêm.</li>
        <li>Di quan, đưa linh cữu đến nơi an nghỉ cuối cùng.</li>
        <li>Lễ cầu siêu sau an táng, cúng 49 ngày, 100 ngày.</li>
      </ul>

      <h3>Công giáo</h3>
      <ul className="list-decimal pl-6">
        <li>Thăm viếng, đọc kinh cầu nguyện tại nhà hoặc nhà thờ.</li>
        <li>Thánh Lễ an táng do linh mục chủ sự, đọc Kinh Thánh và giảng lời hy vọng.</li>
        <li>Di quan, rước linh cữu ra nghĩa trang.</li>
        <li>Lễ an táng hoặc hỏa táng, linh mục làm phép và cầu nguyện.</li>
        <li>Thánh Lễ tưởng niệm sau 30 ngày, 1 năm hoặc theo lịch phụng vụ.</li>
      </ul>

      <figure className="relative w-full aspect-[16/9] my-6">
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Nghi thức tang lễ - minh họa"
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </figure>

      <h2>4. Trang phục và biểu tượng</h2>
      <p>
        Trong tang lễ Phật giáo, gia đình thường mặc áo trắng, đội khăn tang trắng – biểu trưng cho sự thanh khiết và
        tiếc thương. Phẩm phục của chư tăng là áo vàng hoặc nâu, thể hiện lòng từ bi và thanh tịnh.
      </p>
      <p>
        Đối với Công giáo, tang phục chủ yếu là màu đen hoặc tím, tượng trưng cho sự trang nghiêm và cầu nguyện.
        Linh mục mặc áo lễ trắng hoặc tím tùy theo nghi thức phụng vụ.
      </p>

      <h2>5. Âm nhạc và bài kinh</h2>
      <p>
        Tang lễ Phật giáo sử dụng chuông mõ, tiếng tụng kinh và nhạc niệm Phật nhẹ nhàng, tạo không gian thanh tịnh.
        Các bài kinh phổ biến gồm Kinh A Di Đà, Kinh Địa Tạng, Kinh Cầu Siêu.
      </p>
      <p>
        Tang lễ Công giáo lại vang lên những bản Thánh Ca, lời Kinh Thánh và âm nhạc thánh thiêng mang ý nghĩa cầu nguyện.
        Âm nhạc trong lễ an táng thể hiện niềm tin vào sự phục sinh và lòng biết ơn Thiên Chúa.
      </p>

      <figure className="relative w-full aspect-[16/9] my-6">
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Âm nhạc và bài kinh trong tang lễ"
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </figure>

      <h2>6. Lễ vật và bàn thờ tang</h2>
      <p>
        Trong tang lễ Phật giáo, bàn thờ thường được trang trí hoa trắng, đèn nến, di ảnh và bát hương. Lễ vật gồm
        trái cây, nước, nhang – thể hiện lòng thành và sự kính trọng.
      </p>
      <p>
        Với Công giáo, bàn lễ đặt thánh giá, hoa tươi và nến sáng. Gia đình cầu nguyện bằng Kinh Thánh, không cúng lễ vật
        theo phong tục Á Đông mà dâng lời cầu nguyện cho linh hồn người mất.
      </p>

      <h2>7. Quan niệm về an táng và hỏa táng</h2>
      <p>
        Phật giáo chấp nhận cả an táng lẫn hỏa táng. Hỏa táng được xem là cách giải thoát thân xác nhanh chóng, giúp
        hương linh sớm siêu sinh.
      </p>
      <p>
        Công giáo trước đây ưu tiên an táng, nhưng hiện nay Giáo Hội đã cho phép hỏa táng miễn là giữ sự tôn kính và đức tin.
        Sau lễ hỏa táng, tro cốt nên được lưu giữ tại nơi trang nghiêm hoặc nghĩa trang thánh.
      </p>

      <figure className="relative w-full aspect-[16/9] my-6">
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
          alt="Hỏa táng và an táng - minh họa"
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </figure>

      <h2>8. Phong tục tưởng niệm và hòa hợp tín ngưỡng</h2>
      <p>
        Phật giáo thường tổ chức các lễ cúng 7 ngày, 49 ngày, 100 ngày và giỗ đầu để cầu siêu cho linh hồn.
        Công giáo có Thánh Lễ cầu nguyện sau 30 ngày, 1 năm, thể hiện lòng tưởng nhớ và hiệp thông.
      </p>
      <p>
        Trong nhiều gia đình Việt, việc kết hợp hai truyền thống diễn ra phổ biến. Khi có người theo tôn giáo khác nhau,
        điều quan trọng là bàn bạc trước với sư trụ trì hoặc linh mục để thống nhất cách hành lễ hài hòa, tôn trọng lẫn nhau.
      </p>

      <figure className="relative w-full aspect-[16/9] my-6">
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-5.jpg`}
          alt="Phong tục địa phương và hòa hợp tín ngưỡng"
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </figure>

      <h2>9. Chi phí và lời khuyên khi chọn dịch vụ tang lễ</h2>
      <p>
        Chi phí tang lễ Phật giáo và Công giáo thường tương đương nếu chọn gói cơ bản. Tuy nhiên, các khoản chi có thể khác
        nhau tùy quy mô: số lượng sư/lm tham dự, dàn nhạc, phương tiện di quan hay việc chọn hỏa táng, an táng.
      </p>
      <p>
        Để tránh phát sinh, gia đình nên chọn dịch vụ tang lễ trọn gói uy tín, được tư vấn chi tiết từng hạng mục,
        đảm bảo mọi nghi thức được thực hiện đúng tín ngưỡng, trang nghiêm và đầy đủ.
      </p>

      <p>
        Nếu gia đình bạn cần tư vấn tổ chức tang lễ theo nghi thức Phật giáo hoặc Công giáo — từ khâu chuẩn bị,
        nghi thức cầu siêu/Thánh Lễ đến hậu lễ — đội ngũ{' '}
        <a
          href="https://sinhphuctho.com/lien-he"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Sinh Phúc Thọ
        </a>{' '}
        sẵn sàng hỗ trợ và đồng hành tận tâm.
      </p>

      <h2>FAQ — Câu hỏi thường gặp</h2>

      <h3>1. Gia đình có hai tôn giáo, nên tổ chức tang lễ thế nào?</h3>
      <p>
        Nên trao đổi trước với linh mục hoặc sư trụ trì để thống nhất cách hành lễ. Thông thường, có thể chia làm hai phần:
        buổi sáng tụng kinh Phật, buổi chiều Thánh Lễ, sao cho hài hòa và tôn trọng cả hai bên.
      </p>

      <h3>2. Công giáo có cho phép hỏa táng không?</h3>
      <p>
        Có. Giáo Hội Công giáo hiện nay cho phép hỏa táng nếu giữ lòng tôn kính và đức tin vào sự phục sinh.
      </p>

      <h3>3. Phật giáo có bắt buộc cúng 49 ngày không?</h3>
      <p>
        Không bắt buộc, nhưng 49 ngày là mốc quan trọng trong Phật giáo. Gia đình có thể linh hoạt theo phong tục và lời khuyên của nhà chùa.
      </p>

      <h3>4. Cần chuẩn bị giấy tờ gì khi an táng hoặc hỏa táng?</h3>
      <p>
        Bao gồm giấy chứng tử, giấy xác nhận bệnh viện, giấy tờ tùy thân và hồ sơ nghĩa trang. Dịch vụ mai táng trọn gói có thể hỗ trợ đầy đủ phần này.
      </p>

      <h2>Lời kết</h2>
      <p>
        Dù là tang lễ Phật giáo hay Công giáo, ý nghĩa sâu xa vẫn là tưởng nhớ và tiễn biệt người đã khuất bằng sự thành kính và yêu thương.
        Khi chuẩn bị tang lễ, hãy đặt sự tôn trọng tín ngưỡng và lòng nhân ái lên hàng đầu — đó chính là cách thể hiện trọn vẹn đạo hiếu của con người Việt Nam.
      </p>
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
