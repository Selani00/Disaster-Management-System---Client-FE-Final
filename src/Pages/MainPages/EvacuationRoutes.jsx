import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import NavBar from "../../Components/Commen/Header/NavBar";
import { FaMapMarkerAlt } from "react-icons/fa";
import Banner from "../../assets/EvacuationRoutes/Banner.jpg";
import Footer from "../../Components/Commen/Footer/Footer";
import axios from "axios";

const EvacuationRoutes = () => {
  const [shelters, setShelters] = useState([]);

  const getShelters = async () => {
    try {
      const currentResponse = await axios.post(
        "http://localhost:5000/api/shelters/getAll"
      );
      setShelters(currentResponse.data);
      console.log(currentResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShelters();
  }, []);

  useEffect(() => { 
    if(shelters.length>0) {
      console.log("Shelter :"+ shelters);
    }
  }, [shelters]);

  return (
    <>
      <NavBar />
      <div className="pt-15 mt-0">
        <div className="relative mb-5">
          <img src={Banner} className="top-0 h-[30vh] w-full object-cover" />
          <div className=" absolute inset-0 py-10 flex-row items-center justify-center text-center">
            <p className="text-primary font-extrabold  text-2xl md:text-4xl p-4 ">
              We will navigate you to the nearest safe place.
            </p>
            <p className="text-primary font-semibold text-sm md:text-base">
              Your safety is our top priority, and we're here to guide you every
              step of the way.
            </p>
          </div>
        </div>
        <div>
          {/* Flex box */}
          <div>
            <div> Buttton</div>
            <div>Display fild</div>
          </div>

        </div>
        <div className="border border-black rounded-xl p-3">
          <div>
            <APIProvider apiKey={"AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk"}>
              <div className="w-full h-[60vh]">
                <Map defaultZoom={7} defaultCenter={{ lat: 7.1, lng: 80.636696 }}>
                  {
                    shelters.map((report, index) => (
                      <Marker
                        key={index}
                        position={{
                          lat: report.locationLatLang[0].latitude,
                          lng: report.locationLatLang[0].longitude,
                        }}
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
