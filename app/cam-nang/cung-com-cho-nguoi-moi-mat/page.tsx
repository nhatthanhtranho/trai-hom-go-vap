import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import Image from '@/components/CustomImage';
import type { Metadata } from 'next';

const slug = 'cung-com-cho-nguoi-moi-mat';
const title = 'Cúng cơm cho người mới mất – Ý nghĩa, cách chuẩn bị và văn khấn chuẩn';
const description =
  'Hướng dẫn chi tiết về tục cúng cơm cho người mới mất: ý nghĩa phong tục, cách chuẩn bị mâm cơm, bài văn khấn chuẩn và những lưu ý quan trọng trong 100 ngày đầu.';
const url = `https://sinhphuctho.com/cam-nang/${slug}`;

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
        alt: 'Cúng cơm cho người mới mất – Ý nghĩa và văn khấn',
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

export default function Article() {
  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>
      <p>
        Cúng cơm là một nghi thức tâm linh quan trọng trong tang lễ của người Việt. Đây không chỉ là
        cách tưởng nhớ, bày tỏ lòng hiếu kính với người đã khuất, mà còn thể hiện sự gắn kết giữa
        con cháu với tổ tiên. Trong bài viết này,{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cơ sở mai táng trọn gói Sinh Phúc Thọ
        </a>{' '}
        sẽ cùng bạn tìm hiểu ý nghĩa, cách chuẩn bị mâm cơm, văn khấn và những lưu ý quan trọng
        trong quá trình thực hiện.
      </p>

      <h2>1. Ý nghĩa của việc cúng cơm cho người mới mất</h2>
      <p>
        Tục cúng cơm đã tồn tại từ lâu đời trong văn hóa Việt Nam. Sau khi người thân mất, gia đình
        thường chuẩn bị mâm cơm dâng cúng hằng ngày trong 100 ngày đầu tiên. Nghi thức này mang
        nhiều giá trị:
      </p>
      <ul>
        <li>
          <strong>Báo hiếu và biết ơn:</strong> Con cháu thể hiện lòng tri ân, kính trọng đối với
          cha mẹ, ông bà đã khuất.
        </li>
        <li>
          <strong>Tâm linh và cầu nguyện:</strong> Gửi gắm niềm tin, mong vong linh sớm siêu thoát
          và phù hộ độ trì cho con cháu.
        </li>
        <li>
          <strong>Duy trì truyền thống:</strong> Nghi thức cúng cơm giúp giữ gìn nếp văn hóa gia
          đình, duy trì sợi dây kết nối giữa các thế hệ.
        </li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.jpg`}
          alt="Mâm cơm cúng cho người mới mất"
          priority
        />
      </figure>

      <h2>2. Bài văn khấn cúng cơm hàng ngày cho người mới mất</h2>
      <p>
        Khi dâng cơm, ngoài mâm lễ vật, gia đình cần đọc văn khấn để thể hiện sự thành kính. Bài văn
        khấn thường bắt đầu bằng việc xưng danh, khấn vái thần linh, tổ tiên và vong linh người mới
        mất. Nội dung khấn thể hiện lòng biết ơn, tiếc thương và mong cầu cho linh hồn sớm siêu
        thoát.
      </p>
      <blockquote>
        Nam mô A Di Đà Phật! <br />
        Con kính lạy chín phương Trời, mười phương Chư Phật, chư vị Thánh Hiền... <br />
        Hôm nay là ngày… tháng… năm… <br />
        Gia đình chúng con thành tâm sắm lễ cơm canh, dâng trước án linh vị, cúi xin người nhận cho
        lòng thành, phù hộ độ trì cho con cháu bình an, hạnh phúc, mọi sự hanh thông. <br />
        Nam mô A Di Đà Phật! (3 lần)
      </blockquote>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.jpg`}
          alt="Mâm cơm cúng và văn khấn"
          priority
        />
      </figure>

      <h2>3. Những lưu ý khi cúng cơm cho người mới mất</h2>
      <ul>
        <li>Không đặt mâm cơm dưới đất; bàn cúng nên thấp hơn bàn thờ chính.</li>
        <li>Mâm cơm phải có đủ cơm, muối, nước sạch; kèm thêm trà, hoa quả, món mặn/chay.</li>
        <li>
          Trong 100 ngày, nên duy trì cúng hằng ngày để linh hồn người mất cảm nhận được tình cảm
          của con cháu.
        </li>
        <li>
          Không dùng các món kiêng kỵ như riêu ốc, riêu cua, xôi đỗ đen; thay vào đó chọn xôi trắng,
          xôi đậu xanh, bánh chưng.
        </li>
        <li>Tuyệt đối không nếm thử hay ăn trước đồ cúng.</li>
      </ul>

      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-3.jpg`}
          alt="Mâm cơm cúng truyền thống"
          priority
        />
      </figure>

      <h2>4. Kết luận</h2>
      <p>
        Cúng cơm cho người mới mất là một phong tục giàu ý nghĩa, thể hiện sự hiếu kính, tình cảm và
        lòng biết ơn của con cháu đối với người đã khuất. Thực hiện nghi thức này đúng cách không
        chỉ giúp linh hồn người mất được an ủi mà còn mang lại sự bình an, may mắn cho gia đình. Nếu
        bạn cần hỗ trợ trọn gói trong quá trình tổ chức tang lễ và thực hiện các nghi lễ truyền
        thống, hãy liên hệ với{' '}
        <a
          href="https://sinhphuctho.com"
          className="text-yellow-700 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinh Phúc Thọ
        </a>{' '}
        để được tư vấn tận tình.
      </p>
    </CamNangLayout>
  );
}
