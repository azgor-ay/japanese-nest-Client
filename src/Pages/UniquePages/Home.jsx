import React from "react";
import img from "../../assets/onBannersRight.gif"
const Home = () => {
  return (
    <div>
        {/* The Homepage Banner  */}
    <div className="banner">
      <div className="text-white grid grid-cols-2 bg-black bg-opacity-70">
        <div className=" px-12 py-16">
          <h1 className="text-2xl leading-relaxed uppercase px-6 text-center font-bold mb-3">
            Why to choose japanese food recipes from us?
          </h1>
          <div className="px-5 text-gray-200 text-xs">
            <p>
              "Japanese Nest" is a brand that offers healthy Japanese food
              recipes to help people keep themselves fit and active. The recipes
              provided by Japanese Nest are designed to be both nutritious and
              delicious, making it easier for people to adopt a healthy
              lifestyle.
            </p>
            <p>
              The Japanese cuisine is known for its use of fresh ingredients and
              simple preparation methods, making it a great choice for those who
              want to eat healthily without sacrificing taste. Japanese Nest
              takes advantage of these characteristics by providing recipes that
              feature a wide variety of vegetables, fruits, seafood, and lean
              proteins.
            </p>
            <p>
              In addition to providing recipes, Japanese Nest may also offer
              educational resources on the health benefits of Japanese cuisine,
              including its emphasis on whole foods, balanced portions, and
              mindful eating habits. This can help people understand the
              rationale behind the recipes and motivate them to adopt healthier
              habits in their daily lives.
            </p>
            <p>
              By providing high-quality, healthy Japanese food recipes, Japanese
              Nest aims to empower people to take control of their health and
              wellbeing, one meal at a time.
            </p>{" "}
          </div>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
      </div>
    </div>

    {/* Our Specialized Chefs */}
    <div>
        <h2>Our Specialized Chefs</h2>
        
    </div>
    </div>
  );
};

export default Home;
