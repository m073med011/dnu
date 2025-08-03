// components/FormSelect.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "اختر من القائمة",
  error,
  icon: Icon,
  disabled = false,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 text-right">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none ${
            error
              ? "border-red-500"
              : disabled
              ? "border-gray-200 bg-gray-100"
              : "border-gray-300"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {Icon && (
          <Icon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        )}
      </div>
      {error && <p className="text-red-500 text-sm text-right">{error}</p>}
    </div>
  );
};

export default FormSelect;