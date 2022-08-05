# load node version
FROM node:erbium-alpine

# create app dir
WORKDIR /opt/hello-node

# install dependencies
COPY package*.json ./
RUN npm install

#bundle everything
COPY . .

EXPOSE 9443
CMD ["npm", "start"]
