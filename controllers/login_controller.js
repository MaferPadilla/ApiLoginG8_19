"use strict"

var conn = require('../config/db-connection'), // Reemplaza con la configuración de tu base de datos
UsuarioModel = () => {};

var UsuarioModel = require('../models/login_model.js');

var LoginController = {};

LoginController.login = (req, res, next) => {
  var { codigo_usuario, clave } = req.body;

  UsuarioModel.login(codigo_usuario, clave, (err, usuario)  => {
    if (err) {
      return res.status(500).json({ error: 'Errors en el servidor' });
    }

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario invalido' });
    }

    const dulce = usuario;
    
    conn.connect();
    if (usuario) {
        if(dulce.clave !== clave){
            //como usuario es correcto y clave incorrecta hacer query de aumentar intentos
            //si intentos >= 4 cambiar a estado false
            
            if (dulce.intentos<4) {
              dulce.intentos = (dulce.intentos +1);
              conn.query('UPDATE usuario SET intentos = $1 WHERE codigo_usuario = $2 ', [dulce.intentos, dulce.codigo_usuario]);  
              var jsonResponse = {
                message: `Usuario o contrasena incorrecta, intentos fallidos: ${dulce.intentos}`
              };
            }
            else{
              var tmp = false;
              conn.query('UPDATE usuario SET estado = $1 WHERE codigo_usuario = $2', [tmp,dulce.codigo_usuario]);
              var jsonResponse = {
               message: `Usuario bloqueado`
              };
            }
        }

        else{
          
            if(Boolean(dulce.estado === true)){
                dulce.intentos=0;
                conn.query('UPDATE usuario SET intentos = $1 WHERE codigo_usuario = $2 ', [dulce.intentos, dulce.codigo_usuario]);
                var jsonResponse = {
                    message: `Autenticación exitosa`
                    
                };
               
            }
            
            else{
                var jsonResponse = {
                  message: `Usuario bloqueado `
                };
            }
          

        }
        return res.json(jsonResponse);
      
    }

    conn.end();
     
  });
};

module.exports = LoginController;
