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
      name: 'Home',
    },
    {
      name: 'Pets Disponiveis',
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
