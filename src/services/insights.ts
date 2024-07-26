import axios, { AxiosError, AxiosInstance } from "axios";
import { getApiClient } from "./axios";

const NEST_API: AxiosInstance = getApiClient();

export const getRegistersPerMonthByGender = async (month: number) => {
  try {
    const res = await NEST_API.get(`/users/insights/${month}`);
    return {
      status: res.status,
      statusText: res.statusText,
      data: res.data.data,
    };
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    }
  }
};

const handleAxiosError = (error: AxiosError<any, any>) => {
  if (error.response) {
    return {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
    };
  } else if (error.request) {
    return {
      status: 500,
      statusText: "No Response",
      data: null,
    };
  }
};
