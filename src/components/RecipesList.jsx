import { RecipeCard } from "./";

function RecipesList({ recipesData, title = "All" }) {
  return (
    <>
      <p className=" text-header md:text-hero font-semibold">
        <span className="text-secondary">List</span>
        <span> Of</span>
        <span className="text-primary"> {title}</span>
        <span className="text-secondary"> Recipes</span>
      </p>
      {recipesData == null ? (
        <p className=" mt-10 text-center text-medium">No Recipes Found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-10">
          {recipesData.map((item) => {
            return (
              <RecipeCard
                id={item.idMeal}
                key={item.idMeal}
                title={item.strMeal}
                imageSrc={item.strMealThumb}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default RecipesList;
