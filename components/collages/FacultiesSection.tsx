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
      "الابتكار في تعليم الحوسبة والذكاء الاصطناعي وتوظيف البحث والتقنية في خدمة المجتمع",
    icon: artificial,
    bgImage: image04,
    fee: "55,000 EGP",
    feeColor: "bg-blue-500",
  },
  {
    title: "كلية التمريض",
    description:
      "التميز في تعليم التمريض الذكي، والبحوث التطبيقية، والخدمات المجتمعية",
    icon: doctor,
    bgImage: image00,
    fee: "50,000 EGP",
    feeColor: "bg-blue-600",
  },
  {
    title: "كلية الفنون والتصميم",
    description:
      "التميز في تعليم الفنون والتصميم المبتكر، والبحوث التطبيقية، وتعزيز الإسهام الثقافي في خدمة المجتمع",
    icon: canvas,
    bgImage: image05,
    fee: "40,000 EGP",
    feeColor: "bg-blue-700",
  },
  {
    title: "كلية الألسن",
    description:
      "الريادة في تعليم اللغات وتعميق التفاهم الحضاري من خلال البحث وخدمة المجتمع",
    icon: language,
    bgImage: image01,
    fee: "35,000 EGP",
    feeColor: "bg-blue-800",
  },
  {
    title: "كلية الآثار والسياحة",
    description:
      "الريادة في دراسة الآثار وتنمية السياحة من خلال التعليم والبحث وخدمة المجتمع",
    icon: book,
    bgImage: image03,
    fee: "27,000 EGP",
    feeColor: "bg-blue-900",
  },
  {
    title: "كلية الأعمال",
    description:
      "التميز في تعليم إدارة الأعمال والبحوث التطبيقية وريادة الأعمال لخدمة المجتمع",
    icon: teaching,
    bgImage: image02,
    fee: "35,000 EGP",
    feeColor: "bg-blue-800",
  },
];

export default function FacultiesSection() {
  return (
    <div className="w-[clamp(324px,84.38vw,1215px)] mx-auto h-full flex flex-col items-center gap-6 mb-2.5 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#433E78] mb-4">
          المصروفات الدراسية للمصريين للعام الجامعي 2025/2026
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          للتسجيل والحجز من خلال الموقع الإلكتروني:
        </p>
        <a 
          href="https://www.dam-nu.edu.eg" 
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.dam-nu.edu.eg
        </a>
      </div>

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

            {/* Fee Badge */}
            <div className={`absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-3 py-2 rounded-full font-bold text-sm shadow-lg`}>
              {faculty.fee}
            </div>

            {/* Content overlay at bottom */}
            <div className="w-[300px] p-4 absolute left-[10px] bottom-3 bg-white/70 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-end transition-all duration-300 group-hover:bg-white/90">
              <div
                className="text-center flex justify-center flex-col text-black text-xl font-bold mb-2"
                style={{ fontFamily: "Cairo" }}
              >
                {faculty.title}
              </div>
              <div
                className="self-stretch text-right flex justify-center flex-col text-[#433E78] text-sm font-medium leading-relaxed"
                style={{ fontFamily: "Cairo" }}
              >
                {faculty.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-8 p-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <div className="text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white rounded-full p-3 mr-4">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">معلومات مهمة</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-semibold mb-2">📍 الموقع:</p>
              <p>مدينة دمياط الجديدة - محافظة دمياط</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-semibold mb-2">🎓 المصروفات:</p>
              <p>المصروفات المذكورة في معايير دراسية أهلية</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-semibold mb-2">📋 الشروط:</p>
              <p>المصروفات الدراسية والذكاء الاصطناعي أو الداخلي</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-semibold mb-2">⚠️ تنبيه:</p>
              <p>المصروفات الخارجية ومصروفات السكن إن أردت</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-6 py-3 my-[2vw] bg-gradient-to-r from-[#433E78] to-[#6F42C1] rounded-[34px] flex justify-center items-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer"
      >
        <div className="text-white text-2xl font-medium text-center">
          المصروفات الدراسية لكليات الجامعة
        </div>
      </div>
    </div>
  );
}