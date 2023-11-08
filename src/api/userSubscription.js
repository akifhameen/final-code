import axios from "axios";
const baseURL = 'http://localhost:5000'

export const buySubscription = async(subscriptionData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/userSubscriptions/new`, subscriptionData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};

export const updateSubscription = async(subscriptionData) => {
  let response;
  try {
    response = await axios.post(`${baseURL}/userSubscriptions/update`, subscriptionData);
  } catch (error) {
    console.log(error);
  }
  return response?.data;
};