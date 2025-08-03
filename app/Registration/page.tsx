"use client";
import React, { useState, useMemo } from "react";
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
import BankingInformation from "@/components/home/BankingInformation";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";

// Define types
interface FormData {
  guardianRelation: string;
  arabicName: string;
  englishName: string;
  nationality: string;
  state: string;
  city: string;
  birthCertNumber: string;
  passportNumber: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
  additionalNotes: string;
  certificateType: string;
  schoolName: string;
  totalGrade: string;
  percentage: number;
  sittingNumber: string;
  obtainedGrade: string;
  certificateCountry: string;
  certificateYear: string;
  hasTeachingExperience: boolean;
  parentName: string;
  universityId: string;
  faculty: string;
  studyYear: string;
  guardianName: string;
  guardianNationality: string;
  guardianJob: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianMobile: string;
  guardianNationalId: string;
  workPermit: string;
  address: string;
  mobile: string;
  alternateMobile: string;
  email: string;
  homePhone: string;
  nationalId: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const UniversityRegistrationForm = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
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
    { id: 6, name: "الرغبات والمصاريف", progress: 80 },
    { id: 7, name: "معلومات الحساب", progress: 100 },
  ];

  // ✅ Define helpers before useMemo
  const calculatePercentage = (): string => {
    const total = parseFloat(formData.totalGrade);
    const obtained = parseFloat(formData.obtainedGrade);
    if (!isNaN(total) && !isNaN(obtained) && total !== 0) {
      return `${((obtained / total) * 100).toFixed(2)}%`;
    }
    return "";
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

    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "totalGrade" || field === "obtainedGrade") {
        const total = parseFloat(updated.totalGrade);
        const obtained = parseFloat(updated.obtainedGrade);
        if (!isNaN(total) && !isNaN(obtained) && total !== 0) {
          const percentage = ((obtained / total) * 100).toFixed(2);
          updated.percentage = Number(percentage);
        } else {
          updated.percentage = 0;
        }
      }
      return updated;
    });

    let error = "";
    if (field === "arabicName" && typeof value === "string") {
      const arabicRegex = /^[\u0600-\u06FF\s\-ءآأإة]+$/;
      if (value && !arabicRegex.test(value)) {
        error = "يجب أن يحتوي الاسم على حروف عربية فقط";
      }
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) newErrors[field] = error;
      else delete newErrors[field];
      return newErrors;
    });
  };

  // ✅ Define options for selects
  const stateOptions = [
    { value: "دمياط", label: "دمياط" },
    { value: "بورسعيد", label: "بورسعيد" },
    { value: "القاهرة", label: "القاهرة" },
    { value: "الجيزة", label: "الجيزة" },
    { value: "الإسكندرية", label: "الإسكندرية" },
    { value: "الدقهلية", label: "الدقهلية" },
    { value: "الشرقية", label: "الشرقية" },
    { value: "المنوفية", label: "المنوفية" },
    { value: "كفر الشيخ", label: "كفر الشيخ" },
    { value: "الغربية", label: "الغربية" },
  ];

  const certificateTypeOptions = [
    { value: "secondary", label: "الثانوية العامة" },
    { value: "azhar", label: "الثانوية الأزهرية" },
    { value: "technical", label: "الثانوية الفنية" },
    { value: "equivalent", label: "شهادة معادلة" },
    { value: "other", label: "شهادة أخرى" },
  ];

  const certificateCountryOptions = [
    { value: "egypt", label: "مصر" },
    { value: "saudi", label: "السعودية" },
    { value: "uae", label: "الإمارات" },
    { value: "jordan", label: "الأردن" },
    { value: "kuwait", label: "الكويت" },
  ];

  const studyYearOptions = [
    { value: "first", label: "السنة الأولى" },
    { value: "second", label: "السنة الثانية" },
    { value: "third", label: "السنة الثالثة" },
    { value: "fourth", label: "السنة الرابعة" },
  ];

  const facultyOptions = [
    { value: "cs_ai", label: "كلية الحاسبات والمعلومات والذكاء الاصطناعي" },
    { value: "nursing", label: "كلية التمريض" },
    { value: "arts_design", label: "كلية الفنون والتصميم" },
    { value: "dental", label: "كلية الألسن" },
    { value: "tourism_archaeology", label: "كلية الآثار والسياحة" },
    { value: "business", label: "كلية الأعمال" },
  ];

  // ✅ useMemo: Only render active tab
  const currentTabContent = useMemo(() => {
    const secondOptions = facultyOptions.filter(
      (opt) => opt.value !== formData.firstChoice
    );
    const thirdOptions = facultyOptions.filter(
      (opt) =>
        opt.value !== formData.firstChoice &&
        opt.value !== formData.secondChoice
    );

    switch (activeTab) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              البيانات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="اسم الطالب بالعربية"
                value={formData.arabicName}
                onChange={(value) => {
                  if (
                    /^[\u0600-\u06FF\s\-ءآأإة]*$/.test(value) ||
                    value === ""
                  ) {
                    handleInputChange("arabicName", value);
                  }
                }}
                placeholder="مثل: محمد أحمد"
                error={errors.arabicName}
                icon={User}
                required
              />
              <FormInput
                label="اسم الطالب بالإنجليزية"
                value={formData.englishName}
                onChange={(value) => {
                  if (/^[a-zA-Z\s\-]*$/.test(value) || value === "") {
                    handleInputChange("englishName", value);
                  }
                }}
                placeholder="مثل: Mohamed Ahmed"
                error={errors.englishName}
                icon={GraduationCap}
                required
              />
              <FormInput
                label="الجنسية"
                value={formData.nationality}
                onChange={(value) => handleInputChange("nationality", value)}
                placeholder="مثل: مصري"
                error={errors.nationality}
                icon={MapPin}
                required
              />
              <FormSelect
                label="المحافظة"
                value={formData.state}
                onChange={(value) => handleInputChange("state", value)}
                options={stateOptions}
                error={errors.state}
                icon={MapPin}
                required
              />
              <FormInput
                label="المدينة"
                value={formData.city}
                onChange={(value) => handleInputChange("city", value)}
                placeholder="مثل: دمياط الجديدة"
                error={errors.city}
                icon={MapPin}
                required
              />
              <FormInput
                label="رقم شهادة الميلاد"
                value={formData.birthCertNumber}
                onChange={(value) =>
                  handleInputChange("birthCertNumber", value)
                }
                placeholder="رقم شهادة الميلاد"
                error={errors.birthCertNumber}
                icon={Award}
              />
              <FormInput
                label="رقم جواز السفر"
                value={formData.passportNumber}
                onChange={(value) => handleInputChange("passportNumber", value)}
                placeholder="رقم جواز السفر"
                error={errors.passportNumber}
                icon={Award}
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 text-right">
                  تاريخ الميلاد *
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
              <FormInput
                label="الرقم القومي"
                value={formData.nationalId}
                onChange={(value) => handleInputChange("nationalId", value)}
                placeholder="14 رقمًا"
                error={errors.nationalId}
                icon={IdCard}
                type="number"
              />
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
              <FormInput
                label="العنوان"
                value={formData.address}
                onChange={(value) => handleInputChange("address", value)}
                placeholder="العنوان التفصيلي"
                error={errors.address}
                icon={MapPin}
                required
              />
              <FormInput
                label="رقم الموبايل"
                value={formData.mobile}
                onChange={(value) => handleInputChange("mobile", value)}
                placeholder="01012345678"
                error={errors.mobile}
                icon={Phone}
                type="tel"
                required
              />
              <FormInput
                label="رقم موبايل آخر"
                value={formData.alternateMobile}
                onChange={(value) =>
                  handleInputChange("alternateMobile", value)
                }
                placeholder="رقم موبايل آخر"
                icon={Phone}
              />
              <FormInput
                label="البريد الإلكتروني"
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                placeholder="البريد الإلكتروني"
                error={errors.email}
                icon={Phone}
                type="email"
                required
              />
              <FormInput
                label="رقم المنزل"
                value={formData.homePhone}
                onChange={(value) => handleInputChange("homePhone", value)}
                placeholder="رقم المنزل"
                icon={Phone}
              />
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
              <FormInput
                label="اسم ولي الأمر"
                value={formData.guardianName}
                onChange={(value) => handleInputChange("guardianName", value)}
                placeholder="اسم ولي الأمر"
                error={errors.guardianName}
                icon={User}
                required
              />
              <FormInput
                label="صلة القرابة"
                value={formData.guardianRelation}
                onChange={(value) =>
                  handleInputChange("guardianRelation", value)
                }
                placeholder="مثل: أب، أم، عم، خال"
                error={errors.guardianRelation}
                icon={User}
                required
              />
              <FormInput
                label="جنسية ولي الأمر"
                value={formData.guardianNationality}
                onChange={(value) =>
                  handleInputChange("guardianNationality", value)
                }
                placeholder="اختر الجنسية"
                error={errors.guardianNationality}
                icon={MapPin}
                required
              />
              <FormInput
                label="وظيفة ولي الأمر"
                value={formData.guardianJob}
                onChange={(value) => handleInputChange("guardianJob", value)}
                placeholder="وظيفة ولي الأمر"
                error={errors.guardianJob}
                icon={User}
                required
              />
              <FormInput
                label="البريد الإلكتروني لولي الأمر"
                value={formData.guardianEmail}
                onChange={(value) => handleInputChange("guardianEmail", value)}
                placeholder="البريد الإلكتروني"
                error={errors.guardianEmail}
                icon={Phone}
                type="email"
                required
              />
              <FormInput
                label="رقم التليفون ولي الأمر"
                value={formData.guardianPhone}
                onChange={(value) => handleInputChange("guardianPhone", value)}
                placeholder="رقم التليفون"
                icon={Phone}
              />
              <FormInput
                label="رقم موبايل ولي الأمر"
                value={formData.guardianMobile}
                onChange={(value) => handleInputChange("guardianMobile", value)}
                placeholder="رقم الموبايل"
                error={errors.guardianMobile}
                icon={Phone}
                type="tel"
                required
              />
              <FormInput
                label="الرقم القومي لولي الأمر"
                value={formData.guardianNationalId}
                onChange={(value) =>
                  handleInputChange("guardianNationalId", value)
                }
                placeholder="الرقم القومي"
                error={errors.guardianNationalId}
                required
              />
              <FormInput
                label="جهة العمل"
                value={formData.workPermit}
                onChange={(value) => handleInputChange("workPermit", value)}
                placeholder="جهة العمل"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              معلومات الإخوة
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
                <FormInput
                  label="الرقم التعريفي في الجامعة"
                  value={formData.universityId}
                  onChange={(value) => handleInputChange("universityId", value)}
                  placeholder="الرقم التعريفي"
                  error={errors.universityId}
                  icon={School}
                  required
                />
                <FormInput
                  label="اسم الأخ/الأخت"
                  value={formData.parentName}
                  onChange={(value) => handleInputChange("parentName", value)}
                  placeholder="اسم الأخ/الأخت"
                  error={errors.parentName}
                  icon={User}
                  required
                />
                <FormSelect
                  label="السنة الدراسية"
                  value={formData.studyYear}
                  onChange={(value) => handleInputChange("studyYear", value)}
                  options={studyYearOptions}
                  error={errors.studyYear}
                  icon={GraduationCap}
                  required
                />
                <FormSelect
                  label="الكلية"
                  value={formData.faculty}
                  onChange={(value) => handleInputChange("faculty", value)}
                  options={facultyOptions}
                  error={errors.faculty}
                  icon={School}
                  required
                />
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
              <FormSelect
                label="نوع الشهادة"
                value={formData.certificateType}
                onChange={(value) =>
                  handleInputChange("certificateType", value)
                }
                options={certificateTypeOptions}
                error={errors.certificateType}
                icon={Award}
                required
              />
              <FormInput
                label="اسم المدرسة"
                value={formData.schoolName}
                onChange={(value) => handleInputChange("schoolName", value)}
                placeholder="اسم المدرسة"
                error={errors.schoolName}
                icon={School}
                required
              />
              <FormInput
                label="الدرجة المحصل عليها"
                value={formData.obtainedGrade}
                onChange={(value) => handleInputChange("obtainedGrade", value)}
                placeholder="مثلاً: 350"
                error={errors.obtainedGrade}
                icon={Award}
                type="number"
                required
              />
              <FormInput
                label="الدرجة الكلية"
                value={formData.totalGrade}
                onChange={(value) => handleInputChange("totalGrade", value)}
                placeholder="مثلاً: 410"
                error={errors.totalGrade}
                icon={Award}
                type="number"
                required
              />
              <FormInput
                label="النسبة المئوية"
                value={calculatePercentage()}
                onChange={() => {}}
                placeholder="سيتم حسابها تلقائياً"
                icon={Award}
                disabled
              />
              <FormSelect
                label="دولة الشهادة"
                value={formData.certificateCountry}
                onChange={(value) =>
                  handleInputChange("certificateCountry", value)
                }
                options={certificateCountryOptions}
                error={errors.certificateCountry}
                icon={MapPin}
                required
              />
              <FormInput
                label="سنة الحصول على الشهادة"
                value={formData.certificateYear}
                onChange={(value) =>
                  handleInputChange("certificateYear", value)
                }
                placeholder="2025"
                error={errors.certificateYear}
                required
              />
              <FormInput
                label="رقم الجلوس"
                value={formData.sittingNumber}
                onChange={(value) => handleInputChange("sittingNumber", value)}
                placeholder="رقم الجلوس"
                error={errors.sittingNumber}
                required
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-right mb-8">
              الرغبات والمصاريف
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <FormSelect
                label="الرغبة الأولى"
                value={formData.firstChoice}
                onChange={(value) => handleInputChange("firstChoice", value)}
                options={facultyOptions}
                error={errors.firstChoice}
                icon={School}
                required
              />
              <FormSelect
                label="الرغبة الثانية"
                value={formData.secondChoice}
                onChange={(value) => handleInputChange("secondChoice", value)}
                options={secondOptions}
                placeholder={
                  formData.firstChoice
                    ? "اختر الكلية"
                    : "اختر الرغبة الأولى أولاً"
                }
                icon={School}
                disabled={!formData.firstChoice}
              />
              <FormSelect
                label="الرغبة الثالثة"
                value={formData.thirdChoice}
                onChange={(value) => handleInputChange("thirdChoice", value)}
                options={thirdOptions}
                placeholder={
                  formData.secondChoice
                    ? "اختر الكلية"
                    : "اختر الرغبة الثانية أولاً"
                }
                icon={School}
                disabled={!formData.secondChoice}
              />
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
          </div>
        );

      case 7:
        return <BankingInformation showNotices={true} />;

      default:
        return null;
    }
  }, [activeTab, formData, errors, handleInputChange, calculatePercentage]);

  const validateTab = (tabId: number): FormErrors => {
    const newErrors: FormErrors = {};
    switch (tabId) {
      case 1:
        (
          ["arabicName", "englishName", "nationality", "state", "city"] as const
        ).forEach((field) => {
          if (!formData[field]) newErrors[field] = "هذا الحقل مطلوب";
        });
        if (!formData.birthDay || !/^\d+$/.test(formData.birthDay))
          newErrors.birthDay = "أدخل يوماً صالحاً";
        else if (+formData.birthDay < 1 || +formData.birthDay > 31)
          newErrors.birthDay = "أدخل يوماً بين 1 و31";

        if (!formData.birthMonth || !/^\d+$/.test(formData.birthMonth))
          newErrors.birthMonth = "أدخل شهراً صالحاً";
        else if (+formData.birthMonth < 1 || +formData.birthMonth > 12)
          newErrors.birthMonth = "أدخل شهراً بين 1 و12";

        if (!formData.birthYear || !/^\d+$/.test(formData.birthYear))
          newErrors.birthYear = "أدخل سنة صالحة";
        else if (+formData.birthYear < 1900 || +formData.birthYear > 2025)
          newErrors.birthYear = "أدخل سنة بين 1900 و2025";

        if (
          formData.nationalId &&
          !/^\d{14}$/.test(formData.nationalId.replace(/\s+/g, ""))
        )
          newErrors.nationalId = "الرقم القومي يجب أن يكون 14 رقمًا";
        break;

      case 2:
        ["address", "mobile", "email"].forEach((field) => {
          if (!formData[field as keyof FormData])
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
        });
        if (
          formData.email &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        )
          newErrors.email = "البريد الإلكتروني غير صالح";
        if (
          formData.mobile &&
          !/^(?:\+20|0)?1[0-9]{9}$/.test(formData.mobile.replace(/\s+/g, ""))
        )
          newErrors.mobile = "رقم الموبايل غير صالح (مثال: 01012345678)";
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
          if (!formData[field as keyof FormData])
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
        });
        if (
          formData.guardianEmail &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guardianEmail)
        )
          newErrors.guardianEmail = "البريد الإلكتروني لولي الأمر غير صالح";
        if (
          formData.guardianMobile &&
          !/^(?:\+20|0)?1[0-9]{9}$/.test(
            formData.guardianMobile.replace(/\s+/g, "")
          )
        )
          newErrors.guardianMobile = "رقم موبايل ولي الأمر غير صالح";
        break;

      case 4:
        if (formData.hasTeachingExperience) {
          ["parentName", "universityId", "faculty", "studyYear"].forEach(
            (field) => {
              if (!formData[field as keyof FormData])
                newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
            }
          );
        }
        break;

      case 5:
        [
          "certificateType",
          "schoolName",
          "totalGrade",
          "sittingNumber",
          "obtainedGrade",
          "certificateCountry",
          "certificateYear",
        ].forEach((field) => {
          if (!formData[field as keyof FormData])
            newErrors[field as keyof FormData] = "هذا الحقل مطلوب";
        });
        if (formData.certificateYear && !/^\d+$/.test(formData.certificateYear))
          newErrors.certificateYear = "يجب أن تكون السنة رقماً";
        else if (
          +formData.certificateYear < 1900 ||
          +formData.certificateYear > 2025
        )
          newErrors.certificateYear = "أدخل سنة بين 1900 و2025";
        break;

      case 6:
        if (!formData.firstChoice)
          newErrors.firstChoice = "الرغبة الأولى مطلوبة";
        break;

      default:
        break;
    }
    return newErrors;
  };

  const handleNext = () => {
    const tabErrors = validateTab(activeTab);
    if (Object.keys(tabErrors).length > 0) {
      setErrors(tabErrors);
      return;
    }
    if (activeTab === 6) {
      setActiveTab(7);
    } else if (activeTab === 7) {
      handleSubmit();
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
    setIsSubmitting(true);
    const formattedData = {
      student_english_name: formData.englishName,
      student_arabic_name: formData.arabicName,
      nationality: formData.nationality,
      governorate: formData.state,
      city: formData.city,
      passport_number: formData.passportNumber,
      birth_certificate_number: formData.birthCertNumber,
      birthday_day: formData.birthDay,
      birthday_month: formData.birthMonth,
      birthday_year: formData.birthYear,
      address: formData.address,
      phone: formData.mobile,
      other_mobile_number: formData.alternateMobile,
      email: formData.email,
      home_number: formData.homePhone,
      national_id: formData.nationalId,
      guardian_name: formData.guardianName,
      guardian_nationality: formData.guardianNationality,
      guardian_job: formData.guardianJob,
      guardian_email: formData.guardianEmail,
      guardian_mobile: formData.guardianMobile,
      guardian_telephone: formData.guardianPhone,
      guardian_national_id: formData.guardianNationalId,
      guardian_workplace: formData.workPermit,
      has_sibling_at_hue: formData.hasTeachingExperience ? 1 : 0,
      sibling_name: formData.parentName,
      sibling_hue_id: formData.universityId,
      sibling_faculty: formData.faculty,
      sibling_year: formData.studyYear,
      certificate_type: formData.certificateType,
      school_name: formData.schoolName,
      percentage: formData.percentage,
      total_degree: formData.totalGrade,
      obtained_degree: formData.obtainedGrade,
      seat_no: formData.sittingNumber,
      year: formData.certificateYear,
      certificate_country: formData.certificateCountry,
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
        { headers: { Accept: "application/json" } }
      );
      if (response.status === 200 || response.status === 201) {
        const resData = response.data;
        setRegistrationNumber(resData.registration_number || "غير متوفر");
        setIsSubmitted(true);
      } else {
        const resData = response.data;
        if (resData.errors) {
          Object.keys(resData.errors).forEach((field) =>
            resData.errors[field].forEach((msg: string) =>
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
              })
            )
          );
        }
        if (resData.message)
          toast.error(resData.message, {
            style: { direction: "rtl", textAlign: "right" },
          });
      }
    } catch (error) {
      console.error("Network error:", error);
      if (axios.isAxiosError(error) && error.response) {
        const resData = error.response.data as {
          message?: string;
          errors?: Record<string, string[]>;
        };
        if (resData.errors) {
          Object.keys(resData.errors).forEach((field) =>
            resData.errors![field].forEach((msg) =>
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
              })
            )
          );
        }
        if (resData.message)
          toast.error(resData.message, {
            style: { direction: "rtl", textAlign: "right" },
          });
      } else {
        toast.error(
          "حدث خطأ في الاتصال. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
          {
            style: { direction: "rtl", textAlign: "right" },
          }
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#754FA8] to-[#677AE4] p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-t-3xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">جد</div>
            <h1 className="text-2xl font-bold mb-2">جامعة دمياط الأهلية</h1>
            <p className="text-sm opacity-90">
              نموذج التسجيل المبدئي للعام الدراسي 2025-2026
            </p>
          </div>
          <div className="bg-white rounded-b-3xl p-8 shadow-2xl">
            <div className="text-center space-y-6">
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
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  تم تأكيد التسجيل
                </h2>
                <p className="text-gray-600">
                  تم إرسال طلبك بنجاح وسيتم مراجعته قريباً
                </p>
              </div>
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
              </div>
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
                    <span>سيتم مراجعة طلبك خلال 7 أيام عمل</span>
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
            <div className="bg-gray-600 text-white p-4 mt-8 -mb-8 -mx-8 rounded-b-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">هاتف الجامعة</span>
                  </div>
                  <p className="text-xs">01021961996</p>
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
                  <p className="text-xs">info@dam-nu.edu.eg</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">الموقع</span>
                  </div>
                  <p className="text-xs">دمياط الجديدة</p>
                </div>
              </div>
            </div>
          </div>
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

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto rounded-t-3xl bg-gradient-to-br from-[#754FA8] to-[#677AE4]">
        <div className="bg-white/10 backdrop-blur-sm rounded-t-3xl p-6 text-center text-white">
          <h1 className="text-2xl font-bold mb-2">جامعة دمياط الأهلية</h1>
          <p className="text-sm opacity-90">
            نموذج التسجيل المبدئي للعام الدراسي 2025-2026
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm px-4 py-4">
          <div className="flex justify-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
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
        <div className="bg-white rounded-b-3xl p-8 shadow-2xl">
          {currentTabContent}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleNext}
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
