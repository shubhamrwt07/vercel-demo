docker rmi -f $(docker images -q)
docker tag r_server:latest r_server:previous
docker tag vercel-demo:latest vercel-demo:previous
# docker tag rowthtechadmin:latest rowthtechadmin:previous
docker-compose up -d --build
