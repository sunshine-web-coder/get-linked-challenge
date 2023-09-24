import img1 from "../../../assets/star-gray.png";
import img2 from "../../../assets/star-pu.png";
import img3 from "../../../assets/Privacy-Policy-and-Terms/r.png";
import img4 from "../../../assets/Privacy-Policy-and-Terms/list-check.png";
import { Link } from "react-router-dom";
import purpleLensFlare10Img from "../../../assets/Purple-Lens-Flare10.png";

export default function PrivacyPolicyAndTerms() {
  return (
    <div className="relative p-[16px] max-[1150px]:pt-[62px] pt-[102px] pb-[82px] border-b border-gray-700 pl-4 pr-4">
      <img
        className="absolute w-[285px] h-[366px] md:w-[1037px] md:h-[948px] z-[-1] max-[1150px]:bottom-[250px] bottom-[-250px] left-[0px] opacity-[0.5]"
        src={purpleLensFlare10Img}
        alt=""
      />
      <div className="w-full max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
        <div className="custom_container max-[1150px]:flex-col flex max-[767px]:items-center">
          <div className="w-full relative max-[1150px]:mb-[50px] flex flex-col items-center justify-center md:block">
            <div>
              <div className="relative max-[1150px]:mx-auto max-w-[200px] md:max-w-[300px]">
                <p className="text-xl md:text-[32px] max-[1150px]:text-center text-left leading-snug clash_display font-bold text-white" data-aos="fade-down">
                  Privacy Policy and
                  <br />
                  <span className="text-[#D434FE]">Terms</span>
                </p>
                <img
                  className="w-2 h-2.5 md:w-[26px] md:h-8 absolute right-[-50px] bottom-[85px] max-[1150px]:bottom-[0px]"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="text-white relative max-[1150px]:flex flex-col max-[1150px]:text-center text-left max-[1150px]:mx-auto mt-[16px] text-xs md:text-sm font-normal max-w-[500px]">
                <p className="leading-7" data-aos="fade-right">Last updated on September 12, 2023</p>
                <img
                  className="w-[17px] h-5 md:w-[23px] md:h-7 max-[1150px]:absolute max-[1150px]:right-0 max-[1150px]:bottom-[-25px] absolute right-[-80px] bottom-[88px]"
                  src={img2}
                  alt=""
                />
                <p className="md:leading-7 mt-[10px] md:mt-[30px]" data-aos="fade-right">
                  Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant
                </p>
              </div>
            </div>
            <div className="max-[767px]:w-full pl-[15px] md:pl-[72px] pr-[12px] md:pr-[39px] pt-[39px] pb-[39px] md:pt-[59px] md:pb-[59px] mt-[29px] md:mt-[69px] w-[569px] bg-zinc-300 bg-opacity-5 rounded-[5px] border border-fuchsia-500" data-aos="fade-right">
              <div className="text-center md:text-left text-white text-xs md:text-sm font-normal leading-[30.30px]">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </div>
              <div className="mt-[24px]">
                <p className="text-fuchsia-500 text-[13px] md:text-base font-bold leading-[34.62px]">
                  Licensing Policy
                </p>
                <p className="text-white text-xs md:text-sm font-bold leading-[30.30px]">
                  Here are terms of our Standard License:
                </p>
                <ul className="mt-[18px] text-white text-xs md:text-sm font-normal">
                  <li className="flex gap-[14px]">
                    <img className="w-[17px] h-[17px]" src={img4} alt="" />
                    <span>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </span>
                  </li>
                  <li className="flex gap-[14px] mt-[18px]">
                    <img className="w-[17px] h-[17px]" src={img4} alt="" />
                    <span>
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-center mt-[29px]">
                  <Link
                    className="w-[96.35px] md:w-[172px] h-[31.35px] md:h-[53px] flex items-center justify-center text-white text-xs md:text-base font-normal bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                    to=""
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-[334px]:w-full flex items-center justify-center w-[300px] max-[1150px]:h-full h-[858px] md:w-full relative" data-aos="fade-left">
            <img className="max-[1150px]:h-[500px] max-[767px]:h-[300px]" src={img3} alt="" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  );
}
