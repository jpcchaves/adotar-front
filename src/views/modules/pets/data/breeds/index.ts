import { useMemo } from 'react'
import { birdBreeds } from './birdBreeds'
import { catBreeds } from './catBreeds'
import { dogBreeds } from './dogBreeds'
import { outrosBreeds } from './outrosBreeds'

export const useGetBreeds = () => {
  const memorizedDogBreeds = useMemo(() => {
    return dogBreeds
  }, [])

  const memorizedCatBreeds = useMemo(() => {
    return catBreeds
  }, [])

  const memorizedBirdBreeds = useMemo(() => {
    return birdBreeds
  }, [])

  const memorizedOutroBirds = useMemo(() => {
    return outrosBreeds
  }, [])

  return {
    memorizedDogBreeds,
    memorizedCatBreeds,
    memorizedBirdBreeds,
    memorizedOutroBirds
  }
}

export { birdBreeds, catBreeds, dogBreeds, outrosBreeds }

export const breeds = [dogBreeds, catBreeds, birdBreeds, outrosBreeds]
