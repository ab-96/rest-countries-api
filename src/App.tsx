import { useEffect, useState, createContext } from "react";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import RegionsFilter from "./Components/RegionsFilter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryInfo from "./Components/CountryInfo";
import Root from "./Components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "info", element: <CountryInfo /> }],
  },
]);

export const ThemeContext = createContext(false);

function App() {
  const [countriesData, setCountriesData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isThere, setIsThere] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [region, setRegion] = useState("https://restcountries.com/v3.1/all");

  const regions = [
    "https://restcountries.com/v3.1/all",
    "https://restcountries.com/v3.1/region/europe",
    "https://restcountries.com/v3.1/region/africa",
    "https://restcountries.com/v3.1/region/asia",
    "https://restcountries.com/v3.1/region/america",
    "https://restcountries.com/v3.1/region/oceania",
  ];

  const getRegions = (option: string) => {
    switch (option) {
      case "africa":
        setRegion(regions[2]);
        break;

      case "asia":
        setRegion(regions[3]);
        break;

      case "america":
        setRegion(regions[4]);
        break;

      case "europe":
        setRegion(regions[1]);
        break;

      case "oceania":
        setRegion(regions[5]);
        break;

      case "all regions":
        setRegion(regions[0]);
        break;
    }
  };

  useEffect(() => {
    fetch(region)
      .then((result) => {
        return result.json();
      })
      .then((data) => setCountriesData(data));
  }, [searchTerm, region]);

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
      <div
        className={`${!isDarkMode ? "bg-vDBlue" : "bg-lGrey"}  min-h-screen`}
      >
        <Header setTheme={setTheme} />
        <div
          className="flex justify-between items-center mobile:pl-4 
         mobile:items-start mobile:flex-col  mt-2 mobile:mt-2 mb-14  "
        >
          <div className="ml-20 mobile:ml-0">
            <SearchBox
              countries={countriesData}
              searchInput={handleSearchInput}
            />
          </div>
          <div className="mr-20">
            <RegionsFilter getRegions={getRegions} />
          </div>
        </div>
        <RouterProvider router={router} />
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
