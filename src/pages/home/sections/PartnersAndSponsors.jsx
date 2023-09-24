import img1 from "../../../assets/partners-and-sponsors/Liberty-company-logo.png";
import img2 from "../../../assets/partners-and-sponsors/Liberty-pay-logo-white.png";
import img3 from "../../../assets/partners-and-sponsors/Winwise-logo-White.png";
import img4 from "../../../assets/partners-and-sponsors/wisper-logo-white.png";
import img5 from "../../../assets/partners-and-sponsors/Paybox.png";
import img6 from "../../../assets/partners-and-sponsors/VizualPlus.png";
import img7 from "../../../assets/star-pu.png";
import img8 from "../../../assets/sata-gra.png";
import img9 from "../../../assets/star.png";
import purpleLensFlare8Img from "../../../assets/Purple-Lens-Flare8.png";
import purpleLensFlare6Img from "../../../assets/Purple-Lens-Flare6.png";

export default function PartnersAndSponsors() {
  return (
    <div className="p-[16px] relative pt-[62px] pb-[62px] border-b border-gray-700 pl-4 pr-4">
      <img
        className="absolute w-[252px] h-[446px] md:w-[1037px] md:h-[948px] z-[-1] top-[50px] md:top-[-150px] left-[0px] opacity-[0.5]"
        src={purpleLensFlare8Img}
        alt=""
      />
      <img
        className="absolute w-[252px] h-[446px] md:w-[1037px] md:h-[948px] z-[-1] max-[1150px]:top-[250px] top-[200px] right-[-100px] md:right-[-150px] opacity-[0.5]"
        src={purpleLensFlare6Img}
        alt=""
      />
      <div className="custom_container">
        <div className="max-w-[530px] mx-auto text-center text-white text-xl md:text-[32px] font-bold leading-7" data-aos="fade-down">
          <h3 className="clash_display mb-[22px]">Partners and Sponsors</h3>
          <p className="text-xs md:text-sm font-normal">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <div className="custom_container relative mt-[65px] bg-white bg-opacity-0 max-[767px]:pt-10 max-[767px]:pb-10 rounded-[5px] border border-fuchsia-500">
        <img className="w-2 h-2.5 md:w-[30px] md:h-9 absolute top-[5px] md:top-[-45px] left-[45px]" src={img7} alt="" />
        <div className="max-w-[898.34px] h-[560px] max-[450px]:h-[148.59px] max-[767px]:h-[168.59px] mx-auto flex flex-col items-center justify-center">
          <div className="flex">
            <div className="pb-5 relative flex items-center justify-center border-t-0 border-l-0 border-4 border-fuchsia-500 max-[473px]:w-[90px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
              <img className="max-[1150px]:max-w-[70px] max-[450px]:w-8" src={img1} alt="" data-aos="fade-down" />
              <div className="z-[1] w-[50px] h-[50px] absolute bottom-[-30px] right-[-28px] rounded-full bg-[#150E28]" />
            </div>
            <div className="pb-5 relative flex items-center justify-center border-t-0 border-l-0 border-4 border-fuchsia-500 max-[473px]:w-[90px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
            <img className="w-2 h-2.5 md:w-[21px] md:h-[25px] absolute max-[450px]:top-[-20px] top-[5px] md:top-[-55px] right-[40px]" src={img8} alt="" />
              <img className="max-[1150px]:max-w-[100px] max-[450px]:w-[56.57px]" src={img2} alt="" data-aos="fade-down"/>
              <div className="z-[1] w-[50px] h-[50px] absolute bottom-[-30px] right-[-28px] rounded-full bg-[#150E28]" />
            </div>
            <div className="pb-5 flex items-center justify-center border-t-0 border-l-0 border-r-0 border-4 border-fuchsia-500 max-[473px]:w-[90px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
              <img className="max-[1150px]:max-w-[70px] max-[450px]:w-[34.92px]" src={img3} alt="" data-aos="fade-down" />
            </div>
          </div>
          <div className="flex">
            <div className="pt-5 flex items-center justify-center border-t-0 border-l-0 border-b-0 border-4 border-fuchsia-500 max-[450px]:w-[90px] max-[473px]:w-[120px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
              <img className="max-[1150px]:max-w-[70px] max-[450px]:w-[39.01px]" src={img4} alt="" data-aos="fade-up" />
            </div>
            <div className="relative pt-5 flex items-center justify-center border-t-0 border-l-0 border-b-0 border-4 border-fuchsia-500 max-[450px]:w-[90px] max-[473px]:w-[100px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
              <img className="max-[1150px]:max-w-[70px] max-[450px]:w-[50px]" src={img5} alt="" data-aos="fade-up" />
              <img className="w-2.5 h-3 md:w-[26px] md:h-8 absolute bottom-[-35px] md:bottom-[-55px] right-[40px]" src={img9} alt="" />
            </div>
            <div className="pt-5 flex items-center justify-center border-l-0 border-t-0 border-b-0 border-r-0 border-4 border-fuchsia-500 max-[450px]:w-[90px] max-[473px]:w-[100px] max-[621px]:w-[150px] max-[1150px]:w-[200px] w-[300px]">
              <img className="max-[1150px]:max-w-[100px] max-[450px]:w-[73px]" src={img6} alt="" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
