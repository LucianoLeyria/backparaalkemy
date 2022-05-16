const nodemailer = require('nodemailer');

const enviarMail = async (email) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'backendparaalkemy',
      pass: 'alkemy123',
    },
  });

  let info = await transporter.sendMail({
    from: 'Pikamandu',
    to: email,
    subject: 'Back disney',
    text: 'Hola',
    html: '<p>Hola</p>',
  });
  return info;
};

module.exports = { enviarMail };
