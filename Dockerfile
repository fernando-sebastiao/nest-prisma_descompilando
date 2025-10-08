# syntax=docker/dockerfile:1

FROM node:22.17.0

WORKDIR /NEST-PRISMA

COPY . .

RUN rm -rf node_modules

RUN npm install

CMD ["npm", "run", "start:dev"]

EXPOSE 4000