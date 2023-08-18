"use strict";
var  UsuarioController = require("../controllers/usuario-controller.js"),
    LoginController = require("../controllers/login_controller.js"),
  express = require("express"),
  router = express.Router();

router
  //RURAS USUARIO
  .post("/usuario/autenticar", LoginController.login)
  .post("/usuario/insertar/:codigo_usuario", UsuarioController.post)
  
module.exports = router;
