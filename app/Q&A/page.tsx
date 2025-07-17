"use client";

import { useState } from "react";
import Image from "next/image";
import BgPage from "@/public/collages/BgPage.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <section className="relative w-full flex items-center justify-center text-black font-bold group overflow-hidden h-[282px]">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-white to-transparent transition-all duration-700 ease-in-out group-hover:h-2/3" />

        <Image
          src={BgPage}
          alt="Background"
          fill
          className="object-cover z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
          priority
        />

        <div className="w-full z-20 text-center text-[48px] text-[#677AE4] font-[700] leading-none">
          أسئلة وأجوبة
        </div>
      </section>

      <section className="w-full max-w-[1120px] pb-[2vw] mx-auto px-4 flex flex-col items-center gap-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-full p-4 bg-[#ffffff] rounded-2xl border border-[#B3B3B3] flex flex-col items-end gap-5 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-[#677AE4]/10 group"
          >
            <div
              className="w-full flex justify-between items-center cursor-pointer transition-all duration-400 ease-in-out"
              onClick={() => toggleItem(i)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#677AE4] to-[#754FA8] rounded-[30px] flex items-center justify-center transition-all duration-600 ease-out hover:shadow-lg hover:shadow-[#677AE4]/30 hover:rotate-3">
                {openIndex === i ? (
                  <ChevronUp className="text-white w-5 h-5 transition-all duration-500 ease-in-out" />
                ) : (
                  <ChevronDown className="text-white w-5 h-5 transition-all duration-500 ease-in-out" />
                )}
              </div>
              <div className="text-black text-[24px] font-medium transition-all duration-500 ease-in-out group-hover:translate-x-1">
                كيفية القبول في الجامعة؟
              </div>
            </div>
            {openIndex === i && (
              <div className="w-full text-right text-black/60 text-[20px] font-medium transition-all duration-600 ease-in-out animate-in slide-in-from-top-2 fade-in-0">
                وسوف يتم إنشاء جامعة خاصة على تمكن الحكومة بحد أدنى من جمع هوية صغيرة للجامعات الحكومية، وسيتمكن من تشغيلها بشكل تلقائي وبشكل مستقل عن نجاحها بالجامعات الحكومية
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}