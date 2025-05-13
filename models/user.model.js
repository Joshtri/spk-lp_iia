import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const User = db.define(
  "User",
  {
    id_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_lengkap: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(
        "wali pemasyarakatan",
        "koordinator wali",
        "kepala lapas",
        "admin"
      ),
      defaultValue: "wali pemasyarakatan",
      allowNull: false,
    },
    koordinatorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "User", // pakai nama tabel sebagai string
        key: "id_user",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

// Self-referencing associations
User.hasMany(User, {
  foreignKey: "koordinatorId",
  as: "bawahan", // wali yang berada di bawah koordinator
});

User.belongsTo(User, {
  foreignKey: "koordinatorId",
  as: "koordinator", // koordinator dari wali ini
});

export default User;
    
// Sync table
(async () => {
  try {
    await db.sync();
    console.log("User table has been updated.");
  } catch (error) {
    console.error("Unable to update the User table:", error);
  }
})();
