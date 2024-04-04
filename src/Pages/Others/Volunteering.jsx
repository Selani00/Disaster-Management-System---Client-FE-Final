import React from "react";
import NavBar from "../../Components/Commen/Header/NavBar";
import Volunteering_Image from "../../assets/Volunteering/Volunteering.jpg";
import { TextInput, Textarea } from "flowbite-react";
import Footer from "../../Components/Commen/Footer/Footer";

const Volunteering = () => {
  return (
    <>
      <NavBar />

      <div className="pt-10 md:pt-20 ">
        <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
          <div className="text-start items-center text-black">
            <div className="px-5">
              <p className="text-md md:text-xl italic font-semibold">
                Help the people with us
              </p>
              <h1 className="text-2xl md:text-3xl  font-semibold">
                Need Your Heartful Help
              </h1>
            </div>
            <div>
              <img
                src={Volunteering_Image}
                alt=""
                className="items-center justify-center p-1"
              />
            </div>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg text-black text-base">
            <div className="font-semibold text-primary text-center py-5">
              <h1 className="text-3xl md:text-4xl">Complete the Form</h1>
              <p className="text-sm md:text-base text-red-600">
                Fill Form and Beacame Volonteer
              </p>
            </div>

            <form className="p-1 md:p-5 flex flex-col gap-4">
              <TextInput type="text" placeholder="Enter your Name" id="name" />

              <TextInput
                type="tel"
                placeholder="Enter your phone number"
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />

              <TextInput
                type="email"
                placeholder="Enter your Email"
                id="email"
              />

              <TextInput
                type="text"
                placeholder="Enter the district you living"
                id="address"
              />

              <Textarea
                type="text"
                id="message"
                placeholder="How you can help us?"
                rows={4}
              />

              <div className="flex items-center justify-center mt-5 ">
                <button className="bg-primary py-2 px-10 w-full text-white font-semibold text-xl rounded-2xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Volunteering;
