/**
 * @swagger
 *  /personajes:
 *    get:
 *      summary: get all the characters
 *      parameters:
 *        - name: age
 *          in: query
 *          description: the character age
 *          schema:
 *              type: integer
 *          required: false
 *        - name: name
 *          in: query
 *          description: the character name
 *          schema:
 *              type: string
 *          required: false
 *        - name: peliculasId
 *          in: query
 *          description: the id from the movie whose character participed
 *          schema:
 *              type: integer
 *          required: false
 *        - name: weight
 *          in: query
 *          description: the weight of the character
 *          schema:
 *              type: number
 *          required: false
 *      responses:
 *          200:
 *              description: the array of characters
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  image:
 *                                      type: string
 *                                      description: the url from the image
 *                                  name:
 *                                      type: string
 *                                      description: the name of the character
 *                              example:
 *                                  image: https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fseries%2F000%2F002%2F291%2Fel-pato-lucas-2.jpg&nuevoancho=620&medio=abc
 *                                  name:  Pato Lucas*/

/**
 * @swagger
 *  /personajes/{id}:
 *    get:
 *      summary: get the details of an especific character
 *      parameters:
 *        - name: id
 *          in: path
 *          description: the character id
 *          schema:
 *              type: integer
 *          required: true
 *      responses:
 *          200:
 *              description: the character
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              image:
 *                                 type: string
 *                                 description: the url from the image
 *                              name:
 *                                 type: string
 *                                 description: the name of the character
 *                              age:
 *                                 type: integer
 *                                 description: the age of the character
 *                              weight:
 *                                 type: string
 *                                 description: the weight of the character
 *                              history:
 *                                 type: string
 *                                 description: the history of the character
 *                              movies:
 *                                 type: array
 *                                 descriptions: the movies whose character participed
 *                                 items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              description: the id of the movie
 *                                          image:
 *                                              type: string
 *                                              description: the image of the movie
 *                                          title:
 *                                              type: string
 *                                              description: the title of the movie
 *                                          date:
 *                                              type: string
 *                                              description: the date of the movie
 *                                          score:
 *                                              type: enum
 *                                              description: the score of the movie from 1 to 5
 *                                              enum: ["1","2","3","4","5"]
 *                                          genreId:
 *                                              type: integer
 *                                              description: the genre id of the movie
 *
 *                          example:
 *                                  image: https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fseries%2F000%2F002%2F291%2Fel-pato-lucas-2.jpg&nuevoancho=620&medio=abc
 *                                  name:  Pato Lucas
 *                                  age: 20
 *                                  weight: 40
 *                                  history: Es un pato de color negro
 *                                  movies: [
 *                                      {
 *                                          id: 1,
 *                                          image: https://www.etapainfantil.com/wp-content/uploads/2016/01/Caperucita-Roja-cuento-corto-e1454154924276-700x482.jpg,
 *                                          title: caperucitaroja,
 *                                          date: 1992-03-02,
 *                                          genreId: 1
 *                                      }
 *                                  ]
 *
 *
 */

/**
 * @swagger
 *  /personajes:
 *    post:
 *      summary: add a new character
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          name:
 *                              type: string
 *                              description: the name of the character
 *                          age:
 *                              type: integer
 *                              description: the age of the character
 *                          weight:
 *                              type: string
 *                              description: the weight of the character
 *                          history:
 *                              type: string
 *                              description: the history of the character
 *                      required:
 *                          - image
 *                          - name
 *                          - age
 *                          - weight
 *                          - history
 *                      example:
 *                           image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg
 *                           name: tarzan
 *                           age: 25
 *                           weight: 55
 *                           history: un joven que vive con los monos
 *
 *      responses:
 *          201:
 *              description: a success bolean and de character created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              newCharacter:
 *                                  type: object
 *                                  description: the new character
 *                                  properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          name:
 *                              type: string
 *                              description: the name of the character
 *                          age:
 *                              type: integer
 *                              description: the age of the character
 *                          weight:
 *                              type: string
 *                              description: the weight of the character
 *                          history:
 *                              type: string
 *                              description: the history of the character
 *                          example:
 *                              success: true
 *                              newCharacter: {
 *                                  image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg,
 *                                  name: tarzan,
 *                                  age: 25,
 *                                  weight: 55,
 *                                  history: un joven que vive con los monos,
 *                              }
 *
 *
 */

