/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useMemo, useState, useEffect } from 'react';
import { Article } from '@/src/types/article';
import PostCard from '../PostCard';

interface PropTypes {
  articles: Article[] | any[];
  title?: string;
}

const RelativeArticleList: React.FC<PropTypes> = ({ articles, title }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Xác định có phải màn hình mobile không
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint của Tailwind
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const displayedArticles = useMemo(() => {
    if (!articles || articles.length === 0) return [];
    if (isMobile && !showAll) return articles.slice(0, 6);
    return articles;
  }, [articles, showAll, isMobile]);

  const renderArticles = useMemo(() => {
    if (displayedArticles.length === 0) {
      return <div className="col-span-12 text-gray-500">Không có bài viết nào</div>;
    }

    return displayedArticles.map(item => (
      <div key={item.title} className="w-full sm:w-1/2 lg:w-full p-2">
        <PostCard url={item.slug || item.url} title={item.title} />
      </div>
    ));
  }, [displayedArticles]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title || 'BÀI VIẾT NỔI BẬT'}</h2>
      <div className="flex flex-wrap -m-2">{renderArticles}</div>

      {/* ✅ Nút chỉ hiển thị khi mobile và có hơn 6 bài */}
      {isMobile && articles.length > 6 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-8 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
          >
            {showAll ? 'Thu gọn' : 'Tìm hiểu thêm'}
          </button>
        </div>
      )}
    </div>
  );
};

export default RelativeArticleList;
