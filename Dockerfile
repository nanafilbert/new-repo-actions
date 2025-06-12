FROM nginx:alpine

RUN apk update && \
    apk add --no-cache libxml2=2.13.4-r6

COPY . /usr/share/nginx/html
EXPOSE 80
