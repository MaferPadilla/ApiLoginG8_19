"use strict";
var UsuarioModel = require('../models/allusuario-model'),
    allUsuarioController = () => {};


// Agregando el método getAll
allUsuarioController.getAll = (req, res, next) => {
    UsuarioModel.getAll((err, usuarios) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(usuarios);
        }
    });
};

module.exports = allUsuarioController;
