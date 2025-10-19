
const ContactSetion = () => {
  return (
    <div className="grid grid-cols-2 col-span-12 gap-6">
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Liên Hệ Với Chúng Tôi</h2>
        <p className="text-gray-700 mb-4 text-lg">
          Nếu quý gia đình đang cần tư vấn hoặc hỗ trợ tổ chức tang lễ, xin đừng ngần ngại liên hệ
          với Trại Hòm Sinh Phúc Thọ. Chúng tôi luôn sẵn sàng lắng nghe và đồng hành 24/7 để giúp
          quý vị vượt qua thời khắc khó khăn một cách nhẹ nhàng và trọn vẹn nhất. Hãy để chúng tôi
          thay bạn lo liệu mọi nghi thức – từ khâm liệm, nhập quan đến di quan, hỏa táng – với sự
          tận tâm và tôn kính tuyệt đối.
        </p>

        <div className="rounded-lg text-gray-800 p-6 text-left shadow-md inline-block w-full max-w-xl bg-white mt-2">
          <p className="font-semibold tracking-wide">Trại Hòm</p>
          <h3 className="text-black font-bold text-3xl uppercase">Sinh Phúc Thọ</h3>
          <p className="mt-3 mb-3">
            <span className="font-semibold">Hotline (24/7):</span>{' '}
            <a href="tel:0913673661" className="font-bold tracking-wide">
              0913.673.661 (Anh Thời)
            </a>
          </p>
          <p className="mb-3 font-bold">
            <span className="font-semibold">Địa chỉ:</span> Số 119 Đường Nguyễn Du, Phường 1 , Quận
            Gò Vấp, TP.HCM
          </p>
          <p className="mb-3">
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:nhatthanhtranho@gmail.com" className="font-bold">
              traihomsinhphuctho@gmail.com
            </a>
          </p>
          <p className="mb-3">
            <span className="font-semibold">Website:</span>{' '}
            <a href="https://sinhphuctho.com" className="font-bold underline" target="_blank">
              https://sinhphuctho.com
            </a>
          </p>
          {/* <div className="flex gap-2">
            <a
              href="https://zalo.me/0913673661"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src="/assets/images/zalo.webp" width={40} height={40} alt="Zalo" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579044366898"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src="/assets/images/facebook.webp" width={40} height={40} alt="Zalo" />
            </a>

            <a
              href="https://www.youtube.com/@sinhphuctho/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image src="/assets/images/youtube.webp" width={40} height={40} alt="Zalo" />
            </a>
          </div> */}
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.800207802359!2d106.68509669999999!3d10.826596300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fbb528c137%3A0x39910f591a45c451!2zMTE5IMSQLiBOZ3V5w6rMg24gRHUsIFBoxrDhu51uZyAxLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMA!5e0!3m2!1sen!2s!4v1759480508189!5m2!1sen!2s"
          className="w-full h-80 md:h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-span-2">
        <div className="border-t-8 border-gray-800 w-32 mb-4" />
      </div>
    </div>
  );
};

export default ContactSetion;
