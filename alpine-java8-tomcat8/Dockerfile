FROM inpercima/alpine-java8

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /tmp

ARG VERSION="8.5.28"

RUN apk upgrade --update && \
    apk add --update curl && \
    curl -jkSL -o apache-tomcat.tar.gz http://archive.apache.org/dist/tomcat/tomcat-8/v${VERSION}/bin/apache-tomcat-${VERSION}.tar.gz && \
    tar -xzf apache-tomcat.tar.gz -C /opt && \
    ln -s /opt/apache-tomcat-${VERSION} /opt/apache-tomcat && \
    apk del curl && \
    rm -rf * /var/cache/apk/*

ENV CATALINA_HOME="/opt/apache-tomcat"
ENV PATH="$PATH:$CATALINA_HOME/bin"

EXPOSE 8080

ENTRYPOINT [ "catalina.sh" ]

CMD [ "run" ]
