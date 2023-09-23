import img1 from "../../assets/faq.png";
import img2 from "../../assets/star-pu.png";
import Accordion from "../../components/accordion/Accordion";

export default function Faqs() {
  return (
    <div className="border-b border-gray-700 pl-4 pr-4 pt-[62px] pb-[62px]">
      <div className="w-full max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="custom_container max-[1150px]:flex-col flex gap-[60px]">
          <div className="w-full relative max-[1150px]:pt-[30px] pt-[62px] flex flex-col items-center justify-center md:block">
            <div>
              <div className="relative">
                <p className="pl-8 text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white">
                  Frequently Ask
                  <br />
                  <span className="text-[#D434FE]">Question</span>
                </p>
                <img
                  className="w-[18px] h-[22px] md:w-[26px] md:h-8 absolute left-0 bottom-[118px] max-[1150px]:bottom-[55px]"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="pl-8 max-[1150px]:pl-0 text-white max-[1150px]:flex flex-col max-[1150px]:text-center text-left max-[1150px]:mx-auto mt-[16px] text-[13px] md:text-sm font-normal">
                <p className="leading-7">
                  We got answers to the questions that you might want to ask
                  about getlinked Hackathon 1.0
                </p>
                <div className="max-[1150px]:mt-[30px] mt-[50px]">
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
            <div className="max-[1150px]:max-w-[400px] max-[1150px]:mx-auto w-[300px] md:w-full relative">
              <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
