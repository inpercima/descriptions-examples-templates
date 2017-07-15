FROM inpercima/java8-base

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

ADD app.jar /data/app.jar

RUN sh -c 'touch /data/app.jar'

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/data/app.jar"]