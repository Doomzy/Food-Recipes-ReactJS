import hero from "../assets/images/hero.png";
import { SearchBar } from "./";

function Hero() {
  return (
    <div className="flex flex-row-reverse justify-center gap-40">
      <img className=" hidden xl:block" src={hero} alt="Hero" />

      <div className=" pt-12">
        <div className=" text-4xl md:text-hero font-extrabold leading-tight">
          <span className=" text-primary">Cooking </span>
          <span>Made </span>
          <span className=" text-secondary">
            Easy: <br /> Explore{" "}
          </span>
          <span className=" text-primary">
            Random <br /> Recipes
          </span>
          <span> Daily.</span>
        </div>
        <div className=" max-w-xl text-smaller md:text-small pt-8 font-['Roboto']">
          <p>
            Discover easy cooking and fun surprises! Explore different recipes
            every day, making your kitchen a place of endless flavors.
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
