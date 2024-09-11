import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Kriteria from "./kriteria.model.js";
import Narapidana from "./narapidana.model.js";
import Periode from "./periode.model.js";
import Sub_Kriteria from "./subKriteria.model.js";  // Import Sub_Kriteria model

const Penilaian = db.define("Penilaian", {
  id_penilaian: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  narapidanaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Narapidana,
      key: 'id_narapidana',
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  kriteriaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Kriteria,
      key: 'id_kriteria',
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  subKriteriaId: {  // Menambahkan foreign key subKriteriaId
    type: DataTypes.INTEGER,
    references: {
      model: Sub_Kriteria,
      key: 'id_sub_kriteria',
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  nilai_kriteria: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
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
}, {
  timestamps: true,
  tableName: 'penilaian',
});

// Define relationships
Penilaian.belongsTo(Narapidana, { foreignKey: 'narapidanaId' });
Narapidana.hasMany(Penilaian, { foreignKey: 'narapidanaId' });


Penilaian.belongsTo(Kriteria, { foreignKey: 'kriteriaId' });
Penilaian.belongsTo(Sub_Kriteria, { foreignKey: 'subKriteriaId' });  // Relasi ke Sub_Kriteria
Penilaian.belongsTo(Periode, { foreignKey: 'periodeId' });

export default Penilaian;

// Synchronize with the database
(async () => {
  try {
    await db.sync({ alter: true });  // 'alter' ensures existing tables are updated
    console.log("Penilaian table has been created or updated.");
  } catch (error) {
    console.error("Unable to create or update the table:", error);
  }
})();
