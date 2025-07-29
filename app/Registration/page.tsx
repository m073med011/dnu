"use client";
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Award,
  School,
  Phone,
  MapPin,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Define the type for form data
interface FormData {
  // Personal Info
  arabicName: string;
  englishName: string;
  nationality: string;
  state: string;
  city: string;
  religion: string;
  birthCertNumber: string;
  passportNumber: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  // Preferences
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
  additionalNotes: string;
  // Certificate Info
  certificateType: string;
  schoolName: string;
  totalGrade: string;
  percentage: string;
  sittingNumber: string;
  obtainedGrade: string;
  certificateCountry: string;
  certificateYear: string;
  // Research Info
  hasTeachingExperience: boolean;
  parentName: string;
  universityId: string;
  faculty: string;
  studyYear: string;
  // Guardian Info
  guardianName: string;
  guardianNationality: string;
  guardianJob: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianMobile: string;
  guardianNationalId: string;
  workPermit: string;
  // Contact Info
  address: string;
  mobile: string;
  alternateMobile: string;
  email: string;
  homePhone: string;
}

// Define the type for errors
type FormErrors = Partial<Record<keyof FormData, string>>;

// Main Component
const UniversityRegistrationForm = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    // Personal Info
    arabicName: "",
    englishName: "",
    nationality: "",
    state: "",
    city: "",
    religion: "",
    birthCertNumber: "",
    passportNumber: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    // Preferences
    firstChoice: "",
    secondChoice: "",
    thirdChoice: "",
    additionalNotes: "",
    // Certificate Info
    certificateType: "",
    schoolName: "",
    totalGrade: "",
    percentage: "",
    sittingNumber: "",
    obtainedGrade: "",
    certificateCountry: "",
    certificateYear: "",
    // Research Info
    hasTeachingExperience: false,
    parentName: "",
    universityId: "",
    faculty: "",
    studyYear: "",
    // Guardian Info
    guardianName: "",
    guardianNationality: "",
    guardianJob: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianMobile: "",
    guardianNationalId: "",
    workPermit: "",
    // Contact Info
    address: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    homePhone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const tabs = [
    { id: 1, name: "البيانات الشخصية", progress: 17 },
    { id: 2, name: "معلومات الاتصال", progress: 29 },
    { id: 3, name: "معلومات ولي الأمر", progress: 43 },
    { id: 4, name: "معلومات البحوث", progress: 57 },
    { id: 5, name: "بيانات الشهادة", progress: 71 },
    { id: 6, name: "الرغبات والمصاريف", progress: 86 },
  ];

  const validateField = (
    name: keyof FormData,
    value: string | boolean
  ): string => {
    if (value === "" || value === false) {
      return "هذا الحقل مطلوب";
    }
    return "";
  };

  const validateTab = (tabId: number): FormErrors => {
    const newErrors: FormErrors = {};
    switch (tabId) {
      case 1:
        [
          "arabicName",
          "englishName",
          "nationality",
          "state",
          "city",
          "religion",
          "birthYear",
          "birthMonth",
          "birthDay",
        ].forEach((field) => {
          const error = validateField(
            field as keyof FormData,
            formData[field as keyof FormData]
          );
          if (error) newErrors[field as keyof FormData] = error;
        });
        break;
      case 2:
        ["address", "mobile", "email"].forEach((field) => {
          const error = validateField(
            field as keyof FormData,
            formData[field as keyof FormData]
          );
          if (error) newErrors[field as keyof FormData] = error;
        });
        break;
      case 3:
        [
          "guardianName",
          "guardianNationality",
          "guardianJob",
          "guardianEmail",
          "guardianMobile",
          "guardianNationalId",
        ].forEach((field) => {
          const error = validateField(
            field as keyof FormData,
            formData[field as keyof FormData]
          );
          if (error) newErrors[field as keyof FormData] = error;
        });
        break;
      case 4:
        if (formData.hasTeachingExperience) {
          ["parentName", "universityId", "faculty", "studyYear"].forEach(
            (field) => {
              const error = validateField(
                field as keyof FormData,
                formData[field as keyof FormData]
              );
              if (error) newErrors[field as keyof FormData] = error;
            }
          );
        }
        break;
      case 5:
        [
          "certificateType",
          "schoolName",
          "totalGrade",
          "percentage",
          "sittingNumber",
          "obtainedGrade",
          "certificateCountry",
          "certificateYear",
        ].forEach((field) => {
          const error = validateField(
            field as keyof FormData,
            formData[field as keyof FormData]
          );
          if (error) newErrors[field as keyof FormData] = error;
        });
        break;
      case 6:
        ["firstChoice"].forEach((field) => {
          const error = validateField(
            field as keyof FormData,
            formData[field as keyof FormData]
          );
          if (error) newErrors[field as keyof FormData] = error;
        });
        break;
      default:
        break;
    }
    return newErrors;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    if (field === "hasTeachingExperience" && value === false) {
      setFormData((prev) => ({
        ...prev,
        hasTeachingExperience: false,
        parentName: "",
        universityId: "",
        faculty: "",
        studyYear: "",
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.parentName;
        delete newErrors.universityId;
        delete newErrors.faculty;
        delete newErrors.studyYear;
        return newErrors;
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    const tabErrors = validateTab(activeTab);
    if (Object.keys(tabErrors).length > 0) {
      setErrors(tabErrors);
      return;
    }
    if (activeTab === 6) {
      handleSubmit();
    } else {
      setActiveTab(Math.min(activeTab + 1, 6));
    }
  };

  const handleSubmit = async () => {
    const tabErrors = validateTab(activeTab);
    if (Object.keys(tabErrors).length > 0) {
      setErrors(tabErrors);
      return;
    }

    setIsSubmitting(true);

    const formattedData = {
      // الصفحة 1: البيانات الشخصية
      student_english_name: formData.englishName,
      student_arabic_name: formData.arabicName,
      religion: formData.religion,
      nationality: formData.nationality,
      governorate: formData.state,
      city: formData.city,
      passport_number: formData.passportNumber,
      birth_certificate_number: formData.birthCertNumber,
      birthday_day: formData.birthDay,
      birthday_month: formData.birthMonth,
      birthday_year: formData.birthYear,
      // الصفحة 2: معلومات الاتصال
      address: formData.address,
      phone: formData.mobile,
      other_mobile_number: formData.alternateMobile,
      email: formData.email,
      home_number: formData.homePhone,
      // الصفحة 3: معلومات ولي الأمر
      guardian_name: formData.guardianName,
      guardian_nationality: formData.guardianNationality,
      guardian_job: formData.guardianJob,
      guardian_email: formData.guardianEmail,
      guardian_mobile: formData.guardianMobile,
      guardian_telephone: formData.guardianPhone,
      guardian_national_id: formData.guardianNationalId,
      guardian_workplace: formData.workPermit,
      // الصفحة 4: معلومات الإخوة
      has_sibling_at_hue: formData.hasTeachingExperience ? 1 : 0,
      sibling_name: formData.parentName,
      sibling_hue_id: formData.universityId,
      sibling_faculty: formData.faculty,
      sibling_year: formData.studyYear,
      // الصفحة 5: بيانات الشهادة
      certificate_type: formData.certificateType,
      school_name: formData.schoolName,
      percentage: formData.percentage,
      total_degree: formData.totalGrade,
      obtained_degree: formData.obtainedGrade,
      seat_no: formData.sittingNumber,
      year: formData.certificateYear,
      certificate_country: formData.certificateCountry,
      // الصفحة 6: الرغبات والمصاريف
      first_choice: formData.firstChoice,
      second_choice: formData.secondChoice,
      third_choice: formData.thirdChoice,
      notes: formData.additionalNotes,
      agree_terms: 1,
    };

    try {
      const response = await axios.post(
        "https://peachpuff-kingfisher-426403.hostingersite.com/api/pre-register",
        formattedData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
      } else {
        const resData = response.data;
        if (resData.errors) {
          Object.keys(resData.errors).forEach((field) => {
            resData.errors[field].forEach((msg: string) => {
              toast.error(msg, {
                duration: 5000,
                style: {
                  direction: "rtl",
                  textAlign: "right",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#d32f2f",
                  border: "1px solid #d32f2f",
                  borderRadius: "8px",
                },
              });
            });
          });
        }
        if (resData.message) {
          toast.error(resData.message, {
            style: { direction: "rtl", textAlign: "right" },
          });
        }
      }
    } catch (error) {
      console.error("Network error:", error);

      if (axios.isAxiosError(error) && error.response) {
        const resData = error.response.data as {
          message?: string;
          errors?: Record<string, string[]>;
        };

        if (resData.errors) {
          Object.keys(resData.errors).forEach((field) => {
            resData.errors![field].forEach((msg) => {
              toast.error(msg, {
                duration: 5000,
                style: {
                  direction: "rtl",
                  textAlign: "right",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#d32f2f",
                  border: "1px solid #d32f2f",
                  borderRadius: "8px",
                },
              });
            });
          });
        }

        if (resData.message) {
          toast.error(resData.message, {
            style: { direction: "rtl", textAlign: "right" },
          });
        }
      } else if (error instanceof Error) {
        toast.error(
          "حدث خطأ في الاتصال. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
          {
            style: { direction: "rtl", textAlign: "right" },
          }
        );
      } else {
        toast.error("حدث خطأ غير معروف.", {
          style: { direction: "rtl", textAlign: "right" },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#754FA8] to-[#677AE4] p-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-sm rounded-t-3xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">جد</div>
            <h1 className="text-2xl font-bold mb-2">جامعة دمياط الأهلية</h1>
            <p className="text-sm opacity-90">
              نموذج التسجيل المبدئي للعام الدراسي 2025-2026
            </p>
          </div>
          {/* Success Message */}
          <div className="bg-white rounded-b-3xl p-8 shadow-2xl">
            <div className="text-center space-y-6">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              {/* Main Message */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  تم تأكيد التسجيل
                </h2>
                <p className="text-gray-600">
                  تم إرسال طلبك بنجاح وسيتم مراجعته قريباً
                </p>
              </div>
              {/* Application Details */}
              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">رقم الطلب:</span>
                  <span className="font-bold text-gray-800">#REG2025001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">
                    تاريخ التسجيل:
                  </span>
                  <span className="font-bold text-gray-800">28 يوليو 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">الحالة:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    قيد المراجعة
                  </span>
                </div>
              </div>
              {/* Information Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-right">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <svg
                    className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-amber-800 text-sm">
                    <p className="font-medium mb-1">هام:</p>
                    <p>
                      سيتم التواصل معك قريباً عبر البريد الإلكتروني أو الهاتف
                      المحمول لإكمال إجراءات التسجيل. يرجى التأكد من صحة
                      بياناتك.
                    </p>
                  </div>
                </div>
              </div>
              {/* Next Steps */}
              <div className="bg-cyan-50 rounded-lg p-6 text-right">
                <h3 className="font-bold text-cyan-800 mb-3 flex items-center justify-end space-x-2 space-x-reverse">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>الخطوات التالية:</span>
                </h3>
                <ul className="space-y-2 text-cyan-700 text-sm">
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-cyan-500">•</span>
                    <span>سيتم مراجعة طلبك خلال 2-3 أيام عمل</span>
                  </li>
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-cyan-500">•</span>
                    <span>ستتلقى رسالة تأكيد عبر البريد الإلكتروني</span>
                  </li>
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-cyan-500">•</span>
                    <span>قد نتواصل معك لطلب مستندات إضافية</span>
                  </li>
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-cyan-500">•</span>
                    <span>احتفظ برقم الطلب للمتابعة</span>
                  </li>
                </ul>
              </div>
              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => window.print()}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  <span>طباعة تأكيد التسجيل</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setActiveTab(1);
                  }}
                  className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  العودة للصفحة الرئيسية
                </button>
              </div>
            </div>
            {/* Contact Information Footer */}
            <div className="bg-gray-600 text-white p-4 mt-8 -mb-8 -mx-8 rounded-b-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">هاتف الجامعة</span>
                  </div>
                  <p className="text-xs">057-2345678</p>
                  <p className="text-xs">فترة الصباح - الساعة 8:00</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm font-medium">
                      البريد الإلكتروني
                    </span>
                  </div>
                  <p className="text-xs">admissions@damiettauniv.edu.eg</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">الموقع</span>
                  </div>
                  <p className="text-xs">057-2345678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              className: "text-right font-medium",
              duration: 5000,
              style: {
                direction: "rtl",
                textAlign: "right",
                fontSize: "14px",
                backgroundColor: "#fff",
                color: "#d32f2f",
                border: "1px solid #d32f2f",
                borderRadius: "8px",
                padding: "12px 16px",
              },
            }}
          />
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              البيانات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم الطالب بالعربية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.arabicName}
                    onChange={(e) =>
                      handleInputChange("arabicName", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.arabicName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="اسم الطالب بالعربية"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.arabicName && (
                  <p className="text-red-500 text-sm">{errors.arabicName}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم الطالب بالإنجليزية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.englishName}
                    onChange={(e) =>
                      handleInputChange("englishName", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.englishName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Student English Name"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.englishName && (
                  <p className="text-red-500 text-sm">{errors.englishName}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الجنسية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.nationality}
                    onChange={(e) =>
                      handleInputChange("nationality", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.nationality ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">اختر الجنسية</option>
                    <option value="egyptian">مصري</option>
                    <option value="saudi">سعودي</option>
                    <option value="emirati">إماراتي</option>
                    <option value="other">أخرى</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.nationality && (
                  <p className="text-red-500 text-sm">{errors.nationality}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الولاية - المحافظة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">اختر المحافظة</option>
                    <option value="cairo">القاهرة</option>
                    <option value="giza">الجيزة</option>
                    <option value="alexandria">الإسكندرية</option>
                    <option value="dakahlia">الدقهلية</option>
                    <option value="beheira">البحيرة</option>
                    <option value="sharqia">الشرقية</option>
                    <option value="gharbia">الغربية</option>
                    <option value="monufia">المنوفية</option>
                    <option value="kafr_elsheikh">كفر الشيخ</option>
                    <option value="fayoum">الفيوم</option>
                    <option value="beni_suef">بني سويف</option>
                    <option value="minya">المنيا</option>
                    <option value="assuit">أسيوط</option>
                    <option value="sohag">سوهاج</option>
                    <option value="qena">قنا</option>
                    <option value="luxor">الأقصر</option>
                    <option value="aswan">أسوان</option>
                    <option value="red_sea">البحر الأحمر</option>
                    <option value="new_valley">الوادي الجديد</option>
                    <option value="matrouh">مطروح</option>
                    <option value="north_sinai">شمال سيناء</option>
                    <option value="south_sinai">جنوب سيناء</option>
                    <option value="ismailia">الإسماعيلية</option>
                    <option value="suez">السويس</option>
                    <option value="port_said">بورسعيد</option>
                    <option value="damietta">دمياط</option>

                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  المدينة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="المدينة"
                  />
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الديانة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.religion}
                    onChange={(e) =>
                      handleInputChange("religion", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.religion ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">اختر الديانة</option>
                    <option value="muslim">مسلم</option>
                    <option value="christian">مسيحي</option>
                    <option value="other">أخرى</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.religion && (
                  <p className="text-red-500 text-sm">{errors.religion}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم شهادة الميلاد
                </label>
                <input
                  type="text"
                  value={formData.birthCertNumber}
                  onChange={(e) =>
                    handleInputChange("birthCertNumber", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="رقم شهادة الميلاد"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم جواز السفر
                </label>
                <input
                  type="text"
                  value={formData.passportNumber}
                  onChange={(e) =>
                    handleInputChange("passportNumber", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="رقم جواز السفر"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  السنة <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.birthYear}
                  onChange={(e) =>
                    handleInputChange("birthYear", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.birthYear ? "border-red-500" : "border-red-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="1990"
                />
                {errors.birthYear && (
                  <p className="text-red-500 text-sm">{errors.birthYear}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الشهر <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.birthMonth}
                  onChange={(e) =>
                    handleInputChange("birthMonth", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.birthMonth ? "border-red-500" : "border-red-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="05"
                />
                {errors.birthMonth && (
                  <p className="text-red-500 text-sm">{errors.birthMonth}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اليوم <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.birthDay}
                  onChange={(e) =>
                    handleInputChange("birthDay", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.birthDay ? "border-red-500" : "border-red-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="21"
                />
                {errors.birthDay && (
                  <p className="text-red-500 text-sm">{errors.birthDay}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              معلومات الاتصال
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  العنوان <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="العنوان التفصيلي"
                  />
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم الموبايل <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      handleInputChange("mobile", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="رقم الموبايل"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم موبايل آخر
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.alternateMobile}
                    onChange={(e) =>
                      handleInputChange("alternateMobile", e.target.value)
                    }
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    placeholder="رقم موبايل آخر"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="البريد الإلكتروني"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم المنزل
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.homePhone}
                    onChange={(e) =>
                      handleInputChange("homePhone", e.target.value)
                    }
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    placeholder="رقم المنزل"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              معلومات ولي الأمر
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم ولي الأمر <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.guardianName}
                    onChange={(e) =>
                      handleInputChange("guardianName", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="اسم ولي الأمر"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianName && (
                  <p className="text-red-500 text-sm">{errors.guardianName}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  جنسية ولي الأمر <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.guardianNationality}
                    onChange={(e) =>
                      handleInputChange("guardianNationality", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianNationality
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">جنسية ولي الأمر</option>
                    <option value="egyptian">مصري</option>
                    <option value="saudi">سعودي</option>
                    <option value="emirati">إماراتي</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianNationality && (
                  <p className="text-red-500 text-sm">
                    {errors.guardianNationality}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  وظيفة ولي الأمر <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.guardianJob}
                    onChange={(e) =>
                      handleInputChange("guardianJob", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianJob ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="وظيفة ولي الأمر"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianJob && (
                  <p className="text-red-500 text-sm">{errors.guardianJob}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  البريد الإلكتروني لولي الأمر{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.guardianEmail}
                    onChange={(e) =>
                      handleInputChange("guardianEmail", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianEmail
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="البريد الإلكتروني لولي الأمر"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianEmail && (
                  <p className="text-red-500 text-sm">{errors.guardianEmail}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم التليفون ولي الأمر
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.guardianPhone}
                    onChange={(e) =>
                      handleInputChange("guardianPhone", e.target.value)
                    }
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    placeholder="رقم التليفون ولي الأمر"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم موبايل ولي الأمر <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.guardianMobile}
                    onChange={(e) =>
                      handleInputChange("guardianMobile", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianMobile
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="رقم موبايل ولي الأمر"
                  />
                  <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianMobile && (
                  <p className="text-red-500 text-sm">
                    {errors.guardianMobile}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الرقم القومي لولي الأمر{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.guardianNationalId}
                  onChange={(e) =>
                    handleInputChange("guardianNationalId", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.guardianNationalId
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="الرقم القومي لولي الأمر"
                />
                {errors.guardianNationalId && (
                  <p className="text-red-500 text-sm">
                    {errors.guardianNationalId}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  جهة العمل
                </label>
                <input
                  type="text"
                  value={formData.workPermit}
                  onChange={(e) =>
                    handleInputChange("workPermit", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="جهة العمل"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              معلومات البحوث
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <label className="text-sm font-medium text-gray-700">
                  هل يوجد أخ/أخت يدرس في الجامعة
                </label>
                <input
                  type="checkbox"
                  checked={formData.hasTeachingExperience}
                  onChange={(e) =>
                    handleInputChange("hasTeachingExperience", e.target.checked)
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>
            {formData.hasTeachingExperience && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right">
                    الرقم التعريفي في الجامعة{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.universityId}
                      onChange={(e) =>
                        handleInputChange("universityId", e.target.value)
                      }
                      className={`w-full px-4 py-3 pr-12 border ${
                        errors.universityId
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                      placeholder="الرقم التعريفي في الجامعة"
                    />
                    <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.universityId && (
                    <p className="text-red-500 text-sm">
                      {errors.universityId}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right">
                    اسم الأخ/الأخت <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) =>
                        handleInputChange("parentName", e.target.value)
                      }
                      className={`w-full px-4 py-3 pr-12 border ${
                        errors.parentName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                      placeholder="اسم الأخ/الأخت"
                    />
                    <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.parentName && (
                    <p className="text-red-500 text-sm">{errors.parentName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right">
                    السنة الدراسية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.studyYear}
                      onChange={(e) =>
                        handleInputChange("studyYear", e.target.value)
                      }
                      className={`w-full px-4 py-3 pr-12 border ${
                        errors.studyYear ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                    >
                      <option value="">اختر السنة الدراسية</option>
                      <option value="first">السنة الأولى</option>
                      <option value="second">السنة الثانية</option>
                      <option value="third">السنة الثالثة</option>
                      <option value="fourth">السنة الرابعة</option>
                    </select>
                    <GraduationCap className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.studyYear && (
                    <p className="text-red-500 text-sm">{errors.studyYear}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 text-right">
                    الكلية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.faculty}
                      onChange={(e) =>
                        handleInputChange("faculty", e.target.value)
                      }
                      className={`w-full px-4 py-3 pr-12 border ${
                        errors.faculty ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                    >
                      <option value="">اختر الكلية</option>
                      <option value="engineering">كلية الهندسة</option>
                      <option value="medicine">كلية الطب</option>
                      <option value="science">كلية العلوم</option>
                      <option value="commerce">كلية التجارة</option>
                    </select>
                    <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.faculty && (
                    <p className="text-red-500 text-sm">{errors.faculty}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              بيانات الشهادة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  نوع الشهادة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.certificateType}
                    onChange={(e) =>
                      handleInputChange("certificateType", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.certificateType
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">اختر نوع الشهادة</option>
                    <option value="secondary">الثانوية العامة</option>
                    <option value="azhar">الأزهرية</option>
                    <option value="technical">الفنية</option>
                  </select>
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.certificateType && (
                  <p className="text-red-500 text-sm">
                    {errors.certificateType}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم المدرسة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.schoolName}
                    onChange={(e) =>
                      handleInputChange("schoolName", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.schoolName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="اسم المدرسة"
                  />
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.schoolName && (
                  <p className="text-red-500 text-sm">{errors.schoolName}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الدرجة الكلية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.totalGrade}
                    onChange={(e) =>
                      handleInputChange("totalGrade", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.totalGrade ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="الدرجة الكلية"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.totalGrade && (
                  <p className="text-red-500 text-sm">{errors.totalGrade}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  النسبة المئوية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.percentage}
                    onChange={(e) =>
                      handleInputChange("percentage", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.percentage ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="النسبة المئوية"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.percentage && (
                  <p className="text-red-500 text-sm">{errors.percentage}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم الجلوس <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.sittingNumber}
                  onChange={(e) =>
                    handleInputChange("sittingNumber", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.sittingNumber ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="رقم الجلوس"
                />
                {errors.sittingNumber && (
                  <p className="text-red-500 text-sm">{errors.sittingNumber}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الدرجة المحصل عليها <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.obtainedGrade}
                    onChange={(e) =>
                      handleInputChange("obtainedGrade", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.obtainedGrade
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="الدرجة المحصل عليها"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.obtainedGrade && (
                  <p className="text-red-500 text-sm">{errors.obtainedGrade}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  دولة الشهادة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.certificateCountry}
                    onChange={(e) =>
                      handleInputChange("certificateCountry", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.certificateCountry
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">دولة الشهادة</option>
                    <option value="egypt">مصر</option>
                    <option value="saudi">السعودية</option>
                    <option value="uae">الإمارات</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.certificateCountry && (
                  <p className="text-red-500 text-sm">
                    {errors.certificateCountry}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  سنة الحصول على الشهادة <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.certificateYear}
                  onChange={(e) =>
                    handleInputChange("certificateYear", e.target.value)
                  }
                  className={`w-full px-4 py-3 border ${
                    errors.certificateYear
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  placeholder="2025"
                />
                {errors.certificateYear && (
                  <p className="text-red-500 text-sm">
                    {errors.certificateYear}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              الرغبات والمصاريف
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الرغبة الأولى <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.firstChoice}
                    onChange={(e) =>
                      handleInputChange("firstChoice", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.firstChoice ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none`}
                  >
                    <option value="">اختر الكلية</option>
                    <option value="cs_ai">كلية الحاسبات والمعلومات والذكاء الاصطناعي</option>
                    <option value="nursing">كلية التمريض</option>
                    <option value="arts_design">كلية الفنون والتصميم</option>
                    <option value="dentistry">كلية الأسنان</option>
                    <option value="tourism_archaeology">كلية الآثار والسياحة</option>
                    <option value="business">كلية الأعمال</option>

                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.firstChoice && (
                  <p className="text-red-500 text-sm">{errors.firstChoice}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الرغبة الثانية
                </label>
                <div className="relative">
                  <select
                    value={formData.secondChoice}
                    onChange={(e) =>
                      handleInputChange("secondChoice", e.target.value)
                    }
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none"
                  >
                    <option value="">اختر الكلية</option>
                    <option value="cs_ai">كلية الحاسبات والمعلومات والذكاء الاصطناعي</option>
                    <option value="nursing">كلية التمريض</option>
                    <option value="arts_design">كلية الفنون والتصميم</option>
                    <option value="dentistry">كلية الأسنان</option>
                    <option value="tourism_archaeology">كلية الآثار والسياحة</option>
                    <option value="business">كلية الأعمال</option>

                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الرغبة الثالثة
                </label>
                <div className="relative">
                  <select
                    value={formData.thirdChoice}
                    onChange={(e) =>
                      handleInputChange("thirdChoice", e.target.value)
                    }
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none"
                  >
                      <option value="">اختر الكلية</option>
                      <option value="cs_ai">كلية الحاسبات والمعلومات والذكاء الاصطناعي</option>
                      <option value="nursing">كلية التمريض</option>
                      <option value="arts_design">كلية الفنون والتصميم</option>
                      <option value="dentistry">كلية الأسنان</option>
                      <option value="tourism_archaeology">كلية الآثار والسياحة</option>
                      <option value="business">كلية الأعمال</option>

                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 text-right">
                ملاحظات إضافية
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) =>
                  handleInputChange("additionalNotes", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right resize-none"
                placeholder="Ut aperiam ratione i"
              />
            </div>
            <div className="flex items-center justify-end space-x-2 space-x-reverse">
              <label className="text-sm text-blue-600 cursor-pointer">
                سياسة الخصوصية
              </label>
              <span className="text-sm text-gray-700">أوافق على</span>
              <span className="text-sm text-blue-600 cursor-pointer">
                الشروط والأحكام
              </span>
              <span className="text-sm text-gray-700">و</span>
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-4xl mx-auto rounded-t-3xl bg-gradient-to-br from-[#754FA8] to-[#677AE4]">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-t-3xl p-6 text-center text-white">
          <h1 className="text-2xl font-bold mb-2">جامعة دمياط الأهلية</h1>
          <p className="text-sm opacity-90">
            نموذج التسجيل المبدئي للعام الدراسي 2025-2026
          </p>
        </div>
        {/* Tab Navigation */}
        <div className="bg-white/5 backdrop-blur-sm px-6 py-4">
          <div className="flex justify-center space-x-2 space-x-reverse">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : activeTab > tab.id
                    ? "bg-blue-400 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {tab.id}
              </button>
            ))}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="bg-white/5 backdrop-blur-sm px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">
              {tabs.find((tab) => tab.id === activeTab)?.name}
            </span>
            <span className="text-white text-sm font-bold">
              {tabs.find((tab) => tab.id === activeTab)?.progress}%
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${tabs.find((tab) => tab.id === activeTab)?.progress}%`,
              }}
            ></div>
          </div>
        </div>
        {/* Form Content */}
        <div className="bg-white rounded-b-3xl p-8 shadow-2xl">
          {renderTabContent()}
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting
                ? "جاري الإرسال..."
                : activeTab === 6
                ? "إرسال"
                : "التالي"}
            </button>
            <button
              onClick={() => setActiveTab(Math.max(activeTab - 1, 1))}
              disabled={activeTab === 1 || isSubmitting}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 1 || isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              السابق
            </button>
          </div>
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: "text-right font-medium",
            duration: 5000,
            style: {
              direction: "rtl",
              textAlign: "right",
              fontSize: "14px",
              backgroundColor: "#fff",
              color: "#d32f2f",
              border: "1px solid #d32f2f",
              borderRadius: "8px",
              padding: "12px 16px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default UniversityRegistrationForm;
