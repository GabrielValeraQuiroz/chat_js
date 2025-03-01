const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});