REM build all images
REM ubuntu
cd ubuntu-base
call build.cmd

REM java
cd ../java8-base
call build.cmd

REM tomcat
cd ../tomcat8-base
call build.cmd