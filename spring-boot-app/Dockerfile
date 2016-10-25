FROM inpercima/java8-base

MAINTAINER Marcel Jänicke <inpercima@gmail.com>

ADD app.jar /data/app.jar

RUN sh -c 'touch /data/app.jar'

CMD ["java", "-jar", "/data/app.jar"]

EXPOSE 8080