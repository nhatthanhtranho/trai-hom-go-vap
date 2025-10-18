import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from '@/components/CustomImage';
import { Metadata } from 'next/types';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Tết Trung Thu – Nguồn Gốc, Ý Nghĩa và Những Hoạt Động Truyền Thống';
  const description =
    'Khám phá Tết Trung Thu: nguồn gốc, ý nghĩa, phong tục truyền thống như rước đèn, múa lân, làm bánh, phá cỗ và những hoạt động hiện đại, gắn kết gia đình Việt.';
  const url = 'https://sinhphuctho.com/cam-nang/tet-trung-thu-nguon-goc-y-nghia';
  const image = '/assets/images/cam-nang/tet-trung-thu-nguon-goc-y-nghia/hinh-1.jpg';

  return {
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
}
export default function Page() {
  const slug = 'tet-trung-thu-nguon-goc-y-nghia';
  const title = 'Tết Trung Thu – Nguồn Gốc, Ý Nghĩa và Những Hoạt Động Truyền Thống';
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Tết Trung Thu, hay còn gọi là Tết Trông Trăng, diễn ra vào ngày Rằm tháng 8 âm lịch hằng
        năm. Đây là dịp lễ hội lớn dành cho thiếu nhi, đồng thời cũng là ngày đoàn viên, sum vầy của
        mọi gia đình Việt. Trong bài viết này,{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        sẽ cùng bạn tìm hiểu nguồn gốc, ý nghĩa và những phong tục đặc trưng của Tết Trung Thu – một
        nét đẹp văn hóa đã gắn liền với tuổi thơ của bao thế hệ.
      </p>

      {/* I. Nguồn gốc */}
      <h2>1. Nguồn gốc Tết Trung Thu</h2>
      <p>
        Nguồn gốc Tết Trung Thu có nhiều truyền thuyết khác nhau. Một số cho rằng phong tục này bắt
        nguồn từ Trung Quốc, gắn liền với câu chuyện Hằng Nga – Hậu Nghệ. Ở Việt Nam, Tết Trung Thu
        được ghi nhận từ thời nhà Lý, khi triều đình tổ chức lễ hội dưới ánh trăng với múa hát, rước
        đèn và làm bánh dâng cúng thần linh.
      </p>
      <p>
        Trải qua nhiều thế kỷ, Tết Trung Thu đã trở thành một trong những lễ hội truyền thống quan
        trọng nhất trong đời sống văn hóa người Việt, vừa mang tính tâm linh, vừa gắn liền với đời
        sống cộng đồng.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Nguồn gốc Tết Trung Thu"
          priority
        />
      </figure>

      <h2>2. Ý nghĩa của Tết Trung Thu</h2>
      <ul>
        <li>
          <strong>Tết thiếu nhi:</strong> Đây được xem là ngày hội của trẻ em, nơi các em được vui
          chơi, rước đèn, phá cỗ dưới ánh trăng tròn.
        </li>
        <li>
          <strong>Ngày đoàn viên:</strong> Trung Thu là dịp để gia đình sum họp, cùng nhau thưởng
          trăng, ăn bánh, nhắc nhở giá trị gắn kết yêu thương.
        </li>
        <li>
          <strong>Ý nghĩa tâm linh:</strong> Người xưa tin rằng trăng tròn biểu tượng cho sự viên
          mãn, hạnh phúc và may mắn.
        </li>
        <li>
          <strong>Giữ gìn truyền thống:</strong> Tết Trung Thu góp phần duy trì nét đẹp văn hóa lâu
          đời của dân tộc Việt Nam.
        </li>
      </ul>

      <h2>3. Những phong tục truyền thống trong Tết Trung Thu</h2>

      <h3>3.1. Rước đèn ông sao</h3>
      <p>
        Hình ảnh những chiếc đèn ông sao lung linh sắc màu gắn liền với tuổi thơ của bao thế hệ. Trẻ
        em cùng nhau rước đèn, ca hát khắp xóm làng, mang lại bầu không khí vui tươi, ấm áp.
      </p>

      <h3>3.2. Múa lân – múa sư tử</h3>
      <p>
        Múa lân không thể thiếu trong dịp Trung Thu. Đây là hoạt động mang ý nghĩa trừ tà, cầu may
        mắn, thu hút sự thích thú của cả trẻ em lẫn người lớn.
      </p>

      <h3>3.3. Làm mâm cỗ trông trăng</h3>
      <p>
        Mỗi gia đình thường chuẩn bị một mâm cỗ với bánh nướng, bánh dẻo, hoa quả, trà… đặt dưới ánh
        trăng để cả nhà cùng thưởng thức. Đây là biểu tượng của sự sum vầy, đoàn tụ.
      </p>

      <h3>3.4. Làm bánh Trung Thu</h3>
      <p>
        Bánh Trung Thu với hình tròn tượng trưng cho sự trọn vẹn. Hai loại phổ biến nhất là bánh
        nướng và bánh dẻo, thường có nhân thập cẩm, đậu xanh, trứng muối… Bánh cũng là món quà ý
        nghĩa dành tặng người thân, bạn bè dịp này.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Phong tục Tết Trung Thu"
          priority
        />
      </figure>

      {/* IV. Cách chuẩn bị */}
      <h2>4. Cách chuẩn bị mâm cỗ Trung Thu đầy đủ</h2>
      <p>Một mâm cỗ Trung Thu truyền thống thường bao gồm:</p>
      <ul>
        <li>Bánh nướng, bánh dẻo</li>
        <li>Hoa quả theo mùa (bưởi, na, hồng, chuối, dưa hấu…)</li>
        <li>Trà hoặc nước ngọt</li>
        <li>Đèn lồng, hoa tươi để trang trí</li>
      </ul>
      <p>
        Ngoài ra, nhiều gia đình còn chuẩn bị thêm các món ăn mặn như gà luộc, xôi gấc để tăng phần
        ấm cúng.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Phong tục Tết Trung Thu"
          priority
        />
      </figure>

      <h2>5. Hoạt động Trung Thu hiện đại</h2>
      <p>
        Ngày nay, Trung Thu không chỉ gói gọn trong gia đình mà còn được tổ chức ở trường học, cơ
        quan, khu dân cư. Các chương trình văn nghệ, phát quà, rước đèn tập thể mang lại niềm vui và
        khơi gợi tình đoàn kết trong cộng đồng.
      </p>
      <p>
        Các doanh nghiệp cũng thường chọn dịp này để gửi quà tặng khách hàng, đối tác, thể hiện sự
        tri ân và gắn kết mối quan hệ.
      </p>

      <h2>6. Những lưu ý khi tổ chức Tết Trung Thu</h2>
      <ul>
        <li>Chọn bánh Trung Thu từ thương hiệu uy tín, đảm bảo an toàn.</li>
        <li>Chuẩn bị đèn lồng an toàn cho trẻ em, tránh nguy cơ cháy nổ.</li>
        <li>Giữ gìn vệ sinh khi bày mâm cỗ ngoài trời, tránh côn trùng bám vào đồ ăn.</li>
        <li>Tổ chức hoạt động vui chơi vừa phải, tránh gây ồn ào, ảnh hưởng hàng xóm.</li>
      </ul>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
          alt="Phong tục Tết Trung Thu"
          priority
        />
      </figure>

      <h2>7. Kết luận</h2>
      <p>
        Tết Trung Thu là dịp lễ quan trọng, mang ý nghĩa nhân văn sâu sắc, gắn liền với tuổi thơ của
        mỗi người. Đây không chỉ là ngày hội của trẻ em mà còn là dịp để gắn kết các thành viên
        trong gia đình, lưu giữ những giá trị truyền thống quý báu.
      </p>
      <p>
        Nếu bạn quan tâm đến các nghi lễ truyền thống, văn hóa tâm linh hoặc đang cần tìm dịch vụ{' '}
        <strong>mai táng trọn gói, hỏa táng, an táng</strong>, hãy truy cập{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>
        . Đội ngũ tận tâm của chúng tôi luôn sẵn sàng đồng hành, mang đến sự chu toàn và bình an cho
        mỗi gia đình.
      </p>
    </CamNangLayout>
  );
}
