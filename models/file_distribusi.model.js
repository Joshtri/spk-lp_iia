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
    ditujukan_ke_id: {
      type: DataTypes.INTEGER,
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
    // ✅ Tambahkan ini:
    koordinatorId: {
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
    tableName: "file_distribusi",
  }
);

// Relasi
User.hasMany(FileDistribusi, { foreignKey: "userId", as: "pengiriman" });
FileDistribusi.belongsTo(User, { foreignKey: "userId", as: "pengirim" });

User.hasMany(FileDistribusi, { foreignKey: "koordinatorId", as: "diterima" });
FileDistribusi.belongsTo(User, { foreignKey: "koordinatorId", as: "penerima" });

export default FileDistribusi;
