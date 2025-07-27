"use client";
import { ChevronRight } from "lucide-react";
import Page from "@/components/Hero-section"; // Import your reusable Page component

interface CardProps {
  title: string;
  description?: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-end gap-0.5 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 rounded-lg p-2 cursor-pointer group">
      <div className="flex justify-end items-center w-full">
        <div className="flex items-center justify-center text-center w-10 h-10 sm:w-12 sm:h-12 relative bg-gradient-to-br from-[#899FCF] to-[#433E78] rounded-full flex-shrink-0 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg group-hover:from-blue-600 group-hover:to-purple-700">
          <div className="flex items-center justify-center text-center w-7.5 h-1.5">
            <ChevronRight
              size={20}
              className="text-white sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-[6px]"
            />
          </div>
        </div>
        <div className="w-full max-w-none sm:max-w-72 h-auto min-h-[60px] sm:min-h-[80px] px-3 sm:px-4 justify-center items-center gap-2.5 inline-flex">
          <div className="flex-1 self-stretch text-right justify-center flex flex-col text-[#433E78] text-lg sm:text-xl md:text-2xl font-medium break-words leading-tight transition-all duration-300 ease-in-out">
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

const UniversitySystemsContent = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Cards Grid - Responsive */}
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
};

export default function UniversitySystemsPage() {
  return <Page title="أنظمة الجامعة" content={<UniversitySystemsContent />} />;
}
