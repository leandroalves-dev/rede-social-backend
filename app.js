require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// cors
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://rede-social-backend-8hib.onrender.com', 'https://leandroeffgen.com.br'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Certifique-se de permitir as opções
}));

// upload directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// db conections
require('./config/db.js')

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});