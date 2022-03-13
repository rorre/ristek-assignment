import axios from "axios";
import { axiosInstance } from "components/utils/axios";
import React, { useCallback, useEffect, useState } from "react";
import { CommentResponse, ErrorResponse } from "types/responses";
import { CommentBoxProps, CommentSectionProps } from "../interface";
import StateMessage from "../StateMessage";
import CommentForm from "./CommentForm";

const CommentBox: React.FC<CommentBoxProps> = ({ name, content }) => (
  <div className="bg-gray-200 rounded flex flex-col space-y-2 p-4 text-black break-words">
    <h3 className="font-sans text-lg font-bold">{name}</h3>
    <hr className="border border-gray-500 w-full" />

    <p className="font-assistant">{content}</p>
  </div>
);

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const mutate = useCallback(async () => {
    try {
      let response = await axiosInstance.get<CommentResponse[]>(
        "/blog/" + postId + "/comments"
      );
      setComments(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const response: ErrorResponse = err.response?.data;
        if (typeof response.detail === "string") {
          setError(response.detail);
        } else {
          setError("Invalid request.");
        }
      } else {
        setError("An error has occured.");
      }
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    if (postId) mutate();
  }, [postId, mutate]);

  return (
    <div className="flex flex-col space-y-4">
      <StateMessage
        isLoading={isLoading}
        error={error}
        showEmpty={!isLoading && !error && comments.length == 0}
      />
      {comments.map((comment, i) => (
        <CommentBox
          name={comment.creator.name}
          content={comment.content}
          key={i}
        />
      ))}
      <CommentForm postId={postId} mutate={mutate} />
    </div>
  );
};

export default CommentSection;
