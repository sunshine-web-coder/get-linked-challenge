export const contactFormValidate = (formData) => {
  const errors = {};

   // Validate first_name
   if (!formData.first_name) {
    errors.first_name = "This field may not be blank.";
  }
 
  // Validate email
  if (!formData.email) {
    errors.email = "This field may not be blank.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = "Invalid email address.";
  }

  // Validate message
  if (!formData.message) {
    errors.message = "This field may not be blank.";
  }

  return errors;
};
