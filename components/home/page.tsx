"use client";

import "swiper/css";
import Image from "next/image";
import backgound from "@/public/home/Background.jpg";

export default function UniversityPage() {
  return (
    <section className="relative w-full h-[609px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgound}
        alt="Background"
        fill
        className="object-cover w-full h-full z-0"
        priority
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-black/40 z-10" /> */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(-45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]" />


      {/* Text Content */}
      <div className="z-20 flex flex-col items-center text-center gap-6 px-4">
        <h1 className="text-[80px] font-bold font-inter">جامعة دمياط الأهلية</h1>
        <p className="text-[20px] font-medium font-inter">
          بيئة أكاديمية متطورة تجمع بين الجودة والحداثة، وتُعدّك لمستقبل مهني واعد في قلب الدلتا.
        </p>
      </div>
    </section>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";

// import img0 from "@/public/home/Frame14.png";
// import img1 from "@/public/home/Frame15.png";
// import img2 from "@/public/home/Frame16.png";
// import img3 from "@/public/home/Frame17.png";
// import img4 from "@/public/home/Frame18.png";
// import img5 from "@/public/home/Frame19.png";
// const images = [
//   img0,
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img0,
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
// ];

{
  /* <div className="w-full px-[clamp(12px,2vw,20px)]">
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
      </div> */
}
