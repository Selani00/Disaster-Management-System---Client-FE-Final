import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import ChatBot from "../../Components/Home/ChatBot";
import Footer from "../../Components/Commen/Footer/Footer";
import Image_Slider from "../../Components/Home/Image_Slider";

const Home = () => {
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6 ">
        {/* Image Slider */}
        <Image_Slider/>


        <ChatBot />

        <Footer />
      </div>
    </>
  );
};

export default Home;
