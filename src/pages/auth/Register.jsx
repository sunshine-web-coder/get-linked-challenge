import img1 from "../../assets/sata-gra.png";
import img2 from "../../assets/star-pu.png";
import img3 from "../../assets/star-gray.png";
import img5 from "../../assets/auth/walking.png";
import img6 from "../../assets/auth/3d-graphic-designer.png";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import { fetchCategoryList } from "../../api/fetchCategoryList";
import { submitRegistration } from "../../api/submitRegistration";
import CategoryListbox from "../../components/categoryListbox/CategoryListbox";
import { validateForm } from "../../components/validateForm/validateForm";
import { Input } from "../../components/input/Input";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 1,
    project_topic: "",
    category: null,
    privacy_poclicy_accepted: false,
  });

  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  useEffect(() => {
    fetchCategoryList()
      .then((data) => {
        if (data.length > 0) {
          setFormData({
            ...formData,
            category: data[0].id,
          });
        }
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === "group_size" ? parseInt(value) : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0 && formData.privacy_poclicy_accepted) {
      submitRegistration(formData)
        .then(() => {
          setFormData({
            email: "",
            phone_number: "",
            team_name: "",
            project_topic: "",
            privacy_poclicy_accepted: false,
            category: categories.length > 0 ? categories[0].id : null,
          });

          setFormErrors({});

          toggleOpenModal();
        })
        .catch((error) => {
          console.error("Error submitting registration:", error);
        });
    } else {
      setFormErrors(errors);
    }
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
                <Input
                  label="Team’s Name"
                  type="text"
                  name="team_name"
                  placeholder="Enter the name of your group"
                  value={formData.team_name || ""}
                  onChange={handleInputChange}
                />
                {formErrors.team_name && (
                  <div className="text-[#a94442] text-sm font-normal mt-3">
                    {formErrors.team_name}
                  </div>
                )}
              </div>
              <div className="w-full">
                <Input
                  label="Phone"
                  type="tel"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  value={formData.phone_number || ""}
                  onChange={handleInputChange}
                />
                {formErrors.phone_number && (
                  <div className="text-[#a94442] text-sm font-normal mt-3">
                    {formErrors.phone_number}
                  </div>
                )}
              </div>
            </div>
            <div className="max-[767px]:mb-[18px] mb-[29px] md:flex flex-col md:flex-row gap-[32px] justify-between">
              <div className="w-full max-[767px]:mb-[18px]">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <div className="text-[#a94442] text-sm font-normal mt-3">
                    {formErrors.email}
                  </div>
                )}
              </div>
              <div className="w-full">
                <Input
                  label="Project Topic"
                  type="text"
                  name="project_topic"
                  placeholder="What is your group project topic"
                  value={formData.project_topic || ""}
                  onChange={handleInputChange}
                />
                {formErrors.project_topic && (
                  <div className="text-[#a94442] text-sm font-normal mt-3">
                    {formErrors.project_topic}
                  </div>
                )}
              </div>
            </div>

            <div className="max-[767px]:mb-[18px] mb-[29px] flex gap-[15px] md:gap-[32px] justify-between">
              <div className="w-full">
                <CategoryListbox
                  label="Category"
                  categories={categories}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
              <div className="w-full">
                <Input
                  label="Group Size"
                  type="number"
                  name="group_size"
                  placeholder="Group size"
                  value={formData.group_size || ""}
                  onChange={handleInputChange}
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
                  name="privacy_poclicy_accepted"
                  checked={formData.privacy_poclicy_accepted}
                  onChange={handleInputChange}
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
              {formErrors.privacy_poclicy_accepted && (
                <div className="text-[#a94442] text-sm font-normal mt-3">
                  {formErrors.privacy_poclicy_accepted}
                </div>
              )}
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
