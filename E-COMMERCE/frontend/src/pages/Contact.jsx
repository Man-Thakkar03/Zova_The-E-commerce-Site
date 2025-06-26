import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 transition-all">
      <div className='text-2xl text-center pt-10 border-t border-gray-200'>
        <Title className='text-lg' text1={"LET'S"} text2={' SYNC UP 🔗'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-6 md:px-12'>
        <img className='w-full md:max-w-[480px] rounded-xl shadow-lg' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 bg-white p-2 md:p-0'>
          <p className='font-semibold text-xl text-pink-600'>Our Store</p>
          <p className='text-gray-600 leading-relaxed'>
            203, Vaikunth City <br /> Bakrol, Anand, Gujarat
          </p>

          <p className='text-gray-600'>
            Tel: <span className='text-black font-medium'>+91-265-2244-668</span><br />
            Email: <span className='text-black font-medium'>admin@Zova.com</span>
          </p>

          <p className='text-xl text-gray-800 font-bold mt-2'>Careers at Zova 🚀</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>

          <button className='border border-gray-600 px-8 py-3 rounded-full font-semibold tracking-wide 
            hover:bg-gradient-to-tr hover:from-black hover:to-gray-800 hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
