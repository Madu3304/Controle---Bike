import { Sequelize } from "sequelize";
import db from "../Config/conf.js";

const Interessado = db.define('interessado',{
    id_intere: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    nome_intere: {
    type: Sequelize.STRING,
     },

     telefo_intere: {
        type: Sequelize.STRING,
     },

     endereco_intere: {
        type: Sequelize.STRING,
     },

     email_intere: {
        type: Sequelize.STRING,
     }
})

export {Interessado}