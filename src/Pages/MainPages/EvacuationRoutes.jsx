import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import NavBar from "../../Components/Commen/Header/NavBar";
import { FaMapMarkerAlt } from "react-icons/fa";

const EvacuationRoutes = () => {
  const position = { lat: 7.1, lng: 80.636696 };
  return (
    <>
      <NavBar />
      <div className="pt-20 mt-6">
        <div className="border border-black p-3">
          <div >
            <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
              <div style={{ height: "40vh", width: "80vh" }}>
                <Map defaultZoom={8} defaultCenter={position}>
                  <Marker
                    icon= {<FaMapMarkerAlt/>}
                    position={{ lat: 7.1, lng: 80.636696  }}
                  />
                </Map>
              </div>
            </APIProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvacuationRoutes;
