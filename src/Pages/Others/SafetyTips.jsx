import React, { useState } from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Banner from "../../assets/SafetyTips/Banner.png";
import Security from "../../assets/SafetyTips/security.png";
import constructions from "../../assets/SafetyTips/constructions.png";

import Model from "../../Components/Commen/Model_1";


const SafetyTips = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedTips, setSelectedTips] = useState(null);

  const data = [
    {
      name: "Create an Emergency Kit",
      description:
        "Prepare a kit with essential items like water, food, first-aid supplies, and medications.",
      icon: Security,
    },
    {
      name: "Develop a Family Plan",
      description:
        "Ensure every family member knows what to do and where to go in case of a disaster.",
      icon: constructions,
    },
    {
      name: "Stay Informed",
      description:
        "Keep updated with local news and weather alerts through TV, radio, or mobile apps.",
      icon: Security,
    },
    {
      name: "Know Evacuation Routes",
      description:
        "Familiarize yourself with the nearest evacuation routes and shelters.",
      icon: constructions,
    },
    {
      name: "Secure Your Home",
      description:
        "Reinforce doors, windows, and roofs to withstand potential disasters.",
      icon: Security,
    },
    {
      name: "Practice Drills",
      description:
        "Regularly conduct emergency drills for scenarios like fire, earthquake, or flood.",
      icon: constructions,
    },
    {
      name: "Learn Basic First Aid",
      description:
        "Acquire basic first-aid skills to assist injured individuals until help arrives.",
      icon: Security,
    },
    {
      name: "Have Emergency Contacts",
      description:
        "Keep copies of critical documents in a safe, waterproof location.",
      icon: constructions,
    },
  ];

  const handleReadMore = (item) => {
    setSelectedTips(item);
    setShowModel(true);
  };

  return (
    <>
      <MainNav />

      <div className="pt-40 mt-6">
        {/* Main Banner */}
        <div className="relative">
          <div className="md:h-[70vh] w-full">
            <img src={Banner} alt="Safety Banner" className="h-full w-full object-cover" />
          </div>

          <div className="absolute md:bottom-5 md:left-10 bottom-2 left-5">
            <h1 className="text-lg sm:text-3xl md:text-5xl font-bold italic">
              Your Safety is
              <br /> Our Priority
            </h1>
          </div>
        </div>

        <div className="px-5 py-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {data.map((item) => (
              <div
                key={item.name}
                className="mb-5 p-6 rounded-2xl cursor-pointer flex flex-col items-center justify-center shadow-lg transform transition-transform hover:scale-105"
                onClick={() => handleReadMore(item)}
                
              >
                <div className="bg-gray-200 rounded-full p-5 mb-4">
                  <img src={item.icon} alt={item.name} className="w-24 h-24" />
                </div>
                <h5 className="text-xl font-bold text-center tracking-tight text-primary">
                  {item.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
        
        <Model isVisible={showModel} onClose={() => setShowModel(false)}>
          {selectedTips && (
            <div className="flex flex-col items-center justify-center">
              <img src={selectedTips.icon} className="px-5 h-48 " />
              <h1 className="text-2xl font-bold text-center tracking-tight text-primary py-5">
                {selectedTips.name}
              </h1>

              <div className="overflow-y-auto max-h-[60vh] p-5 text-justify">
                <p className="font-normal text-gray-700">
                  {selectedTips.description}
                </p>
              </div>
            </div>
          )}
        </Model>

        <Footer />
      </div>
    </>
  );
};

export default SafetyTips;
