# Steps for docker

1- create a Dockerfile and .dockerignore
2- follow steps required for docker
3- Save the file and go to command
4- docker build -t akumar/angular-app .
5- docker images
6- docker run -d -it -p 4201:80/tcp --name angular-app akumar/angular-app:latest
7- docker ps -a

## Note to remove image or container
1- docker rm image/container id