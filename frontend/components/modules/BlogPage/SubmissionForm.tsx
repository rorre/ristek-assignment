import { submitHandler } from "components/utils/axios";
import React, { useState } from "react";

const SubmissionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = submitHandler("/blog/new", setIsLoading);

  return (
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
  );
};

export default SubmissionForm;
