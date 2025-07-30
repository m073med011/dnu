// "use client";
// import React, { useState } from "react";
import BankingInformation from "./BankingInformation";

const Priceing = () => {
  // const [activeTab, setActiveTab] = useState(0);

  const faculties = [
    {
      title: "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
      description:
        "الابتكار في تعليم الحوسبة والذكاء الاصطناعي وتوظيف البحث والتقنية في خدمة المجتمع",
      fee: "55,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية التمريض",
      description:
        "التميز في تعليم التمريض الذكي، والبحوث التطبيقية، والخدمات المجتمعية",
      fee: "50,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الفنون والتصميم",
      description:
        "التميز في تعليم الفنون والتصميم المبتكر، والبحوث التطبيقية، وتعزيز الإسهام الثقافي في خدمة المجتمع",
      fee: "40,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الألسن",
      description:
        "الريادة في تعليم اللغات وتعميق التفاهم الحضاري من خلال البحث وخدمة المجتمع",
      fee: "35,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الآثار والسياحة",
      description:
        "الريادة في دراسة الآثار وتنمية السياحة من خلال التعليم والبحث وخدمة المجتمع",
      fee: "27,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الأعمال",
      description:
        "التميز في تعليم إدارة الأعمال والبحوث التطبيقية وريادة الأعمال لخدمة المجتمع",
      fee: "35,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
  ];

  // const bankTabs = [
  //   {
  //     name: "بنك CIB",
  //     englishName: "CIB Bank",
  //     accounts: [
  //       {
  //         id: 1,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "مصري",
  //         accountNumber: "26301990000007898",
  //         iban: "EG1600020263026301990000007898",
  //       },
  //       {
  //         id: 2,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "دولار",
  //         accountNumber: "26301200000001571",
  //         iban: "EG9100020263026301200000001571",
  //       },
  //       {
  //         id: 3,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "يورو",
  //         accountNumber: "26301300000000408",
  //         iban: "EG0200020263026301300000000408",
  //       },
  //     ],
  //   },
  //   {
  //     name: "بنك مصر",
  //     englishName: "BANQUE MISR",
  //     accounts: [
  //       {
  //         id: 1,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "مصري",
  //         accountNumber: "26301990000007898",
  //         iban: "EG1600020263026301990000007898",
  //       },
  //       {
  //         id: 2,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "دولار",
  //         accountNumber: "26301200000001571",
  //         iban: "EG9100020263026301200000001571",
  //       },
  //       {
  //         id: 3,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "يورو",
  //         accountNumber: "26301300000000408",
  //         iban: "EG0200020263026301300000000408",
  //       },
  //     ],
  //   },
  //   {
  //     name: "بنك التعمير والإسكان",
  //     englishName: "Bank Development & Housing",
  //     accounts: [
  //       {
  //         id: 1,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "مصري",
  //         accountNumber: "02800001501‌50",
  //         iban: "EG3700380028000002800001501‌50",
  //       },
  //       {
  //         id: 2,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "دولار",
  //         accountNumber: "02800001501‌51",
  //         iban: "EG1000380028000002800001501‌51",
  //       },
  //       {
  //         id: 3,
  //         name: "جامعة دمياط الأهلية",
  //         currency: "يورو",
  //         accountNumber: "02800001501‌52",
  //         iban: "EG8000380028000002800001501‌52",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="h-fit" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            الكليات المتاحة
          </h1>
          <p className="text-lg text-black/90">
            اكتشف الكليات المتميزة وخيارات الدراسة المتاحة
          </p>
        </div>

        {/* Modern Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#899FCF] to-[#433E78] text-white">
                  <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                    اسم الكلية
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                    الوصف
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                    المصروفات
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {faculties.map((faculty, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-6">
                      <div className="text-lg font-semibold text-gray-900 leading-6">
                        {faculty.title}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm text-gray-700 leading-relaxed max-w-md">
                        {faculty.description}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white ${faculty.feeColor} shadow-lg`}
                      >
                        {faculty.fee}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <BankingInformation />
      </div>
    </div>
  );
};

export default Priceing;
