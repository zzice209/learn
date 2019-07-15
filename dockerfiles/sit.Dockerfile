FROM node:8.15.0 as builder

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json Jenkinsfile .babelrc .dockerignore .editorconfig .eslintignore .eslintrc.js .postcssrc.js aws.Jenkinsfile ./

RUN npm install

COPY . .

RUN npm run build:sit
RUN ls -la

FROM nginx:alpine

RUN apk --no-cache add ca-certificates

COPY ./default.conf /etc/nginx/conf.d

COPY --from=builder /app/dist/. /usr/share/nginx/html/
