import axios from "axios";

export function getApiClient() {
  const API = axios.create({
    baseURL: `${HOSTED_API_BASE_URL}/api/v1`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, PATCH, DELETE",
    },
  });

  return API;
}

// const LOCAL_API_ENDPOINT = "http://localhost:4000";
const HOSTED_API_BASE_URL = "https://user-manager-api-dcry.onrender.com";
