FROM node:11
WORKDIR /app

# Install app dependencies (copy lock and normal package.json)
COPY package*.json ./

RUN npm install --only-production && \
	npm run build

# Run npm run prod 
CMD ["npm", "run","start-built"]