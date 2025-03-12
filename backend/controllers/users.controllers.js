import { Usuario, Compra, Producto } from "../models/index.js";

const responseAPI = {
    data: [],
    msg: "",
    status: "ok",
    cant: null
  }

export const createUsuario = async (req, res, next) => {

    try {

        const {nombre, email} = req.body;

        const user = await Usuario.create({
            nombre: nombre,
            email: email
        });
        responseAPI.data = user;
        responseAPI.msg = "Usuario creado correctamente";
        res.status(201).json(responseAPI);
        
    } catch (e) {
        next(e);
        responseAPI.status = "error";
        responseAPI.msg = e.message;
        res.status(400).json(responseAPI);
    }
}