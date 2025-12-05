import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Marker } from 'react-map-gl';
import { getCenter } from 'geolib';
import Image from 'next/image';
// components
import AppFooter from '@/components/atoms/AppFooter';
import AppHead from '@/components/atoms/AppHead';
import AppHeader from '@/components/organisms/AppHeader';
import AppPlaceCard from '@/components/atoms/AppPlaceCard';
import AppMap from '@/components/atoms/AppMap';
import AppSearchSkeleton from '@/components/atoms/AppSearchSkeleton';
import { PropertyFilters } from '@/components/molecules/PropertyFilters';
// utils
import { formatRangeDate } from 'utils';
// icons
import { MapIcon, ClipboardIcon, FilterIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { getSearch } from 'utils/data';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const query = router.query;
  const [visibleMapButton, setVisibleMapButton] = useState<boolean>(true);
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const [activePanel, setActivePanel] = useState<'none' | 'filter' | 'map'>('none');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('House/Flat');
  
  // data
  const [location, setLocation] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('');
  const [select, setSelect] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date>(null);
  const [checkOut, setCheckOut] = useState<Date>(null);

  useEffect(() => {
    setLocation(query.location?.toString() || '');
    setPropertyType(query.propertyType?.toString() || '');
    setSelect(query.select?.toString() || '');
    if (query.checkIn) setCheckIn(new Date(query.checkIn?.toString()));
    if (query.checkOut) setCheckOut(new Date(query.checkOut?.toString()));
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, [query]);

  useEffect(() => {
    const handleOnScroll = () => {
      const position = window.scrollY;
      position > currentScroll ? setVisibleMapButton(false) : setVisibleMapButton(true);
      setCurrentScroll(position);
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  });


  const getCenterMap = () => {
    const coords = searchResults.map((result) => ({
      latitude: result.lat,
      longitude: result.long,
    }));
    return getCenter(coords) || { latitude: 0, longitude: 0 };
  };

  const handleFilterToggle = () => {
    if (activePanel === 'filter') {
      setActivePanel('none');
    } else {
      setActivePanel('filter');
    }
  };

  const handleMapToggle = () => {
    if (activePanel === 'map') {
      setActivePanel('none');
    } else {
      setActivePanel('map');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppHead />
      <AppHeader searchPage query={{ location, propertyType, select, checkIn, checkOut }} />
      <main className="flex-grow mt-[86px] duration-500">
        <div className="flex relative">
          {/* Left Side - Filter/Map Panel (Same Position) */}
          <div className="relative">
            {/* Filter Panel */}
            <div
              className={`${
                activePanel === 'filter'
                  ? 'w-80 translate-x-0 opacity-100 z-20'
                  : 'absolute left-0 w-80 -translate-x-full opacity-0 pointer-events-none z-10'
              } transition-all duration-300 ease-in-out overflow-hidden border-r border-gray-200 bg-white`}
            >
              <div className="w-80 h-[calc(100vh-86px)] sticky top-[86px] overflow-y-auto">
                <PropertyFilters
                  propertyType={selectedPropertyType}
                  onPropertyTypeChange={setSelectedPropertyType}
                />
              </div>
            </div>

            {/* Map Panel - Same Position as Filter */}
            <div
              className={`${
                activePanel === 'map'
                  ? 'w-[40%] translate-x-0 opacity-100 z-20'
                  : 'absolute left-0 w-[40%] -translate-x-full opacity-0 pointer-events-none z-10'
              } transition-all duration-300 ease-in-out overflow-hidden border-r border-gray-200 bg-white relative`}
            >
              {activePanel === 'map' && (
                <div className="w-full h-[calc(100vh-86px)] sticky top-[86px]">
                  <AppMap center={getCenterMap()}>
                    <button
                      className="absolute top-4 left-4 z-10 flex items-center p-3 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      onClick={handleMapToggle}
                    >
                      <ChevronLeftIcon className="h-5" />
                    </button>
                    {searchResults.map((result) => (
                      <Marker
                        key={result.lat + result.long}
                        latitude={result.lat}
                        longitude={result.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                      >
                        <button className="relative">
                          <button className="px-3 py-1 font-bold duration-300 bg-white rounded-full shadow-md cursor-pointer focus:scale-90 peer">
                            {result.price.split('/')[0]}
                          </button>
                          <div className="absolute hidden w-48 p-3 text-left bg-white border border-gray-200 rounded-lg cursor-pointer bottom-9 peer-focus:block">
                            <div className="relative w-full h-24 mb-2">
                              <Image
                                src={result.img}
                                alt={result.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                placeholder="blur"
                                blurDataURL={result.img}
                              />
                            </div>
                            <div>
                              <h2 className="text-sm font-semibold">{result.title}</h2>
                            </div>
                          </div>
                        </button>
                      </Marker>
                    ))}
                  </AppMap>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${
              activePanel !== 'none' ? 'lg:scale-95' : 'scale-100'
            }`}
          >
            {/* Filter and Map Toggle Buttons */}
            <div className="sticky top-[86px] z-30 bg-white border-b border-gray-200 px-4 py-3 flex gap-2">
              <button
                onClick={handleFilterToggle}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activePanel === 'filter'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FilterIcon className="h-5 w-5" />
                  <span>Filter</span>
                </div>
              </button>
              <button
                onClick={handleMapToggle}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activePanel === 'map'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapIcon className="h-5 w-5" />
                  <span>Map</span>
                </div>
              </button>
            </div>

            {/* Listings */}
            <div className="overflow-y-auto">
              {isLoading ? (
                <AppSearchSkeleton />
              ) : (
                <div className="px-4 py-8 lg:py-12 lg:px-7">
                  {/* search data */}
                  <span className="inline-block mb-2 text-sm text-gray-400">
                    {searchResults.length} Properties
                    {propertyType && ` • ${propertyType}`}
                    {select && ` • ${select}`}
                  </span>
                  {/* title */}
                  <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl lg:mb-7">
                    {location ? `Properties in ${location}` : 'All Properties'}
                  </h1>
                  
                  {/* list - 3 cards per row */}
                  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((result) => (
                      <AppPlaceCard key={result.long + result.lat} data={result} gridView={true} />
                    ))}
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Map Toggle */}
        <button
          className={`${
            visibleMapButton
              ? 'translate-y-0'
              : 'translate-y-[80px]'
          } lg:hidden duration-300 fixed flex items-center px-5 py-3 text-sm text-white translate-x-1/2 bg-blue-600 rounded-full right-1/2 bottom-20 shadow-lg active:scale-90 z-50 hover:bg-blue-700`}
          onClick={handleMapToggle}
        >
          {activePanel === 'map' ? (
            <>
              <span>List</span> <ClipboardIcon className="h-4 ml-2" />
            </>
          ) : (
            <>
              <span>Map</span> <MapIcon className="h-4 ml-2" />
            </>
          )}
        </button>

        {/* Mobile Filter Toggle */}
        {activePanel === 'filter' && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="h-full overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={handleFilterToggle}
                  className="text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>
              <PropertyFilters
                propertyType={selectedPropertyType}
                onPropertyTypeChange={setSelectedPropertyType}
              />
            </div>
          </div>
        )}
      </main>
      {/* footer */}
      {activePanel !== 'map' && <AppFooter />}
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchResults = await getSearch();

  return {
    props: { searchResults },
  };
};

export default Search;
