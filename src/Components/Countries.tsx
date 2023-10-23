import { useContext } from "react";
import { ThemeContext } from "../App";
import Country from "./Country";

const Countries = (props: any) => {
  const filteredCountries = props.countries.filter((country: any) =>
    country.name.common.toLowerCase().includes(props.searchInput)
  );

  const theme = useContext(ThemeContext);

  const dark = !theme ? "text-white" : "text-vDBlue";

  const country = filteredCountries.map((country: any, index: number) => (
    <Country
      key={country + index}
      title={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
      imageUrl={country.flags.png}
    />
  ));

  return (
    <section className="max-w-7xl mx-auto pb-10 ">
      <div className=" flex flex-wrap gap-10 min-h-screen ">
        {props.isThere ? (
          country
        ) : (
          <p className={`font-nunito ${dark}`}>
            No were countries matched, try again.
          </p>
        )}{" "}
      </div>
    </section>
  );
};

export default Countries;



/// click europe button - > re-render list to display only europe
/// can filter out only europe or 