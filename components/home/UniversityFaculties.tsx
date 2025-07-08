"use client";

import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

type Faculty = {
  title: string;
  program?: string;
};

const faculties: Faculty[] = [
  { title: "كلية التمريض", program: "برنامج علوم تمريض" },
  { title: "كلية الفنون و التصميم" },
  { title: "كلية الحاسبات و المعلومات و الذكاء الاصطناعي" },
  { title: "كلية الأثار و السياحة" },
  { title: "كلية الأعمال" },
  { title: "كلية الألسن" },
];

const UniversityFaculties: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first

  const toggleFaculty = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      //   dir="rtl"
      className="w-full h-full px-4 sm:px-6 md:px-[clamp(16px,6.25vw,80px)] flex flex-col justify-center items-end gap-4 sm:gap-6 md:gap-[clamp(16px,2vw,24px)] py-6 sm:py-10 md:py-[clamp(19.20px,5.00vw,72.00px)]"
    >
      {/* Header */}
      <div className="w-full py-2 sm:py-3 md:py-[clamp(4px,0.8vw,8px)] border-b border-black flex justify-end items-center">
        <h2 className="text-xl sm:text-2xl md:text-[clamp(20px,2.5vw,32px)] font-medium text-black font-['Inter']">
          كليات الجامعة
        </h2>
      </div>

      {/* Faculties List */}
      <div className="w-full flex flex-col justify-center items-end gap-3 sm:gap-4 md:gap-[clamp(4.80px,1vw,18.00px)]">
        {faculties.map((faculty, index) => {
          const isOpen = openIndex === index;

          return (
            <React.Fragment key={index}>
              {/* Faculty Row */}
              <button
                onClick={() => toggleFaculty(index)}
                className="w-full flex justify-between items-center cursor-pointer py-2 sm:py-3 md:py-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 sm:px-3 md:px-0"
              >
                <ChevronLeft
                  size={20}
                  strokeWidth={1.5}
                  className={`sm:w-6 sm:h-6 md:w-6 md:h-6 transition-transform duration-300 text-black ${
                    isOpen ? "rotate-90" : "rotate-180"
                  }`}
                />
                <div
                  className={`text-base sm:text-lg md:text-[clamp(18px,2vw,24px)] font-medium font-['Inter'] text-right leading-relaxed ${
                    index === 0 ? "text-black" : "text-[rgba(0,0,0,0.6)]"
                  }`}
                >
                  {faculty.title}
                </div>
              </button>

              {/* Program Details */}
              {isOpen && faculty.program && (
                <ul
                  dir="rtl"
                  className="px-4 sm:px-6 md:px-[clamp(12px,2vw,20px)] list-disc list-inside marker:text-black"
                >
                  <li className="text-sm sm:text-base md:text-[clamp(5.70px,1.48vw,21.38px)] font-bold text-black font-['Inter'] text-right leading-relaxed py-1">
                    {faculty.program}
                  </li>
                </ul>
              )}

              {/* Divider */}
              {index !== faculties.length - 1 && (
                <div className="w-full outline outline-[#B3B3B3] outline-offset-[-0.5px]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityFaculties;