import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const {
    picture,
    name,
    num_recipes,
    num_likes,
    experience_year,
    description,
  } = chef;
  console.log(chef);

  return (
    <div className="card w-72 bg-base-100 shadow-xl m-4">
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
      <button className="w-full rounded-b-lg bg-green-500 text-black font-semibold py-2">
        <Link>View Recipes</Link>
      </button>
    </div>
  );
};

export default Card;
