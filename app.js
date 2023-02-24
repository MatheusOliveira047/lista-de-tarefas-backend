require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors());

// db connection
require("./src/database/db.js");

// routes
const router = require("./src/routers/router");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});