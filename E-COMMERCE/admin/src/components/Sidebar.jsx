import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'; // Adjust path as needed

const Sidebar = () => {
  const links = [
    { to: "/add", icon: assets.add_icon, label: "Add Items" },
    { to: "/list", icon: assets.order_icon, label: "List Items" },
    { to: "/orders", icon: assets.order_icon, label: "Orders" }
  ];

  return (
    <div className="w-[18%] min-h-screen bg-white border-r border-gray-200 shadow-sm">
      <div className="flex flex-col gap-5 pt-10 pl-[20%] text-[15px] font-medium">
        {links.map(({ to, icon, label }, idx) => (
          <NavLink
            key={idx}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 rounded-l-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "hover:bg-pink-100 text-gray-800"
              }`
            }
          >
            <img className="w-5 h-5" src={icon} alt={label} />
            <p className="hidden md:block">{label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
