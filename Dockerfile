# Stage 1 — Build Angular
FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Stage 2 — NGINX
FROM nginx:alpine

# Remove conteúdo padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia build Angular correto
COPY --from=build /app/dist/projeto-angular/browser /usr/share/nginx/html
