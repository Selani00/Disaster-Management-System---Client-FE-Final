import React, { useState, useEffect } from "react";
import News_Image from "../../assets/News/News_Image.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const news_list = [
  {
    id: 1,
    heading: "This is news heading 1",
    Auther: "Auther",
    date: "31 Dec 2023",
    time: "8AM",
    image: News_Image,
    news_body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    heading:
      "This is news heading 2 dw  dwef  ew fcds fsdf sdfdssdfsdf fdsfsdfdsf fdsfds",
    Auther: "Auther 2",
    date: "31 Dec 2023",
    time: "8AM",
    image: News_Image,
    news_body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    heading: "This is news heading 3",
    Auther: "Auther 3",
    date: "31 Dec 2023",
    time: "8AM",
    image: News_Image,
    news_body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    heading: "This is news heading 4",
    Auther: "Auther 4",
    date: "31 Dec 2023",
    time: "8AM",
    image: News_Image,
    news_body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 5,
    heading: "This is news heading 4",
    Auther: "Auther 4",
    date: "31 Dec 2023",
    time: "8AM",
    image: News_Image,
    news_body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const NewsItems = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/news/getNews"
      );
      console.log(response.data);
      setNews(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <div className="flex justify-between py-5 px-5 gap-5">
        {/* Left Section */}
        <div className="sm:w-2/3 bg-gray-200 ">
          <div className="px-5 py-3">
            <h1 className="text-primary font-bold md:text-3xl text-lg">
              This is the heading
            </h1>
            <p className="my-3 text-base">By ABC</p>
            <div className="w-1/4 flex justify-between text-xs text-gray-500 py-4">
              <p>2024.05.12</p>
              <p>08:32 AM</p>
            </div>

            <div
              className="relative"
              style={{ width: "100%", paddingBottom: "56.25%" }}
            >
              <img
                src={News_Image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="mt-3">
              <p className="text-black text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                ducimus voluptas blanditiis laborum voluptate, necessitatibus,
                optio non explicabo enim eaque nisi distinctio expedita eligendi
                ullam porro? Sit at tenetur enim?
              </p>
            </div>
          </div>

          {/* Next and Previous Button */}
          <div className="flex justify-between my-10 mx-5">
            {/* left button */}
            <button className="bg-primary text-white font-semibold py-2 px-7 rounded my-10 flex justify-between items-center gap-3">
              <FaArrowLeft />
              <span>Previous</span>
            </button>

            {/* Right button */}
            <button className="bg-primary text-white font-semibold py-2 px-7 rounded my-10 flex justify-between items-center gap-3">
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section - Move this section to another file*/}
        <div className="w-1/3 border border-black">
          <div className="px-2 py-2">
            <h1 className="text-primary font-bold md:text-2xl text-lg py-3">
              More News
            </h1>
            <div>
              {news_list.map((news) => (
                <div
                  key={news.id}
                  className="flex items-center justify-start gap-2 bg-gray-200 h-20 my-2 cursor-pointer"
                  onClick={() => handleMouseClick(news)}
                >
                  <div className="w-1/3   py-0 h-full">
                    <img
                      src={news.image ? news.image : defaulf_image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mr-2 py-2">
                    <h1 className="font-semibold text-black text-base">
                      {news.heading.slice(0, 35)}
                    </h1>

                    <div className=" mt-3 flex justify-between text-xs">
                      <p className="text-black">{news.Auther}</p>
                      <p className="text-gray-800">{news.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-3">
              <button
                type="button"
                className="bg-primary text-white font-semibold py-2 px-7 rounded my-10"
                onClick={handleClick}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
