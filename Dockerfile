#============
FROM node:lts-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


#================
FROM nginx:alpine

COPY --from=build /usr/local/app/dist/tech-hire /usr/share/nginx/html

EXPOSE 8080