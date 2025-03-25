import Router from 'express';
import { createUsuario, getUser, updateUsers, deleteUsers } from '../controllers/users.controllers.js';
import { getProducto, getAllproductos, createProducto,  updateProducto, deleteProducto, updateImgProducto} from "../controllers/producto.controllers.js";
import { uploadImg } from "../middlewares/upload.middlware.js";

const router = Router();

router.get("/", (req, res, next)=>{
    res.json({message: "Bienvenidos a mi catálogo"})
})

//CRUD USUARIOS
router.get("/users/:idusuario", getUser);
router.post("/users", createUsuario);
router.put("/users/:idusuario", updateUsers);
router.delete("/users/:idusuario", deleteUsers);


router.get("/users", (req, res, next)=>{

    res.json({message: "Ruta de users"})
})

//CRUD PRODUCTOS
router.get("/productos/:idproducto", getProducto);
router.get("/productos", getAllproductos);
router.post("/productos", createProducto);
router.put("/productos/:id/imagen", uploadImg.single('imgprod'), updateImgProducto);
router.put("/productos/:id", updateProducto);
router.delete("/productos/:idproducto", deleteProducto);


//CRUD COMPRAS








export default router;