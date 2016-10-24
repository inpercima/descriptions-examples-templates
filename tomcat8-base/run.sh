#!/bin/sh
docker rm -f inpercima_tomcat8
docker run --name inpercima_tomcat8 -d -i -t -p 8080:8080 inpercima/tomcat8-base