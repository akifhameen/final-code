import axios from "axios";
const baseURL = 'http://localhost:5000'

export const singin = async(loginData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/users/signIn`, loginData);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export const singup = async(signUpData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/users/signIn`, signUpData);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export const enrollOrQuitClass = async(enrollmentData) => {
  let response;
  try {
    response = await axios.put(`${baseURL}/users/enrollOrQuitClass`, enrollmentData);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};