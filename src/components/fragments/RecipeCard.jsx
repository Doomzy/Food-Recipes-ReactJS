import { Link } from "react-router-dom";

function RecipeCard({ imageSrc, title, id }) {
  return (
    <Link to={"/recipes/" + id} className="group rounded-lg shadow-md">
      <div className="max-h-[90%] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain transition duration-300 ease-in-out group-hover:transform group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h5 className=" text-smaller md:text-small font-semibold group-hover:text-secondary transition duration-300 ease-in-out">
          {title}
        </h5>
      </div>
    </Link>
  );
}

export default RecipeCard;
