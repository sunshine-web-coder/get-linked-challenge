export default function Textarea({ placeholder, onChange, className }) {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      className={`resize-none custom_textarea pl-[24px] md:pl-[29px] pr-[24px] md:pr-[29px] pt-[13px] pb-[12px] text-white text-base font-normal w-full bg-white bg-opacity-5 rounded shadow border border-white ${className}`}
    />
  );
}
