import img1 from "../../assets/modals/congratulation.png"
import wink from "../../assets/modals/wink.png"
import img2 from "../../assets/sata-gra.png";
import img3 from "../../assets/star-pu.png";
import img4 from "../../assets/star-gray.png";
import Button from "../button/Button"

export default function Modal({ closeModal }) {
  return (
    <div className='bg-gray-900 bg-opacity-95 p-[16px] pt-[80px] md:pt-[60px] w-full h-full fixed z-50 right-0 left-0 top-0 bottom-0'>
        <div className="relative w-full md:max-w-[699px] mx-auto p-[30px] pb-[35px] md:p-[50px] bg-white bg-opacity-0 rounded-[5px] border border-fuchsia-500">
            <img src={img3} className="absolute top-[-20px] md:top-[-30px] right-0 md:right-[-30px] w-2.5 h-3 md:w-[23px] md:h-7" alt="" />
            <img src={img4} className="absolute top-[40%] left-[15%]  w-2.5 h-3 md:w-[23px] md:h-7" alt="" />
            <img src={img2} className="absolute bottom-[2%] right-[5%]  w-2.5 h-3 md:w-[21px] md:h-[25px]" alt="" />
            <div>
                <img src={img1} className="max-w-[200px] md:max-w-[300px] mx-auto" alt="" />
            </div>
            <div className="text-center text-white text-base md:text-[32px] leading-10 font-semibold">Congratulations<br/>you have successfully Registered!</div>
            <div className="mt-[18px] max-w-[300px] mx-auto relative text-center text-white text-xs md:text-sm font-semibold">
                <p>Yes, it was easy and you did it!<br/>check your mail box for next step</p>
                <img src={wink} className="absolute bottom-0 right-0" alt="" />
            </div>
            <div className="mt-[38px]">
                <Button type="button" text="Back" className="w-full" onClick={closeModal} />
            </div>
        </div>
    </div>
  )
}
