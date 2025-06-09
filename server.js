const express = require('express');
const app = express();

const HOST = 'localhost';
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});