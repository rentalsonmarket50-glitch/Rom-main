import Image from 'next/image';
// icons
import { StarIcon } from '@heroicons/react/solid';

const AppPlaceCard = ({ data, gridView = false }) => {
  if (gridView) {
    return (
      <div className="flex flex-col cursor-pointer group">
        {/* image */}
        <div className="relative w-full h-64 mb-3 overflow-hidden rounded-xl">
          <Image
            src={data.img}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl group-hover:scale-110 transition-transform duration-300"
            placeholder="blur"
            blurDataURL={data.img}
            quality={40}
          />
        </div>
        {/* detail */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-500 truncate">{data.location}</span>
            <div className="flex items-center">
              <StarIcon className="h-4 text-primary" />
              <span className="ml-1 text-sm font-semibold">{data.star}</span>
            </div>
          </div>
          <h3 className="mb-1 text-lg font-semibold line-clamp-2">{data.title}</h3>
          <p className="mb-2 text-sm text-gray-500 line-clamp-2">{data.description}</p>
          <div className="mt-auto">
            <div className="flex items-baseline">
              <span className="text-lg font-semibold">{data.price.split('/')[0]}</span>
              <span className="ml-1 text-sm text-gray-500">/ month</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-[300px,1fr] py-5 border-gray-200 cursor-pointer sm:border-t grid-cols-1 gap-x-4">
      {/* left - image */}
      <div className="relative w-full mb-2 md:mb-0 sm:h-44 h-52">
        <Image
          src={data.img}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="w-full rounded-xl"
          placeholder="blur"
          blurDataURL={data.img}
          quality={40}
        />
      </div>
      {/* right - detail */}
      <div className="flex flex-col px-1 sm:px-0">
        {/* detail top */}
        <div className="flex-grow">
          <span className="text-sm text-gray-300">{data.location}</span>
          <h3 className="text-lg">{data.title}</h3>
          <hr className="hidden w-10 mt-3 mb-1 border-b border-gray-200 border-opacity-60 sm:block" />
          <span className="text-sm text-gray-300">{data.description}</span>
        </div>

        {/* detail bottom */}
        <div className="flex justify-between order-first sm:order-none">
          <div className="flex items-center">
            <StarIcon className="h-5 text-primary" />
            <span className="mx-1 font-semibold">{data.star}</span>
            <span className="text-sm text-gray-300">({data.reviews})</span>
          </div>
          <div>
            <span className="mr-1 text-lg font-semibold">{data.price.split('/')[0]}</span>
            <span className="font-light md:text-lg text-md">/ month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPlaceCard;
