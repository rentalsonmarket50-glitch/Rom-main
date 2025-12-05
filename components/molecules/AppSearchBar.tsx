import React, { FC, FocusEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
// components
import AppSearchOptionButton from '@/components/atoms/AppSearchOptionButton';
import AppSearchOptionWrapper from '@/components/atoms/AppSearchOptionWrapper';
// data
import { useDataContext } from 'hooks/useDataContext';
import { DATA_ACTION_TYPES } from 'context/actionTypes';
// icons
import { ChevronRightIcon } from '@heroicons/react/outline';
// typings
import { EHeaderOpions } from 'typings';
// utils

enum ESearchMenu {
  LOCATION = 'location',
  PROPERTY_TYPE = 'propertyType',
  SELECT = 'select',
}

interface IAppSearchBarProps {
  menu: EHeaderOpions | null;
  isActiveHeader: boolean;
  searchPage?: boolean;
  closeSearch?: () => void;
}

const AppSearchBar: FC<IAppSearchBarProps> = ({
  menu,
  isActiveHeader,
  closeSearch,
  searchPage,
}) => {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState<ESearchMenu | null>(null);
  // data
  const [{ location, propertyType, select }, dispatch] = useDataContext();
  
  // handler
  const handleOnBlur = (event?: FocusEvent<HTMLElement>) => {
    const { relatedTarget } = event || {};
    if (!relatedTarget) {
      setSearchMenu(null);
      return;
    }
    const relatedTargetClassList = Array.from((relatedTarget as Element)?.classList);
    const result = relatedTargetClassList.some((className) => {
      const prefix = ['rdr', 'btn'];
      if (prefix.includes(className.slice(0, 3))) return true;
    });
    if (!result) setSearchMenu(null);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location) {
      setSearchMenu(ESearchMenu.LOCATION);
      return;
    }
    if (searchPage) closeSearch();
    setSearchMenu(null);

    router.push({
      pathname: '/search',
      query: {
        location,
        propertyType,
        select,
      },
    });
  };

  const propertyTypes = [
    { value: '', label: 'Property Type' },
    { value: 'House/Flat', label: 'House/Flat' },
    { value: 'PG', label: 'PG' },
    { value: 'Room', label: 'Room' },
    { value: 'Commercial', label: 'Commercial' },
  ];

  const selectOptions = [
    { value: '', label: 'Select' },
    { value: 'any', label: 'Any' },
    { value: 'furnished', label: 'Furnished' },
    { value: 'semi-furnished', label: 'Semi Furnished' },
    { value: 'unfurnished', label: 'Unfurnished' },
  ];

  return (
    <>
      <div className={`${isActiveHeader ? 'visible' : 'invisible'} px-4`}>
        <div
          className={`${
            !isActiveHeader && 'translate-y-[-75px] transform scale-50 opacity-0 z-[100]'
          } max-w-[850px] mx-auto mt-2 rounded-full bg-white border border-gray-200 duration-300 hidden md:flex`}
        >
          <form
            action="/search"
            className={`${
              menu === EHeaderOpions.FIND_EXPERIENCES
                ? 'grid-cols-2'
                : 'grid-cols-[0.8fr,0.7fr,0.7fr,auto] lg:grid-cols-[1fr,0.7fr,0.7fr,auto]'
            } grid flex-grow`}
            onSubmit={handleOnSubmit}
          >
            {/* location */}
            <AppSearchOptionButton
              separator
              relative
              type="inputText"
              title="Location"
              placeholder="Where are you going?"
              active={searchMenu === ESearchMenu.LOCATION}
              value={location}
              onChange={({ target }) =>
                dispatch({ type: DATA_ACTION_TYPES.SET_LOCATION, payload: target.value })
              }
              onFocus={() => setSearchMenu(ESearchMenu.LOCATION)}
              onBlur={handleOnBlur}
              onClear={() => {
                dispatch({ type: DATA_ACTION_TYPES.SET_LOCATION, payload: '' });
                handleOnBlur();
              }}
            >
              <AppSearchOptionWrapper className="left-0">
                <div className="py-4">
                  <h2 className="mb-4 text-xs font-bold">GO ANYWHERE, ANYTIME</h2>
                  <button className="flex justify-between w-[436px] px-6 py-4 border border-gray-200 rounded-full shadow-md text-primary">
                    <span className="font-bold">I&apos;m flexible</span>{' '}
                    <ChevronRightIcon className="h-6" />
                  </button>
                </div>
              </AppSearchOptionWrapper>
            </AppSearchOptionButton>

            {menu === EHeaderOpions.PLACES_TO_STAY ? (
              <>
                {/* Property Type Dropdown */}
                <AppSearchOptionButton
                  separator
                  relative
                  title="Property Type"
                  placeholder="Property Type"
                  active={searchMenu === ESearchMenu.PROPERTY_TYPE}
                  value={propertyType ? propertyTypes.find(t => t.value === propertyType)?.label || propertyType : ''}
                  onFocus={() => setSearchMenu(ESearchMenu.PROPERTY_TYPE)}
                  onBlur={handleOnBlur}
                  onClear={() => {
                    dispatch({ type: DATA_ACTION_TYPES.SET_PROPERTY_TYPE, payload: '' });
                    handleOnBlur();
                  }}
                >
                  <AppSearchOptionWrapper className="left-0 w-64">
                    <div className="py-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            dispatch({ type: DATA_ACTION_TYPES.SET_PROPERTY_TYPE, payload: type.value });
                            handleOnBlur();
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${
                            propertyType === type.value ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </AppSearchOptionWrapper>
                </AppSearchOptionButton>

                {/* Select Dropdown */}
                <AppSearchOptionButton
                  relative
                  withSearch
                  title="Select"
                  placeholder="Select"
                  active={searchMenu === ESearchMenu.SELECT}
                  value={select ? selectOptions.find(o => o.value === select)?.label || select : ''}
                  onFocus={() => setSearchMenu(ESearchMenu.SELECT)}
                  onBlur={handleOnBlur}
                  onClear={() => {
                    dispatch({ type: DATA_ACTION_TYPES.SET_SELECT, payload: '' });
                    handleOnBlur();
                  }}
                  isSearch={!!searchMenu}
                  onSearch={() => setSearchMenu(ESearchMenu.LOCATION)}
                >
                  <AppSearchOptionWrapper className="right-0 w-64">
                    <div className="py-2">
                      {selectOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            dispatch({ type: DATA_ACTION_TYPES.SET_SELECT, payload: option.value });
                            handleOnBlur();
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${
                            select === option.value ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </AppSearchOptionWrapper>
                </AppSearchOptionButton>
              </>
            ) : (
              <AppSearchOptionButton
                withSearch
                title="Date"
                placeholder="Add when you want to go"
                active={searchMenu === ESearchMenu.GUESTS}
                value=""
                onFocus={() => setSearchMenu(ESearchMenu.GUESTS)}
                onBlur={handleOnBlur}
                onClear={() => {}}
                isSearch={!!searchMenu}
              >
                {/* Empty wrapper for experiences */}
                <AppSearchOptionWrapper className="left-0">
                </AppSearchOptionWrapper>
              </AppSearchOptionButton>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AppSearchBar;
