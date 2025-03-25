import { Usuario, Compra, Producto } from "../models/index.js";

const responseAPI = {
    data: [],
    msg: "",
    status: "ok",
    cant: null
  }

export const getProducto = async (req, res, next) =>{
    try{
    const {idproducto} = req.params; 

    const productos = await Producto.findById();
    
    responseAPI.data=productos;
    
    res.status(200).json(productos);

    }catch(e){
        next(e);
    }
}

export const getAllProductos = async (req, res, next) =>{
    try{

    const productos = await Producto.find(
        
    )

    }catch(e){
        next(e);
    }
}

export const createProducto = async (req, res, next) =>{
    try{

    }catch(e){
        next(e);
    }
}
export const updateProducto = async (req, res, next) =>{
    try{

    }catch(e){
        next(e);
    }
}

export const updateImgProducto = async (req, res, next) =>{
    //recibir imagen
    try{
        const {idproducto} = req.params; //id producto

        const productos = await Producto.update(
            {}
        );

        responseAPI.data=productos;

        res.status(200).json(productos)

    if(!req.file){
        return res.status(400).json({
            sucess: false,
            message: "No se ha proporcionado una imágen"
        })
    }
    console.log(req.file);

    //guardar "req.file.filename" en la base de datos
    const imageUrl = `${BACKEND_URL}/uploads/${req.file.filename}`;


    //responder al usuario

        return res.status(200).json({
            sucess: "ok",
            message: "Imagen subida con éxito",
            // fileData: req.file,
            data: {
                imageUrl: imageUrl,
                filename: req.file.filename,
                originalName: req.file.originalname,
                size: "523kb"
            }
        })
    }catch(e){
        next(e);
    }
};

export const deleteProducto = async (req, res, next) =>{
    try{

    }catch(e){
        next(e);
    }
}

