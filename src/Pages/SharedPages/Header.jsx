import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 text-white container mx-auto justify-between">
      <div className="flex-col">
        <h1 className="text-3xl font-semibold -mb-1.5">
          <span className="text-green-500 drop-shadow-lg">Japanese</span>
          <span className="">Nest</span>
        </h1>
        <p className="text-xs text-gray-500">Recipes to live longer</p>
      </div>
      <div>
        <NavLink className={({isActive})=> isActive? "active" : "default"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive? "active" : "default"} to="/blog">Blog</NavLink>
        <NavLink className={({isActive})=> isActive? "active" : "default"} to="/contact">Contact Us</NavLink>
      </div>
      <div className="flex-none gap-2">
      <button class="px-6 py-1.5 btn-primary font-semibold text-white rounded-2xl">Login</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/fdwyBxN/User.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
