FROM eclipse-temurin:17.0.4_8-jre-alpine

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /tmp

ARG VERSION="10.0.23"

RUN apk upgrade --update && \
    apk add --update curl && \
    curl -jkSL -o apache-tomcat.tar.gz http://archive.apache.org/dist/tomcat/tomcat-10/v${VERSION}/bin/apache-tomcat-${VERSION}.tar.gz && \
    tar -xzf apache-tomcat.tar.gz -C /opt && \
    ln -s /opt/apache-tomcat-${VERSION} /opt/apache-tomcat && \
    apk del curl && \
    rm -rf * /var/cache/apk/*

ENV CATALINA_HOME="/opt/apache-tomcat"
ENV PATH="$PATH:$CATALINA_HOME/bin"

EXPOSE 8080

ENTRYPOINT [ "catalina.sh" ]

CMD [ "run" ]
