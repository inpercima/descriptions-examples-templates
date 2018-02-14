FROM inpercima/ubuntu

LABEL maintainer="Marcel Jänicke <inpercima@gmail.com>"

RUN apt-get update && \
    apt-get install -y  software-properties-common && \
    add-apt-repository ppa:webupd8team/java && \
    # automatically accept oracle license
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer

ENV JAVA_HOME="/usr/lib/jvm/java-8-oracle"
ENV PATH="$PATH:$JAVA_HOME/bin"
