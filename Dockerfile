FROM alpine:3.12

RUN apk update && apk add libxml2=2.9.10-r6
