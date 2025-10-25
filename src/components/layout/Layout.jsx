import React from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;