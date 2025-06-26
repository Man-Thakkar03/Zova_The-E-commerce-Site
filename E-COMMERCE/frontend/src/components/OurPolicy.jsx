import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='bg-white py-20 px-6'>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center text-xs sm:text-sm md:text-base text-gray-700'>

        {/* Policy 1 */}
        <div className='hover:scale-105 transition-transform duration-300'>
          <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="exchange icon" />
          <p className='font-semibold text-black'>Easy Exchange Policy</p>
          <p className='text-gray-500'>We offer hassle-free exchange for all products.</p>
        </div>

        {/* Policy 2 */}
        <div className='hover:scale-105 transition-transform duration-300'>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="return icon" />
          <p className='font-semibold text-black'>7-Day Return Policy</p>
          <p className='text-gray-500'>Return any item within 7 days — no questions asked.</p>
        </div>

        {/* Policy 3 */}
        <div className='hover:scale-105 transition-transform duration-300'>
          <img src={assets.support_img} className='w-12 m-auto mb-5' alt="support icon" />
          <p className='font-semibold text-black'>24/7 Customer Support</p>
          <p className='text-gray-500'>We're here for you around the clock, always.</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
