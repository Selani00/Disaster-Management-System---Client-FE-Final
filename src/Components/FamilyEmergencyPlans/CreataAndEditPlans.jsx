import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useSelector } from "react-redux";
import { TextInput, Select, Button } from "flowbite-react";
import Swal from "sweetalert2";

const CreataAndEditPlans = () => {
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  useEffect(() => {
    if (currentUser && currentUser.email) {
      setFormData((prevData) => ({ ...prevData, email: currentUser.email }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const createPlans = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category) {
      console.log("All fields are required");
      return;
    }
    try {
      const res = await fetch(
        "http://localhost:5000/api/familyPlans/createPlan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.status === 200) {
        console.log("Success");
        Swal.fire({
          icon: "success",
          title: "Successfully Submitted",
          text: "Thank you for your submission",
        }).then((res) => {
          if (res.isConfirmed) {
            window.location.reload();
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-2">
      <h1 className="text-center text-primary text-3xl my-5 font-bold">
        Create a Plan
      </h1>
      <form className="flex flex-col gap-4" onSubmit={createPlans}>
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

        <Button gradientDuoTone="purpleToBlue" className="w-full" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default CreataAndEditPlans;
