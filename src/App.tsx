import { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Country from "./Interface/Country";

function App() {
  const [countriesData, setCountriesData] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((result) => {
        return result.json();
      })
      .then((data) => setCountriesData(data));
  }, []);

  return (
    <div>
      <Header />
      <Countries countries={countriesData} />
    </div>
  );
}

export default App;
