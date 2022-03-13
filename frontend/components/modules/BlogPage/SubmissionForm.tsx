import { submitHandler } from "components/utils/axios";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { PostResponse } from "types/responses";

const SubmissionForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) =>
      submitHandler<PostResponse>("/blog/new", setIsLoading, (response) =>
        router.push("/blog/" + response.data.id)
      )(event),
    [router]
  );

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
