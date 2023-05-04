import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefsSection from "../../components/ChefsSection";
import SatisfiedCustomers from "../../components/SatisfiedCustomers";
import NewsLetter from "../../components/NewsLetter";
import WelcomeBanner from "../../components/WelcomeBanner";
import OurMission from "../../components/OurMission";

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

  return (
    <div>
      {/* The Homepage Banner  */}
      <WelcomeBanner></WelcomeBanner>

      {/* Our Specialized Chefs */}
      <ChefsSection chefs={chefs}></ChefsSection>

      {/* Our Mission Section */}
      <OurMission></OurMission>

      {/* Satisfied Customers */}
      <SatisfiedCustomers
        feedBacks={feedBacks}
        fourFeedBack={fourFeedBack}
      ></SatisfiedCustomers>

      {/* Newsletter */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
