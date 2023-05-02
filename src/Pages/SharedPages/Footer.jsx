import React from "react";
import socialMedia from "../../assets/Group 9969.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 p-12 grid grid-cols-6 text-xs mt-8">
      <div className="col-span-2 px-5">
        <Link to="/" title="Redirect to Home">
          <div className="flex-col text-center">
            <h1 className="text-3xl font-bold -mb-1.5">
              <span className="text-gray-500 hover:text-green-500 drop-shadow-lg">
                Japanese
              </span>
              <span className="">Nest</span>
            </h1>
            <p className="text-xs font-semibold text-gray-500 hover:text-green-500">
              Recipes to live longer
            </p>
          </div>
        </Link>
        <img
          className="mt-4 mx-auto grayscale hover:grayscale-0 "
          src={socialMedia}
          alt=""
        />
      </div>

      <div>
        <h4 className="footer-sub-title">Company</h4>
        <p className="footer-links">About us</p>
        <p className="footer-links">Work</p>
        <p className="footer-links">Latest News</p>
        <p className="footer-links">Career</p>
      </div>

      <div>
        <h4 className="footer-sub-title">Product</h4>
        <p className="footer-links">Prototype</p>
        <p className="footer-links">Plans & Pricing</p>
        <p className="footer-links">Customers</p>
        <p className="footer-links">Integrations</p>
      </div>

      <div>
        <h4 className="footer-sub-title">Support</h4>
        <p className="footer-links">Help Desk</p>
        <p className="footer-links">Sales</p>
        <p className="footer-links">Become a Partner</p>
        <p className="footer-links">Developers</p>
      </div>

      <div>
        <h4 className="footer-sub-title">Contract</h4>
        <p className="footer-links">Kamargop, Demra, Dhaka</p>
        <p className="footer-links">+880 1902168392</p>
      </div>
    </div>
  );
};

export default Footer;
