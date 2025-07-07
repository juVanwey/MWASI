// Charge les variables d’environnement depuis le fichier .env
require("dotenv").config();

// Importe Express (framework minimal pour créer des applications web Node.js)
const express = require("express");

// Crée une instance de l’application Express
const app = express();

// Importe le middleware CORS pour autoriser les requêtes entre domaines différents
const cors = require("cors");

// Déclare le port d’écoute : depuis .env ou 3000 par défaut
const PORT = process.env.PORT || 3000;

/* -------------------------- MIDDLEWARES -------------------------- */

// Active CORS pour toutes les routes (utile si front et back ne sont pas sur le même domaine)
app.use(cors());

// Autorise le parsing du corps des requêtes en JSON (pour les APIs REST)
app.use(express.json());

// Autorise le parsing des données envoyées via des formulaires HTML (type POST)
app.use(express.urlencoded({ extended: true }));

// Sert les fichiers statiques (images, CSS, JS) depuis le dossier "src/public"
// app.use(express.static("src/public"));
// à la place :
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));


/* ------------------------ MOTEUR DE VUE TWIG ------------------------ */

// Importe Twig comme moteur de templates
const twig = require("twig");

// Définit Twig comme moteur de rendu
app.set("view engine", "twig");

// Définit le dossier où chercher les fichiers de vue (.twig)
// app.set("views", "./src/views");
// Premier argument : 'views' → clé de configuration interne d’Express, pour lui dire où chercher les fichiers de template (fichiers .twig, .ejs, etc.).
// Deuxième argument : './src/views'→ chemin vers le dossier de vues. « Quand je fais res.render('truc'), va chercher dans ce dossier-là. »
// à la place :
app.set("views", path.join(__dirname, "src/views"));

// Désactive le cache des vues pour le développement
// app.set('view cache', false);

/* ---------------------------- ROUTE D’ACCUEIL ---------------------------- */

// Import et utilisation de la route home
const homeRoute = require("./src/routes/homeRoutes");
app.use("/", homeRoute); // Toutes les routes de homeRoute commenceront à "/"

/* ---------------------------- ROUTE DE CONNEXION ---------------------------- */
// Import et utilisation de la route login
const loginRoutes = require('./src/routes/loginRoutes');
app.use('/', loginRoutes);

/* --------------------------- LANCEMENT DU SERVEUR --------------------------- */

// Démarre le serveur sur le port défini
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
