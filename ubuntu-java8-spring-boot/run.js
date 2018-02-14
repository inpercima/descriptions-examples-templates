var shjs = require('shelljs');

shjs.exec('docker rm -f inpercima_ujsb');
shjs.exec('docker run --name inpercima_ujsb -d -it -p 8080:8080 inpercima/ubuntu-java8-spring-boot');
