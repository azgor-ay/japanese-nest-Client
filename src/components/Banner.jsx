import React from "react";
import img from "../assets/About-usBanner.png";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="text-white grid md:grid-cols-2 bg-black bg-opacity-70">
          <div className=" p-2 md:px-12 pt-5 md:pt-16">
            <h1 className="md:text-2xl leading-relaxed uppercase px-6 text-center font-bold md:mb-3">
              Why to choose japanese food recipes from us?
            </h1>
            <div className="p-2 md:px-5 text-gray-200 text-xs drop">
              <p className="py-1 drop-shadow">
                "Japanese Nest" is a brand that offers healthy Japanese food
                recipes to help people keep themselves fit and active. The
                recipes provided by Japanese Nest are designed to be both
                nutritious and delicious, making it easier for people to adopt a
                healthy lifestyle.
              </p>
              <p className="py-1 drop-shadow">
                The Japanese cuisine is known for its use of fresh ingredients
                and simple preparation methods, making it a great choice for
                those who want to eat healthily without sacrificing taste.
                Japanese Nest takes advantage of these characteristics by
                providing recipes that feature a wide variety of vegetables,
                fruits, seafood, and lean proteins.
              </p>
              <p className="py-1 drop-shadow hidden md:block">
                In addition to providing recipes, Japanese Nest may also offer
                educational resources on the health benefits of Japanese
                cuisine, including its emphasis on whole foods, balanced
                portions, and mindful eating habits. This can help people
                understand the rationale behind the recipes and motivate them to
                adopt healthier habits in their daily lives.
              </p>
              <p className="py-1 drop-shadow hidden md:block">
                By providing high-quality, healthy Japanese food recipes,
                Japanese Nest aims to empower people to take control of their
                health and wellbeing, one meal at a time.
              </p>{" "}
            </div>
          </div>
          <div className="mx-auto pt-5 opacity-90 drop-shadow-2xl hidden md:block">
            <LazyLoad>
              <img className="w-72" src={img} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
