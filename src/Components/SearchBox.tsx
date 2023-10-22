import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../App";

const SearchBox = (props: any) => {
  const theme = useContext(ThemeContext);
  const dark = !theme ? "bg-dBlue text-white" : "bg-white text-vDBlue";

  const getSearchInput = (event: any) => {
    props.searchInput(event.target.value);
  };

  return (
    <section className="drop-shadow-md">
      <div
        className={`w-80 rounded-lg flex items-center justify-center ${dark}`}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" ml-4 text-dGrey"
        />
        <input
          type="text"
          placeholder="Search for a country"
          className={`w-full p-4 rounded-lg outline-none ${dark}`}
          onChange={getSearchInput}
        />
      </div>
    </section>
  );
};

export default SearchBox;
