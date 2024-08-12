import { Sequelize } from "sequelize";
import db from "../Config/conf.js";

const Escolha = db.define('escolha',{
    id_escolha: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    data_escolha: {
        type: Sequelize.DATE,
    }
})

export {Escolha}