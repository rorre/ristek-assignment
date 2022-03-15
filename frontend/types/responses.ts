interface ErrorData {
  loc: string[];
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
  id: number;
  title: string;
  content: string;
  creator: UserResponse;
}

interface CommentResponse {
  id: number;
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
