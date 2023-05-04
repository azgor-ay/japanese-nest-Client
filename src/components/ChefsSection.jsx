import React from "react";
import Card from "./Card";

const ChefsSection = ({chefs}) => {
    const displayChefs = chefs; 
  return (
      <div>
        <h2 className="uppercase text-center text-2xl md:text-4xl text-green-500 font-bold md:py-5 mt-4 md:mt-12">
          Our Specialized <span className="text-white">Chefs</span>
        </h2>
        <div className="grid md:grid-cols-3 container mx-auto">
          {displayChefs &&
            displayChefs.map((chef) => <Card key={chef.id} chef={chef}></Card>)}
        </div>
      </div>
  );
};

export default ChefsSection;
