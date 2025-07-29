"use client";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/vercel.svg";
import { FC, useState, useEffect } from "react";

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  href?: string;
  external?: boolean; // Add this to identify external links
}

const navItems: NavItem[] = [
  {
    label: "المراكز والوحدات",
    hasDropdown: true,
    dropdown: [
      { label: "مركز التميز والتدريب", href: "#" },
      // { label: "مركز التطوير", href: "#" },
      // { label: "وحدة الجودة", href: "#" },
      // { label: "مركز الحاسوب", href: "#" },
    ],
  },
  { label: "القبول والتسجيل", hasDropdown: false, href: "/Registration" },

  { label: "مكتب التنسيق والقبول", hasDropdown: false, href: "/CoordinationOffice" },
  {
    label: "الحياة الجامعية",
    hasDropdown: true,
    dropdown: [
      { label: "بوابه الخدمات الطلابيه", href: "#" },
      { label: "دليل الطالب", href: "#" },
      { label: "الميثاق الاخلاقي لطالب", href: "#" },
      { label: "بنك المعرفه المصري", href: "https://www.ekb.eg/", external: true },
      { label: "الاسكان الجامعي", href: "#" },
      
    ],
  },
  { label: "الكليات والبرامج", hasDropdown: false, href: "/collages" },
  {
    label: "عن الجامعة",
    hasDropdown: true,
    dropdown: [
      { label: "مجلس الأمناء", href: "UniversityBoardOfTrustees" },
      { label: "كلمة رئيس الجامعة", href: "UniversityPresidentSpeech" },
      { label: "رؤية ورسالة الجامعة", href: "UniversityVision" },
      { label: "ملفات هامة", href: "ImportantFiles" },
      { label: "الأسئلة الشائعة", href: "Q&A" },
      { label: "الوظائف الشاغرة", href: "jobs" },
      { label: "الخدمات الإلكترونية", href: "UniversitySystems" },
      { label: "اتصل بنا", href: "contact-us" },
    ],
  },
  { label: "الرئيسية", hasDropdown: false, href: "/" },
];

// Dropdown Component for Desktop
const Dropdown: FC<{ items: DropdownItem[] }> = ({ items }) => {
  return (
    <div className="absolute top-full right-0 w-64 bg-white shadow-lg border border-gray-200 py-4 z-50">
      {/* Triangle Arrow */}
      <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-10"></div>

      <div className="space-y-1 relative z-20">
        {items.map((item, index) => (
          item.external ? (
            <a
              key={index}
              href={item.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-right"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={index}
              href={item.href || "#"}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-right"
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

// Mobile Sidebar Component
const MobileSidebar: FC<{
  isOpen: boolean;
  onClose: () => void;
  openDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}> = ({ isOpen, onClose, openDropdown, onDropdownToggle }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span className="text-lg font-bold text-gray-900">القائمة</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1" dir="rtl">
            {navItems.map((item, index) => (
              <div key={index} className="px-4">
                <div
                  className="flex items-center justify-between cursor-pointer py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => {
                    if (item.hasDropdown) {
                      onDropdownToggle(item.label);
                    } else if (item.href) {
                      // Navigate to the href
                      window.location.href = item.href;
                      onClose(); // Close sidebar after navigation
                    } else {
                      // Handle navigation for non-dropdown items
                      console.log(`Navigating to: ${item.label}`);
                      onClose(); // Close sidebar after navigation
                    }
                  }}
                >
                  <span className="font-semibold text-gray-900 text-base">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <div className="ml-3">
                      {openDropdown === item.label ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </div>
                  )}
                </div>

                {/* Dropdown Items */}
                {item.hasDropdown &&
                  openDropdown === item.label &&
                  item.dropdown && (
                    <div className="mt-2 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                      <div className="space-y-0">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          dropdownItem.external ? (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.href || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-3 px-6 pr-12 text-gray-600 hover:text-blue-600 hover:bg-white border-b border-gray-200 last:border-b-0 transition-colors duration-200 text-right relative"
                            >
                              <span className="text-sm">
                                • {dropdownItem.label}
                              </span>
                            </a>
                          ) : (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href || "#"}
                              onClick={onClose}
                              className="block py-3 px-6 pr-12 text-gray-600 hover:text-blue-600 hover:bg-white border-b border-gray-200 last:border-b-0 transition-colors duration-200 text-right relative"
                            >
                              <span className="text-sm">
                                • {dropdownItem.label}
                              </span>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

const Header: FC = () => {
  const pathname = usePathname();
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);

  // Check if current path requires white background
  const shouldHaveWhiteBackground = pathname === '/contact-us' || pathname === '/Registration';

  const handleMobileDropdownToggle = (label: string) => {
    console.log(`Toggling dropdown for: ${label}`);
    console.log(`Current openMobileDropdown: ${openMobileDropdown}`);
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setOpenMobileDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSidebarOpen) {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSidebarOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full ${scrolled || shouldHaveWhiteBackground ? "bg-white shadow-md" : ""}`}>
        <div className="w-full sm:max-w-[1440px] mx-0 px-0 sm:mx-auto sm:px-8 lg:px-12">
          <div
            className={`flex items-center lg:justify-around justify-between px-12 lg:px-0 transition-all duration-300 ${
              scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24 lg:h-28"
            }`}
          >
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && setHoveredDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setHoveredDropdown(null)
                  }
                >
                  {item.hasDropdown ? (
                    <div className="flex items-center cursor-pointer relative after:absolute after:bottom-[-2px] after:right-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                      <span className={` ${scrolled || shouldHaveWhiteBackground ? "text-black" : "text-white"} font-bold text-sm xl:text-base whitespace-nowrap`}>
                        {item.label}
                      </span>
                      <div className="ml-2">
                        {hoveredDropdown === item.label ? (
                          <ChevronUp size={16} className="text-gray-400" />
                        ) : (
                          <ChevronDown size={16} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center cursor-pointer relative after:absolute after:bottom-[-2px] after:right-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      <span className={` ${scrolled || shouldHaveWhiteBackground ? "text-black" : "text-white"} font-bold text-sm xl:text-base whitespace-nowrap`}>
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {item.hasDropdown &&
                    hoveredDropdown === item.label &&
                    item.dropdown && <Dropdown items={item.dropdown} />}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 ${
                  isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                aria-label="Open sidebar menu"
                disabled={isSidebarOpen}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  className={`object-contain w-[clamp(90.00px,6vw,130.00px)]  rounded-full transition-all duration-300 cursor-pointer ${
                    scrolled
                      ? "translate-y-6"
                      : ""
                  }`}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        openDropdown={openMobileDropdown}
        onDropdownToggle={handleMobileDropdownToggle}
      />
    </>
  );
};

export default Header;