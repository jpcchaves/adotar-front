import { AxiosResponse, ResponseType } from 'axios'
import { PromiseError } from 'src/domain/models/PromiseError'
import { axiosInstance } from './axiosInstance'
import { HttpMethod } from './httpMethods'

export const httpRequest = async <Req, Res>(
  method: HttpMethod,
  url: string,
  data?: Req,
  responseType?: ResponseType
): Promise<Res> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<Res>({
        method,
        url,
        data,
        responseType
      })
      .then((response: AxiosResponse<Res>) => {
        resolve(response.data)
      })
      .catch((error: PromiseError) => {
        reject(error?.response?.data?.message || 'Ocorreu um erro inesperado. Por favor, tente novamente')
      })
  })
}
