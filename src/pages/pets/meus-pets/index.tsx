import MyPets from 'src/views/modules/pets/pages/myPets'

const MyPetsPage = () => {
  return <MyPets />
}

MyPetsPage.acl = {
  action: 'manage',
  subject: 'meus-pets'
}

export default MyPetsPage
