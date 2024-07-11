import { DataTypes, Sequelize } from "sequelize";
import db from "../config/dbConfig.js";


const User =  db.define("User",{

    id_user:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },

    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nama_lengkap: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('wali pemasyarakatan','koordinator wali','kepala lapas'),
        defaultValue: 'wali pemasyarakatan',
        allowNull: false
    }


});


export default User;



// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("User table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();