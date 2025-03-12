import {Router} from 'express';
import { createUsuario } from '../controllers/users.controllers.js';

const router = Router();


//Crear usuarios y productos
router.post("/users", createUsuario)


export default router;