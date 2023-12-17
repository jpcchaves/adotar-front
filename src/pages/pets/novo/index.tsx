'use client'

import PetsForm from 'src/views/modules/pets/pages/petsForm'

const PetsFormPage = () => {
  return <PetsForm />
}

PetsFormPage.acl = {
  action: 'manage',
  subject: 'pets'
}

export default PetsFormPage
