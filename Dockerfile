FROM node:18-slim

# Define o diretório de trabalho dentro do container
WORKDIR /INFRAPDV

# Copia apenas os arquivos de dependências
COPY package.json package-lock.json ./

# Instala apenas dependências de produção
RUN npm install --production

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta que a aplicação usa
EXPOSE 3005

# Comando para iniciar a aplicação
CMD ["node", "app.js"]