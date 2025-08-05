import React from "react";
import Image from "next/image";
import image from "@/public/Group_20.png";
import Page from "@/components/Hero-section"; // Import your reusable Page component

const ImportantFilesContent: React.FC = () => {
  const files: string[] = [
    // Empty array - add file titles here when available
    // Example: "ملف التسجيل", "دليل الطالب"
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Main Content - Important Files Section */}
      <div className="w-full py-8">
        <div className="w-full max-w-[clamp(320px,90vw,1120px)] mx-auto px-[clamp(12px,5vw,40px)] flex flex-col justify-center items-center gap-6">
          
          {/* Conditional Rendering */}
          {files.length === 0 ? (
            // Empty State
            <div className="w-full py-16 flex flex-col justify-center items-center gap-4">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-medium text-gray-600 mb-2">
                  لا يوجد ملفات مهمة الان
                </h3>
                <p className="text-gray-500 text-sm lg:text-base">
                  سيتم عرض الملفات المهمة هنا عند توفرها
                </p>
              </div>
            </div>
          ) : (
            // File Items (when files exist)
            files.map((title, index) => (
              <div
                key={index}
                className="w-full p-6 rounded-2xl border border-[#677AE4] flex justify-center items-center gap-6 
                           bg-white hover:bg-gradient-to-r 
                           cursor-pointer transition-all duration-300 ease-in-out
                           hover:shadow-lg hover:border-[#754FA8]
                           hover:scale-[1.02] hover:-translate-y-1
                           transform-gpu will-change-transform
                           group/item"
              >
                {/* Enhanced File Icon */}
                <Image src={image} alt="file icon" />

                {/* File Title */}
                <div className="text-gradient-primary text-sm lg:text-xl font-medium transition-all duration-300">
                  {title}
                </div>

                {/* Download Arrow (appears on hover) */}
                <div
                  className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 
                               transform translate-x-[-10px] group-hover/item:translate-x-0"
                >
                  <svg
                    className="w-6 h-6 text-gradient-primary  
                             transition-colors duration-300 group-hover/item:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const ImportantFilesPage: React.FC = () => {
  return (
    <Page 
      title="ملفات هامة" 
      content={<ImportantFilesContent />} 
    />
  );
};

export default ImportantFilesPage;