import asyncio
from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import JSONResponse

from server.models import Post, User, Comment
from server.plugins import manager
from server.request_models import (
    AuthRequest,
    CommentRequest,
    PostRequest,
    RegisterRequest,
)
from typing import List
from passlib.hash import pbkdf2_sha256

from server.responses import CommentResponse, DefaultResponse, PostResponse

router = APIRouter(prefix="/comment")


@router.put("/{comment_id}", response_model=DefaultResponse)
async def update_comment(
    comment_id: int, data: CommentRequest, user: User = Depends(manager)
):
    comment = await Comment.objects.select_related("creator").get_or_none(id=comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found.")

    if comment.creator.id != user.id:
        raise HTTPException(
            status_code=403, detail="You are not the owner of this comment."
        )

    comment = await comment.update(content=data.content)
    return {"message": "Comment updated."}


@router.delete("/{comment_id}", response_model=DefaultResponse)
async def delete_comment(comment_id: int, user: User = Depends(manager)):
    comment = await Comment.objects.select_related("creator").get_or_none(id=comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found.")

    if comment.creator.id != user.id:
        raise HTTPException(
            status_code=403, detail="You are not the owner of this comment."
        )

    comment = await comment.delete()
    return {"message": "Comment Removed."}
