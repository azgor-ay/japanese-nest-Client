import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const {
    id,
    picture,
    name,
    num_recipes,
    num_likes,
    experience_year,
    description,
  } = chef;

  return (
    <div className="card md:w-72 shadow-xl m-4 bg-gray-900">
      <figure>
        <img className="w-full" src={picture} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">
          <span className="font-bold text-1xl">+</span>
          {experience_year} Years Experience
        </div>

        <p className="text-xs py-2">
          {description.split(" ").slice(0, 15).join(" ")} ...
          <Link className="link" to="">
            Read More
          </Link>
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Total Recipe {num_recipes}</div>
          <div className="badge badge-outline">Likes {num_likes}</div>
        </div>
      </div>
      <Link to={`/chefDetails/${id}`}>
        <button className="w-full rounded-b-lg bg-green-500 text-black font-semibold py-2">
          View Recipes
        </button>
      </Link>
    </div>
  );
};

export default Card;
