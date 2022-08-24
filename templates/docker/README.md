# Templates docker

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

This folder contains some base Dockerfiles and examples.

## Prerequisites

### Docker

* `docker 20.10.17` or higher
* `docker compose 2.10.0` or higher

## Usage

### Using docker

```bash
# build an image e.g. alpine3-eclipse-temurin-java17
cd dockerfiles/alpine3-eclipse-temurin-java17
docker image build -t inpercima/alpine3-eclipse-temurin-java17 .

# run an image e.g. alpine3-eclipse-temurin-java17-spring-boot
cd dockerfiles/alpine3-eclipse-temurin-java17-spring-boot
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
