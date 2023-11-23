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
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
=======
=======
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
=======
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
=======
=======
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
>>>>>>> 9035385 (refactor: cleaning up template and add pets route)
>>>>>>> d975492 (refactor: cleaning up template and add pets route)
=======
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
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
