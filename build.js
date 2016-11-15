var shjs = require('shelljs');

if (!shjs.which('docker')) {
  shjs.echo('Sorry, this script requires docker.');
  shjs.exit(1);
} else {
  // build all images
  // ubuntu
  shjs.cd('ubuntu-base');
  shjs.exec('node build.js');
  // java
  shjs.cd('../java8-base');
  shjs.exec('node build.js');
  //java
  shjs.cd('../tomcat8-base');
  shjs.exec('node build.js');
}