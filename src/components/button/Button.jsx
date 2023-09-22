export default function Button({ type, onClick, text, className }) {
  return (
    <button
      type={type}
      className={`w-[172px] h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded text-white text-base font-normal ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
