import { PromiseError } from "../../../../adotar-front/src/app/domain/models/AxiosError";
import { axiosInstance } from "./axiosInstance";
import { HttpMethod } from "./httpMethods";
import { AxiosResponse } from "axios";

export const httpRequest = async <Req, Res>(
  method: HttpMethod,
  url: string,
  data?: Req,
): Promise<Res> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<Res>({
        method,
        url,
        data,
      })
      .then((response: AxiosResponse<Res>) => {
        resolve(response.data);
      })
      .catch((error: PromiseError) => {
        reject(
          error?.response?.data?.message ||
            "Ocorreu um erro inesperado. Por favor, tente novamente",
        );
      });
  });
};
