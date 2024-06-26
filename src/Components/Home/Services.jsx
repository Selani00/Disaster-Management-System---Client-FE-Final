import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "../../services/weatherServices";
import { FaArrowRightLong } from "react-icons/fa6";
import Weather from "../../assets/HomePage/Services_Images/Weather.png";
import News from "../../assets/HomePage/Services_Images/News.png";
import MapImage from "../../assets/HomePage/Services_Images/Map.png";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import axios from "axios";

const Services = () => {
  const [quary, setQuary] = useState(null);
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [selectedItem, setSelectedItem] = useState(null);

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuary({ lat: latitude, lon: longitude });
      });
    }
  };

  const getNews = async () => {
    const response = await axios.post("http://localhost:8000/api/news/getNews");
    const filteredNews = response.data.filter((newsItem) => newsItem.show);
    if (filteredNews.length > 0) {
      setSelectedItem(filteredNews[filteredNews.length - 1]);
    }
  };
  useEffect(() => {
    getCurrentLocation();
    getNews();
  }, []);

  useEffect(() => {
    if (quary) {
      const fetchWeather = async () => {
        await getFormattedWeatherData({ ...quary, units }).then((data) => {
          setWeather(data);
        });
      };
      fetchWeather();
    }
  }, [quary]);


  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="my-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-5xl text-primary font-bold mb-3">Our Services</h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {/* Weather */}
        <div className="mx-auto relative mb-12 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <img
              src={Weather}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />

            <div className="absolute top-6 md:top-10 mx-auto">
              <div className="bg-black opacity-70  py-5 text-center px-10">
                <img
                  src={weather?.icon}
                  alt=""
                  className="md:w-20 w-10 h-10md:h-20"
                />
                <p className="text-white font-bold text-base md:text-xl">
                  {weather?.details}
                </p>
                <p className="mt-2 text-white font-bold text-base md:text-xl">
                  {weather?.temp}°
                </p>
              </div>
            </div>
          </div>

          <div className="text-center  px-4 py-2 md:py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0  -bottom-12 ">
            <h3 className="mb-3 text-black text-lg font-semibold">
              Weather Forcast
            </h3>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/Weather"
                className="font-bold text-primary hover:text-neutral-700"
              >
                More
              </a>
              <div className="text-primary">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>

        {/* News */}
        <div className="mx-auto relative mb-12 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <img
              src={selectedItem?.image ? selectedItem.image : News}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />

            <div className="absolute top-10 md:top-20 mx-auto">
              <div className="bg-black opacity-70  py-5 text-center px-10">
                <p className="text-white font-bold text-base md:text-xl overflow-hidden">
                  {selectedItem?.heading}
                </p>
                <p className="mt-2 text-white font-bold text-sm md:text-base">
                  by : {selectedItem?.author}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center px-4 py-2 md:py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0  -bottom-12 ">
            <h3 className="mb-3 text-black text-lg font-semibold">News</h3>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/News"
                className="font-bold text-primary hover:text-neutral-700"
              >
                More
              </a>
              <div className="text-primary">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>

        {/* Evacuation Routes */}
        <div className="mx-auto relative mb-12 cursor-pointer">

            <img
              src={MapImage}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />

  

          <div className="text-center px-4 py-2 md:py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0  -bottom-12 ">
            <h3 className="mb-3 text-black text-lg font-semibold">
              Evacuation Routes
            </h3>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/EvacuationRoutes"
                className="font-bold text-primary hover:text-neutral-700"
              >
                More
              </a>
              <div className="text-primary">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
