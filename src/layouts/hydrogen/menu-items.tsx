import PageBlankIcon from '@/components/icons/page-blank';
import { routes } from '@/config/routes';
import { MdPets } from 'react-icons/md';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'Pets',
    href: '/',
    icon: <MdPets />,
    dropdownItems: [
      {
        name: 'Pets Disponiveis',
        href: routes.pets.pets,
      },
    ],
  },
  {
    name: 'blank',
    href: '/blank',
    icon: <PageBlankIcon />,
  },
];
