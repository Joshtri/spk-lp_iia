import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import User from "./user.model.js";
import TindakPidana from "./pidana.model.js";

const Narapidana = db.define(
  "Narapidana",
  {
    id_narapidana: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nama_narapidana: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    umur: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    tempat_lahir: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alamat_lengkap: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    no_ktp: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    pendidikan_terakhir: {
      type: DataTypes.ENUM(
        "Belum/Tidak Pernah Sekolah",
        "Belum/Tidak Tamat SD/SDLB/MI/Paket A",
        "SD/SDLB/MI/Paket A",
        "SMP/SMPLB/MTs/Paket B",
        "SMA/SMLB/MA/SMK/MAK/paket C",
        "DI/DII/DIII",
        "DIV/S1",
        "S2",
        "S3"
      ),
      allowNull: false,
    },
    pekerjaan_semula: {
      type: DataTypes.ENUM(
        "Belum Bekerja",
        "Sudah Bekerja",
        "Mengurus Rumah Tangga",
        "Pelajar/Mahasiswa",
        "Pensiunan",
        "PNS",
        "POLRI",
        "TNI",
        "WIRASWASTA",
        "SWASTA",
        "Pegawai BUMN",
        "Pekerja Lepas",
        "Petani/peternak/pekebun",
        "Nelayan",
        "Industri",
        "Pengangguran"
      ),
      allowNull: false,
    },
    tindakPidanaId: {
      type: DataTypes.INTEGER,
      references: {
        model: TindakPidana,
        key: "id_tindak_pidana",
      },
      allowNull: false,
    },
    agama: {
      type: DataTypes.ENUM(
        "kristen protestan",
        "katholik",
        "islam",
        "hindu",
        "buddha"
      ),
      allowNull: false,
    },
    register: {
      type: DataTypes.ENUM(
        "hukuman mati",
        "hukuman seumur hidup",
        "B1 pidahan > 1 tahun < 3 tahun & 3 > keatas",
        "4 bulan < 1 tahun",
        "B2B 3 bulan kebawah",
        "B3/Subsider pidana pengganti denda"
      ),
      allowNull: false,
    },
    sisa_masa_tahanan: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    waliId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id_user",
      },
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Narapidana.belongsTo(User, {
  foreignKey: "waliId",
  onDelete: "CASCADE",
  as: "wali",
});
Narapidana.belongsTo(TindakPidana, {
  foreignKey: "tindakPidanaId",
  onDelete: "CASCADE",
});

export default Narapidana;

// Sync table
(async () => {
  try {
    await db.sync();
    console.log("Narapidana table has been updated.");
  } catch (error) {
    console.error("Unable to update the Narapidana table:", error);
  }
})();
