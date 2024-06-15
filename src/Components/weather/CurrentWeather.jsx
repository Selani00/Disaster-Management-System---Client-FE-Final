import React from "react";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";

const CurrentWeather = ({
  weather: {
    formattedLocalTime,
    country,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    details,
    humidity,
    speed,
    sunrise,
    sunset,
    name,
    icon,
  },
  units,
}) => {
  return (
    <div className="w-full">
      <div className="py-5 md:py-3 border border-black dark:border-white rounded-lg ">
        <div className="flex-row md:flex items-center justify-between gap-5 px-5 md:px-10 w-full">
          <div className="md:order-2 flex flex-col items-center pb-2">
            <img src={icon} className="w-40 h-40 object-cover" />
            <p className="text-3xl font-bold text-center">{details}</p>
          </div>

          <div className="text-center md:order-1 md:mt-10">
            <p className="text-xl font-semibold ">
              {name}, {country}
            </p>
            <p className="text-base text-center font-base">
              {formattedLocalTime}
            </p>
          </div>

          <div className="mt-5 md:mt-10 md:text-start text-center">
            <p className="text-4xl font-bold">{temp}°</p>
            <div className=" gap-3 text-sm mt-3">
              <p className="">min: {temp_min}° </p>

              <p className="">max: {temp_max}° </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-5 md:gap-10 text-center text-base font-semibold ">
          <div className="flex items-center justify-center gap-1">
            <div>
              <GiSunrise className="w-6 h-6" />
              <p>sunrise</p>
            </div>
            <p>{sunrise}</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="flex-row">
              <GiSunset className="w-6 h-6" />
              <p>sunset</p>
            </div>
            <p>{sunset}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 shadow-2xl rounded-lg bg-blue-100 border-gray-300  dark:bg-gray-800 dark:border-gray-600 pt-5 pb-2 px-2 md:px-20">
        <div className="flex items-start justify-between ">
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 ">
                <FaWind className="w-6 h-6" />
                <p className="text-sx">Wind</p>
              </div>
              <p className="text-center font-bold text-lg">{speed} km/h</p>
            </div>
            <div className="my-5">
              <div className="flex items-center justify-center gap-2 ">
                <WiHumidity className="w-7 h-7" />
                <p className="text-sx">Humidity</p>
              </div>
              <p className="text-center font-bold text-lg">
                {humidity.toFixed()} %
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center gap-2 ">
                <IoSpeedometerSharp className="w-6 h-6" />
                <p className="text-sx">Pressure</p>
              </div>
              <p className="text-center font-bold text-lg">{pressure} mb</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-center gap-2 ">
                <BiSolidSun className="w-6 h-6" />
                <p className="text-sx">Feels Like</p>
              </div>
              <p className="text-center font-bold text-lg">
                {feels_like.toFixed()}°{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
