import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Collection() {
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    price: [],
    category: [],
    style: []
  });

  const collections = [
    {
      id: 1,
      name: 'NECKLACES',
      discount: '10%',
      description: 'Elegant neck pieces',
      items: '24 Items',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    },
    {
      id: 2,
      name: 'BRACELETS',
      discount: '60%',
      description: 'Wrist adornments',
      items: '18 Items',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    },
    {
      id: 3,
      name: 'EARRINGS',
      discount: '65%',
      description: 'Stunning ear jewelry',
      items: '32 Items',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    },
    {
      id: 4,
      name: 'RINGS',
      discount: '10%',
      description: 'Beautiful finger rings',
      items: '28 Items',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80'
    },
    {
      id: 5,
      name: 'ANKLETS',
      discount: '60%',
      description: 'Delicate ankle chains',
      items: '12 Items',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80'
    },
    {
      id: 6,
      name: 'PENDANTS',
      discount: '65%',
      description: 'Charming pendants',
      items: '20 Items',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    }
  ];

  const filterSections = [
    { name: 'Availability', key: 'availability' },
    { name: 'Price', key: 'price' },
    { name: 'Category', key: 'category' },
    { name: 'Style', key: 'style' }
  ];

  const [openSections, setOpenSections] = useState({
    availability: false,
    price: false,
    category: false,
    style: false
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="font-bold text-gray-900">Collections</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#262626' }}>
          COLLECTIONS
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - STICKY */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-4 space-y-1">
              {filterSections.map((section) => (
                <div key={section.key} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-base" style={{ color: '#262626' }}>
                      {section.name}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openSections[section.key] ? 'rotate-180' : ''
                      }`}
                      style={{ color: '#262626' }}
                    />
                  </button>
                  {openSections[section.key] && (
                    <div className="pb-4 pl-4">
                      <p className="text-sm text-gray-600">Filter options coming soon...</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Sort By Section */}
              <div className="border-b border-gray-300">
                <button
                  onClick={() => toggleSection('sortBy')}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-base" style={{ color: '#262626' }}>
                    Sort By: Featured
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openSections.sortBy ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#262626' }}
                  />
                </button>
              </div>
            </div>
          </aside>

          {/* Collections Grid - SCROLLABLE */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="group cursor-pointer">
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay with discount and button */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex flex-col items-center justify-center">
                      <div className="text-white text-5xl font-bold mb-4 opacity-100">
                        {collection.discount}
                      </div>
                      <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                        VIEW PRODUCTS
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#262626' }}>
                      {collection.name}
                    </h3>
                    <p className="text-sm text-gray-600">{collection.description}</p>
                    <p className="text-sm text-gray-600">{collection.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Collection;