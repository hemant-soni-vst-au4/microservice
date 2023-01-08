# Docker

1) container wrap everything tha is need for a program + how to start and run it


From node: alpine -> base image
WORKDIR /app -> set the working directory to '/app' in the container. 
COPY package.json ./ -> copy over only the package.json file
RUN npm install
CMD ["npm", "start"] -> set the command to run when the container start up


docker build

docker run imageName => to build container from image

docker build -t dockerId/projectName .  => to

docker run image id or image tag

docker run -it dockerId/projectName sh -> to start shell in docker

docker ps =>>print out info about running container

docker exec -it containerid sh => to run shell in running container

docker logs containerid 



# kubernet
It is a tool for running a bunch of different containers
we give it some configuration to describe how we want our container to run and interact with each other

