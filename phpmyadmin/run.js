var shjs = require('shelljs');

shjs.exec('docker pull phpmyadmin/phpmyadmin');
shjs.exec('docker rm -f phpmyadmin');
shjs.exec('docker run --name phpmyadmin -d --link mysql5:mysql -p 80:80 phpmyadmin/phpmyadmin');
