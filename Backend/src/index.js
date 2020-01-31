const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://joaovictor:jvictor5674@cluster0-ezyyh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros

// Query Params: req.query(Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção);
//  Body: request.body (Dados para criação ou alteração de um registro)



app.listen(3333);