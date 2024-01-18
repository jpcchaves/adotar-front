'use client'

import PetsForm from 'src/views/modules/pets/pages/petsForm'

const PetsCreateFormPage = () => {
  return <PetsForm />
}

PetsCreateFormPage.acl = {
  action: 'manage',
  subject: 'pets'
}

export default PetsCreateFormPage
