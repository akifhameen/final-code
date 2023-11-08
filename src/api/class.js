import axios from "axios";
const baseURL = 'http://localhost:5000'

export const getAllClasses = async() => {
  let response;
  try {
    response = await axios.get(`${baseURL}/classes/getAllClasses`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const addClass = async(classData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/classes/addClass`, classData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const removeClassById = async(classId) => {
  let response;
  try {
    response = await axios.delete(`${baseURL}/classes/removeClass/${classId}`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const getClassAvailability = async(day) => {
  let response;
  try {
    response = await axios.get(`${baseURL}/classes/classAvailability/${day}`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};