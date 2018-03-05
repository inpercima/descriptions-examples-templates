# About this - docker
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

This repository is created to learn and work with docker images and containers.
It contains some base images and there Dockerfiles.

# Prerequisites
## Docker
* `docker 17.03.0-ce` or higher

## Optional to run node scripts
* `node 4.4.0` or higher in combination with
  * `npm 4.0.0` or higher or
  * `yarn 1.0.0` or higher, used in this repository

# Getting Started

```
# clone project
git clone https://github.com/inpercima/docker
cd docker
```

# Usage
## Work with docker

```
# build an image e.g. alpine-java8
cd alpine-java8
docker build -t inpercima/alpine-java8 .

# run an image e.g. alpine-java8-spring-boot
cd alpine-java8-spring-boot
docker build -t inpercima/alpine-java8-spring-boot .
docker rm -f inpercima_ajsb
docker run --name inpercima_ajsb -d -it -p 8080:8080 inpercima/alpine-java8-spring-boot
```

## Work with node scripts

```
yarn
# or
npm install

# build an image e.g. alpine-java8
cd alpine-java8
node build.js

# run an image e.g. alpine-java8-spring-boot
cd alpine-java8-spring-boot
node build.js
node run.js
```

## Work with docker-compose
Some images/container can be build with docker-compose to handle the containers, e.g. mysql.

```
# deploy mysql
docker-compose up -d

# undeploy mysql
docker-compose down
```

# Cheat sheet docker
## Introduction
Collection of commands creating/removing docker images and containers and working with them.

## Preparation
To create a image a configuration file (a simple textfile) named `Dockerfile` is needed. Mostly it is in the same directory working on.
This includes commands to build an image.

```
FROM ubuntu:16.04

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

ARG port=80

RUN echo "Europe/Berlin" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

EXPOSE $port

COPY hostfile.txt /file-in-image.txt

ENTRYPOINT ["/path/to/runfile"]

CMD ["/path/to/runfile"]
```

* `FROM` load a base image from the docker hub
* `LABEL maintainer` name the author of the image with contact details
* `ARG` defines a variable for build-time
* `ENV` defines an environment variable 
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
   * `-t` maps the console to the container
* `docker images` list all images
* `docker rmi <IMAGE-ID/NAME>` delete an image

## Containers
* `docker start <CONTAINER-ID/NAME>` starts a container
* `docker stop <CONTAINER-ID/NAME>` stops a container
* `docker logs <CONTAINER-ID/NAME>` gets mapped logs from the container
* `docker inspect <CONTAINER-ID/NAME>` gets some information about the container
* `docker ps -a` list all containers, started and stopped, without `-a` started are listed only
* `docker rm -f <CONTAINER-ID/NAME>` removes a container
   * `-f` removes forced, if the container should be removed while running
* `docker exec -it <CONTAINER-ID/NAME> /bin/bash` interact with the container with a new instance of the shell
   * `-i` interactive container
   * `-t` maps the console to the container
   * to detach use `Ctrl`+`P`+`Q`

# Cheat sheet docker-compose
## Introduction
Collection of commands working with docker containers under docker-compose.

## Preparation
To start with docker-compose an file named `docker-compose.yml` is needed. Mostly it is in the same directory working on.

```
version: "2"
services:
  mysql:
    image: mysql:5.7
    container_name: mysql
    mem_limit: 1g
    ports:
      - "3306:3306"
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=password
    volumes:
      - data-mysql:/var/lib/mysql
    command: mysqld --lower_case_table_names=1 --max_allowed_packet=100M
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin
    mem_limit: 1g
    restart: unless-stopped
    environment:
      - PMA_HOSTS=mysql
    ports:
      - "80:80"
    depends_on:
      - mysql
volumes:
  data-mysql:
```

* `version: "2"` version 2 of docker-compose
* `services` the listes services/containers
* `mysql` the name of one service, e.g. mysql
* `image` the image from the hub wich should be used
* `container_name` name of the created container
* `mem_limit` memory limit
* `ports` bind ports from host to the container
* `restart: unless-stopped` restart service when stopped
* `environment` environment for the container
* `volumes` mapped volume
* `command` comand line
* `depends_on` the service on which this service depends
* `volumes` parallel to `services` created volumes which can mapped
  
## Containers
* `docker-compose up -d` deploy application
* `docker-compose logs -f` analyze logs
* `docker-compose down` undeploy application
