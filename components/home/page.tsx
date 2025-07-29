"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import backgound1 from "@/public/home/backgrounds/background1.jpg";
import backgound2 from "@/public/home/backgrounds/background2.jpg";
import backgound3 from "@/public/home/backgrounds/background3.jpg";
import backgound4 from "@/public/home/backgrounds/background4.jpeg";
import backgound5 from "@/public/home/backgrounds/background5.jpeg";

export default function UniversityPage() {
  // Sample slides data - you can modify this array to add more slides
  const slides = [
    {
      title: "جامعة دمياط الأهلية",
      description: "بيئة أكاديمية متطورة تجمع بين الجودة والحداثة، وتُعدّك لمستقبل مهني واعد في قلب الدلتا.",
      backgroundImage: backgound1,
    },
    {
      title: "التميز الأكاديمي",
      description: "برامج دراسية متنوعة ومعتمدة دولياً تلبي احتياجات سوق العمل المحلي والإقليمي",
      backgroundImage: backgound2,
    },
    {
      title: "البحث العلمي",
      description: "مراكز بحثية متقدمة ومختبرات حديثة تدعم الابتكار والتطوير العلمي",
      backgroundImage: backgound3,
    },
    {
      title: "الحرم الجامعي",
      description: "مرافق عصرية ومساحات خضراء واسعة توفر بيئة تعليمية مثالية للطلاب",
      backgroundImage: backgound4,
    },
    {
      title: "التواصل المجتمعي",
      description: "شراكات استراتيجية مع المؤسسات المحلية والدولية لخدمة المجتمع",
      backgroundImage: backgound5,
    },
  ];

  return (
    <section className="relative w-full h-screen lg:-top-[7vw] -top-[12vw] flex items-center justify-center group">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src={slide.backgroundImage}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover w-full h-full z-0"
              priority={index === 0}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(-45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]" />

            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 text-white">
              <h1 className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] 2xl:text-[4vw] font-bold font-inter leading-tight">
                {slide.title}
              </h1>
              <p className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.5vw] font-medium font-inter max-w-4xl leading-relaxed">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300">
          <svg 
            className="w-6 h-6 md:w-7 md:h-7 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      <div className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300">
          <svg 
            className="w-6 h-6 md:w-7 md:h-7 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Custom styles for pagination */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 2rem !important;
          text-align: center !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
        
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 1.5rem !important;
          }
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.4) !important;
          border-radius: 50% !important;
          margin: 0 6px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          opacity: 1 !important;
        }
        
        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            margin: 0 4px !important;
          }
        }
        
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.7) !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.3) !important;
        }
      `}</style>
    </section>
  );
}