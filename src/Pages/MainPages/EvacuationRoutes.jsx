import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import MainNav from "../../Components/Commen/Header/MainNav";
import Banner from "../../assets/EvacuationRoutes/Banner.jpg";
import Footer from "../../Components/Commen/Footer/Footer";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { FaPersonShelter, FaTrafficLight } from "react-icons/fa6";
import { renderToStaticMarkup } from 'react-dom/server';

const apikey = import.meta.env.VITE_MAP_API_KEY;

const EvacuationRoutes = () => {
  const [shelters, setShelters] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 7.1,
    lng: 80.636696,
  });
  const [showShelters, setShowShelters] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [traffics, setTraffics] = useState([]);

  const getShelters = async () => {
    try {
      const currentResponse = await axios.post(
        "http://localhost:8000/api/shelters/getAll"
      );
      setShelters(currentResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTraffic = async () => {
    try {
      const traffics = await axios.post(
        "http://localhost:8000/api/roadCloses/allRoadCloses"
      );
      setTraffics(traffics.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShelters();
    getTraffic();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleMarkerClick = (shelter) => {
    setSelectedShelter(shelter);
  };

  const svgToDataURL = (svg) => {
    const svgString = encodeURIComponent(svg);
    return `data:image/svg+xml,${svgString}`;
  };

  // Create SVG strings with specified colors
  const shelterIconSVG = renderToStaticMarkup(<FaPersonShelter size={24} color="green" />);
  const trafficIconSVG = renderToStaticMarkup(<FaTrafficLight size={24} color="red" />);

  const shelterIcon = svgToDataURL(shelterIconSVG);
  const trafficIcon = svgToDataURL(trafficIconSVG);

  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6 pb-3">
        <div className="relative mb-5">
          <img src={Banner} className="h-[30vh] w-full object-cover" />
          <div className=" absolute inset-0 py-10 flex-row items-center justify-center text-center">
            <p className="text-primary font-extrabold text-2xl md:text-4xl p-4 ">
              We will navigate you to the nearest safe place.
            </p>
            <p className="text-primary font-semibold text-sm md:text-base">
              Your safety is our top priority, and we're here to guide you every
              step of the way.
            </p>
          </div>
        </div>
        <div className="p-5">
          <div className="bg-gray-300">
            <div className="text-center">
              <h1 className="text-primary font-extrabold text-2xl md:text-3xl p-4">
                Evacuation Routes and Shelter Information
              </h1>
            </div>

            <div className="rounded-lg p-5">
              <div className="flex-row md:flex items-center justify-center gap-10">
                <div className="w-full md:w-1/2 text-center">
                  <h1 className="font-semibold text-lg">
                    Select the Parameters
                  </h1>
                  <div className="p-5 flex flex-col space-y-4 items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={(e) => setShowShelters(e.target.checked)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900">
                        Show Shelter Locations
                      </span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={(e) => setShowTraffic(e.target.checked)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900">
                        Show Traffic Closures
                      </span>
                    </label>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center">
                  <h1 className="font-semibold text-lg">Details to Show</h1>
                  <div className="p-5 flex flex-col space-y-4 items-center">
                    <form className="w-full flex flex-col gap-4">
                      <div className="flex justify-start items-center space-x-4">
                        <Label className="text-right w-1/4">Shelter Name</Label>
                        <TextInput
                          type="text"
                          value={
                            selectedShelter ? selectedShelter.shelterName : ""
                          }
                          disabled
                          className="w-3/4"
                        />
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Label className="text-right w-1/4">Location</Label>
                        <TextInput
                          type="text"
                          value={
                            selectedShelter ? selectedShelter.location : ""
                          }
                          disabled
                          className="w-3/4"
                        />
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Label className="text-right w-1/4">Shelter Type</Label>
                        <TextInput
                          type="text"
                          value={
                            selectedShelter ? selectedShelter.shelterType : ""
                          }
                          disabled
                          className="w-3/4"
                        />
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Label className="text-right w-1/4">Phone Number</Label>
                        <TextInput
                          type="text"
                          value={
                            selectedShelter ? selectedShelter.phoneNumber : ""
                          }
                          disabled
                          className="w-3/4"
                        />
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Label className="text-right w-1/4">
                          Person In Charge
                        </Label>
                        <TextInput
                          type="text"
                          value={
                            selectedShelter
                              ? selectedShelter.personInCharge
                              : ""
                          }
                          disabled
                          className="w-3/4"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-black rounded-xl p-3">
          <div>
            <APIProvider apiKey={apikey}>
              <div className="w-full h-[80vh]">
                <Map defaultZoom={7} defaultCenter={currentLocation}>
                  {showShelters &&
                    shelters.map((shelter, index) => (
                      <Marker
                        key={index}
                        position={{
                          lat: shelter.locationLatLang[0].latitude,
                          lng: shelter.locationLatLang[0].longitude,
                        }}
                        onClick={() => handleMarkerClick(shelter)}
                        icon={shelterIcon}
                      />
                    ))}

                  {showTraffic &&
                    traffics.map((traffic, index) => (
                      <Marker
                        key={index}
                        position={{
                          lat: traffic.closeLatLang[0].latitude,
                          lng: traffic.closeLatLang[0].longitude,
                        }}
                        icon={trafficIcon}
                      />
                    ))}
                </Map>
              </div>
            </APIProvider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EvacuationRoutes;
