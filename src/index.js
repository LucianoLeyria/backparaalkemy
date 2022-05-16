const sequelize = require('./Sequelize/Sequelize');
const express = require('express');
const app = express();
const { personajesDisney, user, pelis, genress } = require('./Mock');
const { agregarPersonajesaPeliculas } = require('./help');
const personajeRouter = require('./Personajes/Routes/Personajes');
const userRouter = require('./Authorization/Routes/login.route');
const peliculasRouter = require('./Peliculas/Routes/Peliculas');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const morgan = require('morgan');

const swaggerSpect = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'back disney',
      description: 'servidor disney para alkemy',
      contact: {
        name: 'API Support',
        url: 'http://localhost:3000',
        email: 'pikamandu@gmail.com',
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: [`${path.join(__dirname, './*.js')}`],
};

app.use(
  '/api-doc',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpect))
);
app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(express.json());
app.use('/personajes', personajeRouter);
app.use('/auth', userRouter);
app.use('/peliculas', peliculasRouter);

app.listen(3000, async () => {
  await sequelize.sync({
    force: true,
  });
  await sequelize.models.personajes.bulkCreate(personajesDisney);
  await sequelize.models.genres.bulkCreate(genress);
  await sequelize.models.peliculas.bulkCreate(pelis);

  agregarPersonajesaPeliculas();

  await sequelize.models.user.create({
    username: 'Administrator',
    salt: 'ricky123',
    email: 'administrator@admin.com',
  });
  console.log('Server is running on port 3000');
});
