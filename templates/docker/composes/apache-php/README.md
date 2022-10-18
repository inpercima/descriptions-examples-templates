# apache-php

## Getting started

In this folder exists a `docker-compose.yml` file and an `.env` file to use for your projects.
Update the `.env` file for your system.

## Configuration

### Table of contents

* [APACHE_PORT](#apache_port)
* [MODE](#mode)

### `APACHE_PORT`

Defines the port for apache.

* default: `80`
* type: `string`

### `MODE`

Defines the mode in which the backend should be started.
Valid values are `dev` and `prod`.

* default: `dev`
* type: `string`

## Usage

To work with the compose file use following commands.
Use as `<COMPOSE_PROJECT_NAME>` a meaningful value.

```bash
# run compose file
docker compose --project-name "<COMPOSE_PROJECT_NAME>" up -d

# stop compose file
docker compose --project-name "<COMPOSE_PROJECT_NAME>" down
```
