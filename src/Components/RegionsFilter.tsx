import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../App";

const RegionsFilter = (props: any) => {
  const theme = useContext(ThemeContext);
  const dark = !theme ? "bg-dBlue text-white" : "bg-white text-vDBlue";

  const [curretRegion, setCurrentRegion] = useState<string>("Filter by Region");

  const handleRegionSelection = (event: any) => {
    const selection = event.target.innerHTML.toLowerCase();
    props.getRegions(selection);

    interface RegionLookup {
      [key: string]: string;
    }
    const regionLookup: RegionLookup = {
      africa: "Africa",
      asia: "Asia",
      america: "America",
      europe: "Europe",
      oceania: "Oceania",
      "all regions": "All Regions",
    };
    setCurrentRegion(regionLookup[selection]);
  };

  return (
    <section className="max-w-7xl mx-auto mt-32">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={` ${dark}   font-nunito drop-shadow-md inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-inset ring-gray-300 hover:bg-gray-50`}
          >
            {curretRegion}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={` ${dark}  font-nunito absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg drop-shadow-md  ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="py-1">
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  All Regions
                </div>
              </Menu.Item>
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  Africa
                </div>
              </Menu.Item>
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  Asia
                </div>
              </Menu.Item>
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  America
                </div>
              </Menu.Item>
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  Europe
                </div>
              </Menu.Item>
              <Menu.Item as="div">
                <div
                  className="block px-4 py-2 text-sm cursor-pointer "
                  onClick={handleRegionSelection}
                >
                  Oceania
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>
  );
};

export default RegionsFilter;
