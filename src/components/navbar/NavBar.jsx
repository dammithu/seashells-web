import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { 
      name: 'MEN', 
      hasDropdown: true,
      columns: [
        {
          title: 'MEN',
          items: [
            { name: 'Bracelets', path: '/collections/men-bracelets' },
            { name: 'Necklaces', path: '/collections/men-necklaces' },
            { name: 'Rings', path: '/collections/men-rings' },
            { name: 'Cufflinks', path: '/collections/men-cufflinks' }
          ]
        }
      ]
    },
    { 
      name: 'WOMEN', 
      hasDropdown: true,
      columns: [
        {
          title: 'WOMEN',
          items: [
            { name: 'Necklaces', path: '/collections/women-necklaces' },
            { name: 'Earrings', path: '/collections/women-earrings' },
            { name: 'Bracelets', path: '/collections/women-bracelets' },
            { name: 'Rings', path: '/collections/women-rings' },
            { name: 'Anklets', path: '/collections/women-anklets' }
          ]
        }
      ]
    },
    { 
      name: 'ACCESSORIES', 
      hasDropdown: true,
      columns: [
        {
          title: 'ACCESSORIES',
          items: [
            { name: 'Gift Sets', path: '/collections/gift-sets' },
            { name: 'Gift Cards', path: '/collections/gift-cards' },
            { name: 'Cleaning Kits', path: '/collections/cleaning-kits' },
            { name: 'Storage', path: '/collections/storage' }
          ]
        }
      ]
    },
    { name: 'GIFTS', hasDropdown: false, path: '/gifts' }
  ];

  const handleMenuClick = (itemName) => {
    if (openDropdown === itemName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(itemName);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={closeAllMenus}
              className="cursor-pointer"
            >
              <h1 className="text-3xl font-bold tracking-wider">
                <span style={{ color: '#262626' }}>SEA</span>
                <span className="text-cyan-600">SHELLS</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
              >
                {item.hasDropdown ? (
                  <button 
                    className="flex items-center space-x-1 hover:text-cyan-600 font-medium text-base transition-colors cursor-pointer py-2" 
                    style={{ color: openDropdown === item.name ? '#0891b2' : '#262626' }}
                    onClick={() => handleMenuClick(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                ) : (
                  <Link 
                    to={item.path}
                    className="flex items-center space-x-1 hover:text-cyan-600 font-medium text-base transition-colors cursor-pointer py-2" 
                    style={{ color: '#262626' }}
                    onClick={closeAllMenus}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
                
                {/* Mega Dropdown */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border-t-2 border-cyan-600 shadow-xl z-50"
                    style={{ minWidth: '500px' }}
                  >
                    <div className="flex py-8 px-6">
                      {item.columns.map((column, idx) => (
                        <div key={idx} className="flex-1 px-6">
                          <h3 className="font-bold text-sm mb-4 tracking-wider" style={{ color: '#262626' }}>
                            {column.title}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((subItem) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => handleNavigation(subItem.path)}
                                  className="text-sm hover:text-cyan-600 transition-colors block w-full text-left"
                                  style={{ color: '#666' }}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-3 w-64">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for a Product"
                className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
                style={{ color: '#262626' }}
              />
            </div>

            {/* Search Icon Mobile */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-6 h-6 text-gray-700" />
            </button>

            {/* User Account */}
            <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6 text-gray-700" />
              <span className="hidden xl:inline text-sm text-gray-700 font-medium">LK</span>
              <ChevronDown className="hidden xl:inline w-4 h-4 text-gray-700" />
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-gray-700" />
              ) : (
                <Menu className="w-7 h-7 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.hasDropdown ? (
                  <button 
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base"
                    onClick={() => handleMenuClick(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                ) : (
                  <button 
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base"
                  >
                    <span>{item.name}</span>
                  </button>
                )}
                
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="mt-2 ml-4 space-y-4">
                    {item.columns.map((column, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-xs mb-2 px-4 text-gray-700">{column.title}</h4>
                        {column.items.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.path)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-lg w-full text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdown when clicking outside */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </nav>
  );
}

export default NavBar;