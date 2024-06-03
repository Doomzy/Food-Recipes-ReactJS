import { RecipeCard, LogoSpinner } from "./";
import { Link } from "react-router-dom";
import { categories_list } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredRecipes } from "../utils/queries";
import { useState, useEffect } from "react";

function CategoryRecipes() {
  const randomCategory =
    categories_list[Math.floor(Math.random() * categories_list.length)].name;
  const [catRecipes, setCatRecipes] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["category", randomCategory],
    queryFn: () => fetchFilteredRecipes("c", randomCategory),
  });

  useEffect(() => {
    if (!error && !isLoading) {
      setCatRecipes(data["meals"]);
    }
  }, [data, error, isLoading]);

  if (error)
    return (
      <p className=" mt-10 text-center text-medium">Something Went wrong</p>
    );

  if (isLoading) return <LogoSpinner />;

  return (
    <div className="section">
      <div className=" text-header font-semibold">
        <span className="text-secondary">Taste </span>
        <span>The </span>
        <Link
          to={"recipes/categories/" + randomCategory}
          className="text-primary underline-offset-4 underline decoration-2"
        >
          {randomCategory}
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 gap-5">
        {catRecipes.slice(0, 4).map((item) => {
          return (
            <RecipeCard
              key={item.idMeal}
              id={item.idMeal}
              title={item.strMeal}
              imageSrc={item.strMealThumb}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryRecipes;
