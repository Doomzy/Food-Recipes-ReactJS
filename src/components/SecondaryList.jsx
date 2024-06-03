import { custom_border_radius } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchListOfObjects } from "../utils/queries";
import { LogoSpinner } from "./";

function SecondaryList({ title, filter }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["items", title],
    queryFn: () => fetchListOfObjects(filter),
  });

  if (error)
    return (
      <p className=" mt-10 text-center text-medium">Something Went wrong</p>
    );

  if (isLoading) return <LogoSpinner />;

  return (
    <div className=" font-semibold">
      <p className=" text-header md:text-hero">
        <span className="text-secondary">Discover</span>
        <span> Our</span>
        <span className="text-primary"> {title}</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 text-smaller mt-16">
        {data["meals"].map((item) => {
          const cleanedItem = Object.values(item)[0];
          return (
            <Link
              to={cleanedItem}
              key={cleanedItem}
              className={
                " text-center px-5 py-1 border-secondary border-[3px] hover:border-primary" +
                custom_border_radius
              }
            >
              #{cleanedItem}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SecondaryList;
