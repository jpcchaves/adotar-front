<<<<<<< HEAD
<<<<<<< HEAD
=======
import PageBlankIcon from '@/components/icons/page-blank';
import { routes } from '@/config/routes';
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
import PageBlankIcon from '@/components/icons/page-blank';
import { routes } from '@/config/routes';
=======
>>>>>>> 9035385 (refactor: cleaning up template and add pets route)
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
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
<<<<<<< HEAD
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
=======
>>>>>>> 9035385 (refactor: cleaning up template and add pets route)
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
  },
];
