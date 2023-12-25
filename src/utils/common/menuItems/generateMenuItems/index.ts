import { MenuItem } from 'src/@core/components/inputs/components/selectInput'

export const generateMenuItems = (data: any): MenuItem[] => {
  return data.map((d: any) => {
    return {
      value: d.id,
      label: d.name
    }
  })
}

export const generateCitiesMenuItems = (data: any): MenuItem[] => {
  return data.map((d: any) => {
    return {
      value: d.ibge,
      label: d.name
    }
  })
}
