"use client";
import React, { useState } from "react";

const BankingInformation = ({ showNotices = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  const bankTabs = [
    {
      name: "بنك CIB",
      englishName: "CIB Bank",
      accounts: [
        {
          id: 1,
          name: "جامعة دمياط الأهلية",
          currency: "مصري",
          accountNumber: "100068859659",
          iban: "EG300101420000100068859659",
        },
        {
          id: 2,
          name: "جامعة دمياط الأهلية",
          currency: "دولار",
          accountNumber: "100068859705",
          iban: "EG490101420000100068859705",
        },
        {
          id: 3,
          name: "جامعة دمياط الأهلية",
          currency: "يورو",
          accountNumber: "100068859713",
          iban: "EG270101420000100068859713",
        },
      ],
    },
    {
      name: "بنك مصر",
      englishName: "BANQUE MISR",
      accounts: [
        {
          id: 1,
          name: "جامعة دمياط الأهلية",
          currency: "مصري",
          accountNumber: "26301990000007898",
          iban: "EG1600020263026301990000007898",
        },
        {
          id: 2,
          name: "جامعة دمياط الأهلية",
          currency: "دولار",
          accountNumber: "26301200000001571",
          iban: "EG9100020263026301200000001571",
        },
        {
          id: 3,
          name: "جامعة دمياط الأهلية",
          currency: "يورو",
          accountNumber: "26301300000000408",
          iban: "EG0200020263026301300000000408",
        },
      ],
    },
    {
      name: "بنك التعمير والإسكان",
      englishName: "Bank Development & Housing",
      accounts: [
        {
          id: 1,
          name: "جامعة دمياط الأهلية",
          currency: "مصري",
          accountNumber: "02800001501‌50",
          iban: "EG3700380028000002800001501‌50",
        },
        {
          id: 2,
          name: "جامعة دمياط الأهلية",
          currency: "دولار",
          accountNumber: "02800001501‌51",
          iban: "EG1000380028000002800001501‌51",
        },
        {
          id: 3,
          name: "جامعة دمياط الأهلية",
          currency: "يورو",
          accountNumber: "02800001501‌52",
          iban: "EG8000380028000002800001501‌52",
        },
      ],
    },
  ];

  return (
    <div className="mb-[4vw]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            المعلومات المصرفية
          </h1>
          <p className="text-lg text-gray-600">Banking Information</p>
        </div>

        {/* Banking Information with Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="bg-gradient-to-r from-[#899FCF] to-[#433E78] text-white">
            <div className="flex">
              {bankTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 text-sm font-semibold transition-all duration-200 flex-1 relative ${
                    activeTab === index
                      ? "bg-white/20 border-b-2 border-white"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div className="text-right">
                    <div className="font-bold">{tab.name}</div>
                    <div className="text-xs opacity-90">{tab.englishName}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="px-6 py-2">
              <p className="text-sm opacity-90">جامعة دمياط الأهلية</p>
            </div>
          </div>

          {/* Tab Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    م
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    اسم الحساب
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    العملة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    رقم الحساب
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    IBAN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bankTabs[activeTab].accounts.map((account) => (
                  <tr
                    key={account.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {account.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {account.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {account.currency}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      {account.accountNumber}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      {account.iban}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showNotices && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t-4 border-blue-500 p-6">
              <div className="space-y-4 text-right">
                <div className="flex items-start justify-start space-x-3 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                  </div>
                  <p className="text-blue-800 font-semibold text-lg">
                    ستقوم إدارة الجامعة بالإعلان عن الطلاب المقبولين فور ظهور
                    التنسيق
                  </p>
                </div>

                <div className="flex items-start justify-start space-x-3 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                  </div>
                  <p className="text-amber-700 font-semibold text-lg">
                    ممنوع تحويل أي مبالغ إلا بعد إعلان نتيجة التنسيق
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankingInformation;