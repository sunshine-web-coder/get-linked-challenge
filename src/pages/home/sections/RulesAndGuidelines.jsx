import img1 from "../../../assets/star-gray.png";
import img2 from "../../../assets/star.png";
import img3 from "../../../assets/7450159.png";

export default function RulesAndGuidelines() {
  return (
    <div className="border-b border-gray-700 pl-4 pr-4">
      <div className="w-full max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="custom_container max-[1150px]:flex-col-reverse flex items-center">
          <div className="w-full relative max-[1150px]:pt-[30px] pt-[62px] pb-[62px] flex flex-col items-center justify-center md:block">
            <div>
              <div className="relative max-[1150px]:mx-auto max-w-[200px] md:max-w-[300px]">
                <p className="text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white">
                  Rules and
                  <br />
                  <span className="text-[#D434FE]">Guidelines</span>
                </p>
                <img
                  className="w-2 h-2.5 md:w-[26px] md:h-8 absolute right-0 bottom-[85px] max-[1150px]:bottom-[0px]"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-white max-[1150px]:flex flex-col max-[1150px]:text-center text-left max-[1150px]:mx-auto mt-[16px] text-[13px] md:text-sm font-normal max-w-[500px]">
                <p className="leading-7">
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you&apos;re a coding genius, a design maverick, or a concept
                  wizard, you&apos;ll have the chance to transform your ideas
                  into reality. Solving real-world problems, pushing the
                  boundaries of technology, and creating solutions that can
                  change the world, that&apos;s what we&apos;re all about!
                </p>
                <img
                  className="w-2 h-2.5 md:w-[26px] md:h-8 max-[1150px]:relative max-[1150px]:right-0 max-[1150px]:left-5 max-[1150px]:bottom-0 absolute right-[50px] bottom-[88px]"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-[334px]:w-full flex items-center justify-center w-[300px] md:w-full relative">
            <img
              className="w-2 h-2.5 md:w-[26px] md:h-8 block md:hidden"
              src={img2}
              alt=""
            />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
