import React from 'react';
import image from "@/public/Image.png"
import image2 from "@/public/Image_4.png"
import Image from 'next/image';

const UniversityVisionMission = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto" style={{ padding: `clamp(1.25rem, 6.25vw, 5rem) clamp(1.25rem, 6.25vw, 5rem) 0` }}>
        {/* Title */}
        <div className="w-full text-center text-indigo-500 font-bold mb-12" style={{ fontSize: 'clamp(2rem, 3.75vw, 3rem)' }}>
          رؤية ورسالة الجامعة
        </div>

        {/* Vision and Mission Content */}
        <div className="w-full mx-auto flex flex-col items-center mb-16" style={{ maxWidth: 'clamp(20rem, 87.5vw, 70rem)', gap: 'clamp(1rem, 1.875vw, 1.5rem)' }}>
          <div className="w-full flex justify-end items-center" style={{ gap: 'clamp(0.5rem, 0.625vw, 0.5rem)' }}>
            <div className="text-black font-medium text-center" style={{ fontSize: 'clamp(1rem, 1.875vw, 1.5rem)' }}>
              الريادة بين جامعات الجيل الرابع في التعليم والبحث العلمي وخدمة المجتمع محليًا وإقليميًا ودوليًا.
            </div>
            <div className="text-purple-600 font-bold text-right" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)' }}>
              رؤية الجامعة: 
            </div>
          </div>
          <div className="w-full flex flex-col items-end" style={{ gap: 'clamp(0.5rem, 0.625vw, 0.5rem)' }}>
            <div className="text-purple-600 font-bold text-center" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)' }}>
              رسالة الجامعة
            </div>
            <div className="w-full text-black font-medium text-right" style={{ fontSize: 'clamp(1rem, 1.875vw, 1.5rem)' }}>
              تسعى جامعة دمياط الأهلية إلى التميز في تقديم برامج وخدمات تعليمية وبحثية للمجتمع تعزز التنمية المستدامة في بيئة تكنولوجية داعمة للإبداع والابتكار لإعداد خريج مؤهل قادر على مواكبة وتلبية متطلبات سوق العمل في إطار من الالتزام بالأخلاقيات المهنية.
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="w-full flex flex-col sm:flex-row justify-between mb-16" style={{ gap: 'clamp(1rem, 2.5vw, 2rem)' }}>
          <div className="w-full" style={{ maxWidth: 'clamp(18rem, 41.9vw, 33.5rem)' }}>
            <div className="w-full bg-gray-300 rounded-2xl overflow-hidden" style={{ height: 'clamp(12rem, 24.8vw, 20rem)' }}>
              <Image 

                src={image}
                alt="University Campus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full" style={{ maxWidth: 'clamp(18rem, 41.9vw, 33.5rem)' }}>
            <div className="w-full bg-gray-300 rounded-2xl overflow-hidden" style={{ height: 'clamp(12rem, 24.8vw, 20rem)' }}>
              <Image
                src={image2} 
                alt="University Facilities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityVisionMission;