import { submitHandler } from "components/utils/axios";
import React, { useCallback, useState } from "react";
import { CommentFormProps } from "../interface";

const CommentForm: React.FC<CommentFormProps> = ({ postId, mutate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) =>
      submitHandler("/blog/" + postId + "/comment", setIsLoading, () => {
        mutate();
        event.currentTarget.reset();
      })(event),
    [postId, mutate]
  );

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <textarea
        className="bg-gray-200 rounded placeholder:text-gray-600 p-2 text-black font-mono"
        placeholder="Content here..."
        rows={4}
        name="content"
      />

      <button
        className={
          "transition rounded text-white font-bold font-sans p-2 shadow " +
          (isLoading
            ? "hover:cursor-not-allowed bg-teal-800"
            : "hover:cursor-pointer bg-teal-600")
        }
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentForm;
