import { FC } from 'react';

const AppSearchSkeleton: FC = () => {
  return (
    <div className="px-4 py-8 lg:py-12 lg:px-7">
      {/* Header skeleton */}
      <div className="mb-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-48 mb-2" />
        <div className="h-8 bg-gray-200 rounded w-64 mb-4" />
        {/* Filter buttons skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 bg-gray-200 rounded-full w-32" />
          ))}
        </div>
      </div>
      {/* List skeleton */}
      <div className="space-y-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col sm:flex-row">
            <div className="w-full h-64 bg-gray-200 rounded-xl sm:w-80 sm:h-80 sm:flex-shrink-0" />
            <div className="flex-1 pl-0 mt-4 sm:pl-5 sm:mt-0">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
              <div className="flex gap-2 mb-4">
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>
              <div className="h-6 bg-gray-200 rounded w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSearchSkeleton;

