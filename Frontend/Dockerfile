#first stage : build the app
FROM node:22-alpine AS build 

WORKDIR /app

COPY package.json /app/

RUN npm install 

COPY . /app/

RUN npm run build 

#second stage : serve the app

FROM nginx:alpine AS serve 

WORKDIR /app

COPY --from=build /app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx";"-g";"daemen of;" ]