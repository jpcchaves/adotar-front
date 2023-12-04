import { AxiosRequestConfig, AxiosResponse } from "axios";
import { PromiseError } from "../../domain/models/PromiseError";
import { axiosInstance } from "./axiosInstance";
import { HttpMethod } from "./httpMethods";

export const httpRequest = async <Req, Res>(
  method: HttpMethod,
  url: string,
  data?: Req,
  config?: AxiosRequestConfig,
): Promise<Res> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<Res>({
        method,
        url,
        data,
        ...config,
      })
      .then((response: AxiosResponse<Res>) => {
        resolve(response.data);
      })
      .catch((error: PromiseError) => {
        reject(error?.response?.data?.message || "Ocorreu um erro inesperado. Por favor, tente novamente");
      });
  });
};
