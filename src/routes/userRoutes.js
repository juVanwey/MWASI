const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authGuard = require("../middlewares/authGuard");

router.get("/users", authGuard, userController.getUsers); // Route pour afficher la liste des utilisateurs
router.get("/test", userController.getUsers); // Route de test pour vérifier le fonctionnement du contrôleur

// Formulaire création
router.get("/create", authGuard, userController.renderCreateUserForm);
router.post("/create", authGuard, userController.createUser);

// Formulaire édition
router.get("/:id/edit", authGuard, userController.renderEditUserForm);
router.post("/:id/edit", authGuard, userController.updateUser);

// Détails utilisateur
router.get("/:id", authGuard, userController.getUserDetail);

// Suppression d'un utilisateur
router.post("/:id/delete", authGuard, userController.deleteUser);

module.exports = router;
// Cette route est protégée par authGuard, qui vérifie si l'utilisateur est connecté