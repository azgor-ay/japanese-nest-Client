import React, { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";

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
        <div className="grid grid-cols-4">
          {
            recipes.map(recipe=> <SingleRecipe
            key={recipe.id}
            recipe={recipe}
            ></SingleRecipe>)
          }
        </div>
      )}
    </div>
  );
};

export default Recipes;
