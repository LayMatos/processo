# No estágio de construção do React
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build  # Gera os arquivos em /app/dist

# No estágio final com o Nginx
FROM nginx:alpine

# Remove as configurações padrão do Nginx
RUN rm -rf /etc/nginx/conf.d

# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d

# Copia os arquivos do build para o diretório de HTML do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 8080

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
