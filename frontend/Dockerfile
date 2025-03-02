FROM nginx:alpine

# Copier le contenu du frontend dans nginx
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
