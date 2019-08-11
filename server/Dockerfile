FROM node:latest
WORKDIR /code
COPY package.json package.json
RUN yarn
COPY . .
CMD ["yarn", "start"]
