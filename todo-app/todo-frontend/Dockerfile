FROM node:16 AS build-stage

ENV REACT_APP_BACKEND_URL=http://localhost:3000
ENV CI=TRUE

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

RUN npm run test

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html