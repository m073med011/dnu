import React from "react";

const UniversityFooter: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto flex flex-col justify-start items-center gap-4 sm:gap-5 lg:gap-5 py-6 sm:py-8 lg:py-10">
      {/* Divider line */}
      <div className="w-full h-0 border-t-[3px] sm:border-t-[4px] lg:border-t-[5px] border-[#EFF3FF]"></div>

      {/* Footer content */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Number/ID */}
        {/* <div className="text-[#899FCF] text-xl sm:text-2xl lg:text-[32px] font-semibold mb-2 sm:mb-3 lg:mb-4">
          2750413
        </div> */}

        {/* Copyright text */}
        <div className="text-[#433E78] text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl">
          جميع الحقوق محفوظة 2025 - مركز الحلول الذكية الجامعة (SUS)
        </div>
      </div>
    </div>
  );
};

export default UniversityFooter;

// <div className="w-full h-full relative">
//   {/* Background gradient */}
//   <div className="absolute inset-0 bg-gradient-to-br from-[#677AE4] to-[#754FA8]" />

//   {/* Main content */}
//   <div className="relative px-4 md:px-20 py-0">
//     {/* Header section with social media icons and profile */}
//     <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-300 border-opacity-70 gap-4">
//       <div className="flex flex-row md:flex-row items-center justify-around md:justify-between gap-4 md:gap-0 w-full">
//         {/* Social media icons */}
//         <div className="flex items-end gap-3 md:gap-5 md:order-1">
//           {/* Facebook Icon */}
//           <div className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
//             <FacebookIcon size={24} />
//           </div>

//           {/* Instagram Icon */}
//           <div className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
//             <InstagramIcon size={24} />
//           </div>

//           {/* Twitter Icon */}
//           <div className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
//             <TwitterIcon size={24} />
//           </div>
//         </div>

//         {/* Profile image */}
//         <Image
//           className="w-24 h-24 md:w-30 md:h-30 rounded-full md:order-2"
//           src={logo}
//           alt="Profile"
//         />
//       </div>
//     </div>

//     {/* Footer content */}
//     <div className="flex flex-col md:flex-row justify-end items-start gap-8 md:gap-30 px-4 md:px-20 py-8">
//       {/* University Colleges Section */}
//       <div className="flex flex-col items-end gap-4 w-full md:w-auto">
//         <h3 className="text-white text-2xl md:text-3xl font-bold text-center">كليات الجامعة</h3>
//         <div className="flex flex-col items-end gap-2">
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية الأثار و السياحة</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية الأعمال</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية الألسن</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية الحاسبات و المعلومات و الذكاء الاصطناعي</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية التمريض</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-right">كلية الفنون و التصميم</div>
//         </div>
//       </div>

//       {/* About University Section */}
//       <div className="flex flex-col items-end gap-4 w-full md:w-auto">
//         <h3 className="text-white text-2xl md:text-3xl font-bold text-center">عن الجامعة</h3>
//         <div className="flex flex-col items-end gap-4">
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium">نظرة عامه</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-center">تواصل معنا</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-center">الخصوصية و الاستخدام</div>
//         </div>
//       </div>

//       {/* University Guide Section */}
//       <div className="flex flex-col items-end gap-4 w-full md:w-auto">
//         <h3 className="text-white text-2xl md:text-3xl font-bold text-center">دليل الجامعة</h3>
//         <div className="flex flex-col items-end gap-4">
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium">مجلس الأمناء</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-center">كلمة رئيس الجامعة</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-center">رؤية  و رسالة الجامعة</div>
//           <div className="text-white text-opacity-80 text-lg md:text-xl font-medium text-center">ملفات هامة</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// const FacebookIcon = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//   </svg>
// );

// const InstagramIcon = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// const TwitterIcon = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
//     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//   </svg>
// );

// import logo from "@/public/logo.svg";
// import Image from "next/image";
