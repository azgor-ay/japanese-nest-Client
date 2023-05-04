import React from "react";
import { FaRocket } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div>
      <div className="container mx-auto text-center p-5 md:p-12 bg-gray-600 my-6 bg-opacity-40 md:rounded-2xl">
        <h4 className="text-green-500 font-bold md:font-normal">
          SUBSCRIBE NOW!
        </h4>
        <h2 className="text-xs md:text-3xl py-3 leading-normal font-semibold">
          Secrets to Japanese Cooking <br />
          Japanese cooking tips and weekly newsletter.
        </h2>
        <input
          className="px-4 py-2 bg-gray-300 w-full md:w-2/4 text-black rounded-t-lg md:rounded-none"
          placeholder="Enter Your Email Address"
          type="email"
        />

        <button
          className="bg-white text-black w-full md:w-1/6 rounded-b-lg md:rounded-none hover:bg-green-500
         px-8 py-2 ml-0"
        >
          Subscribe{" "}
          <FaRocket className="inline text-green-500 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
