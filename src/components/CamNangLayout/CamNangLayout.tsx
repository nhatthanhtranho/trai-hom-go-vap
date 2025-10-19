'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Article } from '@/src/types/article';
import SimpleSlider from '../ImageSlider';
import ContactSection from '../ContactSection';
import RelativeArticleList from '../RelativeArticleList/RelativeArticleList';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const getArticles = async (tag?: string): Promise<Article[]> => {
  let articles: Article[] = [];

  switch (tag) {

    default: {
      const camNangArticles = (await import('@/data/cam-nang.json')).default;
      articles = camNangArticles;
    }
  }
  return articles.slice(-15).reverse();
};

interface CamNangLayoutProps {
  children: ReactNode;
  title: string;
  tag?: string;
}

export default function CamNangLayout({ children, title, tag }: CamNangLayoutProps) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles(tag).then(setArticles);
  }, [tag]);

  return (
    <div>
      <SimpleSlider title={title} subTitle="Cẩm Nang" imgSrc="/assets/images/ve-chung-toi.jpg" />
  

      <div className="container mx-auto px-4 lg:px-0 mt-5 md:pb-12 pt-4">
        <div className="grid grid-cols-12 md:gap-8 mb-4">
          <main className="col-span-12 lg:col-span-8">
            <span className="inline-block bg-gray-700 text-white px-3 py-1 rounded">
              {tag || 'Cẩm Nang'}
            </span>
            <div className="cam-nang-layout mb-6">{children}</div>
          </main>
          <aside className="col-span-12 lg:col-span-4">
            <RelativeArticleList articles={articles} />
          </aside>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
