import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch, getCartCount ,token ,setToken ,setCartItems } = useContext(ShopContext);
  
  const logout = ()=>{
    navigate("/login")
      localStorage.removeItem('token')
      setToken('')
      setCartItems({})
      
  }
  const [visible,setVisible] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = () => {
    setShowSearch(true);
    // Always navigate to /collection when search is clicked
    navigate('/collection');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 font-mono text-sm sm:text-base tracking-wider uppercase transition-all duration-300 
     after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r from-fuchsia-500 to-sky-500 hover:after:w-full after:transition-all after:duration-500
     ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-500 after:w-full' : 'text-gray-400 hover:text-black'}`;

  return (
    <div className={`w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-32 hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-10 font-semibold">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/collection" className={navLinkClass}>Collection <span className="ml-1 animate-pulse text-pink-500">★</span></NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <img 
            src={assets.search_icon} 
            onClick={handleSearchClick} 
            alt="Search" 
            className="w-6 cursor-pointer hover:scale-110 hover:brightness-125 transition-transform duration-300" 
          />

          <Link to="/cart" className="relative hover:scale-110 transition-transform">
            <img src={assets.cart_icon} alt="Cart" className="w-6" />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
              {getCartCount()}
            </div>
          </Link>

        
          <div className="relative group cursor-pointer">
  <div className="relative group cursor-pointer">
  {/* Icon */}
  <img onClick={()=> token ? null : navigate('/login')}
    src={assets.profile_icon} 
    alt="User" 
    className="w-7 hover:scale-110 hover:brightness-110 transition-transform duration-300" 
  />

  {/* Dropdown */}
  
  {token && 
  <div className="absolute top-9 right-0 z-10 w-40 py-3 px-5 bg-white/80 backdrop-blur-md text-gray-700 rounded-lg border border-gray-200 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
    <a href=''><p  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 cursor-pointer">Source Code</p></a>
    <p onClick={()=>navigate('/orders')} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 cursor-pointer">Orders</p>
    <p onClick={logout} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 cursor-pointer">Logout</p>
  </div>}
</div>
</div>



          <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar Menu - Mobile */}
<div className={`fixed top-0 right-0 h-full bg-white/60 backdrop-blur-lg shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${visible ? 'w-full sm:w-64' : 'w-0'} overflow-hidden`}>
  <div className="p-6 flex flex-col gap-4 text-base text-gray-700 font-semibold">
    
    {/* Back Button */}
    <div onClick={() => setVisible(false)} className="flex items-center gap-3 cursor-pointer group">
      <img className="h-4 rotate-180 group-hover:scale-110 transition-transform" src={assets.dropdown_icon} alt="Back" />
      <p className="group-hover:text-pink-500 transition-colors">Back</p>
    </div>

    {/* Menu Links */}
    <NavLink 
      onClick={() => setVisible(false)} 
      to="/" 
      className={({ isActive }) =>
        `py-2 pl-4 border-b transition-all duration-300 ${
          isActive 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500' 
            : 'text-gray-700 hover:text-pink-500'
        }`
      }>
      Home
    </NavLink>

    <NavLink 
      onClick={() => setVisible(false)} 
      to="/collection" 
      className={({ isActive }) =>
        `py-2 pl-4 border-b transition-all duration-300 ${
          isActive 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500' 
            : 'text-gray-700 hover:text-purple-500'
        }`
      }>
      Collection
    </NavLink>

    <NavLink 
      onClick={() => setVisible(false)} 
      to="/about" 
      className={({ isActive }) =>
        `py-2 pl-4 border-b transition-all duration-300 ${
          isActive 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-sky-500' 
            : 'text-gray-700 hover:text-blue-600'
        }`
      }>
      About
    </NavLink>

    <NavLink 
      onClick={() => setVisible(false)} 
      to="/contact" 
      className={({ isActive }) =>
        `py-2 pl-4 border-b transition-all duration-300 ${
          isActive 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500' 
            : 'text-gray-700 hover:text-orange-500'
        }`
      }>
      Contact
    </NavLink>
  </div>
</div>
      </div>
   </div>
   
  );
};

export default Navbar;
