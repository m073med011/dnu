"use client";
import React, { useState } from "react";
import {
  IdCard,
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
  guardianRelation: string;
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
  percentage: number;
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
  nationalId: string; // ✅ الحقل الجديد: الرقم القومي
}

// Define the type for errors
type FormErrors = Partial<Record<keyof FormData, string>>;

// Main Component
const UniversityRegistrationForm = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [amountDue, setAmountDue] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    nationalId: "",
    guardianRelation: "",
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
    firstChoice: "",
    secondChoice: "",
    thirdChoice: "",
    additionalNotes: "",
    certificateType: "",
    schoolName: "",
    totalGrade: "",
    percentage: 0,
    sittingNumber: "",
    obtainedGrade: "",
    certificateCountry: "",
    certificateYear: "",
    hasTeachingExperience: false,
    parentName: "",
    universityId: "",
    faculty: "",
    studyYear: "",
    guardianName: "",
    guardianNationality: "",
    guardianJob: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianMobile: "",
    guardianNationalId: "",
    workPermit: "",
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
    { id: 4, name: "معلومات الإخوة", progress: 57 },
    { id: 5, name: "بيانات الشهادة", progress: 71 },
    { id: 6, name: "الرغبات والمصاريف", progress: 86 },
    { id: 7, name: "معلومات الحساب", progress: 100 }, // New tab
  ];
  const validateTab = (tabId: number): FormErrors => {
    const newErrors: FormErrors = {};

    switch (tabId) {
      case 1:
        (
          [
            "arabicName",
            "englishName",
            "nationality",
            "state",
            "city",
            "religion",
          ] as const
        ).forEach((field) => {
          const value = formData[field];
          if (!value || value === "") {
            newErrors[field] = "هذا الحقل مطلوب";
          }
        });

        // Validate Day
        if (!formData.birthDay || !/^\d+$/.test(formData.birthDay)) {
          newErrors.birthDay = "أدخل يوماً صالحاً";
        } else if (+formData.birthDay < 1 || +formData.birthDay > 31) {
          newErrors.birthDay = "أدخل يوماً بين 1 و31";
        }

        // Validate Month
        if (!formData.birthMonth || !/^\d+$/.test(formData.birthMonth)) {
          newErrors.birthMonth = "أدخل شهراً صالحاً";
        } else if (+formData.birthMonth < 1 || +formData.birthMonth > 12) {
          newErrors.birthMonth = "أدخل شهراً بين 1 و12";
        }

        // Validate Year
        if (!formData.birthYear || !/^\d+$/.test(formData.birthYear)) {
          newErrors.birthYear = "أدخل سنة صالحة";
        } else if (+formData.birthYear < 1900 || +formData.birthYear > 2025) {
          newErrors.birthYear = "أدخل سنة بين 1900 و2025";
        }
        if (formData.nationalId && formData.nationalId.length > 0) {
          if (!/^\d{14}$/.test(formData.nationalId.replace(/\s+/g, ""))) {
            newErrors.nationalId = "الرقم القومي يجب أن يكون 14 رقمًا";
          }
        }
        break;

      case 2:
        ["address", "mobile", "email"].forEach((field) => {
          const value = formData[field as keyof FormData];
          if (!value || value === "") {
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
          }
        });

        // Validate Email
        if (
          formData.email &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
          newErrors.email = "البريد الإلكتروني غير صالح";
        }

        // Validate Mobile
        if (
          formData.mobile &&
          !/^(?:\+20|0)?1[0-9]{9}$/.test(formData.mobile.replace(/\s+/g, ""))
        ) {
          newErrors.mobile = "رقم الموبايل غير صالح (مثال: 01012345678)";
        }
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
          const value = formData[field as keyof FormData];
          if (!value || value === "") {
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
          }
        });

        // Validate Guardian Email
        if (
          formData.guardianEmail &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guardianEmail)
        ) {
          newErrors.guardianEmail = "البريد الإلكتروني لولي الأمر غير صالح";
        }

        // Validate Guardian Mobile
        if (
          formData.guardianMobile &&
          !/^(?:\+20|0)?1[0-9]{9}$/.test(
            formData.guardianMobile.replace(/\s+/g, "")
          )
        ) {
          newErrors.guardianMobile = "رقم موبايل ولي الأمر غير صالح";
        }
        break;

      case 4:
        if (formData.hasTeachingExperience) {
          ["parentName", "universityId", "faculty", "studyYear"].forEach(
            (field) => {
              const value = formData[field as keyof FormData];
              if (!value || value === "") {
                newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
              }
            }
          );
        }
        break;

      case 5:
        [
          "certificateType",
          "schoolName",
          "totalGrade",
          // "percentage",
          "sittingNumber",
          "obtainedGrade",
          "certificateCountry",
          "certificateYear",
        ].forEach((field) => {
          const value = formData[field as keyof FormData];
          if (!value || value === "") {
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
          }
        });

        // Validate Certificate Year

        if (
          formData.certificateYear &&
          !/^\d+$/.test(formData.certificateYear)
        ) {
          newErrors.certificateYear = "يجب أن تكون السنة رقماً";
        } else if (
          +formData.certificateYear < 1900 ||
          +formData.certificateYear > 2025
        ) {
          newErrors.certificateYear = "أدخل سنة بين 1900 و2025";
        }
        break;

      case 6:
        if (!formData.firstChoice || formData.firstChoice === "") {
          newErrors.firstChoice = "الرغبة الأولى مطلوبة";
        }
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
    // Reset sibling fields if hasTeachingExperience is unchecked
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

    // Update the field
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      // 🔁 Auto-calculate percentage if totalGrade or obtainedGrade changes
      if (field === "totalGrade" || field === "obtainedGrade") {
        const total = parseFloat(updated.totalGrade);
        const obtained = parseFloat(updated.obtainedGrade);

        if (!isNaN(total) && !isNaN(obtained) && total !== 0) {
          const percentage = ((obtained / total) * 100).toFixed(2);
          updated.percentage = Number(percentage); // e.g., "95.50%"
        } else {
          updated.percentage = 0; // Reset if invalid
        }
      }

      return updated;
    });

    // Validation logic (existing)
    let error = "";
    if (field === "arabicName") {
      if (typeof value === "string") {
        const arabicRegex = /^[\u0600-\u06FF\s\-ءآأإة]+$/;
        if (value && !arabicRegex.test(value)) {
          error = "يجب أن يحتوي الاسم على حروف عربية فقط";
        }
      }
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[field] = error;
      } else {
        delete newErrors[field];
      }
      return newErrors;
    });
  };

  const handleNext = () => {
    const tabErrors = validateTab(activeTab);
    if (Object.keys(tabErrors).length > 0) {
      setErrors(tabErrors);
      return;
    }
    if (activeTab === 6) {
      setActiveTab(7); // Navigate to the new tab
    } else if (activeTab === 7) {
      handleSubmit(); // Submit the form when on the last tab
    } else {
      setActiveTab(activeTab + 1);
    }
  };

  const handleSubmit = async () => {
    const tabErrors = validateTab(activeTab);
    if (Object.keys(tabErrors).length > 0) {
      setErrors(tabErrors);
      return;
    }
    // Check if current tab has any errors

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
      national_id: formData.nationalId,
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
        const resData = response.data;

        // Extract and store dynamic values
        setRegistrationNumber(resData.registration_number || "غير متوفر");
        setAmountDue(resData.fees_applied?.amount_egp || null);

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
                  <span className="font-bold text-gray-800">
                    {registrationNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">
                    تاريخ التسجيل:
                  </span>
                  <span className="font-bold text-gray-800">
                    {new Date().toLocaleDateString("ar-EG", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">الحالة:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    قيد المراجعة
                  </span>
                </div>
                {amountDue !== null && (
                  <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                    <span className="text-blue-600 font-medium">
                      المبلغ المستحق:
                    </span>
                    <span className="font-bold text-red-600">
                      {amountDue} جنيه مصري
                    </span>
                  </div>
                )}
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
    // Helper to calculate percentage
    const calculatePercentage = (): string => {
      const total = parseFloat(formData.totalGrade);
      const obtained = parseFloat(formData.obtainedGrade);
      if (!isNaN(total) && !isNaN(obtained) && total !== 0) {
        const percentage = (obtained / total) * 100;
        return `${percentage.toFixed(2)}%`; // e.g., "95.50%"
      }
      return "";
    };
    switch (activeTab) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              البيانات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* اسم الطالب بالعربية */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم الطالب بالعربية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.arabicName}
                    onChange={(e) => {
                      const value = e.target.value;
                      // السماح فقط بالحروف العربية، المسافات، والشرطات
                      if (/^[\u0600-\u06FF\s\-ءآأإة]*$/.test(value)) {
                        handleInputChange("arabicName", value);
                      }
                    }}
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.arabicName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثل: محمد أحمد"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.arabicName && (
                  <p className="text-red-500 text-sm">{errors.arabicName}</p>
                )}
              </div>

              {/* اسم الطالب بالإنجليزية */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  اسم الطالب بالإنجليزية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.englishName}
                    onChange={(e) => {
                      const value = e.target.value;
                      // السماح فقط بالحروف الإنجليزية، المسافات، والشرطات
                      if (/^[a-zA-Z\s\-]*$/.test(value)) {
                        handleInputChange("englishName", value);
                      }
                    }}
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.englishName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="مثل: Mohamed Ahmed"
                  />
                  <GraduationCap className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.englishName && (
                  <p className="text-red-500 text-sm">{errors.englishName}</p>
                )}
              </div>

              {/* الجنسية */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الجنسية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.nationality}
                    onChange={(e) =>
                      handleInputChange("nationality", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.nationality ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثل: مصري"
                  />
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.nationality && (
                  <p className="text-red-500 text-sm">{errors.nationality}</p>
                )}
              </div>

              {/* المحافظة */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  المحافظة <span className="text-red-500">*</span>
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
                    <option value="دمياط">دمياط الجديدة</option>
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="الدقهلية">الدقهلية</option>
                    <option value="البحر الأحمر">البحر الأحمر</option>
                    <option value="البحيرة">البحيرة</option>
                    <option value="الفيوم">الفيوم</option>
                    <option value="الغربية">الغربية</option>
                    <option value="الإسماعيلية">الإسماعيلية</option>
                    <option value="المنوفية">المنوفية</option>
                    <option value="المنيا">المنيا</option>
                    <option value="القليوبية">القليوبية</option>
                    <option value="الوادي الجديد">الوادي الجديد</option>
                    <option value="السويس">السويس</option>
                    <option value="اسيوط">أسيوط</option>
                    <option value="اسوان">أسوان</option>
                    <option value="الأقصر">الأقصر</option>
                    <option value="مطروح">مطروح</option>
                    <option value="شمال سيناء">شمال سيناء</option>
                    <option value="جنوب سيناء">جنوب سيناء</option>
                    <option value="كفر الشيخ">كفر الشيخ</option>
                    <option value="قنا">قنا</option>
                    <option value="مرسى مطروح">مرسى مطروح</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="سوهاج">سوهاج</option>
                    <option value="القليوبية">القليوبية</option>
                    <option value="الوادي الجديد">الوادي الجديد</option>
                  </select>
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>

              {/* المدينة */}
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
                    placeholder="مثل: مصر الجديدة"
                  />
                  <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              {/* الدين */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الدين <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.religion}
                    onChange={(e) =>
                      handleInputChange("religion", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.religion ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثل: مسلم"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.religion && (
                  <p className="text-red-500 text-sm">{errors.religion}</p>
                )}
              </div>

              {/* رقم شهادة الميلاد */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم شهادة الميلاد
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.birthCertNumber}
                    onChange={(e) =>
                      handleInputChange("birthCertNumber", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.birthCertNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="رقم شهادة الميلاد"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.birthCertNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.birthCertNumber}
                  </p>
                )}
              </div>

              {/* جواز السفر */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  رقم جواز السفر
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.passportNumber}
                    onChange={(e) =>
                      handleInputChange("passportNumber", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.passportNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="رقم جواز السفر"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.passportNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.passportNumber}
                  </p>
                )}
              </div>

              {/* تاريخ الميلاد */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  تاريخ الميلاد <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={formData.birthDay}
                    onChange={(e) =>
                      handleInputChange("birthDay", e.target.value)
                    }
                    className={`px-4 py-3 border ${
                      errors.birthDay ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center`}
                  >
                    <option value="">اليوم</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.birthMonth}
                    onChange={(e) =>
                      handleInputChange("birthMonth", e.target.value)
                    }
                    className={`px-4 py-3 border ${
                      errors.birthMonth ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center`}
                  >
                    <option value="">الشهر</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={formData.birthYear}
                    onChange={(e) =>
                      handleInputChange("birthYear", e.target.value)
                    }
                    placeholder="السنة"
                    className={`px-4 py-3 border ${
                      errors.birthYear ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center`}
                  />
                </div>
                {(errors.birthDay || errors.birthMonth || errors.birthYear) && (
                  <p className="text-red-500 text-sm">
                    {errors.birthDay || errors.birthMonth || errors.birthYear}
                  </p>
                )}
              </div>
              {/* ✅ الرقم القومي */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الرقم القومي
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.nationalId}
                    onChange={(e) =>
                      handleInputChange("nationalId", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.nationalId ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="أدخل الرقم القومي (14 رقمًا)"
                    maxLength={14}
                  />
                  <IdCard className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.nationalId && (
                  <p className="text-red-500 text-sm">{errors.nationalId}</p>
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
              {/* ✅ حقل جديد: صلة القرابة */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  صلة القرابة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.guardianRelation}
                    onChange={(e) =>
                      handleInputChange("guardianRelation", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.guardianRelation
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثل: أب، أم، عم، خال"
                  />
                  <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.guardianRelation && (
                  <p className="text-red-500 text-sm">
                    {errors.guardianRelation}
                  </p>
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
                    <option value="">اختر الجنسية</option>
                    <option value="algerian">جزائري</option>
                    <option value="bahraini">بحريني</option>
                    <option value="comoran">قمرية</option>
                    <option value="djiboutian">جيبوتي</option>
                    <option value="egyptian">مصري</option>
                    <option value="iraqi">عراقي</option>
                    <option value="jordanian">أردني</option>
                    <option value="kuwaiti">كويتي</option>
                    <option value="lebanese">لبناني</option>
                    <option value="libyan">ليبي</option>
                    <option value="moroccan">مغربي</option>
                    <option value="mauritanian">موريتاني</option>
                    <option value="omani">عماني</option>
                    <option value="qatari">قطري</option>
                    <option value="saudi">سعودي</option>
                    <option value="somali">صومالي</option>
                    <option value="sudanese">سوداني</option>
                    <option value="syrian">سوري</option>
                    <option value="tunisian">تونسي</option>
                    <option value="emirati">إماراتي</option>
                    <option value="yemeni">يمني</option>
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
                      <option value="cs_ai">
                        كلية الحاسبات والمعلومات والذكاء الاصطناعي
                      </option>
                      <option value="nursing">كلية التمريض</option>
                      <option value="arts_design">كلية الفنون والتصميم</option>
                      <option value="dental">كلية الألسن</option>
                      <option value="tourism_archaeology">
                        كلية الآثار والسياحة
                      </option>
                      <option value="business">كلية الأعمال</option>
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
                  الدرجة المحصل عليها <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={formData.obtainedGrade}
                    onChange={(e) =>
                      handleInputChange("obtainedGrade", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.obtainedGrade
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثلاً: 350"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.obtainedGrade && (
                  <p className="text-red-500 text-sm">{errors.obtainedGrade}</p>
                )}
              </div>
              {/* الدرجة الكلية */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  الدرجة الكلية <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={formData.totalGrade}
                    onChange={(e) =>
                      handleInputChange("totalGrade", e.target.value)
                    }
                    className={`w-full px-4 py-3 pr-12 border ${
                      errors.totalGrade ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                    placeholder="مثلاً: 410"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.totalGrade && (
                  <p className="text-red-500 text-sm">{errors.totalGrade}</p>
                )}
              </div>
              {/* النسبة المئوية */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  النسبة المئوية
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={calculatePercentage()} // Auto-generated: e.g., "85.37%"
                    readOnly
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed text-right"
                    placeholder="سيتم حساب النسبة تلقائياً"
                  />
                  <Award className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.percentage && (
                  <p className="text-red-500 text-sm">{errors.percentage}</p>
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
            </div>
          </div>
        );
      case 6:
        // Define all faculties
        const allFaculties = [
          {
            value: "cs_ai",
            label: "كلية الحاسبات والمعلومات والذكاء الاصطناعي",
          },
          { value: "nursing", label: "كلية التمريض" },
          { value: "arts_design", label: "كلية الفنون والتصميم" },
          { value: "dental", label: "كلية الألسن" },
          { value: "tourism_archaeology", label: "كلية الآثار والسياحة" },
          { value: "business", label: "كلية الأعمال" },
        ];

        // Filter options based on previous choices
        const secondOptions = allFaculties.filter(
          (opt) => opt.value !== formData.firstChoice
        );
        const thirdOptions = allFaculties.filter(
          (opt) =>
            opt.value !== formData.firstChoice &&
            opt.value !== formData.secondChoice
        );

        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              الرغبات والمصاريف
            </h2>

            {/* First and Second Choices in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {/* الرغبة الأولى */}
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
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right`}
                  >
                    <option value="">اختر الكلية</option>
                    {allFaculties.map((faculty) => (
                      <option key={faculty.value} value={faculty.value}>
                        {faculty.label}
                      </option>
                    ))}
                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.firstChoice && (
                  <p className="text-red-500 text-sm">{errors.firstChoice}</p>
                )}
              </div>

              {/* الرغبة الثانية */}
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
                    disabled={!formData.firstChoice}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {formData.firstChoice
                        ? "اختر الكلية"
                        : "اختر الرغبة الأولى أولاً"}
                    </option>
                    {secondOptions.map((faculty) => (
                      <option key={faculty.value} value={faculty.value}>
                        {faculty.label}
                      </option>
                    ))}
                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* الرغبة الثالثة - Full Width (optional, but clearer) */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
                    disabled={!formData.secondChoice}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {formData.secondChoice
                        ? "اختر الكلية"
                        : "اختر الرغبة الثانية أولاً"}
                    </option>
                    {thirdOptions.map((faculty) => (
                      <option key={faculty.value} value={faculty.value}>
                        {faculty.label}
                      </option>
                    ))}
                  </select>
                  <School className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* ✅ New Field: Appears FULL WIDTH and UNDER all other fields */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 text-right">
                ملاحظات إضافية أو رغبات أخرى
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) =>
                  handleInputChange("additionalNotes", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right resize-none"
                placeholder="أدخل أي ملاحظات إضافية أو رغبات لم تُذكر"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center justify-end space-x-2 space-x-reverse mt-6">
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
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              معلومات الحساب
            </h2>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <table className="w-full text-sm text-left text-black dark:text-black">
                <thead className="text-xs text-black uppercase bg-white border-b-2 border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      IBAN
                    </th>
                    <th scope="col" className="px-6 py-3">
                      رقم الحساب
                    </th>
                    <th scope="col" className="px-6 py-3">
                      العملة
                    </th>
                    <th scope="col" className="px-6 py-3">
                      اسم الحساب
                    </th>
                    <th scope="col" className="px-6 py-3">
                      اسم البنك
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-whtie dark:border-gray-700">
                    <td className="px-6 py-4">EG370038002800000280000150150</td>
                    <td className="px-6 py-4">0280000150150</td>
                    <td className="px-6 py-4">مصري</td>
                    <td className="px-6 py-4">جامعة دمياط الأهلية</td>
                    <td className="px-6 py-4">CIB</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-whtie dark:border-gray-700">
                    <td className="px-6 py-4">EG100038002800000280000150151</td>
                    <td className="px-6 py-4">0280000150151</td>
                    <td className="px-6 py-4">دولار</td>
                    <td className="px-6 py-4">جامعة دمياط الأهلية</td>
                    <td className="px-6 py-4">CIB</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-whtie dark:border-gray-700">
                    <td className="px-6 py-4">EG800038002800000280000150152</td>
                    <td className="px-6 py-4">0280000150152</td>
                    <td className="px-6 py-4">يورو</td>
                    <td className="px-6 py-4">جامعة دمياط الأهلية</td>
                    <td className="px-6 py-4">CIB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              {/* <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال"}
              </button> */}
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
          <div className="flex justify-center space-x-3 space-x-reverse">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                // onClick={() => setActiveTab(tab.id)}
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
              // ❌ أزلنا disabled تمامًا
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting
                ? "جاري الإرسال..."
                : activeTab === 7
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
