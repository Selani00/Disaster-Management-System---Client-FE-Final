import React from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";


const DailyForecast = ({ data }) => {
  return (
    <div className="shadow-2xl rounded-lg bg-blue-100 border-gray-300  dark:bg-gray-800 dark:border-gray-600 ">
      <div className="p-5">
        <h1 className="text-start font-bold text-xl">Daily Forcast</h1>
        <div className="mt-4 p-1">
          {data.map((item, index) => (
            <div key={index}>
              <div className=" p-3  min-w-max">
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="font-semibold">{item.title}</p>
                  <img src={item.icon} alt="icon" className="w-12 h-12" />
                  <p className="font-bold text-xl">{item.temp}°</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-2 text-xs mt-4 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <FaWind className="w-4 h-4" />
                    <p className="font-semibold">{item.wind} km/h</p>
                  </div>

                  <p className="font-semibold text-center uppercase">{item.details}</p>

                  <div className="flex items-center justify-center gap-2">
                    <WiHumidity className="w-4 h-4" />
                    <p className="font-semibold">{item.humidity} %</p>
                  </div>
                </div>
              </div>
              <hr className="border-t-2 border-gray-500 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
