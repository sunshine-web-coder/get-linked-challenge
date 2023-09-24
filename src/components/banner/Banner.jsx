import { Link } from "react-router-dom";
import chainImg from "../../assets/chain.png";
import creativeImg from "../../assets/bulb.png";
import starImg from "../../assets/star.png";
import starGrayImg from "../../assets/star-gray.png";
import manImg from "../../assets/man-wearing-smart-glasses.png";
import shinImg from "../../assets/shin.png";
import purpleLensFlareImg from "../../assets/Purple-Lens-Flare.png";
import purpleLensFlare2Img from "../../assets/Purple-Lens-Flare2.png";
import matrixImg from "../../assets/metrix.png";
import vector1Img from "../../assets/vector1.png";
import spark1f4a5Img from "../../assets/1f4a5.png";
import style from "./Banner.module.scss";
import CountdownTimer from "../countdownTimer/CountdownTimer";


export default function Banner() {
  return (
    <div className="pt-[32px]">
      <img
        className="absolute z-[-1] top-[-50px] left-[-100px] opacity-[0.5] w-[1086px]"
        src={purpleLensFlare2Img}
        alt=""
      />
      <div className="flex justify-between">
        <div className="w-full pl-[16px] pr-[16px] flex flex-col items-end mr-5 justify-end relative z-[1] text-white text-4xl font-bold">
          <div className="max-w-max leading-snug text-[16px] md:text-[36px]" data-aos="fade-left">
            Igniting a Revolution in HR Innovation
          </div>
          <div className="flex justify-end">
            <img className="w-[100px] md:w-full" src={vector1Img} alt="" />
          </div>
        </div>
      </div>
      <div className={`flex ${style.banner_in}`}>
        <div className={`w-[1150px] ml-[45px] ${style.left}`}>
          <div className="ml-[100px]">
            <img
              className="w-2.5 h-3 md:w-[26px] md:h-8"
              src={starImg}
              alt=""
            />
          </div>
          <div className="leading-slug max-[1150px]:flex max-[1150px]:flex-col max-[1150px]:items-center max-[1150px]:justify-center md:leading-[88px] mt-5 md:mt-[100px]">
            <h1 className=" text-white flex items-center md:items-start justify-center md:justify-start clash_display text-[32px] md:text-[75px] font-bold font-['Clash Display']">
              <span className="flex gap-2">
                <span>getlinked</span>
                <span className="flex relative">
                  <span>Tech</span>
                  <img
                    className="w-[18px] md:w-[53px] h-[26px] absolute right-[18px] md:right-[40px] md:h-[73px] max-[767px]:bottom-[40px] bottom-[55px] md:bottom-[65px]"
                    src={creativeImg}
                    alt=""
                  />
                  <div className="absolute right-0 bottom-[80px] md:hidden">
                    <img
                      className="w-1.5 h-2 md:w-[26px] md:h-8"
                      src={starGrayImg}
                      alt=""
                    />
                  </div>
                </span>
              </span>
            </h1>
            <div className="flex items-center md:items-start justify-center gap-1 md:justify-between">
              <h1 data-aos="fade-right" className="text-white flex gap-2 clash_display text-[32px] md:text-[75px] font-bold font-['Clash Display']">
                <span>Hackathon</span>
                <span className="text-[#D434FE] flex">
                  <span>1.0</span>
                  <img
                    className="w-[32.80px] h-[32.80px] md:h-[86px] md:w-[86px]"
                    src={chainImg}
                    alt=""
                  />
                  <img
                    className="w-[22.12px] md:w-[58px] h-[22.12px] md:h-[58px]"
                    src={spark1f4a5Img}
                    alt=""
                  />
                </span>
              </h1>
            </div>
          </div>
          <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center text-white text-center md:text-left text-[13px] md:text-xl font-normal mt-2 leading-slug md:leading-[33.20px]">
            <span className="max-[1150px]:text-center">
              Participate in getlinked tech Hackathon 2023 stand <br />a chance
              to win a Big prize
            </span>
          </div>
          <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
            <div className="mt-[24px] relative md:mt-[41px] flex items-center justify-center md:justify-start">
              <div className="max-w-max relative">
                <Link
                  className="w-[152px] md:w-[172px] h-[46.84px] md:h-[53px] flex items-center justify-center text-white text-base font-normal bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  to="/register"
                >
                  Register
                </Link>
                <div className="absolute right-[-20px] bottom-[20px] md:hidden">
                  <img
                    className="w-1.5 h-2 md:w-[26px] md:h-8"
                    src={starGrayImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="mt-[10px] flex justify-end w-full md:w-[500px]">
              <img className="w-[26px]" src={starGrayImg} alt="" />
            </div>
          </div>

          {/* <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center pb-[50px]">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
                <span>0</span>
                <span>0</span>
                <span>
                  <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                    H
                  </sub>
                </span>
              </div>
              <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
                <span>0</span>
                <span>0</span>
                <span>
                  <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                    M
                  </sub>
                </span>
              </div>
              <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
                <span>0</span>
                <span>0</span>
                <span>
                  <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                    S
                  </sub>
                </span>
              </div>
            </div>
          </div> */}
          <div>
            <CountdownTimer targetDate="2023-09-27T14:25:00" />
          </div>
        </div>
        <div className={`w-full relative max-[1150px]:top-[16px] ${style.right}`}>
          <img
            className="w-[26px] hidden md:block top-10 absolute"
            src={starGrayImg}
            alt=""
          />
          <img className="w-full h-full absolute" src={shinImg} alt="" />
          <img
            className={`w-full h-full absolute ${style.m_hidden}`}
            src={purpleLensFlareImg}
            alt=""
          />
          <img
            className="w-full hidden md:block h-full absolute"
            src={matrixImg}
            alt=""
          />
          <img
            className="w-full h-full relative grayscale-[50%] opacity-[0.7]"
            src={manImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
