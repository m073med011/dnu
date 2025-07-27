const FeesContent = () => {
  const faculties = [
    "كلية التمريض",
    "كلية الفنون والتصميم",
    "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
    "كلية الآثار والسياحة",
    "كلية الأعمال",
    "كلية الألسن",
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white px-[clamp(16px,4vw,80px)]  flex flex-col items-center gap-[clamp(9.60px,2vw,36.00px)]">

      <p className="text-center text-[clamp(14px,3vw,22px)] text-[#4B5563] font-inter font-medium transition-all duration-300 hover:text-[#374151] hover:scale-105">
        المصروفات الدراسية لكليات الجامعة للعام الجامعي 2025 - 2026م
      </p>

      <div className="w-full max-w-[1100px] overflow-hidden rounded-[12px] border border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:border-[#D1D5DB]">
        <div className="grid grid-cols-2 gradient-bg text-white text-[clamp(16px,3vw,20px)] font-inter font-medium transition-all duration-300 hover:brightness-110">
          <div className="px-4 py-3 text-center">
            المصروفات الدراسية للطلاب المصريين
          </div>
          <div className="px-4 py-3 text-center">الكلية</div>
        </div>

        {faculties.map((faculty, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 text-[clamp(14px,2.5vw,18px)] font-inter font-medium text-black px-4 py-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer ${
              index % 2 === 0 ? "bg-white hover:bg-[#F8F9FA]" : "bg-[#F9F9F9] hover:bg-[#F1F3F4]"
            }`}
          >
            <div className="text-center transition-all duration-300 hover:font-semibold hover:text-[#1F2937]">75000 جنيه مصري</div>
            <div className="text-center transition-all duration-300 hover:font-semibold hover:text-[#1F2937]">{faculty}</div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1280px] py-5 lg:px-[2.5vw] px-[0vw] flex flex-col items-end gap-[clamp(8px,2vw,16px)]">
        {[
          "المصروفات الدراسية غير شاملة الرسوم الإدارية السنوية.",
          "تُطبق على الطلاب المقبولين في العام الجامعي 2025 - 2026م.",
        ].map((note, index) => (
          <div
            key={index}
            className="flex items-center gap-4 justify-start px-[clamp(24.00px,2.25vw,80.00px)] transition-all duration-300 hover:scale-105 hover:opacity-90 cursor-pointer"
            dir="rtl"
          >
            <span className="w-3 h-3 rounded-full gradient-bg transition-all duration-300 hover:scale-125 hover:shadow-md" />
            <p className="text-[clamp(12px,2vw,18px)] text-black font-inter font-medium text-right transition-all duration-300 hover:text-[#1F2937] hover:font-semibold">
              {note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeesContent;
