import React from "react";
import Nav from "../../Components/Commen/Header/MainNav";
import { TextInput, Button, Alert } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { signOutSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignOut = () => {
    try {
      dispatch(signOutSuccess());
      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <div className="pt-40 mt-6">
        <div className="max-w-lg mx-auto p-3 w-full">
          <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <TextInput
              type="text"
              id="username"
              placeholder="Username"
              defaultValue={currentUser.userName}
              //onChange={handleChange}
            />
            <TextInput
              type="email"
              id="email"
              placeholder="Email"
              defaultValue={currentUser.email}
              //onChange={handleChange}
            />

            <TextInput
              type="text"
              id="address"
              placeholder="Address"
              defaultValue={currentUser.email}
              //onChange={handleChange}
            />

            <TextInput
              type="text"
              id="telephoneNumber"
              placeholder="07XXXXXXXXX"
              defaultValue={currentUser.telephoneNumber}
              //onChange={handleChange}
            />
            <TextInput
              type="password"
              id="password"
              placeholder="**********"

              //onChange={handleChange}
            />

            <Button
              type="submit"
              outline gradientDuoTone="cyanToBlue"
              //disabled={loading || imageFileUploading}
            >
              Update
              {/* {loading || imageFileUploading ? "Loading..." : "Update"} */}
            </Button>
          </form>

          <div className="text-red-500 flex justify-between mt-5 hover:underline">
            <span
              //onClick={() => setShowModel(true)}
              className="cursor-pointer"
            >
              Delete Accout
            </span>
            <span onClick={handleSignOut} className="cursor-pointer">
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
