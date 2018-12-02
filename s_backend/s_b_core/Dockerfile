FROM node:11

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies (copy lock and normal package.json)
COPY package*.json ./
RUN npm install --only=production

# Bundle app source (copy everything)
COPY . .

# Run npm run prod 
CMD ["npm", "run","start-built"]