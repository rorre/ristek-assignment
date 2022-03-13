from pydantic import BaseModel, constr


class AuthRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(AuthRequest):
    name: constr(min_length=3)


class CommentRequest(BaseModel):
    content: constr(min_length=1)


class PostRequest(BaseModel):
    title: constr(min_length=4)
    content: constr(min_length=16)
