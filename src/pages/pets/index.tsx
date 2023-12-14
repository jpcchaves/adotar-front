'use client'

// ** MUI Imports
import PetsList from 'src/views/modules/pets/pages/petsList'

const PetsPage = () => {
  return <PetsList />
}

PetsPage.acl = {
  action: 'manage',
  subject: 'pets'
}

export default PetsPage
