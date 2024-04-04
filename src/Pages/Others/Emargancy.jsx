import { useState, useEffect } from "react";
import NavBar from "../../Components/Commen/Header/SimpleNav";
import { FaMapMarkedAlt, FaMicrophone } from "react-icons/fa";
import {
  Label,
  TextInput,
  Select,
  Checkbox,
  FileInput,
  Textarea,
} from "flowbite-react";
import Footer from "../../Components/Commen/Footer/Footer";

const Emargancy = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});

  useEffect(() => {
    getVisitorIP();
  }, []);

  const getVisitorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const fetchIpInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json();

      setGeoInfo(data);
      console.log(geoInfo.regionName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="pt-20 mt-6">
        <div className="px-5 md:px-10 mb-10">
          <form className="p-5 bg-blue-100 text-gray-900 font-semibold text-base">
            <h1 className="text-center font-bold ">
              <span className="text-2xl md:text-5xl ">
                Are you in a Emergency?
              </span>
              <br /> Let us know we will with you
            </h1>
            <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
              <div>
                <Label value="Your Name"></Label>
                <TextInput type="Name" placeholder="username" id="userName" />
              </div>

              <div>
                <Label value="Current Location"></Label>
                <div className="flex justify-between items-center gap-2">
                  <TextInput
                    type="text"
                    placeholder="Current location"
                    className="flex-grow"
                    value={ipAddress}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="text-white bg-primary p-2 rounded-xl"
                    onClick={fetchIpInfo}
                  >
                    <FaMapMarkedAlt className="h-5  w-5" />
                  </button>
                </div>
                {geoInfo.city && <div className="">City: {geoInfo.city}</div>}
              </div>
            </div>

            <div className="grid gap-10 mb-2 md:grid-cols-2 p-5 ">
              <div>
                <div className="mb-2 block">
                  <Label value="Select your disaster" />
                </div>
                <Select id="disaster" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label value="Number of People effected" />
                </div>
                <Select id="disaster" required>
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
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                  Need Medical support or Ambulance
                </Label>
              </div>
            </div>

            {/* Selection */}

            {/* Record void */}
            <div className="px-5 pb-5">
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
            </div>

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
              <Textarea id="message" placeholder="Your message..." rows={4} />
            </div>

            <div className="flex items-center justify-center mt-5 px-5">
              <button
                className="bg-primary py-2 px-10 w-full text-white text-bold text-xl rounded-2xl"
                // onClick={handleSubmit}
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
