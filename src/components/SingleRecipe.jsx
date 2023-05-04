import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import LazyLoad from "react-lazy-load";

const SingleRecipe = ({ recipe }) => {
  const { photo, name, ingredients, method, rating } = recipe;
  const [liked, setLiked] = useState(false);

  const handleLove = () => {
    setLiked(true);
    Swal.fire("You Loved the Recipe");
  };

  return (
    <div className="w-full bg-gray-600 bg-opacity-40 flex flex-col rounded-lg">
      <LazyLoad>
        <img className="w-full rounded-t-lg" src={photo} alt="customers" />
      </LazyLoad>
      <button
        onClick={handleLove}
        disabled={liked}
        className="btn btn-primary -mt-12"
      >
        Love
        <FaHeart className="inline ms-2" />
      </button>
      <div className="px-6">
        <div className="flex items-center justify-center mx-auto mt-auto p-2">
          <p className="text-2xl font-bold text-center py-2 text-white">
            {name}
          </p>
          <Rating
            className="px-2"
            style={{ maxWidth: 150 }}
            value={rating}
            readOnly
          />{" "}
          <span>{rating}</span>
        </div>
        <p className="font-bold text-white underline">Ingredients:- </p>
        <ol className="list-inside list-disc ms-4">
          {ingredients.map((li) => (
            <li>{li}</li>
          ))}
        </ol>
        <p className="font-bold text-white underline text-center mt-8 mb-2">
          Methods you must follow to cook this recipe
        </p>
        <ol className="list-decimal list-outside ms-9 pb-5">
          {method.map((follow) => (
            <li>{follow}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SingleRecipe;
