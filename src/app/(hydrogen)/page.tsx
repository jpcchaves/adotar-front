import { metaObject } from '@/config/site.config';
import PetsPage from './pets/page';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  return <PetsPage />;
}
