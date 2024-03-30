import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ChatModel = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed right-10 bottom-20 z-[999] flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-full md:w-[600px] flex flex-col h-[60vh] md:h-[450px] border rounded-xl">
        <button
          className="bg-primary flex items-center justify-end w-full rounded-t-xl p-1"
          onClick={() => onClose()}
        >
          <h1 className="text-white font-semibold px-5 text-center">Chat Bot</h1>
          <IoMdCloseCircle style={{ color: "white" }} className="w-6 h-6 " />
        </button>
        <div className="bg-gray-300 p-2 rounded w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default ChatModel;
