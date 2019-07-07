FROM node:11

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies (copy lock and normal package.json)
COPY package.json ./
COPY ./secrets ./secrets
#COPY dist/ dist/
RUN yarn install --prod

# Run npm run prod
EXPOSE 8090
CMD ["node","./dist/server.js"]
