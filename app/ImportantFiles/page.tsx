import React from "react";
import Image from "next/image";
import BgPage from "@/public/collages/BgPage.png";
import image from "@/public/Container.svg";

const ImportantFilesPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden">
      {/* Hero Background Section */}
      <section
        className="relative w-full flex items-center justify-center text-black font-bold group overflow-hidden"
        style={{ height: "clamp(97.80px, 25.47vw, 366.75px)" }}
      >
        {/* Gradient Overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-white to-white/0 transition-all duration-500 group-hover:h-2/3" />

        <Image
          src={BgPage}
          alt="Background"
          layout="fill"
          className="z-0 transition-transform duration-700 group-hover:scale-105"
          priority
        />

        <div className="w-full z-20 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gradient-primary font-inter font-bold break-words transition-all duration-500 group-hover:translate-y-[-4px] group-hover:drop-shadow-lg">
          ملفات هامة
        </div>
      </section>

      {/* Main Content - Important Files Section */}
      <div className="w-full py-8">
        <div className="w-full max-w-[clamp(320px,90vw,1120px)] mx-auto px-[clamp(12px,5vw,40px)] flex flex-col justify-center items-center gap-6">
          {/* File Items */}
          {[
            "اللائحة التنفيذية لقانون الخدمة المدنية",
            "دليل إجراءات الموارد البشرية",
            "قوانين العمل والعمال المحدثة",
            "لائحة الجزاءات والمكافآت",
            "دليل التوصيف الوظيفي الموحد",
          ].map((title, index) => (
            <div
              key={index}
              className="w-full p-6 rounded-2xl border border-[#677AE4] flex justify-center items-center gap-6 
                         bg-white hover:bg-gradient-to-r 
                         cursor-pointer transition-all duration-300 ease-in-out
                         hover:shadow-lg  hover:border-[#754FA8]
                         hover:scale-[1.02] hover:-translate-y-1
                         transform-gpu will-change-transform
                         group/item"
            >
              {/* Enhanced File Icon */}
              <Image src={image} alt="image" />

              {/* File Title */}
              <div className="text-[#677AE4] text-sm lg:text-xl font-medium transition-all duration-300">
                {title}
              </div>

              {/* Download Arrow (appears on hover) */}
              <div
                className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 
                             transform translate-x-[-10px] group-hover/item:translate-x-0"
              >
                <svg
                  className="w-6 h-6 text-[#677AE4]  
                           transition-colors duration-300 group-hover/item:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantFilesPage;
