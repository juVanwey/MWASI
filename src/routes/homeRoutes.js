const express = require('express');
const router = express.Router();

// On importe le contrôleur qui contient la logique métier
const homeController = require('../controllers/homeController');

// Route GET pour la page d’accueil
router.get('/', homeController.showHomePage);

module.exports = router;
