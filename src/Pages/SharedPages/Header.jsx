import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="navbar bg-base-100 text-white container mx-auto justify-between">
      <Link to="/" title="Redirect to Home">
        <div className="flex-col text-center">
          <h1 className="text-3xl font-bold -mb-1.5">
            <span className="text-green-500 drop-shadow-lg">Japanese</span>
            <span className="">Nest</span>
          </h1>
          <p className="text-xs text-gray-300 font-semibold">
            Recipes to live longer
          </p>
        </div>
      </Link>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  title={user.displayName ? user.displayName : "Anonymous User"}
                  src={user ? user.photoURL : "https://i.ibb.co/fdwyBxN/User.png"}
                />
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
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-1.5 btn-primary font-semibold text-white rounded-2xl">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
