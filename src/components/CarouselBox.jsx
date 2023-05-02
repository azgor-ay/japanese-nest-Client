import React from "react";

const CarouselBox = ({ feedBack }) => {
  const { photo, name, feedback } = feedBack;
  console.log(feedBack);
  return (
    <div className="w-96">
      <img className="" src={photo} alt="customers" />
      <p>{name}</p>
      <p>{feedback}</p>
    </div>
  );
};

export default CarouselBox;
