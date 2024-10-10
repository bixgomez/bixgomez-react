import React, { useEffect, useState } from 'react';

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  // Fetch menu items from the API
  useEffect(() => {
    fetch('https://llanokidbooks.ddev.site/wp-json/menus/v1/menus/10')
      .then((response) => response.json())
      .then((data) => setMenuItems(data.items))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Toggle dropdown for the clicked menu item
  };

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li key={item.ID} className="relative group">
            {item.child_items ? (
              // If the menu item has child items, render it as a dropdown
              <>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-white hover:text-gray-300 cursor-pointer focus:outline-none">
                  {item.title}
                </button>
                {dropdownOpen === index && (
                  <ul className="absolute bg-white text-blue-600 mt-2 rounded shadow-lg">
                    {item.child_items.map((child) => (
                      <li key={child.ID} className="px-4 py-2 hover:bg-blue-100">
                        <a href={child.url}>{child.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              // Render normal menu item
              <a href={item.url} className="text-white hover:text-gray-300 cursor-pointer">{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
