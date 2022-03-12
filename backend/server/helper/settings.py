from pydantic import BaseSettings


class Settings(BaseSettings):
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    database_url: str
    secret: str
    frontend_url: str


settings = Settings()
