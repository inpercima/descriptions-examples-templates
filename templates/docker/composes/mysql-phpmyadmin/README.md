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
* [MYSQL_PORT](#mysql_port)
* [MYSQL_USER](#mysql_user)
* [MYSQL_VERSION](#mysql_version)
* [PHPMYADMIN_PORT](#phpmyadmin_port)
* [PHPMYADMIN_VERSION](#phpmyadmin_version)

### `COMPOSE_PROJECT_NAME`

Defines a global name for the compose project used for the container and the database

* default: `common`
* type: `string`

### `MYSQL_PASSWORD`

Defines the password for mySQL

* default: `mysql`
* type: `string`

### `MYSQL_PORT`

Defines the port for mySQL

* default: `3306`
* type: `string`

### `MYSQL_USER`

Defines the user for mySQL

* default: `mysql`
* type: `string`

### `MYSQL_VERSION`

Defines the version for mySQL

* default: `8.0.30`
* type: `string`

### `PHPMYADMIN_PORT`

Defines the port for phpMyAdmin

* default: `80`
* type: `string`

### `PHPMYADMIN_VERSION`

Defines the version for phpMyAdmin

* default: `5.2.0`
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
docker compose --project-name "<COMPOSE_PROJECT_NAME>" down
```

## Hints

This compose is created to initialize a database with the name of `COMPOSE_PROJECT_NAME` and content from a dump file (`dump.sql`).
If you want to use it, update the dump file with your content.

If you do not want this, remove the dump file and following lines from the compose file:

```bash
# line 13
- MYSQL_DATABASE=${COMPOSE_PROJECT_NAME}

# line 26
- ./dump.sql:/docker-entrypoint-initdb.d/dump.sql
```
