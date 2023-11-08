import axios from "axios";
const baseURL = 'http://localhost:5000'

export const hireTrainer = async(hireData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/trainers/hire`, hireData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const getTrainerAvailability = async(trainerId, day) => {
  let response;
  try {
    response = await axios.get(`${baseURL}/trainers/getTrainerAvailability/:${trainerId}/:${day}`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const getAllAvailableTrainers = async() => {
  let response;
  try {
    response = await axios.get(`${baseURL}/trainers/allAvailableTrainers`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const getAllTrainers = async() => {
  let response;
  try {
    response = await axios.get(`${baseURL}/trainers/getAllTrainers`);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};