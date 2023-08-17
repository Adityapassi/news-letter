import axios from "axios";

export const useAPICall = async (url) => {
  const response = await axios.get(url);
  return response;
};
