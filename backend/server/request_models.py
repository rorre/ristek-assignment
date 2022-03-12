from pydantic import BaseModel


class AuthRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(AuthRequest):
    name: str


class CommentRequest(BaseModel):
    content: str


class PostRequest(BaseModel):
    title: str
    content: str
