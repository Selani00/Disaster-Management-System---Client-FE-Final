import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NavBar from "../Commen/Header/NavBar";
import { TextInput, Select,Button } from "flowbite-react";

const CreataAndEditPlans = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <NavBar />
      <div className="pt-10 md:pt-18 ">
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-primary text-3xl my-7 font-bold ">Create a Plan</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            // onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
          </Select>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write your post here..."
          className="h-72 mb-12"
          required
          // onChange={(value)=>{setFormData({...formData, content:value})}}
        />

        <Button type="submit" gradientDuoTone="purpleToBlue">
          Publish
        </Button>

      </form>

      </div>
        
      </div>
    </>
  );
};

export default CreataAndEditPlans;
