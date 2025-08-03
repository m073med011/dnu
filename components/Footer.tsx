import React from 'react';
import logo from "@/public/vercel.svg";
import Image from 'next/image';
import Link from 'next/link';

// Social Media Icons
const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const UniversityFooter = () => {
  // Custom styles using CSS-in-JS approach
  const gradientBgStyle = {
    background: 'linear-gradient(135deg, #899FCF, #433E78)'
  };

  const hoverStyle = {
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div className="w-full h-full relative">
        {/* Background gradient using inline style */}
        <div className="absolute inset-0" style={gradientBgStyle} />
        
        {/* Main content */}
        <div className="relative px-4 md:px-20 py-0">
          {/* Header section with social media icons and profile */}
          <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-300 border-opacity-70 gap-4">
            <div className="flex flex-row md:flex-row items-center justify-around md:justify-between gap-4 md:gap-0 w-full">
              {/* Social media icons */}
              <div className="flex items-end gap-3 md:gap-5 md:order-1">
                {/* Facebook Icon 1 */}
                <a href="https://www.facebook.com/share/p/16eGgX19gu/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:bg-white/40 transition-all duration-300">
                  <FacebookIcon size={24} />
                </a>
                
                {/* Facebook Icon 2 */}
                <a href="https://www.facebook.com/profile.php?id=61579140232991" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:bg-white/40 transition-all duration-300">
                  <FacebookIcon size={24} />
                </a>
                
                {/* Twitter/X Icon */}
                <a href="https://x.com/DamiettaNU" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:bg-white/40 transition-all duration-300">
                  <TwitterIcon size={24} />
                </a>
                
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/info.damnu/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:bg-white/40 transition-all duration-300">
                  <InstagramIcon size={24} />
                </a>
                
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/company/dam-nu/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/30 bg-opacity-20 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:bg-white/40 transition-all duration-300">
                  <LinkedInIcon size={24} />
                </a>
              </div>
              
              {/* Profile image */}
              <Image
                className="w-24 h-24 md:w-30 md:h-30 rounded-full md:order-2" 
                src={logo}
                alt="University Logo"
              />
            </div>
          </div>
          
          {/* Footer content using CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-20 py-8 text-right">
            {/* القبول والتسجيل Section */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold">القبول والتسجيل</h3>
              <div className="flex flex-col items-end gap-4">
                <Link href="/Registration" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>القبول والتسجيل</Link>
              </div>
            </div>

            {/* عن الجامعة Section */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold">عن الجامعة</h3>
              <div className="flex flex-col items-end gap-4">
                <Link href="/UniversityBoardOfTrustees" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>مجلس الأمناء</Link>
                <Link href="/UniversityPresidentSpeech" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلمة رئيس الجامعة</Link>
                <Link href="/UniversityVision" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>رؤية ورسالة الجامعة</Link>
                <Link href="/ImportantFiles" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>ملفات هامة</Link>
                <Link href="/Q&A" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>الأسئلة الشائعة</Link>
                <Link href="/jobs" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>الوظائف الشاغرة</Link>
                <Link href="/contact-us" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>اتصل بنا</Link>
              </div>
            </div>
            
            {/* الخدمات الالكترونية Section */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold">الخدمات الالكترونية</h3>
              <div className="flex flex-col items-end gap-4">
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>DAMIS نظام ادارة الشئون الأكاديمية</Link>
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>DAMLS نظام ادارة التعليم الالكتروني</Link>
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>DAMA نظام حوكمة وارشفة الملفات</Link>
              </div>
            </div>
            
            {/* الحياة الجامعية Section */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold">الحياة الجامعية</h3>
              <div className="flex flex-col items-end gap-4">
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>بوابة الخدمات الطلابية</Link>
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>دليل الطالب</Link>
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>الميثاق الأخلاقي للطالب</Link>
                <a href="https://www.ekb.eg/" target="_blank" rel="noopener noreferrer" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>بنك المعرفة المصري</a>
                <Link href="#" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>الإسكان الجامعي</Link>
              </div>
            </div>
            
            {/* الكليات والبرامج Section */}
            <div className="flex flex-col items-end gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold">الكليات والبرامج</h3>
              <div className="flex flex-col items-end gap-2">
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية الحاسبات والمعلومات والذكاء الاصطناعي</Link>
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية التمريض</Link>
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية الفنون والتصميم</Link>
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية الألسن</Link>
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية الآثار والسياحة</Link>
                <Link href="/collages" className="text-white text-opacity-80 text-lg md:text-xl font-medium hover:text-opacity-100 transition-all duration-300" style={hoverStyle}>كلية الأعمال</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default UniversityFooter;