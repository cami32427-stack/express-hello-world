const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chismex Bot Activo 🔥 Ya quedó Cami!');
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
