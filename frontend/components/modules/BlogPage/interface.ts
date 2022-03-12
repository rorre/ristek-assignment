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
  name: string;
  content: string;
}

export type {
  PostDetail,
  CommentBoxProps,
  CommentSectionProps,
  CommentFormProps,
};
