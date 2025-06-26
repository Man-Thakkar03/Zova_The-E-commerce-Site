import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className='border-t border-b py-5 px-4 flex justify-center items-center gap-3'>
      {/* Search Box */}
      <div className='flex items-center border border-gray-400 rounded-full w-3/4 sm:w-1/2 px-4 py-2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm text-gray-700'
          type="text"
          placeholder='Search for products...'
        />
        <img
          className='w-4 ml-2 cursor-pointer'
          src={assets.search_icon}
          alt="search"
          onClick={() => {
            if (search.trim() !== '') {
              // Optional search logic here
            }
          }}
        />
      </div>

      {/* Close Button just after search box */}
      <img
        onClick={() => {
          setShowSearch(false);
          setSearch('');
        }}
        className='w-3.5 cursor-pointer hover:scale-110 transition'
        src={assets.cross_icon}
        alt="close"
      />
    </div>
  ) : null;
};

export default SearchBar;
