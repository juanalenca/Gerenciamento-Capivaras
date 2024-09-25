// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Endpoint para listar capivaras
app.get('/capivaras', (req, res) => {
    db.query('SELECT * FROM capivaras', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('API rodando na porta 5000');
});
