import React from 'react';
import { Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#262626' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* MENU Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">MENU</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Last Chance
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Make A Return
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Submit A Request
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* MY ACCOUNT Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">MY ACCOUNT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <span className="text-lg">SEA</span>
              <span className="text-cyan-600 text-lg">SHELLS</span>
              <span className="ml-2 text-sm">BLOG</span>
            </button>
            
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>EMAIL SIGN UP</span>
            </button>
            
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>TRACK YOUR ORDER</span>
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-white rounded-lg py-4 px-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 flex-wrap gap-4">
              {/* Visa */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" fill="white"/>
                  <path d="M19.5 10L16.5 22H14L11.5 13C11.4 12.7 11.2 12.5 11 12.4C10.3 12.1 9.5 11.9 8.5 11.7V11.5H13C13.7 11.5 14.2 12 14.3 12.7L15.5 18.5L18.5 11.5H21L19.5 10ZM32 18.5C32 20.5 30 22 27.5 22C25 22 23.5 20.7 23.5 19C23.5 17.5 25 16.5 27 16.5C28 16.5 28.8 16.7 29.5 17V15.5C28.8 15.3 28 15.2 27.2 15.2C24.2 15.2 22 16.8 22 19.2C22 21.2 23.8 22.5 26.5 22.5C29.5 22.5 31.5 20.8 31.5 18.5H32ZM37.5 22H35L33 11.5H35.5L36.5 17.5L38.5 11.5H41L37.5 22ZM44 11.5L42 22H39.5L41.5 11.5H44Z" fill="#1A1F71"/>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                  <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                </svg>
              </div>
              
              {/* Discover */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#FF6000"/>
                  <path d="M38 16C38 19.3 35.3 22 32 22C28.7 22 26 19.3 26 16C26 12.7 28.7 10 32 10C35.3 10 38 12.7 38 16Z" fill="#FFF"/>
                </svg>
              </div>
              
              {/* American Express */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#006FCF"/>
                  <text x="24" y="20" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">AMEX</text>
                </svg>
              </div>
              
              {/* Diners Club */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="#0079BE"/>
                  <circle cx="18" cy="16" r="8" fill="white"/>
                  <circle cx="30" cy="16" r="8" fill="white"/>
                </svg>
              </div>
              
              {/* JCB */}
              <div className="h-8 flex items-center px-3 bg-white border border-gray-200 rounded">
                <span className="text-sm font-bold text-blue-600">JCB</span>
              </div>
              
              {/* Maestro */}
              <div className="h-8 flex items-center">
                <svg className="h-8" viewBox="0 0 48 32" fill="none">
                  <circle cx="18" cy="16" r="10" fill="#0099DF"/>
                  <circle cx="30" cy="16" r="10" fill="#EA001B"/>
                </svg>
              </div>
              
              {/* KOKO */}
              <div className="h-8 flex items-center px-3 bg-purple-100 rounded">
                <span className="text-sm font-bold text-purple-600">KOKO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 border-t border-gray-700 pt-8">
          {/* Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact Information</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-400">
              © 2025 | Seashells | All Rights Reserved. | Powered by Octagen
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-900" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Chat"
            >
              <MessageCircle className="w-5 h-5 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;