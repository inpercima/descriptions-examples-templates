var shjs = require('shelljs');

shjs.exec('docker rm -f inpercima_tomcat8');
shjs.exec('docker run --name inpercima_tomcat8 -d -it -p 8080:8080 inpercima/tomcat8-base');
