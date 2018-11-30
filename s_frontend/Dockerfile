FROM node:11

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add to path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install && \
	npm install react-scripts -g
	
# start app
CMD ["npm", "run", "start-built"]