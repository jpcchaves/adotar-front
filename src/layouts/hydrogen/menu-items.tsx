import PageBlankIcon from '@/components/icons/page-blank';
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
    icon: <MdPets />,
    href: '/',
    dropdownItems: [{ name: 'Pets Disponiveis', href: '/' }],
  },
  {
    name: 'Blank Example',
    icon: <PageBlankIcon />,
    href: '/blank',
  },
];
