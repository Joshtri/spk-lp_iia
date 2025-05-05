import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import User from "./user.model.js";

const FileDistribusi = db.define(
  "FileDistribusi",
  {
    id_file: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    judul_file: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ditujukan_ke: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id_user",
      },
    },
  },
  {
    timestamps: true,
    tableName: "file_distribusi", // custom nama tabel
  }
);

// Relasi
User.hasMany(FileDistribusi, { foreignKey: "userId" });
FileDistribusi.belongsTo(User, { foreignKey: "userId" });

export default FileDistribusi;
