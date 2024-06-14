import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Banner from "../../assets/FamilyEmergancyPlan/FamilyBanner.jpg";
import { Button } from "flowbite-react";
import AllPlans from "../../Components/FamilyEmergencyPlans/AllPlans";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FamilyEmergencyPlans = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/CreateAndEditPlans");
  };
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6 mb-2">
        <div className="relative mb-5">
          <img
            src={Banner}
            className="h-[35vh] w-full object-cover object-center"
          />
          <div className=" absolute inset-0 py-10 bg-black bg-opacity-45 flex-row items-center justify-center text-center px-5 md:px-20">
            <p className="text-white  font-extrabold  text-2xl md:text-4xl p-4 ">
              Family Emergency Plans
            </p>
            <p className="text-white font-semibold text-xs md:text-sm">
              Create a comprehensive plan to ensure your family’s safety during
              emergencies. Store essential information and guidelines to stay
              prepared for unexpected situations.
            </p>
          </div>
        </div>
        <div className="p-3">
          <div className="border border-gray-300 rounded-xl p-2">
            <div className="flex-row md:flex items-center justify-between">
              <div className="w-full md:w-1/2">sdfsf</div>
              <div className="w-full md:w-1/2">
                <h1 className="text-center font-bold text-primary text-base md:text-3xl">
                  My Plans
                </h1>
                <div className="p-4">
                  <div className="flex justify-end w-full">
                    <Button
                      gradientDuoTone="purpleToBlue"
                      onClick={handleCreate}
                    >
                      <IoIosAddCircleOutline className="mr-2 h-5 w-5" />
                      Create
                    </Button>
                  </div>

                  <AllPlans />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FamilyEmergencyPlans;
