import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from '@/components/CustomImage';
import type { GetStaticProps, Metadata } from 'next';
import PostHeadline from '@/components/Post/PostHeadline';

const slug = 'cung-com-cho-nguoi-moi-mat';
const title = 'Cúng cơm cho người mới mất – Ý nghĩa, cách chuẩn bị và văn khấn chuẩn';
const description =
  'Hướng dẫn chi tiết về tục cúng cơm cho người mới mất: ý nghĩa phong tục, cách chuẩn bị mâm cơm, bài văn khấn chuẩn và những lưu ý quan trọng trong 100 ngày đầu.';
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
        url: `/assets/images/cam-nang/${slug}/cung-com-cho-nguoi-moi-mat-ban-tho.webp`,
        width: 1200,
        height: 630,
        alt: 'Mâm cơm cúng cho người mới mất - Sinh Phúc Thọ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`/assets/images/cam-nang/${slug}/cung-com-cho-nguoi-moi-mat-ban-tho.webp`],
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
      <header className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{title}</h1>
        <p className="mt-3 text-sm text-gray-600 max-w-3xl">{description}</p>

        {/* Quote */}
        <div className="mt-5 border-l-4 border-yellow-300 bg-yellow-50/40 p-3 rounded-md max-w-3xl">
          <blockquote className="italic text-gray-700 text-sm leading-relaxed">
            “Cúng cơm là lời nhắn gửi của người ở lại — vừa là trách nhiệm, vừa là tình cảm; thực
            hiện nghiêm trang để tưởng nhớ, bày tỏ thành kính và giữ gìn truyền thống.”
          </blockquote>
          <div className="mt-2 text-xs text-gray-500">— Sinh Phúc Thọ</div>
        </div>

        {/* Table of Contents */}
        <PostHeadline
          items={[
            {
              title: 'Tại sao cúng cơm lại quan trọng trong 100 ngày đầu?',
              id: 'y-nghia',
            },
            { title: 'Nguồn gốc và lịch sử phong tục cúng cơm', id: 'nguon-goc' },
            { title: 'Nguồn gốc và lịch sử phong tục cúng cơm', id: 'nguon-goc' },
            { title: 'Chuẩn bị mâm cúng: danh sách chi tiết & bố trí', id: 'mam-cung' },
            { title: 'Văn khấn chuẩn và phân tích từng đoạn', id: 'van-khan' },
            { title: 'Cúng theo mốc thời gian: 3, 7, 49, 100 ngày', id: 'cung-moc' },
            { title: 'Kiêng kỵ và sai lầm thường gặp', id: 'diem-kieng' },
            { title: 'Thực hiện cúng tại nhà, chùa và nghĩa trangp', id: 'thuc-hien' },
            { title: 'Kinh nghiệm thực tế từ Sinh Phúc Thọ', id: 'kinh-nghiem' },
            { title: 'Hình minh họa rải theo phần', id: 'hinh-trong-section' },
            { title: 'FAQ — Các câu hỏi thường gặp', id: 'faq' },
            { title: 'Kết luận và liên hệ hỗ trợ', id: 'ket-luan' },
          ]}
        />

        {/* EEAT */}
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 max-w-3xl">
          <div>
            <div className="font-medium">
              Sinh Phúc Thọ — Hơn 10 năm tư vấn nghi lễ, hỗ trợ tổ chức tang lễ trọn gói
            </div>
            <div className="text-xs">
              Đội ngũ chuyên viên am hiểu phong tục địa phương, sẵn sàng hỗ trợ thực hiện nghi lễ
              trang nghiêm và hợp lý.
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
        {/* 1. Ý nghĩa */}
        <section id="y-nghia">
          <h2>1. Tại sao cúng cơm lại quan trọng trong 100 ngày đầu?</h2>
          <p>
            Cúng cơm cho người mới mất là một nghi thức vừa mang tính tâm linh vừa có ý nghĩa xã hội
            sâu sắc trong văn hoá Việt Nam. Trong vòng 100 ngày đầu, gia đình thường duy trì mâm cơm
            hàng ngày hoặc theo các mốc để tưởng nhớ, bày tỏ lòng thành kính và giúp người đang ở
            lại có thời gian để ổn định cảm xúc. Về mặt tâm lý, nghi thức tạo ra một khuôn phép để
            chia sẻ nỗi buồn, nhắc lại kỷ niệm, và cùng nhau thực hiện hành động cụ thể - điều này
            giúp quá trình chịu tang bớt hỗn loạn và có cấu trúc hơn.
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/cung-com-cho-nguoi-moi-mat-ban-tho.webp`}
              alt="Mâm cơm cúng truyền thống - đại diện cho lòng thành"
              className="object-cover"
              priority
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 1: Mâm cơm cúng truyền thống — biểu tượng của lòng thành và đủ đầy
            </figcaption>
          </figure>

          <h3>Nét nhân văn</h3>
          <p>
            Khi một người mất đi, gia đình và cộng đồng mất đi một mối liên hệ. Việc thực hiện nghi
            lễ cúng cơm giúp bày tỏ lòng biết ơn với người đã khuất, đồng thời củng cố mối liên hệ
            giữa những người ở lại. Hành động chung tay của họ hàng, hàng xóm trong việc chuẩn bị
            mâm cúng cũng là biểu hiện của tình làng, nghĩa xóm.
          </p>

          <h3>Ý nghĩa tâm linh</h3>
          <p>
            Theo quan niệm truyền thống và các tôn giáo phổ biến ở Việt Nam (Phật giáo, đạo Mẫu, thờ
            cúng tổ tiên), cúng cơm là cách gửi thức ăn tinh thần và vật chất cho vong linh, giúp
            vong linh được an ủi, sớm siêu thoát hoặc được phù hộ. Việc duy trì mâm cúng liên tục
            được xem là biểu hiện của sự quan tâm, tránh để vong linh bị bỏ quên.
          </p>

          <h3>Tác dụng xã hội</h3>
          <p>
            Nghi lễ cúng cơm kéo mọi người đến cùng chia sẻ, nhắc nhở trách nhiệm, và chia sẻ công
            việc hậu cần của gia đình. Qua đó, gia đình có được sự hỗ trợ thiết thực — từ nấu nướng,
            tiếp khách đến tổ chức thủ tục pháp lý.
          </p>
        </section>

        {/* 2. Nguồn gốc */}
        <section id="nguon-goc" className="mt-8">
          <h2>2. Nguồn gốc và lịch sử phong tục cúng cơm</h2>
          <p>
            Tục cúng cơm có nguồn gốc lâu đời trong khu vực Đông Á, phản ánh niềm tin về sự tiếp nối
            giữa người sống và người mất. Ở Việt Nam, phong tục này phát triển qua nhiều thế kỷ và
            hòa nhập nhiều yếu tố: tín ngưỡng dân gian, Phật giáo, Nho giáo và các hình thức thờ
            cúng bản địa như Đạo Mẫu. Mỗi vùng miền phát triển những sắc thái riêng, nhưng đều giữ
            chung một tinh thần: tôn kính tổ tiên và người đã khuất.
          </p>

          <figure className="relative my-6 h-56 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/mam-cung-com-nguoi-moi-mat.webp`}
              alt="Lễ cúng truyền thống qua ảnh - đại diện nguồn gốc phong tục"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 2: Lễ cúng truyền thống — thể hiện sự giao thoa tín ngưỡng trong văn hoá
            </figcaption>
          </figure>

          <h3>Sự ảnh hưởng của các tôn giáo</h3>
          <p>
            - <strong>Phật giáo:</strong> nhấn mạnh về nhân quả, luân hồi và nghi lễ tụng niệm cầu
            siêu. <br />- <strong>Nho giáo:</strong> đặt nặng đạo hiếu, trật tự gia đình, tôn trọng
            tổ tiên và nghi thức. <br />- <strong>Tín ngưỡng dân gian:</strong> phong tục, tập quán
            và các nghi lễ mang tính địa phương. Những yếu tố này hòa quyện để thành các nghi thức
            cúng cơm khác nhau theo từng vùng.
          </p>

          <h3>Thay đổi theo thời gian</h3>
          <p>
            Với đời sống hiện đại, nhiều gia đình giản lược phần hình thức nhưng vẫn giữ cốt lõi:
            lòng thành. Việc cúng cơm trở nên thực tế hơn — thuận theo điều kiện gia đình, không làm
            mất đi giá trị văn hoá mà chỉ tối ưu để phù hợp với nhịp sống hiện nay.
          </p>
        </section>

        {/* 3. Mâm cúng */}
        <section id="mam-cung" className="mt-8">
          <h2>3. Chuẩn bị mâm cúng: danh sách chi tiết & bố trí</h2>
          <p>
            Mâm cúng hàng ngày không cần quá cầu kỳ nhưng cần trang trọng, sạch sẽ và thể hiện sự
            thành tâm. Dưới đây là danh sách chi tiết theo từng phần và hướng dẫn bố trí để gia đình
            dễ thực hiện.
          </p>

          <figure className="relative my-6 h-64 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/le-cung-com-tai-nha.webp`}
              alt="Mâm cúng được bày biện gọn gàng, trang nghiêm"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 3: Ví dụ mâm cúng hàng ngày — trang nghiêm và đủ đầy
            </figcaption>
          </figure>

          <h3>Danh sách đề xuất cho mâm cúng hàng ngày</h3>
          <ul>
            <li>
              <strong>Cơm trắng:</strong> bát cơm đầy, đặt chính giữa — biểu tượng sự đủ đầy.
            </li>
            <li>
              <strong>Món chính:</strong> 1 món mặn (thịt, cá) hoặc món chay (đậu, nấm, rau), tùy
              tín ngưỡng.
            </li>
            <li>
              <strong>Canh/rau:</strong> một chén canh hoặc rau luộc để cân bằng.
            </li>
            <li>
              <strong>Trà/ nước:</strong> chén trà hoặc cốc nước nhỏ để dâng.
            </li>
            <li>
              <strong>Muối & gạo:</strong> đặt 1 chén muối nhỏ và 1 chén gạo tượng trưng cho bảo
              toàn.
            </li>
            <li>
              <strong>Hoa tươi & trái cây:</strong> chọn trái cây sạch, màu sắc hài hòa; hoa nên là
              hoa tươi, không quá mạnh mùi.
            </li>
            <li>
              <strong>Nhang & đèn:</strong> hương + nến để thắp trước khi khấn.
            </li>
          </ul>

          <h3>Bố trí mâm cúng – nguyên tắc chung</h3>
          <ol>
            <li>Đặt mâm trên bàn nhỏ hoặc bàn tạm, không đặt trực tiếp trên nền đất.</li>
            <li>
              Cơm để giữa, món chính bên phải (người nhìn vào), canh/rau bên trái, trà ở phía sau.
            </li>
            <li>
              Hoa & trái cây đặt ở phía sau hoặc góc trên bàn; chén muối/gạo đặt ở giữa phía trước.
            </li>
            <li>Giữ khu vực sạch sẽ, tránh vật dụng cá nhân xung quanh.</li>
          </ol>

          <h3>Gợi ý thực tế cho từng loại gia đình</h3>
          <p>
            - <strong>Gia đình nhỏ, bận rộn:</strong> dùng mâm đơn giản (cơm, 1 món, canh, trà).{' '}
            <br />- <strong>Gia đình lớn, nhiều khách:</strong> chuẩn bị thêm vài món để tiếp khách
            nhưng vẫn giữ phần cúng chính gọn gàng. <br />- <strong>Gia đình Phật tử:</strong> ưu
            tiên đồ chay, hạn chế mùi mạnh và món khó tiêu.
          </p>
        </section>

        {/* 4. Văn khấn */}
        <section id="van-khan" className="mt-8">
          <h2>4. Văn khấn chuẩn và phân tích từng đoạn</h2>
          <p>
            Văn khấn là phần thể hiện trực tiếp tấm lòng, tâm nguyện và sự tôn kính. Dưới đây là mẫu
            văn khấn đơn giản, dễ nhớ, phù hợp với mâm cúng hàng ngày hoặc cúng theo mốc.
          </p>

          <figure className="relative my-6 h-56 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/cung-com-49-ngay.webp`}
              alt="Gia đình đọc văn khấn trang nghiêm bên mâm cúng"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 4: Gia đình thực hiện văn khấn trang nghiêm
            </figcaption>
          </figure>

          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-800 text-sm">
            Nam mô A Di Đà Phật! <br />
            Con tên là: …, đại diện gia đình họ …, xin kính lễ chư vị tôn thần, tổ tiên và linh hồn
            của … (tên người mất). <br />
            Hôm nay là ngày … tháng … năm …, gia đình thành tâm sắm lễ cơm canh dâng trước án, cúi
            mong linh hồn nhận lễ, siêu thoát, phù hộ cho con cháu an lạc, sức khỏe, gặp nhiều may
            mắn. Nam mô A Di Đà Phật! (lặp 3 lần)
          </blockquote>

          <h3>Phân tích chi tiết</h3>
          <p>
            - <strong>Mở đầu (Xưng danh):</strong> giúp xác định người khấn để các vị thần và tổ
            tiên biết ai đang làm lễ. <br />- <strong>Nêu mục đích:</strong> mô tả rõ lý do dâng lễ
            (hàng ngày/mốc cụ thể). <br />- <strong>Lời nguyện:</strong> mong vong linh được siêu
            thoát, phù hộ cho gia đình — phần chính của văn khấn. <br />- <strong>Đóng kết:</strong>{' '}
            thường là niệm Phật hoặc một câu kết trang nghiêm.
          </p>

          <h3>Ghi chú khi đọc văn khấn</h3>
          <ul>
            <li>Đọc chậm rãi, trang nghiêm và dễ nghe; tránh đọc qua loa.</li>
            <li>Ghi văn khấn ra giấy nếu cần để tránh quên họ tên, ngày tháng.</li>
            <li>Không thêm lời xúc phạm, châm biếm hoặc câu từ gây mất tôn nghiêm.</li>
          </ul>
        </section>

        {/* 5. Cúng mốc */}
        <section id="cung-moc" className="mt-8">
          <h2>5. Cúng theo mốc thời gian: 3, 7, 49, 100 ngày</h2>
          <p>
            Các mốc cúng thường có ý nghĩa tượng trưng và có nguồn gốc từ niềm tin tôn giáo cũng như
            phong tục địa phương. Dưới đây là cách thực hiện, ý nghĩa và gợi ý thực tế cho từng mốc
            phổ biến.
          </p>

          <figure className="relative my-6 h-56 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/cung-com-100-ngay.webp`}
              alt="Lễ cúng mốc — các mốc 3,7,49,100 ngày"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 5: Lễ cúng mốc — biểu tượng các giai đoạn tưởng niệm
            </figcaption>
          </figure>

          <h3>3 ngày</h3>
          <p>
            Mốc 3 ngày thường là lễ đầu tiên, gia đình tiếp đón thân nhân, dâng mâm cơm và bắt đầu
            quá trình tang. Đây là dịp để công bố thông tin, sắp xếp lo liệu và nhận sự giúp đỡ từ
            cộng đồng.
          </p>

          <h3>7 ngày</h3>
          <p>
            Mốc 7 ngày là khoảng thời gian nhiều gia đình thực hiện lễ trang trọng hơn, có thể mời
            thầy tụng kinh hoặc đọc văn khấn dài hơn để cầu siêu và xin phù hộ cho gia đình.
          </p>

          <h3>49 ngày</h3>
          <p>
            Theo quan niệm Phật giáo, 49 ngày là khoảng thời gian linh hồn có thể chuyển tiếp. Lễ 49
            ngày thường mang tính trang trọng, mời tụng kinh và thực hiện các nghi lễ cầu siêu.
          </p>

          <h3>100 ngày</h3>
          <p>
            100 ngày là mốc gia đình dùng để đánh dấu quá trình tưởng niệm kéo dài. Việc duy trì
            cúng thể hiện sự bền bỉ trong tấm lòng nhớ thương.
          </p>
        </section>

        {/* 6. Kiêng kỵ */}
        <section id="diem-kieng" className="mt-8">
          <h2>6. Kiêng kỵ và sai lầm thường gặp</h2>
          <p>
            Dưới đây là những điều cần tránh để giữ nghi thức trang nghiêm và không gây ảnh hưởng
            xấu đến tinh thần chung.
          </p>

          <figure className="relative my-6 h-48 rounded overflow-hidden shadow-sm">
            <Image
              fill
              src={`/assets/images/cam-nang/${slug}/cung-com-49-ngay.webp`}
              alt="Những điều kiêng kỵ khi thực hiện nghi lễ"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Hình 6: Một vài kiêng kỵ cơ bản khi tổ chức nghi lễ
            </figcaption>
          </figure>

          <ul>
            <li>Không nếm thức ăn trên mâm cúng trước khi hoàn tất nghi lễ.</li>
            <li>Tránh dùng đồ ăn ôi thiu, có mùi khó chịu.</li>
            <li>Không đặt mâm trực tiếp trên đất; tránh đặt đồ dùng không trang nghiêm gần mâm.</li>
            <li>
              Không gây ồn ào, cười đùa, hoặc dùng ngôn từ thiếu tôn trọng trong khu vực cúng.
            </li>
            <li>Chú ý quy định môi trường địa phương khi đốt vàng mã hoặc xử lý thức ăn thừa.</li>
          </ul>

          <h3>Những sai lầm hay gặp</h3>
          <p>
            - Quên ghi tên, ngày tháng trong văn khấn dẫn tới nhầm lẫn; <br />
            - Chuẩn bị thực phẩm không phù hợp với tín ngưỡng của gia đình; <br />- Thiếu phân công
            nhân lực, gây hỗn loạn khi nhiều người cùng làm việc mà không theo trật tự.
          </p>
        </section>

        {/* 7. Thực hiện */}
        <section id="thuc-hien" className="mt-8">
          <h2>7. Thực hiện cúng tại nhà, chùa và nghĩa trang</h2>
          <p>
            Mỗi địa điểm có lưu ý riêng về mặt thủ tục, trang trí và bảo đảm vệ sinh, an toàn. Dưới
            đây là hướng dẫn thực tế.
          </p>

          <h3>Tại nhà</h3>
          <p>
            Chuẩn bị khu vực sạch sẽ, đặt mâm trên bàn tạm, đảm bảo an toàn khi dùng hương/nến, phân
            công người châm hương, người đọc văn khấn và người điều phối khách đến viếng. Nếu nhà
            nhỏ, cân nhắc giảm quy mô mâm cúng để tránh chật chội.
          </p>

          <h3>Tại chùa</h3>
          <p>
            Liên hệ trước với chùa để biết lịch tụng niệm, phí công đức (nếu có) và yêu cầu chi tiết
            về lễ vật. Chùa có thể hỗ trợ phần tụng kinh cầu siêu chuyên nghiệp, an tâm về mặt tâm
            linh.
          </p>

          <h3>Tại nghĩa trang</h3>
          <p>
            Kiểm tra quy định quản lý nghĩa trang về việc đặt mâm, đốt vàng mã và xử lý rác thải.
            Chuẩn bị mâm nhỏ gọn, dễ di chuyển để tránh ảnh hưởng môi trường.
          </p>
        </section>

        {/* 8. Kinh nghiệm */}
        <section id="kinh-nghiem" className="mt-8">
          <h2>8. Kinh nghiệm thực tế từ Sinh Phúc Thọ</h2>
          <p>Dưới đây là những bài học rút ra sau khi tư vấn cho hàng trăm gia đình:</p>
          <ul>
            <li>Lập checklist chi tiết (vật dụng, thực phẩm, nhân sự) và kiểm tra trước 24 giờ.</li>
            <li>Ghi rõ họ tên và thông tin người mất để tránh nhầm lẫn khi đọc văn khấn.</li>
            <li>Phân công người quản lý hương/nến để đảm bảo an toàn phòng chống cháy nổ.</li>
            <li>Ưu tiên đồ chay khi nghi ngại về mùi hoặc khi muốn giản tiện.</li>
            <li>
              Nếu thuê dịch vụ, chuẩn bị hợp đồng ngắn gọn nêu rõ phạm vi (số ngày, công việc, chi
              phí).
            </li>
          </ul>
          <p>
            Sinh Phúc Thọ cung cấp dịch vụ trọn gói: chuẩn bị mâm cúng, soạn văn khấn, cung cấp nhân
            lực thực hiện, và xử lý hậu cần. Nếu bạn muốn, đội ngũ chúng tôi có thể hỗ trợ thực hiện
            nghi lễ theo yêu cầu, đảm bảo trật tự và trang nghiêm.
          </p>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mt-10">
          <h2>10. FAQ — Các câu hỏi thường gặp</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold">1. Cúng cơm cần thực hiện trong bao lâu?</h3>
              <p>
                Thường là 49 ngày hoặc 100 ngày tùy theo phong tục gia đình; có thể linh hoạt theo
                điều kiện.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2. Có thể dùng mâm cúng chay hoàn toàn không?</h3>
              <p>
                Có thể — đồ chay phù hợp với gia đình Phật tử và gia đình muốn giản tiện nghi lễ.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Ai nên đọc văn khấn?</h3>
              <p>
                Người lớn tuổi, con trưởng hoặc người có kiến thức nghi lễ; nếu cần, mời thầy/ sư.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">4. Nếu gia đình ở xa, có thể nhờ ai tổ chức?</h3>
              <p>
                Ủy quyền cho người thân, hàng xóm hoặc sử dụng dịch vụ tổ chức nghi lễ trọn gói.
                Cung cấp thông tin chi tiết là rất quan trọng.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">5. Có cần đốt vàng mã không?</h3>
              <p>
                Tùy thuộc tín ngưỡng và phong tục. Nếu có, nên đốt nơi quy định, tuân thủ quy định
                môi trường.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6. Nên làm gì với thức ăn sau khi cúng xong?</h3>
              <p>
                Nếu thức ăn còn tươi, có thể chia cho khách; nếu không, xử lý hợp vệ sinh theo quy
                định địa phương.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7. Làm sao giữ nghi lễ trang nghiêm khi có trẻ nhỏ?</h3>
              <p>
                Phân công người trông trẻ ở khu vực riêng hoặc ngoài khu vực cúng để tránh làm mất
                trật tự.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8. Nếu muốn tối giản, cần giữ yếu tố cốt lõi nào?</h3>
              <p>
                Giữ 3 yếu tố: bát cơm (cơm trắng), một món chính và lời khấn trang trọng; không nên
                bỏ hương và nước.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section id="ket-luan" className="mt-10">
          <h2>11. Kết luận và liên hệ hỗ trợ</h2>
          <p>
            Cúng cơm cho người mới mất là hành động giản đơn nhưng chứa đựng chiều sâu văn hóa và
            cảm xúc. Thực hiện đúng cách vừa giữ gìn truyền thống vừa tạo điểm tựa tinh thần cho
            người ở lại. Nếu bạn cần hướng dẫn chi tiết hoặc muốn sử dụng dịch vụ tổ chức nghi lễ
            trọn gói, Sinh Phúc Thọ sẵn sàng đồng hành cùng gia đình.
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://sinhphuctho.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-4 py-2 bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700"
            >
              Liên hệ Sinh Phúc Thọ
            </a>
            <a
              href="https://sinhphuctho.com/cam-nang.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-4 py-2 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-50"
            >
              Xem thêm cẩm nang
            </a>
          </div>
        </section>

        {/* Structured data (Article + FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: description,
              url: url,
              author: { '@type': 'Organization', name: 'Sinh Phúc Thọ' },
              mainEntityOfPage: url,
              image: [`/assets/images/cam-nang/${slug}/cung-com-cho-nguoi-moi-mat-ban-tho.webp`],
              datePublished: new Date().toISOString().split('T')[0],
              mainEntity: {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Cúng cơm cần thực hiện trong bao lâu?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Thời gian thường là 49 ngày hoặc 100 ngày tùy theo phong tục gia đình.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Có thể dùng mâm cúng chay hoàn toàn không?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Có thể. Đồ chay là lựa chọn an toàn, phù hợp với gia đình Phật tử.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Ai nên đọc văn khấn?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Người lớn tuổi trong gia đình, con trưởng hoặc người có kiến thức nghi lễ.',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </article>
    </CamNangLayout>
  );
}
