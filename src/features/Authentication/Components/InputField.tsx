import React from 'react';
import { ChevronDown, } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  icon?: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  required?: boolean;
  autoComplete?: string;
  dropdownOptions?: string[];
  showDropdown?: boolean;
  onSelect?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  icon: Icon,
  placeholder,
  value,
  onChange,
  onClick,
  required = false,
  autoComplete,
  dropdownOptions,
  showDropdown,
  onSelect,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onClick={onClick}
          autoComplete={autoComplete}
          className={`focus:ring-[#2563EB] focus:border-[#2563EB] block w-full ${Icon ? 'pl-10' : 'pl-3'} sm:text-sm border-gray-300 rounded-md py-3 border`}
          placeholder={placeholder}
        />
        {dropdownOptions && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        )}
        {showDropdown && dropdownOptions && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {dropdownOptions.map((option) => (
              <div
                key={option}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-[#2563EB] hover:text-white"
                onClick={() => onSelect && onSelect(option)}
              >
                <span className="block truncate">{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;