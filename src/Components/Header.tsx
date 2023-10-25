import { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const flex = "flex justify-between items-center";
const position = "fixed top-0 left-0 right-0 z-50";
const Header = (props: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModoeToggle = (): void => {
    setIsDarkMode(!isDarkMode);
    props.setTheme(isDarkMode);
  };

  return (
    <header
      className={`${flex} ${position}  drop-shadow-lg h-24  p-4   ${
        !isDarkMode ? "bg-dBlue" : "bg-white"
      }`}
    >
      <h1
        className={`text-2xl text-center font-bold font-nunito ml-16 mobile:ml-0 mobile:text-lg 
        ${!isDarkMode ? "text-white" : "text-vDBlue"} `}
      >
        Where in the world?
      </h1>

      <div
        className="flex justify-between space-x-2 cursor-pointer mr-6 mobile:mr-0"
        onClick={handleModoeToggle}
      >
        {!isDarkMode ? (
          <MoonIcon
            className="h-6 w-4"
            style={{ color: isDarkMode ? "black" : "white" }}
          />
        ) : (
          <SunIcon className="h-6 w-4 " />
        )}

        <span
          className={`{ ${
            !isDarkMode ? "text-white" : "text-vDBlue"
          }  font-nunito cursor-pointer} `}
          onClick={handleModoeToggle}
        >
          {!isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
};

export default Header;
