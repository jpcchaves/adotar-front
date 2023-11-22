import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Pets'),
};

const pageHeader = {
  title: 'Pets',
  breadcrumb: [
    {
      href: '/',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
=======
=======
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
=======
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
>>>>>>> 1c5f995 (refactor: cleaning up template and add pets route)
=======
>>>>>>> 89b732a (refactor: removing unused pages and adding pets page and blank page example)
=======
>>>>>>> 39065fc (refactor: cleaning up template and add pets route)
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
=======
>>>>>>> 1c5f995 (refactor: cleaning up template and add pets route)
=======
=======
>>>>>>> 62e9da3 (refactor: removing unused pages and adding pets page and blank page example)
=======
>>>>>>> 1d0f598 (refactor: cleaning up template and add pets route)
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
<<<<<<< HEAD
>>>>>>> 9035385 (refactor: cleaning up template and add pets route)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
=======
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
>>>>>>> 1c5f995 (refactor: cleaning up template and add pets route)
=======
=======
=======
=======
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
<<<<<<< HEAD
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
<<<<<<< HEAD
>>>>>>> 62e9da3 (refactor: removing unused pages and adding pets page and blank page example)
<<<<<<< HEAD
>>>>>>> 89b732a (refactor: removing unused pages and adding pets page and blank page example)
=======
=======
=======
=======
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
>>>>>>> 9035385 (refactor: cleaning up template and add pets route)
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
>>>>>>> 1d0f598 (refactor: cleaning up template and add pets route)
>>>>>>> 39065fc (refactor: cleaning up template and add pets route)
    },
  ],
};

export default function PetsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </>
  );
}
