import line1Img from "../assets/timeline/Line1.png";
import noImg from "../assets/timeline/No1.png";
import { timeLineData } from "./data";
// flexReverse
export default function TimelinePage() {
  return (
    <div className="max-w-[1000px] mx-auto mt-10">
      {timeLineData.map((item) => (
        <div className={`flex gap-[50px] mb-[12px] ${item.flexReverse ? "flex-row-reverse" : ""}`} key={item.id}>
          <div className={`w-[500px] flex flex-col justify-end text-2xl font-bold ${item.flexReverse ? "text-left" : "text-right"}`}>
            <p className="text-[#D434FE]">{item.title}</p>
            <p className="text-[#ffffff] text-sm font-normal mt-2">
              {item.desc}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-[0px] h-[137px] border-4 border-fuchsia-500" />
            <div className="flex items-center justify-center text-white text-2xl font-bold w-[53px] h-[53px] bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-[26.50px]">
              {item.id}
            </div>
          </div>
          <div className="w-[500px] flex flex-col justify-end mb-2">
            <p className={`text-[#D434FE] text-2xl font-bold ${item.flexReverse ? "text-right" : ""}`}>
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
