import MyPets from 'src/views/modules/pets/pages/myPets'

const MyPetsPage = () => {
  return <MyPets />
}

MyPetsPage.acl = {
  action: 'manage',
  subject: 'my-pets'
}

export default MyPetsPage
