import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";


const Periode = db.define('Periode',{
    id_periode:{
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull:false
    },
    //semacam keterangan misal periode I
    periode_penilaian:{
        allowNull:false,
        type: DataTypes.STRING(50)
    },
    tahun_periode:{
        allowNull:false,
        type: DataTypes.STRING(50)
    }
    

});


export default Periode;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("Periode table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();