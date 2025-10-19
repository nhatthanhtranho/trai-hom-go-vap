// app/cam-nang/[slug]/page.tsx
/* eslint-disable react/no-unescaped-entities */

import Image from '@/src/components/CustomImage';
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import { GetStaticProps } from 'next';

const slug = 'vai-tro-cua-sach-tai-nhat-them-thu-vien-giup-giam-nhu-cau-dieu-duong';
const title = 'Vai trò của sách tại Nhật: Thêm thư viện giúp giảm nhu cầu điều dưỡng';
const description =
  'Các thư viện công cộng được xem như “liệu pháp xã hội” giúp duy trì sự gắn kết cộng đồng, kích thích hoạt động trí não và giảm cảm giác cô đơn – một trong những nguyên nhân dẫn đến suy giảm sức khỏe ở người già.';
const url = `https://sinhphuctho.com/cam-nang/${slug}`;

export const metadata = {
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
        url: `/assets/images/cam-nang/${slug}/banner.webp`,
        width: 620,
        height: 384,
        alt: 'Vai trò của sách tại Nhật: Thêm thư viện giúp giảm nhu cầu điều dưỡng',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
        width: 700,
        height: 394,
        alt: title,
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-2.webp`,
        width: 1600,
        height: 1067,
        alt: 'Sách trong vai trò giảm sự cô đơn ở người cao tuổi',
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
        Các nhà nghiên cứu tại Nhật Bản đã phát hiện ra rằng, một thành phố càng có nhiều thư viện
        công cộng thì càng ít cư dân cần được chăm sóc điều dưỡng dài hạn, theo tờ Mainichi Shimbun.
      </p>
      <p>
        Kết quả này cho thấy <strong>sách và không gian đọc</strong> không chỉ mang giá trị tri
        thức, mà còn góp phần nâng cao sức khỏe tinh thần và chất lượng cuộc sống của người dân, đặc
        biệt là <strong>người cao tuổi.</strong>
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/banner.webp`}
          alt="Vai trò của sách tại Nhật: Thêm thư viện giúp giảm nhu cầu điều dưỡng"
          priority
        />
      </figure>
      <p>
        Các thư viện công cộng được xem như “liệu pháp xã hội” giúp duy trì sự gắn kết cộng đồng,
        kích thích hoạt động trí não và giảm cảm giác cô đơn – một trong những nguyên nhân dẫn đến
        suy giảm sức khỏe ở người già.
      </p>
      <p>
        Nghiên cứu mới của Koryu Sato, giảng viên tại Khoa Quản lý Chính sách thuộc Đại học Keio và
        Saeko Otani, đến từ Khoa Y của Đại học Kyoto, đã tiết lộ mối quan hệ giữa sách và đời sống
        tin thần của người lớn tuổi.
      </p>
      <p>
        Được công bố trên tạp chí y khoa SSM - Population Health số ra tháng 3, hai nhà nghiên cứu
        đã sử dụng dữ liệu từ Nghiên cứu đánh giá lão khoa Nhật Bản, một trong những cuộc khảo sát
        lớn nhất về người cao tuổi ở Nhật Bản.
      </p>
      <p>
        Nghiên cứu đã phân tích dữ liệu về 73.138 người khỏe mạnh ở độ tuổi 65 trở lên, sống tại 19
        thành phố, từ năm 2013 đến 2021. Trong giai đoạn này, 16.336 cá nhân (22,3%) được biết là
        cần được chăm sóc điều dưỡng dài hạn.
      </p>
      <p>
        Sato và Otani đã kiểm tra số lượng sách trong thư viện công cộng tại 19 thành phố này và
        phân tích mối quan hệ của chúng với số lượng chứng nhận về việc người cao tuổi cần được chăm
        sóc dài hạn.
      </p>
      <h2>Nhiều sách hơn, giảm nhu cầu chăm sóc điều dưỡng?</h2>
      <p>
        Theo đó, các thành phố có lượng sách/người cao hơn sẽ có số lượng chứng nhận cần chăm sóc
        điều dưỡng giảm đi. Mỗi cuốn sách/người được thêm vào tại một thư viện, địa phương đó giảm
        được 4% số giấy chứng nhận.
      </p>
      <p>
        Theo số liệu thống kê của các thư viện công cộng Nhật Bản năm 2024, trung bình toàn quốc là
        khoảng 3,7 cuốn sách/người. Nhưng riêng tại 23 phường đặc biệt của Tokyo, con số này dao
        động từ khoảng 2-8 cuốn, trong đó phường Chiyoda có số lượng sách nhiều nhất.
      </p>
      <p>
        Sato cho biết: "Điều chúng tôi tìm thấy chỉ là mối tương quan, không phải là mối quan hệ
        nhân quả chặt chẽ, vì vậy chúng tôi không thể khẳng định chắc chắn rằng 'việc tăng số lượng
        sách thư viện sẽ làm giảm chứng chỉ chăm sóc dài hạn'. Tuy nhiên, sau khi loại bỏ ảnh hưởng
        của nhiều yếu tố khác nhau thì mối tương quan giữa chúng vẫn rất rõ ràng".
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Vai trò của sách tại Nhật: Thêm thư viện giúp giảm nhu cầu điều dưỡng"
          priority
        />
      </figure>
      <p>
        Ngoài việc chứng minh mối tương quan đáng kể giữa số lượng sách tại thư viện và nhu cầu chăm
        sóc dài hạn ở những người có thói quen đọc sách đã hình thành, nghiên cứu cũng cho thấy mối
        tương quan giữa số lượng sách và những người không đọc sách.
      </p>
      <p>
        Ngay cả những người không đọc sách thì việc sống ở một thành phố có nhiều sách tại thư viện
        cũng có thể kéo dài tuổi thọ khỏe mạnh.
      </p>
      <h2>Tại sao sách tại thư viện có lợi cho sức khỏe của người cao tuổi?</h2>
      <p>
        ato chia sẻ: "Tôi nghĩ rằng số lượng sách cho thấy sự phong phú nội dung của thư viện. Có
        một thư viện đa dạng sẽ mang lại lợi ích về mặt thể chất, nhận thức và tham gia xã hội của
        cộng đồng".
      </p>
      <p>
        Ông nói thêm: "Một là tác động về mặt thể chất. Đến thư viện thay vì đọc sách ở nhà sẽ có
        lợi cho sức khỏe. Các nghiên cứu trước đây cho thấy ngồi lâu có hại cho sức khỏe và ngay cả
        khi không tập thể dục, việc đi bộ nhẹ nhàng cũng có lợi cho sức khỏe".
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Sách trong vai trò giảm sự cô đơn ở người cao tuổi"
          priority
        />
      </figure>
      <p>
        Lợi ích thứ hai là chức năng nhận thức. Sato giải thích, "bản thân việc đọc là quá trình rèn
        luyện trí não, và không giống như việc đọc thông thường, đến thư viện mang đến những cuộc
        gặp gỡ bất ngờ với sách và mở rộng thêm kiến thức. Các sự kiện của thư viện cũng có thể kích
        thích sự tò mò về mặt trí tuệ".
      </p>
      <p>
        Lợi ích thứ ba là sự tham gia xã hội. Sato lưu ý, "tham gia các hoạt động thường xuyên giúp
        duy trì chức năng nhận thức và giảm tỷ lệ tử vong. Bộ Y tế, Lao động và Phúc lợi Nhật Bản
        cũng đang tập trung vào 'những khu vực cộng đồng', nơi người cao tuổi có thể tham gia nhiều
        hoạt động để ngăn ngừa sự suy giảm sức khoẻ.
      </p>
      <p>
        Một bộ sưu tập sách lớn cũng cho thấy thư viện có không gian lớn và có thể đóng vai trò là
        trung tâm cho các hoạt động cộng đồng. Thư viện cũng có hệ thống sưởi ấm và làm mát. Điều
        này có khả năng thu hẹp khoảng cách về kinh tế và môi trường sống cho người cao tuổi".
      </p>
    </CamNangLayout>
  );
}
