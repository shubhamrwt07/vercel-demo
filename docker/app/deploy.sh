# Remove all Docker images
docker rmi -f $(docker images -q)

# Tag the latest images as previous
docker tag r_server:latest r_server:previous
docker tag vercel-demo:latest vercel-demo:previous

# Build and run the containers
docker-compose up -d --build