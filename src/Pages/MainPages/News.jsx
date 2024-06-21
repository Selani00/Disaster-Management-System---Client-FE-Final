import React,{useState} from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import NewsItems from "../../Components/News/NewsItems";


const News = () => {
  const [breaking,setBreaking] = useState(null);
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6">
        {/* Breaking News */}
        <div className="relative w-full h-8  top-5 px-5 mb-10">
          <div className="flex bg-red-600 items-center">
            <div className="md:w-1/8 w-1/10 bg-white h-full  p-0 items-center flex justify-center m-2">
              <h1 className="font-bold px-3 md:text-lg text-sm text-red-600 shadow-lg">
                Breaking News
              </h1>
            </div>
            <div className="items-center flex justify-center px-3">
              <p
                className="text-sm text-white font-bold overflow-hidden "
                style={{ maxHeight: "1.5em" }}
              >{breaking ?breaking.heading: "" }
                
              </p>
            </div>
          </div>
        </div>

        

        {/* News Section */}
        <NewsItems setBreaking={setBreaking}/>


        <Footer/>


      </div>
    </>
  );
};

export default News;
