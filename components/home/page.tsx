"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import Image from "next/image";
import img0 from "@/public/home/Frame14.png";
import img1 from "@/public/home/Frame15.png";
import img2 from "@/public/home/Frame16.png";
import img3 from "@/public/home/Frame17.png";
import img4 from "@/public/home/Frame18.png";
import img5 from "@/public/home/Frame19.png";

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
];

export default function UniversityPage() {
  return (
    <div
      //   dir="rtl"
      className="w-full h-full pt-[clamp(20px,3vw,40px)] flex flex-col items-center gap-[clamp(40px,6vw,80px)]"
    >
      <h1
        // className="text-center text-[clamp(32px,6vw,80px)] font-semibold text-[#677AE4]"
        className="text-center text-[clamp(30.00px,7.81vw,112.50px)] font-semibold bg-gradient-to-r to-[#754FA8] from-[#677AE4] text-transparent bg-clip-text"
        style={{ fontFamily: "Inter" }}
      >
        جامعة دمياط الأهلية
      </h1>

      <div className="w-full px-[clamp(12px,2vw,20px)]">
        <Swiper
          spaceBetween={40}
          slidesPerView="auto"
          className="!flex items-center"
        >
          {images.map((imgSrc, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[clamp(160px,20vw,260px)] !h-[clamp(220px,28vw,360px)] flex-shrink-0"
            >
              <img
                src={imgSrc.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full rounded-[clamp(12px,2vw,30px)] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
