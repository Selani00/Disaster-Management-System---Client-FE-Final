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
  const [messages,setMessages] = useState([]);


  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post("https://dms-mobile-server.onrender.com/api/chatbot", {
        content: content,
        role: "user",
      });      

      
      setResult(response.data);
      const newMessage = {content:content,result:response.data};
      setMessages([...messages,newMessage]);
      console.log(messages);
      setContent("")
      
    }catch(error){
      console.log(error.message);
    }

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
          {/* {result && <div>{result}</div>} */}
          <div>
            {messages.map((message,i)=>(
              <div key={i} className={`message ${i%2 == 0 ? 'right-0' : 'left-0'}`}>
                <div className="bg-green-300 p-2 rounded-tr-xl rounded-bl-xl rounded-br-xl" style={{ width: 'fit-content' }}>{message.content}</div>
                <br/>
                <div className="bg-pink-300 p-2 rounded-tl-xl rounded-bl-xl rounded-br-xl" style={{ width: 'fit-content' }}>{message.result}</div>
                <br/>
              </div>
            ))}
          </div>
          
          <div className="  mb-4">
            <div className="flex justify-between items-center gap-5">
              <TextInput
                type="text"
                placeholder="Ask anything..."
                value={content}
                className="flex-grow"
                onChange={(e) => setContent(e.target.value)}
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
