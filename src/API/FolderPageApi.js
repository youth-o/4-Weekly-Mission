const BASE_API = "https://bootcamp-api.codeit.kr/api";

export const getUserData = async () => {
  try {
    const response = await fetch(`${BASE_API}/users/1`);
    const result = await response.json();

    return {
      email: result.data[0].email,
      image: result.data[0].image_source,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getFolderName = async () => {
  try {
    const response = await fetch(`${BASE_API}/users/1/folders`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getFolderById = async (id) => {
  const response = await fetch(
    `${BASE_API}/users/1/links${id ? `?folderId=${id}` : ""}`
  );
  const result = await response.json();
  return result;
};
