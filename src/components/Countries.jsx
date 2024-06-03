import { countries, custom_border_radius } from "../constants";
import { Link } from "react-router-dom";

function Countries() {
  return (
    <div className="section font-semibold">
      <div className=" text-header">
        <span className="text-secondary">Discover </span>
        <Link
          to="recipes/countries"
          className="text-primary underline-offset-4 underline decoration-2"
        >
          Countries
        </Link>
      </div>
      <div className="flex justify-around gap-2 lg:gap-0 no-scrollbar overflow-x-scroll lg:overflow-x-hidden text-smaller pt-10">
        {countries.map((country) => {
          return (
            <Link
              to={"recipes/countries/" + country}
              key={country}
              className={
                " text-center px-5 py-1 border-secondary border-[3px] hover:border-primary" +
                custom_border_radius
              }
            >
              #{country}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
