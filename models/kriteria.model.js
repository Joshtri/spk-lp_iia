import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";


const Kriteria = db.define('Kriteria',{
    id_kriteria:{
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull:false
    },
    nama_kriteria:{
        allowNull:false,
        type: DataTypes.STRING(50)
    },
    bobot_kriteria:{
        allowNull:false,
        type: DataTypes.STRING(10)
    },
    jenis_kriteria: {
        type: DataTypes.ENUM(
          "benefit",
          "cost",
        ),
        allowNull: false,
      },
});


export default Kriteria;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("Kriteria table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();