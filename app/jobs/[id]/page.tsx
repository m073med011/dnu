"use client";

import { Eye, Calendar } from "lucide-react";

export default function JobsPage() {
  return (
    <div className="w-full h-full bg-white overflow-hidden py-15 lg:py-10">
      <div
        className="mx-auto text-center text-[#677AE4] font-bold hover:text-[#5A68C4] transition-colors duration-300 px-4"
        style={{ fontSize: "clamp(20px, 5vw, 48px)" }}
      >
        الوظائف الشاغرة
      </div>

      <div className="mx-auto my-[clamp(20px,4vw,80px)] max-w-[1120px] w-[calc(100%-clamp(16px,4vw,160px))] p-[clamp(16px,4vw,40px)] bg-[#F9F9F9] rounded-[16px] flex flex-col items-center gap-[clamp(24px,6vw,64px)] hover:shadow-lg hover:bg-[#F5F5F5] transition-all duration-300">
        <div className="self-stretch flex flex-col items-end gap-[clamp(16px,4vw,48px)]">
          <div className="self-stretch flex flex-col items-end gap-[clamp(12px,3vw,24px)]">
            <div className="text-right text-black text-[clamp(18px,4vw,32px)] hover:text-[#677AE4] transition-colors duration-300 cursor-pointer leading-relaxed">
              إعلان هام: فتح باب التقديم لمنصب رئيس جامعة المنصورة الأهلية
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="h-[clamp(36px,8vw,40px)] px-[clamp(12px,3vw,16px)] bg-[#EBCBFF] rounded-[16px] flex items-center gap-2 hover:bg-[#E0B8FF] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-black text-[clamp(14px,3.5vw,20px)]">الزيارات: 3401</div>
                <Eye  />
              </div>

              <div className="h-[clamp(36px,8vw,40px)] px-[clamp(12px,3vw,16px)] bg-[#EBCBFF] rounded-[16px] flex items-center gap-2 hover:bg-[#E0B8FF] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-right text-black text-[clamp(14px,3.5vw,20px)]">04 يوليو 2025</div>
                <Calendar  />
              </div>
            </div>
          </div>

          <div className="self-stretch text-right text-black text-[clamp(16px,3.5vw,24px)] hover:text-[#555555] transition-colors duration-300 leading-relaxed">
            يُعلن مجلس أمناء جامعة دمياط الأهلية عن فتح باب الترشح لشغل منصب رئيس الجامعة، في ضوء أحكام القانون رقم (12) لسنة 2009م
            بشأن الجامعات الخاصة والأهلية ولائحته التنفيذية وتعديلاتهما، وقرار السيد رئيس الجمهورية رقم (42) لسنة 2022م الخاص بإنشاء
            جامعة دمياط الأهلية، ووفقًا للشروط والضوابط الموضحة بالمستند المرفق، مع مراعاة ضرورة الالتزام بالقواعد الواردة بهذا الإعلان.
          </div>
        </div>

        <div className="w-full max-w-[453px] h-[clamp(44px,10vw,48px)] px-[clamp(16px,4vw,32px)] py-2 rounded-[12px] border border-[#677AE4] flex justify-center items-center gap-2 hover:bg-[#677AE4] hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group">
          <div className="text-[#754FA8] text-[clamp(14px,3.5vw,16px)] font-bold group-hover:text-white transition-colors duration-300 text-center">
            اضغط هنا للأطلاع على كل الشروط والضوابط
          </div>
        </div>
      </div>
    </div>
  );
}