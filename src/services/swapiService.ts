import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export const getCharacterByName = async (name: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/?search=${name}`);
    if (response.data.count > 0) {
      return response.data.results[0];
    } else {
      throw new Error("Character not found");
    }
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
};

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/people/`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
