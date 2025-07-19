const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authGuard = require("../middlewares/authGuard");

router.get("/login", adminController.showLoginForm); // Route pour afficher le formulaire de connexion
router.post("/login", adminController.getLogin); // Route pour traiter la soumission du formulaire de connexion
router.get("/dashboard", authGuard, adminController.showDashboardAdmin); // Route pour accéder au dashboard après connexion réussie
router.get("/logout", adminController.getLogout); // Route pour déconnexion

module.exports = router;
