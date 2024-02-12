const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const cardController = require('./controllers/cardController');
const userController = require('./controllers/userController');

const app = express(); // Création de l'application Express

// Configuration de bodyParser pour analyser les données JSON et les données de formulaire
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route GET pour la page d'accueil
app.get('/', (req, res) => {
    // Affichage des en-têtes de requête pour le débogage (à retirer en production)
    console.log("Headers YO:", req.headers);
    res.send('<h1>Welcome to Pokendode</h1>');
});

// Route POST pour ajouter des données
app.post('/cards', cardController.postCards);
app.get('/cards',  cardController.getCards)
app.get('/cards/:id', cardController.getCard)
app.delete('/cards/:id', cardController.deleteCard);
app.put('/cards/:id', cardController.updateCard);

app.post('/login', userController.login);


// Démarrage du serveur
app.listen(3001, () => {
    console.log('Pokenode est lancé !');
    console.log('Serveur démarré sur le port 3001');
});


