export default function Input({ type, placeholder, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`custom_input pl-[24px] md:pl-[29px] pr-[24px] md:pr-[29px] pt-[13px] pb-[12px] text-white text-base font-normal w-full h-[47px] bg-white bg-opacity-5 rounded shadow border border-white ${className}`}
    />
  );
}
