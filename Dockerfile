FROM node:20-alpine 

WORKDIR /app

COPY package*.json ./
RUN npm install --include=dev

COPY . .

RUN npx prisma generate


RUN npm run build


EXPOSE 3000

CMD [ "npm", "run", "docker:dev" ]