const express = require('express');
const router = express.Router();
const { loguearse, registrarse } = require('../Services/User.service');
const { enviarMail } = require('../Nodemailer');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await loguearse(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const newUser = await registrarse(username, password, email);
    enviarMail(email);
    // const emailInfo = await enviarCorreoBienvenida(email);
    // console.log('info email -->', emailInfo);
    res.status(201).json({ success: true, newUser });
  } catch (error) {
    const err = error;
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
