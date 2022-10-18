# Templates docker

This folder contains some base Dockerfiles and examples.

## Prerequisites

### Docker

* `docker 20.10.17` or higher

## Usage

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
