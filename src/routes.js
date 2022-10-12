const express = require("express");

const router = express.Router();

const ListaController = require('./controllers/ListaController');

router.get('/lista', ListaController.buscarTodos);

module.exports = router;