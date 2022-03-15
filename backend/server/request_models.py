from pydantic import BaseModel, constr


class AuthRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(BaseModel):
    name: constr(min_length=3)
    username: constr(min_length=3)
    password: constr(min_length=8)


class CommentRequest(BaseModel):
    content: constr(min_length=1)


class PostRequest(BaseModel):
    title: constr(min_length=4)
    content: constr(min_length=16)
