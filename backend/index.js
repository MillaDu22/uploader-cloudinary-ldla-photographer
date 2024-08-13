const { start } = require('ldla-server-uploader-cloudinary');

// Démarre le serveur fourni par le composant //
start({
  port: 3001, // Spécifie le port sur lequel vous voulez démarrer le serveur //
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    },
    corsOptions: {
        origin: '*', // On peut configurer les options CORS ici si nécessaire //
    }
});

// Plus besoin de `app.listen`, car `start` gère le démarrage du serveur //
