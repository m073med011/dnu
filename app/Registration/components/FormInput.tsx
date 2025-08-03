// components/FormInput.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error,
  icon: Icon,
  disabled = false,
  required = false,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 text-right">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right ${
            error
              ? "border-red-500"
              : disabled
              ? "border-gray-200 bg-gray-100"
              : "border-gray-300"
          } ${disabled ? "cursor-not-allowed" : ""}`}
        />
        {Icon && (
          <Icon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        )}
      </div>
      {error && <p className="text-red-500 text-sm text-right">{error}</p>}
    </div>
  );
};

export default FormInput;