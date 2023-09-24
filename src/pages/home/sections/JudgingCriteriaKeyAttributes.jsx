import img1 from "../../../assets/star-pu.png";
import img2 from "../../../assets/8046554.png";
import img3 from "../../../assets/mobile-8046554.png";
import img4 from "../../../assets/star.png";
import purpleLensFlare6Img from "../../../assets/Purple-Lens-Flare6.png";
import purpleLensFlare5Img from "../../../assets/Purple-Lens-Flare5.png";

import { Link } from "react-router-dom";

export default function JudgingCriteriaKeyAttributes() {
  return (
    <div className="border-b relative border-gray-700 pl-4 pr-4 pt-[20px] md:pt-[62px] pb-[62px]">
      <img
        className="absolute w-[404px] h-[444px] md:w-[1037px] md:h-[948px] z-[-1] top-[50px] md:top-[100px] left-[0px] opacity-[0.5]"
        src={purpleLensFlare5Img}
        alt=""
      />
      <img
        className="absolute w-[252px] h-[444px] md:w-[1037px] md:h-[948px] z-[-1] bottom-[0px] md:top-[300px] right-[0px] md:right-[-300px] opacity-[0.5]"
        src={purpleLensFlare6Img}
        alt=""
      />
      <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="custom_container flex items-center gap-[0px] md:gap-[50px] max-[1150px]:flex-col">
          <div className="flex items-center justify-center md:justify-left max-[334px]:w-full w-full md:w-full max-[1150px]:pt-[50px] max-[767px]:h-[325px] max-[1150px]:h-[525px] h-[725px] relative">
            <img
              className="w-[11px] h-[13px] md:w-[21px] md:h-[25px] absolute top-0 left-[220px] md:left-[120px]"
              src={img1}
              alt=""
            />
            <div>
              <div className="flex flex-col items-center max-[1150px]:justify-center w-full relative">
                <img
                  className="hidden md:block h-[257px] w-full md:h-[477px]"
                  src={img2}
                  alt=""
                  data-aos="fade-right"
                />
                <img
                  className="block md:hidden h-[257px] w-full md:h-[477px]"
                  src={img3}
                  alt=""
                  data-aos="fade-right"
                />
              </div>
              <img
                className="w-2 hidden md:block h-2.5 md:w-[26px] md:h-8 absolute right-20 bottom-0"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center md:block h-full">
            <div>
              <div className="relative max-w-[500px]">
                <p className="text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white" data-aos="fade-left">
                  Judging Criteria <br />
                  <span className="text-[#D434FE]">Key attributes</span>
                </p>
              </div>
              <div className="text-white max-[1150px]:text-center text-left mt-[16px] max-[767px]:text-[13px] text-sm font-normal max-w-[500px]" data-aos="fade-left">
                <p className="leading-7" >
                  <span className="text-[#D434FE]">
                    Innovation and Creativity:
                  </span>
                  &nbsp; Evaluate the uniqueness and creativity of the solution.
                  Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </p>
                <p className="leading-7 mt-[5px]">
                  <span className="text-[#D434FE]">Functionality:</span>&nbsp;
                  Assess how well the solution works. Does it perform its
                  intended functions effectively and without major issues?
                  Judges would consider the completeness and robustness of the
                  solution.
                </p>
                <p className="leading-7 mt-[5px]">
                  <span className="text-[#D434FE]">Impact and Relevance:</span>
                  &nbsp; Determine the potential impact of the solution in the
                  real world. Does it address a significant problem, and is it
                  relevant to the target audience? Judges would assess the
                  potential social, economic, or environmental benefits.
                </p>
                <p className="leading-7 mt-[5px]">
                  <span className="text-[#D434FE]">Technical Complexity:</span>
                  &nbsp; Evaluate the technical sophistication of the solution.
                  Judges would consider the complexity of the code, the use of
                  advanced technologies or algorithms, and the scalability of
                  the solution.
                </p>
                <p className="leading-7 mt-[5px]">
                  <span className="text-[#D434FE]">
                    Adherence to Hackathon Rules:
                  </span>
                  &nbsp; Judges will Ensure that the team adhered to the rules
                  and guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </p>
                <div className="max-[1150px]:max-w-full max-w-max max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center mt-11 relative">
                  <Link
                    className="w-[152px] md:w-[172px] h-[46.84px] md:h-[53px] flex items-center justify-center text-white text-base font-normal bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                    to=""
                  >
                    Read More
                  </Link>
                  <img
                    className="w-2 max-[1150px]:block hidden h-2.5 md:w-[26px] md:h-8 absolute right-10"
                    src={img4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
