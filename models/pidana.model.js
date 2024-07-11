import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";


const TindakPidana = db.define('Tindak_Pidana',{
    id_tindak_pidana:{
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull:false
    },
    jenis_tindak_pidana:{
        allowNull:false,
        type: DataTypes.STRING(50)
    },
    pasal_kuhp:{
        allowNull:false,
        type: DataTypes.STRING(50)
    }
});


export default TindakPidana;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("Tindak_Pidana table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();