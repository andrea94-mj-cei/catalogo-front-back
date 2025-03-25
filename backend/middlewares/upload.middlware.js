import multer from 'multer';
import path from 'path';

//configuración de almacenamiento de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => { //cb=callback
        //aquí definimos donde vamos a subir nuestros archivos
        cb(null, "public/uploads");
    }, 
    filename: (req, file, cb) => {
        //aquí definimos el nombre que tendrá nuestro archivo, para que no de errores por si se suben archivos que se llaman igual

        // => Generar un nombre único que use el name del input + la fecha
        //ej: imgprod-05072025.jpg
        const fileExt = path.extname(file.originalname); //.doc, .png, .jpg, .webp ....

        //con estos métodos podemos formatear el formato de la fecha
        const date = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');

        //creamos el nuevo nombre del archivo
        const filename = `${file.fieldname}-${date}${fileExt}`;

        //devolvemos
        cb(null, filename);
    }     
});

//limita el tamaño de la imagen y el tipo de archivo que vamos a subir
const fileFilter = (req, file, cb) =>{
    //comprobar el tipo de archivo
    if(file.mimetype.startsWhit('image/')) {
        cb(bull, true);
    }else {
        cb(new Error('El archivo debe ser una imagen válida'), false);
    }
}

//upload de imágenes
export const uploadImg = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 //limitar el upload a 5mb
    }
});

//upload de cualquier archivo
export const uploadAny = multer({
    storage: storage
});