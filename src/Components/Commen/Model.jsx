import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const Model = ({isVisible,onClose, children}) => {
    if(!isVisible) return null;

    const handleClose=(e)=>{
        if(e.target.id==='wrapper') onClose();

    }
    
  return (
    <div className='fixed inset-0 z-[999] bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
      <div className='md:w-5/6 w-4/5 flex flex-col relative'>
        <button className='text-gray-700 text-2xl absolute top-4 right-4' onClick={()=>onClose()}><IoIosCloseCircle className='w-6 h-6' /></button>
        <div className='bg-white p-2 rounded overflow-y-auto' style={{ maxHeight: '80vh' }}>{children}</div>

      </div>
    </div>
  )
}

export default Model
