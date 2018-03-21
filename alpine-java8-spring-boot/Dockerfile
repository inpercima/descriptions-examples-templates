FROM anapsix/alpine-java:8_server-jre_unlimited

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /usr/src/app

COPY app.jar .

RUN sh -c 'touch app.jar'

RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

EXPOSE 8080

ENTRYPOINT [ "java" ]

CMD [ "-jar", "app.jar" ]

HEALTHCHECK --interval=30s --timeout=30s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080 || exit 1
