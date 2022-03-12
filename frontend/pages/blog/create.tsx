import { axiosInstance, submitHandler } from "components/utils/axios";
import type { NextPage } from "next";
import React, { useState } from "react";

const CreatePage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = submitHandler(
    "/blog/new",
    setIsLoading,
    setError,
    setMessage
  );

  return (
    <div className="bg-gray-800 min-h-screen w-full py-8 flex flex-col">
      <div className="bg-teal-800 text-white mt-6 md:mt-8 flex-grow-0 flex-shrink">
        <div className="container px-8 sm:px-16 md:px-32 lg:px-64 py-4">
          <h1 className="text-3xl font-bold font-montserrat">Create</h1>
        </div>
      </div>

      <div className="container mx-auto px-8 sm:px-16 md:px-32 lg:px-64 flex-1 py-8 text-white">
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-bold font-sans" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border shadow p-2 bg-gray-200 rounded text-black"
            />
          </div>

          <textarea
            className="bg-gray-200 rounded placeholder:text-gray-600 p-2 text-black font-mono"
            placeholder="Content here..."
            rows={16}
            name="content"
          />

          <div className="border-teal-800 bg-gray-200 text-black p-3 rounded border">
            TIP: You can use markdown.
          </div>

          {error && <p className="text-red-700">{error}</p>}
          {message && <p className="text-green-700">{message}</p>}
          <button
            className={
              "rounded bg-teal-800 text-white font-bold font-sans p-2 shadow " +
              (isLoading ? "hover:cursor-not-allowed" : "hover:cursor-pointer")
            }
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
