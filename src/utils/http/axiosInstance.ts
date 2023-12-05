import axios from "axios";
import { REACT_APP_API_BASE_URL } from "../../contants/env";
import { getAuthTokenFromSession } from "./getAuthTokenFromSession";
import { setAuthToken } from "./setAuthToken";

const baseURL = REACT_APP_API_BASE_URL;

const token = getAuthTokenFromSession();

export const axiosInstance = axios.create({
  baseURL,
});

if (token) {
  setAuthToken(token);
}
