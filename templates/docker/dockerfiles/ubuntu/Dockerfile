FROM ubuntu:22.04

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

ENV DEBIAN_FRONTEND="noninteractive"

RUN echo "Europe/Berlin" > /etc/timezone && \
    apt-get update && \
    apt-get install -y --no-install-recommends apt-utils && \
    apt-get install -y tzdata && \
    rm /etc/localtime && \
    ln -snf /usr/share/zoneinfo/"Europe/Berlin" /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata
