'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const ArabicFAQPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(3);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "أين تقع الجامعية الأهلية"
    },
    {
      id: 2,
      question: "ما أسباب الجامعية الأهلية"
    },
    {
      id: 3,
      question: "كيفية القبول في الجامعة",
      answer: "وسوف يتم إنشاء جامعة خاصة على تمكن الحكومة بحد أدنى من جمع هوية صغيرة للجامعات الحكومية، وسيتمكن من تشغيلها بشكل تلقائي وبشكل مستقل عن نجاحها بالجامعات الحكومية"
    },
    {
      id: 4,
      question: "هل هناك اختبارات للقبول"
    },
    {
      id: 5,
      question: "ما أسباب الجامعية الأهلية"
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>أسئلة وأجوبة - الجامعة الأهلية</title>
        <meta name="description" content="أسئلة وأجوبة حول الجامعة الأهلية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <main className="min-h-screen bg-[#F8F8F8]">
        <div 
          className="w-full min-h-screen px-20 py-10 bg-[#F8F8F8] flex flex-col justify-center items-end gap-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Header */}
          <div className="w-full pt-3 pb-3 border-b border-black flex justify-between items-center">
            <div className="text-center text-[#677AE4] text-base font-medium">
              المزيد من الأسئلة
            </div>
            <div className="text-center text-black text-2xl font-medium">
              أسئلة وأجوبة
            </div>
          </div>

          {/* FAQ Items */}
          <div className="w-full flex flex-col justify-center items-end gap-3">
            {faqItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="w-full flex justify-between items-center">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="flex items-center justify-center w-6 h-6 text-[#677AE4] hover:text-[#5A6BD1] transition-colors duration-200 "
                    aria-label={expandedId === item.id ? "إغلاق الإجابة" : "فتح الإجابة"}
                  >
                    {expandedId === item.id ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="text-[#677AE4] text-xl font-medium hover:text-[#5A6BD1] transition-colors duration-200 focus:outline-none "
                  >
                    {item.question}
                  </button>
                </div>

                {/* Expanded Answer with Animation */}
                {item.answer && (
                  <div 
                    className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedId === item.id 
                        ? 'max-h-96 opacity-100 mb-2' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col justify-center items-end gap-2.5 pt-2">
                      <div className="max-w-[985px] text-right text-black/60 text-xl font-medium leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                )}

                {/* Divider */}
                {index < faqItems.length - 1 && (
                  <div className="w-full h-0 border-t border-[#B3B3B3]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ArabicFAQPage;