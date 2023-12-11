const petsV2 = process.env.NEXT_PUBLIC_API_PETS_V2
const petsEndpoint = process.env.NEXT_PUBLIC_API_PETS_ENDPOINT

const savedPetsV1 = process.env.NEXT_PUBLIC_API_SAVED_PETS_V1
const savedPetsEndpoint = process.env.NEXT_PUBLIC_API_SAVED_PETS_ENDPOINT

export default {
  petsEndpoint: `/${petsV2}/${petsEndpoint}`,
  savedPetsEndpoint: `/${savedPetsV1}/${savedPetsEndpoint}`
}
