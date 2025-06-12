#Dockerfile
FROM nginx:1.28.0-alpine3.21-slim
COPY . /usr/share/nginx/html
EXPOSE 80

#dockerfile reference
#.....