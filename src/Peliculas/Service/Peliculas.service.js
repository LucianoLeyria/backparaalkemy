const db = require('../../Sequelize/Sequelize');
const { personajes, peliculas, genres } = db.models;
const Op = require('sequelize').Op;

async function showMovies(title, genreId, orden) {
  return await peliculas.findAll({
    attributes: ['title', 'image', 'date', 'score'],
    where: {
      title: title ? title : { [Op.like]: '%%' },
      ['genreId']: genreId ? genreId : { [Op.gt]: -1 },
    },
    order: orden ? [['date', orden]] : undefined,
  });
}

async function showMovieDetail(id) {
  return await peliculas.findByPk(id, { include: personajes });
}

async function createMovie(body) {
  return await peliculas.create(body);
}

async function patchMovie(body, id) {
  return await peliculas.update({ ...body }, { where: { id } });
}

async function deleteMovie(id) {
  return await peliculas.destroy({ where: { id } });
}

module.exports = {
  showMovies,
  showMovieDetail,
  createMovie,
  patchMovie,
  deleteMovie,
};
