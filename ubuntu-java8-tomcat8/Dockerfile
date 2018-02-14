FROM inpercima/ubuntu-java8

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

WORKDIR /tmp

ARG VERSION="8.5.28"

RUN wget http://archive.apache.org/dist/tomcat/tomcat-8/v$VERSION/bin/apache-tomcat-$VERSION.tar.gz && \
    tar -xzf /tmp/apache-tomcat-$VERSION.tar.gz -C /opt && \
    mv /opt/apache-tomcat-$VERSION /opt/apache-tomcat && \
    rm /tmp/apache-tomcat-$VERSION.tar.gz

ENV CATALINA_HOME="/opt/apache-tomcat"
ENV PATH="$PATH:$CATALINA_HOME/bin"

EXPOSE 8080

ENTRYPOINT [ "catalina.sh" ]

CMD [ "run" ]
