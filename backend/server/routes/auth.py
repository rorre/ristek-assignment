from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse

from server.models import User
from server.plugins import manager
from server.request_models import AuthRequest, RegisterRequest

from passlib.hash import pbkdf2_sha256

from server.responses import DefaultResponse

router = APIRouter(prefix="/auth")


@router.post("/login", response_model=DefaultResponse)
async def login(data: AuthRequest):
    user = await User.objects.get_or_none(username=data.username)
    if not user:
        raise HTTPException(status_code=400, detail="Username not found.")

    if not pbkdf2_sha256.verify(data.password, user.password):
        raise HTTPException(status_code=403, detail="Wrong password.")

    response = JSONResponse({"message": "Logged in."})
    token = manager.create_access_token(data=dict(sub=dict(id=user.id)))
    response.set_cookie(
        key=manager.cookie_name,
        value=token,
        httponly=True,
        samesite="none",
        secure=True,
    )
    return response


@router.post("/register", response_model=DefaultResponse)
async def register(data: RegisterRequest):
    user = await User.objects.get_or_none(username=data.username)
    if user:
        raise HTTPException(status_code=400, detail="Username has been used.")

    new_user = await User.objects.create(
        name=data.name,
        username=data.username,
        password=pbkdf2_sha256.hash(data.password),
    )

    # First user, mark as admin.
    if new_user.id == 1:
        await new_user.update(is_admin=True)
    return {"message": "Registered."}


@router.get("/logout")
async def logout(user: User = Depends(manager)):
    response = JSONResponse(content={"message": "Logged out."})
    response.set_cookie("access-token")
    return response
