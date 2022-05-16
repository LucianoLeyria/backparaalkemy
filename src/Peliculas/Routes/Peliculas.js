const express = require('express');
const router = express.Router();
const {
  showMovies,
  showMovieDetail,
  createMovie,
  patchMovie,
  deleteMovie,
} = require('../Service/Peliculas.service');

router.get('/', async (req, res) => {
  const { name, genreId, order } = req.query;
  try {
    const movies = await showMovies(name, genreId, order);
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: 'put ASC or DESC in the query',
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await showMovieDetail(id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({
      message: 'put ASC or DESC in the query',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newMovie = await createMovie(req.body);
    res.json({ success: 'Movie created', newMovie });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await patchMovie(req.body, id);
    res.json({ success: 'Movie updated', updatedMovie });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await deleteMovie(id);
    res.json({ success: 'Movie deleted', deletedMovie });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
