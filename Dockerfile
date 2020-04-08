FROM node:lts

WORKDIR /app


COPY ./package.json .
COPY ./yarn.lock .
RUN yarn
COPY . .
RUN yarn build

RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD yarn start
