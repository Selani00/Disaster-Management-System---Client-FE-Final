import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import MainNav from "../../Components/Commen/Header/MainNav";
import CurrentWeather from "../../Components/weather/CurrentWeather";
import HourlyForecast from "../../Components/weather/HourlyForecast";
import DailyForecast from "../../Components/weather/DailyForecast";
import InputSection from "../../Components/weather/InputSection";
import getFormattedWeatherData from "../../services/weatherServices";
import Footer from "../../Components/Commen/Footer/Footer";

const Weather = () => {
  const [quary, setQuary] = useState(null);
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(false);

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuary({ lat: latitude, lon: longitude });
      });
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (quary) {
      const fetchWeather = async () => {
        setLoading(true);
        await getFormattedWeatherData({ ...quary,units }).then((data) => {
          setWeather(data);
          setLoading(false);
        });
      };
      fetchWeather();
    }
  }, [quary]);

  return (
    <div>
      <MainNav />

      <div className="pt-40 mt-6">
        <InputSection setQuary={setQuary} />
        <div className="p-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <Spinner aria-label="Extra large spinner example" size="xl" />
              <p className="mt-4 text-lg font-semibold">Please wait...</p>
            </div>
          ) : (
            weather && (
              <div className="md:flex flex-row w-full items-start justify-between">
                {/* Current weather and hourly forecast */}
                <div className="md:w-2/3 w-full md:px-10">
                  {/* Current */}
                  <CurrentWeather weather={weather} />
                  {/* Hourly forecast */}
                  <HourlyForecast data={weather.hourly} />
                </div>
                {/* Daily forecast */}
                <div className="md:w-1/3 w-full">
                  <DailyForecast data={weather.daily} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Weather;
