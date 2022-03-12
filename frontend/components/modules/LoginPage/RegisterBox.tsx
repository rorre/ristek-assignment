import React, { useState } from "react";
import { axiosInstance, submitHandler } from "components/utils/axios";

const RegisterBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = submitHandler("/auth/register", setIsLoading);

  return (
    <div className="flex flex-col space-y-4 bg-white p-4">
      <h2 className="font-montserrat font-bold text-xl">Register</h2>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 font-bold font-sans"
            htmlFor="nameRegister"
          >
            Full Name
          </label>
          <input
            name="name"
            type="text"
            id="nameRegister"
            className="border shadow p-2"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 font-bold font-sans"
            htmlFor="usernameRegister"
          >
            Username
          </label>
          <input
            type="text"
            id="usernameRegister"
            className="border shadow p-2"
            name="username"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 font-bold font-sans"
            htmlFor="passwordRegister"
          >
            Password
          </label>
          <input
            type="password"
            id="passwordRegister"
            className="border shadow p-2"
            name="password"
          />
        </div>

        <button
          className={
            "transition rounded text-white font-bold font-sans p-2 shadow " +
            (isLoading
              ? "hover:cursor-not-allowed bg-teal-800"
              : "hover:cursor-pointer bg-teal-600")
          }
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterBox;
