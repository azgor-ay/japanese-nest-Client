import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [toggleNav, setToggleNav] = useState(false);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
 
  return (
    <div className="flex items-center bg-base-100 text-white md:container mx-auto justify-between">
      <Link to="/" title="Redirect to Home">
        <div className="flex-col text-center ms-2 md:ms-0">
          <h1 className="text-3xl font-bold -mb-1.5">
            <span className="text-green-500 drop-shadow-lg">Japanese</span>
            <span className="">Nest</span>
          </h1>
          <p className="text-xs text-gray-300 font-semibold">
            Recipes to live longer
          </p>
        </div>
      </Link>
      {/* big devices navbar */}
      <nav className="hidden md:block p-6">
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
      </nav>

      {/* Mobile device Navbar  */}
      <div className="md:hidden absolute top-2 -right-16 z-50">
        <div
          className="w-4"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          {toggleNav ? (
            <FaTimes className="inline" />
          ) : (
            <FaBars className="inline" />
          )}
        </div>
        <nav
          className={`flex flex-col text-left bg-green-500 rounded-2xl
          ${
            toggleNav ? "top-1" : "-top-48"
          } right-24 duration-700 relative p-3`}
        >
          <NavLink
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className={({ isActive }) =>
              isActive ? "mb-active" : "mb-default"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className={({ isActive }) =>
              isActive ? "mb-active" : "mb-default"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className={({ isActive }) =>
              isActive ? "mb-active" : "mb-default"
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          <NavLink
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
            className=" bg-black rounded-2xl text-center text-xs font-bold py-2 mt-1"
            to="/login"
          >
            Login
          </NavLink>
        </nav>
      </div>

      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={
                    user.displayName ? user.displayName : "Anonymous User"
                  }
                >
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/fdwyBxN/User.png"
                    }
                  />
                </a>
                <Tooltip id="my-tooltip" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/usersProfile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="hidden md:inline">
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
