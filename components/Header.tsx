"use client";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { FC, useState } from "react";
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
    dropdown: [
      { label: "الوحدة 1", customStyle: "bg-blue-100 text-red-500" },
      { label: "الوحدة 2", customStyle: "bg-yellow-100 text-blue-500" },
    ],
  },
  { label: "مكتب التنسيق والقبول", hasDropdown: false },
  {
    label: "الحياة الجامعية",
    hasDropdown: true,
    dropdown: [
      { label: "نشاط 1", customStyle: "bg-green-100 text-purple-500" },
      { label: "نشاط 2", customStyle: "bg-gray-100 text-orange-500" },
    ],
  },
  { label: "الكليات والبرامج", hasDropdown: false },
  {
    label: "عن الجامعة",
    hasDropdown: true,
    dropdown: [
      {
        column: "ما توفره الجامعة",
        items: [
          "مكتبة رقمية (كتب ومحاضرات)",
          "المقررات الإلكترونية",
          "برامج التدريب والتأهيل",
          "عضويات طلابية أو أكاديمية",
          "منتديات طلابية أو مجتمعية",
        ],
      },
      {
        column: "دليل الجامعة",
        items: [
          "مجلس الأمناء",
          "كلمة رئيس الجامعة",
          "رؤية و رسالة الجامعة",
          "ملفات هامة",
          "الاسسئلة الشائعة",
          "الوظائف الشاغرة",
          "الخدمات الالكترونية",
          "اتصل بنا",
        ],
      },
    ],
  },
  { label: "الرئيسية", hasDropdown: false },
];

const Header: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[clamp(320px,100vw,1440px)] bg-white">
      <div className="flex justify-between items-center h-[clamp(46.80px,12.19vw,175.50px)] px-[clamp(24.00px,6.25vw,90.00px)]">
        {/* Logo */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[clamp(12px,3.13vw,45px)]">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className="flex  items-center gap-1 cursor-pointer relative after:absolute after:bottom-[-2px] after:right-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                onClick={() =>
                  item.hasDropdown && handleDropdownToggle(item.label)
                }
              >
                {item.hasDropdown &&
                  (openDropdown === item.label ? (
                    <ChevronUp size={16} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400" />
                  ))}
                <span className="font-bold text-black font-cairo">
                  {item.label}
                </span>
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
        <Image
          src={logo}
          alt="Logo"
          className="object-contain w-auto h-[clamp(30.00px,7.81vw,112.50px)] rounded-full"
        />
        

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-end px-6 py-4 bg-white shadow-md gap-4">
          {navItems.map((item, index) => (
            <div key={index} className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  item.hasDropdown && handleDropdownToggle(item.label)
                }
              >
                <span className="font-bold text-black font-cairo">
                  {item.label}
                </span>
                {item.hasDropdown &&
                  (openDropdown === item.label ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>

              {/* Mobile Dropdown Items */}
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
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {(openDropdown || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setOpenDropdown(null);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
