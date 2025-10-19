import Image from '@/components/CustomImage';
import ProductTable from './ProductTable';

const iconSize = 50;

const ContactSetion = () => {
  return (
    <>
      <ProductTable />
      <div className="grid grid-cols-2 col-span-12 gap-6">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-800">Liên Hệ Với Chúng Tôi</h2>
          <div className="border-gray-800 w-16 border-2 mt-1 mb-2" />

          <p className="text-base mb-4 max-w-2xl">
            Nếu quý gia đình đang cần tư vấn hoặc hỗ trợ tổ chức tang lễ, xin đừng ngần ngại liên hệ
            với Trại Hòm Sinh Phúc Thọ. Chúng tôi luôn sẵn sàng lắng nghe và đồng hành 24/7 để giúp
            quý vị vượt qua thời khắc khó khăn một cách nhẹ nhàng và trọn vẹn nhất. {' '}
            <span className="hidden lg:inline-block">
              Hãy để chúng tôi thay bạn lo liệu mọi nghi thức – từ khâm liệm, nhập quan đến di quan,
              hỏa táng – với sự tận tâm và tôn kính tuyệt đối.
            </span>
          </p>
          <div className="flex gap-2">
            <a
              href="https://zalo.me/0913673661"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src="/assets/images/zalo.webp" width={iconSize} height={iconSize} alt="Zalo" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579044366898"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/images/facebook.webp"
                width={iconSize}
                height={iconSize}
                alt="Zalo"
              />
            </a>

            <a
              href="https://www.youtube.com/@sinhphuctho/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/images/youtube.webp"
                width={iconSize}
                height={iconSize}
                alt="Zalo"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="rounded-lg text-left shadow-md w-full bg-white mt-2 flex justify-between items-center gap-4">
            {/* Text block */}
            <div className="p-4 flex-1">
              <p className="font-semibold text-xs tracking-wide text-gray-600">Trại Hòm</p>
              <h3 className="text-black font-bold uppercase text-lg">Sinh Phúc Thọ</h3>

              <p className="mt-3 mb-3 text-sm">
                <span className="font-semibold">Hotline (24/7):</span>{' '}
                <a href="tel:0913673661" className="font-bold tracking-wide text-blue-700 hover:underline">
                  0913.673.661 (Anh Thời)
                </a>
              </p>

              <p className="mb-3 font-bold text-sm">
                <span className="font-semibold">Địa chỉ:</span> Số 119 Đường Nguyễn Du, Phường 1,
                Quận Gò Vấp, TP.HCM
              </p>

              <p className="mb-3 text-sm">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:nhatthanhtranho@gmail.com"
                  className="font-bold text-blue-700 hover:underline"
                >
                  traihomsinhphuctho@gmail.com
                </a>
              </p>

              <p className="text-sm">
                <span className="font-semibold">Website: </span>
                <a
                  href="https://sinhphuctho.com"
                  className="font-bold underline text-blue-700"
                  target="_blank"
                >
                  https://sinhphuctho.com
                </a>
              </p>
            </div>

            {/* Image on the right */}
            <div className="relative hidden lg:block w-48 h-60 flex-shrink-0 rounded-r-lg overflow-hidden">
              <Image
                fill
                alt="Card Business Image"
                src="/assets/images/contact-form.webp"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
        <div className="col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.800207802359!2d106.68509669999999!3d10.826596300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fbb528c137%3A0x39910f591a45c451!2zMTE5IMSQLiBOZ3V5w6rMg24gRHUsIFBoxrDhu51uZyAxLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMA!5e0!3m2!1sen!2s!4v1759480508189!5m2!1sen!2s"
            className="w-full h-96"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactSetion;
