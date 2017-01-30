var shjs = require('shelljs');

shjs.exec('docker pull mysql:5.7');
shjs.exec('docker rm -f mysql5');
shjs.exec('docker run --name mysql5 -d -e MYSQL_ROOT_PASSWORD=password mysql:5.7');
