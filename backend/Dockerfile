# Utilisation d'une ancienne version de Node.js compatible
FROM node:0.12

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du backend
COPY package.json ./
COPY server.js ./
COPY server ./server

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par l'application
EXPOSE 3030

# Commande de démarrage
CMD ["node", "server.js"]
