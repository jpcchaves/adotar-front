// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      action: 'manage',
      subject: 'home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      action: 'manage',
      subject: 'second-page',
      icon: 'mdi:email-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    },
    {
      path: 'privatePage',
      action: 'manage',
      subject: 'privatePage',
      title: 'Private Page',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
