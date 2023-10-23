import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      className={`${flex} ${position}  p-10 drop-shadow-lg h-24  ${
        !isDarkMode ? "bg-dBlue" : "bg-white"
      }`}
    >
      <h1
        className={`text-2xl text-center font-bold pl-10 font-nunito  ${
          !isDarkMode ? "text-white" : "text-vDBlue"
        } `}
      >
        Where in the world?
      </h1>

      <div className="flex justify-between items-center space-x-3  ">
        {!isDarkMode ? (
          <FontAwesomeIcon
            style={{ color: isDarkMode ? "black" : "white" }}
            icon={faMoon}
          />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
        <span
          className={`${
            !isDarkMode ? "text-white" : "text-vDBlue"
          }  font-nunito cursor-pointer`}
          onClick={handleModoeToggle}
        >
          {!isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
};

export default Header;
