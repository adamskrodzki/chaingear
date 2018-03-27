# chaingear-api

#### build and run container
   docker build -t cybernode/chaingear-api -f devops/Dockerfile ./
   
   docker run --name chaingear-api -p 8000:8090 -d cybernode/chaingear-api