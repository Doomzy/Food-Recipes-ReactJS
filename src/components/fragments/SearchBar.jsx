import { Button } from "../";
import { custom_border_radius } from "../../constants";
import { useState } from "react";

function SearchBar({ defaultValue = "" }) {
  const [searchQuery, setSearchQuery] = useState(defaultValue);

  function onSearchInput(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className={"searchBar" + custom_border_radius}>
      <input
        className="p-8 w-full text-smaller"
        type="text"
        name="SearchInput"
        id="SearchInput"
        value={searchQuery}
        onChange={onSearchInput}
        placeholder="Search for a Recipe..."
      />
      <Button
        to={
          searchQuery.trim() != ""
            ? "/recipes/search?q=" + searchQuery
            : "/recipes"
        }
        type="submit"
        text="Search"
        classes="m-[-5px] py-5"
      />
    </div>
  );
}

export default SearchBar;
