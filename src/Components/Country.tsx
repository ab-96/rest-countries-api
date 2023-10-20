const Country = (props: any) => {
  return (
    <div className="w-80 h-96 rounded-lg bg-dBlue">
      <img src={props.imageUrl} alt="country flags"  />
      <div className="flex justify-center flex-col p-5 ">
        <h1 className="text-xl font-bold  font-nunito  text-white mb-3.5">
          {props.title}
        </h1>
        <p className="font-nunito  text-white">
          <span className="font-semibold">Population:</span> {props.population}
        </p>
        <p className="font-nunito  text-white">
          {" "}
          <span className="font-semibold">Region:</span> {props.region}
        </p>
        <p className="font-nunito  text-white">
          {" "}
          <span className="font-semibold">Capital:</span> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
