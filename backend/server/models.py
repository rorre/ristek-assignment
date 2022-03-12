from typing import TYPE_CHECKING, Generic

import ormar

if TYPE_CHECKING:
    from ormar.models import T
    from ormar.relations.querysetproxy import QuerysetProxy as _QSP

    class QuerysetProxy(Generic[T], _QSP, list):  # type: ignore
        ...


from server.helper.database import BaseMeta


class User(ormar.Model):
    class Meta(BaseMeta):
        tablename = "users"

    id: int = ormar.Integer(primary_key=True)
    name: str = ormar.String(max_length=256)
    username: str = ormar.String(max_length=32)
    password: str = ormar.String(max_length=512)
    is_admin: bool = ormar.Boolean(default=False)

    if TYPE_CHECKING:
        posts: QuerysetProxy["Post"]
        comments: QuerysetProxy["Comment"]


class Post(ormar.Model):
    class Meta(BaseMeta):
        tablename = "posts"

    id: int = ormar.Integer(primary_key=True)
    title: str = ormar.String(max_length=128)
    content: str = ormar.Text()
    creator = ormar.ForeignKey(User, related_name="posts", nullable=False)

    if TYPE_CHECKING:
        comments: QuerysetProxy["Comment"]


class Comment(ormar.Model):
    class Meta(BaseMeta):
        tablename = "comments"

    id: int = ormar.Integer(primary_key=True)
    content: str = ormar.Text()
    creator = ormar.ForeignKey(User, related_name="comments", nullable=False)
    post = ormar.ForeignKey(Post, related_name="comments", nullable=False)
