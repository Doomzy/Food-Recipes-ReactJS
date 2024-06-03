import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeDetails, fetchRandomRecipe } from "../utils/queries";
import { LogoSpinner, RecipeInfoList } from "../components";
import { Link } from "react-router-dom";

function cleanRecipe(recipeData) {
  const instructions = recipeData.strInstructions.split(".").filter((inst) => {
    inst = inst.trim();
    return inst.length > 2 && inst;
  });

  let ingredients = [];
  for (var i = 1; i < 21; i++) {
    if (
      recipeData[`strIngredient${i}`] == "" ||
      recipeData[`strIngredient${i}`] == null
    ) {
      break;
    }
    ingredients.push({
      name: recipeData[`strIngredient${i}`],
      measure: recipeData[`strMeasure${i}`],
    });
  }

  return { recipeData, instructions, ingredients };
}

function RecipePage() {
  const { recipeId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["recipeData", recipeId],
    queryFn: () =>
      recipeId == "random" ? fetchRandomRecipe() : fetchRecipeDetails(recipeId),
  });

  if (error)
    return (
      <p className=" mt-10 text-center text-medium">Something Went wrong</p>
    );

  if (isLoading) return <LogoSpinner />;

  const { recipeData, instructions, ingredients } = cleanRecipe(
    data["meals"][0]
  );

  return (
    <div>
      <div>
        <p className="text-secondary text-xl md:text-smaller">Name</p>
        <p className=" md:before:ms-2 text-header md:text-hero font-semibold text-primary">
          {recipeData.strMeal}
        </p>
      </div>

      <div className="flex pt-5 divide-x divide-gray-400">
        <div className=" px-5">
          <p className="text-secondary text-xl md:text-smaller">Category</p>
          <Link
            to={"/recipes/categories/" + recipeData.strCategory}
            className=" text-primary hover:underline font-semibold text-smaller md:text-small"
          >
            {recipeData.strCategory}
          </Link>
        </div>
        <div className=" px-5">
          <p className="text-secondary text-xl md:text-smaller">Origin</p>
          <Link
            to={"/recipes/countries/" + recipeData.strArea}
            className=" text-primary hover:underline font-semibold text-smaller md:text-small"
          >
            {recipeData.strArea}
          </Link>
        </div>
        <div className=" px-5">
          <p className="text-secondary text-xl md:text-smaller">Tags</p>
          <p className=" font-semibold text-smaller md:text-small">
            {recipeData.strTags}
          </p>
        </div>
      </div>

      <img
        src={recipeData.strMealThumb}
        className=" w-full h-[40rem] my-8 rounded-xl"
      />

      <div className="grid grid-flow-dense lg:grid-flow-col gap-4">
        <RecipeInfoList
          title={"Ingredients"}
          containerClasses={" col-span-5 md:col-span-1"}
        >
          {ingredients.map((ing, i) => {
            return (
              <li key={ing.name} className="mt-5 text-small">
                <span className="numbers">{i + 1}</span>
                <span className="">{ing.name} </span>
                <span className=" text-secondary">{ing.measure} </span>
              </li>
            );
          })}
        </RecipeInfoList>
        <RecipeInfoList
          title={"Instructions"}
          containerClasses={"col-span-5 md:col-span-4"}
        >
          {instructions.map((inst, i) => {
            return (
              <li key={i} className="mt-5 text-small">
                <span className="numbers ">{i + 1}</span>
                <span>{inst}</span>
              </li>
            );
          })}
        </RecipeInfoList>
      </div>
    </div>
  );
}

export default RecipePage;
