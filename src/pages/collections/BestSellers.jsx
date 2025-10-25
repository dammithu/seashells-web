import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function BestSellers() {
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    price: [],
    size: [],
    color: [],
    gender: [],
    fit: []
  });

  const products = [
    {
      id: 1,
      name: 'Classic Pearl Necklace',
      colors: '3 Colors',
      fit: 'Adjustable',
      price: 'LKR 8,950',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    },
    {
      id: 2,
      name: 'Gold Chain Bracelet',
      colors: '2 Colors',
      fit: 'Regular Fit',
      price: 'LKR 6,750',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    },
    {
      id: 3,
      name: 'Diamond Stud Earrings',
      colors: '2 Colors',
      fit: 'Regular Fit',
      price: 'LKR 12,500',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    },
    {
      id: 4,
      name: 'Delicate Anklet Chain',
      colors: '3 Colors',
      fit: 'Adjustable',
      price: 'LKR 4,200',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80'
    },
    {
      id: 5,
      name: 'Rose Gold Pendant',
      colors: '2 Colors',
      fit: 'Adjustable',
      price: 'LKR 7,500',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    },
    {
      id: 6,
      name: 'Infinity Ring Set',
      colors: '4 Colors',
      fit: 'Regular Fit',
      price: 'LKR 5,950',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80'
    },
    {
      id: 7,
      name: 'Multi-Layer Necklace',
      colors: '3 Colors',
      fit: 'Adjustable',
      price: 'LKR 9,200',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    },
    {
      id: 8,
      name: 'Gemstone Ring',
      colors: '5 Colors',
      fit: 'Regular Fit',
      price: 'LKR 11,500',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80'
    },
    {
      id: 9,
      name: 'Hoop Earrings Set',
      colors: '2 Colors',
      fit: 'Regular Fit',
      price: 'LKR 6,200',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    },
    {
      id: 10,
      name: 'Charm Bracelet',
      colors: '3 Colors',
      fit: 'Adjustable',
      price: 'LKR 8,500',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    },
    {
      id: 11,
      name: 'Statement Necklace',
      colors: '2 Colors',
      fit: 'Adjustable',
      price: 'LKR 10,950',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    },
    {
      id: 12,
      name: 'Tennis Bracelet',
      colors: '2 Colors',
      fit: 'Regular Fit',
      price: 'LKR 14,500',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    }
  ];

  const filterSections = [
    { name: 'Availability', key: 'availability' },
    { name: 'Price', key: 'price' },
    { name: 'Size', key: 'size' },
    { name: 'Color', key: 'color' },
    { name: 'Gender', key: 'gender' },
    { name: 'Fit', key: 'fit' }
  ];

  const [openSections, setOpenSections] = useState({
    availability: false,
    price: false,
    size: false,
    color: false,
    gender: false,
    fit: false
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
            <a href="/" className="hover:text-gray-900 cursor-pointer">Home</a>
            <span className="mx-2">/</span>
            <a href="/collections" className="hover:text-gray-900 cursor-pointer">Collections</a>
            <span className="mx-2">/</span>
            <span className="font-bold text-gray-900">BEST SELLERS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#262626' }}>
          BEST SELLERS
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
                    Sort By: Best Selling
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

          {/* Products Grid - SCROLLABLE */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#262626' }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.colors}</p>
                    <p className="text-sm text-gray-600">{product.fit}</p>
                    <p className="font-bold text-base mt-1" style={{ color: '#262626' }}>
                      {product.price}
                    </p>
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

export default BestSellers;