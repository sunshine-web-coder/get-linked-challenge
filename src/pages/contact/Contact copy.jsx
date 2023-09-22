import insta from "../../assets/footer/insta.png";
import twitter from "../../assets/footer/twitter.png";
import fb from "../../assets/footer/fb.png";
import linkedln from "../../assets/footer/linkedln.png";
import img1 from "../../assets/sata-gra.png";
import img2 from "../../assets/star-pu.png";
import img3 from "../../assets/star-gray.png";
import img4 from "../../assets/star.png";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import { useEffect, useState } from "react";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { postContactForm } from "../../api/postContactForm";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    message: "",
  });

  const handleChangeFirstName = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, first_name: value });
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, email: value });
  };

  const handleChangeMessage = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, message: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.first_name.trim()) {
      toast.error("Please enter your First Name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your Email");
      return;
    }

    // Basic email format validation
    if (!isValidEmail(formData.email.trim())) {
      toast.error("Please enter a valid Email address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("You can't leave the message box empty");
      return;
    }

    postContactForm(formData)
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully", response);
          toast.success("Message sent successfully");
          alert("Message sent successfully");
        } else {
          if (response.status === 400) {
            response.json().then((data) => {
              console.error("Error submitting contact form:", data);
              toast.error("Error sending message");
            });
          } else {
            console.error("Error submitting contact form:");
          }
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
        toast.error("Network error");
      });
  };

  return (
    <div className="p-[16px] border-b border-gray-700 pt-[100px] md:pt-[140px] pb-[62px] ">
      <div className="max-[767px]:flex-col-reverse max-w-[1130px] mx-auto flex gap-[20px] justify-between">
        <div className="relative">
          <img
            src={img1}
            className="absolute left-[0px] md:left-[0px] bottom-[120px] md:top-[-80px] w-[11px] h-[13px] md:w-[21px] md:h-[25px]"
            alt=""
          />
          <div className="relative max-[767px]:hidden">
            <div className="text-fuchsia-500 text-[32px] font-semibold font-['Clash Display']">
              Get in touch
            </div>
            <p className="text-white mb-[17px] text-base font-normal font-['Montserrat']">
              Contact
              <br />
              Information
            </p>
            <p className="text-white mb-[17px] text-base font-normal font-['Montserrat']">
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
            <p className="text-white mb-[17px] text-base font-normal font-['Montserrat']">
              Call Us : 07067981819
            </p>
            <p className="text-white mb-[17px] text-base font-normal font-['Montserrat']">
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
          </div>
          <div className="max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
            <div className="text-fuchsia-500 mb-[14px] text-base font-normal font-['Montserrat']">
              Share on
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
        <div className="relative p-[60px] max-[767px]:p-[20px] max-[767px]:pb-[3px] max-[767px]:w-full w-[617px] max-[767px]:bg-transparent bg-white bg-opacity-5 rounded-xl shadow">
          <img
            src={img3}
            className="absolute top-[10%] left-[80%] md:right-0 w-[11px] h-[13px] md:w-[21px] md:h-[25px]"
            alt=""
          />
          <img
            src={img2}
            className="absolute max-[767px]:top-[-10%] bottom-[22%] left-[50%] md:left-[-1%] w-[11px] h-[13px] md:w-[21px] md:h-[25px]"
            alt=""
          />
          <img
            src={img4}
            className="absolute bottom-[0px] right-[-7%] w-[11px] h-[13px] md:w-[21px] md:h-[25px]"
            alt=""
          />
          <div>
            <div className="text-fuchsia-500 text-xl font-semibold font-['Clash Display']">
              Questions or need assistance?
            </div>
            <div className="text-fuchsia-500 text-xl font-semibold font-['Clash Display']">
              Let us know about it!
            </div>
            <p className="text-white text-xs font-normal mt-[24px] block md:hidden">
              Email us below to any question related to our event
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-[767px]:mb-[30px] mt-[47px]"
          >
            <div className="max-[767px]:mb-[25px] mb-[42px]">
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="max-[767px]:mb-[25px] mb-[42px]">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Mail"
                value={formData.email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mb-[31px]">
              <Textarea
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChangeMessage}
                className="h-[119px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Button type="submit" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
