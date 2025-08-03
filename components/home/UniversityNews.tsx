"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { getData } from "@/libs/axios/server";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover: string;
  image: string;
  views: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
}

interface ApiResponse {
  status: boolean;
  msg: string;
  data: {
    blogs: NewsItem[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
    };
  };
}

// Minimal Arrow Button Component
const MinimalArrowButton: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
}> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:bg-[#AAB9DD] border border-[#AAB9DD]"
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-600"
      >
        <path
          d={direction === "left" ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/blog/${news.slug}`);
  };

  // Function to strip HTML tags from description
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Format date (you may need to adjust this based on your API response)
  const formatDate = () => {
    return new Date().toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full h-full bg-[#F9F9F9] overflow-hidden rounded-2xl border border-[#AAB9DD] flex flex-col justify-start items-start cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 group">
      {/* Image Section with Date Badge */}
      <div className="w-full h-[334px] relative overflow-hidden rounded-t-2xl">
        <Image
          width={334}
          height={334}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          src={news.cover || news.image}
          alt={news.title}
        />

        {/* Date Badge */}
        <div className="absolute top-3 right-3 h-8 px-4 py-2 bg-[#433E78] rounded-xl flex justify-center items-center">
          <div className="text-white text-xs font-bold font-['Cairo']">
            {formatDate()}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 py-6 flex flex-col justify-center items-end gap-4">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          {/* Title */}
          <div className="w-full text-right flex justify-center flex-col text-[#433E78] text-xl font-medium font-['Cairo'] break-words transition-colors duration-300 group-hover:text-[#433E78]/80">
            {news.title}
          </div>

          {/* Description */}
          <div className="w-full text-right flex justify-center flex-col text-black/60 text-base font-medium font-['Cairo'] break-words">
            {stripHtml(news.description)}
          </div>
        </div>

        {/* Read More Button */}
        <div 
          onClick={handleReadMore}
          className="h-8 px-4 py-2 rounded-xl border border-[#899FCF] flex justify-center items-center cursor-pointer hover:bg-[#899FCF]/10 transition-all duration-300"
        >
          <div className="text-[#433E78] text-xs font-bold font-['Cairo']">
            اقرأ المزيد
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityNews: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response: ApiResponse = await getData('/blogs'); // Adjust endpoint as needed
        
        if (response.status && response.data.blogs) {
          setNewsData(response.data.blogs);
        } else {
          setError('Failed to fetch news data');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Error fetching news data');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col items-center gap-8 p-[clamp(24px,6.25vw,90px)]">
        <div className="w-full h-auto justify-center font-bold items-center">
          <div className="font-bold text-center text-[#433E78] text-[32px] pb-[1vw] font-['Cairo']">
            أخبار الجامعة
          </div>
          <div className="text-center text-black/60 text-base font-medium font-['Cairo']">
            جاري تحميل الأخبار...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col items-center gap-8 p-[clamp(24px,6.25vw,90px)]">
        <div className="w-full h-auto justify-center font-bold items-center">
          <div className="font-bold text-center text-[#433E78] text-[32px] pb-[1vw] font-['Cairo']">
            أخبار الجامعة
          </div>
          <div className="text-center text-red-600 text-base font-medium font-['Cairo']">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!newsData.length) {
    return (
      <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col items-center gap-8 p-[clamp(24px,6.25vw,90px)]">
        <div className="w-full h-auto justify-center font-bold items-center">
          <div className="font-bold text-center text-[#433E78] text-[32px] pb-[1vw] font-['Cairo']">
            أخبار الجامعة
          </div>
          <div className="text-center text-black/60 text-base font-medium font-['Cairo']">
            لا توجد أخبار متاحة حالياً
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto h-full flex flex-col items-center gap-8 p-[clamp(24px,6.25vw,90px)]">
      {/* Header */}
      <div className="w-full  h-auto  justify-center font-bold items-center">
        <div className="font-bold text-center text-[#433E78] text-[32px] pb-[1vw] font-['Cairo']">
          أخبار الجامعة
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.60)",
            fontSize: 16,
            fontFamily: "Cairo",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          آخر الأخبار و الفعاليات الأكاديمية
        </div>
      </div>

      {/* Swiper Container with Minimal Navigation */}
      <div className="w-full relative">
        {/* Minimal Navigation Arrows - Positioned on sides */}
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-10">
          <MinimalArrowButton
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>

        <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
          <MinimalArrowButton
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={newsData.length > 1}
          breakpoints={{
            640: {
              slidesPerView: Math.min(2, newsData.length),
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: Math.min(3, newsData.length),
              spaceBetween: 30,
            },
          }}
          className="university-news-swiper"
          style={{
            paddingBottom: "50px",
            paddingLeft: "60px",
            paddingRight: "60px",
          }}
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <div className="h-[500px]">
                <NewsCard news={news} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <button className="w-[clamp(188px,13.09vw,250px)] h-12 px-8 py-3 bg-gradient-to-br from-[#433E78] to-[#433E78] rounded-xl flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
        <span className="text-white text-base font-bold font-['Inter']">
          جميع الأخبار
        </span>
      </button>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .university-news-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .university-news-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #433e78;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .university-news-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .university-news-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default UniversityNews;