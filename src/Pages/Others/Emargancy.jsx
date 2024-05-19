import { useState } from "react";
import NavBar from "../../Components/Commen/Header/SimpleNav";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  Label,
  TextInput,
  Select,
  Checkbox,
  FileInput,
  Textarea,
  Alert,
} from "flowbite-react";

import Footer from "../../Components/Commen/Footer/Footer";

const Emargancy = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [formdata, setFormdata] = useState({
    requesterName: "",
    disasterType: "",
    disasterLocation: [],
    affectedCount: "",
    medicalNeed: false,
    otherNeeds: "",
  });

  const [otherDisaster, setOtherDisaster] = useState("");
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formdata);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      setFormdata((prev) => ({
        ...prev,
        disasterLocation: [latitude, longitude],
      }));
    });
  };

  const handleOtherDisasterChange = (e) => {
    setOtherDisaster(e.target.value);
    setFormdata((prev) => ({
      ...prev,
      disasterType: "Other",
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData ={
      ...formdata,
      disasterType: formdata.disasterType === "Other" ? otherDisaster : formdata.disasterType,
    }

    if (
      !formdata.requesterName ||
      !formdata.disasterType ||
      !formdata.disasterLocation.length ||
      !formdata.affectedCount
    ) {
      console.log("All fields are required");
      return 0;
    }

    try {
      const res = await fetch("http://localhost:4800/api/requests/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      

      if (res.status === 200) {
        setMessage("We will get back to you soon. Thank you for your request");
        setError("");
      } else {
        setError("Something went wrong. Please try again");
        setMessage("");
       
      }
    } catch (err) {
      setError(err);
      setMessage("");
    }
  };

  return (
    <>
      <NavBar />

      <div className="pt-20 mt-6">
        <div className="px-5 md:px-10 mb-10">
          <form
            className="p-5 bg-blue-100 text-gray-900 font-semibold text-base"
            onSubmit={handleSubmit}
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
                  type="text"
                  name="requesterName"
                  placeholder="username"
                  value={formdata.requesterName}
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
                    value={
                      formdata.disasterLocation.length
                        ? `${formdata.disasterLocation[0]}, ${formdata.disasterLocation[1]}`
                        : ""
                    }
                    readOnly
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
                  name="disasterType"
                  required
                  defaultValue=""
                  value={formdata.disasterType}
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
              {formdata.disasterType === "Other" && (
                <div>
                  <Label value="What is the disaster that you face" />
                  <TextInput
                    type="text"
                    name="otherDisaster"
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
                <Select
                  name="affectedCount"
                  value={formdata.affectedCount}
                  required
                  defaultValue=""
                  onChange={handleChange}
                >
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
                <Checkbox
                  name="medicalNeed"
                  checked={formdata.medicalNeed}
                  onChange={handleChange}
                />
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
              <Textarea
                name="otherNeeds"
                placeholder="Your message..."
                rows={4}
                value={formdata.otherNeeds}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-center mt-5 px-5">
              <button
                className="bg-primary py-2 px-10 w-full text-white text-bold text-xl rounded-2xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-2">

          {message && <Alert type="success">{message}</Alert>}
          {error && <Alert type="error">{error}</Alert>}
 

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Emargancy;
