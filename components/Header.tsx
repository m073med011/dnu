"use client";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { FC, useState, useEffect } from "react";
import { Dropdown, LifeUniversityDropdown } from "./Dropdown";

interface NavItem {
  label: string;
  hasDropdown: boolean;
  dropdown?: unknown;
}

const navItems: NavItem[] = [
  {
    label: "المراكز والوحدات",
    hasDropdown: true,
    // dropdown: [
    //   { label: "الوحدة 1", customStyle: "bg-blue-100 text-red-500" },
    //   { label: "الوحدة 2", customStyle: "bg-yellow-100 text-blue-500" },
    // ],
  },
  { label: "مكتب التنسيق والقبول", hasDropdown: false },
  {
    label: "الحياة الجامعية",
    hasDropdown: false,
    // dropdown: [
    //   { label: "نشاط 1", customStyle: "bg-green-100 text-purple-500" },
    //   { label: "نشاط 2", customStyle: "bg-gray-100 text-orange-500" },
    // ],
  },
  { label: "الكليات والبرامج", hasDropdown: false },
  {
    label: "عن الجامعة",
    hasDropdown: true,
    // dropdown: [
    //   {
    //     column: "ما توفره الجامعة",
    //     items: [
    //       "مكتبة رقمية (كتب ومحاضرات)",
    //       "المقررات الإلكترونية",
    //       "برامج التدريب والتأهيل",
    //       "عضويات طلابية أو أكاديمية",
    //       "منتديات طلابية أو مجتمعية",
    //     ],
    //   },
    //   {
    //     column: "دليل الجامعة",
    //     items: [
    //       "مجلس الأمناء",
    //       "كلمة رئيس الجامعة",
    //       "رؤية و رسالة الجامعة",
    //       "ملفات هامة",
    //       "الاسسئلة الشائعة",
    //       "الوظائف الشاغرة",
    //       "الخدمات الالكترونية",
    //       "اتصل بنا",
    //     ],
    //   },
    // ],
  },
  { label: "الرئيسية", hasDropdown: false },
];

const Header: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header dir="rtl" className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full sm:max-w-[1440px] mx-0 px-0 sm:mx-auto sm:px-8 lg:px-12">
        <div
          className={`flex items-center lg:justify-around justify-between px-12 lg:px-0  transition-all duration-300 ${
            scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24 lg:h-28"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              className={`object-contain rounded-full transition-all duration-300 ${
                scrolled 
                  ? "h-10 w-10 sm:h-12 sm:w-12" 
                  : "h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <div
                  className="flex items-center cursor-pointer relative after:absolute after:bottom-[-2px] after:right-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                  onClick={() =>
                    item.hasDropdown && handleDropdownToggle(item.label)
                  }
                >
                  <span className="text-black font-bold text-sm xl:text-base whitespace-nowrap">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <div className="ml-2">
                      {openDropdown === item.label ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  )}
                </div>

                {item.hasDropdown &&
                  openDropdown === item.label &&
                  (item.label === "الحياة الجامعية" ? (
                    <LifeUniversityDropdown
                      dropdown={item.dropdown as NavItem[]}
                    />
                  ) : (
                    <Dropdown
                      label={item.label}
                      dropdown={item.dropdown as NavItem[]}
                    />
                  ))}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setOpenDropdown(null);
              }}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <div
                    className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-gray-50 rounded-md"
                    onClick={() =>
                      item.hasDropdown && handleDropdownToggle(item.label)
                    }
                  >
                    <span className="font-bold text-black text-base">
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <div className="ml-2">
                        {openDropdown === item.label ? (
                          <ChevronUp size={20} className="text-gray-500" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500" />
                        )}
                      </div>
                    )}
                  </div>

                  {item.hasDropdown && openDropdown === item.label && (
                    <div className="mt-2 mr-8 pr-4 border-r-2 border-gray-200">
                      {item.label === "الحياة الجامعية" ? (
                        <LifeUniversityDropdown
                          dropdown={item.dropdown as NavItem[]}
                        />
                      ) : (
                        <Dropdown
                          label={item.label}
                          dropdown={item.dropdown as NavItem[]}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Backdrop for desktop dropdowns */}
      {openDropdown && !isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;