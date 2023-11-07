import axios from "axios";
const baseURL = 'http://localhost:5000'

export const getAllClasses = async() => {
  let response;
  try {
    response = await axios.get(`${baseURL}/classes/getAllClasses`);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};