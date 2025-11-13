import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Cufflinks() {
  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    price: [],
    material: [],
    color: [],
    style: [],
    size: [],
  });

  const products = [
    {
      id: 1,
      name: "Classic Silver Square",
      colors: "1 Color",
      style: "Classic",
      price: "LKR 6,950",
      image:
        "https://images.unsplash.com/photo-1624222247344-550fb60583f1?w=800&q=80",
    },
    {
      id: 2,
      name: "Gold Plated Round",
      colors: "2 Colors",
      style: "Luxury",
      price: "LKR 9,950",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
    {
      id: 3,
      name: "Black Onyx Stone",
      colors: "2 Colors",
      style: "Elegant",
      price: "LKR 8,450",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 4,
      name: "Blue Enamel Cufflinks",
      colors: "3 Colors",
      style: "Contemporary",
      price: "LKR 7,750",
      image:
        "https://images.unsplash.com/photo-1588444650700-af1c993b2298?w=800&q=80",
    },
    {
      id: 5,
      name: "Knot Design Silver",
      colors: "1 Color",
      style: "Traditional",
      price: "LKR 6,450",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    },
    {
      id: 6,
      name: "Mother of Pearl",
      colors: "2 Colors",
      style: "Premium",
      price: "LKR 11,950",
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80",
    },
    {
      id: 7,
      name: "Minimalist Bar Design",
      colors: "2 Colors",
      style: "Minimalist",
      price: "LKR 5,950",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
    {
      id: 8,
      name: "Engraved Initials",
      colors: "3 Colors",
      style: "Personalized",
      price: "LKR 8,950",
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    },
    {
      id: 9,
      name: "Diamond Pattern",
      colors: "2 Colors",
      style: "Sophisticated",
      price: "LKR 10,450",
      image:
        "https://images.unsplash.com/photo-1588444650700-af1c993b2298?w=800&q=80",
    },
    {
      id: 10,
      name: "Vintage Gold Oval",
      colors: "1 Color",
      style: "Vintage",
      price: "LKR 9,750",
      image:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
    },
    {
      id: 11,
      name: "Carbon Fiber Modern",
      colors: "2 Colors",
      style: "Modern",
      price: "LKR 12,950",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    },
    {
      id: 12,
      name: "Rhodium Plated Square",
      colors: "2 Colors",
      style: "Executive",
      price: "LKR 13,450",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
  ];

  const filterSections = [
    { name: "Availability", key: "availability" },
    { name: "Price", key: "price" },
    { name: "Material", key: "material" },
    { name: "Color", key: "color" },
    { name: "Style", key: "style" },
    { name: "Size", key: "size" },
  ];

  const [openSections, setOpenSections] = useState({
    availability: false,
    price: false,
    material: false,
    color: false,
    style: false,
    size: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 cursor-pointer">
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href="/collections"
              className="hover:text-gray-900 cursor-pointer"
            >
              Collections
            </a>
            <span className="mx-2">/</span>
            <span className="font-bold text-gray-900">MEN'S CUFFLINKS</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "#262626" }}
        >
          MEN'S CUFFLINKS
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
                    <span
                      className="font-bold text-base"
                      style={{ color: "#262626" }}
                    >
                      {section.name}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openSections[section.key] ? "rotate-180" : ""
                      }`}
                      style={{ color: "#262626" }}
                    />
                  </button>
                  {openSections[section.key] && (
                    <div className="pb-4 pl-4">
                      <p className="text-sm text-gray-600">
                        Filter options coming soon...
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Sort By Section */}
              <div className="border-b border-gray-300">
                <button
                  onClick={() => toggleSection("sortBy")}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="font-bold text-base"
                    style={{ color: "#262626" }}
                  >
                    Sort By: Manual
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openSections.sortBy ? "rotate-180" : ""
                    }`}
                    style={{ color: "#262626" }}
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
                    <h3
                      className="font-bold text-lg mb-1"
                      style={{ color: "#262626" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.colors}</p>
                    <p className="text-sm text-gray-600">{product.style}</p>
                    <p
                      className="font-bold text-base mt-1"
                      style={{ color: "#262626" }}
                    >
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

export default Cufflinks;