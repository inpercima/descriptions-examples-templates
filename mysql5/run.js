var shjs = require('shelljs');

shjs.exec('docker pull mysql:5.6');
shjs.exec('docker rm -f mysql5');
shjs.exec('docker run -d --name mysql5 -e "MYSQL_ROOT_PASSWORD=password" mysql:5.6');
