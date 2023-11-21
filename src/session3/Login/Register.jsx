import React from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

function Register() {
  return (
    <HomeLayout>
  <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 opacity-25 inset-0 z-0" />
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
              <p className="text-gray-500">Please enter to your account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Username
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  type
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Confirm Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  type
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span className="text-gray-500">
                Do you have account?
                <span className="text-red-500">
                  <Link to="/login">Sign in</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HomeLayout>
  
  );
}

export default Register;