/**
 * @swagger
 *  /personajes/{id}:
 *    put:
 *      summary: modify a character by id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the id of the character
 *            required: true
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          name:
 *                              type: string
 *                              description: the name of the character
 *                          age:
 *                              type: integer
 *                              description: the age of the character
 *                          weight:
 *                              type: string
 *                              description: the weight of the character
 *                          history:
 *                              type: string
 *                              description: the history of the character
 *                      required:
 *                          - image
 *                          - name
 *                          - age
 *                          - weight
 *                          - history
 *                      example:
 *                           image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg
 *                           name: tarzan
 *                           age: 25
 *                           weight: 55
 *                           history: un joven que vive con los monos
 *
 *      responses:
 *          200:
 *              description: a success bolean and de character modified
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              newCharacter:
 *                                  type: object
 *                                  description: the new character
 *                                  properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          name:
 *                              type: string
 *                              description: the name of the character
 *                          age:
 *                              type: integer
 *                              description: the age of the character
 *                          weight:
 *                              type: string
 *                              description: the weight of the character
 *                          history:
 *                              type: string
 *                              description: the history of the character
 *                          example:
 *                              success: true
 *                              newCharacter: {
 *                                    image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg,
 *                                    name: tarzan,
 *                                    age: 25,
 *                                    weight: 55,
 *                                    history: un joven que vive con los monos,
 *                              }
 *
 *
 */

/**
 * @swagger
 *  /personajes/{id}:
 *    delete:
 *      summary: delete a character by id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the id of the character
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: a success bolean and a message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              msg:
 *                                  type: string
 *                                  description: the message
 *                              deleted:
 *                                  type: integer
 *                                  description: the id of the deleted character
 *                          example:
 *                              success: true
 *                              msg: "Character deleted succesfully"
 *
 */

/**
 * @swagger
 *  /peliculas:
 *    get:
 *      summary: get all the movies
 *      parameters:
 *        - name: name
 *          in: query
 *          description: the movie name
 *          schema:
 *              type: string
 *          required: false
 *        - name: genreId
 *          in: query
 *          description: the id from the genre of the movie
 *          schema:
 *              type: integer
 *          required: false
 *        - name: order
 *          in: query
 *          description: the type of order based on date
 *          schema:
 *              type: string
 *          required: false
 *      responses:
 *          200:
 *              description: the array of movies
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  image:
 *                                      type: string
 *                                      description: the url from the image
 *                                  title:
 *                                      type: string
 *                                      description: the title of the movie
 *                                  date:
 *                                      type: string
 *                                      description: the date of the movie
 *                              example:
 *                                  image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg
 *                                  title: Tarzan
 *                                  date: 1942-05-12
 *
 */

/**
 * @swagger
 *  /peliculas/{id}:
 *    get:
 *      summary: get the details of an especific movie
 *      parameters:
 *        - name: id
 *          in: path
 *          description: the movie id
 *          schema:
 *              type: integer
 *          required: true
 *      responses:
 *          200:
 *              description: the movie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              image:
 *                                 type: string
 *                                 description: the url from the image
 *                              title:
 *                                 type: string
 *                                 description: the title of the movie
 *                              date:
 *                                 type: string
 *                                 description: the date of the movie
 *                              score:
 *                                 type: enum
 *                                 description: the score of the movie
 *                                 enum: [1,2,3,4,5]
 *                              characters:
 *                                 type: array
 *                                 descriptions: the characters that participated in the movie
 *                                 items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              description: the id of the character
 *                                          image:
 *                                              type: string
 *                                              description: the image url of the character
 *                                          name:
 *                                              type: string
 *                                              description: the name of the character
 *                                          age:
 *                                              type: integer
 *                                              description: the age of the character
 *                                          weight:
 *                                              type: integer
 *                                              description: the weight of the character
 *                                              enum: ["1","2","3","4","5"]
 *                                          history:
 *                                              type: string
 *                                              description: the history of the character
 *
 *                          example:
 *                                  image: https://img.ecartelera.com/noticias/fotos/54500/54576/1.jpg
 *                                  title:  Tarzan
 *                                  date: 1942-10-17
 *                                  score: 3
 *                                  genreId: 1
 *                                  characters: [
 *
 *                                      {
 *                                          id: 1,
 *                                          image: https://i.pinimg.com/564x/9b/79/1b/9b791ba482b3ec8d4492a6126d0b7e61.jpg,
 *                                          name: PatoDonald,
 *                                          age: 80,
 *                                          weight: 52,
 *                                          history: Es un pato de color blanco y azul
 *                                      }
 *                                  ]
 *
 *
 */

