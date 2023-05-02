import React from "react";

const Blog = () => {
  return (
    <div className="pt-24">
      <h3 className="text-center font-bold text-5xl py-12 text-white">Answer to the Given <span className="text-green-500 uppercase">Questions</span></h3>

      <div className="bg-gray-900 bg-opacity-70 my-5 text-white w-2/4 mx-auto p-12 rounded-xl shadow-xl">
        <h5 className="text-2xl">
          Tell us the differences between uncontrolled and controlled
          components.
        </h5>
        <p>
          <span className="text-green-500">Answer:-</span>
        </p>
      </div>

      <div className="bg-gray-900 bg-opacity-70 my-5 text-white w-2/4 mx-auto p-12 rounded-xl shadow-xl">
        <h5 className="text-2xl">
        Tell us the difference between nodejs and express js. 
        </h5>
        <p>
          <span className="text-green-500">Answer:-</span>
        </p>
      </div>

      <div className="bg-gray-900 bg-opacity-70 my-5 text-white w-2/4 mx-auto p-12 rounded-xl shadow-xl">
        <h5 className="text-2xl">
        What is a custom hook, and why will you create a custom hook? 
        </h5>
        <p>
          <span className="text-green-500">Answer:-</span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
