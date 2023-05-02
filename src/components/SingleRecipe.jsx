import React from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleRecipe = ({recipe}) => {
    const {photo, name, ingredients, method, rating} = recipe; 
    return (
        <div className="w-56 bg-gray-600 bg-opacity-40 flex flex-col rounded-lg">
        <img className="w-full rounded-t-lg" src={photo} alt="customers" />
        <div className="px-6">
          <p className="text-2xl font-semibold text-center py-2 text-white">
            {name}
          </p>
         
        </div>
        <div className="flex items-center justify-start mx-auto mt-auto p-2">
          <Rating
            className="px-2"
            style={{ maxWidth: 150 }}
            value={rating}
            readOnly
          /> <span>{rating}</span>
        </div>
      </div>
    );
};

export default SingleRecipe;