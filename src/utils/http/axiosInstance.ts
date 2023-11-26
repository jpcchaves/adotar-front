import { NEXT_PUBLIC_EXTERNAL_API_BASE_URL } from '@/data/constants/env';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_EXTERNAL_API_BASE_URL,
});
