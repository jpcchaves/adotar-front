import { MenuItem } from '../../components/selectMulti'

export const findLabels = (menuItems: MenuItem[], value: string) => {
  const foundObject = menuItems.find(obj => obj.value === value)

  if (foundObject) return foundObject.label
  else return ''
}
