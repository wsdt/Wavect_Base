FROM node:11

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies (copy lock and normal package.json)
COPY package.json ./
COPY ./secrets ./secrets
COPY dist/ dist/
RUN yarn install

# Run npm run prod 
CMD ["node","./dist/server.js"]