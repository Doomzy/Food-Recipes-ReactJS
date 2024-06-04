import Logo from "../assets/icons/Logo.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" block md:flex justify-between pt-24 pb-12 md:pb-16">
      <Logo globalClasses=" place-content-center md:place-content-start mb-8 md:mb-0" />
      <hr className="block md:hidden mx-auto w-3/4 border-primary mb-8 opacity-45" />
      <div className="flex gap-16 md:gap-8 text-smaller font-semibold items-center place-content-center md:place-content-start">
        <Link to="recipes/categories" className=" hover:scale-105 ease-in">
          Categories
        </Link>
        <Link
          reloadDocument={true}
          to="recipes/random"
          className="hover:scale-105 ease-in text-primary"
        >
          Random Recipe
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
