import { HomePage, RecipePage, RecipesPage } from "./pages";
import { Navbar, Footer, SecondaryList } from "./components";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" 2xl:px-64 xl:px-36 md:px-16 sm:px-10 px-5">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="recipes" element={<Outlet />}>
          <Route path="" element={<RecipesPage />}></Route>
          <Route path="categories">
            <Route
              path=""
              element={<SecondaryList title="Categories" filter="c" />}
            ></Route>
            <Route
              path=":queryWord"
              element={<RecipesPage filter="categories" />}
            ></Route>
          </Route>

          <Route path="countries">
            <Route
              path=""
              element={<SecondaryList title="Countries" filter="a" />}
            ></Route>
            <Route
              path=":queryWord"
              element={<RecipesPage filter="countries" />}
            ></Route>
          </Route>

          <Route
            path="search"
            element={<RecipesPage filter="search" />}
          ></Route>

          <Route path=":recipeId" element={<RecipePage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
