const db = require('../../Sequelize/Sequelize');
const { personajes, peliculas, genres } = db.models;
const Op = require('sequelize').Op;

async function buscarTodos(columns = [], age, name, peliculasId, weight) {
  if (peliculasId) {
    const movie = await peliculas.findByPk(peliculasId);
    return await movie.getPersonajes();
  }
  return await personajes.findAll({
    attributes: columns,
    where: {
      name: name ? name : { [Op.like]: '%%' },
      age: age ? age : { [Op.gt]: -1 },
      weight: weight ? weight : { [Op.gt]: -1 },
    },
  });
}

async function characterDetail(id) {
  return await personajes.findByPk(id); // falta include movies.
}

async function createCharacter(body) {
  return await personajes.create({ ...body });
}

async function updateChar(body, id) {
  return await personajes.update({ ...body }, { where: { id } });
}

async function deleteChar(id) {
  return await personajes.destroy({ where: { id } });
}
module.exports = {
  buscarTodos,
  characterDetail,
  createCharacter,
  updateChar,
  deleteChar,
};
