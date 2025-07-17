'use client';

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface NewsItem {
  id: number;
  image: string | StaticImageData;
  title: string;
  description?: string;
}

import image from "@/public/home/newsData/Rectangle.png";
import image0 from "@/public/home/newsData/Rectangle0.png";
import image1 from "@/public/home/newsData/Rectangle1.png";
import image2 from "@/public/home/newsData/Rectangle2.png";
import image3 from "@/public/home/newsData/Rectangle3.png";
import image4 from "@/public/home/newsData/Rectangle4.png";
import { Bold } from "lucide-react";

const newsData: NewsItem[] = [
  {
    id: 1,
    image: image,
    title: "فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
    description:
      "تُعلن جامعة دمياط الأهلية عن فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
  },
  {
    id: 2,
    image: image0,
    title:
      "جامعة دمياط الأهلية توقع بروتوكول تعاون مع مركز البحوث الطبية والطب التجديدي",
  },
  {
    id: 3,
    image: image1,
    title: "يفتتح قمة جامعات إقليم الدلتا للاستدامة والتنمية",
    description:
      "تُعلن جامعة دمياط الأهلية عن فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
  },
  {
    id: 4,
    image: image2,
    title: "يفتتح قمة جامعات إقليم الدلتا للاستدامة والتنمية",
    description:
      "تُعلن جامعة دمياط الأهلية عن فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
  },
  {
    id: 5,
    image: image3,
    title: "فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
    description:
      "تُعلن جامعة دمياط الأهلية عن فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة",
  },
  {
    id: 6,
    image: image4,
    title:
      "جامعة دمياط الأهلية توقع بروتوكول تعاون مع مركز البحوث الطبية والطب التجديدي",
  },
];

const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="w-full h-full p-4 bg-[#F8F8F8] rounded-2xl flex flex-col items-start gap-3 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 group">
      {typeof news.image === 'string' ? (
        <img 
          className="w-full h-[clamp(120px,25vw,210px)] object-cover flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:rounded-lg" 
          src={news.image} 
          alt={news.title}
        />
      ) : (
        <Image 
          className="w-full h-[clamp(120px,25vw,210px)] object-cover flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:rounded-lg" 
          src={news.image} 
          alt={news.title}
          width={303}
          height={210}
        />
      )}
      <div className="w-full flex flex-col items-start gap-2 flex-grow">
        <div className="w-full flex flex-col items-start gap-2 flex-grow">
          <div className="w-full text-right flex justify-center flex-col text-black text-[clamp(16px,2.3vw,20px)] font-medium font-['Inter'] break-words transition-colors duration-300 group-hover:text-[#677AE4]">
            {news.title}
          </div>
          {news.description && (
            <div className="w-full text-right flex justify-center flex-col text-black/60 text-[clamp(14px,2vw,16px)] font-medium font-['Inter'] break-words">
              {news.description}
            </div>
          )}
        </div>
        <div className="w-full text-right flex justify-center flex-col text-[#677AE4] text-[clamp(11px,1.5vw,12px)] font-medium font-['Inter'] break-words cursor-pointer hover:text-[#5a6bd8] transition-all duration-300 mt-auto group-hover:font-bold">
          المزيد
        </div>
      </div>
    </div>
  );
};

const UniversityNews: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 p-[clamp(24.00px,6.25vw,90.00px)]">
      {/* Header */}
      <div className="w-full h-auto py-2  flex justify-center font-bold items-center">
        <div className="font-bold" style={{textAlign: 'center', color: '#677AE4', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>أخبار الجامعة</div>

      </div>

      {/* News Grid */}
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-full flex flex-col gap-6">
          {/* First Row */}
          <div className="w-full flex justify-center items-stretch gap-14 flex-wrap md:flex-nowrap">
            {newsData.slice(0, 3).map((news) => (
              <div key={news.id} className="flex-1 min-w-[250px]">
                <NewsCard news={news} />
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="w-full flex justify-center items-stretch gap-14 flex-wrap md:flex-nowrap">
            {newsData.slice(3, 6).map((news) => (
              <div key={news.id} className="flex-1 min-w-[250px]">
                <NewsCard news={news} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <button className="w-[clamp(50.25px,13.09vw,188.44px)] h-9 px-8 py-2 bg-gradient-to-br from-[#677AE4] to-[#754FA8] rounded-xl flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="text-white text-base font-bold font-['Inter']">
            جميع الأخبار
          </span>
        </button>
      </div>
    </div>
  );
};

export default UniversityNews;
