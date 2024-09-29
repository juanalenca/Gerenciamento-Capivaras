const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

// Middleware para permitir CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para logar as requisições recebidas
app.use((req, res, next) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    console.log('Corpo da requisição:', req.body);
    next();
});

// Middleware para permitir que o backend lide com JSON
app.use(express.json());

// Conectar ao MySQL
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

// Importar as rotas de capivaras
const capivaraRoutes = require('../routes/capivaraRoutes');

// Usar as rotas no caminho /capivaras
app.use('/capivaras', capivaraRoutes);

// Iniciar o servidor na porta 5000
app.listen(5000, () => {
    console.log('API rodando na porta 5000');
});
