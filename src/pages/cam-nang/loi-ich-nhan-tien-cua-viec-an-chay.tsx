// app/cam-nang/[slug]/page.tsx
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import { GetStaticProps } from 'next';

const slug = 'loi-ich-nhan-tien-cua-viec-an-chay';
const title = 'Lợi ích nhãn tiền của việc ăn chay';
const description =
  'Với các bệnh nhân mắc cao huyết áp, đái tháo đường, mỡ máu cao, việc ăn chay hoàn toàn giúp cải thiện các chỉ số trong công thức máu, cơ thể khỏe mạnh hơn và đẩy lùi bệnh tật.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
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
        width: 660,
        height: 412,
        alt: 'Lợi ích của việc ăn chay',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
        width: 735,
        height: 490,
        alt: 'Sức khỏe người lớn tuổi',
      },
      {
        url: `/assets/images/cam-nang/${slug}/hinh-2.webp`,
        width: 736,
        height: 414,
        alt: 'Chìa khóa sức khỏe nằm trong tay chính bạn',
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
        Với các bệnh nhân mắc cao huyết áp, đái tháo đường, mỡ máu cao, việc ăn chay hoàn toàn giúp
        cải thiện các chỉ số trong công thức máu, cơ thể khỏe mạnh hơn và đẩy lùi bệnh tật.
      </p>
      <p>
        Tôi thường được hỏi về tình trạng tự khỏi bệnh: “Bác sĩ Từ, ăn chay có phải thuốc chữa bách
        bệnh không?” Tôi trả lời rằng ăn chay không chữa được bệnh gì cả. Điều duy nhất một chế độ
        ăn chay có thể làm là giúp chúng ta ngừng tự hại bản thân. Sau đó, khả năng tự phục hồi của
        cơ thể đã chữa lành cho bạn.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/banner.webp`}
          alt="Lợi ích của việc ăn chay"
          priority
        />
      </figure>
      <h2>Cơ thể luôn biết cách tự chữa lành, chỉ cần ta thôi làm tổn thương nó</h2>

      <p>
        Tuyệt đại đa số các bệnh trong xã hội ngày nay, dù đó là bệnh tim mạch, đái tháo đường, ung
        thư hay các bệnh tự miễn dịch, đều là kết quả của việc tự làm tổn thương bản thân.
      </p>
      <p>
        Chỉ khi ngừng tự làm hại bản thân, sức mạnh tự phục hồi bẩm sinh của chúng ta mới có thể bắt
        đầu phát huy tác dụng. Chỉ cần ngừng tự làm hại bản thân, sức mạnh tự chữa lành của chúng ta
        mới có thể thăng hoa.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
          alt="Sức khỏe người lớn tuổi"
          priority
        />
      </figure>
      <p>
        Các số liệu khoa học cho thấy ăn chay lành mạnh từ 2 đến 4 tuần, bệnh nhân đái tháo đường có
        thể giảm hoặc ngừng thuốc, mỡ máu của bệnh nhân mỡ máu cao sẽ giảm rất nhiều, các triệu
        chứng tăng huyết áp thuyên giảm nhanh, cân nặng giảm xuống thấy rõ và khả năng chống ung thư
        của cơ thể sẽ được tăng lên gấp bội, các triệu chứng bệnh phong thấp cũng giảm đi rõ rệt.
      </p>
      <h2>Chìa khóa sức khỏe nằm trong tay chính bạn</h2>
      <p>
        Các số liệu khoa học cho thấy ăn chay lành mạnh từ 2 đến 4 tuần, bệnh nhân đái tháo đường có
        thể giảm hoặc ngừng thuốc, mỡ máu của bệnh nhân mỡ máu cao sẽ giảm rất nhiều, các triệu
        chứng tăng huyết áp thuyên giảm nhanh, cân nặng giảm xuống thấy rõ và khả năng chống ung thư
        của cơ thể sẽ được tăng lên gấp bội, các triệu chứng bệnh phong thấp cũng giảm đi rõ rệt.
      </p>
      <p>
        Đây giống như một căn phòng tối, dù đã tối bao lâu chăng nữa thì mọi ngóc ngách của căn
        phòng cũng sẽ được chiếu sáng rạng rỡ ngay khi bạn vén rèm che nắng.
      </p>
      <p>
        Khi bị bệnh, chúng ta uống thuốc, tìm phương thuốc dân gian, bổ sung chất dinh dưỡng, thực
        hiện các ca phẫu thuật, thậm chí cầu xin Quán Thế Âm Bồ tát, vái tứ phương để tìm cho ra
        cọng rơm cứu mạng.
      </p>
      <figure>
        <Image
          fill
          src={`/assets/images/cam-nang/${slug}/hinh-2.webp`}
          alt="Chìa khóa sức khỏe nằm trong tay chính bạn"
          priority
        />
      </figure>
      <p>
        Nhưng kết quả thường không có được thuốc tốt, uống xong không thấy hiệu quả, cắt cơn xong
        lại thấy bệnh trở lại. Chúng ta quên rằng chìa khóa của sức khỏe nằm trong tay của chính
        mình. Khả năng tự phục hồi bên trong cơ thể có thể chữa khỏi mọi bệnh tật.
      </p>
      <h2>Thái độ quyết định sức khỏe</h2>
      <p>
        Mỗi cá nhân đều là người duy nhất chịu trách nhiệm về sức khỏe của chính mình. Không có bất
        kỳ ai hay cái gì khác có thể chịu trách nhiệm về sức khỏe của chúng ta. Vì vậy, ta chỉ có
        thể tập trung vào bản thân và tin tưởng vào khả năng tự chữa lành bẩm sinh. Và nhiệm vụ của
        bác sĩ cùng lắm là giúp ta tự chữa bệnh mà thôi.
      </p>
      <p>
        Vì là người chịu trách nhiệm đầu tiên nên thái độ của chúng ta sẽ quyết định kết quả. Rất
        nhiều người bảo ăn chay ít chất béo tốt nhưng tôi thích ăn XXX, có thể ăn kèm một chút XXX
        được không? Tôi phải đi giao lưu, thỉnh thoảng ăn này nọ một chút có được không? Có thể ăn
        chay bán phần không? Thực phẩm hữu cơ quá đắt...
      </p>
      <p>
        Nếu không vặn chặt vòi nước thì sàn nhà vẫn cần lau liên tục, bệnh sẽ mãi không khỏi. Chúng
        ta đã quen với việc kinh doanh, và đến sức khỏe của chính mình ta cũng dám mặc cả. Ăn phải
        đồ chay giả, không thực hiện nghiêm túc chế độ ăn chay sẽ gây hại cho sức khỏe.
      </p>
      <p>
        Chúng ta đã quen làm ăn với chính mình. Tâm thái muốn giảm giá mọi thứ, từ chối theo đuổi sự
        hoàn hảo không chỉ là chướng ngại trên phương diện sức khỏe mà còn là trở ngại lớn nhất đối
        với phát triển bản thân và phát triển sự nghiệp.
      </p>
    </CamNangLayout>
  );
}
