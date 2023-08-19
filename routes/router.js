"use strict";
var  UsuarioController = require("../controllers/usuario-controller.js"),
    LoginController = require("../controllers/login_controller.js"),
    allUsuarioController = require("../controllers/allusuario-controller.js"),
  express = require("express"),
  router = express.Router();

router
  //RURAS USUARIO
  .post("/usuario/autenticar", LoginController.login)
  .post("/usuario/insertar/:codigo_usuario", UsuarioController.post)
  .get("/usuario/getall", allUsuarioController.getAll)
  
module.exports = router;
