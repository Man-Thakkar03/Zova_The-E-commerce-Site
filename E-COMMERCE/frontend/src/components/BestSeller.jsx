import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 px-4 sm:px-8 lg:px-12">
      {/* Title + Subtext (UNCHANGED) */}
      <div className="text-center py-8 text-3xl">
        <Title text1={'THE HYPE '} text2={'IS REAL'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          "What’s hotter than gossip? This section. What’s next? You in these fits🫶."
        </p>
      </div>

      {/* Grid with Techy Effects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.05] hover:shadow-xl rounded-xl"
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
  );
};

export default BestSeller;
