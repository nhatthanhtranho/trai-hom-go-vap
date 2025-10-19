import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import Image from '@/src/components/CustomImage';
import type { GetStaticProps, Metadata } from 'next';

const slug = 'tet-trung-thu-nguon-goc-y-nghia';
const title = 'Tết Trung Thu – Nguồn Gốc, Ý Nghĩa và Những Hoạt Động Truyền Thống';
const description =
  'Khám phá Tết Trung Thu: nguồn gốc, ý nghĩa, phong tục truyền thống như rước đèn, múa lân, làm bánh, phá cỗ và những hoạt động hiện đại gắn kết gia đình Việt.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;

export const metadata: Metadata = {
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
    type: 'article',
    images: [
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tết Trung Thu – lễ hội truyền thống Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/hinh-1.jpg`],
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
    <CamNangLayout title={title}
    bannerImageSrc={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
    >
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>
        <p className="mt-3 text-sm text-gray-600 max-w-3xl">{description}</p>

        {/* Quote */}
        <div className="mt-5 border-l-4 border-yellow-300 bg-yellow-50/40 p-3 rounded-md max-w-3xl">
          <blockquote className="italic text-gray-700 text-sm leading-relaxed">
            “Tết Trung Thu là dịp để đoàn viên, sẻ chia yêu thương – nơi những ký ức tuổi thơ và giá
            trị gia đình được gắn kết dưới ánh trăng tròn.”
          </blockquote>
          <div className="mt-2 text-xs text-gray-500">— Sinh Phúc Thọ</div>
        </div>

        {/* Table of Contents */}
        <nav className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-100 shadow-sm max-w-3xl">
          <h2 className="font-semibold mb-2 text-gray-800">Mục lục</h2>
          <ul className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
            <li>
              <a href="#nguon-goc" className="hover:text-yellow-700">
                1. Nguồn gốc Tết Trung Thu
              </a>
            </li>
            <li>
              <a href="#y-nghia" className="hover:text-yellow-700">
                2. Ý nghĩa của Tết Trung Thu
              </a>
            </li>
            <li>
              <a href="#phong-tuc" className="hover:text-yellow-700">
                3. Những phong tục truyền thống
              </a>
            </li>
            <li>
              <a href="#mam-co" className="hover:text-yellow-700">
                4. Cách chuẩn bị mâm cỗ Trung Thu đầy đủ
              </a>
            </li>
            <li>
              <a href="#hien-dai" className="hover:text-yellow-700">
                5. Hoạt động Trung Thu hiện đại
              </a>
            </li>
            <li>
              <a href="#luu-y" className="hover:text-yellow-700">
                6. Những lưu ý khi tổ chức Tết Trung Thu
              </a>
            </li>
            <li>
              <a href="#ket-luan" className="hover:text-yellow-700">
                7. Kết luận
              </a>
            </li>
          </ul>
        </nav>

        {/* EEAT */}
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 max-w-3xl">
          <div>
            <div className="font-medium">
              Sinh Phúc Thọ — Nguồn tri thức phong tục Việt, chia sẻ kiến thức lễ nghi & văn hóa tâm linh.
            </div>
            <div className="text-xs">
              Chuyên trang tổng hợp các nghi lễ truyền thống, bài văn khấn chuẩn và hướng dẫn chi tiết
              thực hành tâm linh đúng cách.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 flex flex-wrap gap-3 max-w-3xl">
          <a
            href="https://sinhphuctho.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg px-4 py-2 bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700"
          >
            Về trang chủ
          </a>
          <a
            href="https://sinhphuctho.com/cam-nang.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg px-4 py-2 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50"
          >
            Xem Cẩm Nang
          </a>
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* 1. Nguồn gốc */}
        <section id="nguon-goc">
          <h2>1. Nguồn gốc Tết Trung Thu</h2>
          <p>
            Tết Trung Thu – hay còn gọi là Tết Trông Trăng – là một trong những lễ hội truyền thống lâu đời nhất của người Việt.
            Theo sử sách, Trung Thu xuất phát từ nền văn hóa nông nghiệp lúa nước, là dịp để con người cảm tạ trời đất,
            cầu mùa màng bội thu và bày tỏ lòng biết ơn tổ tiên.
          </p>
          <p>
            Từ thời nhà Lý, lễ hội này đã trở thành ngày hội chính thức trong năm.
            Câu chuyện dân gian về Hằng Nga và Hậu Nghệ cũng góp phần tô điểm thêm nét thi vị cho Tết Trung Thu,
            tượng trưng cho tình yêu thủy chung và hạnh phúc viên mãn dưới ánh trăng tròn.
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
              alt="Nguồn gốc Tết Trung Thu Việt Nam"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 1: Nguồn gốc Tết Trung Thu — lễ hội trăng rằm của người Việt
            </figcaption>
          </figure>
        </section>

        {/* 2. Ý nghĩa */}
        <section id="y-nghia" className="mt-8">
          <h2>2. Ý nghĩa của Tết Trung Thu</h2>
          <p>
            Tết Trung Thu mang trong mình nhiều tầng ý nghĩa – vừa là ngày hội của thiếu nhi,
            vừa là dịp đoàn viên sum họp của người lớn. Ánh trăng tròn biểu trưng cho sự trọn vẹn,
            viên mãn và hạnh phúc đủ đầy.
          </p>
          <ul>
            <li>
              <strong>Tết của thiếu nhi:</strong> Dịp để trẻ nhỏ được vui chơi, rước đèn, phá cỗ,
              nhận quà và cảm nhận tình thương từ gia đình, cộng đồng.
            </li>
            <li>
              <strong>Tết của tình thân:</strong> Dưới ánh trăng tròn, gia đình quây quần bên nhau,
              thưởng trà, ăn bánh, kể chuyện xưa, nuôi dưỡng sự gắn bó và yêu thương.
            </li>
            <li>
              <strong>Ý nghĩa tâm linh:</strong> Trăng tròn là biểu tượng cho sự viên mãn,
              may mắn và sự khởi đầu tốt lành cho những tháng cuối năm.
            </li>
          </ul>
        </section>

        {/* 3. Phong tục */}
        <section id="phong-tuc" className="mt-8">
          <h2>3. Những phong tục truyền thống trong Tết Trung Thu</h2>

          <h3>3.1. Rước đèn ông sao</h3>
          <p>
            Trẻ em cầm đèn ông sao rước khắp ngõ xóm là hình ảnh không thể thiếu trong đêm Trung Thu.
            Ánh sáng từ đèn ông sao tượng trưng cho trí tuệ sáng suốt, niềm tin và ước mơ trong sáng của tuổi thơ.
          </p>

          <h3>3.2. Múa lân – múa sư tử</h3>
          <p>
            Múa lân được xem là hoạt động mang lại phước lành, trừ tà và cầu an.
            Tiếng trống rộn ràng cùng điệu múa dũng mãnh thể hiện tinh thần đoàn kết và niềm vui hân hoan của cả cộng đồng.
          </p>

          <h3>3.3. Làm bánh Trung Thu</h3>
          <p>
            Bánh Trung Thu là linh hồn của ngày lễ.
            Hình tròn tượng trưng cho sự trọn vẹn, đoàn viên.
            Dù là bánh nướng hay bánh dẻo, mỗi chiếc bánh đều là tấm lòng hiếu thảo, lời chúc bình an gửi đến người thân yêu.
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
              alt="Phong tục Tết Trung Thu truyền thống"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 2: Múa lân, làm bánh, rước đèn — những hoạt động đặc trưng của Trung Thu
            </figcaption>
          </figure>
        </section>

        {/* 4. Mâm cỗ */}
        <section id="mam-co" className="mt-8">
          <h2>4. Cách chuẩn bị mâm cỗ Trung Thu đầy đủ</h2>
          <p>
            Mâm cỗ Trung Thu không chỉ để “phá cỗ” mà còn là biểu tượng của lòng hiếu kính và ước vọng sung túc.
            Một mâm cỗ đầy đặn thể hiện sự biết ơn trời đất, tổ tiên, đồng thời mang lại không khí ấm cúng cho gia đình.
          </p>
          <ul>
            <li><strong>Bánh Trung Thu:</strong> Bánh nướng, bánh dẻo – biểu tượng của đoàn viên và phúc lộc.</li>
            <li><strong>Hoa quả:</strong> Bưởi, hồng, chuối, na, dưa hấu – tượng trưng cho sự may mắn, sung túc.</li>
            <li><strong>Trà hoặc nước ngọt:</strong> Dùng để thưởng thức cùng bánh, tăng vị ấm cúng và thi vị.</li>
            <li><strong>Đèn lồng và hoa tươi:</strong> Tô điểm không gian, mang ánh sáng và hương sắc mùa thu.</li>
          </ul>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
              alt="Mâm cỗ Trung Thu truyền thống Việt Nam"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 3: Mâm cỗ Trung Thu — biểu tượng của đoàn viên và sung túc
            </figcaption>
          </figure>
        </section>

        {/* 5. Hiện đại */}
        <section id="hien-dai" className="mt-8">
          <h2>5. Hoạt động Trung Thu hiện đại</h2>
          <p>
            Ngày nay, Tết Trung Thu không chỉ dừng lại ở phạm vi gia đình, mà còn được tổ chức rộn ràng tại trường học, công ty và khu dân cư.
            Nhiều chương trình tặng quà, đêm hội trăng rằm, làm đèn handmade được tổ chức, giúp trẻ em và người lớn cùng nhau tận hưởng không khí ấm áp, sẻ chia.
          </p>
        </section>

        {/* 6. Lưu ý */}
        <section id="luu-y" className="mt-8">
          <h2>6. Những lưu ý khi tổ chức Tết Trung Thu</h2>
          <ul>
            <li>Chọn mua bánh Trung Thu từ thương hiệu uy tín, rõ nguồn gốc để đảm bảo an toàn thực phẩm.</li>
            <li>Đèn lồng cho trẻ nhỏ nên sử dụng loại dùng pin hoặc đèn LED, tránh nguy cơ cháy nổ.</li>
            <li>Giữ vệ sinh khi bày mâm cỗ ngoài trời, che chắn cẩn thận tránh côn trùng.</li>
            <li>Tránh gây tiếng ồn lớn ảnh hưởng đến xung quanh, giữ nét đẹp văn hóa cộng đồng.</li>
          </ul>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/hinh-4.jpg`}
              alt="Không khí Tết Trung Thu hiện đại"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 4: Trung Thu hiện đại – kết hợp truyền thống và sáng tạo
            </figcaption>
          </figure>
        </section>

        {/* 7. Kết luận */}
        <section id="ket-luan" className="mt-8">
          <h2>7. Kết luận</h2>
          <p>
            Tết Trung Thu không chỉ là ngày hội của trẻ em, mà còn là dịp để mỗi người Việt nhìn lại,
            trân trọng những giá trị gia đình, tình thân và văn hóa dân tộc.
            Dẫu thời gian trôi, ánh trăng rằm tháng Tám vẫn luôn soi sáng ký ức đoàn viên trong mỗi trái tim Việt.
          </p>
          <p>
            Nếu bạn quan tâm đến <strong>phong tục Việt Nam, nghi lễ truyền thống</strong> hoặc đang tìm hiểu
            dịch vụ <strong>mai táng, an táng, hỏa táng trọn gói</strong> theo nghi lễ cổ truyền,
            hãy truy cập{' '}
            <a
              href="https://sinhphuctho.com"
              className="text-yellow-700 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sinh Phúc Thọ
            </a>
            — nơi lan tỏa giá trị văn hóa, tâm linh và sự chu toàn an lành cho mỗi gia đình.
          </p>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mt-12">
          <h2>🌓 Câu hỏi thường gặp về Tết Trung Thu</h2>
          <h3>Tết Trung Thu có từ bao giờ?</h3>
          <p>
            Theo tư liệu, Tết Trung Thu xuất hiện từ hơn 1000 năm trước, vào thời nhà Đường (Trung Hoa),
            sau đó du nhập và được người Việt gìn giữ, phát triển thành lễ hội mang bản sắc riêng.
          </p>

          <h3>Ý nghĩa của ánh trăng trong Tết Trung Thu là gì?</h3>
          <p>
            Ánh trăng tròn biểu tượng cho sự viên mãn, hạnh phúc và đoàn viên.
            Người Việt tin rằng, ngắm trăng vào ngày rằm tháng Tám giúp tâm hồn tĩnh tại, hướng thiện.
          </p>

          <h3>Bánh Trung Thu nên chọn loại nào?</h3>
          <p>
            Nên chọn bánh từ thương hiệu uy tín, bao bì rõ ràng, còn hạn sử dụng.
            Với người ăn kiêng, có thể chọn bánh nhân hạt, yến mạch hoặc không đường.
          </p>

          <h3>Tết Trung Thu dành cho ai?</h3>
          <p>
            Trung Thu vốn là Tết của trẻ em, nhưng ý nghĩa sâu xa hướng đến mọi người —
            để cùng nhau đoàn tụ, yêu thương và gắn kết gia đình.
          </p>
        </section>
      </article>

    </CamNangLayout>
  );
}
