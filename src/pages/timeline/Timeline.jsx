import img1 from "../../assets/star-pu.png";
import img2 from "../../assets/star.png";
import img3 from "../../assets/star-gray.png";
import { timeLineData } from "./data";

export default function Timeline() {
  return (
    <div className="border-b border-gray-700 pl-4 pr-4 pb-[64px]">
      <div className="custom_container mt-10">
        <div className="text-center text-white text-[32px] font-bold mb-[56px] md:mb-[91px]" data-aos="fade-down">
          <h3 className="clash_display">Timeline</h3>
          <p className="text-sm font-normal leading-normal mt-[12px]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="relative">
          <img className="w-3.5 h-4 md:w-[30px] md:h-9 absolute top-[-10px] md:top-0 left-[55px] md:left-[250px] origin-top-left rotate-180" src={img1} alt="" />
          <img className="w-3.5 h-4 md:w-[30px] md:h-9 absolute right-[120px] top-[48%] md:top-[43%] origin-top-left rotate-180" src={img2} alt="" />
          <img className="w-3.5 h-4 md:w-[30px] md:h-9 absolute bottom-[-60px] md:bottom-[0px] left-[5px] md:left-[120px] origin-top-left rotate-180" src={img3} alt="" />

           {/* desktop timeline */}
          <div className="hidden md:block">
            {timeLineData.map((item) => (
              <div className={`flex gap-[50px] mb-[12px] ${item.flexReverse ? "flex-row-reverse" : ""}`}key={item.id}>
                <div className={`w-full flex flex-col justify-end text-2xl font-bold ${item.flexReverse ? "text-left" : "text-right"}`}
                 data-aos={item.flexReverse ? "fade-left" : "fade-right"}
                >
                  <p className={`text-[#D434FE]`}>{item.title}</p>
                  <p className={`text-[#ffffff] max-[1150px]:p-0 text-sm font-normal mt-2 ${item.flexReverse ? "pr-[130px]" : "pl-[130px]"}`}>
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[0px] h-[137px] border-4 border-fuchsia-500" />
                  <div className="flex items-center justify-center text-white text-2xl font-bold w-[53px] h-[53px] bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-[26.50px]">
                    {item.id}
                  </div>
                </div>
                <div className="w-full flex flex-col justify-end mb-2">
                  <p
                    className={`text-[#D434FE] text-2xl font-bold ${
                      item.flexReverse ? "text-right" : ""
                    }`}
                  >
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* mobile timeline */}
          <div className="block md:hidden">
            {timeLineData.map((item) => (
              <div className={`gap-[50px] mb-[40px]`} key={item.id}>
                <div className="flex gap-4">
                  <div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-[0px] h-[77px] border-4 border-fuchsia-500" />
                      <div className="flex items-center justify-center text-white text-xs md:text-2xl font-bold w-[19.32px] h-[19.32px] md:w-[53px] md:h-[53px] bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-[26.50px]">
                        {item.id}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-between gap-2">
                    <div
                      className={`w-full text-xs md:text-2xl font-bold`}
                    >
                      <p className="text-[#D434FE]">{item.title}</p>
                      <p className="text-[#ffffff] text-sm font-normal mt-2">
                        {item.desc}
                      </p>
                    </div>
                    <div>
                      <p className={`text-[#D434FE] text-xs md:text-2xl font-bold`}>
                        {item.date}
                      </p>
                    </div>
                  </div> 
                </div>
              </div>
            ))}
          </div>  
        </div>
        
      </div>
    </div>
  );
}
