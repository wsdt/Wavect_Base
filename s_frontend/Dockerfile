FROM node:11
WORKDIR /app

# Install app dependencies (copy lock and normal package.json)
COPY package*.json ./ && \
	dist/ dist/

RUN npm install --only-production

# Run npm run prod 
CMD ["npm", "run","start-built"]