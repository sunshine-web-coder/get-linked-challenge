const baseUrl = "https://backend.getlinked.ai";

export const fetchCategoryList = async () => {
  const apiUrl = `${baseUrl}/hackathon/categories-list`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching category list: ${error.message}`);
  }
};
