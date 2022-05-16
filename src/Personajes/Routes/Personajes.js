const express = require('express');
const router = express.Router();
const {
  buscarTodos,
  characterDetail,
  createCharacter,
  updateChar,
  deleteChar,
} = require('../Services/Personajes.service');

router.get('/', async (req, res) => {
  const { age, name, peliculasId, weight } = req.query;
  try {
    const personajes = await buscarTodos(
      ['name', 'image', 'age', 'name', 'weight', 'history'],
      age,
      name,
      peliculasId,
      weight
    );
    res.json(personajes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await characterDetail(id);
    res.json(personaje);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const newCharacter = await createCharacter(body);
    res
      .status(201)
      .json({ success: 'Character created succesfully', newCharacter });
  } catch (error) {
    res.status(500).json({
      message: 'Cannot create character',
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCharacter = await updateChar(req.body, id);
    res.json({ success: 'Character updated', updatedCharacter });
  } catch (error) {
    res.status(500).json({
      message: 'Cannot update character',
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCharacter = await deleteChar(id);
    res.json({
      success: deletedCharacter > 0,
      msg:
        deletedCharacter === 0
          ? 'No character found'
          : 'Character deleted succesfully',
      deletedCharacter,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Cannot delete character',
    });
  }
});

module.exports = router;
