const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chismex Bot Activo 🔥 Ya quedó Cami!');
});
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "chismex123";
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  console.log('Mensaje de WhatsApp:', req.body);
  const mensaje = req.body?.message || 'Hola';
  console.log('Usuario dijo:', mensaje);
  
  res.status(200).json({ 
    reply: 'Soy Chismex y ya reviví gracias a Cami 💅' 
  });
});

app.listen(PORT, () => {
  console.log(`Chismex corriendo en puerto ${PORT}`);
});
