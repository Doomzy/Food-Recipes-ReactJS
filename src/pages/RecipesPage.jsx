import { useParams, useLocation } from "react-router-dom";
import { alphabet } from "../constants";
import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes, fetchFilteredRecipes } from "../utils/queries";
import {
  RecipesList,
  PaginationBtn,
  LogoSpinner,
  SearchBar,
} from "../components";

function useUrlQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function buildRecipeQuery(filter, searchQ, queryWord, currentLetter) {
  switch (filter) {
    case "categories":
      return {
        queryKey: [queryWord],
        queryFn: () => fetchFilteredRecipes("c", queryWord),
      };
    case "countries":
      return {
        queryKey: [queryWord],
        queryFn: () => fetchFilteredRecipes("a", queryWord),
      };
    case "search":
      return {
        queryKey: [searchQ],
        queryFn: () => fetchRecipes("s", searchQ),
      };

    default:
      return {
        queryKey: [currentLetter],
        queryFn: () => fetchRecipes("f", currentLetter),
      };
  }
}

function RecipesPage({ filter }) {
  let { queryWord } = useParams();
  const query = useUrlQuery();
  const [currentLetter, setCurrentLetter] = useState("a");
  const [recipes, setRecipes] = useState([]);

  const queryObj = buildRecipeQuery(
    filter,
    query.get("q"),
    queryWord,
    currentLetter
  );

  const { data, error, isLoading } = useQuery({ ...queryObj });

  useEffect(() => {
    if (!error && !isLoading) {
      setRecipes(data["meals"]);
    }
  }, [data, error, isLoading]);

  if (error)
    return (
      <p className=" mt-10 text-center text-medium">Something Went wrong</p>
    );

  if (isLoading || !data) {
    return <LogoSpinner />;
  }

  return (
    <div>
      <div className=" w-full md:w-4/5 mx-auto mb-14">
        <SearchBar defaultValue={queryWord} />
      </div>
      <RecipesList
        recipesData={recipes}
        title={filter == "search" ? `"${query.get("q")}"` : queryWord}
      />

      {!filter && (
        <ul className=" flex flex-wrap gap-3 w-full md:w-3/4 mt-16 mx-auto justify-center text-smaller font-semibold">
          {alphabet.map((letter) => {
            return (
              <li key={letter}>
                <PaginationBtn
                  onClick={() => setCurrentLetter(letter)}
                  text={letter}
                  classes="w-16 text-center"
                  isSelected={currentLetter === letter}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default RecipesPage;
