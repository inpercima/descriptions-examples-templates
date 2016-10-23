FROM inpercima/java8-base

MAINTAINER Marcel Jänicke <inpercima@gmail.com>

ARG version=8.0.38

RUN cd /tmp && \
    wget http://artfiles.org/apache.org/tomcat/tomcat-8/v$version/bin/apache-tomcat-$version.tar.gz && \
    tar xzf /tmp/apache-tomcat-$version.tar.gz -C /opt && \
    mv /opt/apache-tomcat-$version /opt/apache-tomcat && \
    rm /tmp/apache-tomcat-$version.tar.gz

ENV CATALINA_HOME /opt/apache-tomcat
ENV PATH $PATH:$CATALINA_HOME/bin

EXPOSE 8080

CMD ["catalina.sh", "run"]