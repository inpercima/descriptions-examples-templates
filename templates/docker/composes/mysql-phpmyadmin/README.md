# mysql-phpmyadmin

## Getting started

In this folder exists a `docker-compose.yml` file and an `.env` file to use for your projects.
Update the `.env` file for your system.

## Configuration

### Table of contents

* [COMPOSE_PROJECT_NAME](#compose_project_name)
* [MYSQL_PASSWORD](#mysql_password)
* [MYSQL_USER](#mysql_user)
* [MYSQL_VERSION](#mysql_version)
* [PHPMYADMIN_PORT](#phpmyadmin_port)
* [PHPMYADMIN_VERSION](#phpmyadmin_version)

### `COMPOSE_PROJECT_NAME`

Defines a global name for the compose project used for the container

* default: `EMPTY
* type: `string`

### `MYSQL_PASSWORD`

Defines the password for mySQL

* default: `EMPTY
* type: `string`

### `MYSQL_USER`

Defines the user for mySQL

* default: EMPTY
* type: `string`

### `MYSQL_VERSION`

Defines the version for mySQL

* default: EMPTY
* type: `string`

### `PHPMYADMIN_PORT`

Defines the port for phpMyAdmin

* default: EMPTY
* type: `string`

### `PHPMYADMIN_VERSION`

Defines the version for phpMyAdmin

* default: EMPTY
* type: `string`

## Usage

To work with the compose file use following commands.
Use as project-name the same name from the configuration `COMPOSE_PROJECT_NAME`.

```bash
# run compose file
docker compose --project-name "<COMPOSE_PROJECT_NAME>" up -d

# stop compose file
docker compose down
```
