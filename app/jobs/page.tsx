"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import  Link  from "next/link";

export default function JobsPage() {
  return (
    <div className="w-full h-full mx-auto  bg-white overflow-hidden">
      <div
        className="mx-auto text-center text-[#677AE4] font-bold"
        style={{ fontSize: "clamp(20px, 3.75vw, 48px)" ,
                      marginTop: "clamp(20px, 2vw, 80px)",

        }}
      >
        الوظائف الشاغرة
      </div>
      <div
        className="mx-auto flex flex-col items-center gap-4"
        style={{
          width: "clamp(300px, 87.5vw, 1120px)",
        }}
      >
        <div className="w-full flex flex-col items-start gap-4">
          <div className="px-4 py-1 rounded-full border border-[#677AE4] flex items-center gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <ChevronRight
              size={24}
              className="rotate-270 text-[#754FA8] transition-all duration-300"
            />
            <div
              className="text-center text-[#754FA8] font-medium transition-all duration-300"
              style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}
            >
              5
            </div>
          </div>

          <div className="w-full lgpx-6 px-0 flex flex-col items-start">
            <div className="w-full lg:px-2 px-0 py-4 border-t border-b border-black flex justify-between items-center">
              <div
                className="px-12 flex justify-between items-center"
                style={{ width: "clamp(150px, 30.86vw, 395px)" }}
              >
                <div
                  className="text-[#754FA8] font-medium"
                  style={{
                    width: "clamp(60px, 8.05vw, 103px)",
                    fontSize: "clamp(14px, 1.88vw, 24px)",
                  }}
                >
                  تاريخ النشر
                </div>
              </div>
              <div
                className=" flex lg:justify-end justify-center items-end "
                style={{ width: "clamp(150px, 30.86vw, 395px)" }}
              >
                <div
                  className="text-[#754FA8] font-medium text-right sm:text-center"
                  style={{
                    width: "clamp(40px, 5.23vw, 67px)",
                    fontSize: "clamp(14px, 1.88vw, 24px)",
                  }}
                >
                  العنوان
                </div>
              </div>
            </div>

            {[1, 2, 3, 4, 5].map((item, index) => (
                
                // <>
              <Link href={`/jobs/${index}`}
                key={index}
                className={`w-full px-4 ${
                  index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                } flex items-center gap-8 hover:shadow-md hover:scale-[1.005] transition-all duration-300 cursor-pointer`}
                style={{
                  minHeight: "clamp(50px, 6.25vw, 80px)",
                  gap: "clamp(8px, 2.5vw, 32px)",
                }}
              >
                <div
                  className="p-3 bg-[#EBCBFF] rounded-full flex justify-center items-center hover:shadow-lg hover:scale-102 transition-all duration-300"
                  style={{ width: "clamp(20px, 11.88vw, 152px)" }}
                >
                  <div
                    className="text-right text-black font-medium"
                    style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                  >
                    3401
                  </div>
                </div>
                <div
                  className="p-3 bg-[#EBCBFF] rounded-full flex justify-center items-center hover:shadow-lg hover:scale-102 transition-all duration-300"
                  style={{ width: "clamp(100px, 16.02vw, 205px)" }}
                >
                  <div
                    className="text-right text-black font-medium"
                    style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                  >
                    04 يوليو 2025
                  </div>
                </div>
                <div className="flex-1 p-4 rounded-full flex justify-end items-center transition-all duration-300">
                  <div
                    className="text-right text-black font-medium"
                    style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                  >
                    {index % 2 === 0
                      ? "إعلان هام: فتح باب التقديم لمنصب رئيس جامعة المنصورة الأهلية"
                      : "إعلان هام: وظائف شاغرة بالجامعة"}
                  </div>
                </div>
              </Link>
              
            ))}
          </div>
        </div>

        <div
          className="px-4 py-1 rounded-full flex items-center"
          style={{ gap: "clamp(6px, 1.25vw, 16px)" }}
        >
          <ChevronRight
            size={20}
            className="text-[#754FA8] rotate-180 hover:scale-105 transition-all duration-300 cursor-pointer"
          />
          <div
            className="text-center text-[#754FA8] font-medium underline hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
          >
            1
          </div>
          <div
            className="text-center text-[#E2E2E2] font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
          >
            2
          </div>
          <div
            className="text-center text-[#E2E2E2] font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
          >
            3
          </div>
          <div
            className="text-center text-[#E2E2E2] font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
          >
            4
          </div>
          <ChevronRight
            size={20}
            className="text-[#754FA8] hover:scale-105 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
