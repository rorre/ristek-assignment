from pydantic import BaseSettings, root_validator


class Settings(BaseSettings):
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    database_url: str
    secret: str
    frontend_url: str

    @root_validator
    def _fix_postgres_url_heroku(cls, values):
        db_url = values.get("database_url", None) or values.get("DATABASE_URL", None)
        if db_url.startswith("postgres://"):
            values["database_url"] = db_url.replace("postgres://", "postgresql://", 1)
        return values


settings = Settings()
