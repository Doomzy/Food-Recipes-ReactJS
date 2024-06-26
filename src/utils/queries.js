const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const fetchRecipes = async (type, queryWord) => {
  const response = await fetch(
    `${API_BASE_URL}/search.php?${type}=${queryWord}`,
    {
      method: "GET",
    }
  );
  return response.json();
};

const fetchFilteredRecipes = async (type, queryWord) => {
  const response = await fetch(
    `${API_BASE_URL}/filter.php?${type}=${queryWord}`,
    {
      method: "GET",
    }
  );
  return response.json();
};

const fetchListOfObjects = async (type) => {
  const response = await fetch(`${API_BASE_URL}/list.php?${type}=list`, {
    method: "GET",
  });
  return response.json();
};

const fetchRecipeDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`, {
    method: "GET",
  });
  return response.json();
};

const fetchRandomRecipe = async () => {
  const response = await fetch(`${API_BASE_URL}/random.php`, {
    method: "GET",
  });
  return response.json();
};

export {
  fetchRecipes,
  fetchFilteredRecipes,
  fetchListOfObjects,
  fetchRecipeDetails,
  fetchRandomRecipe,
};
