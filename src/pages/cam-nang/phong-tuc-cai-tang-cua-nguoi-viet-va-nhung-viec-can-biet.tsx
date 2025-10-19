// app/cam-nang/[slug]/page.tsx
import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import { GetStaticProps } from 'next';
import Image from 'next/image';

const slug = 'phong-tuc-cai-tang-cua-nguoi-viet-va-nhung-viec-can-biet';
const title = 'Phong tục cải táng của người Việt và những việc cần biết';
const description =
  'Tìm hiểu phong tục cải táng của người Việt từ thời sơ khai đến phong kiến, ý nghĩa văn hóa tâm linh và những điều cần lưu ý khi thực hiện cải táng.';
const url = `https://sinhphuctho.com/cam-nang/${slug}.html`;
const image = `/assets/images/cam-nang/${slug}/hinh-1.webp`;

export const metadata = {
  title,
  description,
  keywords: [
    'phong tục cải táng',
    'cải táng người Việt',
    'bốc mộ sang cát',
    'nghi thức cải táng',
    'ý nghĩa cải táng',
    'phong tục tang lễ Việt Nam',
  ],
  openGraph: {
    title,
    description,
    url,
    type: 'article',
    siteName: 'Sinh Phúc Thọ',
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  alternates: {
    canonical: url,
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
  const title = 'Phong tục cải táng của người Việt và những việc cần biết';

  return (
    <CamNangLayout title={title}>
      <h1>{title}</h1>

      <h2>Phong tục cải táng thời sơ khai</h2>
      <p>
        Thời kỳ Bắc thuộc, các mộ Hán được khai quật cũng cho thấy dấu tích của việc các quý tộc,
        nhà giàu người Hán sinh sống ở nước ta làm mộ rất kiên cố. Tuy nhiên, các nhà nghiên cứu
        cũng cho rằng, tục cải táng được những người Trung Quốc sang làm việc tại Giao Chỉ du nhập
        vào nước ta, vì họ có phong tục đưa hài cốt người thân về chôn ở quê hương.
      </p>
      <p>
        Theo “Đại Việt sử ký toàn thư”, khi Triệu Đà làm vua ở Nam Việt, đã có nói với sứ giả nhà
        Hán rằng “mồ mả nhà tôi nay ở Chân Định”, tức nhà Triệu đã quan tâm đến vấn đề quy tập mồ mả
        tổ tiên.
      </p>
      <p className="italic">(Hình ảnh phong tục mai táng tại Việt Nam)</p>

      <h2>Lịch sử của phong tục cải táng thời kì phong kiến</h2>
      <p>
        Cải táng hay còn gọi là bốc mộ, sang cát, sang tiểu là một tập tục mà sau khi người chết đã
        ba năm đoạn tang rồi hoặc vài năm nữa, thì người nhà sẽ tiến hành thực hiện. Cải táng tức là
        đào huyệt mộ lên, nhặt xương của người chết, bỏ vào tiểu sành hoặc quan quách rồi đem đi
        chôn chỗ khác.
      </p>
      <p>
        Thời nước ta bắt đầu tự chủ, sử sách cho biết vị vua khởi đầu nhà Lý là Lý Thái Tổ (Lý Công
        Uẩn) còn chưa xác định cha ngài là ai, mộ tổ ở đâu. Các vua, quý tộc thời Lý khi qua đời đều
        được đưa linh cữu về quê nhà Đình Bảng (Từ Sơn, Bắc Ninh) an táng, không có trường hợp cải
        táng nào. Các vua nhà Trần, nhà Lê, nhà Nguyễn khi qua đời cũng được an táng vĩnh viễn ở khu
        lăng mộ.
      </p>
      <figure>
        <Image
          src="/assets/images/cam-nang/phong-tuc-cai-tang-cua-nguoi-viet-va-nhung-viec-can-biet/hinh-2.webp"
          alt="Hình ảnh phong tục cải táng tại Việt Nam"
          width={800}
          height={500}
        />
      </figure>

      <p>
        Học giả Phan Kế Bính, trong cuốn “Việt Nam phong tục”, in đầu thế kỷ 20, lý giải có bốn
        nguyên nhân người Việt cải táng mộ thân nhân bao gồm:
      </p>
      <ul>
        <li>Nhà nghèo, khi chôn dùng ván kém chất lượng, đến khi ván hư nát.</li>
        <li>Chỗ chôn đất mối kiến, lũ lụt làm ảnh hưởng hài cốt.</li>
        <li>Gia đình gặp chuyện không may, thì cũng cải táng bởi có thể do chôn ở đất xấu.</li>
        <li>Gia đình muốn cầu công danh phú quý nên chọn lại mộ phần theo phong thủy.</li>
      </ul>
      <p>
        Như vậy, hai lý do đầu tiên, chủ yếu là của các gia đình nghèo. Hai lý do sau, đều từ các
        yếu tố tâm linh, phong thủy mang phong cách Đạo gia. Lý do thứ tư có thể thấy trong câu
        chuyện về mộ tổ phát tích của các vua Trần, được ghi chép trong truyện “Trần triều tổ mộ ký”
        trong các sách cổ như “Công dư tiệp ký”, “Đại Nam dư địa chí ước biên”.
      </p>
      <p>
        Câu chuyện tương tự cũng xuất hiện trong truyện kể về vua Lê Thái Tổ cải táng hài cốt cha
        mình mà xây được nghiệp đế vương. Sách “Lam Sơn thực lục” ghi lại chi tiết nhà vua được một
        nhà sư chỉ cho ngôi đất quý, sau đó đã đưa hài cốt cha táng vào đó.
      </p>
      <p className="italic">(Phong tục cải táng tại Việt Nam – ảnh minh họa)</p>

      <p>
        Sử cũ cũng chép rằng khi vua Lê Lợi dấy binh khởi nghĩa, quân Minh đã đào cướp hài cốt cha
        nhà vua nhằm ép ông đầu hàng. Tuy nhiên, Lê Lợi sai 14 thuộc hạ thân tín lấy lại hài cốt và
        chôn cất lại như cũ. Một câu chuyện khác cũng trong “Lam Sơn thực lục” kể việc bà Phạm Thị
        Ngọc Trần, vợ vua, sau khi mất được cải táng theo ý nguyện và gắn với lời hứa truyền ngôi
        cho con bà.
      </p>
      <figure>
        <Image
          src="/assets/images/cam-nang/phong-tuc-cai-tang-cua-nguoi-viet-va-nhung-viec-can-biet/hinh-1.webp"
          alt="Phong tục cải táng tại Việt Nam"
          width={800}
          height={500}
        />
      </figure>

      <p>
        Trong dân gian, còn lưu truyền nhiều câu chuyện về cải táng gắn liền với vận mệnh triều đại,
        như sự tích tổ tiên chúa Trịnh hay việc vua Gia Long xác định hài cốt cha mình.
      </p>
      <p>
        Học giả Pháp Gustave Dumoutier (1908) cũng ghi lại tục “giọt máu nhận hài cốt” – khi cải
        táng, con cháu nhỏ máu lên xương để xác định đúng hài cốt người thân. Ngoài ra, Jules
        Silvestre trong “Đế quốc An Nam và người dân An Nam” cũng cho biết, việc cải táng đôi khi
        trở thành gánh nặng tốn kém, gắn với tín ngưỡng và các buổi tiệc tùng.
      </p>
    </CamNangLayout>
  );
}
