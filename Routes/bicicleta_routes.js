import { bicicleta } from "../Controlle/bicicleta_cont.js";
import express from "express";

const router = express.Router() 

router.get('/bicicleta', bicicleta.getBicicleta)
/* aqui ele pega o objeto usado na controlle*/
router.post('/bicicleta', bicicleta.createBicicleta)

router.put('/bicicleta/:id_bicicleta', bicicleta.updateBicicleta)

router.delete('/bicicleta/:id_bicicleta', bicicleta.deleteBicicleta)

export {router}


