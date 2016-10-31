#!/bin/sh
# build all images
# ubuntu
cd ubuntu-base
./build.sh

# java
cd ../java8-base
./build.sh

# tomcat
cd ../tomcat8-base
./build.sh