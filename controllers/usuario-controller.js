"use strict"
   var UsuarioModel = require('../models/usuario-model'),
   UsuarioController = () =>{}

UsuarioController.post = (req, res,next) => {
    let usuario = {
      codigo_usuario : req.body.codigo_usuario,
      nombre : req.body.nombre,
      apellido : req.body.apellido,
      clave : req.body.clave,
      email : req.body.email,
      ultimo_ingreso : req.body.ultimo_ingreso,
      clave_expira : req.body.clave_expira,
      dias_caducidad : req.body.dias_caducidad,
      rol : req.body.rol,
      fecha_registro : req.body.fecha_registro
    }
  
    console.log(usuario)
  
   UsuarioModel.post(usuario, (err) => {
      if(err)
      {
        let locals = {
          title : `Error al salvar el registro con el id: ${usuario.codigo_usuario}`,
          description : "Error de Sintaxis SQL",
          error : err
        }
  
        request.status(520).json(err);
  
      }
      else
      {
        res.send('Usuario Ingresado Exitosamente')
      }
    })
  
}

module.exports = UsuarioController;