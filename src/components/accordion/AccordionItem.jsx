import { useState } from "react";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "open" : ""}`}>
      <button className="w-full text-left border-b border-b-[#D434FE] pt-5 pb-3 text-white text-sm font-normal leading-7 flex justify-between items-center" onClick={toggleAccordion}>
        <span>{title}</span>
        <i className={`text-[#D434FE] text-xs ${isOpen ? "fas fa-minus" : "fas fa-plus"}`}></i>
      </button>
      {isOpen && <div className="pt-5 pb-3 border-b border-b-[#D434FE]">{content}</div>}
    </div>
  );
}
