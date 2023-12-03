import axios from "axios";
import {REACT_APP_API_BASE_URL} from "../../contants/env";

const baseURL = REACT_APP_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});
