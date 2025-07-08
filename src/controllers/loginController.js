// Contrôleur pour gérer les routes de connexion

const { PrismaClient } = require("../../generated/prisma");
// Import du client Prisma pour interagir avec la base de données
const prisma = new PrismaClient({});
// PrismaClient est initialisé pour permettre les opérations sur la base de données

const bcrypt = require('bcrypt');


// Affiche le formulaire de connexion
// GET /login
exports.showLoginForm = (req, res) => {
  res.render("pages/login", { error: null });
};
// On rend la page login en lui passant une variable error. 
// Par défaut, elle vaut null → pas d'erreur affichée.
// Si une erreur survient plus tard (connexion échouée), la même page sera envoyée avec error: "Message d'erreur".
// Cela permet de réutiliser la même vue pour afficher le formulaire de connexion et les erreurs éventuelles.
// Ainsi, dans twig, on peut afficher un message d'erreur si besoin, en vérifiant si error n'est pas null : <% if (error) { %> <p class="error"><%= error %></p> <% } %>
  
// Traite la soumission du formulaire de connexion
// POST /login
exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;

  // Initialisation des erreurs
  const errors = {};

  // Vérification du format de l'email (regex très basique)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = "Format d'email invalide.";
  }

  // Vérification que le mot de passe a bien été saisi
  if (!password || password.trim() === "") {
    errors.password = "Mot de passe requis.";
  }

  // S’il y a des erreurs de validation de formulaire
  if (Object.keys(errors).length > 0) {
    return res.render("pages/login", {
      errors,
      email, // pour préremplir l’input
    });
  }
  // errors est un objet (ex : { email: "Email invalide", password: "Mot de passe requis" })
  // Object.keys(errors) renvoie un tableau des clés (ex : ["email", "password"])

  // Recherche de l'utilisateur
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.render("pages/login", {
      errors: { email: "Aucun compte ne correspond à cet email." },
      email,
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.render("pages/login", {
      errors: { password: "Mot de passe incorrect." },
      email,
    });
  }  

  // Vérif du mot de passe (temporairement en clair)
//   if (user.password !== password) {
//     return res.render("pages/login", {
//       errors: { password: "Mot de passe incorrect." },
//       email,
//     });
//   }

  // Connexion réussie → Redirection vers /dashboard
  res.redirect("/dashboard");
};
