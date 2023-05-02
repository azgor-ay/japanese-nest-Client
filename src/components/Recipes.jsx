import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://japanesenest-server-yeasin86.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);

  return (
    <div>
      <h1>foods</h1>
      {recipes && (
        <div>
          <h1>recipe</h1>
        </div>
      )}
    </div>
  );
};

export default Recipes;
