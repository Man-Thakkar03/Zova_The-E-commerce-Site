import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-8 lg:px-12">
      {/* Sidebar Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-800 font-semibold hover:text-rose-600 transition-all"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? 'rotate-90' : ''
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* CATEGORY */}
        <div
          className={`rounded-xl border border-gray-300 bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 px-4 py-4 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-bold text-gray-700 tracking-wide">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            {['Men', 'Women'].map((label) => (
              <label
                key={label}
                className="flex items-center gap-2 p-2 rounded-lg transition duration-200 cursor-pointer hover:bg-rose-100 hover:text-rose-600 group"
              >
                <input
                  type="checkbox"
                  value={label}
                  onChange={toggleCategory}
                  className="accent-rose-500 w-4 h-4 group-hover:ring-2 group-hover:ring-rose-300 transition-all duration-150"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* TYPE */}
        <div
          className={`rounded-xl border border-gray-300 bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 px-4 py-4 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-bold text-gray-700 tracking-wide">TYPE</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 p-2 rounded-lg transition duration-200 cursor-pointer hover:bg-rose-100 hover:text-rose-600 group"
              >
                <input
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                  className="accent-rose-500 w-4 h-4 group-hover:ring-2 group-hover:ring-rose-300 transition-all duration-150"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-lg sm:text-2xl mb-4">
          <Title text1={'BECAUSE BORING? '} text2={' COULDN’T BE YOU'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          >
            <option value="">Sort by: Relevance</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              className="hover:scale-[1.05] hover:shadow-2xl hover:bg-white/30 transition-all duration-300 rounded-xl"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
