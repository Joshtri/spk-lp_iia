import db from "../config/dbConfig.js";
import { DataTypes } from "sequelize";
import Penilaian from "./penilaian.model.js"; // pastikan model penilaian sudah ada
import Periode from "./periode.model.js";


const Hasil_Perhitungan = db.define('Hasil_Perhitungan', {
    id_hasil_perhitungan: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nilai_preferensi: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    nama_napi: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    periodeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Periode,
          key: 'id_periode',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    status_kelulusan:{
        type: DataTypes.ENUM(
            "lulus",
            "tidak lulus",

        ),
        allowNull: false,
    }
});

Periode.hasMany(Hasil_Perhitungan,{foreignKey: `periodeId`})
Hasil_Perhitungan.belongsTo(Periode, {foreignKey: 'periodeId'})


export default Hasil_Perhitungan;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("hasil perhitungan table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();
