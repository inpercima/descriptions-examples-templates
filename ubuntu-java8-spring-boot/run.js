var lightjs = require('light-js');

lightjs.exec('docker', 'container rm -f inpercima_ujsb');
lightjs.exec('docker', 'container run --name inpercima_ujsb -d -it -p 8080:8080 inpercima/ubuntu-java8-spring-boot');
