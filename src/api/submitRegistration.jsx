const BASE_URL = "https://backend.getlinked.ai";

export const submitRegistration = async (formData) => {
  const response = await fetch(`${BASE_URL}/hackathon/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Error submitting registration");
  }

  return response.json();
};
