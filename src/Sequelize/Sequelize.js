const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.db',
  logging: false,
});

const personajes = require('../Personajes/Models/Personajes');
const modeloPersonajes = personajes(sequelize);

const genres = require('../Peliculas/Models/Genre');
const modeloGenres = genres(sequelize);

const peliculas = require('../Peliculas/Models/Peliculas');
const modeloPeliculas = peliculas(sequelize);

const users = require('../Authorization/Models/User.model');
const modeloUsers = users(sequelize);

modeloPersonajes.belongsToMany(modeloPeliculas, {
  through: 'personajes_peliculas',
});
modeloPeliculas.belongsToMany(modeloPersonajes, {
  through: 'personajes_peliculas',
});

modeloGenres.hasMany(modeloPeliculas);

modeloPeliculas.belongsTo(modeloGenres);

module.exports = sequelize;
