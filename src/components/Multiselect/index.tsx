// components/MultiSelect.tsx
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (newSelectedOptions: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    const newSelectedOptions = isSelected
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    onChange(newSelectedOptions);
  };

  console.log("selectedOptions", selectedOptions);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          {selectedOptions.length > 0 ? (
            selectedOptions.join(", ")
          ) : (
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={toggleDropdown}>
              Pilih Opsi
            </button>
          )}
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center justify-between p-2 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}>
              <span className="text-sm">{option.label}</span>
              {selectedOptions.includes(option.value) && (
                <svg
                  className="h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.293 10.293a1 1 0 0 1 1.414 0L10 13.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
