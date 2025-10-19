'use client';

import { formatLink } from '@/utils/formatLink';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Khi mở menu: khóa scroll + fix nhảy layout
  useEffect(() => {
    if (isMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-gray-200 py-2.5 px-4 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* --- Mobile layout --- */}
        <div className="flex items-center justify-between w-full lg:hidden relative">
          {/* Hamburger nút menu */}
          <button
            type="button"
            className="inline-flex items-center p-1.5 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>

          {/* Logo chữ căn giữa */}
          <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer">
            <Link href={'/'}>
              <h2 className="text-xl font-bold tracking-wide">SINH PHÚC THỌ</h2>
            </Link>
          </div>

          {/* Icon Home bên phải */}
          <Link href={formatLink('/')} className="p-1.5 text-gray-600 hover:text-black">
            {/* 👉 Bạn có thể đổi icon tùy thích */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l9.75-9 9.75 9M4.5 10.5V21h15v-10.5"
              />
            </svg>
          </Link>
        </div>

        {/* --- Desktop layout --- */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Logo bên trái */}
          <Link href={'/'}>
            <h2 className="text-xl font-bold tracking-wide cursor-pointer">SINH PHÚC THỌ</h2>
          </Link>

          {/* Menu desktop */}
          <nav className="flex space-x-6 font-medium">
            <Link href={'/'}>Trang Chủ</Link>
            <Link href={formatLink('/ve-chung-toi')}>Về Chúng Tôi</Link>
            <Link href={formatLink('/cac-goi-hoa-tang')}>Hỏa Táng</Link>
            <Link href={formatLink('/cac-goi-an-tang')}>An Táng</Link>
            <Link href={formatLink('/cac-loai-ao-quan')}>Áo Quan</Link>
            <Link href={formatLink('/dich-vu-them')}>Dịch Vụ Thêm</Link>
            <Link href={formatLink('/cam-nang')}>Cẩm Nang</Link>
            <Link href={formatLink('/lien-he')}>Liên Hệ</Link>
          </nav>
        </div>
      </div>

      {/* Overlay ngoài (blur) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 bg-black/30 backdrop-blur-sm ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar menu (mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header trong menu */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Section 1: Dịch vụ chính */}
        <nav className="p-6 space-y-4 text-lg font-medium border-b border-gray-200 flex flex-col">
          <Link href={formatLink('/')} onClick={() => setIsMenuOpen(false)}>
            Trang Chủ
          </Link>
          <Link href={formatLink('/ve-chung-toi')} onClick={() => setIsMenuOpen(false)}>
            Về Chúng Tôi
          </Link>
          <Link href={formatLink('/cac-goi-hoa-tang')} onClick={() => setIsMenuOpen(false)}>
            Hỏa Táng
          </Link>
          <Link href={formatLink('/cac-goi-an-tang')} onClick={() => setIsMenuOpen(false)}>
            An Táng
          </Link>
          <Link href={formatLink('/cac-loai-ao-quan')} onClick={() => setIsMenuOpen(false)}>
            Áo Quan
          </Link>
        </nav>

        {/* Section 2: Bổ sung */}
        <nav className="p-6 space-y-4 text-lg font-medium flex flex-col">
          <Link href={formatLink('/dich-vu-them')} onClick={() => setIsMenuOpen(false)}>
            Dịch Vụ Thêm
          </Link>
          <Link href={formatLink('/cam-nang')} onClick={() => setIsMenuOpen(false)}>
            Cẩm Nang
          </Link>
          <Link href={formatLink('/lien-he')} onClick={() => setIsMenuOpen(false)}>
            Liên Hệ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
