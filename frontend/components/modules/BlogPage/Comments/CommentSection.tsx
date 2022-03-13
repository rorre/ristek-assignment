import axios from "axios";
import { axiosInstance } from "components/utils/axios";
import React, { useCallback, useEffect, useState } from "react";
import { CommentResponse, ErrorResponse } from "types/responses";
import { CommentSectionProps } from "../interface";
import StateMessage from "../StateMessage";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";

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
          commentId={comment.id}
          creator={comment.creator}
          content={comment.content}
          mutate={mutate}
          key={i}
        />
      ))}
      <CommentForm postId={postId} mutate={mutate} />
    </div>
  );
};

export default CommentSection;
