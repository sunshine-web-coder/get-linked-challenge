import { useState, useEffect } from "react";
import CustomDropdown from "./customDropdown/CustomDropdown";
import { fetchCategoryList } from "../api/fetchCategoryList";

export default function ApiFecthTesting() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const handleSelect = (option) => {
    // Find the selected category object based on the name
    const selectedCategory = categoryList.find((category) => category.name === option);

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

  return (
    <div className="max-w-[500px] mx-auto mt-[50px] mb-[50px] relative z-50">
      <CustomDropdown
        options={categoryList.map((category) => category.name)}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        className="custom-dropdown mt-[11px]"
      />
    </div>
  );
}
