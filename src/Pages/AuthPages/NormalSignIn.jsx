import React from "react";
import NavBar from "../../Components/Commen/Header/SimpleNav";
import login from "../../assets/AuthPage/login.jpg";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";

const NormalSignIn = () => {
  return (
    <>
      <NavBar />
      <div div className="min-h-screen ">
        <div className="relative top-20 flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 shadow-lg items-center justify-center p-5 md:p-2 ">
          {/* left */}
          <div className="hidden md:block md:w-1/2 p-5">
            <img src={login} alt="login" />
          </div>
          {/* right */}

          <div className="flex-1 p-5  md:w-1/2 w-full ">
            <div className="text-primary text-center  flex flex-col items-center justify-center font-bold py-5">
              <img src={logo} alt="" className="w-20" />
              <h1 className="mt-5 text-3xl">Welcome Again</h1>
            </div>

            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your Email"></Label>
                <TextInput
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                />
              </div>

              <div>
                <Label value="Your Password"></Label>
                <TextInput
                  type="password"
                  placeholder="************"
                  id="password"
                />
              </div>

              <p className="text-xs cursor-pointer hover:underline ">
                Forget password
              </p>

              <button
                type="button"
                className="my-4 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
              >
                Sign In
              </button>

              <div className="flex justify-between">
                <p className="justify-start text-sm">
                  Do not have an Account?{" "}
                </p>
                <p className="items-end text-sm hover:underline">
                  <Link to="/Registration">Create Account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalSignIn;
