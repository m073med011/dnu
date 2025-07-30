import React from 'react';

const Priceing = () => {
  const faculties = [
    {
      title: "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
      description: "الابتكار في تعليم الحوسبة والذكاء الاصطناعي وتوظيف البحث والتقنية في خدمة المجتمع",
      fee: "55,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية التمريض",
      description: "التميز في تعليم التمريض الذكي، والبحوث التطبيقية، والخدمات المجتمعية",
      fee: "50,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الفنون والتصميم",
      description: "التميز في تعليم الفنون والتصميم المبتكر، والبحوث التطبيقية، وتعزيز الإسهام الثقافي في خدمة المجتمع",
      fee: "40,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الألسن",
      description: "الريادة في تعليم اللغات وتعميق التفاهم الحضاري من خلال البحث وخدمة المجتمع",
      fee: "35,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الآثار والسياحة",
      description: "الريادة في دراسة الآثار وتنمية السياحة من خلال التعليم والبحث وخدمة المجتمع",
      fee: "27,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
    {
      title: "كلية الأعمال",
      description: "التميز في تعليم إدارة الأعمال والبحوث التطبيقية وريادة الأعمال لخدمة المجتمع",
      fee: "35,000 EGP",
      feeColor: "bg-gradient-to-r from-[#899FCF] to-[#433E78]",
    },
  ];

  return (
    <div className="min-h-screen mb-8 " dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">الكليات المتاحة</h1>
          <p className="text-lg text-black/90">اكتشف الكليات المتميزة وخيارات الدراسة المتاحة</p>
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

        {/* Banking Information */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#899FCF] to-[#433E78] text-white px-6 py-4">
            <h2 className="text-xl font-bold">معلومات الحسابات البنكية - بنك CIB</h2>
            <p className="text-sm opacity-90 mt-1">جامعة دمياط الأهلية</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">م</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">اسم الحساب</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">العملة</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">رقم الحساب</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">IBAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">1</td>
                  <td className="px-4 py-3 text-sm text-gray-900">جامعة دمياط الأهلية</td>
                  <td className="px-4 py-3 text-sm text-gray-900">مصري</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">26301990000007898</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">EG1600020263026301990000007898</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">2</td>
                  <td className="px-4 py-3 text-sm text-gray-900">جامعة دمياط الأهلية</td>
                  <td className="px-4 py-3 text-sm text-gray-900">دولار</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">26301200000001571</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">EG9100020263026301200000001571</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">3</td>
                  <td className="px-4 py-3 text-sm text-gray-900">جامعة دمياط الأهلية</td>
                  <td className="px-4 py-3 text-sm text-gray-900">يورو</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">26301300000000408</td>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">EG0200020263026301300000000408</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceing;
