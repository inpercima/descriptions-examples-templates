# docker

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

This repository is created to learn and work with docker images and containers.
It contains some base Dockerfiles and examples.
The repository is more a template and the individual files can be used in other projects.

## Prerequisites

### Docker

* `docker 20.10.17` or higher

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/start-with-docker
cd start-with-docker
```

## Usage

### Using docker

```bash
# build an image e.g. alpine3-eclipse-temurin-java17
cd alpine3-eclipse-temurin-java17
docker image build -t inpercima/alpine3-eclipse-temurin-java17 .

# run an image e.g. alpine3-eclipse-temurin-java17-spring-boot
cd alpine3-eclipse-temurin-java17-spring-boot
docker image build -t inpercima/alpine3-eclipse-temurin-java17-spring-boot .
docker container rm -f inpercima_ajsb
docker container run --name inpercima_ajsb -d -it -p 8080:8080 inpercima/alpine3-eclipse-temurin-java17-spring-boot
```

### Using docker compose

Some images/container can be build with docker compose to handle the containers, e.g. `mysql-phpmyadmin` under `composes`.

```bash
# deploy mysql
docker compose up -d

# undeploy mysql
docker compose down
```

## Cheat sheet docker

### Introduction

Collection of commands creating/removing docker images and containers and working with them.

### Preparation

To create a image a configuration file (a simple textfile) named `Dockerfile` is needed.
Mostly it is in the same directory working on.
This includes commands to build an image.

```bash
FROM ubuntu:22.04

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /usr/src/app

ARG port=80

RUN echo "Europe/Berlin" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

EXPOSE $port

COPY hostfile.txt /file-in-image.txt

ENTRYPOINT ["/path/to/runfile"]

CMD ["/path/to/runfile"]

HEALTHCHECK --interval=30s --timeout=30s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080 || exit 1
```

* `FROM` load a base image from the docker hub
* `LABEL maintainer` name the author of the image with contact details
* `WORKDIR` set a path as workdir
* `ARG` defines a variable for build-time
* `ENV` defines an environment variable
* `RUN` run a command in the image, use a separate line for each command with `&& \`
* `EXPOSE` define a port the container listen
* `COPY` copy files or directory from the host system into the image
* `ENTRYPOINT` defines a file which run with the container
* `CMD` defines a file which run with the container
* `HEALTHCHECK` integrate a check to an app

### Images

* `docker image build -t <NAME> /path/to/Dockerfile` creates a docker image
  * `-t <NAME>` name the image
  * `/path/to/Dockerfile` the location of the Dockerfile, is it in the same directory `/path/Dockerfile` can replaced with `.`
* `docker image ls -a` list images
  * `-a` list all, includes intermediate images
* `docker image rm <IMAGE-ID/NAME>` removes an image

### Containers

* `docker container run -it -d -p 8080:8081 <IMAGE-ID/NAME>` run a docker container
  * `-i` starts the images as an interactive container
  * `-d` starts the images as an deamon container
  * `-p <PORTS>` bind ports from host to the container
  * `-t` maps the console to the container
* `docker container start <CONTAINER-ID/NAME>` starts a container
* `docker container stop <CONTAINER-ID/NAME>` stops a container
* `docker container logs <CONTAINER-ID/NAME>` gets mapped logs from the container
* `docker container inspect <CONTAINER-ID/NAME>` gets some information about the container
* `docker container pause <CONTAINER-ID/NAME>` pause all processes
* `docker container unpause <CONTAINER-ID/NAME>` unpause all processes
* `docker container ls -a` list containers
  * `-a` list all, includes stopped
* `docker rm -f <CONTAINER-ID/NAME>` removes a container
  * `-f` removes forced, if the container should be removed while running
* `docker exec -it <CONTAINER-ID/NAME> /bin/bash` interact with the container with a new instance of the shell
  * `-i` interactive container
  * `-t` maps the console to the container
  * to detach use `Ctrl`+`P`+`Q`

### System

* `docker system df` shows size of images, containers and volumes

## Cheat sheet docker compose

### Introduction docker compose

Collection of commands working with docker containers under docker compose.

### Preparation docker compose

To start with docker compose an file named `docker-compose.yml` is needed.
Mostly it is in the same directory working on.

```bash
version: "3.8"
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

* `version: "3.8"` file version of docker compose
* `services` the listes services/containers
* `mysql` the name of one service, e.g. mysql
* `build` used if the image should build from a Dockerfile like `build: .`
* `image` the image from the hub which should be used or the name if build is used
* `container_name` name of the created container
* `mem_limit` memory limit
* `ports` bind ports from host to the container
* `restart: unless-stopped` restart service when stopped
* `environment` environment for the container
* `volumes` mapped volume
* `command` comand line
* `depends_on` the service on which this service depends
* `volumes` parallel to `services` created volumes which can mapped

### Containers docker compose

* `docker compose build` build images
* `docker compose up -d` deploy application
* `docker compose up -d --build` deploy application and rebuild
* `docker compose logs -f` analyze logs
* `docker compose down` undeploy application
