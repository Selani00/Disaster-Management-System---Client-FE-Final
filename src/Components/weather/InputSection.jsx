import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";

const InputSection = ({setQuary, setUnits}) => {
  const [selected, setSelected] = useState("C");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== ""){
      setQuary({q: city});
    }
  };

  const handleLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        setQuary({lat: latitude, lon: longitude});
      })
    }
  }

  const handleClickFahrenheit = () => {
    setSelected("F");
    setUnits("imperial")
  }

  const handleClickCelsius = () => {
    setSelected("C");
    setUnits("metric")
  }
  return (
    <div className="w-full px-1 md:px-10 py-2 flex items-center justify-center gap-2 md:gap-5">
      {/* search section */}
      <div className="w-2/3">
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-full">
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              value={city}
              onChange={(e)=>setCity(e.currentTarget.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-200"
              placeholder="Search for City"
            />
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <div className="border p-1 md:p-2 rounded-full dark:hover:text-yellow-300 dark:hover:border-yellow-300 hover:text-[rgb(198,0,179)] hover:border-[rgb(198,0,179)] hover:scale-110 transition duration-300 ease-in-out">
              <FaSearchLocation className="w-4 h-4 " onClick={handleSearch}/>
            </div>

            <div className="border p-1 md:p-2 rounded-full dark:hover:text-yellow-300 dark:hover:border-yellow-300 hover:text-[rgb(198,0,179)] hover:border-[rgb(198,0,179)] hover:scale-110 transition duration-300 ease-in-out">
              <TbCurrentLocation className="w-4 h-4 " onClick={handleLocation} />
            </div>
          </div>
        </div>
      </div>

      {/* Units section */}
      <div className="flex items-center justify-center gap-1">
        <button
          className={`text-base md:text-2xl font-medium ${
            selected === "F" ? "underline" : ""
          }`}
          onClick={handleClickFahrenheit}
        >
          °F
        </button>
        <p className="text-base md:text-2xl font-medium mx-1">|</p>
        <button
          className={`text-base md:text-2xl font-medium ${
            selected === "C" ? "underline" : ""
          }`}
          onClick={handleClickCelsius}
        >
          °C
        </button>
      </div>
    </div>
  );
};

export default InputSection;
