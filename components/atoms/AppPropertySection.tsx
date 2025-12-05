import { FC, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import AppSkeletonLoader from './AppSkeletonLoader';

interface Property {
  id: string;
  title: string;
  location: string;
  img: string;
  price: string;
  rating: number;
  reviews: number;
  isGuestFavourite?: boolean;
}

interface AppPropertySectionProps {
  title: string;
  properties: Property[];
  onNavigate?: (page: string, query?: any) => void;
  isLoading?: boolean;
}

const AppPropertySection: FC<AppPropertySectionProps> = ({
  title,
  properties,
  onNavigate,
  isLoading = false,
}) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    // Check initial scroll position
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, [properties, isLoading]);

  const handlePropertyClick = (property: Property) => {
    if (onNavigate) {
      onNavigate('/search', { propertyId: property.id });
    } else {
      router.push({
        pathname: '/search',
        query: { location: property.location },
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });

      // Update arrow visibility
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          setShowLeftArrow(scrollLeft > 0);
          setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
      }, 100);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="my-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{title}</h2>
          {/* Slider Buttons - Opposite side of title */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`p-2 rounded-full border transition-all ${
                showLeftArrow
                  ? 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 cursor-pointer'
                  : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`p-2 rounded-full border transition-all ${
                showRightArrow
                  ? 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 cursor-pointer'
                  : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          >
            {isLoading
              ? Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-[280px]">
                    <AppSkeletonLoader variant="card" className="h-80" />
                  </div>
                ))
              : properties.map((property) => (
                  <div
                    key={property.id}
                    onClick={() => handlePropertyClick(property)}
                    className="flex flex-col cursor-pointer group flex-shrink-0 w-[280px]"
                  >
                    {/* Image */}
                    <div className="relative w-full h-64 mb-3 overflow-hidden rounded-xl flex-shrink-0">
                      <Image
                        src={property.img}
                        alt={property.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl group-hover:scale-110 transition-transform duration-300"
                        placeholder="blur"
                        blurDataURL={property.img}
                        quality={40}
                      />
                      {property.isGuestFavourite && (
                        <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white bg-black bg-opacity-70 rounded z-10">
                          Guest favourite
                        </div>
                      )}
                    </div>
                    {/* Details */}
                    <div className="flex flex-col flex-grow min-h-[100px]">
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <span className="text-sm text-gray-500 truncate flex-shrink">{property.location}</span>
                        <div className="flex items-center flex-shrink-0">
                          <StarIcon className="h-4 text-primary" />
                          <span className="ml-1 text-sm font-semibold whitespace-nowrap">{property.rating}</span>
                          {property.reviews > 0 && (
                            <span className="ml-1 text-sm text-gray-500 whitespace-nowrap">({property.reviews})</span>
                          )}
                        </div>
                      </div>
                      <h3 className="mb-2 text-base font-semibold line-clamp-2 min-h-[48px]">{property.title}</h3>
                      <div className="mt-auto pt-2">
                        <div className="flex items-baseline">
                          <span className="text-lg font-semibold">{property.price}</span>
                          <span className="ml-1 text-sm text-gray-500">/ month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPropertySection;
