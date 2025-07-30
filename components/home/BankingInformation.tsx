"use client";
import React, { useState } from "react";

const BankingInformation = () => {
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
          accountNumber: "10006885965",
          iban: "EG3001014200001000688596559",
        },
        {
          id: 2,
          name: "جامعة دمياط الأهلية",
          currency: "دولار",
          accountNumber: "10006885970",
          iban: "EG4901014200001000688597055",
        },
        {
          id: 3,
          name: "جامعة دمياط الأهلية",
          currency: "يورو",
          accountNumber: "10006885971",
          iban: "EG2701014200001000688597133",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">المعلومات المصرفية</h1>
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
        </div>
      </div>
    </div>
  );
};

export default BankingInformation;