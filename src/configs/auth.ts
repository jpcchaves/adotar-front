const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
const verifyTokenV1 = process.env.NEXT_PUBLIC_API_VERIFY_TOKEN_V1
const verifyTokenEndpoint = process.env.NEXT_PUBLIC_API_VERIFY_TOKEN_ENDPOINT

const loginV2 = process.env.NEXT_PUBLIC_API_LOGIN_V2
const loginEndpoint = process.env.NEXT_PUBLIC_API_LOGIN_ENDPOINT
const registerV1 = process.env.NEXT_PUBLIC_API_REGISTER_V1
const registerEndpoint = process.env.NEXT_PUBLIC_API_REGISTER_ENDPOINT

const storageTokenKeyName = process.env.NEXT_PUBLIC_STORAGE_TOKEN_KEY_NAME

export default {
  meEndpoint: `${baseUrl}/${verifyTokenV1}/${verifyTokenEndpoint}`,
  loginEndpoint: `${baseUrl}/${loginV2}/${loginEndpoint}`,
  registerEndpoint: `${baseUrl}/${registerV1}/${registerEndpoint}`,
  storageTokenKeyName: `${storageTokenKeyName}`,
  onTokenExpiration: 'logout' // logout | refreshToken
}
