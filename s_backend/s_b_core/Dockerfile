FROM node:11

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies (copy lock and normal package.json)
COPY package*.json ./ 
COPY dist/ dist/
RUN npm install --only=production


# Run npm run prod 
CMD ["npm", "run","start-built"]