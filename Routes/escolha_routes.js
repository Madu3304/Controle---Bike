import { escolha } from "../Controlle/escolha_cont.js";
import express from "express";

const router = express.Router()

router.get('/escolha', escolha.getEscolha)
router.post('/escolha', escolha.createEscolha)
router.put('/escolha/:id_escolha', escolha.updateEscolha)
router.delete('/escolha/:id_escolha', escolha.deleteEscolha)

export {router}



