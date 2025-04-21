# Utilisation de l'image stable d'Nginx basée sur Alpine
FROM nginx:stable-alpine

# Définir le répertoire de travail
WORKDIR /usr/share/nginx/html

# Copier le répertoire 'client/' contenant l'application Angular dans le répertoire de travail Nginx
COPY client/ .

# Supprimer le fichier de configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copier le fichier de configuration personnalisé de Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Exposer le port 80 pour le serveur Nginx
EXPOSE 80

# Démarrer Nginx en mode démon off (pour le conteneur)
CMD ["nginx", "-g", "daemon off;"]
