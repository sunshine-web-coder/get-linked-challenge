import BeatLoader from "react-spinners/BeatLoader";

export default function Button({ type, onClick, text, className, disabled }) {
  return (
    <button
      type={type}
      className={`w-[172px] h-[53px] rounded text-white text-base font-normal ${
        disabled
          ? 'bg-gradient-to-l from-purple-600/10 text-white/20 via-fuchsia-500/10 to-pink-500/10 cursor-not-allowed'
          : 'bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? <BeatLoader color="#36d7b7" /> : text}
    </button>
  );
}
