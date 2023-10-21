const Country = (props: any) => {
  return (
    <div className="w-72 h-96 r bg-dBlue rounded-lg">
      <div className="rounded-lg">
        <div className="w-full h-48">
          <img
            src={props.imageUrl}
            alt="country flags"
            className="w-full h-full rounded-t-lg"
          />
        </div>
        <div className="flex justify-center flex-col p-5 ">
          <h1 className="text-xl font-bold  font-nunito  text-white mb-3.5">
            {props.title}
          </h1>
          <p className="font-nunito  text-white">
            <span className="font-semibold">Population:</span>{" "}
            {props.population}
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
    </div>
  );
};

export default Country;
