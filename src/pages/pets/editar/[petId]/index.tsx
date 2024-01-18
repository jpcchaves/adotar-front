'use client'

import PetsForm from 'src/views/modules/pets/pages/petsForm'

const PetsEditFormPage = () => {
  return <PetsForm />
}

PetsEditFormPage.acl = {
  action: 'manage',
  subject: 'editar'
}

export default PetsEditFormPage
