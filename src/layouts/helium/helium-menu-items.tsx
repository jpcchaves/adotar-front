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
  },
];
