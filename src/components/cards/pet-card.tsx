import { Photo } from '@/types/test/Photo';
import cn from '@/utils/class-names';
import Image from 'next/image';

interface IProps {
  pet: Photo;
  className?: string;
}

export function PetCard({ pet, className }: IProps) {
  return (
    <div
      className={cn(
        'group relative top-0 overflow-hidden rounded-lg duration-200 hover:-top-1',
        className
      )}
    >
      <div className="relative mx-auto aspect-square w-full">
        <Image
          alt={'title'}
          src={pet.url}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={
            pet.thumbnailUrl ?? `/_next/image?url=${pet.thumbnailUrl}&w=10&q=1`
          }
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-gray-900/30 p-5 opacity-0 duration-200 group-hover:opacity-100 dark:bg-gray-100/50">
          <div className="flex items-center gap-2">
            <div className="relative flex aspect-square w-8 items-center gap-2">
              <Image
                alt={pet.title}
                src={pet.thumbnailUrl}
                fill
                priority
                sizes="(max-width: 768px) 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-white ">{pet.title}</span>
          </div>
          <p className="text-2xl font-semibold text-white">{pet.title}</p>
        </div>
      </div>
      <div className="bg-gray-900 p-5 dark:bg-gray-200">
        <div className="mb-4 flex gap-2">
          <div className="relative flex aspect-square w-5 items-center gap-2">
            <Image
              alt={pet.thumbnailUrl}
              src={pet.thumbnailUrl}
              fill
              priority
              sizes="(max-width: 768px) 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-semibold text-gray-300/70 dark:text-gray-600">
            {pet.title}
          </span>
        </div>
      </div>
    </div>
  );
}
