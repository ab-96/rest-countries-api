import { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import RegionsFilter from "./Components/RegionsFilter";

function App() {
  const [countriesData, setCountriesData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isThere, setIsThere] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((result) => {
        return result.json();
      })
      .then((data) => setCountriesData(data));
  }, [searchTerm]);

  const handleSearchInput = (input: string) => {
    setSearchTerm(input);
    const hasMatches = countriesData.some((country: any) =>
      country.name.common.toLowerCase().includes(input.toLowerCase())
    );
    setIsThere(hasMatches);
  };

  return (
    <div className=" bg-vDBlue">
      <Header />
      <div className="flex justify-between  max-w-7xl mx-auto  mt-8 mb-14">
        <div className="">
          <SearchBox
            countries={countriesData}
            searchInput={handleSearchInput}
          />
        </div>
        <div className="">
          <RegionsFilter />
        </div>
      </div>
      <Countries
        countries={countriesData}
        searchInput={searchTerm}
        isThere={isThere}
      />
    </div>
  );
}
export default App;
