import Image from "next/image";
import image from "@/public/collages/download01.png";
import vector from "@/public/collages/Vector.png";
import vector2 from "@/public/collages/Vector1.png";
import vector3 from "@/public/collages/Vector2.png";

export default function NursingPage() {
  const programs = [
    {
      title: "برنامج علوم دمياط",
      description: "برنامج يقدّم دراسة شاملة في فروع العلوم الأساسية",
      image: vector,
    },
    {
      title: "برنامج علوم دمياط",
      description: "برنامج يقدّم دراسة شاملة في فروع العلوم الأساسية",
      image: vector2,
    },
    {
      title: "برنامج علوم دمياط",
      description: "برنامج يقدّم دراسة شاملة في فروع العلوم الأساسية",
      image: vector3,
    },
  ];
  
  return (
    <div
      dir="rtl"
      className="w-full max-w-[1440px] mx-auto bg-white text-black"
    >
      {/* Hero Section */}
      <div className="relative w-full mx-auto max-h-[510px] overflow-hidden">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[360px] group">
          <Image
            src={image}
            alt="cover"
            width={1280}
            height={510}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          <h1 className="absolute bottom-2 sm:bottom-4 md:bottom-0 w-full text-center scale-x-110 text-[clamp(24px,5vw,48px)] font-inter px-4 transition-all duration-500 group-hover:translate-y-[-4px]">
            كلية التمريض
          </h1>
        </div>
      </div>

      {/* Guides Section */}
      <div className="flex flex-col items-center px-[clamp(16px,4vw,80px)] py-[clamp(24px,4vw,64px)] gap-4 sm:gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1120px]">
          {[
            "دليل الطالب بكلية التمريض",
            "دليل المعامل بكلية التمريض",
            "بروشور كلية التمريض",
          ].map((label, i) => (
            <button
              key={i}
              className="w-full text-white text-[clamp(16px,2.5vw,24px)] font-medium rounded-xl py-3 sm:py-4 px-4 sm:px-6 gradient-bg transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Programs Section */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,80px)]">
        <h2 className="text-[clamp(20px,3vw,32px)] font-medium text-right transition-all duration-300 hover:translate-x-[-4px]">
          برامج كلية التمريض
        </h2>
        <div className="bg-[#F9F9F9] rounded-xl p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 transition-all duration-300 hover:shadow-md">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10">
            {programs.map((_, i) => (
              <div
                key={i}
                className="flex gap-4 sm:gap-6 items-center justify-end flex-1 group cursor-pointer transition-all duration-300 hover:translate-y-[-2px] p-2 rounded-lg hover:bg-white/50"
              >
                <div className="flex flex-col gap-1 sm:gap-2 text-right flex-1 transition-all duration-300 group-hover:translate-x-[-4px]">
                  <p className="text-[clamp(16px,2.2vw,24px)] font-medium text-[#333] leading-tight">
                    {programs[i].title}
                  </p>
                  <p className="text-[clamp(12px,1.8vw,16px)] text-black/60 font-medium leading-relaxed">
                    {programs[i].description}
                  </p>
                </div>
                <div className="flex-shrink-0 transition-all duration-300 group-hover:rotate-3">
                  <Image
                    src={programs[i].image}
                    alt="icon"
                    width={76}
                    height={76}
                    className="border border-[#B3B3B3] rounded w-[60px] h-[60px] sm:w-[76px] sm:h-[76px] object-cover transition-all duration-300 group-hover:shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="pt-[clamp(32px,6vw,80px)] pb-[clamp(48px,10vw,120px)] flex flex-col items-center gap-3 sm:gap-4 text-center w-full max-w-[1120px] mx-auto px-[clamp(16px,4vw,80px)]">
        <p className="text-[clamp(16px,2.2vw,24px)] font-medium w-full text-right leading-relaxed transition-all duration-300 hover:translate-x-[-4px]">
          للاستفسارات؛ يرجى التواصل من خلال البريد الالكتروني التالي:
        </p>
        <a
          href="mailto:Nursing@Damietta.edu.eg"
          className="text-[#677AE4] text-[clamp(14px,2vw,20px)] font-medium hover:underline transition-all duration-300 break-all sm:break-normal hover:translate-y-[-1px] hover:drop-shadow-sm"
        >
          Nursing@Damietta.edu.eg
        </a>
      </div>
    </div>
  );
}