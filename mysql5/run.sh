#!/bin/sh
docker pull mysql:5.6
docker rm -f mysql5
docker run -d --name mysql5 -e "MYSQL_ROOT_PASSWORD=password" mysql:5.6