# mysql-phpmyadmin

This folder contains a suite for working with `mysql` and `phpMyAdmin`.

## Getting started

Create an environment file for `docker` and `docker compose` and check the [configuration](#configuration).

```bash
cp default.env .env
```

**Note**: This file will not be under version control but listed in .gitignore.

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
Use as `project-name` the same name from the configuration `COMPOSE_PROJECT_NAME`.

**Note**: On the first run you need to look into the logs of mysql to get the root password.
The password will not shown again.

```bash
# run compose file
docker compose --project-name "<COMPOSE_PROJECT_NAME>" up -d

# check the log file of the mysql service and search for "GENERATED ROOT PASSWORD" and note this
docker logs <COMMON_PROJECT_NAME>_mysql

# stop compose file
docker compose down
```

## Hints

This compose is created to initialize a database with content from a dump file.
If you do not want this, remove the following lines:

```bash
# line 13
- MYSQL_DATABASE=${COMPOSE_PROJECT_NAME}

# line 26
- ./docker/mysql/dump.sql:/docker-entrypoint-initdb.d/dump.sql
```
