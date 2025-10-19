'use client';

import { useEffect, useState } from 'react';
import RelativeArticleList from '@/src/components/RelativeArticleList/RelativeArticleList';
import { Article } from '@/src/types/article';

export const getArticles = async (tag?: string): Promise<Article[]> => {
    let articles: Article[] = [];

    switch (tag) {
        default: {
            const camNang = (await import('@/src/data/cam-nang.json')).default;
            articles = [...camNang];
        }
    }
    return articles.slice(-15).reverse();
};

export default function ClientRelativeList({ tag }: { tag?: string }) {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getArticles(tag).then(setArticles);
    }, [tag]);

    return <RelativeArticleList articles={articles} />;
}
