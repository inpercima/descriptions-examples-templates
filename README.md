# About this
This repository is created to learn and work with docker images and containers.
It contains some base images and there Dockerfiles to work with them.

# Repository basics
## Build and run a image
You will need node/npm to run the scripts.

    git clone https://github.com/inpercima/docker
    cd docker
    # install dependencies
    npm install
    # build all images
    node build.js

# Cheat sheet
## Introduction
Collection of commands creating/removing docker images and containers and working with them.

## Preparation
To create a image a configuration file (a simple textfile) named `Dockerfile` is needed. Mostly it is in the same directory working on.
This includes commands to build an image.

    FROM ubuntu:16.04

    MAINTAINER Marcel Jänicke <inpercima@gmail.com>

    ARG port=80

    RUN echo "Europe/Berlin" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

    EXPOSE $port

    COPY hostfile.txt /file-in-image.txt

    ENTRYPOINT ["/path/to/runfile"]

    CMD ["/path/to/runfile"]

* `FROM` load a base image from the docker hub
* `MAINTAINER` name the author with contact of the image
* `ARG` defines a variable for build-time
* `RUN` run a command in the image, use a separate line for each command with `&& \`
* `EXPOSE` define a port the container listen
* `COPY` copy files or directory from the host system into the image
* `ENTRYPOINT` defines a file which run with the container
* `CMD` defines a file which run with the container

## Images
* `docker build -t <NAME> /path/to/Dockerfile` creates a docker image
 * `-t <NAME>` name the image
 * `/path/to/Dockerfile` the location of the Dockerfile, is it in the same directory `/path/Dockerfile` can replaced
with `.`

* `docker run -it -d -p 8080:8081 <IMAGE-ID/NAME>` run a docker image
 * `-i` starts the images as an interactive container
 * `-d` starts the images as an deamon container
 * `-p <PORTS>` bind ports from host to the container
 * `-t` maps the console to to the container
* `docker images` list all images
* `docker rmi <IMAGE-ID/NAME>` delete an image

## Containers
* `docker start <CONTAINER-ID/NAME>` starts a container
* `docker stop <CONTAINER-ID/NAME>` stops a container
* `docker logs <CONTAINER-ID/NAME>` gets mapped logs from the container
* `docker inspect <CONTAINER-ID/NAME>` gets some information about the container
* `docker ps -a` list all containers, started and stopped, without ``-a` stared are listed only
* `docker rm -f <CONTAINER-ID/NAME>` removes a container
 * `-f` removes forced, if the container should be removed while running
* `docker exec -it <CONTAINER-ID/NAME> /bin/bash` interact with the container with a new instance of the shell
 * `-i` interactive container
 * `-t` maps the console to to the container
 * to detach use `Ctrl`+`P`+`Q`