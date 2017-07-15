FROM inpercima/java8-base

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

ARG version=8.5.16

RUN cd /tmp && \
    wget http://archive.apache.org/dist/tomcat/tomcat-8/v$version/bin/apache-tomcat-$version.tar.gz && \
    tar xzf /tmp/apache-tomcat-$version.tar.gz -C /opt && \
    mv /opt/apache-tomcat-$version /opt/apache-tomcat && \
    rm /tmp/apache-tomcat-$version.tar.gz

ENV CATALINA_HOME /opt/apache-tomcat
ENV PATH $PATH:$CATALINA_HOME/bin

EXPOSE 8080

ENTRYPOINT ["catalina.sh", "run"]