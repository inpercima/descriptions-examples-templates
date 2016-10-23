FROM inpercima/ubuntu-base

MAINTAINER Marcel Jänicke <inpercima@gmail.com>

RUN apt-get update && \
    apt-get install -y  software-properties-common && \
    add-apt-repository ppa:webupd8team/java && \
    apt-get update && \
    # automatically accept oracle license
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections &&\
    apt-get install -y oracle-java8-installer && \
    apt-get clean

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV PATH $PATH:$JAVA_HOME/bin