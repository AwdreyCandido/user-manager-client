import axios from "axios";

export function getApiClient() {
  const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    },
  });

  return API;
}
