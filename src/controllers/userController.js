// Contrôleur pour gérer les routes des utilisateurs

const { PrismaClient } = require("../../generated/prisma");
// Import du client Prisma pour interagir avec la base de données
const prisma = new PrismaClient({});
// PrismaClient est initialisé pour permettre les opérations sur la base de données

const bcrypt = require('bcrypt');

// Récupère la liste des utilisateurs
// GET /users
exports.getUsers = async (req, res) => {
  try {
    const statusFilter = req.query.status;
    
    const where = statusFilter
      ? { status: statusFilter.toUpperCase() }
      : {};

    const users = await prisma.user.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    // Liste des statuts
    const statuses = ['ADMIN', 'MEMBER', 'PROFESSIONAL', 'VISITOR', 'VOLUNTEER'];

    res.render('pages/users', {
      users,
      statuses,
      selectedStatus: statusFilter
    });
  } catch (error) {
    console.error('Erreur dans getUsers :', error);
    res.status(500).send('Erreur serveur');
  }
};


// Formulaire de création
exports.renderCreateUserForm = (req, res) => {
  res.render("pages/createUpdateUser", { user: null });
};

// Création
exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, status, isNewsletterSubscriber } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        status,
        isNewsletterSubscriber: isNewsletterSubscriber === "true",
      },
    });

    res.redirect("/users");
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    res.status(500).send("Erreur lors de la création de l'utilisateur.");
  }
};

// Formulaire de modification
exports.renderEditUserForm = async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) return res.status(404).send("Utilisateur non trouvé.");

  res.render("pages/createUpdateUser", { user });
};

// Mise à jour
exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { firstName, lastName, email, password, status, isNewsletterSubscriber } = req.body;

  try {
    const updatedData = {
      firstName,
      lastName,
      email,
      status,
      isNewsletterSubscriber: isNewsletterSubscriber === "true",
    };

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    await prisma.user.update({
      where: { id: userId },
      data: updatedData,
    });

    res.redirect("/users");
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).send("Erreur lors de la mise à jour de l'utilisateur.");
  }
};


// Détails utilisateur
exports.getUserDetail = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).send("Utilisateur non trouvé");
    }

    res.render("pages/userFile", { user });
  } catch (error) {
    console.error("Erreur lors de la récupération du détail utilisateur :", error);
    res.status(500).send("Erreur serveur.");
  }
};

// Suppression d'un utilisateur
exports.deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    res.redirect("/users");
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    res.status(500).send("Erreur lors de la suppression de l'utilisateur.");
  }
} 