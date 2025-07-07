const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.showLoginForm); // Route pour afficher le formulaire de connexion
router.post("/login", loginController.handleLogin); // Route pour traiter la soumission du formulaire de connexion

module.exports = router;