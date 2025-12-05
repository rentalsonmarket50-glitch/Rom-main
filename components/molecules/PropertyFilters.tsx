import { FC, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

interface PropertyFiltersProps {
  propertyType?: string;
  onFilterChange?: (filters: any) => void;
  onPropertyTypeChange?: (type: string) => void;
}

interface FilterSection {
  title: string;
  isOpen: boolean;
}

export const PropertyFilters: FC<PropertyFiltersProps> = ({ 
  propertyType = 'House/Flat',
  onFilterChange,
  onPropertyTypeChange 
}) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(propertyType);
  const [openSections, setOpenSections] = useState({
    category: true,
    priceRange: true,
    tenant: true,
    furnished: true,
    searched: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    category: [] as string[],
    priceRange: [0, 500000],
    tenant: '',
    furnished: [] as string[],
  });

  const propertyTypes = [
    { id: 'House/Flat', label: 'House/Flat' },
    { id: 'PG', label: 'PG' },
    { id: 'Room', label: 'Room' },
    { id: 'Commercial', label: 'Commercial' },
  ];

  const handlePropertyTypeChange = (type: string) => {
    setSelectedPropertyType(type);
    if (onPropertyTypeChange) {
      onPropertyTypeChange(type);
    }
    // Reset category filters when type changes
    setSelectedFilters(prev => ({ ...prev, category: [] }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      priceRange: [0, 500000],
      tenant: '',
      furnished: [],
    });
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedFilters(prev => {
      const newCategories = prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category];
      return { ...prev, category: newCategories };
    });
  };

  const handleFurnishedToggle = (type: string) => {
    setSelectedFilters(prev => {
      const newFurnished = prev.furnished.includes(type)
        ? prev.furnished.filter(f => f !== type)
        : [...prev.furnished, type];
      return { ...prev, furnished: newFurnished };
    });
  };

  // Dynamic categories based on property type
  const getCategoryOptions = () => {
    switch (selectedPropertyType) {
      case 'PG':
        return ['AC Room', 'AC Single Bed', 'Non AC-Room', 'Single Bed'];
      case 'Room':
        return ['2 Room with kitchen', '3 Room with kitchen', 'Room with kitchen', 'Room with washroom', 'Single Bed', 'Single Bed with kitchen'];
      case 'Commercial':
        return ['Co-working', 'Office', 'PG Building', 'Shop', 'Showroom', 'Single Chair'];
      case 'House/Flat':
      default:
        return ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK', 'Annexy', 'Studio Apartment'];
    }
  };

  const tenantOptions = [
    'All',
    'Boys',
    'Girls',
    'Boys & Girls',
    'Family',
    'Family & Boys',
    'Family & Girls',
    'Company'
  ];

  const furnishedOptions = [
    'Fully Furnished',
    'Semi Furnished',
    'Unfurnished'
  ];

  const popularSearches = [
    'PG in Chandigarh | PG for boys and girls in Chandigarh',
    'Independent Builder Floor for Sale in Chandigarh - Builder Floors in Chandigarh',
    'PG in Sector 22 Chandigarh',
    'PG in Sector 21 Chandigarh',
    'PG in Sector 17 Chandigarh'
  ];

  return (
    <div className="w-full bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Filters</h2>
          <button 
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
          >
            Clear all
          </button>
        </div>

        {/* Property Type Tabs */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-gray-900 mb-3">Property Type</h3>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handlePropertyTypeChange(type.id)}
                className={`px-4 py-2.5 rounded-lg border transition-all ${
                  selectedPropertyType === type.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('category')}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-gray-900">Category</span>
            {openSections.category ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {openSections.category && (
            <div className="space-y-2">
              {getCategoryOptions().map((category) => (
                <label
                  key={category}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-colors ${
                    selectedFilters.category.includes(category)
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.category.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600"
                  />
                  <span className={`text-gray-700 ${selectedFilters.category.includes(category) ? 'font-medium' : ''}`}>
                    {category}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('priceRange')}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-gray-900">Price Range</span>
            {openSections.priceRange ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {openSections.priceRange && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Min"
                    value={selectedFilters.priceRange[0]}
                    onChange={(e) => setSelectedFilters(prev => ({
                      ...prev,
                      priceRange: [Number(e.target.value), prev.priceRange[1]]
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                  />
                </div>
                <span className="text-gray-500">-</span>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Max"
                    value={selectedFilters.priceRange[1]}
                    onChange={(e) => setSelectedFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], Number(e.target.value)]
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="500000"
                step="1000"
                value={selectedFilters.priceRange[1]}
                onChange={(e) => setSelectedFilters(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], Number(e.target.value)]
                }))}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>₹0</span>
                <span>₹5,00,000</span>
              </div>
            </div>
          )}
        </div>

        {/* Preferred Tenant Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('tenant')}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-gray-900">Preferred Tenant</span>
            {openSections.tenant ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {openSections.tenant && (
            <div className="space-y-2">
              {tenantOptions.map((tenant) => (
                <label
                  key={tenant}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-colors ${
                    selectedFilters.tenant === tenant
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="tenant"
                    checked={selectedFilters.tenant === tenant}
                    onChange={() => setSelectedFilters(prev => ({ ...prev, tenant }))}
                    className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600"
                  />
                  <span className={`text-gray-700 ${selectedFilters.tenant === tenant ? 'font-medium' : ''}`}>
                    {tenant}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Furnished Type Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <button
            onClick={() => toggleSection('furnished')}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-gray-900">Furnished Type</span>
            {openSections.furnished ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {openSections.furnished && (
            <div className="space-y-2">
              {furnishedOptions.map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-colors ${
                    selectedFilters.furnished.includes(type)
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.furnished.includes(type)}
                    onChange={() => handleFurnishedToggle(type)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600"
                  />
                  <span className={`text-gray-700 ${selectedFilters.furnished.includes(type) ? 'font-medium' : ''}`}>
                    {type}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* People Also Searched For */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('searched')}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-gray-900">People also searched for</span>
            {openSections.searched ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {openSections.searched && (
            <div className="space-y-2">
              {popularSearches.map((search, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle search click
                    console.log('Search clicked:', search);
                  }}
                  className="block w-full text-left text-sm text-blue-600 hover:text-blue-700 hover:underline p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {search}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