/**
 * @swagger
 *  /peliculas:
 *    post:
 *      summary: add a new movie
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          title:
 *                              type: string
 *                              description: the title of the movie
 *                          date:
 *                              type: string
 *                              description: the age of the movie
 *                          score:
 *                              type: enum
 *                              description: the score of the movie
 *                              enum: [1,2,3,4,5]
 *                          genreId:
 *                              type: integer
 *                              description: the id of the gender from the movie
 *                      required:
 *                          - image
 *                          - name
 *                          - age
 *                          - weight
 *                          - history
 *                          - genreId
 *                      example:
 *                          image: https://static.wikia.nocookie.net/doblaje/images/3/3d/Tarzan2dvdcover.jpg/revision/latest?cb=20170216222304&path-prefix=es
 *                          title: tarzan 2
 *                          date: 2017-10-10
 *                          score: 3
 *                          genreId: 2
 *
 *      responses:
 *          201:
 *              description: a success bolean and the movie created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              newCharacter:
 *                                  type: object
 *                                  description: the new character
 *                                  properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          name:
 *                              type: string
 *                              description: the name of the character
 *                          age:
 *                              type: integer
 *                              description: the age of the character
 *                          weight:
 *                              type: string
 *                              description: the weight of the character
 *                          history:
 *                              type: string
 *                              description: the history of the character
 *                          example:
 *                              success: true
 *                              newMovie: {
 *                                  image: https://static.wikia.nocookie.net/doblaje/images/3/3d/Tarzan2dvdcover.jpg/revision/latest?cb=20170216222304&path-prefix=es,
 *                                  title: tarzan 2,
 *                                  date: 2017-10-10,
 *                                  score: 3,
 *                                  genreId: 2,
 *                              }
 *
 *
 */

/**
 * @swagger
 *  /peliculas/{id}:
 *    put:
 *      summary: modify a movie by id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the id of the movie
 *            required: true
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          image:
 *                              type: string
 *                              description: the url from the image
 *                          title:
 *                              type: string
 *                              description: the name of the movie
 *                          date:
 *                              type: string
 *                              description: the age of the movie
 *                          score:
 *                              type: enum
 *                              description: the score of the movie
 *                              enum: [1,2,3,4,5]
 *                      example:
 *                          image: https://static.wikia.nocookie.net/doblaje/images/3/3d/Tarzan2dvdcover.jpg/revision/latest?cb=20170216222304&path-prefix=es
 *                          title: tarzan 2
 *                          date: 2020-10-10
 *                          score: 3
 *
 *      responses:
 *          200:
 *              description: a success bolean and de movie modified
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              updated:
 *                                  type: array
 *                                  description: the movie modified
 *                                  properties:
 *                                      type: integer
 *                          example:
 *                              success: true
 *                              updated: [1]
 *
 *
 */

/**
 * @swagger
 *  /peliculas/{id}:
 *    delete:
 *      summary: deletes a movie by id
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the id of the movie
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: a success boolean with a message and the deleted movie id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              msg:
 *                                  type: string
 *                                  description: the messsage
 *                              deletedId:
 *                                  type: integer
 *                                  description: the id of the deleted movie
 *                          example:
 *                              success: true
 *                              msg: deleted succesfully
 *                              deletedId: 1
 */

/**
 * @swagger
 *  /auth/login:
 *    post:
 *      summary: login a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              description: the user name
 *                          password:
 *                              type: string
 *                              description: the user password
 *                      required:
 *                          - name
 *                          - password
 *                      example:
 *                          username: pikamandu
 *                          password: pika123
 *      responses:
 *          200:
 *              description: user token
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *                                  description: the user token
 *                          example:
 *                              token: kdgjhdfkgjdf2334dfgdfgfdgdfgdfgdf
 *
 */

/**
 * @swagger
 *  /auth/register:
 *    post:
 *      summary: register a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                              description: the user name
 *                          password:
 *                              type: string
 *                              description: the user password
 *                          email:
 *                              type: string
 *                              description: the user email
 *                      required:
 *                          - name
 *                          - password
 *                          - email
 *                      example:
 *                          username: pikamandu
 *                          password: pika123
 *                          email: pikamandu@gmail.com
 *      responses:
 *          201:
 *              description: a boolean and the new user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: the success status
 *                              newUser:
 *                                  type: object
 *                                  description: the new user
 *                                  properties:
 *                                      username:
 *                                          type: string
 *                                          description: the user name
 *                                      password:
 *                                           type: string
 *                                           description: the user password
 *                                      email:
 *                                           type: string
 *                                           description: the user email
 *                                  example:
 *                                      username: pikamandu
 *                                      password: pika123
 *                                      email: pikamandu@gmail.com
 *
 *
 */
