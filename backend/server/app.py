from fastapi import Depends, FastAPI

from fastapi.middleware.cors import CORSMiddleware

from server.responses import UserResponse, DefaultResponse
from server.routes.auth import router as AuthRouter
from server.routes.blog import router as BlogRouter
from server.routes.comment import router as CommentRouter
from server.plugins import manager
from server.helper.database import database
from server.helper.settings import settings
from server.models import User

app = FastAPI()
app.include_router(AuthRouter)
app.include_router(BlogRouter)
app.include_router(CommentRouter)
origins = [
    "http://localhost",
    "http://localhost:3000",
    settings.frontend_url,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_model=DefaultResponse)
async def root():
    return {"message": "Hello world!"}


@app.get("/me", response_model=UserResponse)
async def me(user: User = Depends(manager)):
    return user


@app.on_event("startup")
async def on_startup():
    if not database.is_connected:
        await database.connect()


@app.on_event("shutdown")
async def on_shutdown():
    if database.is_connected:
        await database.disconnect()
