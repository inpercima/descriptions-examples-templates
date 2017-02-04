var shjs = require('shelljs');

shjs.exec('docker rm -f inpercima_sba');
shjs.exec('docker run --name inpercima_sba -d -it -p 8080:8080 inpercima/spring-boot-app');
