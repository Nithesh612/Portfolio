const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to your Express Backend in server.js!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server successfully started! Listening on port ${PORT}`);
});
