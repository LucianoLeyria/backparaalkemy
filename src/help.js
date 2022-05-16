const db = require('./Sequelize/Sequelize');

async function agregarPersonajesaPeliculas() {
  const personajesArray = await db.models.personajes.findAll();
  const peliculasArray = await db.models.peliculas.findAll();
  for (let i = 0; i < peliculasArray.length; i++) {
    peliculasArray[i].setPersonajes(
      personajesArray[Math.floor(Math.random() * personajesArray.length)]
    );
  }
}

module.exports = { agregarPersonajesaPeliculas };
