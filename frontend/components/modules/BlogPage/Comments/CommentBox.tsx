import axios from "axios";
import { useUser } from "components/context/UserContext";
import { axiosInstance, submitHandler } from "components/utils/axios";
import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { CommentBoxProps } from "../interface";
import { DateTime } from "luxon";

const CommentBox: React.FC<CommentBoxProps> = ({
  commentId,
  mutate,
  creator,
  content,
  created,
}) => {
  const { user } = useUser();

  const [isEditing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) =>
      submitHandler(
        "/comment/" + commentId,
        setIsLoading,
        () => {
          mutate();
          setEditing(false);
        },
        "PUT"
      )(event),
    [commentId, mutate]
  );

  const onDelete = async () => {
    const toastId = toast.loading("Deleting...");
    try {
      await axiosInstance.delete("/comment/" + commentId);
      toast.success("Done!", { id: toastId });
      mutate();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        let message: string =
          err.response?.data?.detail ?? err.message ?? "An error occured.";

        if (typeof message === "string") {
          toast.error(message, { id: toastId });
        } else {
          toast.error("An error  occured.", { id: toastId });
        }
      } else {
        toast.error("An error occured.", { id: toastId });
      }
    }
  };

  return (
    <div className="bg-gray-200 rounded flex flex-col space-y-2 p-4 text-black break-words">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="font-sans text-lg font-bold break-all">
            {creator.name}
          </h3>
          <span className="text-gray-500 italic">
            Posted on {DateTime.fromISO(created).toISODate()}
          </span>
        </div>

        {user?.username == creator.username && (
          <div className="flex flex-row space-x-4">
            <button
              className="hover:cursor-pointer"
              onClick={() => setEditing(true)}
            >
              <AiOutlineEdit />
            </button>
            <button className="hover:cursor-pointer" onClick={onDelete}>
              <AiOutlineDelete />
            </button>
          </div>
        )}
      </div>
      <hr className="border border-gray-500 w-full" />

      {!isEditing ? (
        <p className="font-assistant">{content}</p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <textarea
            className="bg-gray-200 rounded placeholder:text-gray-600 p-2 text-black font-mono"
            placeholder="Content here..."
            rows={4}
            name="content"
          >
            {content}
          </textarea>

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
      )}
    </div>
  );
};

export default CommentBox;
