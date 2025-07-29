// "use client";
// import { useState } from "react";
import Image from "next/image";
import image from "@/public/trustees_image.jpeg";
import bi_stars from "@/public/bi_stars.svg";
import Page from "@/components/Hero-section"; // Import your reusable Page component

const PresidentMessageContent = () => {
  return (
    <section className="mx-auto max-w-[1440px] min-w-[320px] w-[clamp(320px,90vw,1280px)] lg:py-10 md:py-0 py-14 mt-25 lg:mt-0 px-4 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,4vw,32px)] items-start">
        <div className="flex flex-col items-center lg:items-start relative lg:hover:scale-105 lg:transition-transform lg:duration-500">
          <div className="z-10 hidden lg:flex top-80 left-[30%] w-[clamp(109.80px,28.59vw,411.75px)] px-6 py-2 bg-[#F9F9F9] rounded-2xl border border-[#B3B3B3] flex-col relative gap-2 mb-3 lg:hover:bg-white lg:hover:border-[#6F42C1] lg:hover:shadow-lg lg:transition-all lg:duration-300 lg:hover:-translate-y-1">
            <div className="text-right">
              <p className="text-black text-[24px] font-medium text-right lg:hover:text-[#6F42C1] lg:transition-colors lg:duration-300">
                أ.د/ حمدان ربيع المتولى
              </p>
              <p className="text-black/60 text-[16px] font-medium lg:hover:text-black/80 lg:transition-colors lg:duration-300">
                رئيس جامعة دمياط
              </p>
              <p className="text-black/60 text-[14px] font-medium lg:hover:text-black/80 lg:transition-colors lg:duration-300">
                المشرف على جامعة دمياط الأهلية
              </p>
            </div>
            <Image
              alt="img stars"
              src={bi_stars}
              className="absolute top-[55%] right-[80%] lg:hover:rotate-12 lg:transition-transform lg:duration-300"
            />
          </div>

          <div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden -mt-[clamp(60px,8vw,80px)] lg:hover:scale-110 lg:transition-transform lg:duration-500 lg:hover:shadow-2xl lg:hover:shadow-[#6F42C1]/20">
              <Image
                src={image}
                alt="رئيس الجامعة"
                fill
                className="object-cover scale-75 lg:hover:scale-110 lg:transition-transform lg:duration-700"
              />
            </div>
          </div>

          {/* Mobile name div - shows under image on mobile only */}
          <div className="text-center mt-3 lg:hidden">
            <p className="text-black text-[20px] lg:text-[24px] font-medium">
              أ.د/ حمدان ربيع المتولى
            </p>
            <p className="text-black/60 text-[14px] lg:text-[16px] font-medium">
              رئيس جامعة دمياط
            </p>
            <p className="text-black/60 text-[12px] lg:text-[14px] font-medium">
              المشرف على جامعة دمياط الأهلية
            </p>
          </div>
        </div>

        <div className="text-center lg:text-right lg:hover:scale-105 lg:transition-transform lg:duration-500">
          <h2 className="block text-[clamp(20px,3vw,32px)] font-bold text-[#433E78] mb-[clamp(16px,3vw,24px)] text-center lg:text-right lg:hover:text-[#8B5CF6] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            كلمة رئيس الجامعة
          </h2>
          <h3 className="text-[clamp(16px,2.5vw,20px)] text-center font-bold mb-[clamp(8px,2vw,12px)] lg:hover:text-[#6F42C1] lg:transition-colors lg:duration-300">
            أبنائي وبناتي الطلاب الأعزاء
          </h3>
          
          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            بداية أتوجه بأسمى آيات الشكر والتقدير لفخامة السيد/ عبد الفتاح السيسي 
            رئيس الجمهورية بمناسبة صدور قرار فخامته رقم (266) بتاريخ 24 مايو 
            2025 بإنشاء جامعة دمياط الأهلية وإلى معالي الأستاذ الدكتور/ محمد أيمن 
            عاشور وزير التعليم العالي على دعمه الكامل والمستمر لإنشاء الجامعة.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            كما يسعدني اليوم أن أتحدث إليكم في لحظة تاريخية متمثلة في فتح باب 
            التقدم لاستقبال الدفعة الأولى بجامعة دمياط الأهلية وبدء الدراسة للعام الجامعي 
            2025/2026 في الكليات التالية: كلية التمريض، كلية الحاسبات والمعلومات، 
            كلية الفنون والتصميم، كلية الآثار والسياحة، كلية الأعمال، وكلية الألسن.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            إن إنشاء جامعة دمياط الأهلية يأتي انطلاقاً من رؤية مصر 2030، واستراتيجية 
            وزارة التعليم العالي التي تهدف إلى تعزيز جودة التعليم، وربط مخرجاته باحتياجات 
            سوق العمل، وتوفير بيئة تعليمية تحفز الإبداع والابتكار. هذه الجامعة ستكون 
            صرحاً أكاديمياً يواكب أحدث التطورات العالمية في مجالات العلوم والتكنولوجيا، 
            مع الحفاظ على قيمنا الأصيلة وهويتنا الوطنية.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            لقد حرصنا على أن تكون جامعة دمياط الأهلية نموذجاً للتميز، من خلال برامج 
            أكاديمية متميزة تلبي احتياجات العصر وتُقدم بتكلفة تنافسية، وشراكات استراتيجية 
            مع الجامعات الدولية والقطاعات الصناعية لضمان جودة المخرجات، ومراكز بحثية 
            متطورة تُسهم في حل المشكلات المجتمعية والتنموية، وبيئة جامعية متكاملة تُتيح 
            للطلاب فرصاً للتعلم والأنشطة الطلابية المتنوعة.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            أبنائي الطلاب... أنتم عماد المستقبل، وهذه الجامعة أُنشأت من أجلكم، لتُتيح 
            لكم فرصاً تعليمية تُناسب طموحاتكم، وتُساعدكم على اكتساب المهارات والمعارف 
            التي تؤهلكم لقيادة مسيرة التنمية في وطننا الغالي مصر.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] leading-relaxed font-bold lg:hover:text-[#4A4A4A] lg:duration-300 lg:hover:scale-105 lg:transform lg:transition-transform">
            ختاماً، أتوجه بالشكر الجزيل إلى كل من ساهم في إنجاز هذا المشروع الوطني 
            الكبير، من قيادات سياسية وأكاديمية، وشركاء من القطاع الخاص، وجميع العاملين 
            الذين بذلوا جهوداً مضنية لتحويل الحلم إلى حقيقة.
          </p>

          <p className="mb-[clamp(12px,2vw,16px)] font-bold lg:hover:text-[#6F42C1] lg:duration-300 lg:hover:scale-110 lg:transform lg:transition-transform">
            والله ولي التوفيق
          </p>
        </div>
      </div>
    </section>
  );
};

const PresidentMessage = () => {
  return (
    <Page 
      title="كلمة رئيس الجامعة" 
      content={<PresidentMessageContent />} 
    />
  );
};

export default PresidentMessage;