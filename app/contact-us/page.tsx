"use client";

import { Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className=" mx-auto max-w-[1440px] bg-white relative">
      {/* Blurred Background Circles */}
      <div className="absolute w-[617px] h-[617px] left-[-114px] top-[561px] bg-[#433E78] rounded-full blur-[300px]" />
      <div className="absolute w-[504px] h-[504px] left-[1000px] top-[-148px] bg-gradient-to-br from-[#677AE4] to-[#433E78] rounded-full blur-[300px]" />
      <div className="absolute w-[253px] h-[253px] left-[999px] top-[578px] bg-[#DBA1FF] rounded-full blur-[150px]" />
      <div className="absolute w-[253px] h-[253px] left-[250px] top-[65px] bg-[#677AE4] rounded-full blur-[150px]" />

      {/* Contact Box - Now centered */}
      <div className="flex justify-center items-start py-[64px] px-4">
        <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-8 shadow-xl w-full max-w-[720px] relative z-10">
          <h1 className="text-[32px] font-bold text-gradient-primary">اتصل بنا</h1>

          {/* Info Section */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-[#433E78]">
                  البريد الالكتروني
                </span>
                <Mail size={20} className="text-[#433E78]" />
              </div>
              <p className="text-right text-sm text-black/60">
                info@dam-nu.edu.eg
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-[#433E78]">
                  العنوان
                </span>
                <MapPin size={20} className="text-[#433E78]" />
              </div>
              <p className="text-right text-sm text-black/60">
                الطريق الدولي الساحلي - مدينة دمياط الجديدة - محافظة دمياط
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full flex flex-col items-end gap-6">
            {[
              { label: "الاسم" },
              { label: "البريد الالكتروني" },
              { label: "الموضوع" },
            ].map(({ label }, idx) => (
              <div key={idx} className="flex flex-col items-end gap-1 w-full">
                <label className="text-sm font-bold text-black/60">{label}</label>
                <input
                  type="text"
                  className="w-full h-[55px] border border-[#B3B3B3] rounded-md px-4 focus:outline-none"
                />
              </div>
            ))}

            <div className="flex flex-col items-end gap-1 w-full">
              <label className="text-sm font-bold text-black/60">الرساله</label>
              <textarea
                rows={5}
                className="w-full border border-[#B3B3B3] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-[335px] h-12 bg-[#E2E2E2] text-[#B3B3B3] font-bold rounded-xl border border-[#B3B3B3] self-center"
            >
              أرسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}