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
  Alert,
  Button,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import Footer from "../../Components/Commen/Footer/Footer";
import Swal from "sweetalert2";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import { set } from "firebase/database";

const Emargancy = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    requesterName: "",
    disasterType: "",
    disasterLocation: "",
    disasterLocationLatLan: [0, 0],
    affectedCount: "",
    image: "",
    medicalNeed: false,
    otherNeeds: "",
  });
  const [otherDisaster, setOtherDisaster] = useState("");

  // Image upload
  const [imageFile, setImageFiles] = useState(null);
  // const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);


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
        disasterLocationLatLan: [latitude, longitude],
      }));
    });
  };

  const handleOtherDisasterChange = (e) => {
    setOtherDisaster(e.target.value);
    setFormdata((prev) => ({
      ...prev,
      disasterType: "Other",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = {
      ...formdata,
      disasterType:
        formdata.disasterType === "Other"
          ? otherDisaster
          : formdata.disasterType,
    };

    if (
      !formdata.requesterName ||
      !formdata.disasterType ||
      !formdata.disasterLocation ||
      !formdata.disasterLocationLatLan.length ||
      !formdata.affectedCount
    ) {
      Swal.fire("Warning!", "Requied filled are empty", "warning");
      return 0;
    }
    try {
      const res = await fetch("http://localhost:5000/api/requests/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully Submitted",
          text: "We will get back to you soon.",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/");
          }
        });
      } else {
        Swal.fire("Oops...", "Something went wrong!", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Oops...", err, "error");
    }
  };

  const uploadImage = async () => {
    try {
      if (!imageFile) {
        setImageUploadError("Please select an image file");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError(
            "Could not upload the image file must be less than 10MB"
          );
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormdata({...formdata, image: downloadURL});
          });
        }
      );
    } catch (err) {
      setImageUploadError("An error occurred while uploading the image");
      setImageUploadProgress(null);
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
                <Label value="Near City"></Label>
                <TextInput
                  type="text"
                  name="disasterLocation"
                  placeholder="City Name"
                  value={formdata.disasterLocation}
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
                    value={latitude + "," + longitude}
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
              <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFiles(e.target.files[0])}
                />
                <Button
                  type="button"
                  gradientDuoTone="purpleToBlue"
                  size="sm"
                  outline
                  onClick={uploadImage}
                  disabled={imageUploadProgress}
                >
                  {imageUploadProgress ? (
                    <div className="w-16 h-16">
                      <CircularProgressbar
                        value={imageUploadProgress}
                        text={`${imageUploadProgress || 0}`}
                      />
                    </div>
                  ) : (
                    "Upload Image"
                  )}
                </Button>
              </div>
            </div>
            {imageUploadError && (
              <Alert color="failure">{imageUploadError}</Alert>
            )}
            {formdata.image && (
              <img
                src={formdata.image}
                alt="uploaded image"
                className="w-full h-71 object-cover"
              />
            )}

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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Emargancy;
