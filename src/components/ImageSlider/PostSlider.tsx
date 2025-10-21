'use client';

import { SwiperSlide } from 'swiper/react';

import CustomSwiper from './CustomSwiper';
import { Article } from '@/schema/article.schema';
import PostSliderCard from '../PostCard/PostSliderCard';

export default function PostSlider({ articles }: { articles: Article[] }) {
  return (
    <CustomSwiper
      withNavigation
      withPagination
      autoplay
      loop
      breakpoints={{
        0: { slidesPerView: 2 },
        750: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {articles.map(article => (
        <SwiperSlide key={article.title}>
          <PostSliderCard title={article.title} url={article.slug} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
}
