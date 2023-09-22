import { useState } from "react";

export default function CustomDropdown({
  options,
  selectedOption,
  onSelect,
  className,
  defaultText,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedOption, setDisplayedOption] = useState(selectedOption);

  const handleOptionClick = (option) => {
    setDisplayedOption(option); // Update the displayed option
    onSelect(option); // Call the onSelect callback with the selected option
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div
          className="pl-[10px] md:pl-[18px] cursor-pointer pr-[18px] md:pr-[10px] pt-[13px] pb-[12px] text-white text-xs md:text-sm font-normal w-full h-[47px] bg-white bg-opacity-5 rounded shadow border border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? displayedOption : defaultText}
          {/* {displayedOption === defaultText ? defaultText : displayedOption} */}
        </div>
        <i className="fa-solid z-[-1] absolute right-[10px] md:right-[20px] top-[15px] text-white fa-chevron-down"></i>
      </div>

      {isOpen && (
        <ul className="absolute cursor-pointer text-white text-xs md:text-sm font-normal w-full bg-[#211A33] shadow border rounded border-gray-500">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="py-2 px-2 cursor-pointer hover:bg-gray-600"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
