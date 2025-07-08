"use client";
import Image from "next/image";
import bgImage from "@/public/home/Frame.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[clamp(80.70px,21.02vw,302.63px))] overflow-hidden ">
      {/* Full image shown completely */}
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        priority
        className="object-contain hidden sm:block"
      />

      {/* Mobile gradient background */}

      {/* Buttons container */}
      <div className="absolute top-1/2 left-4 right-4 sm:right-20 sm:left-auto -translate-y-1/2 grid grid-cols-1 min-[480px]:grid-cols-2 gap-3 sm:gap-5 w-auto sm:w-[clamp(201.60px,52.50vw,756.00px)] max-w-[100%]">
        <button className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl w-full min-h-[60px] sm:min-h-[clamp(18.30px,4.77vw,68.63px)] sm:w-[clamp(98.40px,25.62vw,369.00px)] p-3 sm:p-[clamp(4.80px,1.25vw,18.00px)] text-[#5D5FEF] rounded-xl sm:rounded-2xl font-semibold hover:bg-white hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base leading-tight flex items-center justify-center">
          المصروفات الدراسية
        </button>
        <button className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl w-full min-h-[60px] sm:min-h-[clamp(18.30px,4.77vw,68.63px)] sm:w-[clamp(98.40px,25.62vw,369.00px)] p-3 sm:p-[clamp(4.80px,1.25vw,18.00px)] text-[#5D5FEF] rounded-xl sm:rounded-2xl font-semibold hover:bg-white hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base leading-tight flex items-center justify-center">
          مكتب التنسيق و القبول
        </button>
        <button className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl w-full min-h-[60px] sm:min-h-[clamp(18.30px,4.77vw,68.63px)] sm:w-[clamp(98.40px,25.62vw,369.00px)] p-3 sm:p-[clamp(4.80px,1.25vw,18.00px)] text-[#5D5FEF] rounded-xl sm:rounded-2xl font-semibold hover:bg-white hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base leading-tight flex items-center justify-center">
          كليات الجامعة
        </button>
        <button className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl w-full min-h-[60px] sm:min-h-[clamp(18.30px,4.77vw,68.63px)] sm:w-[clamp(98.40px,25.62vw,369.00px)] p-3 sm:p-[clamp(4.80px,1.25vw,18.00px)] text-[#5D5FEF] rounded-xl sm:rounded-2xl font-semibold hover:bg-white hover:scale-105 transition-all duration-200 text-center text-sm sm:text-base leading-tight flex items-center justify-center">
          بوابة الخدمات الطلابية
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
