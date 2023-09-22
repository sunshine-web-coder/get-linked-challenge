const baseUrl = "https://backend.getlinked.ai";

export const postContactForm = async (contactFormData) => {
  const apiUrl = `${baseUrl}/hackathon/contact-form`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactFormData),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to post contact form data");
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data;
  } catch (error) {
    console.error("Error post contact form data:", error.message);
    throw new Error(`Error post contact form data: ${error.message}`);
  }
};
