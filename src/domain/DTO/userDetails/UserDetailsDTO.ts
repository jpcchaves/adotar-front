export type UserDetailsDTO = {
  id: string
  firstName: string
  lastName: string
  username: string
  name: string
  email: string
  contact: Contact
  address: Address
  lastSeen: string
  updatedAt: string
  createdAt: string
}

export type Address = {
  zipcode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  cityName: string
  state: string
  stateName: string
}

export type Contact = {
  id: string
  phone1: string
  phone2: string
  phone3: string
}
