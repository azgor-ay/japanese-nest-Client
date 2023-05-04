import React from "react";
import img from "../assets/ourMissionImg.png";

const OurMission = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-center md:py-5 mt-12 font-extrabold text-white">
        Our <span className="text-green-500">Mission</span>
      </h1>
      <div className="grid md:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={img} alt="" className="w-full md:px-10" />
        </div>
        <div className="md:pt-12 text-center md:w-full w-72 md:pr-16 mx-auto md:mx-0 md:text-left">
          <p className="py-3 text-xs leading-relaxed">
            Our mission is to make it easy for anyone to enjoy delicious,
            wholesome Japanese food at home, with convenient meal kits and
            ready-to-eat options that are both tasty and nutritious.
          </p>
          <p className="py-3 text-xs leading-relaxed">
            Our chefs use only the freshest, high-quality ingredients to create
            our signature dishes, which are inspired by traditional Japanese
            cuisine and adapted to suit modern tastes and lifestyles. From sushi
            and sashimi to ramen and udon, we have something for everyone!
          </p>
          <p className="py-3 text-xs leading-relaxed">
            We are committed to sustainability and ethical sourcing, and we work
            closely with local farmers and producers to ensure that our
            ingredients are of the highest quality and sourced responsibly. We
            believe that healthy food should be accessible to everyone, and we
            are constantly exploring new ways to reduce our environmental impact
            and give back to our community.
          </p>
          <p className="py-3 text-xs leading-relaxed">
            Thank you for choosing Japanese Nest for your healthy Japanese food
            needs. We hope you enjoy our products as much as we enjoy making
            them!
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurMission; 
