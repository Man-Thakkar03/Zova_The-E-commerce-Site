import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const { navigate , backendUrl , token , cartItems ,setCartItems , getCartAmount , delivery_fee , products } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [formData,setFormData] = useState({
    firstName :'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event)=> {
    const name = event.target.name;
    const value = event.target.value;
    
    setFormData(data => ({ ...data, [name]: value })) 

  }

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      
      let orderItems = []

      for (const productId in cartItems) {
  for (const size in cartItems[productId]) {
    if (cartItems[productId][size] > 0) {
      const itemInfo = structuredClone(products.find(product => product._id === productId));
      if (itemInfo) {
        itemInfo.size = size;
        itemInfo.quantity = cartItems[productId][size];
        orderItems.push(itemInfo);
      }
    }
  }
}

    let orderData = {
  address: formData,
  items: orderItems,
  amount: getCartAmount() + delivery_fee, 
};

     switch(method){

      //api calls for COD 
      case 'cod':
        const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
        
        if (response.data.success) {
          setCartItems({})
          navigate('/orders')
        }else{
          toast.error(response.data.message)
        }
        break;

        default : 
          break;

     }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  return (
    <form onSubmit = {onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-10'>

      {/*-----------Left Side-----------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] bg-white/60 backdrop-blur-lg p-6 rounded-2xl border shadow-md'>

        <div className='my-3 text-xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='First name' required />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='Last name' required/>
        </div>

        <input onChange={onChangeHandler} name='email' value={formData.email} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="email" placeholder='Email address' required/>
        <input onChange={onChangeHandler} name='street' value={formData.street} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='Street' required/>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='city' value={formData.city} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='City' required/>
          <input onChange={onChangeHandler} name='state' value={formData.state} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='State' required/>
        </div>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="number" placeholder='Zipcode' required/>
          <input onChange={onChangeHandler} name='country' value={formData.country} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="text" placeholder='Country' required/>
        </div>

        <input onChange={onChangeHandler} name='phone' value={formData.phone} className='w-full px-3.5 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800' type="number" placeholder='Phone' required/>
      </div>

      {/*-----------Right Side---------------*/}
      <div className='mt-8 w-full sm:max-w-[480px]'>

        <div className='mt-8'>
          <CartTotal />
        </div>

        <div className='mt-12 text-xl'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

        <div className='flex flex-col gap-3 mt-4'>

  {/* Stripe (Disabled, Toast Only) */}
  <div
    onClick={() => {
      toast.warning('⚠️ Stripe is disabled in demo. Please use Cash On Delivery.', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
    }}
    className={`flex items-center gap-3 border p-3 px-4 rounded-xl cursor-pointer transition-all duration-200 
      ${method === 'stripe' ? 'border-gray-800 bg-gray-100' : 'border-gray-300'}`}
  >
    <span className='w-2.5 h-2.5 rounded-full border border-gray-400'></span>
    <img className='h-5 ml-2' src={assets.stripe_logo} alt="stripe" />
  </div>

  {/* Razorpay (Disabled, Toast Only) */}
  <div
    onClick={() => {
      toast.warning('⚠️ Razorpay is disabled in demo. Please use Cash On Delivery.', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
    }}
    className={`flex items-center gap-3 border p-3 px-4 rounded-xl cursor-pointer transition-all duration-200 
      ${method === 'razorpay' ? 'border-gray-800 bg-gray-100' : 'border-gray-300'}`}
  >
    <span className='w-2.5 h-2.5 rounded-full border border-gray-400'></span>
    <img className='h-5 ml-2' src={assets.razorpay_logo} alt="razorpay" />
  </div>

  {/* COD (Active + Sets Method) */}
  <div
    onClick={() => setMethod('cod')}
    className={`flex items-center gap-3 border p-3 px-4 rounded-xl cursor-pointer transition-all duration-200 
      ${method === 'cod' ? 'border-gray-800 bg-gray-100' : 'border-gray-300'}`}
  >
    <span className={`w-2.5 h-2.5 rounded-full border ${
      method === 'cod' ? 'bg-green-600 border-green-600' : 'border-gray-400'
    }`}></span>
    <p className='text-gray-600 text-sm font-medium ml-2'>Cash On Delivery</p>
  </div>
</div>


          <div className='w-full text-end mt-8'>
            <button type='submit'
              className='bg-gradient-to-r from-black to-gray-900 text-white text-sm font-semibold px-12 py-3 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105 active:scale-95'
            >
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
