import { interessado } from "../Controlle/interessado_cont.js";
import express from "express";

const router = express.Router()

router.get('interessado', interessado.getInteressado)
router.post('interessado', interessado.createInteressado)
router.put('interessado/:id_intere', interessado.updateInteressado)
router.delete('interessado/:id_intere', interessado.deleteInteressado)

export{router}

