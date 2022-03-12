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

from server.responses import CommentResponse, PostResponse

router = APIRouter(prefix="/blog")


@router.get("/list", response_model=List[PostResponse])
async def list_post(page: int = Query(1)):
    pages = await Post.objects.paginate(page).all()
    return pages


@router.get("/{post_id}", response_model=PostResponse)
async def get_post(post_id: int):
    post = await Post.objects.get_or_none(id=post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found!")

    return post


@router.get("/{post_id}/comments", response_model=List[CommentResponse])
async def get_comments(post_id: int):
    res = await Comment.objects.filter(post__id=post_id).select_related("creator").all()
    return res


@router.post("/{post_id}/comment", response_model=CommentResponse)
async def new_comment(
    post_id: int, data: CommentRequest, user: User = Depends(manager)
):
    post = await Post.objects.get_or_none(id=post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found!")

    comment = await Comment.objects.create(content=data.content, creator=user.id)
    return comment


@router.post("/new", response_model=PostResponse)
async def new_post(data: PostRequest, user: User = Depends(manager)):
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="You are not an admin!")

    post = await Post.objects.create(
        title=data.title,
        content=data.content,
        creator=user.id,
    )
    return post
