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
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
>>>>>>> 62e9da3 (refactor: removing unused pages and adding pets page and blank page example)
>>>>>>> 89b732a (refactor: removing unused pages and adding pets page and blank page example)
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
