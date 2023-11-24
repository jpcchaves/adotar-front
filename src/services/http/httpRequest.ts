interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD'
  | 'CONNECT'
  | 'TRACE';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export function httpRequest<TRequest, TResponse>(
  endpoint: string,
  method: HttpMethod,
  body?: TRequest
): Promise<ApiResponse<TResponse>> {
  const url = `${BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const requestOptions: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  return new Promise<ApiResponse<TResponse>>((resolve, reject) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        let responseData: TResponse | undefined;

        if (response.status !== 204) {
          responseData = (await response.json()) as TResponse;
        }

        resolve({
          data: responseData!,
          status: response.status,
          statusText: response.statusText,
        });
      })
      .catch((error) => {
        console.error('Error making HTTP request:', error);
        reject(error);
      });
  });
}
