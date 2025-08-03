"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { getData } from '@/libs/axios/server';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  created_at?: string;
  updated_at?: string;
}

interface APIResponse {
  status: boolean;
  msg: string;
  data: FAQItem[];
}

const ArabicFAQ: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch FAQ data from API
  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        setLoading(true);
        const response: APIResponse = await getData('/faqs'); // Replace '/faq' with your actual endpoint
        
        if (response.status && response.data) {
          setFaqData(response.data);
        } else {
          setError('Failed to load FAQ data');
        }
      } catch (err) {
        console.error('Error fetching FAQ data:', err);
        setError('Failed to load FAQ data');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  // Responsive slides per view
  const getSlidesPerView = (): number => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 768) return 1; // Mobile: 1 card
    if (width < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const [slidesPerView] = useState<number>(getSlidesPerView());
  const totalSlides = Math.ceil(faqData.length / slidesPerView);

  const toggleCard = (cardId: number): void => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const getCurrentSlideCards = (): FAQItem[] => {
    const startIndex = currentSlide * slidesPerView;
    return faqData.slice(startIndex, startIndex + slidesPerView);
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 bg-[#EFF3FF] flex flex-col justify-center items-center">
        <div className="text-[#433E78] text-lg font-medium">جاري التحميل...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 bg-[#EFF3FF] flex flex-col justify-center items-center">
        <div className="text-red-500 text-lg font-medium">حدث خطأ في تحميل البيانات</div>
      </div>
    );
  }

  // No data state
  if (faqData.length === 0) {
    return (
      <div className="w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 bg-[#EFF3FF] flex flex-col justify-center items-center">
        <div className="text-[#433E78] text-lg font-medium">لا توجد أسئلة متاحة حالياً</div>
      </div>
    );
  }

  return (
    <div className="w-full  pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10 bg-[#EFF3FF] flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
      {/* Header */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-auto sm:h-[90px]">
        {/* Navigation arrows - Hidden on mobile, shown on larger screens */}
        <div className="hidden sm:flex justify-start items-center gap-3 lg:gap-5">
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-transparent border-[1.5px] border-[#433E78] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#433E78] group"
          >
            <ChevronDown
              size={16}
              className="sm:w-5 sm:h-5 text-[#433E78] group-hover:text-white rotate-90 transition-colors duration-300"
            />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-transparent border-[1.5px] border-[#433E78] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#433E78] group"
          >
            <ChevronDown
              size={16}
              className="sm:w-5 sm:h-5 text-[#433E78] group-hover:text-white -rotate-90 transition-colors duration-300"
            />
          </button>
        </div>

        {/* Mobile navigation arrows */}
        <div className="flex sm:hidden justify-start items-center gap-3 order-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 bg-transparent border-[1.5px] border-[#433E78] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#433E78] group"
          >
            <ChevronDown
              size={14}
              className="text-[#433E78] group-hover:text-white rotate-90 transition-colors duration-300"
            />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 bg-transparent border-[1.5px] border-[#433E78] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#433E78] group"
          >
            <ChevronDown
              size={14}
              className="text-[#433E78] group-hover:text-white -rotate-90 transition-colors duration-300"
            />
          </button>
        </div>

        {/* Title section */}
        <div className="flex flex-col justify-start items-end order-1 sm:order-2">
          <div className="text-center text-[#899FCF] px-4 lg:px-0 text-xl sm:text-2xl lg:text-[32px] font-bold break-words">
            الأسئلة & الأجوبة
          </div>
          <div className="text-center text-black/60 text-xs sm:text-sm lg:text-base font-medium break-words mt-1 sm:mt-2 max-w-xs sm:max-w-none">
            إجابات واضحة على أكثر الأسئلة الشائعة لتكون الصورة كاملة أمامك
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Cards container */}
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 transition-all duration-500 ease-in-out items-start">
            {getCurrentSlideCards().map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className="w-full p-4 sm:p-5 lg:p-6 bg-white rounded-2xl border border-[#AAB9DD] flex flex-col justify-start items-end gap-4 sm:gap-5 lg:gap-6 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-0.5 hover:shadow-xl h-fit"
              >
                {/* Question */}
                <div className="w-full text-right text-black text-lg sm:text-xl lg:text-2xl font-medium break-words leading-tight">
                  {item.question}
                </div>

                {/* Toggle button */}
                <div className="w-full flex justify-between items-center mt-auto">
                  <ChevronDown
                    size={14}
                    className={`sm:w-4 sm:h-4 text-[#433E78] transition-transform duration-300 ${
                      expandedCards[item.id] ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                  <div className="text-right text-[#433E78] text-sm sm:text-base font-bold break-words">
                    {expandedCards[item.id] ? 'إظهار أقل' : 'قراءة المزيد'}
                  </div>
                </div>

                {/* Answer - only show if expanded */}
                {expandedCards[item.id] && (
                  <div className="w-full text-right text-black/60 text-base sm:text-lg lg:text-xl font-medium break-words leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-[#433E78]'
                  : 'bg-[#EFF3FF] hover:bg-[#899FCF]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicFAQ;