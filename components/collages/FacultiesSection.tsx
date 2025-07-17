import React from "react";

import Image from "next/image";
import arrow from "@/public/collages/SVG.svg";
import teaching from "@/public/collages/teaching.svg";
import language from "@/public/collages/language-circle.svg";
import doctor from "@/public/collages/doctor-03.svg";
import canvas from "@/public/collages/canvas.svg";
import artificial from "@/public/collages/artificial-intelligence-03.svg";
import book from "@/public/collages/book-04.svg";

const faculties = [
  {
    title: "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
    description:
      "الأبتكار في تعليم الحوسبة والذكاء الاصطناعي وتوظيف البحث والتقنية في خدمة المجتمع",
    icon: artificial,
  },
  {
    title: "كلية الفنون والتصميم",
    description:
      "التميّز في تعليم الفنون والتصميم المبتكر، والبحوث التطبيقية، وتعزيز الإسهام الثقافي في خدمة المجتمع",
    icon: canvas,
  },
  {
    title: "كلية تمريض",
    description:
      "التميّز في تعليم التمريض الذكي، والبحوث التطبيقية، والخدمات المجتمعية",
    icon: doctor,
  },
  {
    title: "كلية الألسن",
    description:
      "الريادة في تعليم اللغات وتعميق التفاهم الحضاري من خلال البحث وخدمة المجتمع",
    icon: language,
  },
  {
    title: "كلية الأعمال",
    description:
      "التميّز في تعليم إدارة الأعمال والبحوث التطبيقية وريادة الأعمال لخدمة المجتمع",
    icon: teaching,
  },
  {
    title: "كلية الأثار والسياحة",
    description:
      "الريادة في دراسة الآثار وتنمية السياحة من خلال التعليم والبحث وخدمة المجتمع",
    icon: book,
  },
];

export default function FacultiesSection() {
  return (
    <div className="w-[clamp(324px,84.38vw,1215px)] mx-auto h-full flex flex-col items-end gap-6 mb-2.5 px-4 ">
      <div
        className={`px-4 py-2 gradient-bg rounded-[34px] inline-flex justify-center items-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer`}
      >
        <div className="text-white text-2xl font-medium text-center">
          المصروفات الدراسية لكليات الجامعة
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {faculties.map((faculty, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] h-[400px] p-4 bg-[#F8F8F8] rounded-lg flex flex-col items-center justify-center gap-8 border border-[#B3B3B3] mx-auto group cursor-pointer transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:bg-white/80"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              <div
                className={`relative w-[90px] h-[90px] gradient-bg rounded-full transition-all duration-300 group-hover:scale-110`}
              >
                <div className="absolute inset-0 border border-[#677AE4] rounded-full border-dashed w-[108px] h-[108px] -left-[9px] -top-[9px] transition-all duration-300 group-hover:rotate-45" />
                {/* Icons go here */}
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    width={48}
                    height={48}
                    src={faculty.icon}
                    alt="Icon"
                    className="z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 w-full transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="text-black text-center w-full text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis [direction:rtl]">
                  {faculty.title}
                </div>

                <div className="text-black/60 text-center text-base font-medium">
                  {faculty.description}
                </div>
              </div>
            </div>

            <div
              className={`inline-flex items-center rounded-[38px] gradient-bg transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg`}
            >
              <div className="px-4 flex items-center gap-2">
                <div className="text-white text-base font-medium text-center">
                  عرض التفاصيل
                </div>
              </div>
              <div
                className={`w-[58px] h-[58px] rounded-full relative gradient-bg transition-all duration-300 group-hover:-rotate-15`}
              >
                {/* Arrow icon (SVG or div) goes here */}
                <div className="w-full h-full flex justify-center">
                  <Image
                    src={arrow}
                    alt="Arrow"
                    width={17}
                    height={14}
                    className="z-10 transition-all duration-300 group-hover:translate-x-0"
                    // priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}