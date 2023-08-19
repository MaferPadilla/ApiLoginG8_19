"use strict"

var conn = require("../config/db-connection"),
allUsuarioModel = () => {};


 allUsuarioModel.getAll = (cb) =>
    conn.query("SELECT * FROM Usuario", cb);


 module.exports = allUsuarioModel;

