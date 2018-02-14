FROM inpercima/ubuntu-java8

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /usr/src/app

COPY app.jar .

RUN sh -c 'touch app.jar'

EXPOSE 8080

ENTRYPOINT [ "java" ]

CMD [ "-jar", "app.jar" ]
