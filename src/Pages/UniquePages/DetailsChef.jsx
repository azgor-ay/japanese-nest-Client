import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "../../components/Recipes";
import { FaAward, FaRocket } from "react-icons/fa";

const DetailsChef = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    awards,
    description,
    experience_year,
    name,
    picture,
    signature_dish,
    specialty,
  } = data;

  return (
    <div className="container mx-auto">
      {/* Single Chef Banner */}
      <div className="grid grid-cols-3">
        <div className="p-5 col-span-2 text-black">
          <div className="h-48">
            <img
              className="w-full overflow-hidden rounded-lg"
              src={picture}
              alt=""
            />
          </div>
          <div class="border ms-4">
            <span className="bg-clip-text text-5xl font-extrabold  drop-shadow-md text-transparent bg-gradient-to-r from-green-500 to-violet-900">
              {name}{" "}
            </span>
            <div className="font-bold">
            <p className="badge badge-success">Total {experience_year} years of cooking experience</p>
            </div>
            <div>
              <h4 className="font-bold pt-4 text-xl drop-shadow">
                Gained Awards
              </h4>
              {awards.map((a) => (
                <div>
                  <p className="ms-6 font-semibold badge">
                    {" "}
                    <FaAward className="inline" /> {a}
                  </p>
                </div>
              ))}
            </div>
            <div className="py-5">
              <div className="badge badge-secondary">
                <p>Signature Dish: {signature_dish}</p>
              </div>
              <div className="badge badge-secondary ms-8">
                <p>Specialty on: {specialty}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-bold py-5 mt-12 text-3xl text-white">
            Words that describe {name} the best{" "}
          </h1>
          <p className="leading-relaxed text-gray-400">{description}</p>
        </div>
      </div>

      <div>
        <h1 className="text-5xl py-6 text-white font-bold text-center mt-28">
          Best recipes of <span className="text-green-500">{name}</span>
        </h1>
        <Recipes></Recipes>
      </div>
    </div>
  );
};

export default DetailsChef;
