const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient({});

// Affiche le formulaire de connexion
// GET /login
exports.showLoginForm = (req, res) => {
  res.render("pages/login", { error: null });
};

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

  // Vérif du mot de passe (temporairement en clair)
  if (user.password !== password) {
    return res.render("pages/login", {
      errors: { password: "Mot de passe incorrect." },
      email,
    });
  }

  // Connexion réussie → Redirection vers /dashboard
  res.redirect("/dashboard");
};
