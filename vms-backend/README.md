# Vehicle Management System (Backend)

## Description

Vehicle management system's backend including API and Database setup. The portion handles the requests from the frontend using `Nest.js` [src/] and stores it in a `MySQL`[data/] database.

## Installation

```bash
$ pnpm install
```

## Pre-requisites

You will need to install `docker` to run the MySQL database container.

Also, you need to setup environment variables for the server and Docker.
Use the `.env.example` and `data/docker.env.example` files respectively

## Running the app

1. Setup the Database Container:

```bash
$ pnpm db:up
```

2. Run Development Server:

```bash
$ pnpm start:dev
```

Alternatively you can run the below command to run the server

```bash
$ pnpm start
```

3. Perform tests on the server:

```bash
$ pnpm test
```

4. Once done checking, close the development server using `Ctrl + C`
   Also shutdown the docker instances using the command:

```bash
$ pnpm db:down
```

This will shutdown the instances as well as remove the volume instances created by `Docker`.

## Stay in touch

- Author - [Ashriel Waghmare](https://rielash24.github.io/)

## License

This project is [Apache 2.0 licensed](LICENSE).
