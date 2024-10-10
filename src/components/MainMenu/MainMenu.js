import React, { useState } from 'react';

const MainMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
        <li className="text-white hover:text-gray-300 cursor-pointer">About</li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-300 cursor-pointer focus:outline-none"
          >
            Services
          </button>
          {dropdownOpen && (
            <ul className="absolute bg-white text-blue-600 mt-2 rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-blue-100">Web Development</li>
              <li className="px-4 py-2 hover:bg-blue-100">SEO Services</li>
              <li className="px-4 py-2 hover:bg-blue-100">Marketing</li>
            </ul>
          )}
        </li>
        <li className="text-white hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default MainMenu;
