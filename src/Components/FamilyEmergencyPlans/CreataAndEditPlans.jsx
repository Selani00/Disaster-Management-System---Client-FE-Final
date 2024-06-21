import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdDelete } from "react-icons/md";

import { TextInput, Select, Button } from "flowbite-react";

const CreataAndEditPlans = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const createPlans = async () => {
    e.preventDefault();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  console.log(formData);

  return (
    <div className="px-2">
      <h1 className="text-center text-primary text-3xl my-5 font-bold">
        Create a Plan
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={handleChange}
          />
          <Select
            onChange={handleChange}
            id="category"
            required
            defaultValue=""
          >
            <option disabled value="">
              Select a category
            </option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
          </Select>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write your post here..."
          className="h-72 md:mb-5 mb-10"
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
      </form>
      <div className="flex items-center justify-center gap-5 px-4 w-full mt-10">
        <div className="w-5/6">
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            className="w-full"
            onClick={createPlans}
          >
            Save
          </Button>
        </div>
        <div>
          <button className="bg-red-500 rounded-lg text-white p-1">
            <MdDelete className="w-6 h-6 hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreataAndEditPlans;
