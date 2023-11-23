import { metaObject } from '@/config/site.config';
import PetsPage from './pets/page';

export const metadata = {
  ...metaObject('Pets'),
};

<<<<<<< HEAD
export default function PetsListPage() {
=======
export default function FileDashboardPage() {
>>>>>>> bf96835 (refactor: removing unused pages and adding pets page and blank page example)
  return <PetsPage />;
}
