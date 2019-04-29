# Poket token creator

> A lightweight OAuth integration with the Pocket API

## Setup

Pre-requisites:

- Docker for Desktop

Run `docker-compose up` in the root of the project.

It will bring up Postgres and the Express application server in development mode.

It binds the application server to `localhost:3000`, this can be re-mapped this by changing the first 3000 in `3000:3000` of [./docker-compose.yaml](./docker-compose.yaml)).

The default Docker `CMD` is `npm start`, [./docker-compose.yaml](./docker-compose.yaml) overrides this to `npm run dev` which runs the application using nodemon (auto-restart on file change).


## Express API setup

The Express API is located in [./src/api](./src/api).

Applications routes for resources are defined in [./src/api/index.js](./src/api/index.js).

Global concerns like security, cookie parsing, body parsing and request logging are handled in [./server.js](./server.js).

This application loosely follows the [Presentation Domain Data Layering](https://www.martinfowler.com/bliki/PresentationDomainDataLayering.html):

- Presentation is dealt with in the `./src/api` folder
- Domain is dealt with in the `./src/modules` folder.
