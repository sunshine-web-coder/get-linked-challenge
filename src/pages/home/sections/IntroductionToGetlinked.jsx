import img1 from "../../../assets/sata-gra.png";
import img2 from "../../../assets/the-big-idea-1.png";
import img3 from "../../../assets/arrow.png";
import img4 from "../../../assets/star-pu.png";

export default function IntroductionToGetlinked() {
  return (
    <div className="border-t border-b border-gray-700 pl-4 pr-4 pt-[62px] pb-[62px]">
      <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="custom_container flex items-center max-[1150px]:flex-col">
          <div className="max-[334px]:w-full w-[300px] md:w-full relative">
            <img
              className="w-[11px] h-[13px] md:w-[21px] md:h-[25px] absolute top-[80px] md:top-0 md:relative"
              src={img1}
              alt=""
            />
            <div className="flex flex-col items-center max-[1150px]:justify-center w-full md:w-[490px] relative">
              <img
                className="w-[264px] h-[257px] md:w-[490px] md:h-[477px] ml-0 md:ml-[32px]"
                src={img2}
                alt=""
              />
              <img
                className="w-[49.43px] absolute bottom-0 right-[-30px] h-[57.97px] max-[1150px]:relative max-[1150px]:left-0"
                src={img3}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center md:block h-full md:h-[300px]">
            <div>
              <div className="relative max-w-[500px]">
                <p className="text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white">
                  Introduction to getlinked <br />
                  <span className="text-[#D434FE]">tech Hackathon 1.0</span>
                </p>
                <img
                  className="w-2 h-2.5 md:w-[30px] md:h-9 absolute right-0 top-5"
                  src={img4}
                  alt=""
                />
              </div>
              <div className="text-white max-[1150px]:text-center text-left mt-[16px] max-[767px]:text-[13px] text-sm font-normal max-w-[500px]">
                <p className="leading-7">
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you&apos;re a coding genius, a design maverick, or a concept
                  wizard, you&apos;ll have the chance to transform your ideas
                  into reality. Solving real-world problems, pushing the
                  boundaries of technology, and creating solutions that can
                  change the world, that&apos;s what we&apos;re all about!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
