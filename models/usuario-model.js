"use strict"

var conn = require("../config/db-connection"),
UsuarioModel = () => {};

UsuarioModel.post = (data, cb) =>
    conn.query("call public.sp_insertar_usuario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
   [
       data.codigo_usuario,
       data.nombre,
       data.apellido,
       data.clave,
       data.email,
       data.ultimo_ingreso,
       data.clave_expira,
       data.dias_caducidad,
       data.rol,
       data.fecha_registro
   ],
 cb);

 module.exports = UsuarioModel;