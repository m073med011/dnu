import React from "react";
import Image from "next/image";
import nursingImg from "@/public/collages/download01.png";

export default function NursingProgramPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Title */}
      <div className="text-center text-black py-10">
        <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
          برنامج بكالوريوس علوم التمريض
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="relative px-4 lg:px-20 mb-50">
        {/* Left Image */}
        <div className="w-full">
          <div className="w-[580px] h-[529px] rounded-2xl relative overflow-hidden">
            <Image
              width={580}
              height={529}
              src={nursingImg}
              alt="Nursing Program"
            />
          </div>
        </div>

        {/* Right Content Card */}
        <div className="lg:absolute lg:right-4 lg:top-16  lg:w-1/2 lg:max-w-2xl">
          <div className="bg-gradient-to-br w-[624px] from-blue-400/60 to-purple-600/60 backdrop-blur-sm rounded-3xl lg:rounded-tl-[20rem] p-6 lg:p-10 text-white">
            {/* Program Mission */}
            <div className="mb-8">
              <h2
                className="text-center text-white font-medium mb-4"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
              >
                رسالة البرنامج
              </h2>
              <p
                className="text-right text-white/80 leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)" }}
              >
                يهدف البرنامج إلى تخريج ممرض مؤهل بالكفايات التمريضية التي
                تساعده على تقديم رعاية تمريضية شاملة تُلبي احتياجات المجتمع من
                خلال البحث العلمي والممارسة القائمة على دلائل الأبحاث
              </p>
            </div>

            {/* Program Vision */}
            <div>
              <h2
                className="text-right text-white font-medium mb-4"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
              >
                رؤية البرنامج
              </h2>
              <p
                className="text-right text-white/80 leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)" }}
              >
                تحقيق التميز في التعليم التمريضي لكي يواكب التقدم في العلوم
                الحديثة وتحقيق احتياجات المجتمع ومتطلبات سوق العمل المحلية
                والإقليمية والدولية
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Objectives */}
      <div className="px-4 lg:px-20 mb-16">
        <h2
          className="text-center text-blue-500 font-bold mb-6"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
        >
          أهداف البرنامج
        </h2>
        <div className="space-y-2">
          {[
            "تعزيز قدرات الطالب في الاتصال والتواصل المهني الفعال مع الزملاء، والمرضى والمجتمع وأعضاء الفريق الصحي",
            "رفع الوعي الصحي من خلال تعزيز دور الطالب القيادي في المجتمع ومشاركته في تحسين نوعية الرعاية الصحية ومواكبة التطورات المهنية",
            "اكساب الطالب المعلومات والمهارات والاتجاهات الضرورية وحل المشكلات المرتبطة بعملهم المستقبلي",
            "إعداد مناهج متطورة متوافقة مع المناهج الدولية",
            "إعداد كفاءات قادرة على التعامل مع تكنولوجيا المعلومات والتقنيات الحديثة المستخدمة",
            "إعداد ممرضين يتحلون بالأخلاقيات المهنية المطلوبة، ويؤمنون بقيم اتقان العمل، والتطوير المستمر",
            "إعداد الكفاءات العلمية والكوادر المؤهلة لممارسة مهنة التمريض",
          ].map((objective, index) => (
            <div
              key={index}
              className="flex items-center justify-end gap-3 py-2"
            >
              <p
                className="text-right text-black/60 font-medium"
                style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)" }}
              >
                {objective}
              </p>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="px-4 lg:px-20 mb-16">
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          <h2
            className="text-center text-blue-500 font-medium mb-6"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            شروط القبول
          </h2>
          <div className="space-y-4">
            {[
              "الالتحاق بالكلية عن طريق مكتب التنسيق للقبول بالجامعات الأهلية وذلك لطلاب الثانوية العامة شعبة علمي علوم أو ما يعادلها من الشهادات",
              "أن يكون الطالب متفرغا للدراسة",
              "أن تكون اللغة الإنجليزية هي إحدى اللغات التي تمت دراستها",
              "يقبل الطلاب المحولين من الكليات والمعاهد والطلاب الوافدين وفق القواعد المحددة بواسطة المجلس الاعلى للجامعات الأهلية",
              "اجتياز الكشف الطبي ويجب أن يكون الطالب خالي من الاعاقات الجسدية /النفسية",
              "اجتياز اختبارات القدرات الموحدة",
            ].map((requirement, index) => (
              <p
                key={index}
                className="text-right text-black font-medium"
                style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)" }}
              >
                {index + 1}- {requirement}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Graduate Specifications */}
      <div className="px-4 lg:px-20 mb-16">
        <h2
          className="text-center text-blue-500 font-bold mb-6"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
        >
          المواصفات العامة لخريج البكالوريوس
          <br />
          في علوم التمريض نظام الساعات المعتمدة
        </h2>
        <div className="space-y-2">
          {[
            "يمتلك المعلومات الصحيحة مع القدرة على استخدامها وتطبيقها في مجال التمريض",
            "يظهر المعرفة بالقيم والمعايير والأخلاقيات والقوانين واللوائح الخاصة بمهنة التمريض",
            "يقدم رعاية تمريضية ذات جودة ومركزة حول احتياجات الفرد والاسرة والمجتمع في كل أماكن الرعاية الصحية",
            "يتولى مسئولية تقديم الإرشادات الصحية للأفراد والأسر والمجتمعات",
            "يتواصل بفاعلية كعضو في فريق مهني متعاون في المؤسسات الصحية المختلفة",
            "يستخدم التفكير الإبداعي البناء في بيئة العمل من خلال الاستفادة من دلائل الأبحاث",
          ].map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-4">
              <p
                className="text-right text-purple-700 font-medium"
                style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)" }}
              >
                {spec}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-4 lg:px-20 mb-16 text-center">
        <p
          className="text-right text-black font-medium mb-4"
          style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)" }}
        >
          للاستفسارات؛ يرجى التواصل من خلال البريد الالكتروني التالي:
        </p>
        <a
          href="mailto:Nursing@Damietta.edu.eg"
          className="text-blue-500 font-medium hover:underline"
          style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)" }}
        >
          Nursing@Damietta.edu.eg
        </a>
      </div>
    </div>
  );
}
