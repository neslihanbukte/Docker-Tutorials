FROM node:14
LABEL maintaner="neslihanbukte@outlook.com"
ENV APP_NAME ="Node Js, Dockerfile "
ENV VERSION="v1.0.0"
ENV PORT="9999"

RUN echo "App Name: $APP_NAME"
RUN echo "Port: $PORT"
RUN echo "Version: $VERSION"

VOLUME /tmp

WORKDIR /usr/src/app
#package.json ve package-lock.json copy.
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9999
CMD ["npm","start"] 
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:9999/ || exit 1
