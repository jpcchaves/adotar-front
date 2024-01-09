// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Pets',
      path: '/pets',
      icon: 'mdi:paw-outline',
      action: 'manage',
      children: [
        {
          title: 'Pets Disponíveis',
          path: '/pets',
          subject: 'pets'
        },
        {
          title: 'Novo',
          path: '/pets/novo',
          subject: 'pets'
        },
        {
          title: 'Meus Pets',
          path: '/pets/meus-pets',
          subject: 'pets'
        }
      ]
    },
    {
      title: 'Second Page',
      path: '/second-page',
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
      path: '/privatePage',
      action: 'read',
      subject: 'privatePage',
      title: 'Private Page Ex',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
