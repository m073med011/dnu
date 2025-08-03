"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getData } from "@/libs/axios/server";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  slug: string;
  keywords: string;
  cover: string;
  image: string;
  views: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  created_at?: string;
  updated_at?: string;
}

interface ApiResponse {
  status: boolean;
  msg: string;
  data: {
    blog: BlogPost;
    latest_blogs: BlogPost[];
  };
}

const PremiumBlogPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [blogData, setBlogData] = useState<{
    blog: BlogPost | null;
    latestBlogs: BlogPost[];
  }>({
    blog: null,
    latestBlogs: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        setError(null);
        const response: ApiResponse = await getData(`/blogs/${slug}`);
        if (response.status && response.data.blog) {
          setBlogData({
            blog: response.data.blog,
            latestBlogs: response.data.latest_blogs || [],
          });
        } else {
          setError("المقال غير موجود");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("حدث خطأ في تحميل المقال");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPost();
  }, [slug]);

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.opacity = "1"; // Prevent FOUC
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return new Date().toLocaleDateString("ar-EG");
    return new Date(dateString).toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const sharePost = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("تم نسخ الرابط بنجاح!");
    } catch (err) {
      console.error("Failed to copy:", err);
      showToast("فشل في نسخ الرابط");
    }
  };

  const showToast = (message: string) => {
    const toast = document.createElement("div");
    toast.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-[Cairo] animate-fade-in";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const cleanHtmlContent = (html: string) => {
    return html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-700 font-[Cairo] text-lg animate-bounce">
            جاري تحميل المقال...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md mx-4 animate-slide-up">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-red-600 mb-4 font-[Cairo] animate-fade-in">
            {error}
          </h2>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-[Cairo] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            العودة للخلف
          </button>
        </div>
      </div>
    );
  }

  if (!blogData.blog) return null;

  const { blog, latestBlogs } = blogData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-60px) scale(0.98);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(60px) scale(0.98);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInFromTop {
          0% {
            transform: translateY(-40px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.92);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Main Animations */
        .animate-slide-left {
          animation: slideInFromLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideInFromRight 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-slide-top {
          animation: slideInFromTop 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideInFromBottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        /* Delay Classes */
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-delay-700 {
          animation-delay: 0.7s;
        }

        /* Performance Optimization */
        .animate-slide-left,
        .animate-slide-right,
        .animate-slide-up,
        .animate-fade-in,
        .animate-scale-in {
          will-change: transform, opacity;
        }

        /* Hover Effects */
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-lift:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.18);
        }

        .hover-glow:hover {
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.35);
        }

        .hover-rotate:hover {
          transform: rotate(3deg) scale(1.03);
        }

        .hover-shimmer {
          position: relative;
          overflow: hidden;
        }

        .hover-shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-shimmer:hover::before {
          left: 120%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-8 border border-white/20 hover-lift hover-glow transition-all duration-700 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <div className="relative h-80 md:h-96 overflow-hidden group">
                <Image
                  src={blog.cover || blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg hover-lift hover:bg-white transition-all duration-300">
                  <div className="text-sm text-gray-600 font-[Cairo] text-center">
                    {formatDate(blog.created_at)}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      isVisible
                        ? "animate-fade-in animate-delay-200"
                        : "opacity-0"
                    }`}
                  >
                    {blog.keywords.split(",").map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-[Cairo] font-medium hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer hover-shimmer"
                        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                      >
                        {keyword.trim()}
                      </span>
                    ))}
                  </div>
                  <h1
                    className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[Cairo] text-right leading-tight hover:text-blue-900 ${
                      isVisible
                        ? "animate-slide-up animate-delay-300"
                        : "opacity-0"
                    }`}
                  >
                    {blog.title}
                  </h1>
                  <div
                    className={`text-xl text-gray-600 font-[Cairo] text-right leading-relaxed ${
                      isVisible
                        ? "animate-fade-in animate-delay-400"
                        : "opacity-0"
                    }`}
                  >
                    {cleanHtmlContent(blog.meta_description)}
                  </div>
                </div>
                <div
                  className={`flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-200 ${
                    isVisible
                      ? "animate-slide-up animate-delay-500"
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-600 font-[Cairo] group hover-lift">
                      <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-all duration-300 group-hover:rotate-12">
                        <svg
                          className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">
                        {blog.views} مشاهدة
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 font-[Cairo] group hover-lift">
                      <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-all duration-300 group-hover:rotate-12">
                        <svg
                          className="w-4 h-4 text-green-600 transition-transform duration-300 group-hover:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium group-hover:text-green-600 transition-colors duration-300">
                        Slug: {blog.slug}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={sharePost}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 font-[Cairo] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 hover-shimmer group"
                  >
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      مشاركة المقال
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover-lift hover-glow transition-all duration-700 ${
                isVisible ? "animate-slide-left animate-delay-300" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[Cairo] text-right hover:text-blue-900 transition-colors duration-300">
                محتوى المقال
              </h2>
              <div
                className="prose prose-lg max-w-none font-[Cairo] text-gray-800 leading-relaxed text-right hover:text-gray-900 transition-colors duration-300"
                style={{ direction: "rtl" }}
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Blog Meta Information */}
            <div
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 mb-6 border border-white/20 sticky top-28 hover-lift hover-glow transition-all duration-700 ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-[Cairo] text-right hover:text-blue-900 transition-colors duration-300">
                معلومات المقال
              </h3>
              <div className="space-y-4">
                <div
                  className={`p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover-lift transition-all duration-300 hover:shadow-lg group ${
                    isVisible
                      ? "animate-fade-in animate-delay-400"
                      : "opacity-0"
                  }`}
                >
                  <h4 className="font-semibold text-gray-700 mb-2 font-[Cairo] group-hover:text-blue-700 transition-colors duration-300">
                    العنوان الوصفي:
                  </h4>
                  <p className="text-gray-600 text-sm font-[Cairo] group-hover:text-gray-800 transition-colors duration-300">
                    {blog.meta_title}
                  </p>
                </div>
                <div
                  className={`p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover-lift transition-all duration-300 hover:shadow-lg group ${
                    isVisible
                      ? "animate-fade-in animate-delay-500"
                      : "opacity-0"
                  }`}
                >
                  <h4 className="font-semibold text-gray-700 mb-2 font-[Cairo] group-hover:text-blue-700 transition-colors duration-300">
                    الكلمات المفتاحية:
                  </h4>
                  <p className="text-gray-600 text-sm font-[Cairo] group-hover:text-gray-800 transition-colors duration-300">
                    {blog.meta_keywords}
                  </p>
                </div>
                <div
                  className={`p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover-lift transition-all duration-300 hover:shadow-lg group ${
                    isVisible
                      ? "animate-fade-in animate-delay-600"
                      : "opacity-0"
                  }`}
                >
                  <h4 className="font-semibold text-gray-700 mb-2 font-[Cairo] group-hover:text-blue-700 transition-colors duration-300">
                    رقم المقال:
                  </h4>
                  <p className="text-gray-600 text-sm font-[Cairo] group-hover:text-gray-800 transition-colors duration-300">
                    #{blog.id}
                  </p>
                </div>
                {blog.updated_at && (
                  <div
                    className={`p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover-lift transition-all duration-300 hover:shadow-lg group ${
                      isVisible
                        ? "animate-fade-in animate-delay-700"
                        : "opacity-0"
                    }`}
                  >
                    <h4 className="font-semibold text-gray-700 mb-2 font-[Cairo] group-hover:text-blue-700 transition-colors duration-300">
                      آخر تحديث:
                    </h4>
                    <p className="text-gray-600 text-sm font-[Cairo] group-hover:text-gray-800 transition-colors duration-300">
                      {formatDate(blog.updated_at)}
                    </p>
                  </div>
                )}
              </div>

              {blog.image !== blog.cover && (
                <div
                  className={`mt-6 ${
                    isVisible
                      ? "animate-scale-in animate-delay-600"
                      : "opacity-0"
                  }`}
                >
                  <h4 className="font-semibold text-gray-700 mb-3 font-[Cairo] hover:text-blue-700 transition-colors duration-300">
                    صورة إضافية:
                  </h4>
                  <div className="relative h-32 rounded-2xl overflow-hidden group hover-lift">
                    <Image
                      src={blog.image}
                      alt="صورة إضافية"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Latest Blogs */}
            {latestBlogs.length > 0 && (
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-white/20 hover-lift hover-glow transition-all duration-700 ${
                  isVisible
                    ? "animate-slide-right animate-delay-400"
                    : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-[Cairo] text-right hover:text-blue-900 transition-colors duration-300">
                  أحدث المقالات
                </h3>
                <div className="space-y-4">
                  {latestBlogs.slice(0, 5).map((latestBlog, index) => (
                    <div
                      key={latestBlog.id}
                      className={`p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 cursor-pointer hover-lift hover:shadow-lg group hover-shimmer ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      onClick={() => router.push(`/blog/${latestBlog.slug}`)}
                    >
                      <h4 className="font-semibold text-gray-800 mb-2 font-[Cairo] text-right text-sm line-clamp-2 group-hover:text-blue-800 transition-colors duration-300">
                        {latestBlog.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-[Cairo]">
                        <span className="group-hover:text-blue-600 transition-colors duration-300">
                          {latestBlog.views} مشاهدة
                        </span>
                        <span className="group-hover:text-blue-600 transition-colors duration-300">
                          {formatDate(latestBlog.created_at)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div
          className={`mt-12 text-center ${
            isVisible ? "animate-slide-up animate-delay-600" : "opacity-0"
          }`}
        >
          <button
            onClick={() => router.back()}
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl hover:from-gray-700 hover:to-gray-800 font-[Cairo] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 hover-shimmer group"
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              العودة للأخبار
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumBlogPage;
