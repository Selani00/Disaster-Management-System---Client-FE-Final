import React, { useState } from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import { Button, Card } from "flowbite-react";
import { information_list } from "../../Components/information/Data";
import DisasterStatics from "../../Components/information/overallInfo";
import Model from "../../Components/Commen/Model";

const Informations = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleReadMore = (item) => {
    setSelectedInfo(item);
    setShowModel(true);
  };

  return (
    <>
      <MainNav />

      <div className="pt-40 mt-6">
        <div className="p-10">
          <div className="py-5">
            <DisasterStatics />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center tracking-tight text-primary md:py-10 py-5 underline">
              {" "}
              Disaster Information
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {information_list.map((item) => (
                <Card className="max-w-sm mb-5">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-0">
                    <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 ">
                      {item.title}
                    </h5>
                    <p className="font-normal text-gray-700 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <Button
                    className="text-base"
                    onClick={() => handleReadMore(item)}
                  >
                    Read More..
                  </Button>
                </Card>
              ))}
            </div>
          </div>
          <Model isVisible={showModel} onClose={() => setShowModel(false)}>
            {selectedInfo && (
              <div className="">
                <h1 className="text-2xl font-bold text-center tracking-tight text-primary py-5">
                  {selectedInfo.title}
                </h1>
                <img
                  src={selectedInfo.image}
                  alt=""
                  className="w-full px-5 h-48 object-cover"
                />
                <div className="overflow-y-auto max-h-[60vh] p-5 text-justify">
                  <p className="font-normal text-gray-700 ">
                    {selectedInfo.description}
                  </p>
                </div>
              </div>
            )}
          </Model>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Informations;
