import React from "react";
import bg from "../assets/404PageBg.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <img className="w-full" src={bg} alt="" />
      <div className="errorPageTexts text-white text-center">
        <h1 className="text-4xl font-extralight drop-shadow-lg">Oh no!</h1>
        <p className="text-1xl drop-shadow-lg">
          You might have entered a wrong <i>Route</i>
        </p>
      </div>
      <div className="text-center mt-80">
        <Link to="/">
          <button className="btn btn-outline text-white mx-auto">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
