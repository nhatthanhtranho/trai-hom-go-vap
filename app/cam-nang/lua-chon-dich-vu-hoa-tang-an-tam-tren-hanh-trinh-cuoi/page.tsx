// app/cam-nang/lua-chon-dich-vu-hoa-tang-an-tam-tren-hanh-trinh-cuoi/page.tsx

import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import FaqSection from '@/components/FAQ';
import Image from 'next/image';
import Link from 'next/link';
export default async function Page() {
  const slug = 'lua-chon-dich-vu-hoa-tang-an-tam-tren-hanh-trinh-cuoi';
  const title = 'Lựa chọn dịch vụ hỏa táng an tâm trên hành trình cuối';

  // ✅ FAQ data
  const faqs = [
    {
      question: 'Sau hỏa táng tro cốt được xử lý thế nào?',
      answer:
        'Gia đình có thể chọn lưu tro cốt tại chùa, đưa về nhà thờ họ, xây tháp lưu tro, hoặc thực hiện nghi thức rải tro cốt theo tâm nguyện.',
    },
    {
      question: 'Dịch vụ hỏa táng có đi kèm xe tang và nghi thức không?',
      answer:
        'Khi chọn gói trọn gói tại Sinh Phúc Thọ, gia đình sẽ được hỗ trợ đầy đủ từ xe tang, trang trí lễ đường, nghi thức tâm linh cho đến vận chuyển và hỏa táng.',
    },
    {
      question: 'Sau khi hỏa táng có được hoàn lại tiền không?',
      answer:
        'Gia đình có thể xin giấy chứng nhận hỏa táng để nộp về phường, từ đó làm thủ tục nhận lại phần hỗ trợ chi phí theo quy định địa phương.',
    },
    {
      question: 'Giá tiền hỏa táng là bao nhiêu?',
      answer: 'Giá tiền thường được bao gồm trong gói hỏa táng trọn gói của Sinh Phúc Thọ.',
    },
  ];

  return (
    <CamNangLayout title={title}>

      <h1>{title}</h1>
      <p>
        Việc chọn đúng dịch vụ hỏa táng cho giai đoạn cuối đời của người thân có thể tạo ra sự
        khác biệt lớn trong khoảnh khắc tiễn biệt. Bài viết dưới đây chia sẻ những thông tin cần
        thiết để gia đình có thể lựa chọn dịch vụ hỏa táng chuyên nghiệp và nhân văn, giúp vượt
        qua giai đoạn khó khăn.
      </p>

      <p>
        Trong chuyên mục{' '}
        <Link
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-blue-600 font-medium underline"
        >
          Cẩm nang tang lễ Sinh Phúc Thọ
        </Link>
        , bạn có thể tham khảo thêm nhiều thông tin hữu ích về nghi lễ, phong tục và dịch vụ tang
        lễ hiện đại.
      </p>

      {/* Công nghệ */}
      <h2>Công nghệ hỏa táng hiện đại nhất hiện nay</h2>
      <p>
        <strong>Sinh Phúc Thọ</strong> lựa chọn Phước Lạc Viên không chỉ bởi dịch vụ chu đáo mà
        còn nhờ công nghệ hỏa táng tiên tiến TABO SE từ Thụy Điển. Công nghệ này cho phép thực
        hiện <em>“hỏa táng nguyên xương”</em> với tỷ lệ thành công 99%, rút ngắn thời gian chỉ còn
        khoảng 3 giờ thay vì 5–8 giờ như công nghệ cũ.
      </p>
      <p>
        Ngoài ra, Phước Lạc Viên còn cung cấp tiện ích như: phòng tự nhặt tro cốt, chọn giờ hỏa
        táng, lưu quan tài, phòng hành lễ, tường lưu tro cốt…
      </p>
      <figure>
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Công nghệ hỏa táng hiện đại tại Phước Lạc Viên"
          fill
        />
      </figure>

      {/* Ưu điểm */}
      <h2>Ưu điểm dịch vụ hỏa táng trọn gói tại Sinh Phúc Thọ</h2>
      <p>
        Hỏa táng là phương pháp tiễn biệt hiện đại, thân thiện môi trường và tiết kiệm chi phí.{' '}
        <strong>Sinh Phúc Thọ</strong> hợp tác cùng các cơ sở hỏa táng uy tín tại TP.HCM để mang
        đến dịch vụ chất lượng cao cho khách hàng.
      </p>

      <h3>Một số lợi ích nổi bật gồm:</h3>
      <ul>
        <li>
          <strong>Tiết kiệm chi phí:</strong> chỉ bằng 1/5 so với mai táng truyền thống.
        </li>
        <li>
          <strong>Sự tiện lợi:</strong> tro cốt có thể rải, lưu giữ tại chùa, nhà thờ, tư gia hoặc
          tường lưu niệm.
        </li>
        <li>
          <strong>Bảo vệ môi trường:</strong> giảm tác động môi trường, tiết kiệm đất nghĩa trang.
        </li>
      </ul>

      {/* Yếu tố cần cân nhắc */}
      <h2>Các yếu tố cần cân nhắc khi chọn dịch vụ hỏa táng</h2>
      <p>Để lựa chọn dịch vụ uy tín, gia đình nên cân nhắc những yếu tố sau:</p>
      <ul>
        <li>Vị trí nhà hỏa táng có thuận tiện di chuyển hay không.</li>
        <li>Công nghệ hỏa táng tiên tiến, thân thiện môi trường.</li>
        <li>Quy trình minh bạch, tuân thủ pháp luật.</li>
        <li>Chi phí rõ ràng, không phát sinh ngoài dự kiến.</li>
        <li>Uy tín, kinh nghiệm hoạt động lâu năm.</li>
      </ul>
      <figure>
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Các yếu tố cần lưu ý khi chọn dịch vụ hỏa táng"
          fill
        />
      </figure>

      {/* Dịch vụ tại Sinh Phúc Thọ */}
      <h2>Dịch vụ hỏa táng trọn gói Sinh Phúc Thọ TPHCM</h2>
      <p>
        Sau tang lễ, đội ngũ <strong>Sinh Phúc Thọ</strong> sẽ dùng xe chuyên dụng vận chuyển áo
        quan đến nhà hỏa táng, hỗ trợ gia đình chọn cơ sở phù hợp và chi trả toàn bộ chi phí nếu
        chọn dịch vụ trọn gói.
      </p>
      <p>
        Chuyên viên tang lễ đồng hành cùng gia quyến, hỗ trợ bài trí, xếp lễ và phối hợp với nhà
        hỏa táng để đảm bảo mọi nghi thức trang nghiêm, trọn vẹn.
      </p>
      <figure>
        <Image
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Hỏa táng trọn gói Sinh Phúc Thọ tại TPHCM"
          fill
        />
      </figure>

      <p>
        Với đối tác là các nhà hỏa táng uy tín tại TP.HCM, Sinh Phúc Thọ cam kết quy trình minh
        bạch, không phát sinh chi phí và luôn đồng hành cùng gia đình trong giai đoạn khó khăn.
      </p>

      {/* FAQ dùng component */}

      {/* Kết luận */}
      <h2>Kết luận</h2>
      <p>
        Việc lựa chọn dịch vụ hỏa táng an tâm không chỉ giúp gia đình vượt qua giai đoạn khó khăn
        mà còn đảm bảo nghi lễ tiễn biệt được diễn ra trang nghiêm, trọn vẹn. Với sự đồng hành của{' '}
        <strong>Sinh Phúc Thọ</strong>, mỗi gia đình có thể yên tâm rằng hành trình cuối của người
        thân sẽ được chăm lo chu đáo, minh bạch và nhân văn.
      </p>
      <p>
        Liên hệ hotline <strong>0913 673 661</strong> để được tư vấn chi tiết hoặc tham khảo thêm
        tại{' '}
        <Link
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-blue-600 font-medium underline"
        >
          Cẩm nang tang lễ Sinh Phúc Thọ
        </Link>
        .
      </p>
      <FaqSection faqs={faqs} title='CÂU HỎI THƯỜNG GẶP VỀ LÒ HỎA TÁNG' align='left' />
    </CamNangLayout>
  );
}

// ✅ Enable ISR (rebuild every 1 hour)
export const revalidate = 3600;
