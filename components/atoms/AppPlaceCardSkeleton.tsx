import { FC } from 'react';

const AppPlaceCardSkeleton: FC = () => {
  return (
    <div className="flex flex-col mb-8 duration-300 cursor-pointer sm:flex-row animate-pulse">
      {/* Image skeleton */}
      <div className="relative flex-shrink-0 w-full mb-4 overflow-hidden rounded-xl sm:mb-0 sm:w-80 sm:h-80">
        <div className="w-full h-64 bg-gray-200 sm:h-full" />
      </div>
      {/* Content skeleton */}
      <div className="flex flex-col flex-grow pl-0 sm:pl-5">
        {/* Title and location */}
        <div className="mb-2">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
        {/* Description */}
        <div className="mb-2">
          <div className="h-4 bg-gray-200 rounded w-full mb-1" />
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-1" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
        {/* Price */}
        <div className="mt-auto">
          <div className="h-6 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  );
};

export default AppPlaceCardSkeleton;

