FROM node:18-alpine
WORKDIR /Users/bouzdi/Dev/powercat
COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./
COPY package.json ./
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "-s", "build"]