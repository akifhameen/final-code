import axios from "axios";
const baseURL = 'http://localhost:5000'

export const singin = async(loginData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/users/signIn`, loginData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const singup = async(signUpData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/users/signUp`, signUpData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const enrollOrQuitClass = async(enrollmentData) => {
  let response;
  try {
    response = await axios.put(`${baseURL}/users/enrollOrQuitClass`, enrollmentData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const getUserByEmail = async(email) => {
  let response;
  try {
    response = await axios.get(`${baseURL}/users/getUserByEmail?email=${email}`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const updateRoleByEmail = async(roleData) => {
  let response;
  try {
    response = await axios.put(`${baseURL}/users/updateRoleByEmail`, roleData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};