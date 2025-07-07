// Contrôleur pour gérer les routes de la page d’accueil

// Fonction qui affiche la page d’accueil
exports.showHomePage = (req, res) => {
    res.render('pages/home'); // Rend la vue située dans src/views/pages/home.twig
  };
  