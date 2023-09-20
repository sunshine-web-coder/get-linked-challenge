import img1 from "../../../assets/prizes-and-rewards/9486889.png";
import img2 from "../../../assets/prizes-and-rewards/r.png";
import img3 from "../../../assets/sata-gra.png";
import img4 from "../../../assets/star.png";

export default function PrizesAndRewards() {
  return (
    <div className="border-b border-gray-700 pl-4 pr-4 pt-[20px] md:pt-[62px] pb-[62px]">
      <div className="max-[1150px]:flex max-[1150px]:flex-col max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="relative max-[1150px]:mb-[50px] flex justify-end max-[1150px]:pl-0 pl-[130px]">
          <img className="absolute max-[1150px]:left-[45px] left-[300px] w-[7px] h-[9px] top-2 md:w-[21px] md:h-[25px]" src={img3} alt="" />
          <img className="absolute max-[1150px]:right-[45px] right-[200px] w-[7px] h-[9px] top-[20px] md:w-[21px] md:h-[25px]" src={img3} alt="" />
          <div className="max-w-[500px]">
            <p className="text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white">
              Prizes and
              <br />
              <span className="text-[#D434FE]">Rewards</span>
            </p>
            <p className="text-white max-[1150px]:text-center text-base font-normal leading-7 mt-[16px]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className="custom_container flex max-[1150px]:flex-col">
          <div className="relative max-[1150px]:mb-[50px] w-full flex flex-col items-center justify-end">
            <div className="">
              <img className="w-[508px]" src={img1} alt="" />
              <img
                className="max-w-[300px] w-[15px] h-[18px] mx-auto relative top-[10px] left-[-50px]"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center md:block h-full">
            <div>
              <div className="text-white max-[1150px]:text-center text-left mt-[16px] max-[767px]:text-[13px] text-sm font-normal max-w-[500px]">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
