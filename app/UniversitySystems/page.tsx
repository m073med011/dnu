"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import BgPage from "@/public/collages/BgPage.png"; // Replace with your actual image

export default function FAQPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Header Section */}
      <section className="relative w-full flex items-center justify-center text-black font-bold group overflow-hidden h-[200px] sm:h-[240px] md:h-[282px]">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-white to-transparent transition-all duration-700 ease-in-out group-hover:h-2/3" />

        <Image
          src={BgPage}
          alt="Background"
          fill
          className="object-cover z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
          priority
        />

        <div className="w-full z-20 text-center text-[clamp(20px,6vw,48px)] text-[#677AE4] font-bold leading-none px-4 transform transition-all duration-500 ease-out group-hover:scale-105">
          أنظمة الجامعة
        </div>
      </section>

      {/* Cards Grid - Responsive */}
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-6 sm:px-6 py-6 sm:py-8 mx-auto my-6 max-w-[1400px]"> */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-6 sm:px-6 py-6 sm:py-8 mx-auto my-6 max-w-[1200px]">

        <Card title="بوابة الخدمات الالكترونية للعاملين بالجامعة" />
        <Card
          title="بوابة الخدمات الطلابية"
          description="تسجيل المقررات/ رغبات التشعيب، دفع المصروفات، الاطلاع على النتائج حجز الكشف بمستشفى الطلبة"
        />
        <Card
          title="بوابة أعضاء هيئة التدريس والعاملين"
          description="خدمات هيئة التدريس والعاملين"
        />
        <Card
          title="التصحيح الالكترونى"
          description="خدمات هيئة التدريس والعاملين"
        />
        <Card
          title="نظام الفارابى"
          description="نواتج التعليم المستهدفة، توصيفات البرامج الاكاديمية والمقررات، الخطط والتقارير السنوية"
        />
        <Card title="نظام حفظ المستندات وإدارة المراسلات" />
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  description?: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-end gap-0.5 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105   rounded-lg p-2 cursor-pointer group">
      <div className="flex justify-end items-center w-full">
        <div className="flex items-center justify-center text-center w-10 h-10 sm:w-12 sm:h-12 relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg group-hover:from-blue-600 group-hover:to-purple-700">
          <div className="flex items-center justify-center text-center w-7.5 h-1.5">
            <ChevronRight size={20} className="text-white sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[6px]" />
          </div>
        </div>
        <div className="w-full max-w-none sm:max-w-72 h-auto min-h-[60px] sm:min-h-[80px] px-3 sm:px-4 justify-center items-center gap-2.5 inline-flex">
          <div className="flex-1 self-stretch text-right justify-center flex flex-col text-blue-500 text-lg sm:text-xl md:text-2xl font-medium break-words leading-tight transition-all duration-300 ease-in-out ">
            {title}
          </div>
        </div>
      </div>
      <div className="w-full max-w-none sm:max-w-72 h-auto min-h-[60px] sm:min-h-[80px] px-3 sm:px-4 justify-center items-end">
        <div className="flex-1 text-right justify-center flex flex-col text-black text-opacity-60 text-sm sm:text-base font-medium break-words leading-tight transition-all duration-300 ease-in-out group-hover:text-opacity-80 group-hover:text-gray-700">
          {description}
        </div>
      </div>
    </div>
  );
}


// "use client";
// import Image from "next/image";
// import { ChevronRight } from "lucide-react";
// import BgPage from "@/public/collages/BgPage.png"; // Replace with your actual image

// export default function FAQPage() {
//   return (
//     <div className="w-full min-h-screen bg-white overflow-hidden">
//       {/* Header Section */}
//       <section className="relative w-full flex items-center justify-center text-black font-bold group overflow-hidden h-[200px] sm:h-[240px] md:h-[282px]">
//         <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-white to-transparent transition-all duration-700 ease-in-out group-hover:h-2/3" />

//         <Image
//           src={BgPage}
//           alt="Background"
//           fill
//           className="object-cover z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
//           priority
//         />

//         <div className="w-full z-20 text-center text-[clamp(20px,6vw,48px)] text-[#677AE4] font-bold leading-none px-4">
//           أنظمة الجامعة
//         </div>
//       </section>

//       {/* Cards Grid - Responsive */}
//       <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-6 sm:px-6 py-6 sm:py-8 mx-auto max-w-[1200px]">
//         <Card title="بوابة الخدمات الالكترونية للعاملين بالجامعة" />
//         <Card
//           title="بوابة الخدمات الطلابية"
//           description="تسجيل المقررات/ رغبات التشعيب، دفع المصروفات، الاطلاع على النتائج حجز الكشف بمستشفى الطلبة"
//         />
//         <Card
//           title="بوابة أعضاء هيئة التدريس والعاملين"
//           description="خدمات هيئة التدريس والعاملين"
//         />
//         <Card
//           title="التصحيح الالكترونى"
//           description="خدمات هيئة التدريس والعاملين"
//         />
//         <Card
//           title="نظام الفارابى"
//           description="نواتج التعليم المستهدفة، توصيفات البرامج الاكاديمية والمقررات، الخطط والتقارير السنوية"
//         />
//         <Card title="نظام حفظ المستندات وإدارة المراسلات" />
//       </div>
//     </div>
//   );
// }

// interface CardProps {
//   title: string;
//   description?: string;
// }

// function Card({ title, description }: CardProps) {
//   return (
//     <div className="w-full h-full flex flex-col justify-center items-end gap-0.5">
//       <div className="flex justify-end items-center w-full">
//         <div className="flex items-center justify-center text-center w-10 h-10 sm:w-12 sm:h-12 relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0">
//           <div className="flex items-center justify-center text-center w-7.5 h-1.5">
//             <ChevronRight size={20} className="text-white sm:w-6 sm:h-6" />
//           </div>
//         </div>
//         <div className="w-full max-w-none sm:max-w-72 h-auto min-h-[60px] sm:min-h-[80px] px-3 sm:px-4 justify-center items-center gap-2.5 inline-flex">
//           <div className="flex-1 self-stretch text-right justify-center flex flex-col text-blue-500 text-lg sm:text-xl md:text-2xl font-medium break-words leading-tight">
//             {title}
//           </div>
//         </div>
//       </div>
//       <div className="w-full max-w-none sm:max-w-72 h-auto min-h-[60px] sm:min-h-[80px] px-3 sm:px-4 justify-center items-end">
//         <div className="flex-1 text-right justify-center flex flex-col text-black text-opacity-60 text-sm sm:text-base font-medium break-words leading-tight">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// }