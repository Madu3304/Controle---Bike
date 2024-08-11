import express from "express";
import db from "./Config/conf.js";

import { Bicicleta } from "./Models/bicicleta_model.js";
import { Escolha } from "./Models/escolha_model.js";
import { Interessado } from "./Models/interessados_model.js";

import {router as bicicletaRouter} from "./Routes/bicicleta_routes.js";
import {router as escolhaRouter} from "./Routes/escolha_routes.js";
import {router as interessadoRouter} from "./Routes/interessado_routes.js" ;


const app = express() 

app.use(express.urlencoded({extended: true}))

await db.sync() 
/*aqui estpu criando o banco com as models */

try {
    await db.authenticate()
    console.log('Conexão com o mysql estabelecida')
} catch (e) {
    console.log('Conexão com o mysql não estabelecida')

}
/*aqui para ter certeza que o banco vai funcionar */

app.use(bicicletaRouter)
app.use(escolhaRouter)
app.use(interessadoRouter)

app.listen(5000, () => console.log("Servidor funcionando em http://localhost:5000"))