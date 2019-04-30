# Express Nunjucks TailwindCSS 

> A starter project with Express, Nunjucks and TailwindCSS

## Setup

Pre-requisites:

- Docker for Desktop

Run `docker-compose up` in the root of the project.

It will bring up Postgres and the Express application server in development mode.

It binds the application server to `localhost:3000`, this can be re-mapped this by changing the first 3000 in `3000:3000` of [./docker-compose.yaml](./docker-compose.yaml)).

The default Docker `CMD` is `npm start`, [./docker-compose.yaml](./docker-compose.yaml) overrides this to `npm run dev` which runs the application using nodemon (auto-restart on file change).


## Express setup

The Express "page" resources are located in [./src/pages](./src/pages).

Their corresponding Nunjucks templates are in [./src/views](./src/views).

Applications routes for pages are defined in [./src/router.js](./src/router.js).

Global concerns like security, cookie parsing, body parsing and request logging are handled in [./server.js](./server.js).

This application loosely follows the [Presentation Domain Data Layering](https://www.martinfowler.com/bliki/PresentationDomainDataLayering.html):

- Data Presentation is dealt with in the `./src/pages` folder
- Domain is dealt with in the `./src/modules` folder.
