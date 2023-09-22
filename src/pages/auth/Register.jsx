import img1 from "../../assets/sata-gra.png";
import img2 from "../../assets/star-pu.png";
import img3 from "../../assets/star-gray.png";
import img5 from "../../assets/auth/walking.png";
import img6 from "../../assets/auth/3d-graphic-designer.png";
import Input from "../../components/input/Input";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CustomDropdown from "../../components/customDropdown/CustomDropdown";
import Modal from "../../components/modal/Modal";
import { fetchCategoryList } from "../../api/fetchCategoryList";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => {
    setOpenModal(true);
    document.body.classList.add("no-scroll");
    document.documentElement.classList.add("no-scroll");
  };

  const toggleCloseModal = () => {
    setOpenModal(false);
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  };

  const groupSize = ["Group size 1", "Group size 2", "Group size 3"];

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProjectTopicChange = (e) => {
    setProjectTopic(e.target.value);
  };

  const handleSelect = (option) => {
    // Find the selected category object based on the name
    const selectedCategory = categoryList.find(
      (category) => category.name === option
    );

    if (selectedCategory) {
      setSelectedOption(option);
      console.log("Selected Category ID:", selectedCategory.id);
    }
  };

  useEffect(() => {
    fetchCategoryList()
      .then((data) => {
        setCategoryList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleOpenModal();
  };

  return (
    <div className="border-b border-gray-700 max-[1150px]:pt-[50px] pt-[100px] pb-[62px] ">
      <div className="max-[1150px]:flex-col custom_container mx-auto flex gap-[20px] justify-between">
        <div className="relative w-[550px] max-[1150px]:w-full">
          <img
            src={img1}
            className="absolute w-3.5 h-[13px] md:w-[21px] md:h-[25px] max-[767px]:hidden"
            alt=""
          />
          <img
            src={img2}
            className="absolute w-3.5 h-[13px] md:w-[21px] md:h-[25px] max-[767px]:right-[10%] right-[20px] bottom-[190px]"
            alt=""
          />
          <img
            src={img3}
            className="absolute w-3.5 h-[13px] md:w-[21px] md:h-[25px] left-[20px] max-[767px]:left-[10px] bottom-[0px] max-[767px]:bottom-[-85%]"
            alt=""
          />
          <div className="w-[700px] max-[1150px]:w-full max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center">
            <img className="max-[767px]:w-[195px]" src={img6} alt="" />
          </div>
        </div>
        <div className="relative max-[1150px]:max-w-[740px] max-[1150px]:mx-auto p-[60px] max-[767px]:p-[20px] max-[767px]:pb-[3px] max-[767px]:w-full w-[770px] h-full max-[767px]:bg-transparent bg-white bg-opacity-5 rounded-xl shadow">
          <img
            src={img3}
            className="absolute max-[767px]:hidden w-3.5 h-[13px] md:w-[21px] md:h-[25px] right-[20%] top-[30px]"
            alt=""
          />
          <div>
            <div className="text-fuchsia-500 text-[15px] md:text-[32px] font-semibold ">
              Register
            </div>
            <div className="text-white text-xs md:text-sm font-normal mt-[24px] flex gap-[6px] items-center">
              <span>Be part of this movement!</span>
              <img className="relative top-[-8px]" src={img5} alt="" />
            </div>
          </div>

          <div className="text-white text-xl md:text-2xl font-normal mb-[23px] md:mb-[33px] mt-[19px]">
            CREATE YOUR ACCOUNT
          </div>
          <form onSubmit={handleSubmit} className="max-[767px]:mb-[30px]">
            <div className="max-[767px]:mb-[18px] mb-[29px] md:flex flex-col md:flex-row gap-[32px] justify-between">
              <div className="w-full max-[767px]:mb-[18px]">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Team’s Name"
                >
                  Team’s Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter the name of your group"
                  value={name}
                  onChange={handleNameChange}
                  className="pl-[10px] md:pl-[18px] md:pr-[18px] mt-[11px] text-[13px] md:text-sm register_input"
                />
              </div>
              <div className="w-full">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <Input
                  type="number"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="pl-[10px] md:pl-[18px] md:pr-[18px] mt-[11px] text-[13px] md:text-sm register_input"
                />
              </div>
            </div>

            <div className="max-[767px]:mb-[18px] mb-[29px] md:flex flex-col md:flex-row gap-[32px] justify-between">
              <div className="w-full max-[767px]:mb-[18px]">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="pl-[10px] md:pl-[18px] md:pr-[18px] mt-[11px] text-[13px] md:text-sm register_input"
                />
              </div>
              <div className="w-full">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Phone"
                >
                  Project Topic
                </label>
                <Input
                  type="text"
                  placeholder="What is your group project topic"
                  value={projectTopic}
                  onChange={handleProjectTopicChange}
                  className="pl-[10px] md:pl-[18px] md:pr-[18px] mt-[11px] text-[13px] md:text-sm register_input"
                />
              </div>
            </div>

            <div className="max-[767px]:mb-[18px] mb-[29px] flex gap-[15px] md:gap-[32px] justify-between">
              <div className="w-full">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Category"
                >
                  Category
                </label>
                <CustomDropdown
                  options={categoryList.map((category) => category.name)}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  className="custom-dropdown mt-[11px]"
                  defaultText="Select your category"
                  style={{ color: 'red' }}
                />
              </div>
              <div className="w-full">
                <label
                  className="text-white text-[13px] md:text-sm font-normal"
                  htmlFor="Group Size"
                >
                  Group Size
                </label>
                <CustomDropdown
                  options={groupSize}
                  selectedOption={selectedOption2}
                  onSelect={handleSelect2}
                  className="custom-dropdown mt-[11px]"
                  defaultText="Select"
                />
              </div>
            </div>
            <div>
              <div className="text-pink-500 text-xs font-normal mt-[23px] mb-[16px]">
                Please review your registration details before submitting
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-white text-xs font-normal"
                >
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
            </div>

            <div className="w-full mt-[22px]">
              <Button type="submit" text="Register Now" className="w-full" />
            </div>
          </form>
        </div>
      </div>
      {openModal && <Modal closeModal={toggleCloseModal} />}
    </div>
  );
}
