import { useEffect, useState, useContext, createContext } from "react";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import RegionsFilter from "./Components/RegionsFilter";

export const ThemeContext = createContext(false);

function App() {
  const [countriesData, setCountriesData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isThere, setIsThere] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const setTheme = (mode: any) => {
    setIsDarkMode(!mode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className={!isDarkMode ? "bg-vDBlue" : "bg-lGrey"}>
        <Header setTheme={setTheme} />
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
    </ThemeContext.Provider>
  );
}
export default App;
