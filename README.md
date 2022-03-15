# Blog

A simple blog and profile site for RISTEK's Web Development assignment. This repository contains
both backend and frontend. Below is the guide to set up. It is assumed to be running in a Linux
machine. Though Windows should run just fine.

# Requirements

-   Python 3.9
-   Poetry
-   Node 14.x
-   Yarn
-   SQLAlchemy supported database such as Postgres and SQLite\*.

\* SQLite requires a removal in code for the backend to load. Will be explained later.

## Backend Setup

-   Open up your favorite terminal
-   Install all dependencies using the following command:

```bash
$ poetry install
```

-   Copy `.env.example` to `.env` and simply change the variables.
-   Run initial database migration:

```bash
$ poetry run alembic upgrade head
# or
$ poetry shell
$ alembic upgrade head
```

-   **For SQLite:** Remove `max_size` keyword args on `backend/server/helper/database.py` before running.
-   Run the app!

```bash
$ poetry run uvicorn server.app:app
# or
$ poetry shell
$ uvicorn server.app:app
```

## Frontend setup

-   Install all dependencies

```bash
$ yarn
```

-   Copy `.env.example` to `.env`, and change according to the URL to backend.
-   Run it in development or in production mode.

```bash
$ yarn dev
# Production below
$ yarn build
$ yarn start
```

## Initial setup

First user that registers will always be admin. Everybody after that will be regular user.
So register yourself after deploy.

That's all!
