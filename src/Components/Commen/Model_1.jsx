import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Model_1 = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <motion.div
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg flex flex-col relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button className="text-gray-700 text-2xl absolute top-4 right-4" onClick={onClose}>
          <IoIosCloseCircle className="w-8 h-8" />
        </button>
        <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Model_1;
