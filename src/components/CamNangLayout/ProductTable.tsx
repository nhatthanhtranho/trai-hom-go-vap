import { formatBacklink, formatLink } from '@/utils/formatLink';
import Link from 'next/link';
import React from 'react';

interface FuneralPackage {
  name: string;
  url: string;
  price: string;
  note: string;
}

const packages: FuneralPackage[] = [
  {
    name: 'Gói Hỏa Táng Hỗ Trợ',
    url: formatBacklink('/cac-goi-hoa-tang/goi-hoa-tang-ho-tro'),
    price: 'Liên hệ',
    note: 'Chi phí hợp lý, đầy đủ nghi thức cơ bản',
  },
  {
    name: 'Gói Hỏa Táng Tiết Kiệm',
    url: formatBacklink('/cac-goi-hoa-tang/goi-hoa-tang-tiet-kiem'),
    price: '30.000.000₫',
    note: 'Tiết kiệm chi phí, chu đáo và trang nghiêm',
  },
  {
    name: 'Gói Hỏa Táng Tiêu Chuẩn',
    url: formatBacklink('/cac-goi-hoa-tang/goi-hoa-tang-tieu-chuan'),
    price: '35.000.000₫',
    note: 'Đáp ứng đầy đủ nghi lễ cơ bản',
  },
  {
    name: 'Gói Hỏa Táng Trang Trọng',
    url: formatBacklink('/cac-goi-hoa-tang/goi-hoa-tang-trang-trong'),
    price: '45.000.000₫',
    note: 'Trang nghiêm, đầy đủ nghi lễ truyền thống',
  },
  {
    name: 'Gói Hỏa Táng Tâm An',
    url: formatBacklink('/cac-goi-hoa-tang/goi-hoa-tang-tam-an'),
    price: '50.000.000₫',
    note: 'Chu toàn từ chuẩn bị đến nghi lễ',
  },
  {
    name: 'Gói An Táng Tiết Kiệm',
    url: formatBacklink('/cac-goi-an-tang/goi-an-tang-tiet-kiem'),
    price: '70.000.000₫',
    note: 'Chi phí tiết kiệm, nghi lễ chu đáo',
  },
  {
    name: 'Gói An Táng Tiêu Chuẩn',
    url: formatBacklink('/cac-goi-an-tang/goi-an-tang-tieu-chuan'),
    price: '85.000.000₫',
    note: 'Trang nghiêm, đầy đủ nghi thức và tiết kiệm',
  },
  {
    name: 'Gói An Táng Trang Trọng',
    url: formatBacklink('/cac-goi-an-tang/goi-an-tang-trang-trong'),
    price: '110.000.000₫',
    note: 'Chỉn chu, truyền thống và đầy đủ nghi lễ',
  },
  {
    name: 'Gói An Táng Cao Cấp',
    url: formatBacklink('/cac-goi-an-tang/goi-an-tang-cao-cap'),
    price: '140.000.000₫',
    note: 'Đẳng cấp, riêng tư và tôn kính',
  },
];

const ProductTable: React.FC = () => {
  return (
    <section id="goi-tang-le" className="my-4 lg:my-12">
      <h2 className="mb-4">
        Giá Các Gói Tang Lễ Trọn Gói Tại Sinh Phúc Thọ
      </h2>
      <table className="w-full table-auto border text-gray-800 rounded-lg overflow-hidden overflow-x-auto mb-4 text-xs md:text-sm">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2 lg:p-4 text-left text-white font-medium border-b border-gray-300 uppercase tracking-wide">
              Gói dịch vụ
            </th>
            <th className="p-2 lg:p-4 text-left text-white font-medium border-b border-gray-300 uppercase tracking-wide">
              Giá tham khảo
            </th>
            <th className="p-2 lg:p-4 text-left text-white font-medium border-b border-gray-300 uppercase tracking-wide">
              Ưu điểm
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {packages.map((pkg, idx) => (
            <tr
              key={idx}
              className="transition-colors duration-200 hover:bg-gray-50 hover:shadow-md"
            >
              <td className="p-2 lg:p-4 border-b border-gray-200 font-medium text-blue-700">
                <a href={pkg.url} className="hover:text-blue-900 underline">
                  {pkg.name}
                </a>
              </td>
              <td className="p-2 lg:p-4 border-b border-gray-200">{pkg.price}</td>
              <td className="p-2 lg:p-4 border-b border-gray-200 text-gray-700">{pkg.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-sm border text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 lg:mb-4">
          Cần tư vấn{' '}
          <span className="hidden md:inline-block">
            dịch vụ mai táng trọn gói
          </span>
          ?
        </h3>
        <p className="max-w-2xl text-sm md:text-base mx-auto text-gray-700 mb-4">
          Giá các gói trên chỉ mang tính tham khảo. Trên thực tế, chi phí có thể được điều chỉnh
          giảm tùy theo số ngày sử dụng nhà tang lễ, hình thức hỏa táng hoặc an táng.
          <span className="hidden md:inline">
            Gia đình cũng có thể linh hoạt lựa chọn bỏ bớt những dịch vụ không cần thiết để tối ưu
            chi phí.
          </span>
        </p>
        <Link
          href={formatBacklink('/lien-he')}
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-xs md:text-base font-medium transition"
        >
          Liên hệ tư vấn ngay
        </Link>
      </div>
    </section>
  );
};

export default ProductTable;
