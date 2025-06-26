import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Show only on collection page
  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  if (!(showSearch && visible)) return null;

  return (
    <div className="border-t border-b py-4 px-4 flex justify-center items-center gap-3 bg-white z-30 sticky top-[64px] sm:top-[72px]">
      {/* Search Box */}
      <div className="flex items-center border border-gray-300 rounded-full w-full max-w-[600px] px-4 py-2 shadow-sm bg-white">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none bg-transparent text-sm sm:text-base text-gray-700 placeholder:text-gray-400"
        />
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => {
            if (search.trim() !== '') {
              // Add search handling logic if needed
            }
          }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={() => {
          setShowSearch(false);
          setSearch('');
        }}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Close search"
      >
        <img
          src={assets.cross_icon}
          alt="Close"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default SearchBar;
