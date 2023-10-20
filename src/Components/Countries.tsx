import Country from "./Country";

const Countries = (props: any) => {
  return (
    <div className="bg-vDBlue h-screen flex flex-wrap gap-10 min-h-screen p-4">
      {props.countries.map((country: any) => (
        <Country
          title={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          imageUrl={country.flags.png}
        />
      ))}
    </div>
  );
};

export default Countries;


