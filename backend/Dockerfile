# Utiliser Ubuntu 14.04 car Node.js 0.12.18 ne fonctionne pas avec des versions récentes
FROM ubuntu:14.04

# Mettre à jour les paquets et installer les dépendances nécessaires
RUN apt-get update && apt-get install -y curl build-essential

# Installer NVM (Node Version Manager)
ENV NVM_DIR=/root/.nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Installer Node.js 0.12.18 via NVM
RUN bash -c ". $NVM_DIR/nvm.sh && nvm install 0.12.18 && nvm alias default 0.12.18 && nvm use 0.12.18"

# Définir le chemin vers Node et NPM
ENV PATH=$NVM_DIR/versions/node/v0.12.18/bin:$PATH

# Vérifier l'installation de Node.js et npm
RUN node -v && npm -v

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du backend
COPY . .

# Installer les dépendances du projet (utiliser bash pour sourcer nvm correctement)
RUN bash -c ". $NVM_DIR/nvm.sh && npm install"

# Exposer le port du backend
EXPOSE 3030

# Lancer le serveur Node.js
CMD ["bash", "-c", ". $NVM_DIR/nvm.sh && node server.js"]
