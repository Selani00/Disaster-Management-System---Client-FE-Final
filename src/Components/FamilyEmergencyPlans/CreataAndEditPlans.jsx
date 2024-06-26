import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { TextInput, Select, Button } from "flowbite-react";
import Swal from "sweetalert2";

const CreataAndEditPlans = ({ selectedPlan, isEdit }) => {
  const [formData, setFormData] = useState({
    planId: "",
    title: "",
    category: "",
    content: "",
    email: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser && currentUser.email) {
      setFormData((prevData) => ({ ...prevData, email: currentUser.email }));
    }
    if (isEdit && selectedPlan) {
      setFormData({
        planId: selectedPlan.planId,
        title: selectedPlan.title,
        category: selectedPlan.category,
        content: selectedPlan.content,
        email: selectedPlan.email,
      });
    }
  }, [currentUser, isEdit, selectedPlan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const createPlans = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category) {
      console.log("All fields are required");
      return;
    }
    try {
      const res = await fetch("https://dms-server-goil.onrender.com/api/familyPlans/createPlan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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

  const editPlans = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dms-server-goil.onrender.com/api/familyPlans/updatePlan", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        console.log("Success");
        Swal.fire({
          icon: "success",
          title: "Successfully Updated",
          text: "Thank you for your update",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editPlans(e);
    } else {
      createPlans(e);
    }
  };

  return (
    <div className="px-2">
      <h1 className="text-center text-primary text-3xl my-5 font-bold">
        {isEdit ? "Edit Plan" : "Create a Plan"}
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={handleChange}
            value={formData.title}
          />
          <Select
            onChange={handleChange}
            id="category"
            required
            value={formData.category}
          >
            <option disabled value="">
              Select a category
            </option>
            <option value="technology">Emergency Contacts</option>
            <option value="lifestyle">Home Preparation</option>
            <option value="travel">Special Needs</option>
            <option value="food">Emergency Supplies</option>
            <option value="food">Evacuation Plan</option>
            <option value="food">Backup Plans</option>
            <option value="food">Other</option>
          </Select>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write your post here..."
          className="h-72 md:mb-5 mb-10"
          required
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <Button gradientDuoTone="purpleToBlue" className="w-full my-5" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default CreataAndEditPlans;
