import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props: any) => {
  const getSearchInput = (event: any) => {
    props.searchInput(event.target.value);
  };

  return (
    <section className="">
      <div className="w-80 rounded-lg flex items-center justify-center bg-dBlue">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" ml-4 text-dGrey"
        />
        <input
          type="text"
          placeholder="Search for a country"
          className="w-full p-4 rounded-lg outline-none text-white bg-dBlue"
          onChange={getSearchInput}
        />
      </div>
    </section>
  );
};

export default SearchBox;
