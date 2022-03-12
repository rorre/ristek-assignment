interface ErrorData {
  loc: Record<number, string>;
  msg: string;
  type: string;
}

interface ErrorResponse {
  detail: string | ErrorData[];
}

interface DefaultResponse {
  message: string;
}

interface UserResponse {
  name: string;
  username: string;
  is_admin: boolean;
}

interface PostResponse {
  id: string;
  title: string;
  content: string;
  creator: UserResponse;
}

interface CommentResponse {
  id: string;
  content: string;
  creator: UserResponse;
}

export type {
  ErrorData,
  ErrorResponse,
  DefaultResponse,
  UserResponse,
  PostResponse,
  CommentResponse,
};
