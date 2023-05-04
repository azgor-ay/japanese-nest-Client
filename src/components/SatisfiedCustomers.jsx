import React, { useState } from "react";
import CustomerCard from "./CustomerCard";

const SatisfiedCustomers = ({ feedBacks, fourFeedBack }) => {
  const [showAll, setShowAll] = useState(false);
  const customersFeedBacks = feedBacks;
  const onlyFourFeedBack = fourFeedBack;

  return (
      <div className="container mx-auto">
        <h2 className="uppercase text-center text-3xl leading-normal md:text-4xl text-white font-bold py-5 mt-12">
          Out Satisfied <span className="text-green-500">Customers</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 p-5">
          {showAll &&
            customersFeedBacks &&
            customersFeedBacks.map((feedBack) => (
              <CustomerCard
                key={feedBack.customer_id}
                feedBack={feedBack}
              ></CustomerCard>
            ))}
          {showAll ||
            (onlyFourFeedBack &&
              onlyFourFeedBack.map((feedBack) => (
                <CustomerCard
                  key={feedBack.customer_id}
                  feedBack={feedBack}
                ></CustomerCard>
              )))}
        </div>
        {showAll || (
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-primary w-full"
          >
            Show All Customers
          </button>
        )}
      </div>
  );
};

export default SatisfiedCustomers;
