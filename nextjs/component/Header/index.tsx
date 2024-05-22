// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="w-full inline-block bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 border =">
        {/* Logo */}
        <div className="text-lg font-bold border">
          <a href="#" className="hover:text-gray-300">
            MyLogo
          </a>
        </div>
        {/* Navigation Menu */}
      </div>
    </header>
  );
};

export default Header;
