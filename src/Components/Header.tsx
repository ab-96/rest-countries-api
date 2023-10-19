import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);




  const handleModoeToggle = (): void => {
    console.log("Hey")
    setIsDarkMode(!isDarkMode)
  }


  return (
    <header className={`${flex} p-3 drop-shadow-lg h-20  ${!isDarkMode ? 'bg-dBlue': 'bg-white'  }`    }>
      <h1 className={`text-base text-center font-bold   ${!isDarkMode ? 'text-white': 'text-vDBlue'  } `}>
        Where in the world?
      </h1>

      <div className="flex justify-between items-center space-x-3  ">
        <FontAwesomeIcon  style={{ color: isDarkMode ? 'black' : 'white' }} icon={faMoon}  />
        <span className={`${!isDarkMode ? 'text-white': 'text-vDBlue'  }  cursor-pointer`} onClick={handleModoeToggle}>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
const flex = "flex justify-between items-center";
