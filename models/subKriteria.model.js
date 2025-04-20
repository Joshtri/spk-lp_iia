import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Kriteria from "./kriteria.model.js";

const Sub_Kriteria = db.define('Sub_Kriteria', {
    id_sub_kriteria: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama_sub_kriteria: {
        allowNull: false,
        type: DataTypes.STRING(80)
    },
    kriteriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Kriteria,
            key: 'id_kriteria',
        },
        allowNull: false,
    },
    bobot_sub_kriteria: {
        allowNull: false,
        type: DataTypes.STRING(10)
    },
});


Kriteria.hasMany(Sub_Kriteria,{foreignKey: `kriteriaId`})
Sub_Kriteria.belongsTo(Kriteria, {foreignKey: 'kriteriaId'})
// Sub_Kriteria.belongsTo(Kriteria, {
//     foreignKey: 'kriteriaId', // foreignKey harus sesuai dengan yang ada di database
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
// });


export default Sub_Kriteria;

// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("Sub Kriteria table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();
