import { useMemo } from 'react'
import { MenuItem } from 'src/@core/components/inputs/components/selectInput'

export const generateMenuItems = (data: any): MenuItem[] => {
  return data.map((d: any) => {
    return {
      value: d.id,
      label: d.name
    }
  })
}

export const GenerateCitiesMenuItems = (data: any): MenuItem[] => {
  return useMemo(() => {
    return data.map((d: any) => ({
      value: d.ibge,
      label: d.name
    }))
  }, [data])
}
