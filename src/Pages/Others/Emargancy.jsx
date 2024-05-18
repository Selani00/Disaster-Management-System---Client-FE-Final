import { useState, useEffect } from "react";
import NavBar from "../../Components/Commen/Header/SimpleNav";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  Label,
  TextInput,
  Select,
  Checkbox,
  FileInput,
  Textarea,
} from "flowbite-react";

import Footer from "../../Components/Commen/Footer/Footer";
import { retry } from "@reduxjs/toolkit/query";

const Emargancy = () => {
  

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [formdata, setFormdata] = useState({});
  3
  const [disasterType, setDisasterType] = useState("");
  const [otherDisaster, setOtherDisaster] = useState("");
  const [peopleEffected, setPeopleEffected] = useState("");
  const [needMedicalSupport, setNeedMedicalSupport] = useState(false);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // If your change the name
    setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() });

    // setDisasterType(e.target.value);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);    
    });
  };

  // To return the data in the input field
  const formatLocation = () => {
    return `${location.latitude}, ${location.longitude}`;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(
      !formdata.requesterName || !formdata.disasterType 
      || !formdata.disasterLocation || !formdata.affectedCount 
      || !formdata.medicalNeed
    ){
      return 0;
    }

    try{
      const res = await fetch("http://localhost:4800/api/requests/request" ,{
        method: "GET",
        headers:{
          "Content-Type": "application/json",
        },
        body : JSON.stringify(formdata),
      })

      const data = await res.json();

      if(data.success === false){
        console.log(data.message);
      }

    }catch(err){
      console.log(err)
    }
  };
;
  const handleOtherDisasterChange = (e) => {
    setOtherDisaster(e.target.value);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <NavBar />

      <div className="pt-20 mt-6">
        <div className="px-5 md:px-10 mb-10">
          <form
            className="p-5 bg-blue-100 text-gray-900 font-semibold text-base"
            onClick={handleSubmit}
          >
            <h1 className="text-center font-bold ">
              <span className="text-2xl md:text-5xl ">
                Are you in a Emergency?
              </span>
              <br /> Let us know we will with you
            </h1>
            <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
              <div>
                <Label value="Your Name"></Label>
                <TextInput
                  type="Name"
                  placeholder="username"
                  id="requesterName"                  
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label value="Current Location"></Label>
                <div className="flex justify-between items-center gap-2">
                  <TextInput
                    type="text"
                    placeholder="Current location"
                    className="flex-grow"
                    id="disasterLocation"
                    value={formatLocation()}
                    onChange={(e)=>setFormdata({...formdata, location:value})}
                    // readOnly
                  />
                  <button
                    type="button"
                    className="text-white bg-primary p-2 rounded-xl"
                    onClick={getCurrentLocation}
                  >
                    <FaMapMarkedAlt className="h-5  w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-10 mb-2 md:grid-cols-2 p-5 ">
              <div>
                <div className="mb-2 block">
                  <Label value="Select the type of disaster you face" />
                </div>
                <Select
                  id="disasterType"
                  required
                  defaultValue=""
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select...
                  </option>
                  <option>Flood</option>
                  <option>Tsunami</option>
                  <option>House Fire</option>
                  <option>Other</option>
                </Select>
              </div>
              {disasterType === "Other" && (
                <div>
                  <Label value="What is the disaster that you face" />
                  <TextInput
                    type="text"
                    id="otherDisaster"
                    placeholder="Specify other disaster"
                    value={otherDisaster}
                    onChange={handleOtherDisasterChange}
                  />
                </div>
              )}

              <div>
                <div className="mb-2 block">
                  <Label value="Number of People effected" />
                </div>
                <Select id="affectedCount" required defaultValue="" onChange={handleChange}>
                  <option disabled value="">
                    Select...
                  </option>
                  <option>Only me</option>
                  <option>2-5</option>
                  <option>5-15</option>
                  <option>15-25</option>
                  <option>more than 50</option>
                </Select>
              </div>
            </div>

            <div className="px-5 mb-5">
              <div className="flex items-center gap-2">
                <Checkbox id="medicalNeed" onChange={handleChange}/>
                <Label htmlFor="promotion">
                  Need Medical support or Ambulance
                </Label>
              </div>
            </div>

            {/* Selection */}

            {/* Select Images or videos */}
            <div className="px-5 pb-3">
              <div>
                <Label value="Click to upload the images" />
              </div>
              <FileInput id="images" multiple />
            </div>

            <div className="py-3 px-5">
              <div className="mb-2 block">
                <Label value="Your message" />
              </div>
              <Textarea id="otherNeeds" placeholder="Your message..." rows={4} onChange={handleChange}/>
            </div>

            <div className="flex items-center justify-center mt-5 px-5">
              <button
                className="bg-primary py-2 px-10 w-full text-white text-bold text-xl rounded-2xl"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Emargancy;

{
  /* Record void */
}
{
  /* <div className="px-5 pb-5">
              <div>
                <Label value="Current Location"></Label>
                <div className="flex justify-between items-center gap-2">
                  <button
                    type="submit"
                    className="text-white bg-primary p-2 rounded-xl"
                  >
                    <FaMicrophone className=" h-5  w-5" />
                  </button>
                  <TextInput
                    type="text"
                    placeholder="Current location"
                    className="flex-grow"
                  />
                </div>
              </div>
            </div> */
}
