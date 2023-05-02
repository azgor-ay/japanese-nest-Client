import React, { useEffect, useState } from "react";
import img from "../../assets/chefBanner.png";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import CarouselBox from "../../components/CarouselBox";
import { FaBeer, FaRocket } from 'react-icons/fa';
const Home = () => {
  const serverData = useLoaderData();
  const [chefs, setChefs] = useState([]);

  const [feedBacks, setFeedBacks] = useState([]);
  const [fourFeedBack, setFourFeedBack] = useState([]);

  useEffect(() => {
    const fourFeedBack = feedBacks.slice(0, 4);
    setFourFeedBack(fourFeedBack);
  }, [feedBacks]);

  useEffect(() => {
    serverData.chefsData
      .then((result) => {
        const chefsData = result;
        setChefs(chefsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    serverData.feedBacks
      .then((result) => {
        const customerFeedBacks = result;
        setFeedBacks(customerFeedBacks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [showAll, setShowAll] = useState(false);
  console.log(showAll);

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
      <div className="container mx-auto">
        <h2 className="uppercase text-center text-4xl text-white font-bold py-5 mt-12">
          Out Satisfied <span className="text-green-500">Customers</span>
        </h2>

        <div className="grid grid-cols-4 gap-8 p-5">
          {showAll &&
            feedBacks &&
            feedBacks.map((feedBack) => (
              <CarouselBox
                key={feedBack.customer_id}
                feedBack={feedBack}
              ></CarouselBox>
            ))}
          {showAll ||
            (fourFeedBack &&
              fourFeedBack.map((feedBack) => (
                <CarouselBox
                  key={feedBack.customer_id}
                  feedBack={feedBack}
                ></CarouselBox>
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

      {/* Newsletter */}
      <div className="container mx-auto text-center p-12 bg-gray-600 my-6 bg-opacity-40 rounded-2xl">
        <h4 className="text-green-500">SUBSCRIBE NOW!</h4>
        <h2 className="text-3xl py-3 leading-normal font-semibold">
          Secrets to Japanese Cooking <br /> 
           Japanese cooking tips and weekly newsletter.
        </h2>
        <input className="px-4 py-2 bg-gray-300 w-2/4 text-black" placeholder="Enter Your Email Address" type="email" /> 
        <button className="bg-white text-black hover:bg-green-500
         px-8 py-2 ml-0">Subscribe <FaRocket className="inline text-green-500 hover:text-white"/></button>
      </div>
    </div>
  );
};

export default Home;
