const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Owzthat Cricket Game API');
});

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});