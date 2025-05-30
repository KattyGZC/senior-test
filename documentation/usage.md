# Configuration and usage

## Prerequisites

- Python 3.11
- Docker
- Docker Compose

## Installation

1. Clone the repository
2. Located at the root of the project
3. Run `docker compose up --build`
4. Wait for the containers to start
5. The application will be available at `http://localhost:5173`
6. The API will be available at `http://localhost:8000`

## Migrations and Mock Data

Locate at the root of the project
1. Run data migrations: `docker-compose exec autoparts_backend alembic -c app/infrastructure/db/alembic.ini upgrade head`
2. Fake data: `docker-compose exec autoparts_backend python -m app.infrastructure.db.seed`

## Testing

1. Run tests: `docker-compose exec autoparts_backend pytest`

### API Documentation

1. Swagger: `http://localhost:8000/docs`


