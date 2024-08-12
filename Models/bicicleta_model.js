import { Sequelize } from "sequelize";
import db from "../Config/conf.js";

const Bicicleta = db.define('bicicleta', {
    id_bicicleta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    quadro_bici: {
        type: Sequelize.STRING(200),
    },

    cor_bici: {
        type: Sequelize.STRING(200),
    }    

})

export {Bicicleta}