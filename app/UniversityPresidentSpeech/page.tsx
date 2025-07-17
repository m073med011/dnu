// "use client";
// import { useState } from "react";
import Image from "next/image";
import image from "@/public/Trustees/image.png";
import bi_stars from "@/public/bi_stars.svg";
const PresidentMessage = () => {
  return (
    <section className="mx-auto max-w-[1440px] min-w-[320px] w-[clamp(320px,90vw,1280px)] lg:py-10 md:py-0 py-14 mt-25 lg:mt-0 px-4 lg:px-14">
      {/* <h2 className=" block sm:hidden  w-full text-[clamp(20px,3vw,32px)] font-bold text-[#6F42C1] mb-[clamp(16px,3vw,24px)] text-center lg:text-right lg:hover:text-[#8B5CF6]  lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
        كلمة رئيس الجامعة
      </h2> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,4vw,32px)] items-start">
        <div className="flex flex-col items-center lg:items-start relative lg:hover:scale-105 lg:transition-transform lg:duration-500">
          <div className="z-10 hidden lg:flex top-80 left-[30%] w-[clamp(109.80px,28.59vw,411.75px)] px-6 py-2 bg-[#F9F9F9] rounded-2xl border border-[#B3B3B3]  flex-col relative gap-2 mb-3 lg:hover:bg-white lg:hover:border-[#6F42C1] lg:hover:shadow-lg lg:transition-all lg:duration-300 lg:hover:-translate-y-1">
            <div className="text-right">
              <p className="text-black text-[24px] font-medium text-right lg:hover:text-[#6F42C1] lg:transition-colors lg:duration-300">
                أ.د/ السيد أحمد
              </p>
              <p className="text-black/60 text-[16px] font-medium lg:hover:text-black/80 lg:transition-colors lg:duration-300">
                رئيس الجامعة
              </p>
            </div>
            <Image
              alt="img stars"
              src={bi_stars}
              className="absolute top-[55%] right-[80%]  lg:hover:rotate-12 lg:transition-transform lg:duration-300"
            />{" "}
          </div>

          <div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden -mt-[clamp(60px,8vw,80px)] lg:hover:scale-110 lg:transition-transform lg:duration-500 lg:hover:shadow-2xl lg:hover:shadow-[#6F42C1]/20">
              <Image
                src={image}
                alt="رئيس الجامعة"
                fill
                className="object-cover lg:hover:scale-110 lg:transition-transform lg:duration-700"
              />
            </div>
          </div>

          {/* Mobile name div - shows under image on mobile only */}
          <div className="text-center mt-3 lg:hidden">
            <p className="text-black text-[20px] lg:text-[24px] font-medium">
              أ.د/ السيد أحمد
            </p>
            <p className="text-black/60 text-[14px] lg:text-[16px] font-medium">
              رئيس الجامعة
            </p>
          </div>
        </div>

        <div className="text-center lg:text-right lg:hover:scale-105 lg:transition-transform lg:duration-500">
          <h2 className="block text-[clamp(20px,3vw,32px)] font-bold text-[#6F42C1] mb-[clamp(16px,3vw,24px)] text-center lg:text-right lg:hover:text-[#8B5CF6]  lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            كلمة رئيس الجامعة
          </h2>
          <h3 className="text-[clamp(16px,2.5vw,20px)] text-center font-bold mb-[clamp(8px,2vw,12px)] lg:hover:text-[#6F42C1] lg:transition-colors lg:duration-300">
            أبنائي وبناتي الأعزاء
          </h3>
          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            إنه لمن دواعي سروري أن أرحب بكم في رحاب جامعة دمياط الأهلية، والتي
            تضع البحث العلمي والخبرة العملية في مقدمات أولوياتها بما يُسهم في
            تحقيق استراتيجياتها، وتأهيل خريجين قادرين على المُنافسة في أسواق
            العمل المُختلفة بما يتوافق مع رؤية مصر للتنمية المستدامة 2030 في
            مجال التعليم العالي وفي ضوء توجهات الدولة في إنشاء جامعات مصرية
            بجودة عالمية تُصنف كنماذج دولية معاصرة لجامعات الجيل الرابع قادرة
            على إحداث طفرة غير مسبوقة في التعليم الجامعي تنفيذًا لرؤية القيادة
            السياسية.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A]  lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            وتتميز جامعة دمياط الأهلية بعدد من البرامج والتخصصات المتميزة التي
            تواكب احتياجات سوق العمل، وتحرص الجامعة على تعزيز منهجيات البحث
            المستمر والتعلم النشط من خلال تقديم برامج تعليمية مُتميزة في إطار
            السعي إلى تحقيق الجودة، وبما يُساهم في إعداد قادة المستقبل وتطوير
            شخصيتهم وتعزيز مهاراتهم وخبراتهم وتسهيل حصولهم على فرص عمل أكثر
            تميزاً.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            وختاماً أتقدم بخالص الشكر والتقدير لجميع منسوبي جامعة دمياط الأهلية
            لجهودهم المتواصلة بما يسهم في وصول الجامعة لمصاف الجامعات العالمية،
            ورقي وطننا الحبيب.
          </p>

          <p className=" mb-[clamp(12px,2vw,16px)] font-bold lg:hover:text-[#6F42C1]  lg:duration-300 lg:hover:scale-110 lg:transform lg:transition-transform">
            والله ولي التوفيق
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
