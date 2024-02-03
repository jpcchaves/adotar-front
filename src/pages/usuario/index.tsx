import UserProfile from 'src/views/modules/user/pages/profile'

const UserProfilePage = () => {
  return <UserProfile></UserProfile>
}

UserProfilePage.acl = {
  action: 'manage',
  subject: 'profile'
}

export default UserProfilePage
