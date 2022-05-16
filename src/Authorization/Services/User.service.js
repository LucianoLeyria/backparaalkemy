const jwt = require('jsonwebtoken');
const db = require('../../Sequelize/Sequelize');
const { hashPw } = require('../../hash');
const { user } = db.models;

async function existeUsuario(username, password) {
  const existe = await user.findOne({
    where: { username, salt: hashPw(password) },
  });
  return existe;
}

async function loguearse(username, password) {
  const existe = await existeUsuario(username, password);

  if (!existe) throw new Error('el usuario no existe');

  const payload = {
    sub: existe.getDataValue('id'),
  };
  const token = jwt.sign(payload, 'secret');

  return token;
}

async function registrarse(username, password, email) {
  const existe = await existeUsuario(username, password);

  if (existe) throw new Error('el usuario ya existe');

  const nuevoUsuario = await user.create({ username, salt: password, email });

  return nuevoUsuario;
}

module.exports = { loguearse, registrarse };
