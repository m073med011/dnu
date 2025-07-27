import React from "react";

interface InfoCard {
  title: string;
  description: string;
}

const UniversityInfo: React.FC = () => {
  const infoCards: InfoCard[] = [
    {
      title: "كليات الجامعة",
      description: "استكسف برامجنا الأكاديمية المتميزة"
    },
    {
      title: "بوابة الخدمات الطلابية",
      description: "خدمات شاملة للطلاب"
    },
    {
      title: "مكتب التنسيق و القبول",
      description: "معلومات القبول والتسجيل"
    },
    {
      title: "المصروفات الدراسية",
      description: "تفاصيل الرسوم و المنح"
    }
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto -mt-[12vw] lg:-mt-[7vw] bg-[#EFF3FF] px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
      {/* Grid container with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#F8FAFF] border border-[#AAB9DD] hover:border-[#433E78] rounded-lg p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-[#433E78] group-hover:text-[#2A1F5C] text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-3 transition-colors duration-300 leading-tight">
              {card.title}
            </h3>
            
            {/* Description */}
            <p className="text-black/60 group-hover:text-black/70 text-sm sm:text-base font-medium transition-colors duration-300 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityInfo;