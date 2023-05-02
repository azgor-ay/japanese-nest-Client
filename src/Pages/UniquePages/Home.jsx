import React, { useState } from "react";
import img from "../../assets/chefBanner.png";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import CarouselBox from "../../components/CarouselBox";
const Home = () => {
  const serverData = useLoaderData();
  const [chefs, setChefs] = useState([]);
  const [feedBacks, setFeedBacks] = useState([]);

  serverData.chefsData
    .then((result) => {
      const chefsData = result;
      setChefs(chefsData);
    })
    .catch((error) => {
      console.log(error);
    });

  serverData.feedBacks
    .then((result) => {
      const customerFeedBacks = result;
      setFeedBacks(customerFeedBacks);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      {/* The Homepage Banner  */}
      <div className="banner">
        <div className="text-white grid grid-cols-2 bg-black bg-opacity-70">
          <div className=" px-12 pt-16">
            <h1 className="text-2xl leading-relaxed uppercase px-6 text-center font-bold mb-3">
              Why to choose japanese food recipes from us?
            </h1>
            <div className="px-5 text-gray-200 text-xs drop">
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
              <p className="py-1 drop-shadow">
                In addition to providing recipes, Japanese Nest may also offer
                educational resources on the health benefits of Japanese
                cuisine, including its emphasis on whole foods, balanced
                portions, and mindful eating habits. This can help people
                understand the rationale behind the recipes and motivate them to
                adopt healthier habits in their daily lives.
              </p>
              <p className="py-1 drop-shadow">
                By providing high-quality, healthy Japanese food recipes,
                Japanese Nest aims to empower people to take control of their
                health and wellbeing, one meal at a time.
              </p>{" "}
            </div>
          </div>
          <div className="mx-auto pt-5 opacity-90 drop-shadow-2xl">
            <img className="w-72" src={img} alt="" />
          </div>
        </div>
      </div>
      {/* Our Specialized Chefs */}
      <div>
        <h2 className="uppercase text-center text-4xl text-green-500 font-bold py-5 mt-12">
          Our Specialized <span className="text-white">Chefs</span>
        </h2>
        <div className="grid grid-cols-3 container mx-auto">
          {chefs &&
            chefs.map((chef) => <Card key={chef.id} chef={chef}></Card>)}
        </div>
      </div>
      {/* Satisfied Customers */}
      <h2>
        Out Satisfied <span>Customers</span>
      </h2>

      <div className="grid grid-cols-4">
        {feedBacks &&
          feedBacks.map((feedBack) => (
            <CarouselBox
              key={feedBack.customer_id}
              feedBack={feedBack}
            ></CarouselBox>
          ))}
      </div>
    </div>
  );
};

export default Home;
