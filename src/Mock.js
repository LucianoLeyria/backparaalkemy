const { hashPw } = require('./hash');

const personajesDisney = [
  {
    name: 'PatoDonald',
    age: '52',
    weight: '80',
    history: 'Es un pato de color blanco y azul',
    image:
      'https://i.pinimg.com/564x/9b/79/1b/9b791ba482b3ec8d4492a6126d0b7e61.jpg',
  },
  {
    name: 'Pato Lucas',
    age: '20',
    weight: '40',
    history: 'Es un pato de color negro',
    image:
      'https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fseries%2F000%2F002%2F291%2Fel-pato-lucas-2.jpg&nuevoancho=620&medio=abc',
  },
];

const user = [
  {
    username: 'Administrator',
    salt: hashPw('ricky123'),
    email: 'administrator123@gmail.com',
  },
];

const genress = [
  {
    name: 'fantasia',
    image:
      'https://t1.uc.ltmcdn.com/es/posts/1/2/6/como_escribir_un_libro_de_fantasia_toma_nota_47621_orig.jpg',
  },
  {
    name: 'aventura',
    image:
      'https://st.depositphotos.com/1993283/3428/i/600/depositphotos_34288889-stock-photo-tourist-on-mountain-top.jpg',
  },
  {
    name: 'ciencia ficcion',
    image: 'https://www.muycomputerpro.com/wp-content/uploads/2020/07/C86.jpg',
  },
];

const pelis = [
  {
    title: 'caperucitaroja',
    image:
      'https://www.etapainfantil.com/wp-content/uploads/2016/01/Caperucita-Roja-cuento-corto-e1454154924276-700x482.jpg',
    date: '1992-03-02',
    genreId: '1',
  },
  {
    title: 'el rey leon',
    image: 'https://reyleon.com.jpg',
    date: '1994-03-02',
    genreId: '2',
  },
];
module.exports = { personajesDisney, user, genress, pelis };
