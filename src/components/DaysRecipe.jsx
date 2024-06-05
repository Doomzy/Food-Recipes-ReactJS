import { Link } from "react-router-dom";
import { Button, LogoSpinner } from "./";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomRecipe } from "../utils/queries";

function getStoredRecipe() {
  const recipe = JSON.parse(localStorage.getItem("Day's_Recipe"));

  if (recipe) {
    const todaysDate = new Date().toDateString();
    if (recipe.timestamp < todaysDate) return null;
    return recipe;
  }
  return null;
}

function DaysRecipe() {
  let storedRecipe = getStoredRecipe();

  const { error, isLoading } = useQuery({
    queryKey: ["Day's_Recipe", storedRecipe],
    queryFn: () =>
      fetchRandomRecipe().then((res) => {
        storedRecipe = res["meals"][0];
        localStorage.setItem(
          "Day's_Recipe",
          JSON.stringify({
            ...storedRecipe,
            timestamp: new Date().toDateString(),
          })
        );
      }),
    enabled: !storedRecipe,
  });

  if (error)
    return (
      <p className=" mt-10 text-center text-medium">Something Went wrong</p>
    );

  if (isLoading) return <LogoSpinner />;

  return (
    <div className="section">
      <div className=" block lg:flex gap-10">
        <img
          src={storedRecipe.strMealThumb}
          className=" w-full h-[22rem] lg:h-full lg:w-2/6 mb-10"
        />
        <div className=" content-center">
          <Link
            to={"recipes/" + storedRecipe.idMeal}
            className=" text-primary text-4xl md:text-header font-semibold hover:underline"
          >
            {storedRecipe.strMeal}
          </Link>
          <p className=" text-lg lg:text-small leading-8 text-justify mt-5">
            {storedRecipe.strInstructions.substring(0, 480) + ". . ."}
          </p>
          <div className="grid grid-cols-2 gap-8 text-smaller md:text-small font-semibold mt-6 md:mt-10">
            <p className=" text-secondary">
              Category:{" "}
              <Link
                to={"recipes/categories/" + storedRecipe.strCategory}
                className="text-primary hover:underline"
              >
                {storedRecipe.strCategory}
              </Link>
            </p>
            <p className=" text-secondary">
              Origin:{" "}
              <Link
                to={"recipes/countries/" + storedRecipe.strArea}
                className="text-primary hover:underline"
              >
                {storedRecipe.strArea}
              </Link>
            </p>
          </div>
          <div className=" flex justify-end mt-8 md:mt-14">
            <Button
              to={"recipes/" + storedRecipe.idMeal}
              text="Full Recipe"
              classes="py-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysRecipe;
