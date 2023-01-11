# Docker

1) container wrap everything tha is need for a program + how to start and run it


From node: alpine -> base image
WORKDIR /app -> set the working directory to '/app' in the container. 
COPY package.json ./ -> copy over only the package.json file
RUN npm install
CMD ["npm", "start"] -> set the command to run when the container start up


docker build

docker run imageName => to build container from image

docker build -t dockerId/projectName:0.0.1 .  => to
 rebuild docker image
docker run image id or image tag

docker run -it dockerId/projectName sh -> to start shell in docker

docker ps =>>print out info about running container

docker exec -it containerid sh => to run shell in running container

docker logs containerid 



# kubernet
It is a tool for running a bunch of different containers
we give it some configuration to describe how we want our container to run and interact with each other

kubectl version

Kubernetes cluster -> A collection of nodes + a master to manage them
Node -> A virtual machine that will run our container
Pod -> a pod can run multiple containers
Deployment -> Monitor a set of pods, make sure they are running and restrats them if they crash
Service -> provide an easy to remember URL to access a running container

Kubernets confg files


kubectl apply -f posts.yml => to run kubernet config file

kubectl get pods ->> to check pods created

kubectl exec -it [pod_name] [cmd] => running command
kubectl logs [pod_name]
kubectl delete pod [pod_name]
kubectl apply -f [config file name] => tell kubernetes to process the config file
kubectl describe pod [pod_name] => provide info about running pod



