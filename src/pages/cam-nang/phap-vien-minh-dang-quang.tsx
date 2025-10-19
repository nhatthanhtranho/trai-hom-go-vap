import CamNangLayout from '@/components/CamNangLayout/CamNangLayout';
import FigureImage from '@/components/ImageFigure';
import TableOfContents from '@/components/TableOfContent';
import { TableOfContentItem } from '@/schema/tableOfContent.schema';
import type { Metadata } from 'next';

const slug = 'phap-vien-minh-dang-quang';
const url = `https://sinhphuctho.vn/cam-nang/${slug}`;
const IMAGE_PATH = `/assets/images/cam-nang/${slug}`
const title = 'Pháp Viện Minh Đăng Quang – Đóa Hoa Thanh Tịnh Giữa Lòng Sài Gòn';
const description =
    'Khám phá Pháp Viện Minh Đăng Quang – trung tâm Phật giáo Khất sĩ nổi bật tại TP. Thủ Đức, với kiến trúc bát giác, bốn bảo tháp Từ – Bi – Hỷ – Xả và không gian thiền định thanh tịnh.';

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: url,
    },
    openGraph: {
        title,
        description,
        url: `https://sinhphuctho.vn/cam-nang/${slug}`,
        type: 'article',
        images: [
            {
                url: '/images/phap-vien-minh-dang-quang/phap-vien-minh-dang-quang-1.jpg',
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },
};





export default function Page() {
    const tableOfContentItems: TableOfContentItem[] = [
        {
            id: 'gioi-thieu',
            title: 'Giới thiệu chung',
            children: [
                { id: 'y-nghia-ten-goi', title: 'Ý nghĩa tên gọi' },
                { id: 'lich-su-hinh-thanh', title: 'Lịch sử hình thành' },
            ],
        },
        {
            id: 'kien-truc',
            title: 'Kiến trúc độc đáo',
            children: [
                { id: 'chanh-dien', title: 'Chánh điện' },
                { id: 'tu-bi-hy-xa', title: 'Bốn bảo tháp Từ – Bi – Hỷ – Xả' },
                { id: 'khu-thien-duong', title: 'Khu thiền đường và giảng đường' },
            ],
        },
        {
            id: 'bo-de',
            title: 'Cây Bồ Đề linh thiêng',
            children: [
                { id: 'nguon-goc', title: 'Nguồn gốc' },
                { id: 'y-nghia-tam-linh', title: 'Ý nghĩa tâm linh' },
            ],
        },
        { id: 'hoat-dong', title: 'Hoạt động Phật sự và khóa tu' },
        { id: 'ket-luan', title: 'Kết luận' },
    ];

    return (
        <CamNangLayout
            title={title}
            bannerImageSrc={`${IMAGE_PATH}/hinh-4.webp`}
        >
            <article className="prose prose-lg max-w-none">
                <header>
                    <h1>Pháp Viện Minh Đăng Quang – Đóa Hoa Thanh Tịnh Giữa Lòng Sài Gòn</h1>
                    <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 py-3 rounded-md">
                        “Giữa lòng Sài Gòn nhộn nhịp, Pháp Viện Minh Đăng Quang vươn mình như một đóa sen vàng –
                        biểu tượng của sự thanh tịnh, giác ngộ và lòng từ bi vô lượng.”
                    </blockquote>

                    {/* MỤC LỤC */}
                    <TableOfContents items={tableOfContentItems} />
                    <h1>Pháp Viện Minh Đăng Quang – Đóa Hoa Thanh Tịnh Giữa Lòng Sài Gòn</h1>
                    <p>
                        Giữa thành phố sôi động, Pháp Viện Minh Đăng Quang nổi bật như một điểm dừng chân bình yên cho những ai muốn tìm lại sự tĩnh tại trong tâm hồn.
                        Với kiến trúc uy nghi và không gian rộng lớn, nơi đây trở thành một biểu tượng tâm linh tiêu biểu của Phật giáo Khất sĩ Việt Nam.
                    </p>
                    <p>
                        Từ xa, ngôi chánh điện bát giác với mái ngói vàng óng ả đã thu hút ánh nhìn của bất kỳ ai đi ngang qua.
                        Những hàng cây xanh bao quanh, hồ nước phẳng lặng và tiếng chuông ngân vang tạo nên khung cảnh thanh tịnh hiếm có giữa lòng đô thị.
                    </p>
                    <p>
                        Hơn cả một địa danh tôn giáo, Pháp Viện Minh Đăng Quang còn là nơi khơi gợi cảm hứng tu học,
                        nơi người người tìm đến để chiêm nghiệm giá trị của từ bi, trí tuệ và sự giác ngộ trong đời sống hiện đại.
                    </p>
                </header>
                <FigureImage
                    src={`${IMAGE_PATH}/hinh-1.webp`}
                    alt="Toàn cảnh Pháp Viện Minh Đăng Quang"
                    caption="Toàn cảnh Pháp Viện Minh Đăng Quang nhìn từ trên cao"
                    height={480}
                    variant='below'
                />

                {/* 1. Giới thiệu */}
                <section id="gioi-thieu">
                    <h2>1. Giới thiệu chung</h2>
                    <p>
                        Pháp Viện Minh Đăng Quang nằm tại số <strong>505 Võ Nguyên Giáp</strong> (Xa lộ Hà Nội), phường An Phú, TP. Thủ Đức.
                        Đây là trung tâm tu học và hoằng pháp của Hệ phái Khất sĩ Việt Nam, do Giáo đoàn IV đảm nhiệm.
                        Với không gian rộng hơn 37.000m², pháp viện là một quần thể kiến trúc tâm linh bề thế và trang nghiêm.
                    </p>
                    <p>
                        Được khởi công xây dựng năm 2009 và hoàn thành vào 2014, Pháp Viện Minh Đăng Quang được xem như “trái tim” của hệ phái Khất sĩ.
                        Nơi đây thường xuyên tổ chức các khóa tu, pháp thoại, lễ hội và hoạt động thiện nguyện nhằm lan tỏa giáo lý từ bi của Đức Phật.
                    </p>
                    <p>
                        Dù nằm giữa lòng thành phố nhộn nhịp, Pháp Viện vẫn giữ được vẻ thanh tịnh và trầm mặc.
                        Những lối đi rợp bóng cây, âm thanh chuông mõ hòa cùng tiếng gió, khiến mọi bước chân hành hương đều trở nên nhẹ nhàng.
                    </p>

                    <FigureImage
                        src={`${IMAGE_PATH}/hinh-5.webp`}
                        alt="Không gian khuon viên Pháp Viện Minh Đăng Quang"
                        caption="Khuôn viên rông rãi trang nghiêm với nhiều không gian thiền định"
                        variant='below'
                    />

                    <h3>1.1. Ý nghĩa tên gọi</h3>
                    <p>
                        Tên gọi “Minh Đăng Quang” bắt nguồn từ pháp hiệu của Tổ sư – người khai sáng Hệ phái Khất sĩ Việt Nam.
                        “Minh” là ánh sáng trí tuệ, “Đăng Quang” là ngọn đèn được thắp sáng – biểu trưng cho việc soi đường cho chúng sinh thoát khỏi vô minh.
                    </p>
                    <p>
                        Pháp viện mang tên này như một lời nhắc nhở về sứ mệnh lan tỏa ánh sáng Phật pháp,
                        hướng con người đến đời sống tỉnh thức, thanh lọc thân tâm và đạt đến sự giải thoát.
                    </p>
                    <p>
                        Trong từng công trình, từng biểu tượng, tinh thần “Minh Đăng Quang” được thể hiện rõ nét — dung dị, hài hòa nhưng sâu sắc,
                        giúp mỗi người khi đến đây đều cảm nhận được sự nhẹ nhõm và an vui.
                    </p>

                    <h3>1.2. Lịch sử hình thành</h3>
                    <p>
                        Ý tưởng xây dựng pháp viện được khởi xướng nhằm tạo một trung tâm tu học hiện đại nhưng vẫn giữ nguyên bản sắc Phật giáo Việt Nam.
                        Sau nhiều năm quy hoạch, công trình được hoàn thành với tâm huyết của hàng trăm nghệ nhân và Phật tử.
                    </p>
                    <p>
                        Trong quá trình xây dựng, mọi chi tiết đều được chú trọng, từ hình dáng mái cong, cột gỗ lim cho đến tượng Phật dát vàng,
                        thể hiện sự tôn kính tuyệt đối với Đức Phật và tinh thần giản dị của hệ phái Khất sĩ.
                    </p>
                    <p>
                        Ngày nay, Pháp Viện Minh Đăng Quang đã trở thành điểm đến không chỉ của Phật tử trong nước,
                        mà còn của du khách quốc tế yêu thích tìm hiểu văn hóa tâm linh Việt Nam.
                    </p>
                </section>

                <FigureImage
                    src={`${IMAGE_PATH}/hinh-2.webp`}
                    alt="Chánh điện Pháp Viện Minh Đăng Quang"
                    caption="Chánh điện bát giác biểu trưng cho Bát Chánh Đạo"
                    variant='below'
                />

                {/* 2. Kiến trúc */}
                <section id="kien-truc">
                    <h2>2. Kiến trúc độc đáo</h2>
                    <p>
                        Điểm đặc trưng của pháp viện chính là kiến trúc bát giác, biểu trưng cho Bát Chánh Đạo — con đường đưa đến giải thoát.
                        Mỗi góc của chánh điện đều tượng trưng cho một yếu tố trong tám con đường chân chính mà Đức Phật đã chỉ dạy.
                    </p>
                    <p>
                        Tổng thể công trình gồm chánh điện, bốn bảo tháp, khu thiền đường, giảng đường, thư viện và khu nhà Tăng – Ni.
                        Tất cả được sắp xếp hài hòa, gắn kết với thiên nhiên, tạo cảm giác như bước vào một thế giới thanh tịnh tách biệt hoàn toàn khỏi phố thị.
                    </p>
                    <p>
                        Màu sắc chủ đạo là vàng và nâu đất, tượng trưng cho trí tuệ và khiêm cung.
                        Những hoa văn, phù điêu được chạm khắc tinh xảo nhưng không cầu kỳ, phản ánh tinh thần giản dị của Phật giáo Khất sĩ.
                    </p>

                    <h3>2.1. Chánh điện</h3>
                    <p>
                        Chánh điện là trung tâm của pháp viện, được xây dựng theo hình bát giác, mái chồng lớp, đỉnh nhọn vươn cao.
                        Bên trong thờ tượng Phật Thích Ca Mâu Ni uy nghi, xung quanh là tranh tường mô tả các giai đoạn trong cuộc đời Đức Phật.
                    </p>
                    <p>
                        Không gian bên trong thoáng đãng, ánh sáng tự nhiên chiếu qua khung cửa gỗ tạo cảm giác ấm áp, linh thiêng.
                        Khi tiếng chuông ngân vang, khói hương lan tỏa, cả không gian như tràn ngập năng lượng bình an.
                    </p>
                    <p>
                        Mỗi ngày, hàng trăm Phật tử và du khách đến chánh điện lễ Phật, tụng kinh,
                        nghe pháp thoại và tĩnh tâm giữa khung cảnh thiêng liêng, đầy năng lượng giác ngộ.
                    </p>
                    <FigureImage
                        src={`${IMAGE_PATH}/hinh-6.webp`}
                        alt="Chánh điện Pháp Viện Minh Đăng Quang"
                        caption="Chánh điện trang nghiêm với tượng Phật Thích Ca Mâu Ni uy nghi"
                        variant='below'
                    />

                    <h3>2.2. Bốn bảo tháp Từ – Bi – Hỷ – Xả</h3>
                    <p>
                        Bốn bảo tháp đặt ở bốn hướng chính, cao gần 30m, mỗi tháp tượng trưng cho một đức tính cao quý: Từ, Bi, Hỷ, Xả.
                        Đây là cốt lõi trong đạo Phật, là con đường dẫn đến giải thoát và an vui thật sự.
                    </p>
                    <p>
                        Kiến trúc tháp được thiết kế tinh tế, mái cong nhẹ, thân tháp phủ gạch vàng, trên đỉnh là bảo châu tượng trưng cho trí tuệ viên mãn.
                        Bên trong tháp là nơi tôn trí xá lợi và thờ các vị cao Tăng.
                    </p>
                    <p>
                        Mỗi buổi sáng sớm hay chiều muộn, ánh nắng chiếu lên các bảo tháp vàng rực rỡ,
                        tạo nên khung cảnh huyền ảo khiến bất kỳ ai cũng cảm nhận được năng lượng linh thiêng lan tỏa.
                    </p>

                    <h3>2.3. Khu thiền đường và giảng đường</h3>
                    <p>
                        Phía sau chánh điện là khu thiền đường – nơi tổ chức các khóa thiền định và tu học.
                        Không gian yên tĩnh, bao quanh là vườn cây xanh mát và hồ nước, giúp hành giả dễ dàng tĩnh tâm.
                    </p>
                    <p>
                        Giảng đường nằm liền kề, được thiết kế hiện đại, có sức chứa hàng trăm người.
                        Tại đây thường xuyên diễn ra các buổi giảng pháp, thuyết trình và hội thảo Phật học.
                    </p>
                    <p>
                        Nhờ sự kết hợp giữa truyền thống và hiện đại, khu thiền – giảng đường trở thành nơi lan tỏa trí tuệ Phật pháp,
                        giúp người tu học hiểu rõ hơn về con đường chánh đạo.
                    </p>
                </section>

                <FigureImage
                    src={`${IMAGE_PATH}/hinh-3.webp`}
                    alt="Cây Bồ Đề Pháp Viện Minh Đăng Quang"
                    caption="Cây Bồ Đề được chiết từ gốc Bồ Đề tại Ấn Độ – nơi Đức Phật thành đạo"
                    variant='below'
                />

                {/* 3. Cây Bồ Đề */}
                <section id="bo-de">
                    <h2>3. Cây Bồ Đề linh thiêng</h2>
                    <h3>3.1. Nguồn gốc</h3>
                    <p>
                        Cây Bồ Đề trong khuôn viên pháp viện được chiết từ cây gốc ở Bồ Đề Đạo Tràng – Ấn Độ, nơi Đức Phật Thích Ca Mâu Ni thành đạo.
                        Đây là biểu tượng của trí tuệ và sự giác ngộ tối thượng.
                    </p>
                    <p>
                        Được các vị Tăng mang về trồng trong khuôn viên pháp viện, cây đã bén rễ và phát triển tươi tốt,
                        trở thành điểm chiêm bái linh thiêng mà ai đến cũng muốn đảnh lễ.
                    </p>
                    <p>
                        Mỗi buổi sáng, dưới tán Bồ Đề, hàng trăm Phật tử ngồi thiền, tụng kinh, cảm nhận năng lượng an lành lan tỏa trong từng hơi thở.
                    </p>

                    <h3>3.2. Ý nghĩa tâm linh</h3>
                    <p>
                        Cây Bồ Đề là biểu tượng của sự giác ngộ – nơi Đức Phật tìm thấy chân lý sau 49 ngày thiền định.
                        Vì thế, việc chiêm bái và hành thiền dưới gốc cây là cách nuôi dưỡng chánh niệm và lòng từ bi.
                    </p>
                    <p>
                        Nhiều Phật tử tin rằng, chỉ cần ngồi yên dưới bóng cây, giữ tâm thanh tịnh,
                        họ có thể cảm nhận sự an vui và ánh sáng trí tuệ soi chiếu trong tâm hồn.
                    </p>
                    <p>
                        Chính vì vậy, cây Bồ Đề tại Pháp Viện Minh Đăng Quang không chỉ là biểu tượng vật chất,
                        mà còn là nguồn cảm hứng tâm linh sâu sắc cho hàng ngàn người tu học.
                    </p>
                </section>

                <FigureImage
                    src={`${IMAGE_PATH}/hinh-4.webp`}
                    alt="Không gian thanh tịnh Pháp Viện Minh Đăng Quang"
                    caption="Không gian thanh tịnh, nơi lui tới của nhiều Phật tử và du khách"
                    variant='below'
                />

                {/* 4. Hoạt động */}
                <section id="hoat-dong">
                    <h2>4. Hoạt động Phật sự và khóa tu</h2>
                    <p>
                        Không chỉ là trung tâm tu học, Pháp Viện Minh Đăng Quang còn là nơi tổ chức nhiều hoạt động Phật sự sôi nổi.
                        Mỗi năm, hàng chục khóa tu được tổ chức, thu hút đông đảo Phật tử trong và ngoài nước tham dự.
                    </p>
                    <p>
                        Các khóa tu hướng dẫn người học cách giữ tâm an định, quán chiếu vô thường và thực hành thiền quán trong đời sống thường ngày.
                        Nhiều người sau khi tu tập tại đây đã thay đổi tích cực về tâm tính và nhận thức.
                    </p>
                    <p>
                        Ngoài ra, pháp viện còn là trung tâm từ thiện lớn, thực hiện nhiều chương trình cứu trợ, hiến máu, giúp đỡ người khó khăn.
                        Đây là minh chứng cho tinh thần “Phụng sự chúng sinh là cúng dường chư Phật”.
                    </p>
                </section>

                {/* 5. Kết luận */}
                <section id="ket-luan">
                    <h2>5. Kết luận</h2>
                    <p>
                        Pháp Viện Minh Đăng Quang không chỉ là công trình kiến trúc tôn giáo, mà còn là biểu tượng của lòng từ bi,
                        trí tuệ và tinh thần phụng sự. Mỗi góc nhỏ nơi đây đều chứa đựng giá trị nhân văn sâu sắc.
                    </p>
                    <p>
                        Khi đặt chân đến pháp viện, người ta không chỉ đến để lễ Phật, mà còn để tìm về với chính mình –
                        để lắng nghe hơi thở, nhìn lại tâm và nhận ra giá trị của sự an trú.
                    </p>
                    <p>
                        Giữa nhịp sống hiện đại đầy áp lực, Pháp Viện Minh Đăng Quang chính là nơi giúp con người trở về
                        với sự tĩnh lặng bên trong – nơi mà ánh sáng của “Minh Đăng Quang” vẫn mãi soi rọi trên con đường giác ngộ.
                    </p>
                </section>
            </article>
        </CamNangLayout>
    );
}
