FROM node:18.15.0
WORKDIR /coffeeApp/frontend
COPY ./ ./
WORKDIR /app/frontend/src/
RUN npm i
CMD [ "npm", "run", "dev" ]