import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import { GetStaticProps, Metadata } from 'next';
import Image from 'next/image';

const slug = 'tiet-thanh-minh-la-gi';
const title = 'Tiết Thanh Minh – Ý Nghĩa, Phong Tục Tạo Mộ Của Người Việt';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
const description = `Tiết Thanh Minh là một trong những dịp lễ quan trọng trong văn hóa Á Đông,
thường rơi vào đầu tháng 4 dương lịch. Đây là thời điểm con cháu tưởng nhớ tổ tiên, dọn dẹp
phần mộ và bày tỏ lòng hiếu kính.`

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
    <CamNangLayout title={title}>
      <h1>{title}</h1>

      <p>
        <strong>Tiết Thanh Minh</strong> là một trong những dịp lễ quan trọng trong văn hóa Á Đông,
        thường rơi vào đầu tháng 4 dương lịch. Đây là thời điểm con cháu tưởng nhớ tổ tiên, dọn dẹp
        phần mộ và bày tỏ lòng hiếu kính. Bài viết do{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        biên soạn nhằm giúp bạn hiểu rõ nguồn gốc, ý nghĩa và phong tục của ngày Thanh Minh trong
        đời sống tinh thần của người Việt.
      </p>
      <p>
        Qua đó, bạn sẽ thấy được giá trị nhân văn sâu sắc và tinh thần “uống nước nhớ nguồn” được
        lưu truyền qua bao đời, góp phần giữ gìn nét đẹp văn hóa dân tộc trong nhịp sống hiện đại
        hôm nay.
      </p>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-4.webp`}
          alt="Lễ cúng trong Tiết Thanh Minh"
          priority
        />
      </figure>

      {/* I. Tiết Thanh Minh là gì */}
      <h2>1. Tiết Thanh Minh là gì?</h2>
      <p>
        Tiết Thanh Minh là một trong 24 tiết khí trong năm, báo hiệu sự chuyển giao từ mùa xuân sang
        mùa hạ, khi khí trời trở nên ấm áp, cây cối đâm chồi nảy lộc. Trong quan niệm của người
        Việt, đây là thời điểm thiêng liêng để con cháu cùng nhau đi tảo mộ, tu sửa phần mộ tổ tiên
        và dâng hương tưởng nhớ những người đã khuất.
      </p>
      <p>
        Không chỉ mang ý nghĩa tưởng niệm, Tiết Thanh Minh còn là dịp để gắn kết tình thân, nhắc nhở
        mỗi người về nguồn cội và đạo lý “uống nước nhớ nguồn”. Bên cạnh việc thắp nén hương lòng,
        nhiều gia đình còn bày mâm cúng đơn giản, thể hiện sự biết ơn và mong cầu bình an, may mắn
        cho con cháu trong năm mới.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Phong tục tảo mộ trong Tiết Thanh Minh"
          priority
        />
      </figure>

      {/* II. Ý nghĩa */}
      <h2>2. Ý nghĩa của Tiết Thanh Minh</h2>
      <h3>Tưởng nhớ tổ tiên</h3>
      <p>
        Tiết Thanh Minh là dịp để con cháu bày tỏ lòng hiếu kính và đạo lý “uống nước nhớ nguồn” –
        một giá trị cốt lõi trong văn hóa Việt. Việc tảo mộ, dâng hương không chỉ thể hiện sự biết
        ơn đối với công đức của tiền nhân mà còn là cách để nhắc nhở thế hệ sau luôn trân trọng gốc
        rễ của mình.
      </p>
      <h3>Gắn kết gia đình</h3>
      <p>
        Trong nhịp sống hiện đại, Tiết Thanh Minh mang đến cơ hội để các thành viên trong gia đình
        sum họp, cùng nhau dọn dẹp, trò chuyện và ôn lại kỷ niệm xưa. Những giây phút ấy giúp thắt
        chặt tình cảm huyết thống, nuôi dưỡng tinh thần đoàn kết và yêu thương giữa các thế hệ.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Lễ cúng trong Tiết Thanh Minh"
          priority
        />
      </figure>
      <h3>Giữ gìn bản sắc văn hóa</h3>
      <p>
        Thanh Minh không chỉ là một nghi lễ truyền thống mà còn là biểu tượng của lòng hiếu nghĩa và
        nhân văn sâu sắc trong tâm hồn người Việt. Việc duy trì phong tục này qua bao đời đã góp
        phần bảo tồn bản sắc văn hóa dân tộc, khẳng định sự trường tồn của những giá trị đạo đức tốt
        đẹp trong đời sống tinh thần.
      </p>
      <h3>Cầu bình an và may mắn</h3>
      <p>
        Người Việt tin rằng việc chăm sóc mồ mả, tưởng nhớ tổ tiên trong Tiết Thanh Minh còn mang
        lại sự bình an, phúc lộc và thịnh vượng cho con cháu. Khi mồ mả được yên ấm, con cháu cũng
        được phù hộ để có cuộc sống thuận hòa, hanh thông trong năm mới.
      </p>

      {/* III. Phong tục */}
      <h2>3. Các phong tục trong Tiết Thanh Minh</h2>
      <h3>Tảo mộ tổ tiên</h3>
      <p>
        Hoạt động quan trọng và đặc trưng nhất trong dịp Thanh Minh là tảo mộ. Trước ngày đi, gia
        đình thường chuẩn bị lễ vật đơn giản như hoa tươi, trái cây, bánh kẹo, trầu cau và vàng mã.
        Khi đến nghĩa trang, con cháu cùng nhau quét dọn, phát cỏ, sửa sang phần mộ, sau đó thắp
        hương, khấn vái để tỏ lòng thành kính và cầu mong tổ tiên phù hộ cho gia đạo bình an, công
        việc thuận lợi.
      </p>
      <h3>Dâng lễ tại gia</h3>
      <p>
        Bên cạnh việc ra mộ, nhiều gia đình còn bày mâm cúng tại bàn thờ gia tiên với những món ăn
        truyền thống như xôi, gà luộc, bánh chưng, bánh dày… để mời tổ tiên về hưởng lễ. Đây là cách
        thể hiện tấm lòng hiếu thuận và tưởng niệm người đã khuất, đồng thời cầu mong phúc lành cho
        con cháu.
      </p>
      <h3>Du xuân thưởng cảnh</h3>
      <p>
        Vì Tiết Thanh Minh thường rơi vào thời điểm cây cối đâm chồi, hoa nở khắp nơi, nên sau khi
        hoàn tất nghi lễ, nhiều người có thói quen đi dạo, ngắm cảnh hoặc đi lễ chùa cầu an. Không
        khí trong lành, tươi mới của mùa xuân khiến tâm hồn con người trở nên thư thái, hướng thiện
        và yêu đời hơn.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.webp`}
          alt="Lễ cúng trong Tiết Thanh Minh"
          priority
        />
      </figure>
      <h3>Giao lưu, gắn kết cộng đồng:</h3>
      <p>
        Ở nhiều vùng quê, ngày Thanh Minh còn là dịp để các dòng họ hoặc làng xóm tụ họp, tổ chức
        họp họ, dâng hương chung và cùng nhau ôn lại công đức tổ tiên. Những buổi gặp gỡ này góp
        phần thắt chặt tình làng nghĩa xóm, duy trì mối liên kết cộng đồng trong đời sống văn hóa
        Việt.
      </p>

      <h2>4. Phần kết</h2>
      <p>
        Tiết Thanh Minh không chỉ là thời khắc giao hòa của đất trời, khi vạn vật bừng sức sống sau
        mùa xuân, mà còn là dấu ấn thiêng liêng trong đời sống tinh thần của người Việt. Đây là dịp
        để mỗi người hướng lòng về cội nguồn, tưởng nhớ ông bà, tổ tiên và tri ân những người đã
        khuất.
      </p>
      <p>
        Thực hiện lễ Thanh Minh không đơn thuần là một nghi thức, mà còn là hành động vun bồi giá
        trị đạo đức, gìn giữ truyền thống hiếu nghĩa – nền tảng giúp gia đình và xã hội bền vững.
        Khi con cháu cùng nhau tảo mộ, dâng hương trong không khí thành kính, đó cũng là lúc tình
        thân được kết nối, lòng người được thanh lọc và niềm tin vào cuộc sống thêm vững bền.
      </p>
      <p>
        Tiết Thanh Minh, vì thế, không chỉ mang ý nghĩa tâm linh mà còn chứa đựng niềm an yên, phúc
        lành và sự tiếp nối của đạo lý nhân văn Việt Nam – một nét đẹp đáng trân trọng và gìn giữ
        qua muôn đời.
      </p>
      <p>
        👉 Để tìm hiểu thêm về các <strong>phong tục và lễ nghi Việt Nam</strong>, mời bạn tham khảo
        chuyên mục
        <a
          href="https://sinhphuctho.com/cam-nang.html"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cẩm Nang Sinh Phúc Thọ
        </a>
        .
      </p>
    </CamNangLayout>
  );
}
