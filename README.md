PROJECT NAME: Backlog Replicate

DESCRIPTION: Create backlog replicate using NextJS and multiple BE Frameworks (Laravel, RoR, NestJS)

WIREFRAME: backlog site

## Stack

### FE

-   NextJS v14.2.3
-   Redux Toolkit

### BE

-   Laravel 10.48.10
-   RoR
-   NestJS (To Follow)

### Tools

-   Docker
-   TypeScript
-   ESLint
-   Makefile

## Getting Started (Quick Guide)

### 1. Clone repository in your local

```
git clone https://github.com/ragg09/backlog-replicate.git

```

### 2. Create .env file for all frameworks & install vendor | node modules.

```
make env
make vendor-and-node-modules
```

### 3. Add Database Credentials

_For Laravel_

update the `DB_` variables part. To add the mysql credentials pleaser refer from
`docker-compose.yml`.

```
DB_CONNECTION=mysql
DB_HOST=backlog-replicate-database
DB_PORT=3306
DB_DATABASE=<placeholder>
DB_USERNAME=<placeholder>
DB_PASSWORD=<placeholder>
```

### 4. Build the docker container & configuration

```
make setup
```

### 5. Visit the NextJs in browser

```
http://localhost:3000
```
