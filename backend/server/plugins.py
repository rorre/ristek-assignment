from datetime import timedelta

from fastapi_login import LoginManager

from server.helper.settings import settings
from server.models import User

manager = LoginManager(
    settings.secret,
    "/auth/login",
    use_cookie=True,
    use_header=False,
    default_expiry=timedelta(hours=24),
)


@manager.user_loader()  # type: ignore
async def get_user(identifier):
    return await User.objects.get_or_none(**identifier)
