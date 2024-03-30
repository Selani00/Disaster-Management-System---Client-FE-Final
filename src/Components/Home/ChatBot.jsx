import React, { useState } from "react";
import axios from "axios";
import { IoChatbubbles } from "react-icons/io5";
import ChatModel from "../Commen/ChatModel";
import { TextInput } from "flowbite-react";
import { BsFillSendFill } from "react-icons/bs";

const ChatBot = () => {
  const [showModel, setShowModel] = useState(false);
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post("https://dms-mobile-server.onrender.com/api/chatbot", {
        content: content,
        role: "user",
      });

      const data = await response.json();
      setResult(response.data.message);
      console.log(data.message);
     

    }catch(error){
      console.log(error.message);
    }

  }

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <>
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer  bg-primary w-12 h-12  flex items-center justify-center rounded-full"
        onClick={() => setShowModel(true)}
      >
        <IoChatbubbles style={{ color: "white" }} className="w-7 h-7 " />
      </div>
      <ChatModel isVisible={showModel} onClose={() => setShowModel(false)}>
        <div className="relative">
          {result && <div>{result}</div>}
          
          <div className="absolute Bottom-0 left-0 right-0 mb-4">
            <div className="flex justify-between items-center gap-5">
              <TextInput
                type="text"
                placeholder="Ask anything..."
                value={content}
                className="flex-grow"
                onChange={handleChange}
              />
              <button type="submit" className="text-white bg-primary p-2 rounded-xl" onClick={handleSubmit}>
                <BsFillSendFill className=" h-6 w-6 " />
              </button>
            </div>
          </div>
        </div>
      </ChatModel>
    </>
  );
};

export default ChatBot;
