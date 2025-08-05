"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Page from "@/components/Hero-section";
import { getData } from "@/libs/axios/server";

// === Types ===
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

interface APIResponse {
  msg: string;
  data: FAQItem[];
}

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        setLoading(true);
        const response: APIResponse = await getData("/faqs");

        if (response?.data) {
          setFaqData(response.data);
        } else {
          setError("فشل في تحميل الأسئلة الشائعة.");
        }
      } catch (err) {
        console.error("Error fetching FAQ data:", err);
        setError("حدث خطأ أثناء تحميل البيانات.");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="w-full max-w-[1120px] pb-[2vw] mx-auto px-4 flex flex-col items-center gap-8">
        {loading ? (
          <p className="text-gray-500">جارٍ تحميل الأسئلة...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : faqData.length === 0 ? (
          <p className="text-gray-500">لا توجد أسئلة حالياً.</p>
        ) : (
          faqData.map((item, i) => (
            <div
              key={item.id}
              className="w-full p-4 bg-[#ffffff] rounded-2xl border border-[#B3B3B3] flex flex-col items-end gap-5 transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-[#677AE4]/10 group"
            >
              <div
                className="w-full flex justify-between items-center cursor-pointer transition-all duration-400 ease-in-out"
                onClick={() => toggleItem(i)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#899FCF] to-[#433E78] rounded-[30px] flex items-center justify-center transition-all duration-600 ease-out hover:shadow-lg hover:shadow-[#677AE4]/30 hover:rotate-3">
                  {openIndex === i ? (
                    <ChevronUp className="text-white w-5 h-5 transition-all duration-500 ease-in-out" />
                  ) : (
                    <ChevronDown className="text-white w-5 h-5 transition-all duration-500 ease-in-out" />
                  )}
                </div>
                <div className="text-black text-[24px] font-medium transition-all duration-500 ease-in-out group-hover:translate-x-1">
                  {item.question}
                </div>
              </div>
              {openIndex === i && (
                <div className="w-full text-right text-black/60 text-[20px] font-medium transition-all duration-600 ease-in-out animate-in slide-in-from-top-2 fade-in-0">
                  {item.answer}
                </div>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

const FAQPage = () => {
  return <Page title="أسئلة وأجوبة" content={<FAQContent />} />;
};

export default FAQPage;
