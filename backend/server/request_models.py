from pydantic import BaseModel, constr


class AuthRequest(BaseModel):
    username: constr(min_length=3)
    password: constr(min_length=8)


class RegisterRequest(AuthRequest):
    name: constr(min_length=3)


class CommentRequest(BaseModel):
    content: constr(min_length=1)


class PostRequest(BaseModel):
    title: constr(min_length=4)
    content: constr(min_length=16)
