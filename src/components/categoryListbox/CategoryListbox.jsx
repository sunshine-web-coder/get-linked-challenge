import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

function CategoryListbox({ label, categories, formData, setFormData }) {
  return (
    <div>
      <div className="mb-[11px]">
        <label
          className="text-white text-[13px] md:text-sm font-normal mb-[11px]"
          htmlFor="cat"
        >
          {label}
        </label>
      </div>

      <Listbox
        value={formData.category || ''}
        onChange={(selectedCategory) =>
          setFormData({ ...formData, category: selectedCategory })
        }
      >
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className={`pl-[20px] pr-[20px] pt-[13px] pb-[12px] text-left text-white text-sm font-normal w-full h-[47px] bg-white bg-opacity-5 rounded shadow border border-white ${
                  open ? "rounded-b-none" : ""
                }`}
              >
                {
                  categories.find(
                    (category) => category.id === formData.category
                  )?.name
                }
              </Listbox.Button>
              <Listbox.Options
                className={`z-50 ${
                  open ? "block" : "hidden"
                } absolute z-10 mt-1 max-h-56 w-full text-sm overflow-auto rounded-md bg-[#150E28] border pt-[13px] pb-[12px]`}
              >
                {categories.map((category) => (
                  <Listbox.Option key={category.id} value={category.id}>
                    {({ active, selected }) => (
                      <div
                        className={`${
                          active ? "bg-[#8c2c9b] text-white" : "text-white"
                        } relative cursor-pointer select-none pl-[20px] pr-[20px] pt-[13px] pb-[12px]`}
                      >
                        {category.name}
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-white" : "text-indigo-600"
                            } absolute inset-y-0 right-0 flex items-center pr-4 `}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default CategoryListbox;
