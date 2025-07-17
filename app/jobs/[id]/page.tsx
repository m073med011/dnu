"use client";

import Image from "next/image";
import eye from "@/public/eye.svg"
import calendar from "@/public/calendar-02.svg"
export default function JobsPage() {
  return (
    <div className="w-full h-full  bg-white overflow-hidden">
     <div
        className="mx-auto text-center text-[#677AE4] font-bold hover:text-[#5A68C4] transition-colors duration-300"
        style={{ fontSize: "clamp(20px, 3.75vw, 48px)" ,
                     

        }}
      >
        الوظائف الشاغرة
      </div>

      <div className=" left-[80px] mx-auto my-[clamp(20px,2vw,80px)] top-[286px] w-[1120px] p-10 bg-[#F9F9F9] rounded-[16px] flex flex-col items-center gap-16 hover:shadow-lg hover:bg-[#F5F5F5] transition-all duration-300">
        <div className="self-stretch flex flex-col items-end gap-12">
          <div className="self-stretch flex flex-col items-end gap-6">
            <div className="text-right text-black text-[32px] hover:text-[#677AE4] transition-colors duration-300 cursor-pointer">
              إعلان هام: فتح باب التقديم لمنصب رئيس جامعة المنصورة الأهلية
            </div>

            <div className="inline-flex items-center gap-4">
              <div className="h-10 px-4 bg-[#EBCBFF] rounded-[16px] flex items-center gap-2 hover:bg-[#E0B8FF] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-black text-[20px] ">الزيارات: 3401</div>
               <Image src={eye} alt="eye" />
              </div>

              <div className="h-10 px-4 bg-[#EBCBFF] rounded-[16px] flex items-center gap-2 hover:bg-[#E0B8FF] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-right text-black text-[20px] ">04 يوليو 2025</div>
               <Image src={calendar} alt="calendar" />
              </div>
            </div>
          </div>

          <div className="self-stretch text-right text-black text-[24px] hover:text-[#555555] transition-colors duration-300">
            يُعلن مجلس أمناء جامعة دمياط الأهلية عن فتح باب الترشح لشغل منصب رئيس الجامعة، في ضوء أحكام القانون رقم (12) لسنة 2009م
            بشأن الجامعات الخاصة والأهلية ولائحته التنفيذية وتعديلاتهما، وقرار السيد رئيس الجمهورية رقم (42) لسنة 2022م الخاص بإنشاء
            جامعة دمياط الأهلية، ووفقًا للشروط والضوابط الموضحة بالمستند المرفق، مع مراعاة ضرورة الالتزام بالقواعد الواردة بهذا الإعلان.
          </div>
        </div>

        <div className="w-[453px] h-12 px-8 py-2 rounded-[12px] border border-[#677AE4] flex justify-center items-center gap-2 hover:bg-[#677AE4] hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group">
          <div className="text-[#754FA8] text-[16px] font-bold group-hover:text-white transition-colors duration-300">
            اضغط هنا للأطلاع على كل الشروط والضوابط
          </div>
        </div>
      </div>
    </div>
  );
}