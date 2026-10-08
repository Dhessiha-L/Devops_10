# Real Estate Dashboard – Exercise 10 (One Screen)

This is a reduced version of the Real Estate Dashboard containing one screen only: **Project Dashboard**.
It is prepared for the lab exercise **Building, Running and Publishing a Full Stack Application in Docker Hub**.

## Stack
- React + Vite frontend
- Node.js + Express backend
- MySQL database
- Docker + Docker Compose

## Run locally with Docker

### Step 1: Create Dockerfiles
Dockerfiles are already included in `frontend/` and `backend/`.

### Step 2: Create .dockerignore
`.dockerignore` files are already included in both application folders.

### Step 3: Build Docker Images
```bash
docker compose build
```

### Step 4: Run Containers Locally
```bash
docker compose up -d
```
Open: http://localhost:8080

API health check: http://localhost:4000/api/health

### Step 5: Push Project to GitHub
```bash
git init
git add .
git commit -m "Real Estate Docker Lab"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

### Step 6: Push Images to Docker Hub
```bash
docker login
docker tag realestate-ex10-one-screen-backend:latest YOUR_DOCKERHUB_USERNAME/realestate-backend:v1
docker push YOUR_DOCKERHUB_USERNAME/realestate-backend:v1
docker tag realestate-ex10-one-screen-frontend:latest YOUR_DOCKERHUB_USERNAME/realestate-frontend:v1
docker push YOUR_DOCKERHUB_USERNAME/realestate-frontend:v1
```

### Step 7: Testing and Validation
```bash
docker compose ps
docker compose logs backend
curl http://localhost:4000/api/health
```
Then open `http://localhost:8080` and verify the Project Dashboard loads with project records from MySQL.

## Stop
```bash
docker compose down
```
To also remove the database volume:
```bash
docker compose down -v
```
