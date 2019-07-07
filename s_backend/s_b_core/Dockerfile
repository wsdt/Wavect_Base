FROM node:11 as builder

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies (copy lock and normal package.json)
COPY package.json ./
COPY ./secrets ./secrets
#COPY dist/ dist/
RUN yarn install
RUN  yarn start build

# Run npm run prod
EXPOSE 8090
CMD ["node","./dist/server.js"]
