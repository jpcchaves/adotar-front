'use client';

import PageHeader from '@/app/shared/page-header';
import { PetCard } from '@/components/cards/pet-card';
import { httpRequest } from '@/services/http/httpRequest';
import { useEffect, useState } from 'react';

const pageHeader = {
  title: 'Blank page',
  breadcrumb: [
    {
      href: '/blank',
      name: 'Home',
    },
    {
      name: 'Blank',
    },
  ],
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function BlankPage() {
  const [photosList, setPhotosList] = useState<Photo[] | null>(null);

  useEffect(() => {
    httpRequest<void, Photo[]>('/photos?_start=0&_limit=15', 'GET')
      .then((res) => setPhotosList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <>
        <div className="grid grid-cols-1 gap-x-5 gap-y-6 ">
          {(photosList || []).map((photo) => (
            <PetCard pet={photo} key={`photo-${photo.id}`} />
          ))}
        </div>
      </>
    </>
  );
}
