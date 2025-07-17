import { ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
export default function AdmissionOfficePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden max-w-[1440px] mx-auto px-[clamp(16px,4vw,80px)] mb-5">
      <h1 className="text-center text-[clamp(24px,4vw,58px)] text-gradient-primary font-bold mb-2">
        مكتب التنسيق والقبول
      </h1>

      {/* Navigation Tabs (Bottom bar without header) */}
      <div className="flex flex-col  gap-[clamp(8px,2vw,16px)] px-[80px]">
        <div>
          <div className="inline-flex px-4 py-1 rounded-full border  border-[#677AE4] w-max mx-auto gap-2">
            {/* <div className="w-3 h-3  rotate-180 border-t-2 border-r-2 border-[#754FA8]" /> */}
            <ChevronUp size={30} />
            <span className="text-[clamp(16px,2vw,20px)] text-[#754FA8] font-medium">
              10
            </span>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex justify-between items-center border-y border-black py-4 px-2">
          <div className="flex gap-26 px-14">
            <span className="text-[#754FA8] text-[clamp(16px,2vw,24px)] font-medium">
              الزيارات
            </span>
            <span className="text-[#754FA8] text-[clamp(16px,2vw,24px)] font-medium">
              تاريخ النشر
            </span>
          </div>
          <span className="text-[#754FA8] text-[clamp(16px,2vw,24px)] font-medium">
            العنوان
          </span>
        </div>

        {/* Posts List */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex items-center gap-8 px-4 min-h-[80px] ${
              i % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
            }`}
          >
            <div className="w-[152px] bg-[#EBCBFF] rounded-full py-3 px-6 text-center text-black text-[clamp(14px,2vw,20px)] font-medium">
              3401
            </div>
            <div className="w-[205px] bg-[#EBCBFF] rounded-full py-3 px-6 text-black text-[clamp(14px,2vw,20px)] font-medium flex justify-center gap-2">
              <span>2025</span>
              <span>يوليو</span>
              <span>04</span>
            </div>

            <div className="flex-1 flex justify-end text-black text-[clamp(14px,2vw,20px)] font-medium px-4">
              <p className="text-end">
                {i % 2 === 0
                  ? "فتح باب التقدم إلكترونيًا للطلاب الحاصلين على الشهادات المعادلة (العربية، والأجنبية) هذا العام ٢٠٢٥م للقبول بالعام الجامعي ٢٠٢٥ / ٢٠٢٦م"
                  : "فتح باب التقديم للطلاب الحاصلين على الثانوية العامة والشهادات المعادلة عام 2024م"}
              </p>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-[clamp(16px,4vw,32px)]">
          {/* <div className="w-3 h-3 rotate-180 border-t-2 border-r-2 border-[#754FA8]">
          </div> */}
            <ChevronLeft />
          <span className="text-[#754FA8] underline text-[clamp(14px,2vw,20px)] font-medium">
            1
          </span>
          <span className="text-[#E2E2E2] text-[clamp(14px,2vw,20px)] font-medium">
            2
          </span>
          <span className="text-[#E2E2E2] text-[clamp(14px,2vw,20px)] font-medium">
            3
          </span>
          <span className="text-[#E2E2E2] text-[clamp(14px,2vw,20px)] font-medium">
            4
          </span>
          {/* <div className="w-3 h-3 border-t-2 border-r-2 border-[#754FA8]">
          </div> */}
            <ChevronRight />
        </div>
      </div>
    </div>
  );
}
