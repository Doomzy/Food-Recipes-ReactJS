import { Link } from "react-router-dom";
import { categories_list } from "../constants";

function Categories() {
  return (
    <div className="section">
      <div className=" text-header font-semibold">
        <span className="text-secondary">Popular </span>
        <Link
          to="recipes/categories"
          className="text-primary underline-offset-4 underline decoration-2"
        >
          Categories
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-14 gap-14">
        {categories_list.map((cat) => {
          return (
            <Link
              key={cat.name}
              to={"recipes/categories/" + cat.name}
              className=" text-secondary text-center hover:text-primary"
            >
              <img className=" rounded-full mb-5 w-auto" src={cat.img} alt="" />
              <span className=" text-smaller font-bold">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
