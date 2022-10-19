FROM node:16

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build:all:prod

EXPOSE 3000

CMD ["npm", "run", "server"]
