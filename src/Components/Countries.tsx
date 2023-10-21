import Country from "./Country";

const Countries = (props: any) => {
  const filteredCountries = props.countries.filter((country: any) =>
    country.name.common.toLowerCase().includes(props.searchInput)
  );

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
    <section className="max-w-7xl mx-auto">
      <div className=" flex flex-wrap gap-10 min-h-screen ">
        {props.isThere ? (
          country
        ) : (
          <p className="font-nunito text-white">No were countries matched, try again.</p>
        )}{" "}
      </div>
    </section>
  );
};

export default Countries;
