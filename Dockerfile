FROM node:alpine

RUN addgroup app && adduser -S -G app frontend
USER frontend

WORKDIR /app
COPY package*.json . 
COPY *.config.*s .

USER root
RUN chown -R frontend:app .
USER frontend
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]