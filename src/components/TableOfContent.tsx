'use client';
import { TableOfContentItem } from '@/types/tableOfContentItem';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TableOfContentsProps {
  items: TableOfContentItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [expanded, setExpanded] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  // ✅ Scroll mượt + phát event mở layout
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // Phát sự kiện để layout mở rộng
    window.dispatchEvent(new CustomEvent('expand-content'));

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.history.replaceState(null, '', `#${id}`);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300); // delay nhẹ cho layout mở
  };

  // ✅ Highlight heading hiện tại
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3');
      let currentId = null;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentId = heading.id;
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderItems = (items: TableOfContentItem[], isSub?: boolean) => (
    <ul
      className={`${
        isSub ? 'list-decimal pl-5 space-y-1' : 'list-disc pl-6 space-y-2 text-slate-700'
      }`}
    >
      {items.map((item, idx) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`block transition-colors duration-200 ${
              activeId === item.id
                ? 'text-amber-600 font-semibold'
                : 'hover:text-amber-600 text-slate-700'
            }`}
          >
            {!isSub && `${idx + 1}. `} {item.title}
          </a>
          {item.children && renderItems(item.children, true)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
      <div
        className="flex items-center justify-between px-5 py-3 cursor-pointer select-none border-b border-slate-200"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <Image
            src="/assets/images/muc-luc.svg"
            width={24}
            height={24}
            alt="logo mục lục"
            className="mr-3"
          />
          <span className="font-bold text-slate-800">Mục lục</span>
        </div>
        <span className="text-sm text-slate-500">
          {expanded ? 'Thu gọn ▲' : 'Mở rộng ▼'}
        </span>
      </div>

      {expanded && <div className="px-5 pb-5 pt-3">{renderItems(items)}</div>}
    </div>
  );
};

export default TableOfContents;
