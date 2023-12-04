import axios from "axios";
import { REACT_APP_API_BASE_URL } from "../../contants/env";
import { getAuthTokenFromSession } from "./authTokenHeader";

const baseURL = REACT_APP_API_BASE_URL;

const token = getAuthTokenFromSession();

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
