# Job Posting API (Dockerized)

## Quick start (Docker)

1. Copy `.env.example` to `.env` and set `JWT_SECRET`.
2. Build and run with docker-compose:
   ```bash
   docker compose up --build
   ```
3. API will be available at `http://localhost:4000`

## Notes
- MongoDB runs in a separate container and is exposed at `mongodb://mongo:27017/job_postings` inside the compose network.
- The example `docker-compose.yml` also maps mongo port 27017 to the host (for convenience).
