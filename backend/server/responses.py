import typing as t
from datetime import datetime

from pydantic import BaseModel


class DefaultResponse(BaseModel):
    message: str


class UserResponse(BaseModel):
    name: str
    username: str
    is_admin: bool


class PostResponse(BaseModel):
    id: int
    title: str
    content: str
    creator: UserResponse


class CommentResponse(BaseModel):
    id: int
    content: str
    creator: UserResponse
