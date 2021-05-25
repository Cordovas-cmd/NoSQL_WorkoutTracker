
// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

// App Variables
// =============================================================
const PORT = process.env.PORT || 3000;
const app = express();

// App config
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require('./routes'));

// Start
// =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});