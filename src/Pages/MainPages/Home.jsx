import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import ChatBot from "../../Components/Home/ChatBot";
import Footer from "../../Components/Commen/Footer/Footer";

const Home = () => {
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-10 ">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          laboriosam excepturi ex iste, qui animi odio, harum iure cumque
          voluptatem numquam mollitia deserunt recusandae quam veritatis
          officia, eveniet amet pariatur.
        </h1>
        <br/>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          laboriosam excepturi ex iste, qui animi odio, harum iure cumque
          voluptatem numquam mollitia deserunt recusandae quam veritatis
          officia, eveniet amet pariatur.
        </h1>
        <br/>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          laboriosam excepturi ex iste, qui animi odio, harum iure cumque
          voluptatem numquam mollitia deserunt recusandae quam veritatis
          officia, eveniet amet pariatur.
        </h1>


        <ChatBot />

        <Footer />
      </div>
    </>
  );
};

export default Home;
