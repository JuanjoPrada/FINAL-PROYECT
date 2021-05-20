const mongoose = require('mongoose')

const DB_REMOTE = process.env.DB_REMOTE || `mongodb://localhost/final-proyect`;

mongoose
  .connect(DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((details) => {
    const { name, client } = details.connections[0];
    console.log(`Connected to database "${name}" (URL: ${client.s.url})`);
  })
  .catch((err) => console.error("Error connecting to Mongo", err));