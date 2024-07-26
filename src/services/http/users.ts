import axios, { AxiosError, AxiosInstance } from "axios";
import { getApiClient } from "../axios";
import { IUser } from "../../models/IUser";

const NEST_API: AxiosInstance = getApiClient();

export const getAllUsersRequest = async () => {
  try {
    const res = await NEST_API.get("/users");
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

export const getUserRequest = async (id: number) => {
  try {
    const res = await NEST_API.get(`/users/${id}`);
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

export const createUserRequest = async (user: IUser) => {
  try {
    const res = await NEST_API.post("/users", user);
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
export const updateUserRequest = async (id: number, user: IUser) => {
  try {
    const res = await NEST_API.patch(`/users/${id}`, user);
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

export const deleteUserRequest = async (id: number) => {
  try {
    const res = await NEST_API.delete(`/users/${id}`);
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
