# FROM which image
FROM node:20

# set working dir to "app" folder in container
WORKDIR /app

# copy package.json package-lock.json only
COPY app/package*.json ./

# run npm ci for production
RUN npm ci --omit=dev --ignore-scripts

# COPY the rest of the app
COPY --chown=node:node app/ .

# use "node" user
USER node

# expose app on port 3000
EXPOSE 3000

# run the node app using index.js
CMD ["node", "index.js"]
