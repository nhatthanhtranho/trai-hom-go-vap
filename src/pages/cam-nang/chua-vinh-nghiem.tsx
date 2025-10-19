import CamNangLayout from '@/src/components/CamNangLayout/CamNangLayout';
import type { GetStaticProps, Metadata } from 'next';
import FigureImage from '@/src/components/ImageFigure';
const slug = 'chua-vinh-nghiem';
const title = 'Chùa Vĩnh Nghiêm – Ngôi Chùa Linh Thiêng Giữa Lòng Sài Gòn';
const description =
    'Khám phá chùa Vĩnh Nghiêm – ngôi chùa linh thiêng giữa lòng Sài Gòn với kiến trúc uy nghi, lịch sử hơn nửa thế kỷ và giá trị văn hóa tâm linh đặc sắc.';
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
                url: `/assets/images/cam-nang/${slug}/hinh-1.webp`,
                width: 1200,
                height: 630,
                alt: 'Toàn cảnh chùa Vĩnh Nghiêm tại TP.HCM',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`/assets/images/cam-nang/${slug}/hinh-1.webp`],
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
        <CamNangLayout
            title={title}
            bannerImageSrc={`/assets/images/cam-nang/${slug}/hinh-1.webp`}
        >
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                    {title}
                </h1>
                <p className="mt-3 text-sm text-gray-600 max-w-3xl">{description}</p>

                <div className="mt-5 border-l-4 border-yellow-400 bg-yellow-50/60 p-3 rounded-md max-w-3xl">
                    <blockquote className="italic text-gray-700 text-sm">
                        “Chùa Vĩnh Nghiêm – điểm đến linh thiêng và biểu tượng văn hóa Phật giáo giữa lòng Sài Gòn.”
                    </blockquote>
                    <div className="mt-1 text-xs text-gray-500">
                        <a href="https://sinhphuctho.com" className="underline">
                            <strong>Sinh Phúc Thọ</strong>
                        </a>
                    </div>
                </div>

                <nav className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-100 shadow-sm max-w-3xl">
                    <h2 className="font-semibold mb-2 text-gray-800">Mục lục</h2>
                    <ul className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                        <li><a href="#doi-net" className="hover:text-yellow-700">1. Đôi nét về chùa Vĩnh Nghiêm</a></li>
                        <li><a href="#di-chuyen" className="hover:text-yellow-700">2. Hướng dẫn di chuyển đến đây</a></li>
                        <li><a href="#kien-truc" className="hover:text-yellow-700">3. Khám phá kiến trúc chùa</a></li>
                        <li><a href="#luu-y" className="hover:text-yellow-700">4. Một số điều cần lưu ý</a></li>
                        <li><a href="#ket" className="hover:text-yellow-700">5. Kết</a></li>
                    </ul>
                </nav>
            </header>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                {/* 1. Đôi nét */}
                <section id="doi-net">
                    <h2>1. Đôi nét về chùa Vĩnh Nghiêm</h2>

                    <p>
                        <strong>Chùa Vĩnh Nghiêm</strong> tọa lạc tại <strong>339 Nam Kỳ Khởi Nghĩa, phường 7, quận 3, TP.HCM</strong>,
                        cách chợ Bến Thành khoảng 3,5km. Với diện tích hơn 6.000m², đây là ngôi chùa lớn và nổi tiếng bậc nhất Sài Gòn,
                        mang phong cách kiến trúc truyền thống Việt Nam hòa quyện hiện đại, không gian thoáng đãng và thanh tịnh.
                    </p>

                    <p>
                        Năm <strong>1964</strong>, chùa khởi công xây dựng trên khu đất rộng bên rạch Thị Nghè và hoàn thiện sau bảy năm.
                        Kiến trúc của chùa vừa uy nghi vừa mềm mại, kết hợp hài hòa giữa tường gạch đỏ, mái ngói cong,
                        và những đường nét điêu khắc tinh xảo. Đây là nơi mà nhiều người tìm đến để tĩnh tâm, hành lễ và cảm nhận sự an lạc giữa lòng đô thị.
                    </p>

                    <FigureImage
                        caption='Hình 1: Toàn cảnh chùa Vĩnh Nghiêm giữa lòng Sài Gòn'
                        alt='Toàn cảnh chùa Vĩnh Nghiêm tại TP.HCM'
                        variant='below'
                        src='/assets/images/cam-nang/chua-vinh-nghiem/hinh-1.webp'
                    />

                    <p>
                        Chùa được sáng lập bởi hai vị Hòa thượng <strong>Thích Tâm Giác</strong> và <strong>Thích Thanh Kiểm</strong>,
                        là nơi truyền bá Thiền phái Trúc Lâm Yên Tử từ miền Bắc vào Nam.
                        Từ đó đến nay, chùa trở thành trung tâm tu học, tổ chức lễ hội Phật giáo,
                        và là biểu tượng văn hóa tâm linh của người dân Sài Gòn.
                    </p>
                </section>

                {/* 2. Di chuyển */}
                <section id="di-chuyen" className="mt-8">
                    <h2>2. Hướng dẫn di chuyển đến đây</h2>

                    <p>
                        <strong>Sinh Phúc Thọ</strong> xin gửi đến quý khách một số hướng dẫn di chuyển đến chùa Vĩnh Nghiêm để thuận tiện hơn trong hành trình chiêm bái:
                    </p>

                    <p>
                        <strong>Từ miền Bắc:</strong> Quý khách có thể bay đến <strong>sân bay Tân Sơn Nhất</strong>,
                        sau đó di chuyển bằng taxi, Grab hoặc xe buýt đến chùa (khoảng 20 phút đi xe).
                        Quãng đường chỉ tầm 6km, rất thuận tiện cho khách thập phương.
                    </p>

                    <p>
                        <strong>Từ miền Tây:</strong> Xe khách là lựa chọn tiết kiệm và dễ dàng.
                        Sau khi đến bến xe Miền Tây, quý khách có thể đi taxi hoặc xe ôm công nghệ đến chùa,
                        thời gian khoảng 30–40 phút tùy mật độ giao thông.
                    </p>

                    <p>
                        <strong>Từ trung tâm TP.HCM:</strong> Chùa nằm gần cầu Công Lý và ngã tư Nguyễn Văn Trỗi.
                        Nếu đi xe máy hoặc ô tô cá nhân, quý khách có thể gửi xe tại <strong>339 Nam Kỳ Khởi Nghĩa</strong> (xe máy)
                        hoặc <strong>391A Nam Kỳ Khởi Nghĩa</strong> (ô tô).
                    </p>

                    <p>
                        <strong>Xe buýt:</strong> Các tuyến 04 và 152 đều dừng gần chùa.
                        Du khách có thể xuống tại trạm <strong>chợ Phú Nhuận</strong> hoặc <strong>ngã tư Nguyễn Văn Trỗi</strong> rồi đi bộ vài phút là đến nơi.
                    </p>

                    <p>
                        Dù chọn phương tiện nào, <a href="https://sinhphuctho.com" className="text-blue-700"><strong>Sinh Phúc Thọ</strong></a> khuyên quý khách nên xuất phát sớm,
                        giữ tâm an lành và dành thời gian đủ để cảm nhận trọn vẹn sự bình yên nơi cửa Phật.
                    </p>

                    <FigureImage
                        caption='Hình 3: Đường đến chùa Vĩnh Nghiêm thuận tiện và dễ tìm'
                        alt='Đường đến chùa Vĩnh Nghiêm thuận tiện và dễ tìm'
                        variant='below'
                        src='/assets/images/cam-nang/chua-vinh-nghiem/hinh-4.webp'
                    />
                </section>

                {/* 3. Kiến trúc */}
                <section id="kien-truc" className="mt-8">
                    <h2>3. Khám phá kiến trúc chùa Vĩnh Nghiêm</h2>

                    <p>
                        <strong>Chùa Vĩnh Nghiêm</strong> được thiết kế bởi kiến trúc sư <strong>Nguyễn Bá Lăng</strong>,
                        cùng sự cộng tác của các ông <strong>Lê Tấn Chuyên</strong> và <strong>Cổ Văn Hậu</strong>.
                        Công trình được xây dựng trên nền đất thấp bên rạch Thị Nghè,
                        nơi phải vận chuyển hơn 40.000m³ đất từ xa lộ Biên Hòa để san lấp –
                        một minh chứng cho tâm huyết và công phu của những người kiến tạo.
                    </p>

                    <p>
                        Năm 1971, các hạng mục chính hoàn thành gồm tòa nhà trung tâm, Phật điện, giảng đường,
                        Bảo tháp Quán Thế Âm và khu cơ sở xã hội với thư viện, văn phòng, phòng tăng, lớp học.
                        Về sau, chùa tiếp tục xây dựng Bảo tháp Xá Lợi Cộng đồng, Tháp đá Vĩnh Nghiêm,
                        cùng Phương trượng đường phục vụ lễ hội và giảng pháp.
                    </p>

                    <p>
                        <strong>Cổng tam quan</strong> là biểu tượng đặc trưng của chùa, mang vẻ đẹp cổ kính và trang nghiêm.
                        Cổng cao 12m, rộng 16m, gồm ba lối vào tượng trưng cho <em>tam giải thoát môn</em>:
                        Không môn, Giả môn và Trung môn – biểu trưng cho con đường giác ngộ.
                        Mái ngói đỏ uốn cong, tường gạch đỏ và cửa gỗ khảm ốc tạo nên vẻ uy nghi thanh thoát.
                    </p>

                    <p>
                        Phía trên cổng khắc dòng chữ vàng “Chùa Vĩnh Nghiêm”, hai bên là đôi câu đối khảm gỗ tinh xảo,
                        như lời nhắc người đời giữ tâm sáng khi bước qua cửa Phật.
                        Toàn bộ kiến trúc toát lên sự cân đối, hài hòa và linh thiêng – nơi hội tụ văn hóa, tín ngưỡng và nghệ thuật Việt Nam.
                    </p>
                </section>
                <FigureImage
                    caption='Hình 3: Tháp Quan Âm tại chùa Vĩnh Nghiêm'
                    alt='Tháp Quan Âm tại chùa Vĩnh Nghiêm'
                    variant='below'
                    src='/assets/images/cam-nang/chua-vinh-nghiem/hinh-6.webp'
                />

                {/* 4. Lưu ý */}
                <section id="luu-y" className="mt-8">
                    <h2>4. Một số điều cần lưu ý khi viếng chùa</h2>
                    <ul>
                        <li>Ăn mặc lịch sự, tránh trang phục ngắn hoặc hở hang.</li>
                        <li>Đi vào bằng cửa phải (giả quan), ra bằng cửa trái (không quan).</li>
                        <li>Không chỉ tay vào tượng Phật, không chụp ảnh khu thờ cúng.</li>
                        <li>Giữ trật tự, sắm lễ chay, hạn chế đốt vàng mã.</li>
                        <li>Tôn trọng người tu hành, giữ gìn vệ sinh và sự tĩnh lặng nơi chùa.</li>
                    </ul>
                </section>

                {/* 5. Kết */}
                <section id="ket" className="mt-8">
                    <h2>5. Kết</h2>
                    <p>
                        <strong>Chùa Vĩnh Nghiêm</strong> không chỉ là công trình kiến trúc tiêu biểu của Phật giáo Việt Nam,
                        mà còn là nơi gửi gắm niềm tin, lòng hướng thiện của biết bao thế hệ Phật tử.
                        Nếu có dịp đến TP.HCM, hãy một lần ghé thăm – để cảm nhận sự thanh tịnh,
                        an nhiên và lòng từ bi lan tỏa nơi cửa Phật.
                    </p>
                </section>
                <FigureImage
                    caption='Hình 4: Khuôn viên chùa Vĩnh Nghiêm rộng rãi và thanh tịnh'
                    alt='Khuôn viên chùa Vĩnh Nghiêm rộng rãi và thanh tịnh'
                    variant='below'
                    src='/assets/images/cam-nang/chua-vinh-nghiem/hinh-7.webp'
                />
                {/* 6. Câu hỏi thường gặp */}
                <section id="faq" className="mt-12">
                    <h2>6. Câu hỏi thường gặp về chùa Vĩnh Nghiêm</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                1. Chùa Vĩnh Nghiêm mở cửa vào thời gian nào?
                            </h3>
                            <p>
                                Chùa mở cửa đón khách và Phật tử từ <strong>6:00 sáng đến 20:00 tối mỗi ngày</strong>.
                                Quý khách có thể đến viếng, lễ Phật hoặc tham quan tự do trong khung giờ này.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                2. Chùa có thu phí tham quan hay không?
                            </h3>
                            <p>
                                <strong>Không.</strong> Chùa Vĩnh Nghiêm mở cửa miễn phí cho tất cả du khách.
                                Tuy nhiên, quý khách có thể công đức tùy tâm để góp phần duy trì và trùng tu chùa.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                3. Nên đến chùa Vĩnh Nghiêm vào thời điểm nào trong năm?
                            </h3>
                            <p>
                                Du khách có thể ghé chùa quanh năm, nhưng đông nhất là vào dịp
                                <strong>rằm tháng Giêng, lễ Phật Đản</strong> và các ngày <strong>Vu Lan Báo Hiếu</strong>.
                                Đây là thời điểm chùa tổ chức nhiều nghi lễ và hoạt động ý nghĩa.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                4. Có thể gửi tro cốt tại chùa Vĩnh Nghiêm không?
                            </h3>
                            <p>
                                Có. Chùa có <strong>Bảo tháp Xá Lợi Cộng đồng</strong> – nơi lưu giữ tro cốt và xá lợi Phật tử.
                                <a href="https://sinhphuctho.com" className="text-blue-700"> Sinh Phúc Thọ </a>
                                hỗ trợ trọn gói dịch vụ hỏa táng và gửi tro cốt tại đây cho quý gia đình có nhu cầu.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900">
                                5. Có bãi giữ xe tại chùa không?
                            </h3>
                            <p>
                                Có. Chùa có khu vực gửi xe máy tại <strong>339 Nam Kỳ Khởi Nghĩa</strong> và
                                bãi giữ ô tô tại <strong>391A Nam Kỳ Khởi Nghĩa</strong>, cách cổng chùa chỉ vài chục mét.
                            </p>
                        </div>
                    </div>
                </section>

            </article>
        </CamNangLayout>
    );
}
