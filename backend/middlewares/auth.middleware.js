import jwt from 'jsonwebtoken';
import{JWT_SECRET} from '../config/config.js'; 

export const authMiddleware = (req, res, next) =>{

    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("Token : ", token);
    if(!token) {
        return res.status(401).json({mensaje: "Acceso denegado, Token requerido"});
    }

    try{
        //verificar el Token
        const decoded = jwt.verify(token, JWT_SECRET)
        req.userId = decoded.userId;
        next();

    }catch(e){
        res.status(401).json({mensaje: "Acceso denegado, Token inválido o incorrecto"})
    }

};