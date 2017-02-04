var shjs = require('shelljs');

if (!shjs.which('docker')) {
  shjs.echo('Sorry, this script requires docker.');
  shjs.exit(1);
} else {
  // build all base images
  // ubuntu
  shjs.cd('ubuntu-base');
  shjs.exec('node build.js');
  // alpine
  shjs.cd('../alpine-base');
  shjs.exec('node build.js');
  // java on ubuntu
  shjs.cd('../java8-base');
  shjs.exec('node build.js');
  // tomcat on ubuntu
  shjs.cd('../tomcat8-base');
  shjs.exec('node build.js');
}
