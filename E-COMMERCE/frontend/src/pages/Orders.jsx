import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios'

const Orders = () => {

  const { backendUrl ,token, currency } = useContext(ShopContext);

  const [orderData,setOrderData] = useState([])

  const loadOrderData = async ()=>{
    try {

      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
        
      }
      
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16 px-4 sm:px-10'>

      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className='flex flex-col gap-6'>
        {
          orderData.map((item, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-xl p-5 bg-white/60 backdrop-blur-md shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300 hover:shadow-lg'
            >
              {/* Left Info */}
              <div className='flex items-start gap-5 text-sm'>
                <img className='w-16 sm:w-20 rounded-lg object-cover' src={item.image[0]} alt="" />
                <div>
                  <p className='text-base font-semibold text-gray-800'>{item.name}</p>
                  <div className='flex flex-wrap items-center gap-3 mt-1 text-base text-gray-700'>
                    <p >{currency}{item.price}</p>
                    <p className='opacity-75'>Qty: {item.quantity}</p>
                    <p className='opacity-75'>Size: {item.size}</p>
                  </div>
                  <p className='mt-1 text-xs text-gray-500'>Ordered on: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1 text-xs text-gray-500'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>

              {/* Right Info */}
              <div className='flex flex-col sm:flex-row md:w-1/2 justify-between items-start md:items-center gap-3'>
                <div className='flex items-center gap-2'>
                  <span className='w-2.5 h-2.5 rounded-full bg-green-500'></span>
                  <p className='text-sm text-green-700 font-medium'>{item.status}</p>
                </div>

                <button onClick={loadOrderData} className='bg-gradient-to-r from-black to-gray-900 text-white text-sm px-6 py-2 rounded-md font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95'>
                  TRACK ORDER
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
