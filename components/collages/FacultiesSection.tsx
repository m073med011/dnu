import React from "react";

import Image from "next/image";
import teaching from "@/public/collages/teaching.svg";
import language from "@/public/collages/language-circle.svg";
import doctor from "@/public/collages/doctor-03.svg";
import canvas from "@/public/collages/canvas.svg";
import artificial from "@/public/collages/artificial-intelligence-03.svg";
import book from "@/public/collages/book-04.svg";
import image00 from "@/public/collages/div.front-content.png";
import image01 from "@/public/collages/div.front-content01.png";
import image02 from "@/public/collages/div.front-content02.png";
import image03 from "@/public/collages/div.front-content03.png";
import image04 from "@/public/collages/div.front-content04.png";
import image05 from "@/public/collages/div.front-content05.png";

const faculties = [
  {
    title: "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
    description:
      "الأبتكار في تعليم الحوسبة والذكاء الاصطناعي وتوظيف البحث والتقنية في خدمة المجتمع",
    icon: artificial,
    bgImage: image04,
  },
  {
    title: "كلية الفنون والتصميم",
    description:
      "التميّز في تعليم الفنون والتصميم المبتكر، والبحوث التطبيقية، وتعزيز الإسهام الثقافي في خدمة المجتمع",
    icon: canvas,
    bgImage: image05,
  },
  {
    title: "كلية تمريض",
    description:
      "التميّز في تعليم التمريض الذكي، والبحوث التطبيقية، والخدمات المجتمعية",
    icon: doctor,
    bgImage: image00,
  },
  {
    title: "كلية الألسن",
    description:
      "الريادة في تعليم اللغات وتعميق التفاهم الحضاري من خلال البحث وخدمة المجتمع",
    icon: language,
    bgImage: image01,
  },
  {
    title: "كلية الأعمال",
    description:
      "التميّز في تعليم إدارة الأعمال والبحوث التطبيقية وريادة الأعمال لخدمة المجتمع",
    icon: teaching,
    bgImage: image02,
  },
  {
    title: "كلية الأثار والسياحة",
    description:
      "الريادة في دراسة الآثار وتنمية السياحة من خلال التعليم والبحث وخدمة المجتمع",
    icon: book,
    bgImage: image03,
  },
];

export default function FacultiesSection() {
  return (
    <div className="w-[clamp(324px,84.38vw,1215px)] mx-auto h-full flex flex-col items-center gap-6 mb-2.5 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {faculties.map((faculty, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] h-[424px] relative overflow-hidden rounded-lg mx-auto group cursor-pointer transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
          >
            {/* Background Image */}
            <Image
              src={faculty.bgImage}
              alt={faculty.title}
              fill
              className="object-cover"
            />

            {/* Content overlay at bottom */}
            <div className="w-[300px] p-4 absolute left-[10px] bottom-3 bg-white/60 rounded-2xl flex flex-col justify-center items-end transition-all duration-300 group-hover:bg-white/80">
              <div
                className="text-center flex justify-center flex-col text-black text-2xl font-medium mb-2"
                style={{ fontFamily: "Cairo" }}
              >
                {faculty.title}
              </div>
              <div
                className="self-stretch text-right flex justify-center flex-col text-[#433E78] text-sm font-medium"
                style={{ fontFamily: "Cairo" }}
              >
                {faculty.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`px-4 py-2 my-[2vw] gradient-bg rounded-[34px] flex justify-center items-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer`}
      >
        <div className="text-white text-2xl font-medium text-center">
          المصروفات الدراسية لكليات الجامعة
        </div>
      </div>
    </div>
  );
}
