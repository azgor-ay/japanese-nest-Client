import React from "react";
import { Link } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <div className="home-banner text-center md:text-left md:w-full md:p-12">
      <div className="text-black pt-12 pb-12 md:pl-16 md:py-11">
        <h1 className="text-3xl md:text-5xl font-extrabold ">
          Welcome to <br />
          <span className="bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-green-500 to-yellow-900">
            Japanese Nest!
          </span>
        </h1>
        <div className="md:pr-20">
          <p className="text-gray-600 text-xs md:text-1xl leading-normal px-5 md:px-0 md:pr-96 mt-4">
            At Japanese Nest, we are passionate about bringing the authentic
            flavors of Japan to your table, while promoting a healthy lifestyle
            through our carefully crafted recipes.
          </p>
        </div>
        <Link to="/about"><button className="btn btn-primary my-5">Know More</button></Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
