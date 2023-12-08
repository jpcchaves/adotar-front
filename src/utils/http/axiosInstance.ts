import axios from 'axios'
import { getAuthToken } from './getAuthToken'
import { setAuthToken } from './setAuthToken'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
const token = getAuthToken()

export const axiosInstance = axios.create({
  baseURL
})

if (token) setAuthToken(token)
