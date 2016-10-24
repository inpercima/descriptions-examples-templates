#!/bin/sh
# create all necessary images
# ubuntu
cd ubuntu-base
sh build.sh

# java
cd ../java8-base
sh build.sh

# tomcat
cd ../tomcat8-base
sh build.sh