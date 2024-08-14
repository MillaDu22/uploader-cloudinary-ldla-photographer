const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { start } = require('ldla-server-uploader-cloudinary');

const app = express();
app.use(cors({
    origin: 'http://localhost:3001', // Remplacez par l'origine de votre front-end si nécessaire
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// Démarre le serveur fourni par le composant //
start({
    port: process.env.PORT || 3001, 
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        url: process.env.CLOUDINARY_URL,
        secure: true
    },
    corsOptions: {
        origin: '*', // On peut configurer les options CORS ici si nécessaire //
        methods: ['GET', 'POST', 'DELETE'], // Méthodes autorisées //
        allowedHeaders: ['Content-Type', 'Authorization'] // En-têtes autorisés //
    }
});

// Plus besoin de `app.listen`, car `start` gère le démarrage du serveur //
