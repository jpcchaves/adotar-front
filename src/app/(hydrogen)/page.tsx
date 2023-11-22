import { metaObject } from '@/config/site.config';
import PetsPage from './pets/page';

export const metadata = {
  ...metaObject('Pets'),
};

export default function PetsListPage() {
  return <PetsPage />;
}
