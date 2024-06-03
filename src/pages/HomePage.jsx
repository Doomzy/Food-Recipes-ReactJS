import {
  Hero,
  Categories,
  DaysRecipe,
  CategoryRecipes,
  Countries,
} from "../components";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <DaysRecipe />
      <CategoryRecipes />
      <Countries />
    </>
  );
}

export default HomePage;
