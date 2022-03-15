import { UserResponse } from "types/responses";

interface PostDetail {
  id: number;
  title: string;
  content: string;
}

interface CommentSectionProps {
  postId: number;
}

interface CommentFormProps {
  postId: number;
  mutate: () => void;
}

interface CommentBoxProps {
  commentId: number;
  creator: UserResponse;
  content: string;
  created: string;
  mutate: () => void;
}

export type {
  PostDetail,
  CommentBoxProps,
  CommentSectionProps,
  CommentFormProps,
};
