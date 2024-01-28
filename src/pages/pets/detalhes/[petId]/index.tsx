'use client'

import PetDetails from 'src/views/modules/pets/pages/petDetails'

const PetDetailsPage = () => {
  return <PetDetails />
}

PetDetailsPage.acl = {
  action: 'manage',
  subject: 'pets'
}

export default PetDetailsPage
