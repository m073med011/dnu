"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Page from "@/components/Hero-section"; // Import your reusable Page component

interface Job {
  id: number;
  title: string;
  publishDate: string;
  jobNumber: string;
}

const JobsContent = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const jobsPerPage = 5;

  // Empty jobs array - add job objects here when available
  const jobs: Job[] = [
    // Example when you add jobs:
    // {
    //   id: 1,
    //   title: "إعلان هام: فتح باب التقديم لمنصب رئيس جامعة المنصورة الأهلية",
    //   publishDate: "04 يوليو 2025",
    //   jobNumber: "3401"
    // }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-1); // Ellipsis
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push(-1); // Ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-2); // Ellipsis
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="w-full h-full mx-auto py-15 lg:py-0 bg-white overflow-hidden">
      <div
        className="mx-auto flex flex-col items-center gap-4"
        style={{
          width: "clamp(300px, 87.5vw, 1120px)",
          marginTop: "clamp(20px, 2vw, 80px)",
        }}
      >
        <div className="w-full flex flex-col items-start gap-4">
          {/* Jobs Counter */}
          <div className="px-4 py-1 rounded-full border border-[#677AE4] flex items-center gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <ChevronRight
              size={24}
              className="rotate-270 text-[#754FA8] transition-all duration-300"
            />
            <div
              className="text-center text-[#754FA8] font-medium transition-all duration-300"
              style={{ fontSize: "clamp(14px, 1.56vw, 20px)" }}
            >
              {jobs.length}
            </div>
          </div>

          <div className="w-full lgpx-6 px-0 flex flex-col items-start">
            {/* Table Header - only show if there are jobs */}
            {jobs.length > 0 && (
              <div className="w-full lg:px-2 px-0 py-4 border-t border-b border-black flex justify-between items-center">
                <div
                  className="px-12 flex justify-between items-center"
                  style={{ width: "clamp(150px, 30.86vw, 395px)" }}
                >
                  <div
                    className="text-[#433E78] font-medium"
                    style={{
                      width: "clamp(60px, 8.05vw, 103px)",
                      fontSize: "clamp(14px, 1.88vw, 24px)",
                    }}
                  >
                    تاريخ النشر
                  </div>
                </div>
                <div
                  className="flex lg:justify-end justify-center items-end"
                  style={{ width: "clamp(150px, 30.86vw, 395px)" }}
                >
                  <div
                    className="text-[#433E78] font-medium text-right sm:text-center"
                    style={{
                      width: "clamp(40px, 5.23vw, 67px)",
                      fontSize: "clamp(14px, 1.88vw, 24px)",
                    }}
                  >
                    العنوان
                  </div>
                </div>
              </div>
            )}

            {/* Conditional Rendering */}
            {jobs.length === 0 ? (
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V6" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-medium text-gray-600 mb-2">
                    لا توجد وظائف شاغرة حالياً
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base">
                    سيتم عرض الوظائف المتاحة هنا عند توفرها
                  </p>
                </div>
              </div>
            ) : (
              // Jobs List
              currentJobs.map((job, index) => (
                <Link 
                  href={`/jobs/${job.id}`}
                  key={job.id}
                  className={`w-full px-4 ${
                    index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                  } flex items-center gap-8 hover:shadow-md hover:scale-[1.005] transition-all duration-300 cursor-pointer`}
                  style={{
                    minHeight: "clamp(50px, 6.25vw, 80px)",
                    gap: "clamp(8px, 2.5vw, 32px)",
                  }}
                >
                  <div
                    className="p-3 bg-[#EFF3FF] rounded-full flex justify-center items-center hover:shadow-lg hover:scale-102 transition-all duration-300"
                    style={{ width: "clamp(20px, 11.88vw, 152px)" }}
                  >
                    <div
                      className="text-right text-black font-medium"
                      style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                    >
                      {job.jobNumber}
                    </div>
                  </div>
                  <div
                    className="p-3 bg-[#EFF3FF] rounded-full flex justify-center items-center hover:shadow-lg hover:scale-102 transition-all duration-300"
                    style={{ width: "clamp(100px, 16.02vw, 205px)" }}
                  >
                    <div
                      className="text-right text-black font-medium"
                      style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                    >
                      {job.publishDate}
                    </div>
                  </div>
                  <div className="flex-1 p-4 rounded-full flex justify-end items-center transition-all duration-300">
                    <div
                      className="text-right text-black font-medium"
                      style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                    >
                      {job.title}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Pagination - only show if there are jobs and more than one page */}
        {jobs.length > 0 && totalPages > 1 && (
          <div
            className="px-4 py-1 rounded-full flex items-center"
            style={{ gap: "clamp(6px, 1.25vw, 16px)" }}
          >
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-[#754FA8] hover:scale-105 cursor-pointer'
              } transition-all duration-300`}
            >
              <ChevronRight size={20} className="rotate-180" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((pageNum, index) => {
              if (pageNum === -1 || pageNum === -2) {
                // Ellipsis
                return (
                  <div
                    key={`ellipsis-${index}`}
                    className="text-center text-[#E2E2E2] font-medium"
                    style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                  >
                    ...
                  </div>
                );
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`text-center font-medium hover:scale-105 transition-all duration-300 cursor-pointer ${
                    currentPage === pageNum
                      ? 'text-[#754FA8] underline'
                      : 'text-[#E2E2E2]'
                  }`}
                  style={{ fontSize: "clamp(12px, 1.56vw, 20px)" }}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-[#754FA8] hover:scale-105 cursor-pointer'
              } transition-all duration-300`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function JobsPage() {
  return (
    <Page 
      title="الوظائف الشاغرة" 
      content={<JobsContent />} 
    />
  );
}