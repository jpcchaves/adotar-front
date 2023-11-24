import { Photo } from '@/types/test/Photo';
import cn from '@/utils/class-names';
import Image from 'next/image';
import { CountDown } from '../ui/count-down';
import { BsGenderFemale, BsHeartFill } from 'react-icons/bs';

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
          className="object-cover"
          placeholder="blur"
          blurDataURL={pet.url ?? `/_next/image?url=${pet.url}&w=10&q=1`}
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-gray-900/30 p-5 opacity-0 duration-200 group-hover:opacity-100 dark:bg-gray-100/50">
          <div className="flex items-center gap-2">
            <div className="relative flex aspect-square w-8 items-center gap-2">
              <Image
                alt={pet.url}
                src={pet.url}
                fill
                priority
                sizes="(max-width: 768px) 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-white ">Pet Name</span>
          </div>
          <p className="text-2xl font-semibold text-white">Pet name</p>
        </div>
      </div>
      <div className="bg-gray-900 p-5 dark:bg-gray-200">
        <div className="mb-4 flex justify-between gap-2">
          <span className="font-semibold text-gray-300/70 dark:text-gray-600">
            Pet Name
          </span>
          <div className=" flex">
            <span className="me-2">
              <BsHeartFill />
            </span>
            <span>
              <BsGenderFemale />
            </span>
          </div>
        </div>
        <div className="mb-4 flex gap-2">
          <span className="font-semibold text-gray-300/70 dark:text-gray-600">
            Pet info here in this card and some icons
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-gray-300/70 dark:text-gray-600">
              some kind of card footer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
