import { Link } from "react-router-dom";
import img1 from "../../assets/star-gray.png";
import img2 from "../../assets/star-pu.png";
import img3 from "../../assets/star.png";
import insta from "../../assets/footer/insta.png";
import twitter from "../../assets/footer/twitter.png";
import fb from "../../assets/footer/fb.png";
import linkedln from "../../assets/footer/linkedln.png";
import tel from "../../assets/footer/tel.png";
import location from "../../assets/footer/location.png";
import { footerLinks } from "./data";
import { Divider } from "antd";

export default function Footer() {
  return (
    <div className="pt-[70px] relative p-[16px]">
      <img
        src={img3}
        className="absolute max-[767px]:top-[120px] md:w-[15px] md:h-[18px] w-[9px] h-2.5"
        alt=""
      />
      <img
        src={img2}
        className="absolute max-[767px]:bottom-[13%] max-[767px]:left-[15%] max-[450px]:left-[30%] bottom-[80px] right-[50%] md:w-[15px] md:h-[18px] w-[9px] h-2.5"
        alt=""
      />
      <img
        src={img1}
        className="absolute max-[767px]:top-[45%] max-[767px]:left-[45%] top-[80px] right-[30%] md:w-[15px] md:h-[18px] w-[9px] h-2.5"
        alt=""
      />
      <img
        src={img3}
        className="absolute max-[767px]:bottom-[25%] max-[767px]:left-[55%] bottom-[150px] right-[10%] md:w-[15px] md:h-[18px] w-[9px] h-2.5"
        alt=""
      />

      <div className="custom_container pl-[36px] pr-[20px]">
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[100px]">
          <div className="w-full flex flex-col justify-between">
            <div>
              <Link to="/">
                <div>
                  <span className="text-white text-xl md:text-3xl font-bold clash_display">
                    get
                  </span>
                  <span className="text-fuchsia-500 text-xl md:text-3xl font-bold clash_display">
                    linked
                  </span>
                </div>
              </Link>
              <p className="text-white mt-[11px] max-w-[450px] text-xs font-normal leading-tight">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>

            <div className="text-white text-xs font-normal leading-tight max-[767px]:mt-[39px]">
              <Link to="">Terms of Use</Link>
              <Divider className="border-fuchsia-500" type="vertical" />
              <Link to="privacy-policy-and-terms">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full">
              {footerLinks.map((category, index) => (
                <div key={index} className="w-full">
                  <h3 className="text-fuchsia-500 text-sm font-semibold leading-normal mb-[11px]">
                    {category.title}
                  </h3>
                  <ul>
                    {category.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-[11px]">
                        <Link
                          to={item.slug}
                          className="text-white text-xs font-normal leading-tight"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="w-full flex items-center">
                <div className="text-fuchsia-500 text-xs font-normal mr-[16px]">
                  Follow us
                </div>
                <div className="flex gap-3 items-center">
                  <Link to="">
                    <img
                      className="max-[767px]:w-3 max-[767px]:h-3"
                      src={insta}
                      alt=""
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="max-[767px]:w-3 max-[767px]:h-3"
                      src={twitter}
                      alt=""
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="max-[767px]:w-2 max-[767px]:h-4"
                      src={fb}
                      alt=""
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="max-[767px]:w-3 max-[767px]:h-3"
                      src={linkedln}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full max-[767px]:mt-[64px]">
              <h3 className="text-fuchsia-500 text-sm font-semibold leading-normal">
                Contact
              </h3>
              <ul className="text-white text-xs font-normal mt-[19px]">
                <li className="flex gap-[16px] mb-[22px]">
                  <img className="w-3 h-3" src={tel} alt="" />{" "}
                  <span>+234 6707653444</span>
                </li>
                <li className="flex gap-[16px]">
                  <img className="w-3 h-3" src={location} alt="" />
                  <p className="max-w-[150px]">
                    27,Alara Street Yaba 100012 Lagos State
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-[20px] pb-[20px] text-center text-white text-xs font-normal mt-[64px] max-[767px]:mt-[64px]">
          All rights reserved. © getlinked Ltd.
        </div>
      </div>
    </div>
  );
}
