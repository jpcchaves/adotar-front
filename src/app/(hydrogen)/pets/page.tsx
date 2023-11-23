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
      name: 'Pets',
    },
    {
      name: 'Pets Disponíveis',
=======
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
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
